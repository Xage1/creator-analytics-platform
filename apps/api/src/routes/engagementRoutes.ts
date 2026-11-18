import { Router, type NextFunction, type Request, type Response } from "express";
import { Prisma, prisma } from "@creator/database";
import { z } from "zod";

const router = Router();

const periodTypes = ["DAILY", "WEEKLY", "MONTHLY"] as const;

const calculateSchema = z.object({
  creatorId: z.string().uuid("Invalid creator ID."),
  periodType: z.enum(periodTypes),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
}).refine(
  (data) => data.periodEnd >= data.periodStart,
  {
    message: "periodEnd must be later than or equal to periodStart.",
    path: ["periodEnd"],
  }
);

const listSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  creatorId: z.string().uuid().optional(),
  periodType: z.enum(periodTypes).optional(),
});

function serialize(value: unknown): unknown {
  if (typeof value === "bigint") {
    return value.toString();
  }

  if (value instanceof Prisma.Decimal) {
    return value.toString();
  }

  if (Array.isArray(value)) {
    return value.map(serialize);
  }

  if (value && typeof value === "object" && !(value instanceof Date)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, serialize(item)])
    );
  }

  return value;
}

function validateId(value: string): boolean {
  return z.string().uuid().safeParse(value).success;
}

function routeParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function sendValidationError(
  res: Response,
  error: z.ZodError
): Response {
  return res.status(400).json({
    success: false,
    message: "Validation failed.",
    errors: error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    })),
  });
}

function average(total: bigint, count: number): string {
  if (count === 0) return "0.0000";

  return (Number(total) / count).toFixed(4);
}

/**
 * Calculate and persist analytics for one creator and reporting window.
 *
 * Each post contributes only its latest available metric snapshot
 * captured on or before periodEnd.
 */
router.post(
  "/calculate",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = calculateSchema.safeParse(req.body);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const { creatorId, periodType, periodStart, periodEnd } = parsed.data;

      const creator = await prisma.creator.findUnique({
        where: { id: creatorId },
        select: {
          id: true,
          username: true,
          displayName: true,
          isActive: true,
        },
      });

      if (!creator) {
        return res.status(404).json({
          success: false,
          message: "Creator not found.",
        });
      }

      if (!creator.isActive) {
        return res.status(400).json({
          success: false,
          message: "Cannot calculate analytics for an inactive creator.",
        });
      }

      // Count all posts published during the reporting window.
      const totalPosts = await prisma.post.count({
        where: {
          creatorId,
          publishedAt: {
            gte: periodStart,
            lte: periodEnd,
          },
        },
      });

      // Fetch snapshots for posts published during this window.
      // Newest snapshots come first, so the first snapshot encountered
      // for each post is the one used in the aggregation.
      const snapshots = await prisma.metricSnapshot.findMany({
        where: {
          creatorId,
          postId: { not: null },
          capturedAt: { lte: periodEnd },
          post: {
            is: {
              publishedAt: {
                gte: periodStart,
                lte: periodEnd,
              },
            },
          },
        },
        orderBy: {
          capturedAt: "desc",
        },
        select: {
          postId: true,
          totalLikes: true,
          totalComments: true,
          totalViews: true,
          totalShares: true,
          engagementRate: true,
        },
      });

      const latestSnapshotByPost = new Map<
        string,
        (typeof snapshots)[number]
      >();

      for (const snapshot of snapshots) {
        if (snapshot.postId && !latestSnapshotByPost.has(snapshot.postId)) {
          latestSnapshotByPost.set(snapshot.postId, snapshot);
        }
      }

      let totalLikes = BigInt(0);
      let totalComments = BigInt(0);
      let totalViews = BigInt(0);
      let totalShares = BigInt(0);

      let engagementRateTotal = 0;
      let engagementRateCount = 0;

      for (const snapshot of latestSnapshotByPost.values()) {
        totalLikes += snapshot.totalLikes ?? BigInt(0);
        totalComments += snapshot.totalComments ?? BigInt(0);
        totalViews += snapshot.totalViews ?? BigInt(0);
        totalShares += snapshot.totalShares ?? BigInt(0);

        if (snapshot.engagementRate !== null) {
          engagementRateTotal += Number(snapshot.engagementRate);
          engagementRateCount += 1;
        }
      }

      const averageEngagementRate =
        engagementRateCount > 0
          ? (engagementRateTotal / engagementRateCount).toFixed(4)
          : "0.0000";

      const stats = await prisma.engagementStats.upsert({
        where: {
          creatorId_periodType_periodStart: {
            creatorId,
            periodType,
            periodStart,
          },
        },
        create: {
          creatorId,
          periodType,
          periodStart,
          periodEnd,
          totalPosts,
          totalLikes,
          totalComments,
          totalViews,
          totalShares,
          averageLikes: average(totalLikes, totalPosts),
          averageComments: average(totalComments, totalPosts),
          averageViews: average(totalViews, totalPosts),
          averageEngagementRate,
          calculatedAt: new Date(),
        },
        update: {
          periodEnd,
          totalPosts,
          totalLikes,
          totalComments,
          totalViews,
          totalShares,
          averageLikes: average(totalLikes, totalPosts),
          averageComments: average(totalComments, totalPosts),
          averageViews: average(totalViews, totalPosts),
          averageEngagementRate,
          calculatedAt: new Date(),
        },
        include: {
          creator: {
            select: {
              id: true,
              username: true,
              displayName: true,
              platform: {
                select: {
                  id: true,
                  name: true,
                  slug: true,
                },
              },
            },
          },
        },
      });

      return res.status(200).json({
        success: true,
        message: "Engagement analytics calculated successfully.",
        data: serialize(stats),
        aggregation: {
          postsPublishedInPeriod: totalPosts,
          postsWithMetricSnapshots: latestSnapshotByPost.size,
          snapshotSelection: "Latest snapshot per post before period end.",
        },
      });
    } catch (error) {
      return next(error);
    }
  }
);

/**
 * List persisted engagement analytics.
 */
router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = listSchema.safeParse(req.query);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const { page, limit, creatorId, periodType } = parsed.data;

      const where: Prisma.EngagementStatsWhereInput = {
        ...(creatorId ? { creatorId } : {}),
        ...(periodType ? { periodType } : {}),
      };

      const [records, total] = await Promise.all([
        prisma.engagementStats.findMany({
          where,
          skip: (page - 1) * limit,
          take: limit,
          orderBy: [
            { periodStart: "desc" },
            { calculatedAt: "desc" },
          ],
          include: {
            creator: {
              select: {
                id: true,
                username: true,
                displayName: true,
                platform: {
                  select: {
                    id: true,
                    name: true,
                    slug: true,
                  },
                },
              },
            },
          },
        }),
        prisma.engagementStats.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        success: true,
        data: serialize(records),
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      });
    } catch (error) {
      return next(error);
    }
  }
);

/**
 * Get analytics history for one creator.
 */
router.get(
  "/creator/:creatorId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const creatorId = routeParam(req.params.creatorId);

      if (!validateId(creatorId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid creator ID.",
        });
      }

      const parsed = listSchema.safeParse(req.query);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const { page, limit, periodType } = parsed.data;

      const creator = await prisma.creator.findUnique({
        where: { id: creatorId },
        select: {
          id: true,
          username: true,
          displayName: true,
        },
      });

      if (!creator) {
        return res.status(404).json({
          success: false,
          message: "Creator not found.",
        });
      }

      const where: Prisma.EngagementStatsWhereInput = {
        creatorId,
        ...(periodType ? { periodType } : {}),
      };

      const [records, total] = await Promise.all([
        prisma.engagementStats.findMany({
          where,
          skip: (page - 1) * limit,
          take: limit,
          orderBy: {
            periodStart: "desc",
          },
        }),
        prisma.engagementStats.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        success: true,
        creator,
        data: serialize(records),
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      });
    } catch (error) {
      return next(error);
    }
  }
);

/**
 * Get one persisted analytics record.
 */
router.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = routeParam(req.params.id);

      if (!validateId(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid analytics record ID.",
        });
      }

      const record = await prisma.engagementStats.findUnique({
        where: { id },
        include: {
          creator: {
            select: {
              id: true,
              username: true,
              displayName: true,
              platform: {
                select: {
                  id: true,
                  name: true,
                  slug: true,
                },
              },
            },
          },
        },
      });

      if (!record) {
        return res.status(404).json({
          success: false,
          message: "Engagement analytics record not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: serialize(record),
      });
    } catch (error) {
      return next(error);
    }
  }
);

export default router;
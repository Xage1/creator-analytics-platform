import { Router, type NextFunction, type Request, type Response } from "express";
import { Prisma, prisma } from "@creator/database";
import { z } from "zod";

const router = Router();

const metricTypes = [
  "followerCount",
  "followingCount",
  "postCount",
  "totalLikes",
  "totalComments",
  "totalViews",
  "totalShares",
] as const;

const nonNegativeBigInt = z
  .union([
    z.string().regex(/^\d+$/, "Must be a non-negative integer."),
    z.number().int().nonnegative().max(Number.MAX_SAFE_INTEGER),
  ])
  .nullable()
  .optional();

const createMetricSchema = z.object({
  creatorId: z.string().uuid(),
  postId: z.string().uuid().nullable().optional(),

  followerCount: nonNegativeBigInt,
  followingCount: nonNegativeBigInt,
  postCount: nonNegativeBigInt,

  totalLikes: nonNegativeBigInt,
  totalComments: nonNegativeBigInt,
  totalViews: nonNegativeBigInt,
  totalShares: nonNegativeBigInt,

  engagementRate: z
    .union([z.number(), z.string()])
    .pipe(
      z.coerce.number().finite().min(0).max(9999.9999),
    )
    .nullable()
    .optional(),

  capturedAt: z.coerce.date().optional(),
  source: z.string().trim().min(1).max(100).nullable().optional(),
  rawMetrics: z.record(z.string(), z.unknown()).nullable().optional(),
});

const listMetricsSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  creatorId: z.string().uuid().optional(),
  postId: z.string().uuid().optional(),
  capturedFrom: z.coerce.date().optional(),
  capturedTo: z.coerce.date().optional(),
}).refine(
  (data) =>
    !data.capturedFrom ||
    !data.capturedTo ||
    data.capturedTo >= data.capturedFrom,
  {
    message: "capturedTo must be later than or equal to capturedFrom.",
    path: ["capturedTo"],
  },
);

type MetricCreateInput = z.infer<typeof createMetricSchema>;

function toBigInt(
  value: string | number | bigint | null | undefined,
): bigint | null | undefined {
  if (value === undefined || value === null) {
    return value;
  }

  return BigInt(value);
}

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
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        serialize(nestedValue),
      ]),
    );
  }

  return value;
}

function validateId(id: string): boolean {
  return z.string().uuid().safeParse(id).success;
}

function sendValidationError(
  res: Response,
  error: z.ZodError,
) {
  return res.status(400).json({
    success: false,
    message: "Validation failed.",
    errors: error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    })),
  });
}

function buildMetricData(data: MetricCreateInput) {
  return {
    creatorId: data.creatorId,
    postId: data.postId ?? null,

    followerCount: toBigInt(data.followerCount),
    followingCount: toBigInt(data.followingCount),
    postCount: toBigInt(data.postCount),

    totalLikes: toBigInt(data.totalLikes),
    totalComments: toBigInt(data.totalComments),
    totalViews: toBigInt(data.totalViews),
    totalShares: toBigInt(data.totalShares),

    engagementRate:
      data.engagementRate === undefined || data.engagementRate === null
        ? null
        : new Prisma.Decimal(data.engagementRate),

    capturedAt: data.capturedAt,
    source: data.source ?? null,
    rawMetrics:
      data.rawMetrics === undefined || data.rawMetrics === null
        ? Prisma.DbNull
        : (data.rawMetrics as Prisma.InputJsonValue),
  };
}

/**
 * POST /api/metrics
 * Record a creator-level or post-level historical metric snapshot.
 */
router.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = createMetricSchema.safeParse(req.body);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const data = parsed.data;

      const creator = await prisma.creator.findUnique({
        where: { id: data.creatorId },
        select: {
          id: true,
          isActive: true,
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
          message: "Metrics cannot be collected for an inactive creator.",
        });
      }

      if (data.postId) {
        const post = await prisma.post.findUnique({
          where: { id: data.postId },
          select: {
            id: true,
            creatorId: true,
          },
        });

        if (!post) {
          return res.status(404).json({
            success: false,
            message: "Post not found.",
          });
        }

        if (post.creatorId !== data.creatorId) {
          return res.status(400).json({
            success: false,
            message: "The selected post does not belong to the supplied creator.",
          });
        }
      }

      const snapshot = await prisma.metricSnapshot.create({
        data: buildMetricData(data),
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
          post: {
            select: {
              id: true,
              externalId: true,
              type: true,
              postUrl: true,
              publishedAt: true,
            },
          },
        },
      });

      return res.status(201).json({
        success: true,
        message: "Metric snapshot recorded successfully.",
        data: serialize(snapshot),
      });
    } catch (error) {
      return next(error);
    }
  },
);

/**
 * GET /api/metrics
 * Paginated snapshot listing with optional filters.
 */
router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = listMetricsSchema.safeParse(req.query);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const {
        page,
        limit,
        creatorId,
        postId,
        capturedFrom,
        capturedTo,
      } = parsed.data;

      const where: Prisma.MetricSnapshotWhereInput = {
        ...(creatorId ? { creatorId } : {}),
        ...(postId ? { postId } : {}),
        ...(capturedFrom || capturedTo
          ? {
              capturedAt: {
                ...(capturedFrom ? { gte: capturedFrom } : {}),
                ...(capturedTo ? { lte: capturedTo } : {}),
              },
            }
          : {}),
      };

      const [snapshots, total] = await prisma.$transaction([
        prisma.metricSnapshot.findMany({
          where,
          skip: (page - 1) * limit,
          take: limit,
          orderBy: { capturedAt: "desc" },
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
            post: {
              select: {
                id: true,
                externalId: true,
                type: true,
              },
            },
          },
        }),
        prisma.metricSnapshot.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        success: true,
        data: serialize(snapshots),
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
  },
);

/**
 * GET /api/metrics/creator/:creatorId
 * Retrieve a creator's historical metric snapshots.
 */
router.get(
  "/creator/:creatorId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const creatorId = Array.isArray(req.params.creatorId) ? req.params.creatorId[0] : req.params.creatorId;

      if (!validateId(creatorId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid creator ID.",
        });
      }

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

      const parsed = listMetricsSchema.safeParse({
        ...req.query,
        creatorId,
      });

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const { page, limit, capturedFrom, capturedTo } = parsed.data;

      const where: Prisma.MetricSnapshotWhereInput = {
        creatorId,
        postId: null,
        ...(capturedFrom || capturedTo
          ? {
              capturedAt: {
                ...(capturedFrom ? { gte: capturedFrom } : {}),
                ...(capturedTo ? { lte: capturedTo } : {}),
              },
            }
          : {}),
      };

      const [snapshots, total] = await prisma.$transaction([
        prisma.metricSnapshot.findMany({
          where,
          skip: (page - 1) * limit,
          take: limit,
          orderBy: { capturedAt: "desc" },
        }),
        prisma.metricSnapshot.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        success: true,
        creator,
        data: serialize(snapshots),
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
  },
);

/**
 * GET /api/metrics/post/:postId
 * Retrieve historical metric snapshots for a specific post.
 */
router.get(
  "/post/:postId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = Array.isArray(req.params.postId) ? req.params.postId[0] : req.params.postId;

      if (!validateId(postId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid post ID.",
        });
      }

      const post = await prisma.post.findUnique({
        where: { id: postId },
        select: {
          id: true,
          externalId: true,
          type: true,
          creatorId: true,
        },
      });

      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found.",
        });
      }

      const parsed = listMetricsSchema.safeParse({
        ...req.query,
        postId,
      });

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const { page, limit, capturedFrom, capturedTo } = parsed.data;

      const where: Prisma.MetricSnapshotWhereInput = {
        postId,
        ...(capturedFrom || capturedTo
          ? {
              capturedAt: {
                ...(capturedFrom ? { gte: capturedFrom } : {}),
                ...(capturedTo ? { lte: capturedTo } : {}),
              },
            }
          : {}),
      };

      const [snapshots, total] = await prisma.$transaction([
        prisma.metricSnapshot.findMany({
          where,
          skip: (page - 1) * limit,
          take: limit,
          orderBy: { capturedAt: "desc" },
        }),
        prisma.metricSnapshot.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        success: true,
        post,
        data: serialize(snapshots),
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
  },
);

/**
 * GET /api/metrics/:id
 * Retrieve one metric snapshot.
 */
router.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

      if (!validateId(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid metric snapshot ID.",
        });
      }

      const snapshot = await prisma.metricSnapshot.findUnique({
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
          post: {
            select: {
              id: true,
              externalId: true,
              type: true,
              postUrl: true,
              publishedAt: true,
            },
          },
        },
      });

      if (!snapshot) {
        return res.status(404).json({
          success: false,
          message: "Metric snapshot not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: serialize(snapshot),
      });
    } catch (error) {
      return next(error);
    }
  },
);

export default router;
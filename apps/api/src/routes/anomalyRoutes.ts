
import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { Prisma, prisma } from "@creator/database";
import { z } from "zod";

const router = Router();

const severityValues = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;
const statusValues = ["OPEN", "ACKNOWLEDGED", "RESOLVED", "IGNORED"] as const;

const metricNames = [
  "followerCount",
  "followingCount",
  "postCount",
  "totalLikes",
  "totalComments",
  "totalViews",
  "totalShares",
  "engagementRate",
] as const;

type MetricName = (typeof metricNames)[number];

const detectSchema = z.object({
  creatorId: z.string().uuid("Invalid creator ID."),
  thresholdPercent: z.coerce.number().min(1).max(1000).default(30),
  lookbackDays: z.coerce.number().int().min(1).max(365).default(30),
  metrics: z.array(z.enum(metricNames)).min(1).default([...metricNames]),
});

const listSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  creatorId: z.string().uuid().optional(),
  postId: z.string().uuid().optional(),
  severity: z.enum(severityValues).optional(),
  status: z.enum(statusValues).optional(),
  metricName: z.enum(metricNames).optional(),
  eventType: z.string().trim().min(1).max(100).optional(),
  detectedFrom: z.coerce.date().optional(),
  detectedTo: z.coerce.date().optional(),
}).refine(
  (data) =>
    !data.detectedFrom ||
    !data.detectedTo ||
    data.detectedTo >= data.detectedFrom,
  {
    message: "detectedTo must be later than or equal to detectedFrom.",
    path: ["detectedTo"],
  }
);

const updateStatusSchema = z.object({
  status: z.enum(statusValues),
});

function routeParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
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
      Object.entries(value).map(([key, item]) => [key, serialize(item)])
    );
  }

  return value;
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

function getMetricValue(
  snapshot: {
    followerCount: bigint | null;
    followingCount: bigint | null;
    postCount: bigint | null;
    totalLikes: bigint | null;
    totalComments: bigint | null;
    totalViews: bigint | null;
    totalShares: bigint | null;
    engagementRate: Prisma.Decimal | null;
  },
  metricName: MetricName
): number | null {
  let value: bigint | Prisma.Decimal | null;

  switch (metricName) {
    case "followerCount":
      value = snapshot.followerCount;
      break;
    case "followingCount":
      value = snapshot.followingCount;
      break;
    case "postCount":
      value = snapshot.postCount;
      break;
    case "totalLikes":
      value = snapshot.totalLikes;
      break;
    case "totalComments":
      value = snapshot.totalComments;
      break;
    case "totalViews":
      value = snapshot.totalViews;
      break;
    case "totalShares":
      value = snapshot.totalShares;
      break;
    case "engagementRate":
      value = snapshot.engagementRate;
      break;
  }

  if (value === null) {
    return null;
  }

  const numericValue = Number(value.toString());

  return Number.isFinite(numericValue) ? numericValue : null;
}

function determineSeverity(changeMagnitude: number) {
  if (changeMagnitude >= 200) return "CRITICAL" as const;
  if (changeMagnitude >= 100) return "HIGH" as const;
  if (changeMagnitude >= 50) return "MEDIUM" as const;
  return "LOW" as const;
}

function getEventType(changePercent: number) {
  return changePercent > 0 ? "METRIC_INCREASE" : "METRIC_DECREASE";
}

/**
 * Detect metric anomalies for a creator.
 *
 * Compares the latest two available observations for each metric
 * at creator level and post level.
 */
router.post(
  "/detect",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = detectSchema.safeParse(req.body);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const {
        creatorId,
        thresholdPercent,
        lookbackDays,
        metrics,
      } = parsed.data;

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
          message: "Cannot detect anomalies for an inactive creator.",
        });
      }

      const since = new Date();
      since.setDate(since.getDate() - lookbackDays);

      const snapshots = await prisma.metricSnapshot.findMany({
        where: {
          creatorId,
          capturedAt: { gte: since },
        },
        orderBy: {
          capturedAt: "desc",
        },
        take: 5000,
        select: {
          id: true,
          creatorId: true,
          postId: true,
          followerCount: true,
          followingCount: true,
          postCount: true,
          totalLikes: true,
          totalComments: true,
          totalViews: true,
          totalShares: true,
          engagementRate: true,
          capturedAt: true,
        },
      });

      if (snapshots.length === 0) {
        return res.status(200).json({
          success: true,
          message: "No metric snapshots were found in the requested period.",
          creator,
          detection: {
            snapshotsExamined: 0,
            comparisonsMade: 0,
            anomaliesDetected: 0,
            newEvents: 0,
            existingEvents: 0,
            thresholdPercent,
            lookbackDays,
          },
          data: [],
        });
      }

      type Snapshot = (typeof snapshots)[number];

      const history = new Map<string, Snapshot[]>();

      for (const snapshot of snapshots) {
        for (const metricName of metrics) {
          const value = getMetricValue(snapshot, metricName);

          if (value === null || value < 0) {
            continue;
          }

          const entityKey = snapshot.postId ?? "CREATOR";
          const key = `${entityKey}:${metricName}`;

          const observations = history.get(key) ?? [];
          observations.push(snapshot);
          history.set(key, observations);
        }
      }

      let comparisonsMade = 0;
      let anomaliesDetected = 0;
      let newEvents = 0;
      let existingEvents = 0;

      const detectedEvents: unknown[] = [];

      for (const [key, observations] of history.entries()) {
        // Snapshots are already ordered newest first.
        // Avoid comparing an observation with itself.
        const latest = observations[0];
        const previous = observations.find(
          (snapshot) => snapshot.id !== latest.id
        );

        if (!latest || !previous) {
          continue;
        }

        const metricName = key.substring(key.lastIndexOf(":") + 1) as MetricName;

        const previousValue = getMetricValue(previous, metricName);
        const observedValue = getMetricValue(latest, metricName);

        if (
          previousValue === null ||
          observedValue === null ||
          previousValue <= 0
        ) {
          continue;
        }

        comparisonsMade += 1;

        const changePercent =
          ((observedValue - previousValue) / Math.abs(previousValue)) * 100;

        const magnitude = Math.abs(changePercent);

        if (
          !Number.isFinite(changePercent) ||
          magnitude < thresholdPercent
        ) {
          continue;
        }

        anomaliesDetected += 1;

        const eventType = getEventType(changePercent);
        const severity = determineSeverity(magnitude);

        const description =
          `${metricName} ${changePercent > 0 ? "increased" : "decreased"} ` +
          `by ${magnitude.toFixed(2)}% from ${previousValue} to ${observedValue}.`;

        // Use the observation timestamp as the event timestamp.
        // This makes repeated detection runs idempotent for the same
        // creator, entity, metric, direction, and snapshot.
        const existingEvent = await prisma.anomalyEvent.findFirst({
          where: {
            creatorId,
            postId: latest.postId,
            eventType,
            metricName,
            detectedAt: latest.capturedAt,
          },
        });

        if (existingEvent) {
          existingEvents += 1;
          detectedEvents.push(existingEvent);
          continue;
        }

        const event = await prisma.anomalyEvent.create({
          data: {
            creatorId,
            postId: latest.postId,
            eventType,
            severity,
            status: "OPEN",
            metricName,
            expectedValue: previousValue.toString(),
            observedValue: observedValue.toString(),
            changePercent: changePercent.toFixed(4),
            description,
            detectedAt: latest.capturedAt,
            metadata: {
              baselineSnapshotId: previous.id,
              observedSnapshotId: latest.id,
              baselineCapturedAt: previous.capturedAt.toISOString(),
              observedCapturedAt: latest.capturedAt.toISOString(),
              baselineValue: previousValue.toString(),
              observedValue: observedValue.toString(),
              thresholdPercent,
              lookbackDays,
              entityType: latest.postId ? "POST" : "CREATOR",
            },
          },
        });

        newEvents += 1;
        detectedEvents.push(event);
      }

      return res.status(200).json({
        success: true,
        message: "Anomaly detection completed successfully.",
        creator,
        detection: {
          snapshotsExamined: snapshots.length,
          comparisonsMade,
          anomaliesDetected,
          newEvents,
          existingEvents,
          thresholdPercent,
          lookbackDays,
          metricsChecked: metrics,
          snapshotLimit: 5000,
        },
        data: serialize(detectedEvents),
      });
    } catch (error) {
      return next(error);
    }
  }
);

/**
 * List anomaly events with pagination and filters.
 */
router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = listSchema.safeParse(req.query);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const {
        page,
        limit,
        creatorId,
        postId,
        severity,
        status,
        metricName,
        eventType,
        detectedFrom,
        detectedTo,
      } = parsed.data;

      const where: Prisma.AnomalyEventWhereInput = {
        ...(creatorId ? { creatorId } : {}),
        ...(postId ? { postId } : {}),
        ...(severity ? { severity } : {}),
        ...(status ? { status } : {}),
        ...(metricName ? { metricName } : {}),
        ...(eventType ? { eventType } : {}),
        ...(detectedFrom || detectedTo
          ? {
              detectedAt: {
                ...(detectedFrom ? { gte: detectedFrom } : {}),
                ...(detectedTo ? { lte: detectedTo } : {}),
              },
            }
          : {}),
      };

      const [events, total] = await Promise.all([
        prisma.anomalyEvent.findMany({
          where,
          skip: (page - 1) * limit,
          take: limit,
          orderBy: {
            detectedAt: "desc",
          },
          include: {
            creator: {
              select: {
                id: true,
                username: true,
                displayName: true,
              },
            },
            post: {
              select: {
                id: true,
                externalId: true,
                type: true,
                content: true,
                postUrl: true,
              },
            },
          },
        }),
        prisma.anomalyEvent.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        success: true,
        data: serialize(events),
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
 * Get anomaly history for one creator.
 */
router.get(
  "/creator/:creatorId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const creatorId = routeParam(req.params.creatorId);

      if (!z.string().uuid().safeParse(creatorId).success) {
        return res.status(400).json({
          success: false,
          message: "Invalid creator ID.",
        });
      }

      const parsed = listSchema.safeParse(req.query);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const { page, limit, severity, status, metricName } = parsed.data;

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

      const where: Prisma.AnomalyEventWhereInput = {
        creatorId,
        ...(severity ? { severity } : {}),
        ...(status ? { status } : {}),
        ...(metricName ? { metricName } : {}),
      };

      const [events, total] = await Promise.all([
        prisma.anomalyEvent.findMany({
          where,
          skip: (page - 1) * limit,
          take: limit,
          orderBy: {
            detectedAt: "desc",
          },
          include: {
            post: {
              select: {
                id: true,
                externalId: true,
                type: true,
                content: true,
              },
            },
          },
        }),
        prisma.anomalyEvent.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      return res.status(200).json({
        success: true,
        creator,
        data: serialize(events),
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
 * Get one anomaly event.
 */
router.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = routeParam(req.params.id);

      if (!z.string().uuid().safeParse(id).success) {
        return res.status(400).json({
          success: false,
          message: "Invalid anomaly event ID.",
        });
      }

      const event = await prisma.anomalyEvent.findUnique({
        where: { id },
        include: {
          creator: {
            select: {
              id: true,
              username: true,
              displayName: true,
            },
          },
          post: {
            select: {
              id: true,
              externalId: true,
              type: true,
              content: true,
              postUrl: true,
            },
          },
        },
      });

      if (!event) {
        return res.status(404).json({
          success: false,
          message: "Anomaly event not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: serialize(event),
      });
    } catch (error) {
      return next(error);
    }
  }
);

/**
 * Update the lifecycle status of an anomaly event.
 */
router.patch(
  "/:id/status",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = routeParam(req.params.id);

      if (!z.string().uuid().safeParse(id).success) {
        return res.status(400).json({
          success: false,
          message: "Invalid anomaly event ID.",
        });
      }

      const parsed = updateStatusSchema.safeParse(req.body);

      if (!parsed.success) {
        return sendValidationError(res, parsed.error);
      }

      const existing = await prisma.anomalyEvent.findUnique({
        where: { id },
      });

      if (!existing) {
        return res.status(404).json({
          success: false,
          message: "Anomaly event not found.",
        });
      }

      const { status } = parsed.data;

      const updated = await prisma.anomalyEvent.update({
        where: { id },
        data: {
          status,
          resolvedAt: status === "RESOLVED" ? new Date() : null,
        },
        include: {
          creator: {
            select: {
              id: true,
              username: true,
              displayName: true,
            },
          },
          post: {
            select: {
              id: true,
              externalId: true,
              type: true,
              content: true,
            },
          },
        },
      });

      return res.status(200).json({
        success: true,
        message: `Anomaly event ${status.toLowerCase()} successfully.`,
        data: serialize(updated),
      });
    } catch (error) {
      return next(error);
    }
  }
);

export default router;

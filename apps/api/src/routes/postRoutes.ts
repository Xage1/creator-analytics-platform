import { Router } from "express";
import { z } from "zod";
import { prisma } from "@creator/database";

const router = Router();

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

const postTypes = [
  "TEXT",
  "IMAGE",
  "VIDEO",
  "CAROUSEL",
  "STORY",
  "LIVE",
  "OTHER",
] as const;

const nullableUrl = z
  .string()
  .trim()
  .url()
  .max(500)
  .nullable()
  .optional();

const createPostSchema = z.object({
  creatorId: z.string().uuid(),
  externalId: z.string().trim().min(1).max(191),
  type: z.enum(postTypes).optional(),
  content: z.string().max(50000).nullable().optional(),
  postUrl: nullableUrl,
  thumbnailUrl: nullableUrl,
  publishedAt: z.coerce.date().nullable().optional(),
}).strict();

const updatePostSchema = createPostSchema
  .omit({
    externalId: true,
  })
  .partial()
  .refine(
    (data) => Object.keys(data).length > 0,
    { message: "At least one field must be supplied." }
  );

const listPostsSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  creatorId: z.string().uuid().optional(),
  type: z.enum(postTypes).optional(),
  search: z.string().trim().max(250).optional(),
  publishedFrom: z.coerce.date().optional(),
  publishedTo: z.coerce.date().optional(),
}).superRefine((data, context) => {
  if (
    data.publishedFrom &&
    data.publishedTo &&
    data.publishedFrom > data.publishedTo
  ) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["publishedTo"],
      message: "publishedTo must be later than or equal to publishedFrom.",
    });
  }
});

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function validateId(value: unknown): string | null {
  const result = z.string().uuid().safeParse(value);
  return result.success ? result.data : null;
}

function sendValidationError(res: any, error: z.ZodError) {
  return res.status(400).json({
    success: false,
    message: "Validation failed.",
    errors: error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    })),
  });
}

const postInclude = {
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
  _count: {
    select: {
      metricSnapshots: true,
      sentimentScores: true,
      anomalyEvents: true,
    },
  },
};

/* -------------------------------------------------------------------------- */
/* GET /api/posts                                                             */
/* List posts with pagination, search and filters                            */
/* -------------------------------------------------------------------------- */

router.get("/", async (req, res, next) => {
  try {
    const parsed = listPostsSchema.safeParse(req.query);

    if (!parsed.success) {
      return sendValidationError(res, parsed.error);
    }

    const {
      page,
      limit,
      creatorId,
      type,
      search,
      publishedFrom,
      publishedTo,
    } = parsed.data;

    const where: any = {};

    if (creatorId) where.creatorId = creatorId;
    if (type) where.type = type;

    if (search) {
      where.OR = [
        {
          externalId: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    if (publishedFrom || publishedTo) {
      where.publishedAt = {};

      if (publishedFrom) {
        where.publishedAt.gte = publishedFrom;
      }

      if (publishedTo) {
        where.publishedAt.lte = publishedTo;
      }
    }

    const skip = (page - 1) * limit;

    const [posts, total] = await prisma.$transaction([
      prisma.post.findMany({
        where,
        skip,
        take: limit,
        orderBy: [
          { publishedAt: "desc" },
          { createdAt: "desc" },
        ],
        include: postInclude,
      }),
      prisma.post.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      success: true,
      data: posts,
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
});

/* -------------------------------------------------------------------------- */
/* POST /api/posts                                                            */
/* Register a post for an existing creator                                    */
/* -------------------------------------------------------------------------- */

router.post("/", async (req, res, next) => {
  try {
    const parsed = createPostSchema.safeParse(req.body);

    if (!parsed.success) {
      return sendValidationError(res, parsed.error);
    }

    const input = parsed.data;

    const creator = await prisma.creator.findFirst({
      where: {
        id: input.creatorId,
        isActive: true,
      },
      select: {
        id: true,
        username: true,
        displayName: true,
      },
    });

    if (!creator) {
      return res.status(400).json({
        success: false,
        message: "The selected creator does not exist or is inactive.",
      });
    }

    const post = await prisma.post.create({
      data: input,
      include: postInclude,
    });

    return res.status(201).json({
      success: true,
      message: "Post registered successfully.",
      data: post,
    });
  } catch (error) {
    return next(error);
  }
});

/* -------------------------------------------------------------------------- */
/* GET /api/posts/:id                                                         */
/* Retrieve a post and its creator information                                */
/* -------------------------------------------------------------------------- */

router.get("/:id", async (req, res, next) => {
  try {
    const id = validateId(req.params.id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Invalid post ID. A valid UUID is required.",
      });
    }

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        ...postInclude,
        metricSnapshots: {
          orderBy: {
            capturedAt: "desc",
          },
          take: 10,
        },
        sentimentScores: {
          orderBy: {
            analyzedAt: "desc",
          },
          take: 10,
        },
        anomalyEvents: {
          orderBy: {
            detectedAt: "desc",
          },
          take: 10,
        },
      },
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return next(error);
  }
});

/* -------------------------------------------------------------------------- */
/* PATCH /api/posts/:id                                                       */
/* Update post metadata                                                      */
/* -------------------------------------------------------------------------- */

router.patch("/:id", async (req, res, next) => {
  try {
    const id = validateId(req.params.id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Invalid post ID. A valid UUID is required.",
      });
    }

    const parsed = updatePostSchema.safeParse(req.body);

    if (!parsed.success) {
      return sendValidationError(res, parsed.error);
    }

    const existing = await prisma.post.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }

    if (parsed.data.creatorId) {
      const creator = await prisma.creator.findFirst({
        where: {
          id: parsed.data.creatorId,
          isActive: true,
        },
        select: { id: true },
      });

      if (!creator) {
        return res.status(400).json({
          success: false,
          message: "The selected creator does not exist or is inactive.",
        });
      }
    }

    const post = await prisma.post.update({
      where: { id },
      data: parsed.data,
      include: postInclude,
    });

    return res.status(200).json({
      success: true,
      message: "Post updated successfully.",
      data: post,
    });
  } catch (error) {
    return next(error);
  }
});

/* -------------------------------------------------------------------------- */
/* DELETE /api/posts/:id                                                      */
/* Delete only when no analytics history is attached                         */
/* -------------------------------------------------------------------------- */

router.delete("/:id", async (req, res, next) => {
  try {
    const id = validateId(req.params.id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Invalid post ID. A valid UUID is required.",
      });
    }

    const result = await prisma.$transaction(async (tx) => {
      const existing = await tx.post.findUnique({
        where: { id },
        include: {
          _count: {
            select: {
              metricSnapshots: true,
              sentimentScores: true,
              anomalyEvents: true,
            },
          },
        },
      });

      if (!existing) {
        return { kind: "missing" as const };
      }

      const historyCount =
        existing._count.metricSnapshots +
        existing._count.sentimentScores +
        existing._count.anomalyEvents;

      if (historyCount > 0) {
        return {
          kind: "has-history" as const,
          counts: existing._count,
        };
      }

      await tx.post.delete({
        where: { id },
      });

      return { kind: "deleted" as const };
    });

    if (result.kind === "missing") {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }

    if (result.kind === "has-history") {
      return res.status(409).json({
        success: false,
        message:
          "This post cannot be deleted because analytics history is attached to it.",
        data: result.counts,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully.",
    });
  } catch (error) {
    return next(error);
  }
});

export default router;
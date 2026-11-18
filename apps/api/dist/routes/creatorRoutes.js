"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const database_1 = require("@creator/database");
const router = (0, express_1.Router)();
/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */
const nullableUrl = zod_1.z
    .string()
    .trim()
    .url()
    .max(500)
    .nullable()
    .optional();
const createCreatorSchema = zod_1.z.object({
    platformId: zod_1.z.string().uuid(),
    externalId: zod_1.z.string().trim().min(1).max(191),
    username: zod_1.z.string().trim().max(100).nullable().optional(),
    displayName: zod_1.z.string().trim().max(150).nullable().optional(),
    profileUrl: nullableUrl,
    bio: zod_1.z.string().max(10000).nullable().optional(),
    avatarUrl: nullableUrl,
    isVerified: zod_1.z.boolean().optional(),
    isActive: zod_1.z.boolean().optional(),
}).strict();
const updateCreatorSchema = createCreatorSchema
    .partial()
    .refine((data) => Object.keys(data).length > 0, { message: "At least one field must be supplied." });
const listCreatorsSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    platformId: zod_1.z.string().uuid().optional(),
    search: zod_1.z.string().trim().max(150).optional(),
    isActive: zod_1.z.enum(["true", "false"])
        .transform((value) => value === "true")
        .optional(),
    isVerified: zod_1.z.enum(["true", "false"])
        .transform((value) => value === "true")
        .optional(),
});
/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */
function validateId(value) {
    const result = zod_1.z.string().uuid().safeParse(value);
    return result.success ? result.data : null;
}
function sendValidationError(res, error) {
    return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
        })),
    });
}
/* -------------------------------------------------------------------------- */
/* GET /api/creators                                                          */
/* List creators with pagination, search and filters                          */
/* -------------------------------------------------------------------------- */
router.get("/", async (req, res, next) => {
    try {
        const parsed = listCreatorsSchema.safeParse(req.query);
        if (!parsed.success) {
            return sendValidationError(res, parsed.error);
        }
        const { page, limit, platformId, search, isActive, isVerified, } = parsed.data;
        const where = {};
        if (platformId)
            where.platformId = platformId;
        if (isActive !== undefined)
            where.isActive = isActive;
        if (isVerified !== undefined)
            where.isVerified = isVerified;
        if (search) {
            where.OR = [
                {
                    username: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    displayName: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    externalId: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
            ];
        }
        const skip = (page - 1) * limit;
        const [creators, total] = await database_1.prisma.$transaction([
            database_1.prisma.creator.findMany({
                where,
                skip,
                take: limit,
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    platform: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                            logoUrl: true,
                        },
                    },
                    _count: {
                        select: {
                            posts: true,
                            metricSnapshots: true,
                            engagementStats: true,
                            anomalyEvents: true,
                        },
                    },
                },
            }),
            database_1.prisma.creator.count({ where }),
        ]);
        const totalPages = Math.ceil(total / limit);
        return res.status(200).json({
            success: true,
            data: creators,
            pagination: {
                page,
                limit,
                total,
                totalPages,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1,
            },
        });
    }
    catch (error) {
        return next(error);
    }
});
/* -------------------------------------------------------------------------- */
/* POST /api/creators                                                         */
/* Register a creator                                                        */
/* -------------------------------------------------------------------------- */
router.post("/", async (req, res, next) => {
    try {
        const parsed = createCreatorSchema.safeParse(req.body);
        if (!parsed.success) {
            return sendValidationError(res, parsed.error);
        }
        const input = parsed.data;
        const platform = await database_1.prisma.platform.findFirst({
            where: {
                id: input.platformId,
                isActive: true,
            },
            select: {
                id: true,
                name: true,
            },
        });
        if (!platform) {
            return res.status(400).json({
                success: false,
                message: "The selected platform does not exist or is inactive.",
            });
        }
        const creator = await database_1.prisma.creator.create({
            data: input,
            include: {
                platform: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        logoUrl: true,
                    },
                },
                _count: {
                    select: {
                        posts: true,
                        metricSnapshots: true,
                    },
                },
            },
        });
        return res.status(201).json({
            success: true,
            message: "Creator registered successfully.",
            data: creator,
        });
    }
    catch (error) {
        return next(error);
    }
});
/* -------------------------------------------------------------------------- */
/* GET /api/creators/:id                                                      */
/* Retrieve a creator profile and analytics summary                          */
/* -------------------------------------------------------------------------- */
router.get("/:id", async (req, res, next) => {
    try {
        const id = validateId(req.params.id);
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Invalid creator ID. A valid UUID is required.",
            });
        }
        const creator = await database_1.prisma.creator.findUnique({
            where: { id },
            include: {
                platform: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        baseUrl: true,
                        logoUrl: true,
                    },
                },
                posts: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 10,
                },
                _count: {
                    select: {
                        posts: true,
                        metricSnapshots: true,
                        engagementStats: true,
                        anomalyEvents: true,
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
        return res.status(200).json({
            success: true,
            data: creator,
        });
    }
    catch (error) {
        return next(error);
    }
});
/* -------------------------------------------------------------------------- */
/* PATCH /api/creators/:id                                                    */
/* Update creator information                                                 */
/* -------------------------------------------------------------------------- */
router.patch("/:id", async (req, res, next) => {
    try {
        const id = validateId(req.params.id);
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Invalid creator ID. A valid UUID is required.",
            });
        }
        const parsed = updateCreatorSchema.safeParse(req.body);
        if (!parsed.success) {
            return sendValidationError(res, parsed.error);
        }
        const existing = await database_1.prisma.creator.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!existing) {
            return res.status(404).json({
                success: false,
                message: "Creator not found.",
            });
        }
        if (parsed.data.platformId) {
            const platform = await database_1.prisma.platform.findFirst({
                where: {
                    id: parsed.data.platformId,
                    isActive: true,
                },
                select: { id: true },
            });
            if (!platform) {
                return res.status(400).json({
                    success: false,
                    message: "The selected platform does not exist or is inactive.",
                });
            }
        }
        const creator = await database_1.prisma.creator.update({
            where: { id },
            data: parsed.data,
            include: {
                platform: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        logoUrl: true,
                    },
                },
            },
        });
        return res.status(200).json({
            success: true,
            message: "Creator updated successfully.",
            data: creator,
        });
    }
    catch (error) {
        return next(error);
    }
});
/* -------------------------------------------------------------------------- */
/* DELETE /api/creators/:id                                                   */
/* Soft-delete: preserve analytics history                                   */
/* -------------------------------------------------------------------------- */
router.delete("/:id", async (req, res, next) => {
    try {
        const id = validateId(req.params.id);
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Invalid creator ID. A valid UUID is required.",
            });
        }
        const existing = await database_1.prisma.creator.findUnique({
            where: { id },
            select: {
                id: true,
                isActive: true,
            },
        });
        if (!existing) {
            return res.status(404).json({
                success: false,
                message: "Creator not found.",
            });
        }
        if (!existing.isActive) {
            return res.status(200).json({
                success: true,
                message: "Creator is already deactivated.",
            });
        }
        const creator = await database_1.prisma.creator.update({
            where: { id },
            data: {
                isActive: false,
            },
            select: {
                id: true,
                username: true,
                displayName: true,
                isActive: true,
            },
        });
        return res.status(200).json({
            success: true,
            message: "Creator deactivated successfully. Analytics history has been preserved.",
            data: creator,
        });
    }
    catch (error) {
        return next(error);
    }
});
exports.default = router;
//# sourceMappingURL=creatorRoutes.js.map
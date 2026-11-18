"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("@creator/database");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const periodTypes = ["DAILY", "WEEKLY", "MONTHLY"];
const calculateSchema = zod_1.z.object({
    creatorId: zod_1.z.string().uuid("Invalid creator ID."),
    periodType: zod_1.z.enum(periodTypes),
    periodStart: zod_1.z.coerce.date(),
    periodEnd: zod_1.z.coerce.date(),
}).refine((data) => data.periodEnd >= data.periodStart, {
    message: "periodEnd must be later than or equal to periodStart.",
    path: ["periodEnd"],
});
const listSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    creatorId: zod_1.z.string().uuid().optional(),
    periodType: zod_1.z.enum(periodTypes).optional(),
});
function serialize(value) {
    if (typeof value === "bigint") {
        return value.toString();
    }
    if (value instanceof database_1.Prisma.Decimal) {
        return value.toString();
    }
    if (Array.isArray(value)) {
        return value.map(serialize);
    }
    if (value && typeof value === "object" && !(value instanceof Date)) {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, serialize(item)]));
    }
    return value;
}
function validateId(value) {
    return zod_1.z.string().uuid().safeParse(value).success;
}
function routeParam(value) {
    return Array.isArray(value) ? value[0] ?? "" : value ?? "";
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
function average(total, count) {
    if (count === 0)
        return "0.0000";
    return (Number(total) / count).toFixed(4);
}
/**
 * Calculate and persist analytics for one creator and reporting window.
 *
 * Each post contributes only its latest available metric snapshot
 * captured on or before periodEnd.
 */
router.post("/calculate", async (req, res, next) => {
    try {
        const parsed = calculateSchema.safeParse(req.body);
        if (!parsed.success) {
            return sendValidationError(res, parsed.error);
        }
        const { creatorId, periodType, periodStart, periodEnd } = parsed.data;
        const creator = await database_1.prisma.creator.findUnique({
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
        const totalPosts = await database_1.prisma.post.count({
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
        const snapshots = await database_1.prisma.metricSnapshot.findMany({
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
        const latestSnapshotByPost = new Map();
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
        const averageEngagementRate = engagementRateCount > 0
            ? (engagementRateTotal / engagementRateCount).toFixed(4)
            : "0.0000";
        const stats = await database_1.prisma.engagementStats.upsert({
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
    }
    catch (error) {
        return next(error);
    }
});
/**
 * List persisted engagement analytics.
 */
router.get("/", async (req, res, next) => {
    try {
        const parsed = listSchema.safeParse(req.query);
        if (!parsed.success) {
            return sendValidationError(res, parsed.error);
        }
        const { page, limit, creatorId, periodType } = parsed.data;
        const where = {
            ...(creatorId ? { creatorId } : {}),
            ...(periodType ? { periodType } : {}),
        };
        const [records, total] = await Promise.all([
            database_1.prisma.engagementStats.findMany({
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
            database_1.prisma.engagementStats.count({ where }),
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
    }
    catch (error) {
        return next(error);
    }
});
/**
 * Get analytics history for one creator.
 */
router.get("/creator/:creatorId", async (req, res, next) => {
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
        const creator = await database_1.prisma.creator.findUnique({
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
        const where = {
            creatorId,
            ...(periodType ? { periodType } : {}),
        };
        const [records, total] = await Promise.all([
            database_1.prisma.engagementStats.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
                orderBy: {
                    periodStart: "desc",
                },
            }),
            database_1.prisma.engagementStats.count({ where }),
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
    }
    catch (error) {
        return next(error);
    }
});
/**
 * Get one persisted analytics record.
 */
router.get("/:id", async (req, res, next) => {
    try {
        const id = routeParam(req.params.id);
        if (!validateId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid analytics record ID.",
            });
        }
        const record = await database_1.prisma.engagementStats.findUnique({
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
    }
    catch (error) {
        return next(error);
    }
});
exports.default = router;
//# sourceMappingURL=engagementRoutes.js.map
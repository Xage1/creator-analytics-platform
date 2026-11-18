"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_1 = require("zod");
const database_1 = require("@creator/database");
const router = (0, express_1.Router)();
const createPlatformSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(2).max(100),
    slug: zod_1.z
        .string()
        .trim()
        .min(2)
        .max(100)
        .regex(/^[a-z0-9-]+$/, "Slug must contain lowercase letters, numbers and hyphens"),
    baseUrl: zod_1.z.string().url().max(255),
    description: zod_1.z.string().max(500).optional(),
    logoUrl: zod_1.z.string().url().max(255).optional(),
    supportsFollowers: zod_1.z.boolean().optional(),
    supportsLikes: zod_1.z.boolean().optional(),
    supportsComments: zod_1.z.boolean().optional(),
    supportsViews: zod_1.z.boolean().optional(),
    supportsShares: zod_1.z.boolean().optional(),
    isActive: zod_1.z.boolean().optional()
}).strict();
router.get("/", async (_req, res) => {
    const platforms = await database_1.prisma.platform.findMany({
        orderBy: { name: "asc" },
        include: {
            _count: {
                select: { creators: true }
            }
        }
    });
    res.json({
        success: true,
        data: platforms
    });
});
router.post("/", async (req, res) => {
    const input = createPlatformSchema.parse(req.body);
    const platform = await database_1.prisma.platform.create({
        data: input
    });
    res.status(201).json({
        success: true,
        message: "Platform created successfully.",
        data: platform
    });
});
exports.default = router;
//# sourceMappingURL=platformRoutes.js.map
import { Router } from "express";
import { z } from "zod";
import { prisma } from "@creator/database";

const router = Router();

const createPlatformSchema = z.object({
  name: z.string().trim().min(2).max(100),
  slug: z
    .string()
    .trim()
    .min(2)
    .max(100)
    .regex(/^[a-z0-9-]+$/, "Slug must contain lowercase letters, numbers and hyphens"),
  baseUrl: z.string().url().max(255),
  description: z.string().max(500).optional(),
  logoUrl: z.string().url().max(255).optional(),
  supportsFollowers: z.boolean().optional(),
  supportsLikes: z.boolean().optional(),
  supportsComments: z.boolean().optional(),
  supportsViews: z.boolean().optional(),
  supportsShares: z.boolean().optional(),
  isActive: z.boolean().optional()
}).strict();

router.get("/", async (_req, res) => {
  const platforms = await prisma.platform.findMany({
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

  const platform = await prisma.platform.create({
    data: input
  });

  res.status(201).json({
    success: true,
    message: "Platform created successfully.",
    data: platform
  });
});

export default router;
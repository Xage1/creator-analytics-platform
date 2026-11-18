
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { prisma } from "@creator/database";

import platformRoutes from "./routes/platformRoutes.js";
import creatorRoutes from "./routes/creatorRoutes.js";
import engagementRoutes from "./routes/engagementRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import metricRoutes from "./routes/metricRoutes.js";
import anomalyRoutes from "./routes/anomalyRoutes.js";

import {
  errorHandler,
  notFoundHandler,
} from "./middleware/errorHandler.js";

const app = express();

const allowedOrigins = (
  process.env.CLIENT_URL ?? "http://localhost:3000,http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Creator Analytics Platform API",
    version: "1.0.0",
  });
});

app.get("/api/health", async (_req, res, next) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      success: true,
      status: "healthy",
      services: {
        api: "operational",
        database: "connected",
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
});

app.use("/api/platforms", platformRoutes);
app.use("/api/creators", creatorRoutes);
app.use("/api/engagement", engagementRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/metrics", metricRoutes);
app.use("/api/anomalies", anomalyRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
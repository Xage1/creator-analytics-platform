"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const database_1 = require("@creator/database");
const platformRoutes_js_1 = __importDefault(require("./routes/platformRoutes.js"));
const creatorRoutes_js_1 = __importDefault(require("./routes/creatorRoutes.js"));
const postRoutes_js_1 = __importDefault(require("./routes/postRoutes.js"));
const errorHandler_js_1 = require("./middleware/errorHandler.js");
const metricRoutes_js_1 = __importDefault(require("./routes/metricRoutes.js"));
const app = (0, express_1.default)();
const allowedOrigins = (process.env.CLIENT_URL ?? "http://localhost:3000,http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true
}));
app.use(express_1.default.json({ limit: "1mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "1mb" }));
app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "Creator Analytics Platform API",
        version: "1.0.0"
    });
});
app.get("/api/health", async (_req, res, next) => {
    try {
        await database_1.prisma.$queryRaw `SELECT 1`;
        res.json({
            success: true,
            status: "healthy",
            services: {
                api: "operational",
                database: "connected"
            },
            timestamp: new Date().toISOString()
        });
    }
    catch (error) {
        next(error);
    }
});
app.use("/api/platforms", platformRoutes_js_1.default);
app.use("/api/creators", creatorRoutes_js_1.default);
app.use("/api/posts", postRoutes_js_1.default);
app.use("/api/metrics", metricRoutes_js_1.default);
app.use(errorHandler_js_1.notFoundHandler);
app.use(errorHandler_js_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map
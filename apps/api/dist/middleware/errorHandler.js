"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
const zod_1 = require("zod");
const database_1 = require("@creator/database");
const notFoundHandler = (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`
    });
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (error, _req, res, _next) => {
    if (error instanceof zod_1.ZodError) {
        res.status(400).json({
            success: false,
            message: "Validation failed.",
            errors: error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message
            }))
        });
        return;
    }
    if (error instanceof database_1.Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
            res.status(409).json({
                success: false,
                message: "A record with these unique values already exists."
            });
            return;
        }
        if (error.code === "P2003") {
            res.status(400).json({
                success: false,
                message: "The supplied relationship reference is invalid."
            });
            return;
        }
        if (error.code === "P2025") {
            res.status(404).json({
                success: false,
                message: "The requested record was not found."
            });
            return;
        }
    }
    console.error("API error:", error);
    res.status(500).json({
        success: false,
        message: "An unexpected server error occurred."
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map
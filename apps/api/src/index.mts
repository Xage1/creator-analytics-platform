import dotenv from "dotenv";

dotenv.config({
  path: "../../packages/database/.env"
});

const port = Number.parseInt(process.env.API_PORT ?? "3200", 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("API_PORT must be a valid port between 1 and 65535.");
}

const { default: app } = await import("./app.js");
const { prisma } = await import("@creator/database");

const server = app.listen(port, () => {
  console.log("----------------------------------------");
  console.log("Creator Analytics Platform API");
  console.log("----------------------------------------");
  console.log(`Environment: ${process.env.NODE_ENV ?? "development"}`);
  console.log(`Port:        ${port}`);
  console.log(`Health:      http://localhost:${port}/api/health`);
  console.log(`Platforms:   http://localhost:${port}/api/platforms`);
  console.log(`Creators:    http://localhost:${port}/api/creators`);
  console.log("----------------------------------------");
});

const shutdown = async (signal: string) => {
  console.log(`\n${signal} received. Shutting down API...`);

  server.close(async () => {
    await prisma.$disconnect();
    console.log("Database connection closed.");
    process.exit(0);
  });
};

process.on("SIGINT", () => void shutdown("SIGINT"));
process.on("SIGTERM", () => void shutdown("SIGTERM"));
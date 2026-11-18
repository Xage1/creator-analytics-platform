import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";

const source = new URL("../src/generated/", import.meta.url);
const destination = new URL("../dist/generated/", import.meta.url);

if (!existsSync(source)) {
  throw new Error("Generated Prisma client not found. Run npm run db:generate first.");
}

mkdirSync(new URL("../dist/", import.meta.url), { recursive: true });

if (existsSync(destination)) {
  rmSync(destination, { recursive: true, force: true });
}

cpSync(source, destination, { recursive: true });

console.log("Prisma client copied to database/dist/generated.");
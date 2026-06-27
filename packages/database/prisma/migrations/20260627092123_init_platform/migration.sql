-- CreateTable
CREATE TABLE "Platform" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "baseUrl" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500),
    "logoUrl" VARCHAR(255),
    "supportsFollowers" BOOLEAN NOT NULL DEFAULT true,
    "supportsLikes" BOOLEAN NOT NULL DEFAULT true,
    "supportsComments" BOOLEAN NOT NULL DEFAULT true,
    "supportsViews" BOOLEAN NOT NULL DEFAULT true,
    "supportsShares" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "Platform"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_slug_key" ON "Platform"("slug");

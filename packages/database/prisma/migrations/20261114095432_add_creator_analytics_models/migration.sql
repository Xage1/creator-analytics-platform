-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('TEXT', 'IMAGE', 'VIDEO', 'CAROUSEL', 'STORY', 'LIVE', 'OTHER');

-- CreateEnum
CREATE TYPE "AnalyticsPeriod" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY');

-- CreateEnum
CREATE TYPE "AnomalySeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "AnomalyStatus" AS ENUM ('OPEN', 'ACKNOWLEDGED', 'RESOLVED', 'IGNORED');

-- CreateEnum
CREATE TYPE "SentimentLabel" AS ENUM ('POSITIVE', 'NEGATIVE', 'NEUTRAL', 'MIXED');

-- CreateTable
CREATE TABLE "Creator" (
    "id" UUID NOT NULL,
    "platformId" UUID NOT NULL,
    "externalId" VARCHAR(191) NOT NULL,
    "username" VARCHAR(100),
    "displayName" VARCHAR(150),
    "profileUrl" VARCHAR(500),
    "bio" TEXT,
    "avatarUrl" VARCHAR(500),
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Creator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL,
    "creatorId" UUID NOT NULL,
    "externalId" VARCHAR(191) NOT NULL,
    "type" "PostType" NOT NULL DEFAULT 'OTHER',
    "content" TEXT,
    "postUrl" VARCHAR(500),
    "thumbnailUrl" VARCHAR(500),
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricSnapshot" (
    "id" UUID NOT NULL,
    "creatorId" UUID NOT NULL,
    "postId" UUID,
    "followerCount" BIGINT,
    "followingCount" BIGINT,
    "postCount" BIGINT,
    "totalLikes" BIGINT,
    "totalComments" BIGINT,
    "totalViews" BIGINT,
    "totalShares" BIGINT,
    "engagementRate" DECIMAL(8,4),
    "capturedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" VARCHAR(100),
    "rawMetrics" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MetricSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EngagementStats" (
    "id" UUID NOT NULL,
    "creatorId" UUID NOT NULL,
    "periodType" "AnalyticsPeriod" NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "totalPosts" INTEGER NOT NULL DEFAULT 0,
    "totalLikes" BIGINT NOT NULL DEFAULT 0,
    "totalComments" BIGINT NOT NULL DEFAULT 0,
    "totalViews" BIGINT NOT NULL DEFAULT 0,
    "totalShares" BIGINT NOT NULL DEFAULT 0,
    "averageLikes" DECIMAL(20,4),
    "averageComments" DECIMAL(20,4),
    "averageViews" DECIMAL(20,4),
    "averageEngagementRate" DECIMAL(8,4) NOT NULL DEFAULT 0,
    "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EngagementStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnomalyEvent" (
    "id" UUID NOT NULL,
    "creatorId" UUID NOT NULL,
    "postId" UUID,
    "eventType" VARCHAR(100) NOT NULL,
    "severity" "AnomalySeverity" NOT NULL DEFAULT 'MEDIUM',
    "status" "AnomalyStatus" NOT NULL DEFAULT 'OPEN',
    "metricName" VARCHAR(100) NOT NULL,
    "expectedValue" DECIMAL(20,4),
    "observedValue" DECIMAL(20,4),
    "changePercent" DECIMAL(10,4),
    "description" TEXT,
    "metadata" JSONB,
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnomalyEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SentimentScore" (
    "id" UUID NOT NULL,
    "postId" UUID NOT NULL,
    "label" "SentimentLabel" NOT NULL,
    "score" DECIMAL(5,4) NOT NULL,
    "confidence" DECIMAL(5,4),
    "language" VARCHAR(20),
    "provider" VARCHAR(100),
    "modelName" VARCHAR(150) NOT NULL,
    "analyzedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SentimentScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Creator_platformId_idx" ON "Creator"("platformId");

-- CreateIndex
CREATE INDEX "Creator_isActive_idx" ON "Creator"("isActive");

-- CreateIndex
CREATE INDEX "Creator_createdAt_idx" ON "Creator"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Creator_platformId_externalId_key" ON "Creator"("platformId", "externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Creator_platformId_username_key" ON "Creator"("platformId", "username");

-- CreateIndex
CREATE INDEX "Post_creatorId_idx" ON "Post"("creatorId");

-- CreateIndex
CREATE INDEX "Post_publishedAt_idx" ON "Post"("publishedAt");

-- CreateIndex
CREATE INDEX "Post_type_idx" ON "Post"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Post_creatorId_externalId_key" ON "Post"("creatorId", "externalId");

-- CreateIndex
CREATE INDEX "MetricSnapshot_creatorId_capturedAt_idx" ON "MetricSnapshot"("creatorId", "capturedAt");

-- CreateIndex
CREATE INDEX "MetricSnapshot_postId_capturedAt_idx" ON "MetricSnapshot"("postId", "capturedAt");

-- CreateIndex
CREATE INDEX "MetricSnapshot_capturedAt_idx" ON "MetricSnapshot"("capturedAt");

-- CreateIndex
CREATE INDEX "EngagementStats_creatorId_periodStart_periodEnd_idx" ON "EngagementStats"("creatorId", "periodStart", "periodEnd");

-- CreateIndex
CREATE INDEX "EngagementStats_periodType_periodStart_idx" ON "EngagementStats"("periodType", "periodStart");

-- CreateIndex
CREATE UNIQUE INDEX "EngagementStats_creatorId_periodType_periodStart_key" ON "EngagementStats"("creatorId", "periodType", "periodStart");

-- CreateIndex
CREATE INDEX "AnomalyEvent_creatorId_detectedAt_idx" ON "AnomalyEvent"("creatorId", "detectedAt");

-- CreateIndex
CREATE INDEX "AnomalyEvent_postId_idx" ON "AnomalyEvent"("postId");

-- CreateIndex
CREATE INDEX "AnomalyEvent_severity_status_idx" ON "AnomalyEvent"("severity", "status");

-- CreateIndex
CREATE INDEX "AnomalyEvent_eventType_idx" ON "AnomalyEvent"("eventType");

-- CreateIndex
CREATE INDEX "SentimentScore_postId_idx" ON "SentimentScore"("postId");

-- CreateIndex
CREATE INDEX "SentimentScore_label_analyzedAt_idx" ON "SentimentScore"("label", "analyzedAt");

-- CreateIndex
CREATE INDEX "SentimentScore_analyzedAt_idx" ON "SentimentScore"("analyzedAt");

-- CreateIndex
CREATE UNIQUE INDEX "SentimentScore_postId_modelName_analyzedAt_key" ON "SentimentScore"("postId", "modelName", "analyzedAt");

-- AddForeignKey
ALTER TABLE "Creator" ADD CONSTRAINT "Creator_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricSnapshot" ADD CONSTRAINT "MetricSnapshot_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricSnapshot" ADD CONSTRAINT "MetricSnapshot_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EngagementStats" ADD CONSTRAINT "EngagementStats_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnomalyEvent" ADD CONSTRAINT "AnomalyEvent_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnomalyEvent" ADD CONSTRAINT "AnomalyEvent_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SentimentScore" ADD CONSTRAINT "SentimentScore_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

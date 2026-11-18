import dotenv from "dotenv";

dotenv.config({
  path: "packages/database/.env"
});

const { prisma } = await import("@creator/database");

const platforms = [
  {
    name: "YouTube",
    slug: "youtube",
    baseUrl: "https://www.youtube.com",
    description: "Video sharing and creator platform.",
    supportsFollowers: true,
    supportsLikes: true,
    supportsComments: true,
    supportsViews: true,
    supportsShares: true
  },
  {
    name: "Instagram",
    slug: "instagram",
    baseUrl: "https://www.instagram.com",
    description: "Photo, video and social networking platform.",
    supportsFollowers: true,
    supportsLikes: true,
    supportsComments: true,
    supportsViews: true,
    supportsShares: true
  },
  {
    name: "TikTok",
    slug: "tiktok",
    baseUrl: "https://www.tiktok.com",
    description: "Short-form video and creator platform.",
    supportsFollowers: true,
    supportsLikes: true,
    supportsComments: true,
    supportsViews: true,
    supportsShares: true
  },
  {
    name: "Twitch",
    slug: "twitch",
    baseUrl: "https://www.twitch.tv",
    description: "Live streaming platform.",
    supportsFollowers: true,
    supportsLikes: false,
    supportsComments: true,
    supportsViews: true,
    supportsShares: false
  },
  {
    name: "X",
    slug: "x",
    baseUrl: "https://x.com",
    description: "Social networking and content platform.",
    supportsFollowers: true,
    supportsLikes: true,
    supportsComments: true,
    supportsViews: true,
    supportsShares: true
  }
];

async function seed() {
  console.log("Starting platform seed...\n");

  for (const platform of platforms) {
    const result = await prisma.platform.upsert({
      where: {
        slug: platform.slug
      },
      update: {
        name: platform.name,
        baseUrl: platform.baseUrl,
        description: platform.description,
        supportsFollowers: platform.supportsFollowers,
        supportsLikes: platform.supportsLikes,
        supportsComments: platform.supportsComments,
        supportsViews: platform.supportsViews,
        supportsShares: platform.supportsShares
      },
      create: platform
    });

    console.log(`✓ ${result.name} (${result.slug})`);
  }

  const total = await prisma.platform.count();

  console.log(`\nSeed completed. Total platforms in database: ${total}`);
}

try {
  await seed();
} catch (error) {
  console.error("Database seeding failed:", error);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
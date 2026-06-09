import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";

const SITE_URL = "https://www.camus.one";

// Next.js convention: this exports a sitemap.xml at /sitemap.xml automatically.
// Add a new entry whenever a route is added (or it's data-driven, like insights).
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: "2026-05-19",
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/about`,
          "zh-CN": `${SITE_URL}/about/zh`,
          ar: `${SITE_URL}/about/ar`,
        },
      },
    },
    {
      url: `${SITE_URL}/about/zh`,
      lastModified: "2026-05-20",
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          en: `${SITE_URL}/about`,
          "zh-CN": `${SITE_URL}/about/zh`,
          ar: `${SITE_URL}/about/ar`,
        },
      },
    },
    {
      url: `${SITE_URL}/about/ar`,
      lastModified: "2026-06-08",
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          en: `${SITE_URL}/about`,
          "zh-CN": `${SITE_URL}/about/zh`,
          ar: `${SITE_URL}/about/ar`,
        },
      },
    },
    {
      url: `${SITE_URL}/case`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/package`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const insightRoutes: MetadataRoute.Sitemap = insights.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: article.lastUpdated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Arabic translations of insights articles (currently just redefining-geo).
  const insightArRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/insights/redefining-geo/ar`,
      lastModified: "2026-06-08",
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${SITE_URL}/insights/redefining-geo`,
          ar: `${SITE_URL}/insights/redefining-geo/ar`,
        },
      },
    },
  ];

  return [...staticRoutes, ...insightRoutes, ...insightArRoutes];
}

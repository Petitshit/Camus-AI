import type { MetadataRoute } from "next";

const SITE_URL = "https://www.camus.one";

// Next.js convention: exports robots.txt at /robots.txt automatically.
// Allow all crawlers (including AI bots: GPTBot, ClaudeBot, PerplexityBot, etc.).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

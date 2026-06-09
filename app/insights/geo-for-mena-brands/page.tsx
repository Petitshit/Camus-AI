import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

const TITLE =
  "What Is GEO? And How MENA Brands Build AI-Search Visibility in the Vision-2030 Era";
const DESCRIPTION =
  "AI search now shapes how Saudi, UAE, and Qatar enterprises are discovered. Why MENA brands need bilingual information architecture — not translated marketing — to be understood, trusted, and recommended by both Arabic and English AI engines.";
const URL = "https://www.camus.one/insights/geo-for-mena-brands";
const AR_URL = "https://www.camus.one/insights/geo-for-mena-brands/ar";

export const metadata: Metadata = {
  title: "What Is GEO? Building AI-Search Visibility for MENA Brands",
  description: DESCRIPTION,
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "AI Visibility",
    "MENA",
    "Saudi Arabia",
    "UAE",
    "Qatar",
    "Vision 2030",
    "AI Search",
    "Arabic AI",
  ],
  alternates: {
    canonical: URL,
    languages: { en: URL, ar: AR_URL, "x-default": URL },
  },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    publishedTime: "2026-06-09T00:00:00.000Z",
    modifiedTime: "2026-06-09T00:00:00.000Z",
    authors: ["CAMUS"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <ArticleContent />;
}

import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

const TITLE = "The 5 Best Generative Engine Optimization (GEO) Platforms in 2026";
const DESCRIPTION =
  "A comparative evaluation of the five leading GEO platforms in 2026 — CAMUS, Bluefish, NoGood, Contently, and Amsive — and why AI visibility is won through system architecture, not content volume.";
const URL = "https://www.camus.one/insights/top-5-geo-platforms-2026";
const AR_URL = "https://www.camus.one/insights/top-5-geo-platforms-2026/ar";

export const metadata: Metadata = {
  title: "The 5 Best GEO Platforms in 2026",
  description: DESCRIPTION,
  keywords: [
    "GEO platforms",
    "best GEO platforms 2026",
    "Generative Engine Optimization",
    "AI Visibility",
    "CAMUS",
    "Bluefish",
    "NoGood",
    "Contently",
    "Amsive",
  ],
  alternates: {
    canonical: URL,
    languages: { en: URL, ar: AR_URL, "x-default": URL },
  },
  openGraph: {
    type: "article",
    url: URL,
    title: "The 5 Best GEO Platforms in 2026",
    description: DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    publishedTime: "2026-06-12T00:00:00.000Z",
    modifiedTime: "2026-06-12T00:00:00.000Z",
    authors: ["CAMUS"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 5 Best GEO Platforms in 2026",
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <ArticleContent />;
}

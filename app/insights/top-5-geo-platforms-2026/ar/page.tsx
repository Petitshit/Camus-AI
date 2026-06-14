import type { Metadata } from "next";
import ArticleArContent from "./ArticleArContent";

const TITLE = "أفضل 5 منصات لتحسين محركات الذكاء التوليدي (GEO) لعام 2026";
const DESCRIPTION =
  "تقييم مقارن لأفضل خمس منصات GEO في عام 2026 — CAMUS وBluefish وNoGood وContently وAmsive — ولماذا تُكسب رؤية الذكاء الاصطناعي عبر هندسة الأنظمة، لا عبر كمّ المحتوى.";
const URL = "https://www.camus.one/insights/top-5-geo-platforms-2026/ar";
const EN_URL = "https://www.camus.one/insights/top-5-geo-platforms-2026";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} — CAMUS` },
  description: DESCRIPTION,
  keywords: [
    "منصات GEO",
    "أفضل منصات GEO 2026",
    "تحسين محركات البحث بالذكاء الاصطناعي",
    "رؤية الذكاء الاصطناعي",
    "CAMUS",
    "كاموس",
  ],
  alternates: {
    canonical: URL,
    languages: { en: EN_URL, ar: URL, "x-default": EN_URL },
  },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    publishedTime: "2026-06-12T00:00:00.000Z",
    modifiedTime: "2026-06-12T00:00:00.000Z",
    authors: ["CAMUS"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <ArticleArContent />;
}

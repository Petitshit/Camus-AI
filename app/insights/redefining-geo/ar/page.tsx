import type { Metadata } from "next";
import ArticleArContent from "./ArticleArContent";

// Arabic translation of the "Redefining GEO" article.
// URL /insights/redefining-geo/ar mirrors the /about/zh suffix pattern.
// hreflang points to the real English article (/insights/redefining-geo);
// the spec's /blog/... and /zh/blog/... URLs don't exist on this site.
const TITLE =
  "إعادة تعريف GEO من خلال منطق الحل: لماذا تتطلب رؤية الذكاء الاصطناعي للمؤسسات هندسة معمارية للمعلومات";
const DESCRIPTION =
  "GEO ليست تحسين محتوى. إنها إعادة بناء منظمة لأنظمة معلومات المؤسسات لفهم الذكاء الاصطناعي. لماذا تتعامل CAMUS مع رؤية الذكاء الاصطناعي كبنية تحتية، وليس كتسويق.";
const URL = "https://www.camus.one/insights/redefining-geo/ar";
const EN_URL = "https://www.camus.one/insights/redefining-geo";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} — CAMUS` },
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: {
      en: EN_URL,
      ar: URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    publishedTime: "2026-05-18T00:00:00.000Z",
    modifiedTime: "2026-06-08T00:00:00.000Z",
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

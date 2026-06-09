import type { Metadata } from "next";
import ArticleArContent from "./ArticleArContent";

const TITLE =
  "ما هو GEO؟ وكيف تبني العلامات التجارية في الشرق الأوسط رؤيتها في عصر البحث بالذكاء الاصطناعي";
const DESCRIPTION =
  "أصبح البحث بالذكاء الاصطناعي يشكّل كيفية اكتشاف الشركات في السعودية والإمارات وقطر. لماذا تحتاج العلامات التجارية في الشرق الأوسط إلى هندسة معلومات ثنائية اللغة — لا تسويقًا مترجمًا — لتكون مفهومة وموثوقة وموصى بها من محركات الذكاء الاصطناعي العربية والإنجليزية.";
const URL = "https://www.camus.one/insights/geo-for-mena-brands/ar";
const EN_URL = "https://www.camus.one/insights/geo-for-mena-brands";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} — CAMUS` },
  description: DESCRIPTION,
  keywords: [
    "GEO",
    "تحسين محركات البحث بالذكاء الاصطناعي",
    "رؤية الذكاء الاصطناعي",
    "الشرق الأوسط",
    "السعودية",
    "الإمارات",
    "قطر",
    "رؤية 2030",
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
  return <ArticleArContent />;
}

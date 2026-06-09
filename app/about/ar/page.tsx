import type { Metadata } from "next";
import AboutArContent from "./AboutArContent";

// Arabic About page. Content from teammate's deployment spec (V1.0, 2026-06-08).
// URL is /about/ar to match the existing /about/zh suffix pattern (not the
// spec's proposed /ar/about/, which would require migrating already-indexed
// /about/zh and break Baidu/Bing/Google indexing).
const TITLE =
  "CAMUS — نظام هندسة معمارية GEO للمؤسسات | تحسين محركات البحث بالذكاء الاصطناعي";
const OG_TITLE = "CAMUS — نظام هندسة معمارية GEO للمؤسسات";
const DESCRIPTION =
  "كاموس متخصصة في هندسة أنظمة GEO للمؤسسات، تصمم أنظمة معلومات منظمة للعلامات التجارية موجهة لمحركات البحث بالذكاء الاصطناعي. مقرها في سنغافورة، تخدم أسواق آسيا والمحيط الهادئ والعالمية.";
const OG_DESCRIPTION =
  "تصميم أنظمة معلومات منظمة للعلامات التجارية موجهة لمحركات البحث بالذكاء الاصطناعي.";
const URL = "https://www.camus.one/about/ar";
const EN_URL = "https://www.camus.one/about";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "GEO",
    "تحسين محركات البحث بالذكاء الاصطناعي",
    "هندسة معلومات",
    "Schema",
    "المؤسسات",
    "رؤية الذكاء الاصطناعي",
    "CAMUS",
    "كاموس",
    "GEO السعودية",
    "GEO الإمارات",
  ],
  alternates: {
    canonical: URL,
    languages: {
      en: EN_URL,
      "zh-CN": "https://www.camus.one/about/zh",
      ar: URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    type: "website",
    url: URL,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    locale: "ar_SA",
    alternateLocale: ["en_US", "zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
  },
};

export default function Page() {
  return <AboutArContent />;
}

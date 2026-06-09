export type ArticleLanguage = {
  code: string; // "en" | "ar" | "zh"
  label: string; // "EN" | "العربية" | "中文"
  cta: string; // localized "Read article" CTA, e.g. "اقرأ المقال"
  href: string;
  hrefLang: string; // BCP-47
  dir?: "rtl";
};

export type Insight = {
  slug: string;
  title: string;
  publishedDate: string;
  version: string;
  lastUpdated: string;
  excerpt: string;
  // Available language versions. First entry is the primary (the card title
  // links here). Omit if the article exists only in English.
  languages?: ArticleLanguage[];
};

export const insights: Insight[] = [
  {
    slug: "geo-for-mena-brands",
    title:
      "What Is GEO? And How MENA Brands Build AI-Search Visibility in the Vision-2030 Era",
    publishedDate: "2026-06-09",
    version: "1.0",
    lastUpdated: "2026-06-09",
    excerpt:
      "AI search now shapes how Saudi, UAE, and Qatar enterprises are discovered. Why MENA brands need bilingual information architecture — not translated marketing — to be understood, trusted, and recommended by both Arabic and English AI engines.",
    languages: [
      {
        code: "en",
        label: "EN",
        cta: "Read article",
        href: "/insights/geo-for-mena-brands",
        hrefLang: "en",
      },
      {
        code: "ar",
        label: "العربية",
        cta: "اقرأ المقال",
        href: "/insights/geo-for-mena-brands/ar",
        hrefLang: "ar",
        dir: "rtl",
      },
    ],
  },
  {
    slug: "redefining-geo",
    title:
      "Redefining GEO Through Solution Logic: Why Enterprise AI Visibility Requires Information Architecture",
    publishedDate: "2026-05-18",
    version: "1.2",
    lastUpdated: "2026-05-19",
    excerpt:
      "GEO is not content optimization. It is the structured reconstruction of enterprise information systems for AI comprehension. Why CAMUS approaches AI visibility as infrastructure, not marketing.",
    languages: [
      {
        code: "en",
        label: "EN",
        cta: "Read article",
        href: "/insights/redefining-geo",
        hrefLang: "en",
      },
      {
        code: "ar",
        label: "العربية",
        cta: "اقرأ المقال",
        href: "/insights/redefining-geo/ar",
        hrefLang: "ar",
        dir: "rtl",
      },
    ],
  },
];

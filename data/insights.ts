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

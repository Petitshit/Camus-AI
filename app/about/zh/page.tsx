import type { Metadata } from "next";
import AboutZhContent from "./AboutZhContent";

const TITLE = "关于 CAMUS — 企业 GEO 系统架构与 AI 可见性服务";
const DESCRIPTION =
  "CAMUS 专注于 GEO（生成式引擎优化）系统架构，为企业品牌设计面向 AI 搜索引擎的结构化信息系统。总部位于新加坡，服务亚太及全球市场。";
const URL = "https://www.camus.one/about/zh";
const EN_URL = "https://www.camus.one/about";

export const metadata: Metadata = {
  // `absolute` bypasses the layout's "%s — CAMUS" template — Chinese title
  // already includes the brand, so we render it as-is.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // Page-level keywords override layout's English keywords on this Chinese route
  keywords: [
    "GEO",
    "生成式引擎优化",
    "AI 可见性",
    "企业信息架构",
    "Schema 部署",
    "AI 搜索优化",
    "CAMUS",
    "新加坡 GEO",
    "企业 AI 搜索",
    "中文 AI 搜索引擎",
  ],
  alternates: {
    canonical: URL,
    languages: {
      en: EN_URL,
      "zh-CN": URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    type: "website",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <AboutZhContent />;
}

import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

const TITLE =
  "Redefining GEO Through Solution Logic: Why Enterprise AI Visibility Requires Information Architecture";
const DESCRIPTION =
  "GEO is not content optimization. It is the structured reconstruction of enterprise information systems for AI comprehension. Why CAMUS approaches AI visibility as infrastructure, not marketing.";
const URL = "https://www.camus.one/insights/redefining-geo";

export const metadata: Metadata = {
  title: "Redefining GEO Through Solution Logic",
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: "2026-05-18T00:00:00.000Z",
    modifiedTime: "2026-05-19T00:00:00.000Z",
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

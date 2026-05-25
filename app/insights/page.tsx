import type { Metadata } from "next";
import InsightsContent from "./InsightsContent";

const TITLE = "Insights — CAMUS";
const DESCRIPTION =
  "CAMUS thinking on enterprise GEO, AI search behavior, and the information architectures that make brands legible to AI search engines.";
const URL = "https://www.camus.one/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    type: "website",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <InsightsContent />;
}

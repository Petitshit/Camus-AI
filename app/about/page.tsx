import type { Metadata } from "next";
import AboutContent from "./AboutContent";

const TITLE = "About CAMUS";
const DESCRIPTION =
  "CAMUS is an enterprise GEO system architecture firm based in Singapore. We rebuild brand information systems for AI search engines — turning content into AI-readable trust assets.";
const URL = "https://www.camus.one/about";

export const metadata: Metadata = {
  title: "About",
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
  return <AboutContent />;
}

import type { Metadata } from "next";
import AboutContent from "./AboutContent";

// Per teammate's bilingual entity-signaling spec — these need to match
// the exact strings the Chinese sibling page uses, so AI sees both as
// language versions of the same canonical About page.
const TITLE = "CAMUS — Enterprise GEO System Architecture | AI Visibility";
const DESCRIPTION =
  "CAMUS designs structured information systems for enterprise brands to build AI visibility. Based in Singapore, serving Asia-Pacific and global markets.";
const OG_DESCRIPTION =
  "We do not optimize content for AI. We design structured information systems.";
const URL = "https://www.camus.one/about";

export const metadata: Metadata = {
  // Absolute title bypasses the layout's "%s — CAMUS" template so the brand
  // sits at the START of the title (matches the spec).
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: {
      en: URL,
      "zh-CN": "https://www.camus.one/about/zh",
      "x-default": URL,
    },
  },
  openGraph: {
    type: "website",
    url: URL,
    title: TITLE,
    description: OG_DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
  },
};

export default function Page() {
  return <AboutContent />;
}

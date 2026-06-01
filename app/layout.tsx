import type { Metadata } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { theme } from "@/config/theme";

// Google Analytics 4 — measurement ID is set as an env var in Vercel
// (NEXT_PUBLIC_GA_ID = "G-XXXXXXXXXX"). If unset, GA4 simply doesn't load.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const SITE_URL = "https://www.camus.one";
const SITE_TITLE = "CAMUS — The Brand AI Actually Recommends";
const SITE_DESCRIPTION =
  "Enterprise GEO System Architecture. We build AI-native information architectures that make AI search engines understand, trust, and recommend your brand.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    // %s = per-page title set via that page's metadata.title — falls back to default
    template: "%s — CAMUS",
  },
  description: SITE_DESCRIPTION,
  applicationName: "CAMUS",
  authors: [{ name: "CAMUS", url: SITE_URL }],
  keywords: [
    "Generative Engine Optimization",
    "GEO",
    "AI Visibility",
    "Enterprise Information Architecture",
    "AI Search",
    "Schema.org",
    "Model Distillation",
    "Singapore",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "CAMUS",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // Image auto-handled by app/opengraph-image.tsx (dynamic 1200×630 PNG)
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon-rounded.svg",
    shortcut: "/favicon-rounded.svg",
    apple: "/favicon-rounded.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Webmaster verification tokens — set the corresponding env var in Vercel
  // to activate each one. Each platform's verification page gives you the
  // token; paste it as the env var value and redeploy.
  //   Baidu  → https://ziyuan.baidu.com  → set NEXT_PUBLIC_BAIDU_SITE_VERIFICATION
  //   Bing   → https://www.bing.com/webmasters → set NEXT_PUBLIC_BING_SITE_VERIFICATION
  //   Sogou  → https://zhanzhang.sogou.com → set NEXT_PUBLIC_SOGOU_SITE_VERIFICATION
  //   Yandex → https://webmaster.yandex.com → set NEXT_PUBLIC_YANDEX_VERIFICATION
  verification: {
    other: {
      ...(process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION
        ? { "baidu-site-verification": process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION }
        : {}),
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : {}),
      ...(process.env.NEXT_PUBLIC_SOGOU_SITE_VERIFICATION
        ? { sogou_site_verification: process.env.NEXT_PUBLIC_SOGOU_SITE_VERIFICATION }
        : {}),
    },
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
      ? { yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION }
      : {}),
  },
};

// ── Site-wide Organization schema (JSON-LD) ──
// Tells every AI crawler "this entire site is owned by the CAMUS Organization entity".
// Page-specific schemas (Article, FAQPage) can reference this via @id.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.camus.one/#organization",
  name: "CAMUS",
  alternateName: ["CAMUS GEO", "CAMUS AI Visibility"],
  url: "https://www.camus.one",
  logo: "https://www.camus.one/logo.svg",
  description:
    "Enterprise GEO System Architecture and AI Visibility Solutions. We build AI-native information architectures that make AI search engines understand, trust, and recommend your brand.",
  slogan:
    "We do not optimize content for AI. We design structured information systems.",
  // `knowsLanguage` is the correct Organization-level property for languages
  // the entity operates in. `inLanguage` (used by an earlier spec draft) is
  // only valid on CreativeWork/Event/etc., not Organization — schema.org
  // validator rightly flags it as invalid.
  knowsLanguage: ["en", "zh-CN"],
  knowsAbout: [
    "Generative Engine Optimization",
    "AI Visibility",
    "Enterprise Information Architecture",
    "Information Architecture",
    "Schema.org Implementation",
    "Model Distillation",
    "Multi-Agent Systems",
    "CRM Data Architecture",
    "Enterprise Software Architecture",
    "Cross-Market Brand Communication",
    "Data Modeling",
  ],
  // Note: `descriptionInLanguage` and `LanguageString` from the teammate's
  // spec are not valid schema.org constructs — Schema.org Validator flags
  // them as errors. Bilingual entity signaling is already handled by:
  //   • the same `@id` rendered on both /about and /about/zh pages
  //   • bidirectional hreflang link tags on each page
  //   • `<html lang="zh-CN">` on /about/zh via middleware
  //   • `knowsLanguage` above declaring CAMUS operates in en + zh-CN
  // No additional language-tagged descriptions needed.
  address: {
    "@type": "PostalAddress",
    addressCountry: "SG",
    addressLocality: "Singapore",
  },
  areaServed: {
    "@type": "Place",
    name: "Asia-Pacific and Global Markets",
  },
  foundingLocation: {
    "@type": "Place",
    name: "Singapore",
  },
  sameAs: [
    "https://www.linkedin.com/company/camusone",
    "https://github.com/camus-one",
  ],
  // Note: founder + employee Person schemas intentionally omitted until real
  // names + LinkedIn URLs are provided. Placeholder names are worse than none.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CAMUS GEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise GEO System Architecture",
          description:
            "Design end-to-end information architecture for enterprise brands targeting AI search engines — entity definitions, Schema.org deployment, and cross-platform source mapping.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Visibility Diagnosis",
          description:
            "Evaluate brand visibility and citation quality across major AI platforms — ChatGPT, Perplexity, Kimi, Wenxin Yiyan, Doubao, Google AI Mode — and identify blind spots.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Schema.org Implementation",
          description:
            "Deploy structured data markup on the website, blog, and key product pages so AI crawlers accurately parse brand identity, services, and team credentials.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cross-Platform Source Governance",
          description:
            "Unify brand descriptions across LinkedIn, Zhihu, WeChat, Baidu Baike, and press coverage to build a consistent, AI-trustworthy citation network.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multilingual GEO Deployment",
          description:
            "Synchronize visibility optimization across English and Chinese AI ecosystems so the brand is consistently recognized and recommended in both markets.",
        },
      },
    ],
  },
};

// Map a route prefix to the appropriate HTML lang attribute.
// AI crawlers + screen readers + browser i18n APIs all rely on <html lang>.
// Currently /about/zh is the only Chinese route — extend this map as more
// Chinese pages are added.
function langForPath(pathname: string): "en" | "zh-CN" {
  if (pathname.startsWith("/about/zh") || pathname.startsWith("/zh/")) {
    return "zh-CN";
  }
  return "en";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const lang = langForPath(pathname);

  const cssVars = {
    "--color-bg": theme.colors.bg,
    "--color-bg-elevated": theme.colors.bgElevated,
    "--color-bg-card": theme.colors.bgCard,
    "--color-surface": theme.colors.surface,
    "--color-border": theme.colors.border,
    "--color-border-light": theme.colors.borderLight,
    "--color-text": theme.colors.text,
    "--color-text-dim": theme.colors.textDim,
    "--color-text-muted": theme.colors.textMuted,
    "--color-accent": theme.colors.accent,
    "--color-accent-hover": theme.colors.accentHover,
    "--color-accent-glow": theme.colors.accentGlow,
    "--color-green": theme.colors.green,
    "--color-green-glow": theme.colors.greenGlow,
    "--color-brown": theme.colors.brown,
    "--color-dark": theme.colors.dark,
    "--font-serif": `"${theme.fonts.serif}", Georgia, serif`,
    "--font-sans": `"${theme.fonts.sans}", system-ui, sans-serif`,
    "--font-mono": `"${theme.fonts.mono}", monospace`,
  } as React.CSSProperties;

  return (
    <html lang={lang}>
      <body style={cssVars}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Google Analytics 4 — only loads if NEXT_PUBLIC_GA_ID is set in Vercel */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        {children}

        {/* Vercel Analytics — auto-tracks pageviews + web vitals, no config needed */}
        <Analytics />
      </body>
    </html>
  );
}

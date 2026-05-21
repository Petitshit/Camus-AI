import type { Metadata } from "next";
import "./globals.css";
import { theme } from "@/config/theme";

export const metadata: Metadata = {
  title: "CAMUS — The Brand AI Actually Recommends",
  description:
    "Enterprise GEO System Architecture. We build AI-native information architectures that make AI search engines understand, trust, and recommend your brand.",
  icons: {
    icon: "/favicon-rounded.svg",
    shortcut: "/favicon-rounded.svg",
    apple: "/favicon-rounded.svg",
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
    "Enterprise GEO System Architecture. We build AI-native information architectures that make AI search engines understand, trust, and recommend your brand.",
  knowsAbout: [
    "Generative Engine Optimization",
    "AI Visibility",
    "Enterprise Information Architecture",
    "Schema.org Implementation",
    "Model Distillation",
    "Multi-Agent Systems",
    "CRM Data Architecture",
    "Enterprise Software Design",
    "Cross-Market Brand Communication",
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Singapore",
  },
  sameAs: [
    "https://www.linkedin.com/company/camusone",
    "https://github.com/camus-one",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="en">
      <body style={cssVars}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}

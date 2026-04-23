import type { Metadata } from "next";
import "./globals.css";
import { theme } from "@/config/theme";

export const metadata: Metadata = {
  title: "Camus — Generative Engine Optimization",
  description: "The magic serum for AI-age brand presence. We engineer consensus across every AI platform that matters.",
  icons: {
    icon: "/favicon-rounded.svg",
    shortcut: "/favicon-rounded.svg",
    apple: "/favicon-rounded.svg",
  },
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
        {children}
      </body>
    </html>
  );
}

export const theme = {
  fonts: {
    serif: "Season Serif",
    sans: "Geist",
    mono: "Geist Mono",
  },
  colors: {
    bg: "#F0F1F2",
    bgElevated: "#E8E9EA",
    bgCard: "#FFFFFF",
    surface: "#E2E3E4",
    border: "#D4D5D6",
    borderLight: "#DCDDE0",
    text: "#26110F",
    textDim: "#734432",
    textMuted: "#9A8A80",
    accent: "#99BFF2",
    accentHover: "#7AAAE8",
    accentGlow: "rgba(153,191,242,0.12)",
    green: "#80BF84",
    greenGlow: "rgba(128,191,132,0.10)",
    brown: "#734432",
    dark: "#26110F",
  },
  logo: {
    src: "/logo.svg",
    alt: "Camus",
    width: 120,
    height: 28,
  },
  company: {
    name: "Camus",
    email: "hello@camus.ai",
    tagline: "The magic serum for AI-age brand presence.",
  },
} as const;

export type Theme = typeof theme;

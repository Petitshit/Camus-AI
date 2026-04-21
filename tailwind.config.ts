import type { Config } from "tailwindcss";
import { theme } from "./config/theme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: theme.colors.bg,
        "bg-elevated": theme.colors.bgElevated,
        "bg-card": theme.colors.bgCard,
        surface: theme.colors.surface,
        border: theme.colors.border,
        "border-light": theme.colors.borderLight,
        text: theme.colors.text,
        "text-dim": theme.colors.textDim,
        "text-muted": theme.colors.textMuted,
        accent: theme.colors.accent,
        "accent-hover": theme.colors.accentHover,
        green: theme.colors.green,
        brown: theme.colors.brown,
        dark: theme.colors.dark,
      },
      fontFamily: {
        serif: [theme.fonts.serif, "Georgia", "serif"],
        sans: [theme.fonts.sans, "system-ui", "sans-serif"],
        mono: [theme.fonts.mono, "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

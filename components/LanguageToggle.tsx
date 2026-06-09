"use client";

import Link from "next/link";

export type LangOption = {
  code: string; // "en" | "zh" | "ar"
  label: string; // "EN" | "中文" | "العربية"
  href: string;
  hrefLang: string; // BCP-47: "en" | "zh-CN" | "ar"
};

interface LanguageToggleProps {
  current: string; // matches a LangOption.code
  options: LangOption[];
}

// Segmented pill: [ EN ][ 中文 ][ العربية ] — active segment filled brown,
// inactive outlined. Add this only to pages that have sibling translations,
// otherwise it implies content that doesn't exist. Each <a> carries hrefLang
// so crawlers read the language relationships.
export default function LanguageToggle({ current, options }: LanguageToggleProps) {
  const base: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.02em",
    padding: "6px 14px",
    textDecoration: "none",
    transition: "color 0.2s, background-color 0.2s",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  };

  const activeStyle: React.CSSProperties = {
    ...base,
    backgroundColor: "var(--color-brown)",
    color: "#FFFFFF",
  };

  const inactiveStyle: React.CSSProperties = {
    ...base,
    color: "var(--color-brown)",
    backgroundColor: "transparent",
  };

  return (
    <div
      className="inline-flex rounded-full overflow-hidden"
      style={{ border: "1px solid var(--color-brown)" }}
      role="group"
      aria-label="Language selector"
      dir="ltr"
    >
      {options.map((opt) => {
        const isActive = opt.code === current;
        return (
          <Link
            key={opt.code}
            href={opt.href}
            style={isActive ? activeStyle : inactiveStyle}
            aria-current={isActive ? "page" : undefined}
            hrefLang={opt.hrefLang}
          >
            {opt.label}
          </Link>
        );
      })}
    </div>
  );
}

// Shared option set so all three About pages stay in sync.
export const ABOUT_LANG_OPTIONS: LangOption[] = [
  { code: "en", label: "EN", href: "/about", hrefLang: "en" },
  { code: "zh", label: "中文", href: "/about/zh", hrefLang: "zh-CN" },
  { code: "ar", label: "العربية", href: "/about/ar", hrefLang: "ar" },
];

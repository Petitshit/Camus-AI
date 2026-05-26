"use client";

import Link from "next/link";

interface LanguageToggleProps {
  current: "en" | "zh";
  enHref: string;
  zhHref: string;
}

// Two-segment pill: [ EN ][ 中文 ] — active segment is filled in brown,
// inactive is outlined. Used to switch between English and Chinese versions
// of bilingual pages. Add this only to pages that actually have a Chinese
// sibling — otherwise it implies content that doesn't exist.
export default function LanguageToggle({
  current,
  enHref,
  zhHref,
}: LanguageToggleProps) {
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
      style={{
        border: "1px solid var(--color-brown)",
      }}
      role="group"
      aria-label="Language selector"
    >
      <Link
        href={enHref}
        style={current === "en" ? activeStyle : inactiveStyle}
        aria-current={current === "en" ? "page" : undefined}
        hrefLang="en"
      >
        EN
      </Link>
      <Link
        href={zhHref}
        style={current === "zh" ? activeStyle : inactiveStyle}
        aria-current={current === "zh" ? "page" : undefined}
        hrefLang="zh-CN"
      >
        中文
      </Link>
    </div>
  );
}

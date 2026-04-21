"use client";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({ children, className = "", style, as: Tag = "h2" }: SectionTitleProps) {
  return (
    <Tag
      className={`font-serif font-light leading-tight tracking-tight ${className}`}
      style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)", ...style }}
    >
      {children}
    </Tag>
  );
}

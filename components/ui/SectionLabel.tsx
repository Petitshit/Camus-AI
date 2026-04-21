"use client";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionLabel({ children, className = "", style }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-xs tracking-widest uppercase ${className}`}
      style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", ...style }}
    >
      {children}
    </p>
  );
}

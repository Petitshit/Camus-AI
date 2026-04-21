"use client";

import Image from "next/image";
import { theme } from "@/config/theme";

const productLinks = [
  { label: "What is GEO", href: "#what-is-geo" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platform Coverage", href: "#platforms" },
  { label: "GENO Monitor", href: "#why-camus" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: `mailto:${theme.company.email}` },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--color-bg-elevated)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left — logo + tagline */}
          <div className="flex flex-col gap-5">
            <Image
              src={theme.logo.src}
              alt={theme.logo.alt}
              width={theme.logo.width}
              height={theme.logo.height}
              className="h-7 w-auto"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-dim)", fontFamily: "var(--font-sans)", maxWidth: "30ch" }}
            >
              {theme.company.tagline} We engineer consensus across every AI platform that matters.
            </p>
          </div>

          {/* Middle — product links */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
            >
              Product
            </p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-opacity duration-150 hover:opacity-60"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-sans)", textDecoration: "none" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — company links */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
            >
              Company
            </p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-opacity duration-150 hover:opacity-60"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-sans)", textDecoration: "none" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between gap-3"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}
          >
            © 2026 Camus. All rights reserved.
          </p>
          <a
            href={`mailto:${theme.company.email}`}
            className="text-xs transition-opacity hover:opacity-60"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", textDecoration: "none" }}
          >
            {theme.company.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { theme } from "@/config/theme";
import { faqs } from "@/data/faqs";

const comparison = [
  {
    dimension: "Core Target",
    seo: "Search engine ranking algorithms",
    geo: "AI comprehension and citation mechanisms",
  },
  {
    dimension: "Optimization Unit",
    seo: "Keywords, backlinks, page speed",
    geo: "Information architecture, schema markup, entity consistency",
  },
  {
    dimension: "Success Metric",
    seo: "Position on SERP",
    geo: "Accuracy of AI citation and consistency across AI platforms",
  },
  {
    dimension: "Team Background",
    seo: "Content marketing, link building",
    geo: "Enterprise software, CRM architecture, data modeling",
  },
];

// Inline brand SVGs (Lucide dropped brand glyphs; these avoid a 2nd icon lib).
function MediumIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 0 1-2.07-2.06 2.06 2.06 0 1 1 2.07 2.06zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/camusone/", Icon: LinkedInIcon },
  { name: "Medium", href: "https://medium.com/@Camus_AI", Icon: MediumIcon },
];

export default function Footer() {
  const [faqOpen, setFaqOpen] = useState(false);

  const handleToggleFaq = () => {
    setFaqOpen((prev) => {
      const next = !prev;
      // When opening, scroll the panel into view once the expand animation finishes
      if (next) {
        setTimeout(() => {
          const panel = document.getElementById("faq-panel");
          if (panel) {
            const offset = 80; // leave room for the sticky nav at the top
            const top = panel.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 450);
      }
      return next;
    });
  };

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--color-bg-elevated)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Header — logo + 2-line tagline on the left, FAQ on the right */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12">
          {/* Left — logo + tagline */}
          <div className="flex flex-col gap-5 items-start" style={{ maxWidth: "52ch" }}>
            <Image
              src={theme.logo.src}
              alt={theme.logo.alt}
              width={theme.logo.width}
              height={theme.logo.height}
              className="h-7 w-auto"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
            <div className="flex flex-col gap-1.5">
              <p
                className="text-sm md:text-base leading-snug"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                }}
              >
                AI Trust &amp; Conversion Solutions
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--color-text-dim)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                We help brands become visible, trusted, and chosen inside AI-generated decisions.
              </p>
            </div>
          </div>

          {/* Right — FAQ toggle (ghost-pill style, matches Button ghost variant) */}
          <button
            onClick={handleToggleFaq}
            aria-expanded={faqOpen}
            aria-controls="faq-panel"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer self-start hover:bg-surface"
            style={{
              backgroundColor: "transparent",
              color: "var(--color-text)",
              border: "1.5px solid var(--color-brown)",
              fontFamily: "var(--font-sans)",
            }}
          >
            <span>FAQ</span>
            <ChevronDown
              size={14}
              strokeWidth={2}
              style={{
                color: "var(--color-text)",
                transition: "transform 0.3s ease",
                transform: faqOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
        </div>

        {/* FAQ panel — expandable */}
        <AnimatePresence initial={false}>
          {faqOpen && (
            <motion.div
              key="faq-panel"
              id="faq-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="pt-10 pb-10 mb-4"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                {/* FAQ header */}
                <div className="mb-10">
                  <p
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    FAQ
                  </p>
                  <h3
                    className="font-serif font-light leading-tight"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      color: "var(--color-text)",
                      maxWidth: "30ch",
                    }}
                  >
                    Frequently Asked Questions
                  </h3>
                </div>

                {/* Q&A list */}
                <div className="flex flex-col gap-7 mb-14" style={{ maxWidth: "70ch" }}>
                  {faqs.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <span
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 6,
                          backgroundColor: "var(--color-accent)",
                          color: "var(--color-dark)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          marginTop: 2,
                        }}
                      >
                        Q
                      </span>
                      <div className="flex flex-col gap-2 flex-1">
                        <p
                          className="text-sm md:text-base font-semibold leading-snug"
                          style={{
                            fontFamily: "var(--font-sans)",
                            color: "var(--color-text)",
                          }}
                        >
                          {item.q}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            fontFamily: "var(--font-sans)",
                            color: "rgba(38,17,15,0.72)",
                          }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comparison subhead */}
                <div className="mb-5">
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    Comparison
                  </p>
                  <h4
                    className="font-serif font-light leading-tight"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.3rem, 2.4vw, 1.7rem)",
                      color: "var(--color-text)",
                    }}
                  >
                    GEO vs SEO
                  </h4>
                </div>

                {/* Comparison table */}
                <div
                  className="rounded-lg overflow-hidden mb-8"
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-light)",
                  }}
                >
                  {/* Header row */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr_1.6fr]"
                    style={{
                      backgroundColor: "var(--color-bg-elevated)",
                      borderBottom: "1px solid var(--color-border-light)",
                    }}
                  >
                    <div
                      className="px-5 py-3 text-xs tracking-widest uppercase"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-text-muted)",
                        borderRight: "1px solid var(--color-border-light)",
                      }}
                    >
                      Dimension
                    </div>
                    <div
                      className="px-5 py-3 text-xs tracking-widest uppercase"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-text-muted)",
                        borderRight: "1px solid var(--color-border-light)",
                      }}
                    >
                      SEO
                    </div>
                    <div
                      className="px-5 py-3 text-xs tracking-widest uppercase"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-accent)",
                        backgroundColor: "var(--color-accent-glow)",
                      }}
                    >
                      GEO (CAMUS Approach)
                    </div>
                  </div>

                  {/* Data rows */}
                  {comparison.map((row, k) => (
                    <div
                      key={row.dimension}
                      className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr_1.6fr]"
                      style={{
                        borderTop:
                          k === 0 ? "none" : "1px solid var(--color-border-light)",
                      }}
                    >
                      <div
                        className="px-5 py-4 text-sm"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          borderRight: "1px solid var(--color-border-light)",
                        }}
                      >
                        {row.dimension}
                      </div>
                      <div
                        className="px-5 py-4 text-sm leading-relaxed"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "rgba(38,17,15,0.72)",
                          borderRight: "1px solid var(--color-border-light)",
                        }}
                      >
                        {row.seo}
                      </div>
                      <div
                        className="px-5 py-4 text-sm leading-relaxed"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "var(--color-text)",
                          backgroundColor: "var(--color-accent-glow)",
                        }}
                      >
                        {row.geo}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footnote */}
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  First published: 2026-05-18 &nbsp;|&nbsp; Version: 1.1 &nbsp;|&nbsp; Last updated: 2026-05-19
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom bar — copyright · social channels · email */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="text-xs order-1"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}
          >
            © 2026 Camus. All rights reserved.
          </p>

          {/* Social channels */}
          <div className="flex items-center gap-3 order-3 sm:order-2">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex items-center justify-center rounded-full transition-colors duration-200"
                style={{
                  width: 34,
                  height: 34,
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-accent)";
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>

          <a
            href={`mailto:${theme.company.email}`}
            className="text-xs transition-opacity hover:opacity-60 order-2 sm:order-3"
            style={{
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-sans)",
              textDecoration: "none",
            }}
          >
            {theme.company.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import SectionLabel from "@/components/ui/SectionLabel";
import { insights } from "@/data/insights";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function InsightsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <Nav onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <SectionLabel className="mb-4">Insights</SectionLabel>
          <h1
            className="font-serif font-light leading-tight mb-5"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
              maxWidth: "22ch",
            }}
          >
            Notes on the architecture of{" "}
            <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
              AI trust.
            </em>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              fontFamily: "var(--font-sans)",
              maxWidth: "58ch",
            }}
          >
            Camus thinking on enterprise GEO, AI search behavior, and the
            information architectures that make brands legible to AI.
          </p>
        </motion.div>

        {/* Article list */}
        <div className="flex flex-col gap-5">
          {insights.map((article, i) => {
            const primaryHref = article.languages?.[0]?.href ?? `/insights/${article.slug}`;
            return (
              <motion.div
                key={article.slug}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }}
                className="rounded-lg p-7 md:p-9"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                }}
              >
                {/* Meta row — date · version */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    {article.publishedDate}
                  </span>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--color-text-muted)", opacity: 0.5 }} />
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    Version {article.version}
                  </span>
                </div>

                {/* Title — links to primary (English) version */}
                <Link href={primaryHref} style={{ textDecoration: "none" }}>
                  <h2
                    className="font-serif font-light leading-snug mb-4 transition-opacity duration-150 hover:opacity-70"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.4rem, 2.6vw, 1.95rem)",
                      color: "var(--color-text)",
                    }}
                  >
                    {article.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p
                  className="text-sm md:text-base leading-relaxed mb-5"
                  style={{ color: "rgba(38,17,15,0.72)", fontFamily: "var(--font-sans)", maxWidth: "62ch" }}
                >
                  {article.excerpt}
                </p>

                {/* One outlined-pill CTA per available language — self-labeling.
                    The Arabic button's own script signals the language. */}
                <div className="flex items-center gap-3 flex-wrap">
                  {(article.languages ?? [
                    { code: "en", label: "EN", cta: "Read article", href: primaryHref, hrefLang: "en" },
                  ]).map((lng) => (
                    <Link
                      key={lng.code}
                      href={lng.href}
                      hrefLang={lng.hrefLang}
                      dir={lng.dir ?? "ltr"}
                      className="lang-pill inline-flex items-center rounded-full px-5 py-2 text-sm"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        color: "var(--color-accent)",
                        border: "1.5px solid var(--color-accent)",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                      }}
                    >
                      {lng.cta}
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

const tags = [
  {
    label: "AI Answer Presence",
    tooltip: "Be included in the answers your customers already trust.",
  },
  {
    label: "AI Trust Signals",
    tooltip: "Shape how AI describes your brand, service, or expertise.",
  },
  {
    label: "AI-Influenced Conversion",
    tooltip: "Turn AI visibility into higher-quality inquiries, consideration, and business action.",
  },
];

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [hoveredTag, setHoveredTag] = useState<number | null>(null);

  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-center pt-20 pb-0 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Backdrop orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-5%",
          width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(153,191,242,0.22) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%", left: "-8%",
          width: "40vw", height: "40vw", maxWidth: 500, maxHeight: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(128,191,132,0.14) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(38,17,15,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <SectionLabel className="mb-6">AI Trust &amp; Conversion Solutions</SectionLabel>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: "clamp(2.6rem, 6vw, 5rem)",
            lineHeight: 1.08,
            color: "var(--color-text)",
            maxWidth: "18ch",
          }}
        >
          Build Trust. Accelerate Conversion.{" "}
          <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>In AI Search.</em>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg leading-relaxed mb-3"
          style={{
            color: "rgba(38,17,15,0.75)",
            fontFamily: "var(--font-sans)",
            maxWidth: "56ch",
          }}
        >
          Camus helps brands become visible, trusted, and chosen inside AI-generated decisions.
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm mb-10"
          style={{
            color: "rgba(38,17,15,0.5)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.02em",
          }}
        >
          From AI visibility to real business action.
        </motion.p>

        {/* 3 interactive tags */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 mb-10"
        >
          {tags.map((tag, i) => (
            <div key={tag.label} className="relative">
              <button
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-200"
                style={{
                  fontFamily: "var(--font-sans)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: hoveredTag === i ? "var(--color-accent-glow)" : "var(--color-bg-card)",
                  color: hoveredTag === i ? "var(--color-accent)" : "var(--color-text)",
                  borderColor: hoveredTag === i ? "var(--color-accent)" : "var(--color-border)",
                  cursor: "default",
                }}
                onMouseEnter={() => setHoveredTag(i)}
                onMouseLeave={() => setHoveredTag(null)}
              >
                {tag.label}
                <span
                  style={{
                    width: 16, height: 16, borderRadius: "50%",
                    backgroundColor: hoveredTag === i ? "var(--color-accent)" : "var(--color-border)",
                    color: hoveredTag === i ? "var(--color-dark)" : "var(--color-text-muted)",
                    fontSize: 10, fontWeight: 700,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                    flexShrink: 0,
                  }}
                >
                  ?
                </span>
              </button>

              <AnimatePresence>
                {hoveredTag === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 z-50 rounded-xl px-4 py-3 text-sm"
                    style={{
                      top: "calc(100% + 8px)",
                      backgroundColor: "var(--color-dark)",
                      color: "rgba(255,255,255,0.88)",
                      fontFamily: "var(--font-sans)",
                      maxWidth: "28ch",
                      lineHeight: 1.5,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                      pointerEvents: "none",
                      whiteSpace: "normal",
                    }}
                  >
                    {tag.tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mb-20"
        >
          <Button onClick={onOpenModal} size="lg">
            Request an AI Visibility Audit →
          </Button>
          <Button href="#how-it-works" variant="ghost" size="lg">
            How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

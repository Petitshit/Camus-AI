"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const painpoints = [
  {
    title: "Low AI Trust",
    tooltip:
      "Your brand info may exist online, but AI may not understand it clearly, consistently, or confidently.",
  },
  {
    title: "Weak Recommendation",
    tooltip:
      "If your trust signals are weak, AI is less likely to mention, cite, or recommend your brand.",
  },
  {
    title: "Low Conversion",
    tooltip:
      "When AI doesn't position your brand as credible, users enter the decision stage with weaker intent.",
  },
];

export default function TheShift() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="the-shift"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-14"
        >
          <SectionLabel
            className="mb-4"
            style={{ color: "rgba(153,191,242,0.65)" } as React.CSSProperties}
          >
            The Shift
          </SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "24ch", color: "#FFFFFF" }}
          >
            AI Is Redefining How Decisions Are Made.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.6)",
              maxWidth: "58ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            Brands now compete to be included in the answer itself. If you don&apos;t do this, AI
            will recommend your competitor.
          </p>
        </motion.div>

        {/* Before / Now comparison */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12"
        >
          {/* Before */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.3)" }}
            >
              Before
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {["Search", "Compare", "Decide"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span
                    className="px-4 py-2 rounded-lg text-sm"
                    style={{
                      fontFamily: "var(--font-sans)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.3)",
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "1.1rem" }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Now */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "rgba(153,191,242,0.08)",
              border: "1px solid rgba(153,191,242,0.25)",
            }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(153,191,242,0.7)" }}
            >
              Now
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {["Ask AI", "Trust Answer", "Act"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{
                      fontFamily: "var(--font-sans)",
                      backgroundColor: "rgba(153,191,242,0.15)",
                      color: "var(--color-accent)",
                      border: "1px solid rgba(153,191,242,0.3)",
                    }}
                  >
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ color: "var(--color-accent)", fontSize: "1.1rem" }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Painpoint cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {painpoints.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="rounded-2xl p-6 cursor-default flex items-center justify-between gap-4 transition-all duration-200"
                style={{
                  backgroundColor:
                    hoveredCard === i ? "rgba(153,191,242,0.1)" : "rgba(255,255,255,0.05)",
                  border:
                    hoveredCard === i
                      ? "1px solid rgba(153,191,242,0.3)"
                      : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3
                  className="font-semibold text-base"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: hoveredCard === i ? "var(--color-accent)" : "rgba(255,255,255,0.75)",
                    transition: "color 0.2s",
                  }}
                >
                  {p.title}
                </h3>
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    backgroundColor:
                      hoveredCard === i ? "var(--color-accent)" : "rgba(255,255,255,0.15)",
                    color: hoveredCard === i ? "var(--color-dark)" : "rgba(255,255,255,0.5)",
                    fontSize: 10,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  ?
                </span>
              </div>

              <AnimatePresence>
                {hoveredCard === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 z-50 rounded-xl px-4 py-3 text-sm"
                    style={{
                      top: "calc(100% + 8px)",
                      backgroundColor: "#fff",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-sans)",
                      maxWidth: "28ch",
                      lineHeight: 1.5,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                      pointerEvents: "none",
                      whiteSpace: "normal",
                    }}
                  >
                    {p.tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

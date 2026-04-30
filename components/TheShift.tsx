"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Skull, Ghost, TrendingDown } from "lucide-react";
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
    icon: Skull,
    title: "Low AI Trust",
    tooltip:
      "Your brand info may exist online, but AI may not understand it clearly, consistently, or confidently. It forms a vague, uncertain picture — or no picture at all.",
  },
  {
    icon: Ghost,
    title: "Weak Recommendation",
    tooltip:
      "If your trust signals are weak, AI is less likely to mention, cite, or recommend your brand. You become invisible at the exact moment a customer is deciding.",
  },
  {
    icon: TrendingDown,
    title: "Low Conversion",
    tooltip:
      "When AI doesn't position your brand as credible, users enter the decision stage with weaker intent. Less trust upstream means fewer inquiries, lower quality leads, and slower revenue.",
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
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16"
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

        {/* Painpoint accordion group */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Dramatic sub-header */}
          <div className="flex items-center gap-3 mb-5">
            <Skull
              size={15}
              style={{ color: "rgba(255,100,80,0.7)", flexShrink: 0 }}
              strokeWidth={1.8}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,100,80,0.7)",
              }}
            >
              Where Most Brands Lose in AI
            </span>
          </div>

          {/* Pill button group */}
          <div
            className="flex flex-col sm:flex-row rounded-2xl overflow-visible relative"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {painpoints.map((p, i) => {
              const Icon = p.icon;
              const isHovered = hoveredCard === i;
              const isLast = i === painpoints.length - 1;

              return (
                <div
                  key={p.title}
                  className="relative flex-1"
                  style={{
                    borderRight:
                      !isLast ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Tooltip — expands upward */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 right-0 z-50 rounded-xl p-4"
                        style={{
                          bottom: "calc(100% + 10px)",
                          backgroundColor: "rgba(20,8,7,0.95)",
                          border: "1px solid rgba(255,100,80,0.25)",
                          backdropFilter: "blur(12px)",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon
                            size={13}
                            style={{ color: "rgba(255,100,80,0.8)", flexShrink: 0 }}
                            strokeWidth={2}
                          />
                          <span
                            className="text-xs font-semibold"
                            style={{
                              fontFamily: "var(--font-sans)",
                              color: "rgba(255,255,255,0.9)",
                            }}
                          >
                            {p.title}
                          </span>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: "rgba(255,255,255,0.65)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {p.tooltip}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button face */}
                  <div
                    className="flex items-center gap-3 px-6 py-5 cursor-default select-none transition-all duration-200"
                    style={{
                      backgroundColor: isHovered
                        ? "rgba(255,100,80,0.07)"
                        : "transparent",
                      borderRadius: "inherit",
                    }}
                  >
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-all duration-200"
                      style={{
                        backgroundColor: isHovered
                          ? "rgba(255,100,80,0.15)"
                          : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.8}
                        style={{
                          color: isHovered
                            ? "rgba(255,100,80,0.9)"
                            : "rgba(255,255,255,0.4)",
                          transition: "color 0.2s",
                        }}
                      />
                    </span>
                    <span
                      className="font-semibold text-sm transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: isHovered ? "#fff" : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {p.title}
                    </span>
                    <span
                      className="ml-auto text-xs transition-colors duration-200"
                      style={{
                        color: isHovered
                          ? "rgba(255,100,80,0.6)"
                          : "rgba(255,255,255,0.2)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      ↑
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

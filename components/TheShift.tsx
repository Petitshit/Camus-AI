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

const RED = "rgba(255,100,80,1)";
const RED_SOFT = "rgba(255,100,80,0.7)";
const RED_BORDER = "rgba(255,100,80,0.35)";
const RED_BG = "rgba(255,100,80,0.08)";

const painpoints = [
  {
    icon: Skull,
    title: "Low AI Trust",
    tooltip:
      "Your brand info may exist online, but AI may not understand it clearly, consistently, or confidently. It forms a vague, uncertain picture — or no picture at all.",
    hoverAnim: { rotate: [0, -10, 10, -6, 0] },
  },
  {
    icon: Ghost,
    title: "Weak Recommendation",
    tooltip:
      "If your trust signals are weak, AI is less likely to mention, cite, or recommend your brand. You become invisible at the exact moment a customer is deciding.",
    hoverAnim: { y: [0, -5, 0, -3, 0] },
  },
  {
    icon: TrendingDown,
    title: "Low Conversion",
    tooltip:
      "When AI doesn't position your brand as credible, users enter the decision stage with weaker intent. Less trust upstream means fewer inquiries, lower quality leads, and slower revenue.",
    hoverAnim: { y: [0, 5, 0] },
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

        {/* Before / Now — terminal style */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20"
        >
          {/* BEFORE */}
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
            }}
          >
            <div>
              <div className="mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                mode=human
              </div>

              <div className="flex flex-col gap-1 mb-5">
                {[
                  { num: "01", name: "search" },
                  { num: "02", name: "compare" },
                  { num: "03", name: "decide" },
                ].map((step) => (
                  <div key={step.num} className="flex items-center gap-2">
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>[{step.num}]</span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: "line-through",
                        textDecorationColor: "rgba(255,255,255,0.25)",
                      }}
                    >
                      {step.name}
                    </span>
                    <span
                      className="flex-1"
                      style={{
                        borderBottom: "1px dotted rgba(255,255,255,0.15)",
                        marginBottom: 4,
                      }}
                    />
                    <span style={{ color: "rgba(255,100,80,0.7)" }}>× deprecated</span>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center gap-2 pt-3"
                style={{ borderTop: "1px dashed rgba(255,255,255,0.08)" }}
              >
                <span style={{ color: "rgba(255,100,80,0.7)" }}>!</span>
                <span style={{ color: "rgba(255,100,80,0.65)" }}>status: legacy_path</span>
              </div>
            </div>
          </div>

          {/* NOW */}
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(153,191,242,0.25)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.7,
            }}
          >
            <div>
              <div className="mb-4" style={{ color: "rgba(153,191,242,0.75)" }}>
                mode=ai
              </div>

              <div className="flex flex-col gap-1 mb-5">
                {[
                  { num: "01", name: "ask_ai" },
                  { num: "02", name: "trust_answer" },
                  { num: "03", name: "act" },
                ].map((step) => (
                  <div key={step.num} className="flex items-center gap-2">
                    <span style={{ color: "rgba(153,191,242,0.55)" }}>[{step.num}]</span>
                    <span style={{ color: "rgba(255,255,255,0.9)" }}>{step.name}</span>
                    <span
                      className="flex-1"
                      style={{
                        borderBottom: "1px dotted rgba(153,191,242,0.22)",
                        marginBottom: 4,
                      }}
                    />
                    <span style={{ color: "rgba(128,191,132,0.9)" }}>✓ active</span>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center gap-2 pt-3"
                style={{ borderTop: "1px dashed rgba(153,191,242,0.18)" }}
              >
                <span style={{ color: "var(--color-accent)" }}>&gt;</span>
                <span style={{ color: "var(--color-accent)" }}>status: live_path</span>
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 14,
                    backgroundColor: "var(--color-accent)",
                    marginLeft: 2,
                    marginBottom: -2,
                  }}
                />
              </div>
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
          {/* Subtitle-sized header */}
          <div className="flex items-center gap-4 mb-7">
            <motion.span
              className="flex-shrink-0"
              animate={inView ? { rotate: [0, -10, 10, -5, 0] } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Skull size={32} strokeWidth={1.5} style={{ color: RED_SOFT }} />
            </motion.span>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
                color: "rgba(255,255,255,0.92)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Where Most Brands Lose in AI.
            </h3>
          </div>

          {/* Pill button group with red strokes */}
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row">
            {painpoints.map((p, i) => {
              const Icon = p.icon;
              const isHovered = hoveredCard === i;
              const isFirst = i === 0;
              const isLast = i === painpoints.length - 1;

              const radiusClass = `rounded-lg sm:rounded-none ${
                isFirst ? "sm:rounded-l-lg" : "sm:border-l-0"
              } ${isLast ? "sm:rounded-r-lg" : ""}`;

              return (
                <div
                  key={p.title}
                  className={`relative flex-1 cursor-default transition-colors duration-200 border ${radiusClass}`}
                  style={{
                    borderColor: RED_BORDER,
                    backgroundColor: isHovered ? RED_BG : "rgba(255,255,255,0.02)",
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
                          backgroundColor: "rgba(20,8,7,0.97)",
                          border: `1px solid ${RED_BORDER}`,
                          backdropFilter: "blur(12px)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                          pointerEvents: "none",
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon
                            size={14}
                            style={{ color: RED_SOFT, flexShrink: 0 }}
                            strokeWidth={2}
                          />
                          <span
                            className="text-xs font-semibold"
                            style={{
                              fontFamily: "var(--font-sans)",
                              color: "rgba(255,255,255,0.95)",
                            }}
                          >
                            {p.title}
                          </span>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: "rgba(255,255,255,0.7)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {p.tooltip}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button face */}
                  <div className="flex items-center gap-3 px-6 py-5 select-none">
                    <motion.span
                      className="flex-shrink-0 flex items-center justify-center"
                      animate={isHovered ? p.hoverAnim : {}}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        style={{
                          color: isHovered ? RED : "rgba(255,255,255,0.55)",
                          transition: "color 0.2s",
                        }}
                      />
                    </motion.span>
                    <span
                      className="font-semibold text-sm transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: isHovered ? "#fff" : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {p.title}
                    </span>
                    <span
                      className="ml-auto flex items-center justify-center transition-all duration-200"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: isHovered ? RED_SOFT : "rgba(255,255,255,0.08)",
                        color: isHovered ? "var(--color-dark)" : "rgba(255,255,255,0.4)",
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: "var(--font-sans)",
                        flexShrink: 0,
                      }}
                    >
                      ?
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

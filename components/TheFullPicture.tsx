"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const flowSteps = [
  { label: "Content Assets", desc: "Raw brand information, expertise, and narrative." },
  { label: "Structured Trust Assets", desc: "AI-readable entities, citations, and authority signals." },
  { label: "AI Recognition & Recommendation", desc: "Consistent, confident brand mentions across all platforms." },
  { label: "Conversion Compounding", desc: "Higher-quality inquiries and stronger downstream business outcomes." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TheFullPicture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="full-picture"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-elevated)" }}
    >
      {/* Dithered SVG backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/dithered.svg')",
          backgroundSize: "62%",
          backgroundPosition: "110% 50%",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
          maskImage:
            "radial-gradient(ellipse 60% 88% at 92% 50%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 88% at 92% 50%, black 10%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10"
        >
          <SectionLabel className="mb-4">What Camus Does</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "24ch" }}
          >
            From Content to AI Trust Assets.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              maxWidth: "60ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            GEO is not about publishing more content — it is about building AI trust assets that
            compound into better recommendation quality and stronger conversion outcomes.
          </p>
        </motion.div>

        {/* Flow */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14"
        >
          {/* Desktop: horizontal arrow flow — grid stretches all cards to equal height */}
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
              gridTemplateRows: "auto 1fr",
              columnGap: "1rem",
              rowGap: "0.75rem",
            }}
          >
            {flowSteps.map((step, i) => (
              <span
                key={`num-${i}`}
                className="text-xs tracking-widest"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-muted)",
                  gridRow: 1,
                  gridColumn: i * 2 + 1,
                }}
              >
                0{i + 1}
              </span>
            ))}

            {flowSteps.map((step, i) => (
              <div
                key={`card-${i}`}
                className="rounded-lg p-5 flex flex-col gap-2"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                  gridRow: 2,
                  gridColumn: i * 2 + 1,
                }}
              >
                <h4
                  className="font-semibold text-sm leading-snug"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-text)",
                  }}
                >
                  {step.label}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(38,17,15,0.65)", fontFamily: "var(--font-sans)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}

            {flowSteps.slice(0, -1).map((_, i) => (
              <div
                key={`arrow-${i}`}
                className="flex items-center justify-center"
                style={{
                  gridRow: 2,
                  gridColumn: i * 2 + 2,
                  color: "var(--color-accent)",
                  fontSize: "1.5rem",
                }}
              >
                →
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden flex flex-col gap-4">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col gap-2">
                <div
                  className="rounded-lg p-5 flex flex-col gap-2"
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-light)",
                  }}
                >
                  <span
                    className="text-xs tracking-widest"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    0{i + 1}
                  </span>
                  <h4
                    className="font-semibold text-sm leading-snug"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
                  >
                    {step.label}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(38,17,15,0.65)", fontFamily: "var(--font-sans)" }}
                  >
                    {step.desc}
                  </p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div
                    className="text-center"
                    style={{ color: "var(--color-accent)", fontSize: "1.25rem" }}
                  >
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const trustIndicators = [
  { label: "Mention Rate", desc: "How often AI mentions your brand in relevant queries." },
  { label: "Positive Mention", desc: "Sentiment and confidence of AI descriptions." },
  { label: "Citation Presence", desc: "Whether AI cites your brand as a trusted source." },
  { label: "Answer Position", desc: "Where your brand appears within AI-generated answers." },
];

const conversionIndicators = [
  { label: "Query Coverage", desc: "The breadth of queries where your brand is recommended." },
  { label: "Competitor Visibility", desc: "How your AI presence compares to direct competitors." },
  { label: "Inquiry Lift", desc: "Change in high-intent inbound inquiries over time." },
  { label: "Conversion Signals", desc: "Downstream business actions attributable to AI mentions." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function MetricCard({
  label,
  desc,
  color,
}: {
  label: string;
  desc: string;
  color: "accent" | "green";
}) {
  return (
    <div
      className="rounded-lg p-5 flex flex-col gap-2"
      style={{
        backgroundColor: "var(--color-bg-card)",
        border: "1px solid var(--color-border-light)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            backgroundColor:
              color === "accent" ? "var(--color-accent)" : "var(--color-green)",
          }}
        />
        <span
          className="text-sm font-semibold"
          style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
        >
          {label}
        </span>
      </div>
      <p
        className="text-xs leading-relaxed"
        style={{ color: "rgba(38,17,15,0.65)", fontFamily: "var(--font-sans)" }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function Measurement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="measurement"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "var(--color-bg-elevated)" }}
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
          <SectionLabel className="mb-4">Measurement</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "28ch" }}
          >
            No vanity metrics. Only decision impact.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              maxWidth: "58ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            Every metric we track maps directly to AI-influenced trust and business outcomes —
            not impressions, not clicks.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Trust Indicators */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-accent)",
                  backgroundColor: "var(--color-accent-glow)",
                  border: "1px solid rgba(153,191,242,0.3)",
                }}
              >
                Trust Indicators
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {trustIndicators.map((m) => (
                <MetricCard key={m.label} label={m.label} desc={m.desc} color="accent" />
              ))}
            </div>
          </motion.div>

          {/* Conversion Indicators */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-green)",
                  backgroundColor: "var(--color-green-glow)",
                  border: "1px solid rgba(128,191,132,0.3)",
                }}
              >
                Conversion Indicators
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {conversionIndicators.map((m) => (
                <MetricCard key={m.label} label={m.label} desc={m.desc} color="green" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

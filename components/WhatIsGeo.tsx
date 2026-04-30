"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

type Differentiator = {
  num: string;
  title: string;
  body: string;
  tags: string[];
  platforms?: {
    global: string[];
    chinese: string[];
  };
};

const differentiators: Differentiator[] = [
  {
    num: "01",
    title: "Consulting-Led, Not Template-Based",
    body: "We start with your business goals, competitive landscape, and AI perception gaps — then build a tailored strategy. No cookie-cutter playbooks.",
    tags: ["Strategy-first", "Tailored", "Business-driven"],
  },
  {
    num: "02",
    title: "Built for Trust and Conversion",
    body: "Our work is measured by recommendation quality and downstream conversion signals — not just mention counts or vanity visibility metrics.",
    tags: ["Visibility", "Trust", "Recommendation", "Conversion"],
  },
  {
    num: "03",
    title: "Cross-Market AI Expertise",
    body: "We operate natively inside both global and Chinese AI ecosystems — not through translation or proxies, but from deep inside each platform.",
    tags: ["Global AI + Chinese LLMs", "Mainland China + ASEAN", "Bilingual AI visibility"],
    platforms: {
      global: ["ChatGPT", "Gemini", "Claude", "Grok", "Perplexity"],
      chinese: ["DeepSeek", "Doubao", "Kimi", "Qwen", "Wenxin Yiyan", "Tencent Yuanbao"],
    },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SolidTag({ label, variant = "accent" }: { label: string; variant?: "accent" | "green" | "dark" }) {
  const styles: Record<string, React.CSSProperties> = {
    accent: {
      backgroundColor: "var(--color-accent)",
      color: "var(--color-dark)",
    },
    green: {
      backgroundColor: "var(--color-green)",
      color: "#fff",
    },
    dark: {
      backgroundColor: "rgba(38,17,15,0.12)",
      color: "var(--color-text)",
      border: "1px solid var(--color-border)",
    },
  };

  return (
    <span
      className="text-xs px-3 py-1 rounded-full font-medium"
      style={{
        fontFamily: "var(--font-sans)",
        ...styles[variant],
      }}
    >
      {label}
    </span>
  );
}

function PlatformPill({ label, type }: { label: string; type: "global" | "chinese" }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full"
      style={{
        fontFamily: "var(--font-sans)",
        backgroundColor:
          type === "global"
            ? "rgba(153,191,242,0.15)"
            : "rgba(128,191,132,0.15)",
        color: type === "global" ? "var(--color-accent)" : "var(--color-green)",
        border: `1px solid ${type === "global" ? "rgba(153,191,242,0.3)" : "rgba(128,191,132,0.3)"}`,
      }}
    >
      {label}
    </span>
  );
}

export default function WhatIsGeo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-camus-intro"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <SectionLabel className="mb-4">Why Camus</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "26ch" }}
          >
            Built for Brands That Need More Than Generic GEO.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              maxWidth: "60ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            Camus combines consulting-led strategy, customized execution, and deep cross-market AI
            platform expertise.
          </p>
        </motion.div>

        {/* Differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.num}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-2xl p-7 flex flex-col gap-5 cursor-default"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border-light)",
              }}
              whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
              >
                {d.num}
              </span>

              <div className="flex flex-col gap-3">
                <h3
                  className="leading-snug"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--color-text)",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(38,17,15,0.75)", fontFamily: "var(--font-sans)" }}
                >
                  {d.body}
                </p>
              </div>

              {/* Platform grid for card 03 */}
              {d.platforms && (
                <div className="flex flex-col gap-3">
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-2"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-accent)",
                        fontSize: "0.65rem",
                      }}
                    >
                      Global
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {d.platforms.global.map((p) => (
                        <PlatformPill key={p} label={p} type="global" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-2"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-green)",
                        fontSize: "0.65rem",
                      }}
                    >
                      Chinese
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {d.platforms.chinese.map((p) => (
                        <PlatformPill key={p} label={p} type="chinese" />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tags — solid color */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {d.tags.map((tag) => (
                  <SolidTag key={tag} label={tag} variant="accent" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Button href="/about" variant="ghost" size="sm">
            Learn More About Camus →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

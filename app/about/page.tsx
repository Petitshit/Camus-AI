"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const differentiators = [
  {
    num: "01",
    title: "Consulting-Led, Not Template-Based",
    body: "Most GEO agencies apply the same playbook to every client. We start from a different premise: your business has specific goals, a specific competitive landscape, and specific AI perception gaps. Our work is built around those realities — not a generic content calendar.\n\nEvery engagement begins with strategy: what does AI currently say about you, what should it say, and what assets need to exist for that to change? We design the full picture before executing a single deliverable.",
    tags: ["Strategy-first", "Tailored to your goals", "Business-driven outcomes"],
  },
  {
    num: "02",
    title: "Built for Trust and Conversion",
    body: "We measure our work against what matters: recommendation quality and downstream business outcomes. Not mention counts, not impressions — the real signal of whether AI is sending the right people, with the right intent, to your brand.\n\nThis means every trust asset we build is designed with conversion in mind. Visibility without conversion is just noise. We engineer the full chain.",
    tags: ["Visibility → Trust", "Trust → Recommendation", "Recommendation → Conversion"],
  },
  {
    num: "03",
    title: "Cross-Market AI Expertise",
    body: "We operate inside both global and Chinese AI ecosystems — natively, not through translation or proxies. Our team is embedded in both markets, with direct expertise in ChatGPT, Gemini, and Perplexity as well as Doubao, DeepSeek, Kimi, and Qwen.\n\nFor brands targeting Chinese-speaking markets, Southeast Asia, or global audiences simultaneously, this dual-market presence is not optional — it's the entire game.",
    tags: ["Global AI platforms", "Chinese LLM ecosystem", "Mainland China + ASEAN"],
  },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <Nav onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <SectionLabel className="mb-4">About Camus</SectionLabel>
          <h1
            className="font-serif font-light leading-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              color: "var(--color-text)",
              maxWidth: "20ch",
            }}
          >
            AI Trust &amp; Conversion.{" "}
            <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
              Done differently.
            </em>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              fontFamily: "var(--font-sans)",
              maxWidth: "60ch",
            }}
          >
            Camus is an AI Trust &amp; Conversion consultancy. We help brands become visible,
            trusted, and chosen inside AI-generated decisions — across global and Chinese AI
            ecosystems.
          </p>
        </motion.div>

        {/* Differentiators */}
        <div className="flex flex-col gap-16">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.num}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
            >
              {/* Left */}
              <div>
                <span
                  className="text-xs tracking-widest block mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                >
                  {d.num}
                </span>
                <h2
                  className="font-semibold leading-snug mb-5"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.15rem",
                    color: "var(--color-text)",
                  }}
                >
                  {d.title}
                </h2>
                <div className="flex flex-col gap-2">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full self-start"
                      style={{
                        fontFamily: "var(--font-sans)",
                        backgroundColor: "var(--color-accent-glow)",
                        color: "var(--color-accent)",
                        border: "1px solid rgba(153,191,242,0.3)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4">
                {d.body.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(38,17,15,0.8)", fontFamily: "var(--font-sans)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 flex gap-4 flex-wrap"
        >
          <Button onClick={() => setModalOpen(true)} size="lg">
            Request an AI Visibility Audit →
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

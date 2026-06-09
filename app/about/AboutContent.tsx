"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import LanguageToggle, { ABOUT_LANG_OPTIONS } from "@/components/LanguageToggle";
import { faqs } from "@/data/faqs";

// ── About-page FAQPage schema ──
// Same FAQ content as the Footer (single source of truth in data/faqs.ts).
// Google requires schema text to match what's visible on the page.
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

type StandardItem = {
  num: string;
  title: string;
  body: string;
  details: string;
  table?: { left: string; right: string }[];
};

const standard: StandardItem[] = [
  {
    num: "01",
    title: "AI understands you.",
    body:
      "We do not simply optimize content. We build information systems that AI can understand, validate, and cite.",
    details:
      "In the age of AI search, the ultimate challenge for every brand is not ranking — it is whether AI understands who you are, trusts what you say, and chooses to recommend you when a user asks.",
  },
  {
    num: "02",
    title: "AI trusts you.",
    body:
      "Our team is built on enterprise software DNA, with backgrounds across NUS, NTU, Imperial College London, and IBM — not traditional marketing agency backgrounds.",
    details:
      "Camus helps brands build an AI-native information architecture: a structured, verifiable, and consistently expressed identity that AI search engines can parse, validate, and cite with confidence.",
  },
  {
    num: "03",
    title: "AI recommends you.",
    body:
      "GEO is not the next SEO. It is the infrastructure layer for how brands are understood in AI search.",
    details:
      "Most GEO teams come from SEO or content marketing. They see GEO as “content optimization for AI.”\n\nWe see GEO differently. Our team spent years building enterprise software, CRM systems, customer data platforms, and workflow automation for Fortune 500 companies and high-growth startups. That background is not incidental — it is the exact skill set GEO demands:",
    table: [
      {
        left: "Enterprise system architecture",
        right:
          "GEO ends in systems, not copy. We architect how AI reads your brand infrastructure.",
      },
      {
        left: "CRM & customer data management",
        right:
          "We help AI understand your brand the way a CRM structures customer knowledge — through entities, attributes, and relationships.",
      },
      {
        left: "Workflow & SOP automation",
        right:
          "Model distillation turns your business SOPs into instructions AI can process natively.",
      },
      {
        left: "Cross-market communication",
        right:
          "We speak the same professional language across Chinese and English AI search engines.",
      },
    ],
  },
];

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
      {/* About-page version meta tags (React 19 hoists these to <head>) */}
      <meta name="datePublished" content="2026-05-18" />
      <meta name="version" content="1.1" />
      <meta name="dateModified" content="2026-05-19" />

      {/* FAQPage JSON-LD — makes the 5 footer FAQs machine-readable for AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />

      <Nav onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <SectionLabel>AI Trust &amp; Conversion Solutions</SectionLabel>
            <LanguageToggle current="en" options={ABOUT_LANG_OPTIONS} />
          </div>
          <h1
            className="font-serif font-light leading-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              color: "var(--color-text)",
              maxWidth: "22ch",
            }}
          >
            CAMUS —{" "}
            <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
              The Brand AI Actually Recommends
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
            <dfn
              itemScope
              itemType="https://schema.org/DefinedTerm"
              className="ai-definition"
              style={{ fontStyle: "normal" }}
            >
              <span itemProp="name">CAMUS</span>{" "}
              <span itemProp="description">
                is an enterprise GEO system architecture firm that rebuilds brand information
                systems for AI search engines.
              </span>
            </dfn>
          </p>
        </motion.div>

        {/* Part 1 — Camus GEO Standard */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <SectionLabel className="mb-3">The Camus GEO Standard</SectionLabel>
          <p
            className="text-base leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.65)",
              fontFamily: "var(--font-sans)",
              maxWidth: "60ch",
            }}
          >
            Three principles that define how Camus rebuilds brands for AI search.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 mb-24">
          {standard.map((item, i) => (
            <motion.div
              key={item.num}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                {/* Left — num + title */}
                <div>
                  <span
                    className="text-xs tracking-widest block mb-3"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    {item.num}
                  </span>
                  <h2
                    className="font-serif font-light leading-tight"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                      color: "var(--color-text)",
                    }}
                  >
                    {item.title}
                  </h2>
                </div>

                {/* Right — body + details */}
                <div className="flex flex-col gap-5">
                  <p
                    className="leading-snug"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                    }}
                  >
                    {item.body}
                  </p>
                  {item.details.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="text-base leading-relaxed"
                      style={{
                        color: "rgba(38,17,15,0.75)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Full-width breakout table (item 03 only) */}
              {item.table && (
                <div
                  className="rounded-lg overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-light)",
                  }}
                >
                  {/* Header */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr]"
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
                      Enterprise Software Background
                    </div>
                    <div
                      className="px-5 py-3 text-xs tracking-widest uppercase"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-accent)",
                      }}
                    >
                      GEO Advantage
                    </div>
                  </div>

                  {/* Rows */}
                  {item.table.map((row, k) => (
                    <div
                      key={row.left}
                      className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr]"
                      style={{
                        borderTop: k === 0 ? "none" : "1px solid var(--color-border-light)",
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
                        {row.left}
                      </div>
                      <div
                        className="px-5 py-4 text-sm leading-relaxed"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "rgba(38,17,15,0.78)",
                        }}
                      >
                        {row.right}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Part 2 — Camus Solution */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <SectionLabel className="mb-3">The Camus Solution</SectionLabel>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              fontFamily: "var(--font-sans)",
              maxWidth: "60ch",
            }}
          >
            We help brands become visible, trusted, and chosen inside AI-generated decisions —
            across global and Chinese AI ecosystems.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.num}
              custom={i + 6}
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
          custom={10}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 flex gap-4 flex-wrap"
        >
          <Button onClick={() => setModalOpen(true)} size="lg">
            Request an AI Visibility Audit →
          </Button>
          <Button href="/insights" variant="ghost" size="lg">
            Read Our GEO Insights
          </Button>
        </motion.div>
      </div>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

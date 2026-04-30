"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScanSearch, AlignLeft, Layers, MessageSquare, Send, Activity } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: ScanSearch,
    num: "01",
    title: "AI Visibility Audit",
    body: "A comprehensive mapping of how AI currently describes, rates, and recommends your brand across all major platforms — global and Chinese.",
    group: "trust",
  },
  {
    icon: AlignLeft,
    num: "02",
    title: "Information Alignment",
    body: "Identify and correct gaps, inconsistencies, and misrepresentations in how AI understands your brand narrative and expertise.",
    group: "trust",
  },
  {
    icon: Layers,
    num: "03",
    title: "AI Trust Assets Structuring",
    body: "Build structured, AI-readable content: entity definitions, authoritative citations, brand knowledge graphs, and trust signals.",
    group: "trust",
  },
  {
    icon: MessageSquare,
    num: "04",
    title: "Prompt & Query Strategy",
    body: "Optimise how your brand responds to the specific queries and prompts your target customers are asking AI platforms.",
    group: "trust",
  },
  {
    icon: Send,
    num: "05",
    title: "Platform Distribution",
    body: "Deploy trust assets across global AI ecosystems (ChatGPT, Gemini, Perplexity) and Chinese platforms (Doubao, DeepSeek, Kimi, Qwen).",
    group: "conversion",
  },
  {
    icon: Activity,
    num: "06",
    title: "Monitoring & Reporting",
    body: "Ongoing tracking of AI mention rate, recommendation quality, competitor visibility, and downstream conversion signals.",
    group: "conversion",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyCamus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
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
          className="mb-12"
        >
          <SectionLabel className="mb-4">Services</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "28ch" }}
          >
            Everything You Need to Win in AI Search.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              maxWidth: "58ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            A full-stack approach to AI trust and conversion — from initial audit to ongoing
            measurement.
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex mb-10 rounded-full overflow-hidden"
          style={{
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-card)",
          }}
        >
          <div
            className="flex items-center gap-2 px-5 py-2.5"
            style={{
              flex: "4 4 0%",
              backgroundColor: "var(--color-accent-glow)",
              borderRight: "1px solid var(--color-border)",
            }}
          >
            <span
              className="text-xs font-medium tracking-wide"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
            >
              Trust Building
            </span>
            <div className="flex gap-1 ml-auto">
              {["1", "2", "3", "4"].map((n) => (
                <span
                  key={n}
                  className="text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-dark)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    fontWeight: 700,
                  }}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
          <div
            className="flex items-center gap-2 px-5 py-2.5"
            style={{ flex: "2 2 0%", backgroundColor: "var(--color-green-glow)" }}
          >
            <span
              className="text-xs font-medium tracking-wide"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-green)" }}
            >
              Conversion Support
            </span>
            <div className="flex gap-1 ml-auto">
              {["5", "6"].map((n) => (
                <span
                  key={n}
                  className="text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-green)",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    fontWeight: 700,
                  }}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isTrust = svc.group === "trust";
            return (
              <motion.div
                key={svc.num}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="rounded-lg p-7 flex flex-col gap-4 cursor-default"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-xl"
                    style={{
                      backgroundColor: isTrust
                        ? "var(--color-accent-glow)"
                        : "var(--color-green-glow)",
                    }}
                  >
                    <Icon
                      size={17}
                      style={{
                        color: isTrust ? "var(--color-accent)" : "var(--color-green)",
                      }}
                      strokeWidth={1.8}
                    />
                  </span>
                  <span
                    className="text-xs tracking-widest"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    {svc.num}
                  </span>
                </div>
                <h3
                  className="leading-snug"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--color-text)",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(38,17,15,0.8)", fontFamily: "var(--font-sans)" }}
                >
                  {svc.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

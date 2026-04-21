"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BadgeCheck, Target, BarChart2, Globe } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const seoItems = [
  "Optimize for crawler bots",
  "Chase keyword rankings",
  "Build backlink profiles",
  "Compete for 10 blue links",
  "Content farms & link schemes",
  "Results decay predictably",
];

const geoItems = [
  "Optimize for AI comprehension",
  "Engineer brand consensus",
  "Build knowledge authority",
  "Win the single answer slot",
  "Structured truth at scale",
  "Results compound over time",
];

const dimensions = [
  {
    icon: BadgeCheck,
    num: "01",
    tag: "BRAND",
    title: "Brand Authority",
    body: "Every citation across every model — accurate, authoritative, favorable. No hallucinated facts, no outdated narratives.",
  },
  {
    icon: Target,
    num: "02",
    tag: "PRODUCT",
    title: "Product Positioning",
    body: "When someone asks 'what's the best X?', AI recommends you — not because we tricked it, but because it genuinely understands your edge.",
  },
  {
    icon: BarChart2,
    num: "03",
    tag: "COMPETITIVE",
    title: "Competitive Intelligence",
    body: "Real-time monitoring of how every major AI model ranks you vs. competitors. We don't just track the gap — we engineer it.",
  },
  {
    icon: Globe,
    num: "04",
    tag: "INDUSTRY",
    title: "Industry Authority",
    body: "We embed your brand into the AI's mental model of your entire industry. Any question in your vertical — you're the expert it reaches for first.",
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

export default function WhatIsGeo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="what-is-geo"
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
          <SectionLabel className="mb-4">Core Concept</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "24ch" }}
          >
            Meet GEO. The discipline that decides whether AI recommends you — or your competitor.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(38,17,15,0.75)", maxWidth: "60ch", fontFamily: "var(--font-sans)" }}
          >
            The science of engineering how AI models understand, trust, and surface your brand. Not through gaming. Through structured truth, deployed at scale.
          </p>
        </motion.div>

        {/* SEO vs GEO */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* SEO — dark tombstone card */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              backgroundColor: "#1a0c0a",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              className="absolute top-4 right-4 text-xs tracking-widest uppercase px-2 py-0.5 rounded"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(255,255,255,0.4)",
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Deprecated
            </span>
            <p
              className="text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.45)" }}
            >
              The old playbook
            </p>
            <h3
              className="font-serif mb-6"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.3)",
                textDecoration: "line-through",
                textDecorationColor: "rgba(255,255,255,0.25)",
              }}
            >
              SEO
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {seoItems.map((item) => (
                <li
                  key={item}
                  className="text-sm flex items-center gap-3"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)" }}
                >
                  <span style={{ color: "rgba(255,255,255,0.25)" }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* GEO — animated gradient card with logo watermark */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #5a9fe8, #7AAAE8, #99BFF2, #6abf6e, #5a9fe8)",
              backgroundSize: "300% 300%",
              animation: "gradient-shift 6s ease infinite",
              border: "none",
            }}
          >
            {/* Faded icon watermark */}
            <div
              className="absolute pointer-events-none select-none"
              style={{ bottom: -30, right: -20, opacity: 0.15 }}
            >
              <Image
                src="/logos/favicon.svg"
                alt=""
                width={260}
                height={260}
                style={{ filter: "brightness(0) invert(0.15)", transformOrigin: "bottom right" }}
                unoptimized
              />
            </div>

            <p
              className="text-xs tracking-widest uppercase mb-1 relative z-10"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(38,17,15,0.55)" }}
            >
              The new reality
            </p>
            <h3
              className="font-serif mb-6 relative z-10"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontWeight: 300,
                color: "var(--color-dark)",
              }}
            >
              GEO
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0 relative z-10">
              {geoItems.map((item) => (
                <li
                  key={item}
                  className="text-sm flex items-center gap-3"
                  style={{ color: "rgba(38,17,15,0.85)", fontFamily: "var(--font-sans)" }}
                >
                  <span style={{ color: "var(--color-dark)", fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Dimension cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dimensions.map((dim, i) => {
            const Icon = dim.icon;
            return (
              <motion.div
                key={dim.num}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden cursor-default"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                }}
                whileHover={{ boxShadow: "0 8px 32px rgba(38,17,15,0.06)" }}
              >
                <motion.span
                  className="absolute top-0 left-0 h-[3px] origin-left"
                  style={{ backgroundColor: "var(--color-accent)", width: "100%", scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between mt-2">
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-xl"
                    style={{ backgroundColor: "var(--color-accent-glow)" }}
                  >
                    <Icon size={17} style={{ color: "var(--color-accent)" }} strokeWidth={1.8} />
                  </span>
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    {dim.tag}
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
                  {dim.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(38,17,15,0.8)", fontFamily: "var(--font-sans)" }}
                >
                  {dim.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

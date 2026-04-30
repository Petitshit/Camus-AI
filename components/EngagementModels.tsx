"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const packages = [
  {
    name: "Foundation",
    tagline: "Understand your AI starting point.",
    forWho:
      "Brands new to AI visibility looking to audit their current position and build a clear roadmap.",
    includes: [
      "AI Visibility Audit (global + Chinese platforms)",
      "Brand narrative gap analysis",
      "Core trust asset recommendations",
      "Competitive AI landscape overview",
      "90-day strategic roadmap",
    ],
    accent: false,
  },
  {
    name: "Authority",
    tagline: "Build consistent AI trust at scale.",
    forWho:
      "Growth-stage brands ready to systematically build AI trust assets and deploy them across platforms.",
    includes: [
      "Everything in Foundation",
      "AI trust asset creation (content, entities, citations)",
      "Prompt & query strategy",
      "Global platform distribution",
      "Quarterly monitoring & reporting",
    ],
    accent: true,
  },
  {
    name: "Leadership",
    tagline: "Own the AI conversation in your industry.",
    forWho:
      "Established brands aiming to dominate AI recommendation across all markets — including China.",
    includes: [
      "Everything in Authority",
      "Chinese AI ecosystem distribution (Doubao, DeepSeek, Kimi, Qwen)",
      "Executive & founder AI reputation management",
      "Cross-market consistency engine",
      "Monthly reporting + dedicated strategist",
    ],
    accent: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface Pkg {
  name: string;
  tagline: string;
  forWho: string;
  includes: string[];
  accent: boolean;
}

function PackageCard({
  pkg,
  index,
  inView,
}: {
  pkg: Pkg;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index + 1}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-lg p-8 flex flex-col gap-6 cursor-default"
      style={
        pkg.accent
          ? {
              backgroundColor: "var(--color-accent)",
              border: "none",
            }
          : {
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border-light)",
            }
      }
      whileHover={
        pkg.accent
          ? { y: -2, boxShadow: "0 12px 40px rgba(153,191,242,0.35)" }
          : { y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }
      }
    >
      {/* Name + tagline */}
      <div>
        <h3
          className="font-semibold text-xl mb-1"
          style={{
            fontFamily: "var(--font-sans)",
            color: pkg.accent ? "var(--color-dark)" : "var(--color-text)",
          }}
        >
          {pkg.name}
        </h3>
        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-sans)",
            color: pkg.accent ? "rgba(38,17,15,0.7)" : "rgba(38,17,15,0.6)",
          }}
        >
          {pkg.tagline}
        </p>
      </div>

      {/* For who */}
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "var(--font-sans)",
          color: pkg.accent ? "rgba(38,17,15,0.75)" : "rgba(38,17,15,0.7)",
        }}
      >
        {pkg.forWho}
      </p>

      {/* Includes */}
      <div>
        <p
          className="text-xs tracking-widest uppercase mb-3"
          style={{
            fontFamily: "var(--font-mono)",
            color: pkg.accent ? "rgba(38,17,15,0.5)" : "var(--color-text-muted)",
          }}
        >
          Includes
        </p>
        <ul className="flex flex-col gap-2 list-none m-0 p-0">
          {pkg.includes.map((item) => (
            <li
              key={item}
              className="text-sm flex items-start gap-2"
              style={{
                fontFamily: "var(--font-sans)",
                color: pkg.accent ? "rgba(38,17,15,0.8)" : "rgba(38,17,15,0.75)",
              }}
            >
              <span
                style={{
                  color: pkg.accent ? "var(--color-dark)" : "var(--color-accent)",
                  fontWeight: 700,
                  marginTop: "1px",
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* View details — arrow tail extends on whole-card hover */}
      <Link
        href="/package"
        className="mt-auto self-start inline-flex items-center gap-2"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.8125rem",
          fontWeight: 600,
          letterSpacing: "0.01em",
          color: pkg.accent ? "var(--color-dark)" : "var(--color-accent)",
        }}
      >
        <span>View details</span>
        <svg
          width="26"
          height="10"
          viewBox="0 0 26 10"
          fill="none"
          style={{ overflow: "visible" }}
        >
          <motion.line
            y1="5"
            y2="5"
            x2="22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ x1: hovered ? 0 : 14 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <polyline
            points="17,1 22,5 17,9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </motion.div>
  );
}

export default function EngagementModels() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="packages"
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
          <SectionLabel className="mb-4">Engagement Models</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "26ch" }}
          >
            Choose the Right Level of AI Trust Investment.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              maxWidth: "58ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            Three engagement models designed to meet you where you are — from first audit to full
            market leadership.
          </p>
        </motion.div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

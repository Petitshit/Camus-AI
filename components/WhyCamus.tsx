"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Globe, RefreshCw, ShieldCheck, Activity, Users } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const cards = [
  {
    icon: Zap,
    iconColor: "var(--color-accent)",
    iconBg: "var(--color-accent-glow)",
    title: "127 Expert-Grade Skills",
    body: "Our engine runs on 127 specialized GEO skills across 8 industry verticals — model adaptation, content generation, compliance. Every skill is benchmarked and continuously improving.",
  },
  {
    icon: Globe,
    iconColor: "var(--color-green)",
    iconBg: "var(--color-green-glow)",
    title: "14 LLMs. Both Sides of the Firewall.",
    body: "8 global models. 6 Chinese models — DeepSeek, Doubao, Kimi, Qwen. Platforms most Western agencies can't navigate. We've been inside their architectures from day one.",
  },
  {
    icon: RefreshCw,
    iconColor: "var(--color-accent)",
    iconBg: "var(--color-accent-glow)",
    title: "The Data Flywheel",
    body: "Every client engagement sharpens our models. The more brands we optimize, the better we understand what each AI values. Your results don't just hold — they compound.",
  },
  {
    icon: ShieldCheck,
    iconColor: "var(--color-green)",
    iconBg: "var(--color-green-glow)",
    title: "Compliance Without Compromise",
    body: "Anti-hallucination checks. Source verification. Regulatory guardrails for Western and Chinese platforms. Trust is the only currency AI respects.",
  },
  {
    icon: Activity,
    iconColor: "var(--color-accent)",
    iconBg: "var(--color-accent-glow)",
    title: "Real-Time Visibility Tracking",
    body: "Our GENO platform monitors your AI presence across every model in real time — which platforms mention you, how they describe you, where competitors are gaining ground.",
  },
  {
    icon: Users,
    iconColor: "var(--color-green)",
    iconBg: "var(--color-green-glow)",
    title: "White-Glove, Not Self-Serve",
    body: "No login and good luck. You get a dedicated GEO strategist, direct C-suite access, and a team across time zones — treating your brand presence as their own.",
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
      id="why-camus"
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
            Not another dashboard. Not another agency that discovered GEO last quarter.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(38,17,15,0.75)", maxWidth: "58ch", fontFamily: "var(--font-sans)" }}
          >
            Most GEO providers optimize for one or two models, cover one market, and hand you a PDF. We built an entirely different kind of machine.
          </p>
        </motion.div>

        {/* 3×2 card grid — first card is a full-width color block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isFeatured = i === 0;
            const isDark = i === 1; // green-toned dark card
            return (
              <motion.div
                key={card.title}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={`rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 cursor-default${isFeatured ? " lg:col-span-2" : ""}`}
                style={
                  isFeatured
                    ? { backgroundColor: "var(--color-accent)", border: "none" }
                    : isDark
                    ? { backgroundColor: "var(--color-dark)", border: "none" }
                    : { backgroundColor: "var(--color-bg-card)", border: "1px solid var(--color-border-light)" }
                }
                whileHover={
                  isFeatured
                    ? { y: -2, boxShadow: "0 12px 40px rgba(153,191,242,0.35)" }
                    : isDark
                    ? { y: -2, boxShadow: "0 12px 40px rgba(38,17,15,0.35)" }
                    : { y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }
                }
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl self-start"
                  style={{
                    backgroundColor: isFeatured
                      ? "rgba(38,17,15,0.12)"
                      : isDark
                      ? "rgba(153,191,242,0.15)"
                      : card.iconBg,
                  }}
                >
                  <Icon
                    size={19}
                    style={{
                      color: isFeatured ? "var(--color-dark)" : isDark ? "var(--color-accent)" : card.iconColor,
                    }}
                    strokeWidth={1.8}
                  />
                </span>
                <h3
                  className="leading-snug"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: isFeatured ? "1.25rem" : "1.05rem",
                    color: isFeatured ? "var(--color-dark)" : isDark ? "#FFFFFF" : "var(--color-text)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: isFeatured ? "rgba(38,17,15,0.75)" : isDark ? "rgba(255,255,255,0.6)" : "rgba(38,17,15,0.8)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

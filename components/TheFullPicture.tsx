"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Languages, ShieldAlert, Building2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const cards = [
  {
    icon: Languages,
    title: "Content architecture, not translation",
    body: "Chinese AI models reward different structures, authority signals, and citation hierarchies. Translating your English GEO assets doesn't work — the knowledge architecture must be rebuilt native-first.",
  },
  {
    icon: ShieldAlert,
    title: "Compliance is the entry gate",
    body: "Data residency, content moderation, platform-specific regulatory standards — these aren't optional, they're prerequisites. Content that doesn't pass compliance never reaches the model.",
  },
  {
    icon: Building2,
    title: "Camus operates on both sides",
    body: "We run dual-market GEO from inside both ecosystems. Your brand message stays globally consistent while being locally optimized — from our Shanghai base to our global offices.",
  },
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
          maskImage: "radial-gradient(ellipse 60% 88% at 92% 50%, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 88% at 92% 50%, black 10%, transparent 70%)",
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
          <SectionLabel className="mb-4">Global Reality</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "26ch" }}
          >
            You&apos;re optimizing for half the world. The other half has 500 million AI users you&apos;ve never spoken to.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(38,17,15,0.75)", maxWidth: "60ch", fontFamily: "var(--font-sans)" }}
          >
            Most Western GEO agencies won&apos;t tell you — or genuinely don&apos;t know: China has built an entirely parallel AI ecosystem. Different models. Different platforms. Different rules. Already massive.
          </p>
        </motion.div>

        {/* Body paragraphs */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 flex flex-col gap-4"
          style={{ maxWidth: "66ch" }}
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(38,17,15,0.8)", fontFamily: "var(--font-sans)" }}
          >
            300 million people use Doubao every month. 200 million use DeepSeek. Then there&apos;s Kimi, Qwen, Baichuan, Zhipu — none sharing training data with ChatGPT or Gemini. If your GEO strategy stops at the English-speaking internet, you&apos;re invisible to the fastest-growing AI market on earth.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(38,17,15,0.8)", fontFamily: "var(--font-sans)" }}
          >
            If you&apos;re a global brand — or plan to be — the AI models Chinese consumers and decision-makers rely on have already formed an opinion of you. Or worse, they haven&apos;t formed one at all.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.08)" }}
              >
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-xl self-start"
                  style={{ backgroundColor: "var(--color-accent-glow)" }}
                >
                  <Icon size={17} style={{ color: "var(--color-accent)" }} strokeWidth={1.8} />
                </span>
                <h3
                  className="leading-snug"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--color-text)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(38,17,15,0.8)", fontFamily: "var(--font-sans)" }}
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

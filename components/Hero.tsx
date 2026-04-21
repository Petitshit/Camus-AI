"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { number: "1.8B+", label: "Monthly AI search users" },
  { number: "500M+", label: "In China alone" },
  { number: "60%", label: "Zero-click rate" },
  { number: "20+", label: "Platforms covered" },
];

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-center pt-20 pb-0 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Backdrop orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-5%",
          width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(153,191,242,0.22) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%", left: "-8%",
          width: "40vw", height: "40vw", maxWidth: 520, maxHeight: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(128,191,132,0.14) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(115,68,50,0.13) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Label */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <SectionLabel className="mb-6">Generative Engine Optimization</SectionLabel>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif font-light leading-[1.08] tracking-tight mb-8"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            color: "var(--color-text)",
            maxWidth: "16ch",
          }}
        >
          The magic serum to make AI fall{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--color-accent)",
              textDecoration: "underline",
              textDecorationColor: "var(--color-accent)",
              textUnderlineOffset: "6px",
              fontFamily: "var(--font-serif)",
            }}
          >
            in love
          </em>{" "}
          with your brand.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{
            color: "rgba(38,17,15,0.75)",
            fontFamily: "var(--font-sans)",
            maxWidth: "60ch",
          }}
        >
          1.8 billion people now ask AI before they ask Google. ChatGPT in New York.
          DeepSeek in Shanghai. Perplexity in London. When they ask for a
          recommendation — is your brand the answer? On which models? In which markets?
          If you hesitate, we should talk.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mb-20"
        >
          <Button onClick={onOpenModal} size="lg">
            Get Your Free Brand Diagnosis →
          </Button>
          <Button href="#what-is-geo" variant="ghost" size="lg">
            What is GEO?
          </Button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full border-t relative z-10"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.number}
                className="py-8 flex flex-col gap-1"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid var(--color-border)" : "none",
                  paddingRight: "2rem",
                  paddingLeft: i > 0 ? "2rem" : "0",
                }}
              >
                <span
                  className="font-serif font-light leading-none"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    color: "var(--color-dark)",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

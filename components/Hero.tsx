"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShieldCheck, TrendingUp } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

const tags = [
  {
    icon: Eye,
    label: "AI Answer Presence",
    tooltip: "Be included in the answers your customers already trust.",
    hoverAnim: { scaleY: [1, 0.1, 1, 1] },
  },
  {
    icon: ShieldCheck,
    label: "AI Trust Signals",
    tooltip: "Shape how AI describes your brand, service, or expertise.",
    hoverAnim: { scale: [1, 1.18, 1] },
  },
  {
    icon: TrendingUp,
    label: "AI-Influenced Conversion",
    tooltip:
      "Turn AI visibility into higher-quality inquiries, consideration, and business action.",
    hoverAnim: { y: [0, -4, 0] },
  },
];

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [hoveredTag, setHoveredTag] = useState<number | null>(null);

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
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%", left: "-8%",
          width: "40vw", height: "40vw", maxWidth: 500, maxHeight: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(128,191,132,0.14) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Dithered flicker video — right side, mirrored */}
      <div
        className="absolute pointer-events-none hidden md:flex items-center justify-end"
        style={{
          top: 0,
          right: 0,
          bottom: 0,
          width: "45vw",
          maxWidth: 640,
        }}
      >
        <video
          src="/dithered-flicker.webm"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100%",
            objectFit: "contain",
            transform: "scaleX(-1)",
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(38,17,15,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <SectionLabel className="mb-6">AI Trust &amp; Conversion Solutions</SectionLabel>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: "clamp(2.6rem, 6vw, 5rem)",
            lineHeight: 1.08,
            color: "var(--color-text)",
            maxWidth: "18ch",
          }}
        >
          Build Trust. Accelerate Conversion.{" "}
          <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>In AI Search.</em>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg leading-relaxed mb-3"
          style={{
            color: "rgba(38,17,15,0.75)",
            fontFamily: "var(--font-sans)",
            maxWidth: "56ch",
          }}
        >
          Camus helps brands become visible, trusted, and chosen inside AI-generated decisions.
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm mb-10"
          style={{
            color: "rgba(38,17,15,0.5)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.02em",
          }}
        >
          From AI visibility to real business action.
        </motion.p>

        {/* 3 pill buttons — closely packed pill group, expand upward on hover */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 max-w-3xl flex flex-col gap-2 sm:gap-0 sm:flex-row"
        >
          {tags.map((tag, i) => {
            const Icon = tag.icon;
            const isHovered = hoveredTag === i;
            const isFirst = i === 0;
            const isLast = i === tags.length - 1;

            const radiusClass = `rounded-lg sm:rounded-none ${
              isFirst ? "sm:rounded-l-lg" : "sm:border-l-0"
            } ${isLast ? "sm:rounded-r-lg" : ""}`;

            return (
              <div
                key={tag.label}
                className={`relative flex-1 cursor-default transition-colors duration-200 border ${radiusClass}`}
                style={{
                  borderColor: isHovered
                    ? "rgba(153,191,242,0.35)"
                    : "rgba(115,68,50,0.18)",
                  backgroundColor: isHovered
                    ? "rgba(153,191,242,0.18)"
                    : "rgba(115,68,50,0.05)",
                }}
                onMouseEnter={() => setHoveredTag(i)}
                onMouseLeave={() => setHoveredTag(null)}
              >
                {/* Tooltip — expands upward */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 right-0 z-50 rounded-xl p-4"
                      style={{
                        bottom: "calc(100% + 10px)",
                        backgroundColor: "var(--color-dark)",
                        border: "1px solid var(--color-accent)",
                        boxShadow: "0 12px 40px rgba(38,17,15,0.25)",
                        pointerEvents: "none",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon
                          size={14}
                          style={{ color: "var(--color-accent)", flexShrink: 0 }}
                          strokeWidth={2}
                        />
                        <span
                          className="text-xs font-semibold"
                          style={{
                            fontFamily: "var(--font-sans)",
                            color: "rgba(255,255,255,0.95)",
                          }}
                        >
                          {tag.label}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {tag.tooltip}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Button face */}
                <div className="flex items-center gap-2.5 px-4 py-4 select-none">
                  <motion.span
                    className="flex-shrink-0 flex items-center justify-center"
                    animate={isHovered ? tag.hoverAnim : {}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                      style={{
                        color: isHovered ? "var(--color-accent-hover)" : "var(--color-brown)",
                        transition: "color 0.2s",
                      }}
                    />
                  </motion.span>
                  <span
                    className="font-semibold transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8125rem",
                      whiteSpace: "nowrap",
                      color: isHovered ? "var(--color-accent-hover)" : "var(--color-brown)",
                    }}
                  >
                    {tag.label}
                  </span>
                  <span
                    className="ml-auto transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: isHovered ? "var(--color-accent-hover)" : "rgba(115,68,50,0.5)",
                      flexShrink: 0,
                    }}
                  >
                    ?
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mb-20"
        >
          <Button onClick={onOpenModal} size="lg">
            Request an AI Visibility Audit →
          </Button>
          <Button href="#how-it-works" variant="ghost" size="lg">
            How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

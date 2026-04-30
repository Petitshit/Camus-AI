"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ScanSearch, AlignLeft, Layers, Send, Activity } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: ScanSearch,
    num: "01",
    title: "Audit",
    body: "Map exactly how AI currently describes, rates, and recommends your brand across all major platforms.",
    engine: "trust",
  },
  {
    icon: AlignLeft,
    num: "02",
    title: "Align",
    body: "Define your core AI trust narrative — the facts, framing, and signals AI should consistently recognise.",
    engine: "trust",
  },
  {
    icon: Layers,
    num: "03",
    title: "Structure",
    body: "Build structured AI trust assets: optimised content, citations, entity definitions, and authority signals.",
    engine: "trust",
  },
  {
    icon: Send,
    num: "04",
    title: "Distribute",
    body: "Deploy trust assets across global and Chinese AI ecosystems through targeted platform strategies.",
    engine: "conversion",
  },
  {
    icon: Activity,
    num: "05",
    title: "Track",
    body: "Monitor AI mention rate, recommendation quality, and downstream conversion signals continuously.",
    engine: "conversion",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TypewriterTitle({ text, isHovered }: { text: string; isHovered: boolean }) {
  const [displayed, setDisplayed] = useState(text);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isHovered) {
      let i = 0;
      setDisplayed("");
      timerRef.current = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(timerRef.current!);
      }, 38);
    } else {
      setDisplayed(text);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, text]);

  return (
    <>
      {displayed}
      {isHovered && displayed.length < text.length && (
        <span style={{ opacity: 0.5 }}>|</span>
      )}
    </>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const trustSteps = steps.filter((s) => s.engine === "trust");
  const conversionSteps = steps.filter((s) => s.engine === "conversion");

  return (
    <section
      id="how-it-works"
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
          <SectionLabel className="mb-4">Process</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "22ch" }}
          >
            From Invisible to Indispensable. In Five Steps.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.65)",
              maxWidth: "58ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            A transparent, consulting-led process that turns brand information into AI trust assets
            — then converts that trust into measurable business outcomes.
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
            className="flex items-center gap-2 px-5 py-2.5 flex-1"
            style={{
              backgroundColor: "var(--color-accent-glow)",
              borderRight: "1px solid var(--color-border)",
            }}
          >
            <span
              className="text-xs font-medium tracking-wide"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
            >
              Trust Engine
            </span>
            <div className="flex gap-1 ml-auto">
              {trustSteps.map((s) => (
                <span
                  key={s.num}
                  className="text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-dark)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    fontWeight: 700,
                  }}
                >
                  {s.num.replace("0", "")}
                </span>
              ))}
            </div>
          </div>
          <div
            className="flex items-center gap-2 px-5 py-2.5 flex-1"
            style={{ backgroundColor: "var(--color-green-glow)" }}
          >
            <span
              className="text-xs font-medium tracking-wide"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-green)" }}
            >
              Conversion Engine
            </span>
            <div className="flex gap-1 ml-auto">
              {conversionSteps.map((s) => (
                <span
                  key={s.num}
                  className="text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-green)",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    fontWeight: 700,
                  }}
                >
                  {s.num.replace("0", "")}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isHovered = hoveredIdx === i;
            const accentColor =
              step.engine === "trust" ? "var(--color-green)" : "var(--color-green)";

            return (
              <motion.div
                key={step.num}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group flex gap-6 md:gap-10 py-8 border-t transition-all duration-300 cursor-default"
                style={{
                  borderColor: isHovered ? accentColor : "var(--color-border)",
                  transition: "border-color 0.25s ease",
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Left: number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2 w-14">
                  <span
                    className="font-serif font-light leading-none"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.6rem",
                      color: accentColor,
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? "var(--color-green-glow)" : "transparent",
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    <Icon
                      size={15}
                      style={{ color: accentColor }}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 flex-1">
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: isHovered ? accentColor : "var(--color-text)",
                      transform: isHovered ? "translateX(4px)" : "translateX(0)",
                      transition: "color 0.25s ease, transform 0.3s ease",
                    }}
                  >
                    <TypewriterTitle text={step.title} isHovered={isHovered} />
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{
                      color: "rgba(38,17,15,0.72)",
                      fontFamily: "var(--font-sans)",
                      maxWidth: "58ch",
                      transform: isHovered ? "translateX(4px)" : "translateX(0)",
                      transition: "transform 0.3s ease 20ms",
                    }}
                  >
                    {step.body}
                  </p>
                </div>

                {/* Right: step label */}
                <div className="hidden md:flex flex-shrink-0 items-start pt-1">
                  <span
                    className="text-xs tracking-widest transition-opacity duration-300"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: accentColor,
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    STEP {step.num}
                  </span>
                </div>
              </motion.div>
            );
          })}
          <div className="border-t" style={{ borderColor: "var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}

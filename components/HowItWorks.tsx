"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ScanSearch, Cpu, Map, FileCode2, Activity } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: ScanSearch,
    num: "01",
    title: "Brand Perception Audit",
    body: "We interrogate every major AI platform — ChatGPT, Gemini, DeepSeek, Doubao, Kimi, Qwen, and more — mapping exactly how each one describes, recommends, or ignores your brand. Most brands are shocked by what they find.",
  },
  {
    icon: Cpu,
    num: "02",
    title: "Model Preference Decoding",
    body: "Every model has biases. We reverse-engineer what each one values — content formats, source authority, citation preferences, semantic structures. What makes Gemini trust you is not what makes DeepSeek trust you.",
  },
  {
    icon: Map,
    num: "03",
    title: "Custom GEO Strategy",
    body: "A unified cross-platform, cross-market optimization roadmap — tailored to your brand, competitive landscape, and the specific models that matter most for your audience in each geography.",
  },
  {
    icon: FileCode2,
    num: "04",
    title: "Knowledge Engineering",
    body: "We create and distribute structured brand knowledge — high-authority, model-friendly content built to be cited and trusted. For Chinese platforms, built natively. For global platforms, built to compound.",
  },
  {
    icon: Activity,
    num: "05",
    title: "Continuous Monitoring & Iteration",
    body: "Real-time tracking across all 20+ platforms. We watch how models talk about you after every training update and competitive shift — and adapt before the gap opens.",
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
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered, text]);

  return <>{displayed}{isHovered && displayed.length < text.length && <span style={{ opacity: 0.5 }}>|</span>}</>;
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
          className="mb-16"
        >
          <SectionLabel className="mb-4">Process</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "22ch" }}
          >
            Five steps to becoming the answer — everywhere.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(38,17,15,0.65)", maxWidth: "58ch", fontFamily: "var(--font-sans)" }}
          >
            No black boxes. A transparent, rigorous process from first audit to full-spectrum AI dominance — Western and Chinese platforms simultaneously.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={step.num}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group flex gap-6 md:gap-10 py-8 border-t transition-all duration-300 cursor-default"
                style={{
                  borderColor: isHovered ? "var(--color-green)" : "var(--color-border)",
                  transition: "border-color 0.25s ease",
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Left: number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2 w-14">
                  <span
                    className="font-serif font-light leading-none transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.6rem",
                      color: "var(--color-green)",
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
                    <Icon size={15} style={{ color: "var(--color-green)" }} strokeWidth={1.8} />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 flex-1">
                  <h3
                    className="transition-transform duration-300 ease-out"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: isHovered ? "var(--color-green)" : "var(--color-text)",
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

                {/* Right: step tag */}
                <div className="hidden md:flex flex-shrink-0 items-start pt-1">
                  <span
                    className="text-xs tracking-widest transition-opacity duration-300"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-green)",
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

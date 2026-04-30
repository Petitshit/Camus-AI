"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface FinalCtaProps {
  onOpenModal: () => void;
}

export default function FinalCta({ onOpenModal }: FinalCtaProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="final-cta"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      {/* Background orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "50vw",
          maxWidth: 900,
          maxHeight: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(153,191,242,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          right: "-5%",
          width: "35vw",
          height: "35vw",
          maxWidth: 440,
          maxHeight: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(128,191,132,0.12) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Dithered SVG — spans full width, cropped by section overflow */}
      <div
        className="absolute inset-x-0 pointer-events-none flex items-center justify-center"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <img
          src="/dithered-cta.svg"
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            height: "auto",
            opacity: 0.5,
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionLabel
            className="mb-6 justify-center flex"
            style={{ color: "rgba(153,191,242,0.7)" } as React.CSSProperties}
          >
            Let&apos;s Begin
          </SectionLabel>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-serif font-light leading-tight mb-6"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: "#FFFFFF",
          }}
        >
          See How AI Sees Your Brand Today.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-sans)" }}
        >
          Request your AI Visibility Audit and find out where you stand, where you&apos;re missing,
          and what it takes to lead.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center"
        >
          <Button onClick={onOpenModal} size="lg">
            Request Your AI Visibility Audit →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

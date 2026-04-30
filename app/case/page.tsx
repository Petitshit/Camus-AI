"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const industries = [
  "Financial Services",
  "Healthcare",
  "Education",
  "Technology",
  "Consumer Brands",
  "Professional Services",
];

export default function CasePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <Nav onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
          <SectionLabel className="mb-4 justify-center flex">Case Studies</SectionLabel>
          <h1
            className="font-serif font-light leading-tight mb-5"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
            }}
          >
            Real results, coming soon.
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{
              color: "rgba(38,17,15,0.7)",
              fontFamily: "var(--font-sans)",
              maxWidth: "52ch",
              margin: "0 auto 2.5rem",
            }}
          >
            We&apos;re preparing detailed case studies across financial services, healthcare,
            education, and more. Check back soon — or reach out to learn what we&apos;ve achieved
            for clients in your industry.
          </p>
        </motion.div>

        {/* Industry tags */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((ind) => (
            <span
              key={ind}
              className="text-sm px-4 py-2 rounded-full"
              style={{
                fontFamily: "var(--font-sans)",
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
            >
              {ind}
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button onClick={() => setModalOpen(true)} size="lg">
            Request an AI Visibility Audit →
          </Button>
          <Button href="/" variant="ghost" size="lg">
            Back to Home
          </Button>
        </motion.div>
      </div>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

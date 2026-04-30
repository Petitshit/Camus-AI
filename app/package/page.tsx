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
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const packages = [
  {
    name: "Foundation",
    tagline: "Understand your AI starting point.",
    forWho:
      "Ideal for brands new to AI visibility — or those who want to pressure-test their current position before committing to a full programme.",
    description:
      "The Foundation package gives you a complete, unvarnished picture of how AI currently sees your brand. We audit every major platform — global and Chinese — and map the gap between your intended positioning and your actual AI perception. You leave with a 90-day roadmap and clear recommendations for where to act first.",
    includes: [
      "AI Visibility Audit across 10+ platforms (global + Chinese)",
      "Brand narrative gap analysis",
      "Core trust asset recommendations",
      "Competitive AI landscape overview",
      "90-day strategic roadmap",
      "One-hour strategy briefing",
    ],
    accent: false,
  },
  {
    name: "Authority",
    tagline: "Build consistent AI trust at scale.",
    forWho:
      "For growth-stage brands that understand the opportunity and are ready to systematically build AI trust assets and deploy them across platforms.",
    description:
      "The Authority package moves from strategy to execution. We build the structured AI trust assets your brand needs — optimised content, entity definitions, citations, and authority signals — and deploy them through targeted platform strategies. Monthly monitoring ensures you can see what's working and adapt continuously.",
    includes: [
      "Everything in Foundation",
      "AI trust asset creation (content, entities, citations, knowledge graphs)",
      "Prompt & query strategy for your core use cases",
      "Global platform distribution (ChatGPT, Gemini, Perplexity, and more)",
      "Quarterly monitoring & reporting dashboard",
      "Dedicated account strategist",
    ],
    accent: true,
  },
  {
    name: "Leadership",
    tagline: "Own the AI conversation in your industry.",
    forWho:
      "For established brands aiming to dominate AI recommendation across all markets — including the Chinese AI ecosystem — and maintain that position continuously.",
    description:
      "The Leadership package is our most comprehensive engagement. In addition to everything in Authority, we extend into the Chinese AI ecosystem with native-language trust asset distribution, executive reputation management, and a cross-market consistency engine that ensures your brand story stays aligned everywhere AI is asked about you.",
    includes: [
      "Everything in Authority",
      "Chinese AI ecosystem distribution (Doubao, DeepSeek, Kimi, Qwen, Baidu AI)",
      "Executive & founder AI reputation management",
      "Cross-market consistency engine",
      "Monthly reporting + C-suite briefings",
      "Dedicated senior strategist + China market lead",
    ],
    accent: false,
  },
];

export default function PackagePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <Nav onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
          <SectionLabel className="mb-4">Packages</SectionLabel>
          <h1
            className="font-serif font-light leading-tight mb-5"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
              maxWidth: "22ch",
            }}
          >
            The Right Level of AI Trust Investment for Your Stage.
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              fontFamily: "var(--font-sans)",
              maxWidth: "60ch",
            }}
          >
            Three engagement models — from first audit to full market leadership. All are
            consulting-led, tailored to your business, and measured against real outcomes.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="flex flex-col gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl p-8 md:p-10"
              style={
                pkg.accent
                  ? { backgroundColor: "var(--color-accent)", border: "none" }
                  : {
                      backgroundColor: "var(--color-bg-card)",
                      border: "1px solid var(--color-border-light)",
                    }
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-12">
                {/* Left */}
                <div className="flex flex-col gap-4">
                  <div>
                    <h2
                      className="font-semibold text-2xl mb-1"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: pkg.accent ? "var(--color-dark)" : "var(--color-text)",
                      }}
                    >
                      {pkg.name}
                    </h2>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: pkg.accent ? "rgba(38,17,15,0.65)" : "rgba(38,17,15,0.6)",
                      }}
                    >
                      {pkg.tagline}
                    </p>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: pkg.accent ? "rgba(38,17,15,0.75)" : "rgba(38,17,15,0.7)",
                    }}
                  >
                    {pkg.forWho}
                  </p>
                  <Button
                    onClick={() => setModalOpen(true)}
                    variant={pkg.accent ? "ghost" : "primary"}
                    size="sm"
                  >
                    Get Started →
                  </Button>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-5">
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: pkg.accent ? "rgba(38,17,15,0.8)" : "rgba(38,17,15,0.75)",
                    }}
                  >
                    {pkg.description}
                  </p>
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-14 text-center"
        >
          <p
            className="text-base mb-6"
            style={{ color: "rgba(38,17,15,0.65)", fontFamily: "var(--font-sans)" }}
          >
            Not sure which package is right for you? Start with a conversation.
          </p>
          <Button onClick={() => setModalOpen(true)} size="lg">
            Request an AI Visibility Audit →
          </Button>
        </motion.div>
      </div>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

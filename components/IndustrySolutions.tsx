"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Landmark, HeartPulse, GraduationCap } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const industries = [
  {
    icon: Landmark,
    image: "/industry-finance.avif",
    label: "Financial Services",
    context:
      "Clients ask AI to recommend advisors, investment platforms, and fintech products.",
    trustFocus: "Regulatory credibility, product expertise, and verified track record.",
    conversionFocus: "High-intent advisory inquiries and product consideration.",
  },
  {
    icon: HeartPulse,
    image: "/industry-healthcare.avif",
    label: "Healthcare",
    context:
      "Patients and partners ask AI about providers, treatments, and health brands.",
    trustFocus: "Clinical authority, safety signals, and professional accreditation.",
    conversionFocus: "Appointment inquiries and partnership consideration.",
  },
  {
    icon: GraduationCap,
    image: "/industry-education.avif",
    label: "Education",
    context:
      "Students and families ask AI to compare programmes, institutions, and outcomes.",
    trustFocus: "Academic reputation, outcome data, and faculty authority.",
    conversionFocus: "Application inquiries, enrolment lift, and partnership interest.",
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

export default function IndustrySolutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="industry-solutions"
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
          className="mb-14"
        >
          <SectionLabel className="mb-4">Industry Solutions</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "26ch" }}
          >
            Built for the Industries Where AI Decisions Matter Most.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.75)",
              maxWidth: "58ch",
              fontFamily: "var(--font-sans)",
            }}
          >
            AI trust and conversion challenges are different by sector. We bring deep
            vertical expertise to every engagement.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.label}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="rounded-lg overflow-hidden flex flex-col cursor-default"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }}
              >
                {/* Cover image with icon badge overlay */}
                <div className="relative" style={{ aspectRatio: "16 / 9" }}>
                  <img
                    src={ind.image}
                    alt={ind.label}
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: "cover" }}
                  />
                  <span
                    className="absolute flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{
                      bottom: 12,
                      left: 12,
                      backgroundColor: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                    }}
                  >
                    <Icon
                      size={19}
                      style={{ color: "var(--color-accent)" }}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                <div className="p-7 flex flex-col gap-5">
                <h3
                  className="font-semibold text-lg leading-snug"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
                >
                  {ind.label}
                </h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-2"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      AI Decision Context
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(38,17,15,0.75)", fontFamily: "var(--font-sans)" }}
                    >
                      {ind.context}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-2"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-accent)",
                      }}
                    >
                      Trust Asset Focus
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(38,17,15,0.75)", fontFamily: "var(--font-sans)" }}
                    >
                      {ind.trustFocus}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-2"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-green)",
                      }}
                    >
                      Conversion Focus
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(38,17,15,0.75)", fontFamily: "var(--font-sans)" }}
                    >
                      {ind.conversionFocus}
                    </p>
                  </div>
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Button href="/case" variant="ghost" size="sm">
            View Case Studies →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

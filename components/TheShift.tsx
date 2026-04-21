"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, MousePointerBan, SearchX, Bot } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const cards = [
  {
    icon: MessageSquare,
    num: "01",
    title: "The question changed",
    body: "Nobody googles 'best CRM 2026' anymore. They ask AI for one name. That name is yours or your competitor's. There's no page two.",
  },
  {
    icon: MousePointerBan,
    num: "02",
    title: "The click died",
    body: "60% of AI answers never produce a website visit. The answer IS the destination — for over a billion people, from San Francisco to Shenzhen.",
  },
  {
    icon: SearchX,
    num: "03",
    title: "SEO can't save you",
    body: "AI models don't crawl — they read, synthesize, and judge. They form opinions about your brand. You need to shape those opinions.",
  },
  {
    icon: Bot,
    num: "04",
    title: "Agents are already here",
    body: "AI agents book flights, compare vendors, and make purchase decisions. If they've never encountered your brand, they'll never recommend you.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TheShift() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="the-shift"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "var(--color-dark)" }}
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
          <SectionLabel className="mb-4" style={{ color: "rgba(153,191,242,0.65)" } as React.CSSProperties}>The Shift</SectionLabel>
          <SectionTitle
            className="mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "22ch", color: "#FFFFFF" }}
          >
            The biggest attention migration since search. And it&apos;s already over.
          </SectionTitle>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", maxWidth: "58ch", fontFamily: "var(--font-sans)" }}
          >
            People stopped browsing. They started asking. AI doesn&apos;t show ten blue links — it picks one answer. If that answer isn&apos;t you, you&apos;re not second place. You&apos;re nowhere.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.num}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-xl"
                    style={{ backgroundColor: "rgba(153,191,242,0.15)" }}
                  >
                    <Icon size={18} style={{ color: "var(--color-accent)" }} strokeWidth={1.8} />
                  </span>
                  <span
                    className="text-xs font-medium tracking-widest"
                    style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.25)" }}
                  >
                    {card.num}
                  </span>
                </div>
                <h3
                  className="leading-snug"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#FFFFFF",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)" }}
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

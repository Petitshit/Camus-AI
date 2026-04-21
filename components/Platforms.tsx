"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";

const G = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

const globalPlatforms = [
  { name: "ChatGPT",            icon: G("openai.com") },
  { name: "Google Gemini",      icon: G("gemini.google.com") },
  { name: "Microsoft Copilot",  icon: G("copilot.microsoft.com") },
  { name: "Claude",             icon: "https://cdn.simpleicons.org/anthropic/26110F" },
  { name: "Perplexity",         icon: G("perplexity.ai") },
  { name: "Grok",               icon: G("x.com") },
  { name: "Google AI Overview", icon: G("google.com") },
  { name: "Google AI Mode",     icon: G("google.com") },
  { name: "Meta AI",            icon: G("meta.ai") },
];

const chinaPlatforms = [
  { name: "DeepSeek",                 icon: G("deepseek.com") },
  { name: "Doubao (豆包)",             icon: G("doubao.com") },
  { name: "Kimi",                     icon: G("kimi.moonshot.cn") },
  { name: "Qwen (通义千问)",           icon: G("tongyi.aliyun.com") },
  { name: "Wenxin Yiyan (文心一言)",   icon: G("yiyan.baidu.com") },
  { name: "Baichuan (百川智能)",       icon: G("baichuan-ai.com") },
  { name: "Zhipu ChatGLM (智谱清言)", icon: G("chatglm.cn") },
  { name: "iFlytek Spark (讯飞星火)", icon: G("xinghuo.xfyun.cn") },
  { name: "Hailuo AI (海螺AI)",       icon: "/icons/minimax.png" },
  { name: "Tiangong AI (天工)",       icon: G("tiangong.cn") },
  { name: "360 Zhinao (360智脑)",     icon: G("360.cn") },
  { name: "Tencent Yuanbao (元宝)",   icon: G("yuanbao.tencent.com") },
];

function Pill({ platform }: { platform: { name: string; icon: string } }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm flex-shrink-0"
      style={{
        backgroundColor: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        color: "var(--color-text)",
        fontFamily: "var(--font-sans)",
        whiteSpace: "nowrap",
      }}
    >
      <span className="flex-shrink-0 w-5 h-5 relative">
        <Image
          src={platform.icon}
          alt={platform.name}
          width={20}
          height={20}
          className="w-5 h-5 object-contain rounded-full"
          unoptimized
        />
      </span>
      {platform.name}
    </span>
  );
}

function LogoTicker({
  platforms,
  reverse = false,
  speed = 40,
}: {
  platforms: { name: string; icon: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...platforms, ...platforms];
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-2.5"
        style={{
          width: "max-content",
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((p, i) => (
          <Pill key={`${p.name}-${i}`} platform={p} />
        ))}
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Platforms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="platforms"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "var(--color-bg-elevated)" }}
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
          <SectionLabel className="mb-4">Coverage</SectionLabel>
          <SectionTitle
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "26ch" }}
          >
            20+ AI platforms. Two ecosystems. One strategy that works across all of them.
          </SectionTitle>
        </motion.div>
      </div>

      {/* Global ticker */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-5"
      >
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
          >
            Global
          </p>
        </div>
        <LogoTicker platforms={globalPlatforms} speed={45} />
      </motion.div>

      {/* China ticker */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <p
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
          >
            China
          </p>
        </div>
        <LogoTicker platforms={chinaPlatforms} speed={38} reverse />
      </motion.div>
    </section>
  );
}

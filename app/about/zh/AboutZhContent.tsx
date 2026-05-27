"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import LanguageToggle from "@/components/LanguageToggle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Methodology — 5 numbered principles ──
const methodology = [
  {
    num: "01",
    title: "实体识别架构",
    body: "确保 AI 将品牌识别为独立、可信的专业实体，而非信息碎片。",
  },
  {
    num: "02",
    title: "Schema.org 部署",
    body: "在官网及关联平台植入机器可读的结构化数据，让 AI 精确解析品牌身份。",
  },
  {
    num: "03",
    title: "跨平台一致性管理",
    body: "统一 LinkedIn、官网、媒体、百科等所有信源的描述,防止 AI「实体混淆」。",
  },
  {
    num: "04",
    title: "信任信号体系",
    body: "构建第三方背书、专业资质、案例证据的完整链条,提升 AI 引用权重。",
  },
  {
    num: "05",
    title: "多语言 AI 生态适配",
    body: "同步优化中英文 AI 搜索引擎的可见性,覆盖全球主要 AI 平台。",
  },
];

// ── Services — 5 service offerings ──
const services = [
  {
    num: "01",
    title: "企业 GEO 系统架构",
    body: "为品牌设计面向 AI 搜索引擎的整体信息架构，包括实体定义、Schema 部署、跨平台信源梳理。",
  },
  {
    num: "02",
    title: "AI 可见性诊断",
    body: "评估品牌在主流 AI 平台（ChatGPT、Perplexity、Kimi、文心一言、豆包、Google SGE 等）中的当前可见性与引用质量，识别盲区与风险点。",
  },
  {
    num: "03",
    title: "Schema.org 实施",
    body: "在官网、博客、产品页等关键页面部署结构化数据标记，确保 AI 爬虫精确解析品牌身份、服务范围、团队资质。",
  },
  {
    num: "04",
    title: "跨平台信源治理",
    body: "统一 LinkedIn、知乎、微信公众号、百度百科、媒体稿件等所有外部信源的描述一致性，构建 AI 可信引用网络。",
  },
  {
    num: "05",
    title: "多语言 GEO 部署",
    body: "同步优化中英文 AI 生态的可见性，确保品牌在全球及中文 AI 搜索引擎中均被准确识别与推荐。",
  },
];

// ── Trust endorsements — 4 short positioning points ──
const trustPoints = [
  {
    title: "技术导向",
    body: "团队核心成员具备企业级软件架构与数据平台背景，GEO 方案基于工程逻辑而非营销套路。",
  },
  {
    title: "亚太深耕",
    body: "总部位于新加坡，深度理解亚太区企业品牌在全球及本地 AI 生态中的定位需求。",
  },
  {
    title: "领域专注",
    body: "专注 GEO 系统架构，不分散精力。",
  },
  {
    title: "隐私合规",
    body: "所有客户案例严格保密，采用匿名化表述，保护客户商业隐私。",
  },
];

export default function AboutZhContent() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main
      style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}
      lang="zh-CN"
    >
      <Nav onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <SectionLabel>AI 信任与转化解决方案</SectionLabel>
            <LanguageToggle current="zh" enHref="/about" zhHref="/about/zh" />
          </div>

          <h1
            className="font-serif font-light leading-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.8vw, 3.5rem)",
              color: "var(--color-text)",
              maxWidth: "22ch",
              lineHeight: 1.2,
            }}
          >
            CAMUS —{" "}
            <span style={{ color: "var(--color-accent)" }}>
              让 AI 真正推荐你的品牌
            </span>
          </h1>

          {/* Lead paragraph with Schema.org DefinedTerm microdata */}
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.78)",
              fontFamily: "var(--font-sans)",
              maxWidth: "62ch",
            }}
          >
            <span
              itemScope
              itemType="https://schema.org/DefinedTerm"
              className="ai-definition"
            >
              <span itemProp="name">CAMUS</span>{" "}
              <span itemProp="description">
                专注于 GEO（Generative Engine Optimization，生成式引擎优化）——为企业品牌设计面向
                AI 搜索引擎的结构化信息系统，让 AI 理解你是谁、信任你说什么、持续推荐你的品牌。
              </span>
            </span>
          </p>
        </motion.div>

        {/* ─── Section: 什么是 GEO ─── */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <SectionLabel className="mb-3">什么是 GEO</SectionLabel>
          <h2
            className="font-serif font-light leading-tight mb-5"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              color: "var(--color-text)",
              maxWidth: "28ch",
              lineHeight: 1.25,
            }}
          >
            SEO 让品牌被找到，
            <br />
            GEO 让品牌被{" "}
            <span style={{ color: "var(--color-accent)" }}>
              理解、信任、推荐
            </span>
            。
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{
              color: "rgba(38,17,15,0.78)",
              fontFamily: "var(--font-sans)",
              maxWidth: "62ch",
            }}
          >
            AI 搜索引擎（如 ChatGPT、Perplexity、Kimi、文心一言、豆包）不再依赖关键词匹配，而是通过理解品牌的实体身份、专业背书、结构化信息来决定是否推荐你。{" "}
            <span itemScope itemType="https://schema.org/DefinedTerm">
              <span itemProp="name">GEO（Generative Engine Optimization，生成式引擎优化）</span>
              <meta itemProp="inDefinedTermSet" content="CAMUS GEO Terminology" />
              <meta itemProp="description" content="面向 AI 搜索引擎的企业级信息架构设计与优化方法论。" />
            </span>{" "}
            不是内容营销，是<strong style={{ color: "var(--color-text)" }}>信息架构工程</strong>——我们为企业构建 AI 原生环境所需的数据结构与信任信号体系。
          </p>
        </motion.div>

        {/* ─── Section: 我们的方法论 ─── */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <SectionLabel className="mb-3">我们的方法论</SectionLabel>
          <h2
            className="font-serif font-light leading-tight mb-5"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              color: "var(--color-text)",
              maxWidth: "28ch",
              lineHeight: 1.25,
            }}
          >
            我们不优化内容，
            <br />
            我们{" "}
            <span style={{ color: "var(--color-accent)" }}>设计信息系统</span>
            。
          </h2>
          <p
            className="text-base leading-relaxed mb-2"
            style={{
              color: "rgba(38,17,15,0.78)",
              fontFamily: "var(--font-sans)",
              maxWidth: "62ch",
            }}
          >
            在 CAMUS，我们不写「适合 AI 的文案」。我们做的是更底层的工作：
          </p>
        </motion.div>

        {/* Methodology — 5 numbered items */}
        <div className="flex flex-col gap-5 mb-24">
          {methodology.map((item, i) => (
            <motion.div
              key={item.num}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-6 flex gap-5"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border-light)",
              }}
              whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }}
            >
              <span
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  backgroundColor: "var(--color-accent-glow)",
                  border: "1px solid rgba(153,191,242,0.35)",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                }}
              >
                {item.num}
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--color-text)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(38,17,15,0.78)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Section: 团队背景 ─── */}
        <motion.div
          custom={8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <SectionLabel className="mb-3">团队背景</SectionLabel>
          <div className="flex flex-col gap-5">
            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(38,17,15,0.82)",
                fontFamily: "var(--font-sans)",
                maxWidth: "62ch",
              }}
            >
              CAMUS 核心团队来自<strong style={{ color: "var(--color-text)" }}>企业级软件架构体系</strong>——在 CRM 系统、客户数据平台（CDP）、企业数据建模领域有多年积累。这段背景让我们理解一个关键事实：
              <span style={{ color: "var(--color-accent)" }}>
                AI 搜索引擎解析品牌的方式，与企业软件解析客户身份的逻辑是相通的。
              </span>
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "rgba(38,17,15,0.78)",
                fontFamily: "var(--font-sans)",
                maxWidth: "62ch",
              }}
            >
              我们不从「营销技巧」切入 GEO，而是从{" "}
              <span itemScope itemType="https://schema.org/DefinedTerm">
                <span itemProp="name">信息架构（Information Architecture）</span>
                <meta itemProp="inDefinedTermSet" content="CAMUS GEO Terminology" />
                <meta itemProp="description" content="设计信息组织、结构、标签与导航系统的技术学科。" />
              </span>{" "}
              和数据建模的技术视角，为企业构建 AI 可见性的基础设施。
            </p>

            {/* Credentials footer */}
            <div
              className="rounded-lg p-5 mt-3 flex flex-col gap-2"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border-light)",
              }}
            >
              <div className="flex gap-3 items-baseline">
                <span
                  className="text-xs tracking-widest uppercase flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-text-muted)",
                    width: 80,
                  }}
                >
                  核心成员
                </span>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-text)",
                  }}
                >
                  前 IBM 企业软件架构师 · 新加坡国立大学（NUS） · 帝国理工学院（Imperial College London）
                </span>
              </div>
              <div className="flex gap-3 items-baseline">
                <span
                  className="text-xs tracking-widest uppercase flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-text-muted)",
                    width: 80,
                  }}
                >
                  总部
                </span>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-text)",
                  }}
                >
                  新加坡 · 服务亚太区及全球市场的企业品牌
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Section: 服务范围 ─── */}
        <motion.div
          custom={9}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <SectionLabel className="mb-3">服务范围</SectionLabel>
          <h2
            className="font-serif font-light leading-tight mb-2"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              color: "var(--color-text)",
              maxWidth: "28ch",
              lineHeight: 1.25,
            }}
          >
            五项核心服务，
            <br />
            覆盖企业 AI 可见性{" "}
            <span style={{ color: "var(--color-accent)" }}>全链路</span>。
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              custom={i + 10}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-7 flex flex-col gap-4"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border-light)",
              }}
              whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(38,17,15,0.07)" }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs tracking-widest"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-accent)",
                  }}
                >
                  {svc.num}
                </span>
              </div>
              <h3
                className="leading-snug"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--color-text)",
                }}
              >
                {svc.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(38,17,15,0.78)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {svc.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ─── Section: 信任背书 ─── */}
        <motion.div
          custom={15}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <SectionLabel className="mb-3">信任背书</SectionLabel>
          <h2
            className="font-serif font-light leading-tight mb-2"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              color: "var(--color-text)",
              maxWidth: "28ch",
              lineHeight: 1.25,
            }}
          >
            为什么是 CAMUS。
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              custom={i + 16}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-6 flex flex-col gap-3"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border-light)",
                borderLeft: "3px solid var(--color-accent)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--color-text)",
                  letterSpacing: "0.02em",
                }}
              >
                {point.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(38,17,15,0.78)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          custom={20}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 flex gap-4 flex-wrap"
        >
          <Button onClick={() => setModalOpen(true)} size="lg">
            申请 AI 可见性诊断 →
          </Button>
          <Button href="/insights" variant="ghost" size="lg">
            阅读 GEO 洞察
          </Button>
        </motion.div>
      </div>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

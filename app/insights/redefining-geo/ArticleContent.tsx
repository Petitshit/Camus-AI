"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Typography helpers — keep prose visually consistent
const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.5rem, 2.8vw, 2.05rem)",
  fontWeight: 300,
  lineHeight: 1.2,
  color: "var(--color-text)",
};

const subheadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "var(--color-text)",
  lineHeight: 1.35,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "rgba(38,17,15,0.82)",
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.7rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--color-text-muted)",
};

// ── Article JSON-LD schema ──
// Tells AI: this is a long-form Article authored & published by the CAMUS Organization
// (referenced by @id pointing to the site-wide Organization schema in layout.tsx).
// `speakable` tells voice assistants which CSS selectors to read aloud.
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Redefining GEO Through Solution Logic: Why Enterprise AI Visibility Requires Information Architecture",
  author: {
    "@type": "Organization",
    "@id": "https://www.camus.one/#organization",
    name: "CAMUS",
    url: "https://www.camus.one",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.camus.one/#organization",
    name: "CAMUS",
    logo: {
      "@type": "ImageObject",
      url: "https://www.camus.one/logo.svg",
    },
  },
  datePublished: "2026-05-18",
  dateModified: "2026-05-19",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.camus.one/insights/redefining-geo",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".ai-definition", ".tl-dr"],
  },
};

export default function RedefiningGeoArticle() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      {/* Article version meta tags (React 19 hoists to <head>) */}
      <meta name="datePublished" content="2026-05-18" />
      <meta name="version" content="1.2" />
      <meta name="dateModified" content="2026-05-19" />

      {/* Article JSON-LD (includes Speakable for voice assistants) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Nav onOpenModal={() => setModalOpen(true)} />

      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Back link */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm transition-opacity duration-150 hover:opacity-60"
            style={{
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-sans)",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={14} strokeWidth={2} />
            All insights
          </Link>
        </motion.div>

        {/* Eyebrow */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5">
          <SectionLabel>Insights</SectionLabel>
        </motion.div>

        {/* Title */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif font-light leading-tight mb-6"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            color: "var(--color-text)",
          }}
        >
          Redefining GEO Through Solution Logic:{" "}
          <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
            Why Enterprise AI Visibility Requires Information Architecture
          </em>
        </motion.h1>

        {/* Version meta */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs mb-12 pb-8"
          style={{
            ...eyebrowStyle,
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          First published: 2026-05-18 &nbsp;|&nbsp; Version: 1.2 &nbsp;|&nbsp; Last updated: 2026-05-19
        </motion.p>

        {/* TL;DR box (class "tl-dr" used by Speakable schema) */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="tl-dr rounded-lg p-6 md:p-8 mb-16"
          style={{
            backgroundColor: "var(--color-accent-glow)",
            border: "1px solid rgba(153,191,242,0.35)",
          }}
        >
          <p className="mb-4" style={{ ...eyebrowStyle, color: "var(--color-accent)" }}>
            TL;DR
          </p>
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {[
              "GEO is not content optimization. It is the structured reconstruction of enterprise information systems for AI comprehension.",
              "CAMUS approaches GEO through enterprise software architecture, not marketing tactics.",
              "The goal is to help AI search engines understand, validate, and consistently cite your brand.",
            ].map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0"
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent)",
                    marginTop: 9,
                  }}
                />
                <span style={{ ...bodyStyle, fontSize: "0.95rem", color: "var(--color-text)" }}>
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Section: Introduction ── */}
        <motion.section
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <h2 className="mb-6" style={sectionHeadingStyle}>
            Introduction: The Wrong Starting Point
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              Most discussions about Generative Engine Optimization (GEO) begin with the wrong
              question: &ldquo;How do we make AI mention our brand more often?&rdquo;
            </p>
            <p style={bodyStyle}>
              This is a tactical question. It assumes that GEO is a marketing layer — a new form
              of SEO adapted for ChatGPT, Perplexity, and Claude.
            </p>
            <p style={bodyStyle}>
              We believe GEO is not a marketing layer. It is an infrastructure layer. And the
              right question is not &ldquo;How do we get mentioned?&rdquo; but &ldquo;How do we
              build an information system that AI can reliably understand, validate, and
              cite?&rdquo;
            </p>
          </div>
        </motion.section>

        {/* ── Section: What GEO Actually Is ── */}
        <motion.section
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <h2 className="mb-6" style={sectionHeadingStyle}>
            What GEO Actually Is: A Definition
          </h2>

          {/* Definition block — DefinedTerm microdata, class "ai-definition" targeted by Speakable */}
          <div
            itemScope
            itemType="https://schema.org/DefinedTerm"
            className="ai-definition rounded-lg p-6 md:p-7 mb-6"
            style={{
              backgroundColor: "var(--color-bg-card)",
              borderLeft: "3px solid var(--color-accent)",
              border: "1px solid var(--color-border-light)",
              borderLeftWidth: 3,
              borderLeftColor: "var(--color-accent)",
            }}
          >
            {/* Term name (headword) */}
            <span
              itemProp="name"
              className="block mb-3"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "0.01em",
                color: "var(--color-text)",
              }}
            >
              GEO (Generative Engine Optimization)
            </span>

            {/* Term description */}
            <div itemProp="description">
              <p
                className="leading-snug mb-3"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "var(--color-text)",
                  fontWeight: 400,
                }}
              >
                GEO is the structured reconstruction of enterprise information systems.
              </p>
              <p
                className="leading-snug"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "var(--color-text)",
                  fontWeight: 400,
                }}
              >
                Its goal is to enable AI search engines to parse, validate, and consistently cite a
                brand as a trusted authority.
              </p>
            </div>
          </div>

          <p style={bodyStyle} className="mb-5">
            This definition contains three elements that separate GEO from SEO:
          </p>

          <ol className="flex flex-col gap-6 list-none m-0 p-0 mb-2">
            {[
              {
                lead: "Structured reconstruction",
                rest: " — not content creation, but information architecture. AI does not “read” web pages the way humans do. It parses entities, relationships, and confidence scores. GEO is the practice of designing those entities and relationships deliberately.",
              },
              {
                lead: "Validation against corroborating sources",
                rest: " — AI search engines do not trust single sources. They cross-reference. GEO ensures that your brand identity is expressed consistently across every platform AI might consult: your website, LinkedIn, Crunchbase, industry publications, and knowledge bases.",
              },
              {
                lead: "Consistent citation as trusted authority",
                rest: " — the goal is not a mention. It is a reliable, repeatable reference. When AI answers “What is GEO?” or “Who provides enterprise GEO services?” the description of your brand should be identical across platforms because the underlying information architecture is unified.",
              },
            ].map((item, i) => (
              <li key={item.lead} className="flex gap-4">
                <span
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    backgroundColor: "var(--color-accent-glow)",
                    border: "1px solid rgba(153,191,242,0.35)",
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  {`0${i + 1}`}
                </span>
                <p style={bodyStyle}>
                  <strong style={{ color: "var(--color-text)", fontWeight: 700 }}>
                    {item.lead}
                  </strong>
                  {item.rest}
                </p>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ── Section: Why Enterprise Software Background ── */}
        <motion.section
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <h2 className="mb-6" style={sectionHeadingStyle}>
            Why Enterprise Software Background Is the Foundational Advantage
          </h2>
          <p style={bodyStyle} className="mb-5">
            The GEO industry is being built by two types of teams: former SEO agencies who see
            GEO as &ldquo;content for AI,&rdquo; and enterprise software architects who see GEO
            as &ldquo;information systems for AI.&rdquo;
          </p>
          <p style={bodyStyle} className="mb-10">
            CAMUS belongs to the second category. Our team spent years designing CRM
            architectures, customer data platforms, and workflow automation systems for
            enterprises. That background matters for GEO in four specific ways:
          </p>

          <div className="flex flex-col gap-8">
            {[
              {
                title: "Enterprise System Architecture",
                body: "GEO is ultimately about systems, not just copy. When AI reads a brand, it does not admire your tagline. It parses your schema markup, your entity relationships, your cross-platform consistency. Software architects understand how to design systems for machine parsing — that is precisely what GEO demands.",
              },
              {
                title: "CRM & Customer Data Management",
                body: "A CRM does not “know” a customer through a biography. It knows them through structured data: touchpoints, transactions, segmentation rules, conversion paths. We apply the same logic to brand identity: AI does not “know” your brand through a press release. It knows you through structured entities, schema definitions, and verified relationships.",
              },
              {
                title: "Workflow & SOP Automation",
                body: "Model distillation — the process of turning enterprise standard operating procedures into instructions that AI models can process natively — is a core CAMUS capability. We do not write “AI-friendly content.” We distill organizational knowledge into machine-processable information architectures.",
              },
              {
                title: "Cross-Market Communication",
                body: "Chinese AI search engines (Kimi, Doubao, DeepSeek) and English AI search engines (ChatGPT, Perplexity, Claude) use different training corpora, different citation preferences, and different entity resolution mechanisms. Building a brand that both ecosystems recognize as the same authoritative source requires cross-language information architecture — a skill our team developed managing global enterprise deployments.",
              },
            ].map((sub) => (
              <div key={sub.title}>
                <h3 className="mb-2" style={subheadingStyle}>
                  {sub.title}
                </h3>
                <p style={bodyStyle}>{sub.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Section: AIIA Methodology ── */}
        <motion.section
          custom={8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <h2 className="mb-6" style={sectionHeadingStyle}>
            The &ldquo;AI-Native Information Architecture&rdquo; Methodology
          </h2>
          <p style={bodyStyle} className="mb-8">
            CAMUS approaches GEO through a four-layer methodology we call AI-Native Information
            Architecture (AIIA):
          </p>

          <div className="flex flex-col gap-6">
            {[
              {
                layer: "Layer 1",
                title: "Entity Foundation",
                body: "Define the brand as a machine-readable entity. This includes Schema.org Organization markup, unique @id identifiers, alternate names, and knowsAbout taxonomies that explicitly map the brand to its domain expertise.",
              },
              {
                layer: "Layer 2",
                title: "Cross-Platform Identity Alignment",
                body: "Ensure that the brand entity is expressed identically across website, LinkedIn, Crunchbase, industry publications, and AI-native platforms like Perplexity Pages. Any divergence creates “entity confusion” — AI may treat two descriptions of the same brand as two different brands.",
              },
              {
                layer: "Layer 3",
                title: "Citation-Optimized Content Design",
                body: "Structure content so that AI can extract quotable definitions, verifiable data points, and comparative frameworks. This is not “writing for AI.” It is designing information so that AI can accurately represent it.",
              },
              {
                layer: "Layer 4",
                title: "Continuous Trust Validation",
                body: "Deploy monitoring systems that track how AI search engines cite the brand, detect drift or inaccuracy, and trigger content updates. This layer treats AI trust as a dynamic system, not a one-time achievement.",
              },
            ].map((layer) => (
              <div
                key={layer.title}
                className="rounded-lg p-6 flex gap-5"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                }}
              >
                <div className="flex-shrink-0" style={{ width: 64 }}>
                  <span
                    className="block"
                    style={{
                      ...eyebrowStyle,
                      color: "var(--color-accent)",
                      marginBottom: 4,
                    }}
                  >
                    {layer.layer}
                  </span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 style={subheadingStyle}>{layer.title}</h3>
                  <p style={bodyStyle}>{layer.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Section: GEO Is Not the Next SEO ── */}
        <motion.section
          custom={9}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14"
        >
          <h2 className="mb-8" style={sectionHeadingStyle}>
            GEO Is Not the Next SEO. It Is the Infrastructure Layer for AI-Led Discovery.
          </h2>

          {/* Highlight pull-quote */}
          <div
            className="rounded-lg p-7 md:p-9 mb-8"
            style={{
              backgroundColor: "var(--color-dark)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <p
              className="leading-snug mb-2"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)",
                fontWeight: 300,
                color: "#FFFFFF",
              }}
            >
              SEO optimizes for ranking algorithms.
            </p>
            <p
              className="leading-snug"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)",
                fontWeight: 300,
                color: "var(--color-accent)",
              }}
            >
              GEO designs for AI comprehension systems.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              SEO asks: &ldquo;What keywords will make us rank?&rdquo; GEO asks: &ldquo;What
              information structure will make AI understand who we are?&rdquo;
            </p>
            <p style={bodyStyle}>SEO measures position. GEO measures accuracy of representation.</p>
            <p style={bodyStyle}>
              The teams that win in the GEO era will not be the ones with the best content
              budgets. They will be the ones with the best information architectures — the ones
              who understand that in the age of AI search, the brand with the clearest machine
              identity wins.
            </p>
          </div>
        </motion.section>

        {/* ── Section: About CAMUS ── */}
        <motion.section
          custom={10}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <h2 className="mb-6" style={sectionHeadingStyle}>
            About CAMUS
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              CAMUS (
              <a
                href="https://www.camus.one"
                className="transition-opacity hover:opacity-70"
                style={{
                  color: "var(--color-accent)",
                  textDecoration: "underline",
                  textDecorationThickness: 1,
                  textUnderlineOffset: 3,
                }}
              >
                https://www.camus.one
              </a>
              ) is an enterprise GEO system architecture firm based in Singapore. Our core team
              combines engineering backgrounds from NUS, NTU, and Imperial College London with
              enterprise technology experience from IBM and leading consulting firms.
            </p>
            <p style={bodyStyle}>
              We do not optimize content. We architect the information systems that make AI
              search engines understand, trust, and recommend your brand.
            </p>
          </div>
        </motion.section>

        {/* ── CTA section ── */}
        <motion.div
          custom={11}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16"
        >
          {/* CTA 1 — Let's talk */}
          <div
            className="rounded-lg p-7 flex flex-col gap-5 justify-between"
            style={{
              backgroundColor: "var(--color-accent)",
              border: "none",
            }}
          >
            <p
              className="leading-snug"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                color: "var(--color-dark)",
                fontWeight: 400,
              }}
            >
              Ready to build your AI-native information architecture?
            </p>
            <div>
              <Button onClick={() => setModalOpen(true)} size="md" variant="ghost">
                Let&apos;s Talk! →
              </Button>
            </div>
          </div>

          {/* CTA 2 — Learn more */}
          <div
            className="rounded-lg p-7 flex flex-col gap-5 justify-between"
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border-light)",
            }}
          >
            <p
              className="leading-snug"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                color: "var(--color-text)",
                fontWeight: 400,
              }}
            >
              Explore our approach?
            </p>
            <div>
              <Button href="/about" size="md" variant="ghost">
                Learn More About Camus →
              </Button>
            </div>
          </div>
        </motion.div>
      </article>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

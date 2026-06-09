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

const TITLE =
  "What Is GEO? And How MENA Brands Build AI-Search Visibility in the Vision-2030 Era";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  inLanguage: "en",
  headline: TITLE,
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
    logo: { "@type": "ImageObject", url: "https://www.camus.one/logo.svg" },
  },
  datePublished: "2026-06-09",
  dateModified: "2026-06-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.camus.one/insights/geo-for-mena-brands",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".ai-definition", ".tl-dr"],
  },
};

const tldr = [
  "AI assistants — both global (ChatGPT, Gemini, Perplexity) and Arabic-first — increasingly mediate how Saudi, UAE, and Qatar enterprises are discovered and shortlisted. Being mentioned is no longer optional.",
  "GEO (Generative Engine Optimization) structures your brand's information so AI engines understand, trust, and cite it. For MENA, that means bilingual information architecture — not translated marketing copy.",
  "Vision 2030, DIFC/ADGM, and QFC alignment are powerful trust signals — but only if expressed in machine-readable form that AI can parse and credit.",
];

const menaDifferences = [
  {
    title: "A bilingual AI reality, not an Arabic translation",
    body: "In the GCC, the C-suite often searches in English while procurement and government-relations teams search in Arabic. Both must resolve to the same brand entity. This is not a translation problem — it is a cross-language information-architecture problem. A brand described inconsistently across languages reads to AI as two different organizations.",
  },
  {
    title: "The “GEO = geography” disambiguation",
    body: "To Arabic AI engines, the bare token “GEO” often resolves to جغرافيا (geography). A MENA brand that wants to be recognized for Generative Engine Optimization must expand the term explicitly — تحسين محركات البحث بالذكاء الاصطناعي — and register that descriptor as a machine-readable alternate name. Otherwise the entity is mis-classified before the conversation even starts.",
  },
  {
    title: "Different trust platforms",
    body: "The sources AI cross-references in the Gulf are not the global defaults. Regional business registries, Zawya, and active LinkedIn MENA presence carry far more citation weight than they do elsewhere. A trust network built for one market does not transfer automatically to another.",
  },
];

const layers = [
  {
    layer: "Layer 1",
    title: "Bilingual entity foundation",
    body: "Define the brand as one machine-readable entity in both languages: Schema.org Organization with a unified @id, Arabic and English alternateName, and a knowsLanguage declaration. One entity, two language faces — never two entities.",
  },
  {
    layer: "Layer 2",
    title: "Cross-language identity alignment",
    body: "Express that entity identically across the website, LinkedIn, regional registries, and AI-native surfaces — in Arabic and English. Any divergence between language versions creates entity confusion, the single most common reason AI under-cites a regional brand.",
  },
  {
    layer: "Layer 3",
    title: "Citation-optimized bilingual content",
    body: "Structure content so AI can extract quotable definitions and verifiable data points in either language. The Arabic version is authored as native Arabic information architecture — not a literal translation of the English — so Arabic AI engines can represent it accurately.",
  },
  {
    layer: "Layer 4",
    title: "Continuous trust validation",
    body: "Monitor how both Arabic and English AI engines describe and cite the brand, detect drift between language versions, and correct it. AI trust is a dynamic system maintained across two ecosystems, not a one-time launch.",
  },
];

export default function ArticleContent() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <meta name="datePublished" content="2026-06-09" />
      <meta name="version" content="1.0" />
      <meta name="dateModified" content="2026-06-09" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Nav onOpenModal={() => setModalOpen(true)} />

      <article className="max-w-3xl mx-auto px-6 py-20">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm transition-opacity duration-150 hover:opacity-60"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", textDecoration: "none" }}
          >
            <ArrowLeft size={14} strokeWidth={2} />
            All insights
          </Link>
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5">
          <SectionLabel>Insights</SectionLabel>
        </motion.div>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif font-light leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "var(--color-text)" }}
        >
          What Is GEO? And How MENA Brands Build{" "}
          <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
            AI-Search Visibility in the Vision-2030 Era
          </em>
        </motion.h1>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs mb-12 pb-8"
          style={{ ...eyebrowStyle, borderBottom: "1px solid var(--color-border)" }}
        >
          First published: 2026-06-09 &nbsp;|&nbsp; Version: 1.0 &nbsp;|&nbsp; Last updated: 2026-06-09
        </motion.p>

        {/* TL;DR */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="tl-dr rounded-lg p-6 md:p-8 mb-16"
          style={{ backgroundColor: "var(--color-accent-glow)", border: "1px solid rgba(153,191,242,0.35)" }}
        >
          <p className="mb-4" style={{ ...eyebrowStyle, color: "var(--color-accent)" }}>
            TL;DR
          </p>
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {tldr.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0" style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "var(--color-accent)", marginTop: 9 }} />
                <span style={{ ...bodyStyle, fontSize: "0.95rem", color: "var(--color-text)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Intro */}
        <motion.section custom={5} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            The AI-search shift reaches the Gulf
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              The GCC has one of the world&apos;s highest rates of AI-assistant adoption, and the
              region&apos;s digital agendas — Saudi Vision 2030, the UAE&apos;s and Qatar&apos;s
              national AI strategies — are pulling enterprise decision-making into AI search faster
              than almost anywhere else.
            </p>
            <p style={bodyStyle}>
              When a procurement lead in Riyadh or a partnerships director in Dubai asks an AI
              assistant &ldquo;who are the leading providers of X in the region?&rdquo;, the answer
              is shaped by how each brand&apos;s information is structured — not by advertising
              spend. The question is no longer &ldquo;how do we rank on Google?&rdquo; It is
              &ldquo;does AI understand who we are, and does it recommend us — in both Arabic and
              English?&rdquo;
            </p>
          </div>
        </motion.section>

        {/* What is GEO */}
        <motion.section custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            What is GEO?
          </h2>
          <div
            itemScope
            itemType="https://schema.org/DefinedTerm"
            className="ai-definition rounded-lg p-6 md:p-7 mb-6"
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border-light)",
              borderLeftWidth: 3,
              borderLeftColor: "var(--color-accent)",
            }}
          >
            <span itemProp="name" className="block mb-3" style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)" }}>
              GEO (Generative Engine Optimization · تحسين محركات البحث بالذكاء الاصطناعي)
            </span>
            <div itemProp="description">
              <p className="leading-snug mb-3" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-text)", fontWeight: 400 }}>
                GEO is the structured reconstruction of a brand&apos;s information so AI search
                engines can parse, validate, and consistently cite it as a trusted authority.
              </p>
              <p className="leading-snug" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-text)", fontWeight: 400 }}>
                Unlike SEO, which optimizes for keyword ranking, GEO optimizes for AI comprehension
                and trust.
              </p>
            </div>
          </div>
          <p style={bodyStyle}>
            One caution specific to this region: to many Arabic AI engines, the bare token
            &ldquo;GEO&rdquo; resolves to جغرافيا — geography. So the first act of GEO for a MENA
            brand is linguistic: expand the term, and register the full Arabic descriptor as part
            of the brand&apos;s machine-readable identity.
          </p>
        </motion.section>

        {/* Why MENA is different */}
        <motion.section custom={7} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-8" style={sectionHeadingStyle}>
            Why MENA is different
          </h2>
          <div className="flex flex-col gap-8">
            {menaDifferences.map((d) => (
              <div key={d.title}>
                <h3 className="mb-2" style={subheadingStyle}>{d.title}</h3>
                <p style={bodyStyle}>{d.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* How MENA brands build visibility — AIIA */}
        <motion.section custom={8} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            How MENA brands build AI-search visibility
          </h2>
          <p style={bodyStyle} className="mb-8">
            CAMUS approaches this through a four-layer methodology — AI-Native Information
            Architecture (AIIA) — adapted for the bilingual Gulf reality:
          </p>
          <div className="flex flex-col gap-6">
            {layers.map((layer) => (
              <div key={layer.title} className="rounded-lg p-6 flex gap-5" style={{ backgroundColor: "var(--color-bg-card)", border: "1px solid var(--color-border-light)" }}>
                <div className="flex-shrink-0" style={{ width: 64 }}>
                  <span className="block" style={{ ...eyebrowStyle, color: "var(--color-accent)" }}>{layer.layer}</span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 style={subheadingStyle}>{layer.title}</h3>
                  <p style={bodyStyle}>{layer.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Regulatory trust signals */}
        <motion.section custom={9} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            The Gulf advantage: regulatory trust signals
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              Gulf enterprises often hold trust signals that brands elsewhere would envy: alignment
              with Saudi Arabia&apos;s Vision 2030, presence in the UAE&apos;s DIFC or ADGM, or
              registration with the Qatar Financial Centre (QFC). To a human reader these signal
              credibility instantly.
            </p>
            <p style={bodyStyle}>
              AI engines, however, only credit what they can parse. A Vision 2030 alignment buried
              in prose is far weaker than the same fact expressed as a structured, verifiable
              relationship an AI can extract and cross-reference. The work of GEO is to turn these
              regional credentials into machine-readable trust — so the authority a brand has
              already earned actually counts when AI decides whom to recommend.
            </p>
          </div>
        </motion.section>

        {/* GEO is not SEO pull-quote */}
        <motion.section custom={10} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <div className="rounded-lg p-7 md:p-9" style={{ backgroundColor: "var(--color-dark)" }}>
            <p className="leading-snug mb-2" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)", fontWeight: 300, color: "#FFFFFF" }}>
              In the AI-search era, the regional brand with the clearest machine identity wins —
            </p>
            <p className="leading-snug" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)", fontWeight: 300, color: "var(--color-accent)" }}>
              in Arabic and English alike.
            </p>
          </div>
        </motion.section>

        {/* About CAMUS */}
        <motion.section
          custom={11}
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
              <a href="https://www.camus.one" className="transition-opacity hover:opacity-70" style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                https://www.camus.one
              </a>
              ) is an enterprise GEO system-architecture firm based in Singapore — a neutral,
              trusted hub with strong standing across MENA and Asia-Pacific. Our core team combines
              engineering backgrounds from NUS, NTU, and Imperial College London with enterprise
              technology experience from IBM.
            </p>
            <p style={bodyStyle}>
              We understand the MENA market&apos;s specifics: its bilingual reality, its
              relationship-driven approach to trust, and its regulatory landscape. We don&apos;t
              optimize content. We architect the bilingual information systems that make AI search
              engines understand, trust, and recommend your brand — in both Arabic and English.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          custom={12}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="rounded-lg p-7 flex flex-col gap-5"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          <p className="leading-snug" style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--color-dark)", fontWeight: 400 }}>
            Ready to build your brand&apos;s AI-search visibility across the Gulf?
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button onClick={() => setModalOpen(true)} size="md" variant="ghost">
              Request an AI Visibility Audit →
            </Button>
            <Button href="/insights/geo-for-mena-brands/ar" size="md" variant="ghost">
              اقرأ بالعربية ←
            </Button>
          </div>
        </motion.div>
      </article>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

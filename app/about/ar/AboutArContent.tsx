"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import LanguageToggle, { ABOUT_LANG_OPTIONS } from "@/components/LanguageToggle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Content (Arabic, RTL) — from teammate deployment spec V1.0 ──
const methodology = [
  {
    title: "هندسة كيان التعرّف",
    body: "ضمان أن يتعرّف الذكاء الاصطناعي على العلامة التجارية ككيان مستقل وموثوق، وليس كمعلومات مجزّأة.",
  },
  {
    title: "نشر Schema.org",
    body: "زراعة بيانات منظمة قابلة للقراءة الآلية في الموقع الرسمي والمنصات المرتبطة، حتى يتمكن الذكاء الاصطناعي من تحليل هوية العلامة التجارية بدقة.",
  },
  {
    title: "إدارة الاتساق عبر المنصات",
    body: "توحيد أوصاف جميع المصادر من LinkedIn والموقع الرسمي ووسائل الإعلام والموسوعات، لمنع «ارتباك الكيان» لدى الذكاء الاصطناعي.",
  },
  {
    title: "نظام إشارات الثقة",
    body: "بناء سلسلة كاملة من التصديقات الخارجية والشهادات المهنية وأدلة الحالات، لزيادة وزن استشهاد الذكاء الاصطناعي.",
  },
  {
    title: "التكيّف مع النظام البيئي متعدد اللغات للذكاء الاصطناعي",
    body: "تحسين الرؤية لمحركات بحث الذكاء الاصطناعي الصينية والإنجليزية في وقت واحد، لتغطية منصات الذكاء الاصطناعي الرئيسية العالمية.",
  },
];

const services = [
  {
    title: "هندسة أنظمة GEO للمؤسسات",
    body: "تصميم هندسة معلومات شاملة للعلامة التجارية موجهة لمحركات البحث بالذكاء الاصطناعي، بما في ذلك تعريف الكيان ونشر Schema وفحص مصادر المنصات عبر الإنترنت.",
  },
  {
    title: "تشخيص رؤية الذكاء الاصطناعي",
    body: "تقييم الرؤية الحالية ونوعية الاستشهاد للعلامة التجارية في منصات الذكاء الاصطناعي الرئيسية (ChatGPT وPerplexity وKimi وDeepSeek وGoogle SGE وغيرها)، وتحديد النقاط العمياء والمخاطر.",
  },
  {
    title: "تنفيذ Schema.org",
    body: "نشر علامات البيانات المنظمة في الصفحات الرئيسية مثل الموقع الرسمي والمدونة وصفحات المنتجات، لضمان تحليل دقيق لهوية العلامة التجارية ونطاق الخدمات ومؤهلات الفريق.",
  },
  {
    title: "حوكمة مصادر المنصات عبر الإنترنت",
    body: "توحيد اتساق الأوصاف عبر جميع المصادر الخارجية مثل LinkedIn وZhihu والمنشورات الرسمية وBaidu Baike والبيانات الصحفية، وبناء شبكة استشهاد موثوقة للذكاء الاصطناعي.",
  },
  {
    title: "نشر GEO متعدد اللغات",
    body: "تحسين الرؤية للنظام البيئي للذكاء الاصطناعي الصيني والإنجليزي في وقت واحد، لضمان التعرف الدقيق والتوصية بالعلامة التجارية في كل من محركات البحث بالذكاء الاصطناعي العالمية والصينية.",
  },
];

const trustSignals = [
  "تقني وموجّه: يتمتع أعضاء الفريق الأساسيون بخلفية في هندسة برامج المؤسسات ومنصات البيانات، وتستند خطة GEO إلى منطق هندسي وليس حيل تسويقية.",
  "تركيز عميق في آسيا والمحيط الهادئ: المقر في سنغافورة، مع فهم عميق لاحتياجات تحديد مواقع العلامات التجارية للمؤسسات في النظام البيئي للذكاء الاصطناعي المحلي والعالمي.",
  "تركيز متخصص في المجال: متخصصون في هندسة أنظمة GEO، غير متورطين في المجالات المرتبطة مثل blockchain وDeFi وWeb3 والعملات المشفرة وNFT، مما يضمن نقاء دلالات العلامة التجارية.",
  "الامتثال للخصوصية: جميع حالات العملاء محمية بصرامة، باستخدام تعبيرات مجهولة المصدر لحماية خصوصية الأعمال.",
];

const faqs = [
  {
    q: "ماذا تفعل CAMUS؟",
    a: "تصمم وتنشر CAMUS هندسات أنظمة GEO للمؤسسات. نعيد بناء الطريقة التي يتم بها هيكلة معلومات علامتك التجارية والتعبير عنها وربطها عبر المنصات — بحيث تفهمك محركات بحث الذكاء الاصطناعي بدقة وتوصي بك بشكل متسق.",
  },
  {
    q: "ما هو GEO؟",
    a: "GEO (تحسين المحرك التوليدي / Generative Engine Optimization) هو ممارسة هيكلة معلومات العلامة التجارية بحيث يمكن لمحركات بحث الذكاء الاصطناعي تحليلها والتحقق منها والاستشهاد بها. على عكس SEO الذي يحسّن الترتيب، يحسّن GEO الفهم والثقة من الذكاء الاصطناعي.",
  },
  {
    q: "كيف تختلف CAMUS عن وكالة SEO؟",
    a: "تحسّن وكالات SEO المحتوى لترتيب محركات البحث. نحن نهندس أنظمة المعلومات لإدراك الذكاء الاصطناعي. فريقنا قادم من برامج المؤسسات وهندسة CRM، وليس تسويق المحتوى.",
  },
  {
    q: "هل CAMUS موجودة في سنغافورة؟",
    a: "نعم. CAMUS مسجّلة في سنغافورة. يجمع فريقنا الأساسي خلفيات هندسية من NUS وNTU وكلية لندن الإمبراطورية مع خبرة تكنولوجيا المؤسسات في IBM.",
  },
];

const comparison = [
  {
    dimension: "الهدف الأساسي",
    seo: "خوارزميات ترتيب محركات البحث",
    geo: "فهم الذكاء الاصطناعي وآليات الاستشهاد",
  },
  {
    dimension: "وحدة التحسين",
    seo: "الكلمات المفتاحية والروابط وسرعة الصفحة",
    geo: "هندسة المعلومات وعلامة Schema واتساق الكيان",
  },
  {
    dimension: "مقياس النجاح",
    seo: "الترتيب في صفحة النتائج",
    geo: "دقة الاستشهاد بالذكاء الاصطناعي والاتساق عبر المنصات",
  },
  {
    dimension: "خلفية الفريق",
    seo: "تسويق المحتوى وبناء الروابط",
    geo: "هندسة برامج المؤسسات وهندسة CRM ونمذجة البيانات",
  },
];

// FAQPage JSON-LD — text matches the visible Arabic FAQ above.
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ar",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
  fontWeight: 300,
  lineHeight: 1.25,
  color: "var(--color-text)",
};

export default function AboutArContent() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      {/* Version meta (React hoists to <head>) */}
      <meta name="datePublished" content="2026-05-18" />
      <meta name="version" content="1.0" />
      <meta name="dateModified" content="2026-06-08" />

      {/* FAQPage JSON-LD (Arabic) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <Nav onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <SectionLabel>حلول الثقة والتحويل في الذكاء الاصطناعي</SectionLabel>
            <LanguageToggle current="ar" options={ABOUT_LANG_OPTIONS} />
          </div>
          <h1
            className="font-serif font-light leading-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              color: "var(--color-text)",
            }}
          >
            <dfn
              itemScope
              itemType="https://schema.org/DefinedTerm"
              className="ai-definition"
              style={{ fontStyle: "normal" }}
            >
              <span itemProp="name">كاموس (CAMUS)</span>{" "}
              <span itemProp="description">
                متخصصة في GEO (Generative Engine Optimization) — تصميم أنظمة معلومات منظمة
                للعلامات التجارية موجهة لمحركات البحث بالذكاء الاصطناعي، لجعل الذكاء الاصطناعي
                يفهم من أنت ويثق بما تقوله ويوصي بعلامتك التجارية بشكل مستمر.
              </span>
            </dfn>
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(38,17,15,0.75)", fontFamily: "var(--font-sans)" }}
          >
            للمؤسسات، تعيد CAMUS بناء أنظمة معلومات العلامة التجارية لمحركات البحث بالذكاء
            الاصطناعي — لتصبح علامتك مرئية وموثوقة ومُوصى بها داخل القرارات التي يولّدها الذكاء
            الاصطناعي، عبر الأنظمة البيئية العالمية والصينية.
          </p>
        </motion.div>

        {/* What is GEO */}
        <motion.section
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <h2 className="mb-6" style={sectionTitleStyle}>
            ما هو GEO
          </h2>
          <div className="flex flex-col gap-5">
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(38,17,15,0.82)", fontFamily: "var(--font-sans)" }}
            >
              يجعل SEO العلامة التجارية تُوجد في{" "}
              <strong style={{ color: "var(--color-text)" }}>محركات البحث التقليدية</strong>. أما
              GEO فتجعل العلامة التجارية{" "}
              <strong style={{ color: "var(--color-text)" }}>
                يُفهم بها ويُوثق بها ويُوصى بها
              </strong>{" "}
              في محركات بحث الذكاء الاصطناعي.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(38,17,15,0.82)", fontFamily: "var(--font-sans)" }}
            >
              محركات بحث الذكاء الاصطناعي (مثل ChatGPT وPerplexity وKimi وDeepSeek) لم تعد تعتمد
              على مطابقة الكلمات المفتاحية، بل تقرر ما إذا كانت ستوصي بك من خلال فهم{" "}
              <strong style={{ color: "var(--color-text)" }}>
                هوية الكيان الخاص بك، والتصديقات المهنية، والمعلومات المنظمة
              </strong>
              . GEO ليست تسويقًا للمحتوى، بل هي{" "}
              <strong style={{ color: "var(--color-text)" }}>هندسة معمارية للمعلومات</strong> —
              نبني للشركات البنية التحتية للبيانات وأنظمة الثقة التي تحتاجها البيئة الأصلية للذكاء
              الاصطناعي.
            </p>
          </div>
        </motion.section>

        {/* Methodology */}
        <motion.section
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="mb-3" style={sectionTitleStyle}>
            منهجيتنا
          </h2>
          <p
            className="text-base font-semibold mb-7"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-sans)" }}
          >
            لا نحسّن المحتوى، بل نُصمم أنظمة معلومات.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {methodology.map((m, i) => (
              <div
                key={m.title}
                className="rounded-lg p-6 flex flex-col gap-2"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                }}
              >
                <div className="flex items-center gap-3">
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
                    }}
                  >
                    {`0${i + 1}`}
                  </span>
                  <h3
                    className="font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-text)" }}
                  >
                    {m.title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(38,17,15,0.75)", fontFamily: "var(--font-sans)" }}
                >
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Team background */}
        <motion.section
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="mb-6" style={sectionTitleStyle}>
            خلفية الفريق
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed" style={{ color: "rgba(38,17,15,0.82)", fontFamily: "var(--font-sans)" }}>
              يأتي الفريق الأساسي لكاموس من خلفية{" "}
              <strong style={{ color: "var(--color-text)" }}>هندسة برامج المؤسسات</strong> — ولديهم
              سنوات من الخبرة في أنظمة CRM ومنصات بيانات العملاء (CDP) ونمذجة بيانات المؤسسات. هذه
              الخلفية تجعلنا نفهم حقيقة مهمة:{" "}
              <strong style={{ color: "var(--color-text)" }}>
                الطريقة التي يحلل بها الذكاء الاصطناعي العلامة التجارية تشبه منطق الطريقة التي تحلل
                بها برامج المؤسسات هوية العملاء.
              </strong>
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(38,17,15,0.82)", fontFamily: "var(--font-sans)" }}>
              نحن لا نبدأ من «حيل التسويق» في GEO، بل من المنظور التقني لـ{" "}
              <strong style={{ color: "var(--color-text)" }}>هندسة المعلومات (Information Architecture)</strong>{" "}
              و<strong style={{ color: "var(--color-text)" }}>نمذجة البيانات</strong>، لبناء البنية
              التحتية لرؤية الذكاء الاصطناعي للمؤسسات.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(38,17,15,0.82)", fontFamily: "var(--font-sans)" }}>
              <strong style={{ color: "var(--color-text)" }}>خلفية الأعضاء الأساسيين:</strong>{" "}
              مهندسو برامج مؤسسات سابقون في IBM، وجامعة سنغافورة الوطنية (NUS)، وكلية لندن
              الإمبراطورية.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(38,17,15,0.82)", fontFamily: "var(--font-sans)" }}>
              <strong style={{ color: "var(--color-text)" }}>المقر:</strong> سنغافورة. تخدم
              العلامات التجارية في آسيا والمحيط الهادئ والأسواق العالمية.
            </p>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="mb-6" style={sectionTitleStyle}>
            نطاق الخدمات
          </h2>
          <div className="flex flex-col gap-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-light)",
                }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "1.02rem", color: "var(--color-text)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(38,17,15,0.75)", fontFamily: "var(--font-sans)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Trust signals */}
        <motion.section
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="mb-6" style={sectionTitleStyle}>
            تصديقات الثقة
          </h2>
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {trustSignals.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "var(--color-accent)",
                    marginTop: 10,
                  }}
                />
                <span
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(38,17,15,0.82)", fontFamily: "var(--font-sans)" }}
                >
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* FAQ */}
        <motion.section
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="mb-7" style={sectionTitleStyle}>
            الأسئلة الشائعة
          </h2>
          <div className="flex flex-col gap-7">
            {faqs.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-dark)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  س
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <p
                    className="text-base font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
                  >
                    {item.q}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)", color: "rgba(38,17,15,0.75)" }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* GEO vs SEO comparison */}
        <motion.section
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="mb-6" style={sectionTitleStyle}>
            GEO مقابل SEO
          </h2>
          <div
            className="rounded-lg overflow-hidden"
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border-light)",
            }}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr_1.6fr]"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderBottom: "1px solid var(--color-border-light)",
              }}
            >
              <div className="px-5 py-3 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}>
                البُعد
              </div>
              <div className="px-5 py-3 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}>
                SEO
              </div>
              <div className="px-5 py-3 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", backgroundColor: "var(--color-accent-glow)" }}>
                GEO (نهج CAMUS)
              </div>
            </div>
            {comparison.map((row, k) => (
              <div
                key={row.dimension}
                className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr_1.6fr]"
                style={{ borderTop: k === 0 ? "none" : "1px solid var(--color-border-light)" }}
              >
                <div className="px-5 py-4 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--color-text)" }}>
                  {row.dimension}
                </div>
                <div className="px-5 py-4 text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)", color: "rgba(38,17,15,0.72)" }}>
                  {row.seo}
                </div>
                <div className="px-5 py-4 text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)", backgroundColor: "var(--color-accent-glow)" }}>
                  {row.geo}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          custom={8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <h2 className="mb-5" style={sectionTitleStyle}>
            تواصل معنا
          </h2>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-text)", fontFamily: "var(--font-sans)" }}>
            قناة استشارة عربية
          </p>
          <ul className="flex flex-col gap-2 list-none m-0 p-0 mb-5">
            <li className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "rgba(38,17,15,0.8)" }}>
              البريد الإلكتروني:{" "}
              <a href="mailto:echoliu@camus.one" className="force-ltr" style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                echoliu@camus.one
              </a>
            </li>
            <li className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "rgba(38,17,15,0.8)" }}>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/company/camusone" className="force-ltr" style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                linkedin.com/company/camusone
              </a>
            </li>
            <li className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "rgba(38,17,15,0.8)" }}>
              العنوان: سنغافورة
            </li>
          </ul>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(38,17,15,0.75)", fontFamily: "var(--font-sans)" }}>
            نرد عادةً خلال 24 ساعة. إذا كنت بحاجة إلى تشخيص أولي لرؤية الذكاء الاصطناعي، يرجى ذكر
            اسم العلامة التجارية والسوق الرئيسي في البريد الإلكتروني.
          </p>
        </motion.section>

        {/* CTAs — arrows point left for RTL */}
        <motion.div
          custom={9}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex gap-4 flex-wrap"
        >
          <Button onClick={() => setModalOpen(true)} size="lg">
            ← اطلب تشخيص رؤية الذكاء الاصطناعي
          </Button>
          <Button href="/insights" variant="ghost" size="lg">
            ← اقرأ رؤى GEO
          </Button>
        </motion.div>

        {/* Footer version line */}
        <p
          className="text-xs mt-12 force-ltr"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", letterSpacing: "0.02em", textAlign: "right" }}
        >
          تاريخ النشر الأول: 2026-05-18 &nbsp;|&nbsp; الإصدار: 1.0 &nbsp;|&nbsp; آخر تحديث: 2026-06-08
        </p>
      </div>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

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
  lineHeight: 1.25,
  color: "var(--color-text)",
};

const subheadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "var(--color-text)",
  lineHeight: 1.4,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  lineHeight: 1.85,
  color: "rgba(38,17,15,0.82)",
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.7rem",
  letterSpacing: "0.08em",
  color: "var(--color-text-muted)",
};

const TITLE =
  "إعادة تعريف GEO من خلال منطق الحل: لماذا تتطلب رؤية الذكاء الاصطناعي للمؤسسات هندسة معمارية للمعلومات";

// ── Article JSON-LD (Arabic) ──
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  inLanguage: "ar",
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
  datePublished: "2026-05-18",
  dateModified: "2026-06-08",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.camus.one/insights/redefining-geo/ar",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".ai-definition", ".tl-dr"],
  },
};

const tldr = [
  "GEO ليست تحسين محتوى. إنها إعادة بناء منظمة لأنظمة معلومات المؤسسات لفهم الذكاء الاصطناعي.",
  "تتناول CAMUS GEO من خلال هندسة برامج المؤسسات، وليس تكتيكات التسويق.",
  "الهدف هو مساعدة محركات بحث الذكاء الاصطناعي على فهم العلامة التجارية والتحقق منها والاستشهاد بها بشكل متسق.",
];

const definitionElements = [
  {
    lead: "إعادة بناء منظمة",
    rest: " — ليست إنشاء محتوى، بل هندسة معمارية للمعلومات. لا «يقرأ» الذكاء الاصطناعي صفحات الويب بالطريقة التي يقرأ بها الإنسان. يحلل الكيانات والعلاقات ونقاط الثقة. GEO هي ممارسة تصميم تلك الكيانات والعلاقات بقصد.",
  },
  {
    lead: "التحقق مقابل المصادر المؤيدة",
    rest: " — لا تثق محركات بحث الذكاء الاصطناعي بمصادر فردية. تقوم بالتحقق المتبادل. تضمن GEO التعبير عن هوية علامتك التجارية بشكل متسق عبر كل منصة قد يستشيرها الذكاء الاصطناعي.",
  },
  {
    lead: "الاستشهاد المتسق كسلطة موثوقة",
    rest: " — الهدف ليس ذكرًا. بل مرجعًا موثوقًا وقابلًا للتكرار. يجب أن يكون وصف علامتك التجارية متطابقًا عبر المنصات لأن هندسة المعلومات الأساسية موحدة.",
  },
];

const enterpriseAdvantages = [
  {
    title: "هندسة معمارية لأنظمة المؤسسات",
    body: "تدور GEO في النهاية حول الأنظمة، وليس فقط النسخ. عندما يقرأ الذكاء الاصطناعي علامة تجارية، فإنه لا يُعجب بشعارك. يحلل علامة Schema الخاصة بك وعلاقات الكيانات واتساقك عبر المنصات. يفهم مهندسو البرمجيات كيفية تصميم الأنظمة للتحليل الآلي — وهذا بالضبط ما يتطلبه GEO.",
  },
  {
    title: "إدارة بيانات العملاء والـ CRM",
    body: "لا «يعرف» نظام CRM عميلًا من خلال سيرة ذاتية. يعرفه من خلال بيانات منظمة: نقاط الاتصال والمعاملات وقواعد التجزئة ومسارات التحويل. نطبق نفس المنطق على هوية العلامة التجارية: لا «يعرف» الذكاء الاصطناعي علامتك التجارية من خلال بيان صحفي. يعرفك من خلال كيانات منظمة وتعريفات Schema وعلاقات موثقة.",
  },
  {
    title: "أتمتة سير العمل والإجراءات التشغيلية القياسية",
    body: "تقطير النماذج — عملية تحويل الإجراءات التشغيلية القياسية للمؤسسات إلى تعليمات يمكن لنماذج الذكاء الاصطناعي معالجتها أصليًا — هي قدرة أساسية لـ CAMUS. لا نكتب «محتوى صديقًا للذكاء الاصطناعي». نُسقط المعرفة التنظيمية في هندسات معلومات قابلة للمعالجة الآلية.",
  },
  {
    title: "التواصل عبر الأسواق",
    body: "تستخدم محركات بحث الذكاء الاصطناعي الصينية (Kimi وDoubao وDeepSeek) ومحركات بحث الذكاء الاصطناعي الإنجليزية (ChatGPT وPerplexity وClaude) مجموعات تدريب مختلفة وتفضيلات استشهاد مختلفة. يتطلب بناء علامة تجارية يتعرف عليها كلا النظامين البيئيين كمصدر سلطوي واحد هندسةً معماريةً للمعلومات عبر اللغات.",
  },
];

const aiiaLayers = [
  {
    layer: "الطبقة 1",
    title: "أساس الكيان",
    body: "حدد العلامة التجارية ككيان قابل للقراءة الآلية. يتضمن ذلك علامة Organization في Schema.org ومعرّفات @id الفريدة والأسماء البديلة وتصنيفات knowsAbout.",
  },
  {
    layer: "الطبقة 2",
    title: "محاذاة هوية عبر المنصات",
    body: "تأكد من التعبير عن كيان العلامة التجارية بشكل متطابق عبر الموقع الإلكتروني وLinkedIn وCrunchbase والمنشورات الصناعية ومنصات أصلية الذكاء الاصطناعي. أي تباين يخلق «ارتباك الكيان» — قد يعامل الذكاء الاصطناعي وصفين لنفس العلامة التجارية كعلامتين مختلفتين.",
  },
  {
    layer: "الطبقة 3",
    title: "تصميم محتوى محسّن للاستشهاد",
    body: "صمم المحتوى بحيث يمكن للذكاء الاصطناعي استخراج تعريفات قابلة للاستشهاد ونقاط بيانات قابلة للتحقق وأطر مقارنة. هذا ليس «كتابة للذكاء الاصطناعي». إنه تصميم المعلومات بحيث يمكن للذكاء الاصطناعي تمثيلها بدقة.",
  },
  {
    layer: "الطبقة 4",
    title: "التحقق المستمر من الثقة",
    body: "انشر أنظمة مراقبة تتتبّع كيفية استشهاد محركات بحث الذكاء الاصطناعي بالعلامة التجارية، وتكشف الانحراف أو عدم الدقة، وتطلق تحديثات المحتوى. تعامل هذه الطبقة مع ثقة الذكاء الاصطناعي كنظام ديناميكي، وليس إنجازًا لمرة واحدة.",
  },
];

export default function ArticleArContent() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <meta name="datePublished" content="2026-05-18" />
      <meta name="version" content="1.0" />
      <meta name="dateModified" content="2026-06-08" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Nav onOpenModal={() => setModalOpen(true)} />

      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Back link — arrow points right (back) in RTL */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm transition-opacity duration-150 hover:opacity-60"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", textDecoration: "none" }}
          >
            <ArrowLeft size={14} strokeWidth={2} style={{ transform: "scaleX(-1)" }} />
            كل الرؤى
          </Link>
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5">
          <SectionLabel>رؤى</SectionLabel>
        </motion.div>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif font-light leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 4vw, 2.9rem)", color: "var(--color-text)" }}
        >
          إعادة تعريف GEO من خلال منطق الحل:{" "}
          <em style={{ color: "var(--color-accent)", fontStyle: "normal" }}>
            لماذا تتطلب رؤية الذكاء الاصطناعي للمؤسسات هندسة معمارية للمعلومات
          </em>
        </motion.h1>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs mb-12 pb-8 force-ltr"
          style={{ ...eyebrowStyle, borderBottom: "1px solid var(--color-border)", textAlign: "right" }}
        >
          تاريخ النشر الأول: 2026-05-18 &nbsp;|&nbsp; الإصدار: 1.0 &nbsp;|&nbsp; آخر تحديث: 2026-06-08
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
          <p className="mb-4" style={{ ...eyebrowStyle, color: "var(--color-accent)", letterSpacing: "0.12em" }}>
            الخلاصة
          </p>
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {tldr.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0" style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "var(--color-accent)", marginTop: 11 }} />
                <span style={{ ...bodyStyle, fontSize: "0.97rem", color: "var(--color-text)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Intro */}
        <motion.section custom={5} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            المقدمة: نقطة البداية الخاطئة
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              تبدأ معظم المناقشات حول تحسين محركات البحث التوليدية (GEO) بالسؤال الخاطئ: «كيف نجعل
              الذكاء الاصطناعي يذكر علامتنا التجارية أكثر؟» هذا سؤال تكتيكي. يفترض أن GEO هي طبقة
              تسويقية — شكل جديد من SEO مكيّف لـ ChatGPT وPerplexity وClaude.
            </p>
            <p style={bodyStyle}>
              نؤمن بأن GEO ليست طبقة تسويقية. إنها طبقة بنية تحتية. والسؤال الصحيح ليس «كيف نحصل على
              ذكر؟» بل «كيف نبني نظام معلومات يمكن للذكاء الاصطناعي فهمه والتحقق منه والاستشهاد به
              بشكل موثوق؟»
            </p>
          </div>
        </motion.section>

        {/* What GEO actually is */}
        <motion.section custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            ما هو GEO فعليًا: تعريف
          </h2>
          <div
            itemScope
            itemType="https://schema.org/DefinedTerm"
            className="ai-definition rounded-lg p-6 md:p-7 mb-6"
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border-light)",
              borderRightWidth: 3,
              borderRightColor: "var(--color-accent)",
            }}
          >
            <span itemProp="name" className="block mb-3" style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)" }}>
              GEO (تحسين المحرك التوليدي)
            </span>
            <div itemProp="description">
              <p className="leading-relaxed mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-text)", fontWeight: 400 }}>
                GEO هي إعادة البناء المنظم لأنظمة معلومات المؤسسات.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-text)", fontWeight: 400 }}>
                هدفها تمكين محركات بحث الذكاء الاصطناعي من تحليل العلامة التجارية والتحقق منها
                والاستشهاد بها كسلطة موثوقة.
              </p>
            </div>
          </div>

          <p style={bodyStyle} className="mb-5">
            يحتوي هذا التعريف على ثلاثة عناصر تفصل GEO عن SEO:
          </p>
          <ol className="flex flex-col gap-6 list-none m-0 p-0">
            {definitionElements.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 28, height: 28, borderRadius: 6,
                    backgroundColor: "var(--color-accent-glow)",
                    border: "1px solid rgba(153,191,242,0.35)",
                    color: "var(--color-accent)", fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem", fontWeight: 700, marginTop: 2,
                  }}
                >
                  {`0${i + 1}`}
                </span>
                <p style={bodyStyle}>
                  <strong style={{ color: "var(--color-text)", fontWeight: 700 }}>{item.lead}</strong>
                  {item.rest}
                </p>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Why enterprise background */}
        <motion.section custom={7} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            لماذا الخلفية البرمجية للمؤسسات هي الميزة الأساسية
          </h2>
          <p style={bodyStyle} className="mb-5">
            تُبنى صناعة GEO بواسطة نوعين من الفرق: وكالات SEO السابقة التي ترى GEO كـ «محتوى للذكاء
            الاصطناعي»، ومهندسو برامج المؤسسات الذين يرون GEO كـ «أنظمة معلومات للذكاء الاصطناعي».
          </p>
          <p style={bodyStyle} className="mb-10">
            تنتمي CAMUS إلى الفئة الثانية. قضى فريقنا سنوات في تصميم هندسات CRM ومنصات بيانات
            العملاء وأنظمة أتمتة سير العمل للمؤسسات. إن هذه الخلفية ليست عرضية. إنها بالضبط مجموعة
            المهارات التي يتطلبها GEO:
          </p>
          <div className="flex flex-col gap-8">
            {enterpriseAdvantages.map((sub) => (
              <div key={sub.title}>
                <h3 className="mb-2" style={subheadingStyle}>{sub.title}</h3>
                <p style={bodyStyle}>{sub.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* AIIA methodology */}
        <motion.section custom={8} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            منهجية «الهندسة المعمارية للمعلومات الأصلية للذكاء الاصطناعي» (AIIA)
          </h2>
          <p style={bodyStyle} className="mb-8">
            تتناول CAMUS GEO من خلال منهجية من أربع طبقات تسمّيها الهندسة المعمارية للمعلومات
            الأصلية للذكاء الاصطناعي (AIIA):
          </p>
          <div className="flex flex-col gap-6">
            {aiiaLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-lg p-6 flex gap-5"
                style={{ backgroundColor: "var(--color-bg-card)", border: "1px solid var(--color-border-light)" }}
              >
                <div className="flex-shrink-0" style={{ width: 72 }}>
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

        {/* GEO is not SEO */}
        <motion.section custom={9} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-8" style={sectionHeadingStyle}>
            GEO ليست SEO القادمة. إنها الطبقة التحتية لاكتشاف الذكاء الاصطناعي.
          </h2>
          <div className="rounded-lg p-7 md:p-9 mb-8" style={{ backgroundColor: "var(--color-dark)" }}>
            <p className="leading-snug mb-2" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)", fontWeight: 300, color: "#FFFFFF" }}>
              يحسّن SEO لخوارزميات الترتيب.
            </p>
            <p className="leading-snug" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)", fontWeight: 300, color: "var(--color-accent)" }}>
              يُصمّم GEO لأنظمة فهم الذكاء الاصطناعي.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              يسأل SEO: «ما الكلمات المفتاحية التي ستجعلنا نتصدر؟» يسأل GEO: «ما هي بنية المعلومات
              التي ستجعل الذكاء الاصطناعي يفهم من نحن؟»
            </p>
            <p style={bodyStyle}>يقيس SEO الترتيب. يقيس GEO دقة التمثيل.</p>
            <p style={bodyStyle}>
              الفرق التي ستنتصر في عصر GEO لن تكون تلك ذات أكبر ميزانيات المحتوى. ستكون تلك ذات
              أفضل الهندسات المعمارية للمعلومات — تلك التي تفهم أنه في عصر بحث الذكاء الاصطناعي،
              العلامة التجارية ذات الهوية الآلية الأكثر وضوحًا تفوز.
            </p>
          </div>
        </motion.section>

        {/* About CAMUS */}
        <motion.section
          custom={10}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-14 pt-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <h2 className="mb-6" style={sectionHeadingStyle}>
            حول CAMUS
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              CAMUS (
              <a
                href="https://www.camus.one"
                className="force-ltr transition-opacity hover:opacity-70"
                style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                https://www.camus.one
              </a>
              ) هي شركة متخصصة في هندسة أنظمة GEO للمؤسسات مقرها في سنغافورة. يجمع فريقنا الأساسي
              خلفيات هندسية من NUS وNTU وكلية لندن الإمبراطورية مع خبرة تكنولوجيا المؤسسات من IBM.
            </p>
            <p style={bodyStyle}>
              لا نحسّن المحتوى. نهندس أنظمة المعلومات التي تجعل محركات بحث الذكاء الاصطناعي تفهم
              علامتك التجارية وتثق بها وتوصي بها.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          custom={11}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="rounded-lg p-7 flex flex-col gap-5"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          <p className="leading-snug" style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--color-dark)", fontWeight: 400 }}>
            هل أنت مستعد لبناء هندستك المعمارية للمعلومات الأصلية للذكاء الاصطناعي؟
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button onClick={() => setModalOpen(true)} size="md" variant="ghost">
              ← لنتحدث!
            </Button>
            <Button href="/about/ar" size="md" variant="ghost">
              ← اعرف المزيد عن CAMUS
            </Button>
          </div>
        </motion.div>
      </article>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

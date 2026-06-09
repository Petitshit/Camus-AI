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
  "ما هو GEO؟ وكيف تبني العلامات التجارية في الشرق الأوسط رؤيتها في عصر البحث بالذكاء الاصطناعي";

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
  datePublished: "2026-06-09",
  dateModified: "2026-06-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.camus.one/insights/geo-for-mena-brands/ar",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".ai-definition", ".tl-dr"],
  },
};

const tldr = [
  "أصبحت مساعدات الذكاء الاصطناعي — العالمية (ChatGPT وGemini وPerplexity) والعربية على حد سواء — تشكّل كيفية اكتشاف الشركات في السعودية والإمارات وقطر وإدراجها في القوائم القصيرة. لم يعد الظهور خيارًا.",
  "GEO (تحسين محركات البحث بالذكاء الاصطناعي) يهيكل معلومات علامتك التجارية حتى تفهمها محركات الذكاء الاصطناعي وتثق بها وتستشهد بها. في الشرق الأوسط، يعني ذلك هندسة معلومات ثنائية اللغة — لا نسخة تسويقية مترجمة.",
  "المواءمة مع رؤية 2030، ومراكز DIFC/ADGM، ومركز قطر للمال (QFC) إشارات ثقة قوية — لكن فقط إذا عُبّر عنها بصيغة قابلة للقراءة الآلية يستطيع الذكاء الاصطناعي تحليلها واحتسابها.",
];

const menaDifferences = [
  {
    title: "واقع ثنائي اللغة، لا ترجمة عربية",
    body: "في دول الخليج، كثيرًا ما تبحث الإدارة التنفيذية بالإنجليزية بينما تبحث فرق المشتريات والعلاقات الحكومية بالعربية. ويجب أن يقود الطرفان إلى الكيان نفسه للعلامة التجارية. هذه ليست مشكلة ترجمة، بل مشكلة هندسة معلومات عبر اللغات. فالعلامة الموصوفة بشكل غير متسق بين اللغتين تبدو للذكاء الاصطناعي وكأنها منظمتان مختلفتان.",
  },
  {
    title: "إزالة لبس «GEO = الجغرافيا»",
    body: "بالنسبة لمحركات الذكاء الاصطناعي العربية، غالبًا ما يُفهم المصطلح المجرد «GEO» على أنه جغرافيا. لذا فإن العلامة التجارية التي تريد أن يُتعرف عليها في مجال تحسين المحرك التوليدي يجب أن توسّع المصطلح صراحةً — تحسين محركات البحث بالذكاء الاصطناعي — وتسجّل هذا الوصف كاسم بديل قابل للقراءة الآلية. وإلا صُنّف الكيان تصنيفًا خاطئًا قبل أن يبدأ الحديث.",
  },
  {
    title: "منصات ثقة مختلفة",
    body: "المصادر التي يقارن بها الذكاء الاصطناعي في الخليج ليست المصادر العالمية الافتراضية. فسجلات الأعمال الإقليمية، ومنصة Zawya، والحضور النشط على LinkedIn في الشرق الأوسط تحمل وزن استشهاد أكبر بكثير مما في أسواق أخرى. وشبكة الثقة المبنية لسوق واحدة لا تنتقل تلقائيًا إلى أخرى.",
  },
];

const layers = [
  {
    layer: "الطبقة 1",
    title: "أساس الكيان ثنائي اللغة",
    body: "عرّف العلامة التجارية ككيان واحد قابل للقراءة الآلية باللغتين: علامة Organization في Schema.org بمعرّف @id موحّد، واسم بديل بالعربية والإنجليزية، وإعلان knowsLanguage. كيان واحد بوجهين لغويين — لا كيانان.",
  },
  {
    layer: "الطبقة 2",
    title: "محاذاة الهوية عبر اللغات",
    body: "عبّر عن هذا الكيان بشكل متطابق عبر الموقع الإلكتروني وLinkedIn والسجلات الإقليمية والمنصات الأصلية للذكاء الاصطناعي — بالعربية والإنجليزية. أي تباين بين النسختين اللغويتين يخلق «ارتباك الكيان»، وهو السبب الأكثر شيوعًا في ضعف استشهاد الذكاء الاصطناعي بعلامة إقليمية.",
  },
  {
    layer: "الطبقة 3",
    title: "محتوى ثنائي اللغة محسّن للاستشهاد",
    body: "صمّم المحتوى بحيث يستطيع الذكاء الاصطناعي استخراج تعريفات قابلة للاقتباس ونقاط بيانات قابلة للتحقق بأي من اللغتين. وتُكتب النسخة العربية كهندسة معلومات عربية أصيلة — لا ترجمة حرفية للإنجليزية — حتى تتمكن محركات الذكاء الاصطناعي العربية من تمثيلها بدقة.",
  },
  {
    layer: "الطبقة 4",
    title: "التحقق المستمر من الثقة",
    body: "راقب كيف تصف محركات الذكاء الاصطناعي العربية والإنجليزية العلامة التجارية وتستشهد بها، واكتشف الانحراف بين النسختين اللغويتين وصحّحه. ثقة الذكاء الاصطناعي نظام ديناميكي يُصان عبر منظومتين بيئيتين، وليس إطلاقًا لمرة واحدة.",
  },
];

export default function ArticleArContent() {
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
          ما هو GEO؟ وكيف تبني العلامات التجارية في الشرق الأوسط{" "}
          <em style={{ color: "var(--color-accent)", fontStyle: "normal" }}>
            رؤيتها في عصر البحث بالذكاء الاصطناعي
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
          تاريخ النشر الأول: 2026-06-09 &nbsp;|&nbsp; الإصدار: 1.0 &nbsp;|&nbsp; آخر تحديث: 2026-06-09
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
            تحوّل البحث بالذكاء الاصطناعي يصل إلى الخليج
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              تتمتع دول الخليج بواحدة من أعلى معدلات تبنّي مساعدات الذكاء الاصطناعي في العالم، وأجنداتها
              الرقمية — رؤية السعودية 2030 والاستراتيجيات الوطنية للذكاء الاصطناعي في الإمارات وقطر —
              تدفع باتخاذ القرارات المؤسسية نحو البحث بالذكاء الاصطناعي أسرع من أي مكان آخر تقريبًا.
            </p>
            <p style={bodyStyle}>
              عندما يسأل مسؤول مشتريات في الرياض أو مدير شراكات في دبي مساعدًا ذكيًا: «من هم أبرز مزوّدي
              الخدمة الفلانية في المنطقة؟»، تتشكّل الإجابة وفقًا لكيفية هيكلة معلومات كل علامة تجارية — لا
              وفق الإنفاق الإعلاني. لم يعد السؤال «كيف نتصدّر في Google؟»، بل «هل يفهم الذكاء الاصطناعي من
              نحن، وهل يوصي بنا — بالعربية والإنجليزية معًا؟»
            </p>
          </div>
        </motion.section>

        {/* What is GEO */}
        <motion.section custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            ما هو GEO؟
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
              GEO (تحسين محركات البحث بالذكاء الاصطناعي · Generative Engine Optimization)
            </span>
            <div itemProp="description">
              <p className="leading-relaxed mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-text)", fontWeight: 400 }}>
                GEO هو إعادة البناء المنظم لمعلومات العلامة التجارية حتى تتمكن محركات البحث بالذكاء
                الاصطناعي من تحليلها والتحقق منها والاستشهاد بها باستمرار كسلطة موثوقة.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-text)", fontWeight: 400 }}>
                وعلى عكس SEO الذي يحسّن الترتيب بالكلمات المفتاحية، يحسّن GEO الفهم والثقة من الذكاء
                الاصطناعي.
              </p>
            </div>
          </div>
          <p style={bodyStyle}>
            تحذير خاص بهذه المنطقة: بالنسبة للعديد من محركات الذكاء الاصطناعي العربية، يُفهم المصطلح
            المجرد «GEO» على أنه جغرافيا. لذا فإن أول خطوة في GEO لعلامة تجارية في الشرق الأوسط خطوة
            لغوية: وسّع المصطلح، وسجّل الوصف العربي الكامل ضمن الهوية القابلة للقراءة الآلية للعلامة.
          </p>
        </motion.section>

        {/* Why MENA is different */}
        <motion.section custom={7} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-8" style={sectionHeadingStyle}>
            لماذا الشرق الأوسط مختلف
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

        {/* AIIA layers */}
        <motion.section custom={8} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            كيف تبني العلامات التجارية في الشرق الأوسط رؤيتها في البحث بالذكاء الاصطناعي
          </h2>
          <p style={bodyStyle} className="mb-8">
            تتناول CAMUS هذا من خلال منهجية من أربع طبقات — الهندسة المعمارية للمعلومات الأصلية للذكاء
            الاصطناعي (AIIA) — مكيّفة للواقع الخليجي ثنائي اللغة:
          </p>
          <div className="flex flex-col gap-6">
            {layers.map((layer) => (
              <div key={layer.title} className="rounded-lg p-6 flex gap-5" style={{ backgroundColor: "var(--color-bg-card)", border: "1px solid var(--color-border-light)" }}>
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

        {/* Regulatory trust signals */}
        <motion.section custom={9} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <h2 className="mb-6" style={sectionHeadingStyle}>
            ميزة الخليج: إشارات الثقة التنظيمية
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              كثيرًا ما تمتلك الشركات الخليجية إشارات ثقة تحسدها عليها علامات في أسواق أخرى: المواءمة مع
              رؤية السعودية 2030، أو الحضور في مركز دبي المالي العالمي (DIFC) أو سوق أبوظبي العالمي
              (ADGM)، أو التسجيل في مركز قطر للمال (QFC). وهذه تشير للقارئ البشري إلى المصداقية فورًا.
            </p>
            <p style={bodyStyle}>
              لكن محركات الذكاء الاصطناعي لا تحتسب إلا ما يمكنها تحليله. فمواءمة مع رؤية 2030 مدفونة في
              نص سردي أضعف بكثير من التعبير عن الحقيقة نفسها كعلاقة منظمة قابلة للتحقق يستطيع الذكاء
              الاصطناعي استخراجها ومقارنتها. وعمل GEO هو تحويل هذه الاعتمادات الإقليمية إلى ثقة قابلة
              للقراءة الآلية — حتى تُحتسب فعلًا السلطة التي اكتسبتها العلامة عندما يقرر الذكاء الاصطناعي
              بمن يوصي.
            </p>
          </div>
        </motion.section>

        {/* Pull-quote */}
        <motion.section custom={10} variants={fadeUp} initial="hidden" animate="visible" className="mb-14">
          <div className="rounded-lg p-7 md:p-9" style={{ backgroundColor: "var(--color-dark)" }}>
            <p className="leading-snug mb-2" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)", fontWeight: 300, color: "#FFFFFF" }}>
              في عصر البحث بالذكاء الاصطناعي، تفوز العلامة الإقليمية ذات الهوية الآلية الأوضح —
            </p>
            <p className="leading-snug" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)", fontWeight: 300, color: "var(--color-accent)" }}>
              بالعربية والإنجليزية على حد سواء.
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
            حول CAMUS
          </h2>
          <div className="flex flex-col gap-5">
            <p style={bodyStyle}>
              CAMUS (
              <a href="https://www.camus.one" className="force-ltr transition-opacity hover:opacity-70" style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                https://www.camus.one
              </a>
              ) شركة متخصصة في هندسة أنظمة GEO للمؤسسات مقرها في سنغافورة — مركز محايد وموثوق يتمتع
              بمكانة قوية عبر الشرق الأوسط وآسيا والمحيط الهادئ. يجمع فريقنا الأساسي خلفيات هندسية من
              NUS وNTU وكلية لندن الإمبراطورية مع خبرة تكنولوجيا المؤسسات من IBM.
            </p>
            <p style={bodyStyle}>
              نحن نفهم خصوصيات سوق الشرق الأوسط: واقعه ثنائي اللغة، ونهجه القائم على العلاقات في بناء
              الثقة، وبيئته التنظيمية. لا نحسّن المحتوى. نهندس أنظمة المعلومات ثنائية اللغة التي تجعل
              محركات البحث بالذكاء الاصطناعي تفهم علامتك التجارية وتثق بها وتوصي بها — بالعربية
              والإنجليزية معًا.
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
            هل أنت مستعد لبناء رؤية علامتك التجارية في البحث بالذكاء الاصطناعي عبر الخليج؟
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button onClick={() => setModalOpen(true)} size="md" variant="ghost">
              ← اطلب تشخيص رؤية الذكاء الاصطناعي
            </Button>
            <Button href="/insights/geo-for-mena-brands" size="md" variant="ghost">
              Read in English →
            </Button>
          </div>
        </motion.div>
      </article>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

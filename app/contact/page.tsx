"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";
import SectionLabel from "@/components/ui/SectionLabel";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const mainGoalOptions = [
  "Improve AI visibility",
  "Build brand trust in AI answers",
  "Enter China or Chinese-speaking markets",
  "Expand overseas",
  "Serve both Chinese and English-speaking audiences",
  "Improve founder/executive AI reputation",
  "Understand how AI currently describes our brand",
  "Other",
];

const initialForm = {
  name: "",
  company: "",
  email: "",
  website: "",
  targetMarket: "",
  industry: "",
  mainGoal: "",
  message: "",
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  color: "var(--color-text)",
  fontFamily: "var(--font-sans)",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
  outline: "none",
  width: "100%",
  transition: "border-color 0.15s",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs font-medium"
        style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
      >
        {label}{" "}
        {required ? (
          <span style={{ color: "var(--color-accent)" }}>*</span>
        ) : (
          <span className="text-xs font-normal" style={{ color: "var(--color-text-muted)" }}>
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/yimei@yy-labs.xyz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Contact Form — ${form.company}`,
          Name: form.name,
          Company: form.company,
          Email: form.email,
          Website: form.website || "—",
          "Target Market": form.targetMarket,
          Industry: form.industry,
          "Main Goal": form.mainGoal,
          Message: form.message || "—",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please email us at hello@camus.ai");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <Nav onOpenModal={() => setModalOpen(true)} />

      <div className="max-w-2xl mx-auto px-6 py-24">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <SectionLabel className="mb-4">Contact</SectionLabel>
          <h1
            className="font-serif font-light mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--color-text)",
            }}
          >
            Let&apos;s talk about your{" "}
            <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
              AI visibility.
            </em>
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(38,17,15,0.7)", fontFamily: "var(--font-sans)" }}
          >
            Fill in the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {success ? (
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-5 py-20"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle size={48} style={{ color: "var(--color-green)" }} strokeWidth={1.5} />
            <h2
              className="font-serif font-light"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.8rem",
                color: "var(--color-text)",
              }}
            >
              Message received.
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(38,17,15,0.7)", maxWidth: "32ch" }}
            >
              We&apos;ll be in touch within 24 hours with your AI Visibility Audit.
            </p>
          </motion.div>
        ) : (
          <motion.form
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <Field label="Full Name" required>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                />
              </Field>
              <Field label="Company" required>
                <input
                  required
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                />
              </Field>
              <Field label="Website">
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://yoursite.com"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Target Market" required>
                <input
                  required
                  name="targetMarket"
                  value={form.targetMarket}
                  onChange={handleChange}
                  placeholder="e.g. Southeast Asia, China"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                />
              </Field>
              <Field label="Industry" required>
                <input
                  required
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  placeholder="e.g. Finance, Healthcare"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                />
              </Field>
            </div>

            <Field label="Main Goal" required>
              <select
                required
                name="mainGoal"
                value={form.mainGoal}
                onChange={handleChange}
                style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
              >
                <option value="">Select your primary goal…</option>
                {mainGoalOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Anything else you'd like us to know…"
                rows={4}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
              />
            </Field>

            {error && (
              <p className="text-xs" style={{ color: "#e05050", fontFamily: "var(--font-sans)" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full py-4 font-sans font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                backgroundColor: loading ? "var(--color-surface)" : "var(--color-accent)",
                color: loading ? "var(--color-text-muted)" : "var(--color-dark)",
                cursor: loading ? "not-allowed" : "pointer",
                border: "none",
              }}
            >
              {loading && <Loader2 size={15} className="animate-spin" />}
              {loading ? "Sending…" : "Send Message →"}
            </button>

            <p
              className="text-xs text-center"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}
            >
              Your information is handled with strict confidentiality.
            </p>
          </motion.form>
        )}
      </div>

      <Footer />
      <DiagnosisModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface DiagnosisModalProps {
  open: boolean;
  onClose: () => void;
}

const initialForm = {
  name: "",
  phone: "",
  company: "",
  role: "",
  industry: "",
  email: "",
  needs: "",
};

export default function DiagnosisModal({ open, onClose }: DiagnosisModalProps) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          _subject: `GEO Diagnosis Request — ${form.company}`,
          Name: form.name,
          Phone: form.phone,
          Company: form.company,
          Role: form.role,
          Industry: form.industry,
          "Work Email": form.email || "—",
          "Business & Needs": form.needs,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please email us directly at hello@camus.ai");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setSuccess(false); setError(""); }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: "rgba(38,17,15,0.55)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              className="relative w-full max-w-lg rounded-3xl overflow-hidden"
              style={{ backgroundColor: "var(--color-bg-card)", border: "1px solid var(--color-border)" }}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150"
                style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text-muted)" }}
              >
                <X size={15} />
              </button>

              <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto">
                {success ? (
                  <motion.div
                    className="flex flex-col items-center justify-center text-center gap-5 py-10"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={48} style={{ color: "var(--color-green)" }} strokeWidth={1.5} />
                    <h2
                      className="font-serif font-light"
                      style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-text)" }}
                    >
                      Request received.
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(38,17,15,0.75)", maxWidth: "30ch" }}>
                      We&apos;ll reach out within 24 hours with your Brand AI Perception Audit.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="mb-8">
                      <h2
                        className="font-serif font-light mb-2"
                        style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 4vw, 2rem)", color: "var(--color-text)" }}
                      >
                        Get Your Free{" "}
                        <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>Diagnosis</em>
                      </h2>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(38,17,15,0.7)", fontFamily: "var(--font-sans)" }}>
                        We&apos;ll map how 20+ AI models perceive your brand — across Western and Chinese platforms — and show you exactly what the silence is costing you.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      {/* Name + Phone */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                            Full Name <span style={{ color: "var(--color-accent)" }}>*</span>
                          </label>
                          <input
                            required name="name" value={form.name} onChange={handleChange}
                            placeholder="Your name"
                            className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-150"
                            style={{
                              backgroundColor: "var(--color-bg)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-text)",
                              fontFamily: "var(--font-sans)",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                            Phone <span style={{ color: "var(--color-accent)" }}>*</span>
                          </label>
                          <input
                            required name="phone" value={form.phone} onChange={handleChange}
                            placeholder="+1 000 000 0000"
                            className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-150"
                            style={{
                              backgroundColor: "var(--color-bg)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-text)",
                              fontFamily: "var(--font-sans)",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                          Company <span style={{ color: "var(--color-accent)" }}>*</span>
                        </label>
                        <input
                          required name="company" value={form.company} onChange={handleChange}
                          placeholder="Your company name"
                          className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-150"
                          style={{
                            backgroundColor: "var(--color-bg)",
                            border: "1px solid var(--color-border)",
                            color: "var(--color-text)",
                            fontFamily: "var(--font-sans)",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                        />
                      </div>

                      {/* Role + Industry */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                            Your Role <span style={{ color: "var(--color-accent)" }}>*</span>
                          </label>
                          <input
                            required name="role" value={form.role} onChange={handleChange}
                            placeholder="e.g. CMO, Founder"
                            className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-150"
                            style={{
                              backgroundColor: "var(--color-bg)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-text)",
                              fontFamily: "var(--font-sans)",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                            Industry <span style={{ color: "var(--color-accent)" }}>*</span>
                          </label>
                          <input
                            required name="industry" value={form.industry} onChange={handleChange}
                            placeholder="e.g. Finance, SaaS"
                            className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-150"
                            style={{
                              backgroundColor: "var(--color-bg)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-text)",
                              fontFamily: "var(--font-sans)",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                          />
                        </div>
                      </div>

                      {/* Work Email (optional) */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium flex items-center gap-2" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                          Work Email
                          <span className="text-xs font-normal" style={{ color: "var(--color-text-muted)" }}>(optional)</span>
                        </label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="you@company.com"
                          className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-150"
                          style={{
                            backgroundColor: "var(--color-bg)",
                            border: "1px solid var(--color-border)",
                            color: "var(--color-text)",
                            fontFamily: "var(--font-sans)",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                        />
                      </div>

                      {/* Needs */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium" style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                          Tell us about your brand & needs <span style={{ color: "var(--color-accent)" }}>*</span>
                        </label>
                        <textarea
                          required name="needs" value={form.needs} onChange={handleChange}
                          placeholder="Briefly describe your core business and what you're trying to achieve with GEO..."
                          rows={3}
                          className="rounded-xl px-4 py-3 text-sm outline-none transition-all duration-150 resize-none"
                          style={{
                            backgroundColor: "var(--color-bg)",
                            border: "1px solid var(--color-border)",
                            color: "var(--color-text)",
                            fontFamily: "var(--font-sans)",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                        />
                      </div>

                      {error && (
                        <p className="text-xs" style={{ color: "#e05050", fontFamily: "var(--font-sans)" }}>{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-full py-4 font-sans font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 mt-2"
                        style={{
                          backgroundColor: loading ? "var(--color-surface)" : "var(--color-accent)",
                          color: loading ? "var(--color-text-muted)" : "var(--color-dark)",
                          cursor: loading ? "not-allowed" : "pointer",
                          border: "none",
                        }}
                      >
                        {loading && <Loader2 size={15} className="animate-spin" />}
                        {loading ? "Sending..." : "Get Your Free Diagnosis →"}
                      </button>

                      <p className="text-xs text-center" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
                        We handle your information with strict confidentiality — used only for onboarding communication.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

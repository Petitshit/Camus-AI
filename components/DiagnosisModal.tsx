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
  company: "",
  email: "",
  website: "",
  targetMarket: "",
  industry: "",
  mainGoal: "",
  message: "",
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

const inputStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  color: "var(--color-text)",
  fontFamily: "var(--font-sans)",
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
        {required && <span style={{ color: "var(--color-accent)" }}>*</span>}
        {!required && (
          <span className="text-xs font-normal" style={{ color: "var(--color-text-muted)" }}>
            {" "}
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function DiagnosisModal({ open, onClose }: DiagnosisModalProps) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
          _subject: `AI Visibility Audit Request — ${form.company}`,
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
      setError("Something went wrong. Please email us directly at hello@camus.ai");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSuccess(false);
      setError("");
    }, 400);
  };

  const sharedInputClass =
    "rounded-xl px-4 py-3 text-sm outline-none transition-all duration-150";

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
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
              }}
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
                style={{
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-text-muted)",
                }}
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
                    <CheckCircle
                      size={48}
                      style={{ color: "var(--color-green)" }}
                      strokeWidth={1.5}
                    />
                    <h2
                      className="font-serif font-light"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.8rem",
                        color: "var(--color-text)",
                      }}
                    >
                      Request received.
                    </h2>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(38,17,15,0.75)", maxWidth: "30ch" }}
                    >
                      We&apos;ll be in touch within 24 hours with your AI Visibility Audit.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="mb-8">
                      <h2
                        className="font-serif font-light mb-2"
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(1.6rem, 4vw, 2rem)",
                          color: "var(--color-text)",
                        }}
                      >
                        Request an{" "}
                        <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
                          AI Visibility Audit
                        </em>
                      </h2>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(38,17,15,0.7)", fontFamily: "var(--font-sans)" }}
                      >
                        Tell us about your brand and we&apos;ll map exactly how AI sees you — and
                        what it takes to lead.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      {/* Name + Company */}
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Full Name" required>
                          <input
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={sharedInputClass}
                            style={inputStyle}
                            onFocus={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-accent)")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-border)")
                            }
                          />
                        </Field>
                        <Field label="Company" required>
                          <input
                            required
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Company name"
                            className={sharedInputClass}
                            style={inputStyle}
                            onFocus={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-accent)")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-border)")
                            }
                          />
                        </Field>
                      </div>

                      {/* Email + Website */}
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Email" required>
                          <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className={sharedInputClass}
                            style={inputStyle}
                            onFocus={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-accent)")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-border)")
                            }
                          />
                        </Field>
                        <Field label="Website">
                          <input
                            name="website"
                            value={form.website}
                            onChange={handleChange}
                            placeholder="https://yoursite.com"
                            className={sharedInputClass}
                            style={inputStyle}
                            onFocus={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-accent)")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-border)")
                            }
                          />
                        </Field>
                      </div>

                      {/* Target Market + Industry */}
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Target Market" required>
                          <input
                            required
                            name="targetMarket"
                            value={form.targetMarket}
                            onChange={handleChange}
                            placeholder="e.g. Southeast Asia, China"
                            className={sharedInputClass}
                            style={inputStyle}
                            onFocus={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-accent)")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-border)")
                            }
                          />
                        </Field>
                        <Field label="Industry" required>
                          <input
                            required
                            name="industry"
                            value={form.industry}
                            onChange={handleChange}
                            placeholder="e.g. Finance, Healthcare"
                            className={sharedInputClass}
                            style={inputStyle}
                            onFocus={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-accent)")
                            }
                            onBlur={(e) =>
                              (e.currentTarget.style.borderColor = "var(--color-border)")
                            }
                          />
                        </Field>
                      </div>

                      {/* Main Goal dropdown */}
                      <Field label="Main Goal" required>
                        <select
                          required
                          name="mainGoal"
                          value={form.mainGoal}
                          onChange={handleChange}
                          className={sharedInputClass}
                          style={{
                            ...inputStyle,
                            appearance: "none",
                            cursor: "pointer",
                          }}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "var(--color-accent)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--color-border)")
                          }
                        >
                          <option value="">Select your primary goal…</option>
                          {mainGoalOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </Field>

                      {/* Message */}
                      <Field label="Message">
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Anything else you'd like us to know about your brand or goals…"
                          rows={3}
                          className={`${sharedInputClass} resize-none`}
                          style={inputStyle}
                          onFocus={(e) =>
                            (e.currentTarget.style.borderColor = "var(--color-accent)")
                          }
                          onBlur={(e) =>
                            (e.currentTarget.style.borderColor = "var(--color-border)")
                          }
                        />
                      </Field>

                      {error && (
                        <p
                          className="text-xs"
                          style={{ color: "#e05050", fontFamily: "var(--font-sans)" }}
                        >
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-full py-4 font-sans font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 mt-2"
                        style={{
                          backgroundColor: loading
                            ? "var(--color-surface)"
                            : "var(--color-accent)",
                          color: loading ? "var(--color-text-muted)" : "var(--color-dark)",
                          cursor: loading ? "not-allowed" : "pointer",
                          border: "none",
                        }}
                      >
                        {loading && <Loader2 size={15} className="animate-spin" />}
                        {loading ? "Sending…" : "Request Your AI Visibility Audit →"}
                      </button>

                      <p
                        className="text-xs text-center"
                        style={{
                          color: "var(--color-text-muted)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        Your information is handled with strict confidentiality.
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

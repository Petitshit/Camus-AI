"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error" | "nochanges";

export default function DeployButton() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  if (process.env.NODE_ENV !== "development") return null;

  async function handleDeploy() {
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/deploy", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setStatus(data.message.includes("no changes") || data.message.includes("up to date") ? "nochanges" : "success");
      } else {
        setStatus("error");
      }
      setMessage(data.message);
    } catch {
      setStatus("error");
      setMessage("Network error — check Terminal.");
    }
    setTimeout(() => { setStatus("idle"); setMessage(""); }, 4000);
  }

  const bg: Record<Status, string> = {
    idle:      "#26110F",
    loading:   "#555",
    success:   "#3a7d44",
    error:     "#c0392b",
    nochanges: "#555",
  };

  const label: Record<Status, string> = {
    idle:      "🚀 Deploy",
    loading:   "Deploying…",
    success:   "✓ Live!",
    error:     "✕ Failed",
    nochanges: "No changes",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
      }}
    >
      {message && status !== "idle" && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            color: "#fff",
            fontSize: "12px",
            padding: "6px 12px",
            borderRadius: "8px",
            maxWidth: "260px",
            textAlign: "right",
            fontFamily: "monospace",
          }}
        >
          {message}
        </div>
      )}
      <button
        onClick={handleDeploy}
        disabled={status === "loading"}
        style={{
          backgroundColor: bg[status],
          color: "#fff",
          border: "none",
          borderRadius: "999px",
          padding: "10px 20px",
          fontSize: "13px",
          fontWeight: 600,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          transition: "background-color 0.3s ease",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        {label[status]}
      </button>
    </div>
  );
}

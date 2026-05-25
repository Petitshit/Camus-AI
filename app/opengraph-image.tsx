import { ImageResponse } from "next/og";

// Next.js convention: this file generates the default Open Graph image
// at https://www.camus.one/opengraph-image
// Used as the link-preview thumbnail when a CAMUS page is shared on
// LinkedIn, X/Twitter, Slack, WeChat, WhatsApp, iMessage, etc.

export const alt = "CAMUS — The Brand AI Actually Recommends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#F0F1F2",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top — eyebrow + bowl-shape brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#26110F",
              letterSpacing: "-0.01em",
            }}
          >
            Camus.
          </span>
        </div>

        {/* Center — headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <span
            style={{
              fontSize: 26,
              color: "#9A8A80",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            AI Trust &amp; Conversion Solutions
          </span>
          <span
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              fontSize: 70,
              color: "#26110F",
              lineHeight: 1.05,
              maxWidth: 1040,
            }}
          >
            <span>CAMUS —</span>
            <span style={{ color: "#99BFF2", fontStyle: "italic" }}>
              The Brand AI Actually Recommends
            </span>
          </span>
        </div>

        {/* Bottom — URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#734432",
            fontSize: 22,
            fontFamily: "monospace",
            letterSpacing: "0.04em",
          }}
        >
          <span>www.camus.one</span>
          <span style={{ color: "#9A8A80" }}>Enterprise GEO · Singapore</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

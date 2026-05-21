import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },

  // 301 redirect: bare apex camus.one → canonical www.camus.one (preserves path).
  // Avoids duplicate-content signals to search engines and AI crawlers.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "camus.one" }],
        destination: "https://www.camus.one/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

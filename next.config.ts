import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/privacy", destination: "/legal#privacy", permanent: true },
      { source: "/terms", destination: "/legal#terms", permanent: true },
    ];
  },
};

export default nextConfig;

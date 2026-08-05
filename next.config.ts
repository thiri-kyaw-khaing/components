import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Emit a self-contained server bundle (.next/standalone) for a small Docker
  // runtime image.
  output: "standalone",
};

export default nextConfig;

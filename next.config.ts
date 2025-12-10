import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure output for static and dynamic routes
  output: undefined, // Use default (automatic ISR and SSR)

  // Image optimization
  images: {
    unoptimized: false, // Let Netlify handle image optimization
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  },

  // TypeScript strict mode
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },

  // ESLint during build - exclude .next from linting
  eslint: {
    dirs: ["pages", "components", "lib", "app"],
    // Don't lint during production builds by default
    ignoreDuringBuilds: false,
  },

  // React strict mode
  reactStrictMode: true,

  // Compression
  compress: true,

  // Production source maps (optional, disable for faster builds)
  productionBrowserSourceMaps: false,

  // Headers for security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

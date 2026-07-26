import type { NextConfig } from "next";

/**
 * GitHub Pages serves this as a static site under /<repo>/, so the build is a
 * static export and every asset path carries the base path. Set
 * NEXT_PUBLIC_BASE_PATH="" (the default) for a custom domain or local dev.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

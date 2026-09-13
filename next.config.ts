import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES === "true" ? "/monorepo-landpages" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

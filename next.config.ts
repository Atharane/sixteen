import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  experimental: {
    viewTransition: true,
    authInterrupts: true,
  },
  cacheComponents: true,
  reactCompiler: true,
};

export default nextConfig;

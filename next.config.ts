import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    // 90 réservé aux photos plein écran (hero), où la compression à 75 adoucit les détails.
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com", pathname: "/images/**" },
    ],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

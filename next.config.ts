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
  // Le programme (data/programme/*.md) est relu côté serveur à chaque régénération horaire de l'accueil.
  outputFileTracingIncludes: { "/": ["./data/programme/**"] },
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

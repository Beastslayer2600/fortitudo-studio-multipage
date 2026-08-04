import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gert Fourie | Financial Advisor",
    short_name: "Gert Fourie",
    description:
      "Calm, structured financial planning that replaces worry with clarity — Pretoria & Gauteng. Liberty Group FSP 2409.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a231a",
    theme_color: "#0a231a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192-maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

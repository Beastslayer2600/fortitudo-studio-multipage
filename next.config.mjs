const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Short URL printed on the January slip
      {
        source: "/january",
        destination: "/guides/january-already-spent",
        permanent: false,
      },
      // Short URL for Instagram
      {
        source: "/worth",
        destination: "/guides/what-are-you-worth",
        permanent: false,
      },
      // Old domain: one hop straight to the canonical origin. Must match
      // SITE_URL in lib/site.ts (lib/site.test.mjs checks this).
      {
        source: "/:path*",
        has: [{ type: "host", value: "fortitudostudios.site" }],
        destination: "https://fortitudostudios.com/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;

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
      {
        source: "/:path*",
        has: [{ type: "host", value: "fortitudostudios.site" }],
        destination: "https://www.fortitudostudios.com/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;

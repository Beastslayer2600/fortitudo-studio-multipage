const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
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

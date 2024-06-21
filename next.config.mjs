// Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  async generateStaticParams() {
    return {
      "/not-found": { page: "/not-found" },
      "/loading": { page: "/loading" },
    };
  },
};

export default nextConfig;

// Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  async generateStaticParams() {
    return {
      "./not-found.tsx": { page: "/not-found" },
      "./loading.tsx": { page: "/loading" },
    };
  },
};

export default nextConfig;

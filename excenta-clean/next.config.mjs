/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true }, // ← lar build passere selv om ESLint feiler
  images: { unoptimized: true },        // ← Netlify uten image-opt server
  output: 'standalone',
};

export default nextConfig;

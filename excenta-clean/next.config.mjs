/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true }, // valgfritt: la prod-build gå selv om ESLint klager
  images: { unoptimized: true },        // enkelt på Netlify uten image-server
};
export default nextConfig;

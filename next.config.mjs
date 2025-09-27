/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Your existing config
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // ✅ No import needed — use Next.js' built-in webpack
  webpack(config) {
    // Suppress noisy warnings
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
  },
};

export default nextConfig;

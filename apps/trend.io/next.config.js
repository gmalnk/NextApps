/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "store", "db"],
  webpack: (config) => {
    config.module = {
      ...config.module,
      exprContextCritical: false, // suppress warning caused within package 'prettier'
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "store", "hooks"],
};

module.exports = nextConfig;

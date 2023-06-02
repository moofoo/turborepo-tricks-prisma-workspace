const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["prisma-client"],
  cleanDistDir: true,
  swcMinify: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  output: "standalone",
  compress: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;

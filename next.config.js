/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net", // AI generates images in that location
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

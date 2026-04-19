/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/images/media/meals/**",
      },
      // If your API uses other sources later, add them here:
      {
        protocol: "https",
        hostname: "taxi-kitchen-api.vercel.app",
      },
    ],
  },
};

export default nextConfig;

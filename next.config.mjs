// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's Strict Mode for development and production
  reactStrictMode: true,

  // Define image domains to allow loading images from specific external sources
  images: {
    domains: ["pbs.twimg.com", "www.kisanlink.in", "assets.aceternity.com","images.unsplash.com"],
  },

  // Other configurations can go here
};

export default nextConfig;

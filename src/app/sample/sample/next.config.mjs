// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React's Strict Mode for development and production
    reactStrictMode: true,
  
    // Define image domains to allow loading images from specific external sources
    images: {
      domains: ['pbs.twimg.com'], // Add the necessary external domains here
    },
  
    // Other configurations can go here
  };
  
  export default nextConfig;
  
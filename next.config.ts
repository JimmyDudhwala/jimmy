// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.svgrepo.com',
      'seeklogo.com',
      'upload.wikimedia.org', // for Next.js logo if used from Wikimedia
    ],
  },
};

module.exports = nextConfig;

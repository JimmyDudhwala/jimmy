/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.ibb.co',    
      'avatars.githubusercontent.com',         // for your i.ibb.co images
      'www.svgrepo.com',      // for SVG icons
      'seeklogo.com',         // for logos
      'upload.wikimedia.org'  // for Wikimedia images
    ],
  },
};

module.exports = nextConfig;

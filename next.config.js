/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'images.unsplash.com', 'secureservercdn.net', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;

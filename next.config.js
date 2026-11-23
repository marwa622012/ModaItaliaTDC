/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  async redirects() {
    return [
      // الرابط القديم للخبر
      {
        source: "/news/Polanda-textile-expo-highlights",
        destination: "/news/poland-textile-expo-highlights",
        permanent: true,
      },
      {
        source: "/trade-fairs/:country",
        destination: "/trade-fairs?country=:country",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
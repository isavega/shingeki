/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/shingeki/:path*",
        has: [
          {
            type: "query",
            key: "rid",
          },
          {
            type: "query",
            key: "amount",
          },
        ],
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

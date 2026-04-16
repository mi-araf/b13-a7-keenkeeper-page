/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        // https://randomuser.me/api/portraits/women/68.jpg
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

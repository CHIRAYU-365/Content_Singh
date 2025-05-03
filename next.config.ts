import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      { // Added new pattern for vsdstudio.in
        protocol: 'https',
        hostname: 'vsdstudio.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

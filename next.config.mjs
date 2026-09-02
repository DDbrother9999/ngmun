/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/ngmun',

    images: {
      unoptimized: true,
      domains: ['res.cloudinary.com']
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: '/ngmun',
    },
    publicRuntimeConfig: {
        basePath: '/ngmun',
      },

    async redirects() {
      return [
        { source: '/', destination: '/ngmun', basePath: false, permanent: false },
      ];
    },
  };


  export default nextConfig;

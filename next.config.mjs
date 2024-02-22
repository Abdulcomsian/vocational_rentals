/** @type {import('next').NextConfig} */
const nextConfig = { 
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["https://vacationrentals.tools/"],
      },
      output: "standalone",
      reactStrictMode: false,
    };


export default nextConfig;


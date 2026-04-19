import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  // Gitee Pages 部署时可能需要设置 basePath
  // basePath: '/familytree',
};

export default nextConfig;

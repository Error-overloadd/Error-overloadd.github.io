import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 警告会被视为错误，但不会阻止编译
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

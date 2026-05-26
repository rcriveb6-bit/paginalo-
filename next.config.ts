import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "jlhslxsztzetudypswbb.supabase.co" },
    ],
  },
};

export default nextConfig;

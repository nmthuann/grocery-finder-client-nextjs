import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tailwindui.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "pixner.net",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;

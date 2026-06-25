import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Los logos son PNG estáticos ya dimensionados: se sirven sin optimizador,
    // así no hace falta el binding de Cloudflare Images para next/image.
    unoptimized: true,
  },
};

// Permite que `next dev` integre los bindings de Cloudflare en local.
// En build/producción es inofensivo.
initOpenNextCloudflareForDev();

export default nextConfig;

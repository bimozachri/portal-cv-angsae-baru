/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Baris penting agar refresh tidak error 403 di Hostinger
  trailingSlash: true,

  // Konfigurasi gambar (wajib untuk export statis)
  images: { unoptimized: true },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wajib: Mengubah output menjadi file HTML/CSS/JS statis
  images: {
    unoptimized: true, // Wajib: Agar gambar tetap muncul tanpa server Node.js
  },
};

export default nextConfig;
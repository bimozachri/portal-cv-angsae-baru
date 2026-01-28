import SpdClientPage from "./client-page";

// Daftar kunci URL untuk keperluan generateStaticParams
const URL_KEYS = [
  "kendaraan-kantor",
  "mobil-pribadi",
  "motor-pribadi",
  "tsp-umum",
];

export function generateStaticParams() {
  return URL_KEYS.map((type) => ({
    type: type,
  }));
}

// PERUBAHAN PENTING DI SINI:
// 1. Tambahkan 'async' sebelum function
// 2. Ubah tipe params menjadi 'Promise'
export default async function Page({ 
  params 
}: { 
  params: Promise<{ type: string }> 
}) {
  // 3. Wajib di-await sebelum propertinya bisa dibaca
  const resolvedParams = await params;
  
  return <SpdClientPage type={resolvedParams.type} />;
}
"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";

const GAS_URLS: Record<string, string> = {
  "kendaraan-kantor": "https://script.google.com/macros/s/AKfycbyF2tiIoazsLd1OzIBkoh68CUgVojhFmkKuMzu_4Ko5gIT859sccZxnTX4Ji8I-M-bX/exec",
  "mobil-pribadi": "https://script.google.com/macros/s/AKfycbwffpsh2CFXI_QcNQZmTP4RfKQvPUwZzSPZv2JL8JltsW93PQO0UxkvyojHwzJBSto/exec",
  "motor-pribadi": "https://script.google.com/macros/s/AKfycbxMU7r-PkjhiQ9PugyoP3Hyarpt7sf8esyVLhseD531_REi7SEKDw0Zwp5mVZ6Nu5Dp/exec",
  "tsp-umum": "https://script.google.com/macros/s/AKfycbz0nugRS_lemYNWVhI5zjY-nsGMtAfs7_TILCH4k1StGzw2rAvhYGSYSgFtWvbl7e3S/exec",
};

export default function SpdIframePage() {
  const params = useParams();
  const type = params?.type as string;
  const iframeUrl = GAS_URLS[type];

  if (!iframeUrl) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Formulir tidak ditemukan.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col h-[calc(100vh-140px)]"> 
        {/* h-[calc(100vh-140px)] memberikan ruang otomatis agar iframe pas di antara header & footer */}
        <iframe
          src={iframeUrl}
          className="w-full h-full border-0 shadow-inner"
          title={`Form ${type}`}
          allow="geolocation; microphone; camera"
        />
      </main>
      <Footer />
    </div>
  );
}
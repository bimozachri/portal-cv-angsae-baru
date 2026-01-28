"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Loader2, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";

// Konfigurasi URL Google Apps Script
const GAS_URLS: Record<string, string> = {
  "kendaraan-kantor": "https://script.google.com/macros/s/AKfycbyF2tiIoazsLd1OzIBkoh68CUgVojhFmkKuMzu_4Ko5gIT859sccZxnTX4Ji8I-M-bX/exec",
  "mobil-pribadi": "https://script.google.com/macros/s/AKfycbwffpsh2CFXI_QcNQZmTP4RfKQvPUwZzSPZv2JL8JltsW93PQO0UxkvyojHwzJBSto/exec",
  "motor-pribadi": "https://script.google.com/macros/s/AKfycbxMU7r-PkjhiQ9PugyoP3Hyarpt7sf8esyVLhseD531_REi7SEKDw0Zwp5mVZ6Nu5Dp/exec",
  "tsp-umum": "https://script.google.com/macros/s/AKfycbz0nugRS_lemYNWVhI5zjY-nsGMtAfs7_TILCH4k1StGzw2rAvhYGSYSgFtWvbl7e3S/exec",
};

interface ClientPageProps {
  type: string;
}

export default function SpdClientPage({ type }: ClientPageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeUrl = GAS_URLS[type];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Format judul (misal: "kendaraan-kantor" -> "Kendaraan Kantor")
  const pageTitle = type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!isMounted) return null;

  // Tampilan jika URL tidak ditemukan
  if (!iframeUrl) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/image.png" alt="Logo" width={40} height={40} className="object-contain" />
              <span className="font-bold text-lg text-foreground hidden sm:block">Angsae Baru Group</span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm">
                <Link href="/form-perjalanan-dinas" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Kembali</span>
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
            <FileQuestion className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-xl font-bold text-foreground mb-2">Formulir Tidak Ditemukan</h1>
          <p className="text-muted-foreground">Jenis formulir "{type}" belum tersedia.</p>
        </div>
      </div>
    );
  }

  // Tampilan Utama (Sesuai Referensi)
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/image.png" alt="CV Angsae Baru Logo" width={40} height={40} className="object-contain" />
            <span className="font-bold text-lg text-foreground hidden sm:block">Angsae Baru Group</span>
          </Link>

          {/* Wrapper untuk tombol-tombol di kanan */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button asChild variant="outline" size="sm">
              <Link href="/form-perjalanan-dinas" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Kembali</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-primary/5 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">SPD {pageTitle}</h1>
          <p className="text-sm text-muted-foreground">Formulir perjalanan dinas menggunakan {pageTitle.toLowerCase()}</p>
        </div>
      </div>

      {/* Embedded Content */}
      <div className="flex-1 w-full relative">
        {/* Loading Overlay (Agar user tahu sedang loading) */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm">
            <Loader2 className="w-8 h-8 text-primary animate-spin mb-2" />
            <p className="text-sm text-muted-foreground">Memuat Formulir...</p>
          </div>
        )}

        <iframe
          src={iframeUrl}
          frameBorder="0"
          className={`w-full h-full min-h-[1000px] transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title={`Form SPD ${pageTitle}`}
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads"
        />
      </div>
    </div>
  );
}
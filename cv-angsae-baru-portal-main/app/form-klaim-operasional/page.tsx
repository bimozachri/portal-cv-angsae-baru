"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";

// --- PENTING: Ganti Link Ini dengan Link Google Apps Script Klaim Operasional Anda ---
const GAS_URL = "https://script.google.com/macros/s/AKfycbw_0d37x0kJFuMtOzT1cC--hY9ZlkLICimfr8DnESi45HTvoCH5q6iwtNXkSaii26Z_Ag/exec"; 

export default function FormKlaimOperasionalPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Mencegah error hidrasi (hydration mismatch)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header Khusus (Style Absensi Digital) */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/image.png" 
              alt="CV Angsae Baru Logo" 
              width={40} 
              height={40} 
              className="object-contain" 
            />
            <span className="font-bold text-lg text-foreground hidden sm:block">
              Angsae Baru Group
            </span>
          </Link>

          {/* Tombol Kanan: Theme Toggle & Kembali */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button asChild variant="outline" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Kembali ke Portal</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Judul Halaman */}
      <div className="bg-primary/5 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Klaim Operasional
          </h1>
          <p className="text-sm text-muted-foreground">
            Formulir penggantian biaya operasional non-perjalanan dinas.
          </p>
        </div>
      </div>

      {/* Area Iframe Full Width */}
      <div className="flex-1 w-full relative">
        
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-sm text-muted-foreground font-medium">
                Memuat Formulir...
              </p>
            </div>
          </div>
        )}

        {/* Google Apps Script Iframe */}
        <iframe
          src={GAS_URL}
          className={`w-full h-full min-h-[1000px] border-0 transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          title="Form Klaim Operasional"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads"
        />
      </div>
    </div>
  );
}
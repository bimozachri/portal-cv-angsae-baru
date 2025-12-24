import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function FormPengajuanNoSuratPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/image.png" alt="CV Angsae Baru Logo" width={40} height={40} className="object-contain" />
            <span className="font-bold text-lg text-foreground hidden sm:block">CV Angsae Baru</span>
          </Link>

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

      {/* Page Title */}
      <div className="bg-primary/5 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">Form Pengajuan No. Surat</h1>
          <p className="text-sm text-muted-foreground">Sistem pengajuan nomor surat terintegrasi dengan Google Apps Script</p>
        </div>
      </div>

      {/* Embedded Content */}
      <div className="flex-1 w-full">
        <iframe
          src="https://script.google.com/macros/s/AKfycbzvj_8y66JuBXptYcIEcxutk8Q-BRjNqI4gbhyeMw11LpqxoxvTONZuS6bX0bN7Npg8/exec"
          frameBorder="0"
          width="100%"
          height="1000px"
          title="Form Pengajuan No. Surat"
          allow="clipboard-write; clipboard-read; autoplay"
        />
      </div>
    </div>
  );
}

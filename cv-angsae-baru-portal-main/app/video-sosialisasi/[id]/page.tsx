import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const videoData: Record<string, { title: string; youtubeId: string; description: string }> = {
  "sosialisasi-abaf": {
    title: "Sosialisasi Angsae Baru Application Form (ABAF)",
    youtubeId: "k3p754Xf73U",
    description: "Panduan lengkap cara menggunakan Angsae Baru Application Form untuk administrasi karyawan.",
  },
  "sosialisasi-bpjs": {
    title: "Sosialisasi BPJS Kesehatan",
    youtubeId: "tkNjd0DPhCg",
    description: "Informasi penting mengenai BPJS Kesehatan untuk seluruh karyawan CV. Angsae Baru.",
  },
  "sosialisasi-absen-digital": {
    title: "Sosialisasi Absen Digital",
    youtubeId: "Jv9o_N5iTY8",
    description: "Tutorial cara menggunakan sistem absensi digital terintegrasi dengan Google Apps Script.",
  },
  "sosialisasi-abaf-2": {
    title: "Sosialisasi Pengisian ABAF 2.0 - Manajemen Surat & Arsip",
    youtubeId: "ShurbFukSHI",
    description: "Panduan pengisian ABAF versi 2.0 untuk manajemen surat dan arsip perusahaan.",
  },
};

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = videoData[id];

  if (!video) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Bagian Kiri: Tombol Kembali & Logo */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Kembali ke Dashboard
                </Button>
              </Link>
              <span className="font-semibold text-foreground">Video Sosialisasi</span>
            </div>

            {/* Bagian Kanan: Theme Toggle */}
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">{video.title}</h1>
          <p className="text-muted-foreground mb-6">{video.description}</p>

          {/* Video Embed */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Navigation Footer */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/video-sosialisasi">
              <Button variant="outline" className="gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Lihat Video Lainnya
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-primary hover:bg-secondary text-primary-foreground">Kembali ke Portal</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(videoData).map((id) => ({
    id: id,
  }));
}

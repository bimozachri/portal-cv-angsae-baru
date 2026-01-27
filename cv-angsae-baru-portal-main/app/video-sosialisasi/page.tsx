import Link from "next/link";
import { ArrowLeft, PlayCircle, Calendar } from "lucide-react"; // Tambah import Calendar
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// 1. Update Data Video dengan properti 'date' dan 'isoDate' (untuk sorting)
const videos = [
  {
    id: "sosialisasi-abaf-2",
    title: "Sosialisasi Pengisian ABAF 2.0 - Manajemen Surat & Arsip",
    description: "Panduan pengisian ABAF versi 2.0 untuk manajemen surat dan arsip perusahaan.",
    thumbnail: "/images/forms/ABAF form pengajuan no surat.png", // Ganti dengan gambar thumbnail yang sesuai jika ada
    date: "9 Desember 2025",
    isoDate: "2025-12-09",
  },
  {
    id: "sosialisasi-absen-digital",
    title: "Sosialisasi Absen Digital & ABAF 2.0",
    description: "Tutorial cara menggunakan sistem absensi digital terintegrasi.",
    thumbnail: "/images/forms/ABAF absensi.png",
    date: "3 November 2025",
    isoDate: "2025-11-03",
  },
  {
    id: "sosialisasi-bpjs",
    title: "Sosialisasi BPJS Kesehatan",
    description: "Informasi penting mengenai BPJS Kesehatan untuk seluruh karyawan.",
    thumbnail: "/bpjs-kesehatan-tutorial-video-thumbnail.jpg",
    date: "30 Mei 2024",
    isoDate: "2024-05-30",
  },
  {
    id: "sosialisasi-abaf",
    title: "Sosialisasi ABAF (Versi Lama)",
    description: "Panduan lengkap cara menggunakan Angsae Baru Application Form (Versi 1).",
    thumbnail: "/images/forms/abaf-logo.png",
    date: "22 Mei 2024",
    isoDate: "2024-05-22",
  },
];

// 2. Fungsi Sorting: Mengurutkan dari tanggal terbaru (Des 2025) ke terlama (Mei 2024)
const sortedVideos = videos.sort((a, b) => {
  return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
});

export default function VideoListPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Kembali ke Dashboard
                </Button>
              </Link>
              <span className="font-semibold text-foreground">Video Sosialisasi</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Pusat Informasi & Tutorial</h1>
          <p className="text-muted-foreground">Kumpulan video panduan operasional dan sosialisasi kebijakan Angsae Baru Group.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {sortedVideos.map((video) => (
            <Link key={video.id} href={`/video-sosialisasi/${video.id}`} className="group block h-full">
              <Card className="h-full overflow-hidden border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 group-hover:-translate-y-1">
                {/* Thumbnail Area */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {/* Placeholder Image jika gambar belum ada, ganti src dengan video.thumbnail */}
                  <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                    <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                  {/* Jika sudah ada gambar asli, uncomment baris di bawah ini */}
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                <CardHeader>
                  {/* 3. Tampilan Tanggal Upload */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>Diunggah: {video.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

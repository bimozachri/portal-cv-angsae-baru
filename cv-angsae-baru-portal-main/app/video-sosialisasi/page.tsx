"use client"

import Link from "next/link"
import { ArrowLeft, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

const videos = [
  {
    id: "sosialisasi-abaf",
    title: "Sosialisasi Angsae Baru Application Form (ABAF)",
    description: "Panduan lengkap cara menggunakan Angsae Baru Application Form untuk administrasi karyawan.",
    thumbnail: "/images/forms/abaf-logo.png",
  },
  {
    id: "sosialisasi-bpjs",
    title: "Sosialisasi BPJS Kesehatan",
    description: "Informasi penting mengenai BPJS Kesehatan untuk seluruh karyawan CV. Angsae Baru.",
    thumbnail: "/bpjs-kesehatan-tutorial-video-thumbnail.jpg",
  },
  {
    id: "sosialisasi-absen-digital",
    title: "Sosialisasi Absen Digital",
    description: "Tutorial cara menggunakan sistem absensi digital terintegrasi dengan Google Apps Script.",
    thumbnail: "/images/forms/ABAF absensi.png",
  },
  {
    id: "sosialisasi-abaf-2",
    title: "Sosialisasi Pengisian ABAF 2.0 - Manajemen Surat & Arsip",
    description: "Panduan pengisian ABAF versi 2.0 untuk manajemen surat dan arsip perusahaan.",
    thumbnail: "/document-management-tutorial-video-thumbnail.jpg",
  },
]

export default function VideoSosialisasiPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            
            {/* GRUP KIRI: Tombol Kembali + Logo + Judul */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Kembali ke Portal
                </Button>
              </Link>
            </div>

            {/* GRUP KANAN: Theme Toggle */}
            <ThemeToggle />
            
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Tutorial & Panduan</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Video Sosialisasi</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pilih video tutorial untuk mempelajari cara menggunakan layanan digital CV. Angsae Baru.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/video-sosialisasi/${video.id}`}
              className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <PlayCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <PlayCircle className="h-4 w-4" />
                    Tonton Video
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

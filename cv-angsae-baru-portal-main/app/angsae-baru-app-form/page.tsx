"use client"

import Link from "next/link"
import { ArrowLeft, FileText, ClipboardList, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

// UPDATE DATA DISINI
const forms = [
  {
    id: "absensi-digital",
    title: "Absensi Digital",
    description: "Form absensi harian untuk mencatat kehadiran masuk dan pulang kerja karyawan.",
    href: "/absensi-digital",
    thumbnail: "/images/forms/ABAF absensi.png", 
  },
  {
    id: "form-cuti",
    title: "Form Pengajuan Cuti",
    description: "Formulir untuk mengajukan permohonan cuti tahunan, cuti besar, atau cuti lainnya.",
    href: "#", 
    thumbnail: "/images/forms/ABAF form cuti.png",
  },
  {
    id: "form-sakit",
    title: "Form Izin Sakit",
    description: "Formulir pemberitahuan ketidakhadiran dikarenakan sakit beserta upload surat dokter.",
    href: "#",
    thumbnail: "/images/forms/ABAF form sakit.png",
  },
  {
    id: "form-lembur",
    title: "Form Surat Perintah Lembur",
    description: "Formulir pengajuan dan persetujuan kerja lembur karyawan.",
    href: "#",
    thumbnail: "/images/forms/ABAF form lembur.png",
  },
  {
    id: "form-perjalanan-dinas",
    title: "Form Surat Perintah Perjalanan Dinas",
    description: "Formulir pengajuan dan persetujuan perjalanan dinas karyawan.",
    href: "#",
    thumbnail: "/images/forms/ABAF form spd.png",
  },
  {
    id: "form-klaim-operasional",
    title: "Form Surat Klaim Operasional",
    description: "Formulir pengajuan klaim biaya operasional yang telah dikeluarkan karyawan.",
    href: "#",
    thumbnail: "/images/forms/ABAF form klaim.png",
  },
  {
    id: "form-dezavasi-sales",
    title: "Dezavasi's Sales Form",
    description: "Formulir khusus untuk keperluan administrasi penjualan Dezavasi.",
    href: "#",
    thumbnail: "/images/forms/ABAF form sales.png",
  },
  {
    id: "form-pengajuan-no-surat",
    title: "Form Pengajuan No. Surat",
    description: "Sistem pengajuan nomor surat terintegrasi dengan Google Apps Script.",
    href: "/form-pengajuan-no-surat",
    thumbnail: "/images/forms/ABAF form pengajuan no surat.png",
  },
]

export default function AngsaeBaruAppFormPage() {
  // 1. State untuk menyimpan kata kunci pencarian
  const [searchQuery, setSearchQuery] = useState("")

  // 2. Logika untuk memfilter forms berdasarkan judul atau deskripsi
  const filteredForms = forms.filter((form) => 
    form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    form.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
                  Kembali ke Portal
                </Button>
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Layanan Mandiri</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Pilih Formulir</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Silakan pilih formulir administrasi yang ingin Anda isi.
          </p>
        </div>

        {/* 3. SEARCH BOX SECTION */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Cari formulir..." 
              className="pl-10 bg-card/50 backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Tampilkan pesan jika hasil pencarian kosong */}
          {filteredForms.length === 0 && (
            <p className="text-sm text-muted-foreground text-center mt-3 animate-in fade-in slide-in-from-top-1">
              Tidak ditemukan formulir dengan kata kunci "{searchQuery}"
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* 4. Render hasil filter (filteredForms), bukan data mentah (forms) */}
          {filteredForms.map((form) => {
            const hasRealThumbnail = form.thumbnail && form.thumbnail !== "/placeholder.svg";

            return (
              <Link
                key={form.id}
                href={form.href}
                className={`group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 ${
                  form.href === "#" ? "cursor-not-allowed opacity-80" : ""
                }`}
                onClick={(e) => form.href === "#" && e.preventDefault()}
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {hasRealThumbnail ? (
                    <div className="w-full h-full p-6 flex items-center justify-center bg-white">
                        <Image
                            src={form.thumbnail}
                            alt={form.title}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/20 group-hover:scale-105 transition-transform duration-300">
                      <ClipboardList className="w-16 h-16 text-muted-foreground/50" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <FileText className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {form.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{form.description}</p>
                  <div className="mt-4">
                    <span className={`inline-flex items-center gap-2 text-sm font-medium ${form.href === "#" ? "text-muted-foreground" : "text-primary"}`}>
                      <FileText className="h-4 w-4" />
                      {form.href === "#" ? "Segera Hadir" : "Isi Form"}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
"use client"

import type React from "react"
import { ServiceCard } from "@/components/service-card"
import { 
  ShoppingCart, 
  PlayCircle, 
  FileText, 
  UserCheck, 
  CalendarDays, 
  Activity, 
  Clock, 
  Search,
  Briefcase,
  Receipt // Icon untuk Klaim Operasional
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"

// DATA LAYANAN LENGKAP
const services = [
  {
    title: "Absensi Digital",
    description: "Form absensi harian untuk mencatat kehadiran masuk dan pulang kerja karyawan.",
    icon: UserCheck,
    buttonText: "Isi Absen",
    href: "/absensi-digital", // Tetap Internal
    color: "secondary" as const,
  },
  {
    title: "Form Pengajuan No. Surat",
    description: "Ajukan nomor surat untuk kepentingan bisnis dan administrasi resmi perusahaan.",
    icon: FileText,
    buttonText: "Isi Form",
    href: "/form-pengajuan-no-surat", // Tetap Internal
    color: "primary" as const,
  },
  {
    title: "Form Pengajuan Cuti",
    description: "Formulir untuk mengajukan permohonan cuti tahunan, cuti besar, atau cuti lainnya.",
    icon: CalendarDays,
    buttonText: "Isi Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdeO6fNTDfSp7Gm8v4hTjCsNItfkqL0I18eCkuc8gr2KitR8A/viewform", // External
    color: "primary" as const,
  },
  {
    title: "Form Izin Sakit",
    description: "Formulir pemberitahuan ketidakhadiran dikarenakan sakit beserta upload surat dokter.",
    icon: Activity,
    buttonText: "Isi Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdf5xaPhmA-UP1QQ-jFTZhGqc_KHh644utBIkzQwumWiLoIEQ/viewform", // External
    color: "primary" as const,
  },
  {
    title: "Form Lembur",
    description: "Formulir pengajuan dan persetujuan kerja lembur karyawan.",
    icon: Clock,
    buttonText: "Isi Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdHE9boh7qmdnXPyvQvjQ3iLvoczltk482hDUJTVM_CiTtP5A/viewform", // External
    color: "primary" as const,
  },
  {
    title: "Form Perjalanan Dinas",
    description: "Pengajuan surat tugas dan anggaran perjalanan dinas luar kota.",
    icon: Briefcase,
    buttonText: "Isi Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdhsP0C3nv5Rg0S0uvB2C7_pmAUuhQftpNnkBaCY3EDNRVOcw/viewform", // External
    color: "primary" as const,
  },
  {
    title: "Form Klaim Operasional Non-Perjalanan Dinas",
    description: "Formulir pengajuan penggantian biaya operasional kantor (Reimbursement).",
    icon: Receipt,
    buttonText: "Isi Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeNsXiBpNsuP3ZIOid-RqkRUm63q95Cx0Okx7TfYYuCyahqPA/viewform", // External
    color: "primary" as const,
  },
  {
    title: "Dezavasi's Sales Form App",
    description: "Form untuk menambah data customer baru dan mengelola informasi penjualan perusahaan.",
    icon: ShoppingCart,
    buttonText: "Isi Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSewbtzCYbBgxQfgmeRme2QKK4e42m9ePhpEf25Q6MlHBB85JQ/viewform",
    color: "secondary" as const,
  },
  {
    title: "Video Sosialisasi",
    description: "Akses video tutorial dan panduan lengkap cara menggunakan portal dan layanan digital perusahaan.",
    icon: PlayCircle,
    buttonText: "Lihat Video",
    href: "/video-sosialisasi", // Tetap Internal
    color: "accent" as const,
  },
]

function AnimatedCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ServicesGrid() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  
  const [searchQuery, setSearchQuery] = useState("")

  const filteredServices = services.filter((service) => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Layanan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Akses Semua Layanan Digital
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            Pilih layanan yang Anda butuhkan untuk mengelola administrasi dan aktivitas kerja harian.
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Cari layanan (cth: cuti, lembur, surat)..." 
              className="pl-10 bg-background shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <AnimatedCard key={index} delay={index * 50}>
                <ServiceCard {...service} />
              </AnimatedCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
             <p className="text-muted-foreground">Layanan tidak ditemukan.</p>
          </div>
        )}
        
      </div>
    </section>
  )
}
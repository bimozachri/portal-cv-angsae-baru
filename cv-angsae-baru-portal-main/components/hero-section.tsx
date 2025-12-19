"use client"

import { Building2, Users, FileCheck, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import InteractiveBackground from "@/components/interactive-background"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-16 md:py-24"
    >
      {/* 1. LAYER BACKGROUND INTERAKTIF */}
      {/* Diletakkan absolute memenuhi section, tapi di bawah konten (z-0) */}
      <div className="absolute inset-0 z-0 opacity-60">
         <InteractiveBackground />
      </div>

      {/* 2. LAYER DEKORASI GRADIENT (Opsional - agar tidak terlalu sepi) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* 3. KONTEN UTAMA */}
      {/* z-10 agar berada di atas canvas */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>Portal Layanan Digital</span>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Portal Office <br/> <span className="text-primary">CV. Angsae Baru</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Akses seluruh layanan digital perusahaan dalam satu portal terpadu. Kelola form karyawan, absensi, dan
            administrasi dengan mudah.
          </p>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center gap-4 mb-12 transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                <Link href="#services">
                  Jelajahi Layanan <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-700 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Layanan Digital</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-transform duration-300 group-hover:scale-110">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Karyawan Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
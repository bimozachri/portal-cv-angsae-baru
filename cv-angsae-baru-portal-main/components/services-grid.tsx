"use client";

import type React from "react";

import { ServiceCard } from "@/components/service-card";
import { ClipboardList, ShoppingCart, PlayCircle, FileText, UserCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Angsae Baru App Form",
    description: "Akses berbagai form administrasi karyawan termasuk absensi, cuti, sakit, lembur, perjalanan dinas, dan klaim operasional non-perjalanan dinas.",
    icon: ClipboardList,
    buttonText: "Isi Form",
    href: "/angsae-baru-app-form",
    color: "primary" as const,
  },
  {
    title: "Absensi Digital (ABAF v2.0)",
    description: "Sistem absensi digital terintegrasi dengan Google Apps Script untuk seluruh karyawan.",
    icon: UserCheck,
    buttonText: "Isi Absen",
    href: "/absensi-digital",
    color: "secondary" as const,
  },
  {
    title: "Form Pengajuan No. Surat (ABAF v2.0)",
    description: "Ajukan nomor surat untuk kepentingan bisnis dan administrasi resmi perusahaan.",
    icon: FileText,
    buttonText: "Isi Form",
    href: "/form-pengajuan-no-surat",
    color: "accent" as const,
  },
  {
    title: "Dezavasi's Sales Form App",
    description: "Form untuk menambah data customer baru dan mengelola informasi penjualan perusahaan.",
    icon: ShoppingCart,
    buttonText: "Isi Form",
    href: "#",
    color: "primary" as const,
  },
  {
    title: "Video Sosialisasi",
    description: "Akses video tutorial dan panduan lengkap cara menggunakan portal dan layanan digital perusahaan.",
    icon: PlayCircle,
    buttonText: "Lihat Video",
    href: "/video-sosialisasi",
    color: "secondary" as const,
  },
];

function AnimatedCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function ServicesGrid() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Layanan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Akses Semua Layanan Digital</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">Pilih layanan yang Anda butuhkan untuk mengelola administrasi dan aktivitas kerja harian.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 100}>
              <ServiceCard {...service} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

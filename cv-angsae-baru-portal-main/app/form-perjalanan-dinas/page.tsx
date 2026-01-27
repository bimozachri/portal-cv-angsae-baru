"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { Car, Bike, Train, Building2 } from "lucide-react";

// Data didefinisikan di dalam file bertanda "use client"
// agar tidak terjadi error serialisasi fungsi ikon
const spdMenus = [
  {
    title: "SPD Kendaraan Kantor",
    description: "Formulir klaim perjalanan dinas menggunakan kendaraan operasional kantor.",
    icon: Building2,
    buttonText: "Buka Form",
    href: "/form-perjalanan-dinas/kendaraan-kantor",
    color: "primary" as const,
  },
  {
    title: "SPD Mobil Pribadi",
    description: "Formulir klaim perjalanan dinas menggunakan mobil pribadi.",
    icon: Car,
    buttonText: "Buka Form",
    href: "/form-perjalanan-dinas/mobil-pribadi",
    color: "secondary" as const,
  },
  {
    title: "SPD Motor Pribadi",
    description: "Formulir klaim perjalanan dinas menggunakan sepeda motor pribadi.",
    icon: Bike,
    buttonText: "Buka Form",
    href: "/form-perjalanan-dinas/motor-pribadi",
    color: "accent" as const,
  },
  {
    title: "SPD TSP Umum",
    description: "Formulir klaim perjalanan dinas menggunakan transportasi umum.",
    icon: Train,
    buttonText: "Buka Form",
    href: "/form-perjalanan-dinas/tsp-umum",
    color: "primary" as const,
  },
];

export default function PerjalananDinasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Pilih Jenis Perjalanan Dinas</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Silakan pilih kategori perjalanan dinas untuk melanjutkan pengisian form.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {spdMenus.map((menu, index) => (
            <ServiceCard key={index} {...menu} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

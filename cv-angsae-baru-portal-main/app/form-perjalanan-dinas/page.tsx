"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { Car, Bike, Train, Building2 } from "lucide-react";

const spdMenus = [
  {
    title: "SPD Kendaraan Kantor",
    description: "Gunakan kendaraan operasional perusahaan.",
    icon: Building2,
    href: "/form-perjalanan-dinas/kendaraan-kantor",
    color: "primary" as const,
    buttonText: "Buka Form"
  },
  {
    title: "SPD Mobil Pribadi",
    description: "Gunakan mobil pribadi untuk dinas.",
    icon: Car,
    href: "/form-perjalanan-dinas/mobil-pribadi",
    color: "secondary" as const,
    buttonText: "Buka Form"
  },
  {
    title: "SPD Motor Pribadi",
    description: "Gunakan sepeda motor pribadi untuk dinas.",
    icon: Bike,
    href: "/form-perjalanan-dinas/motor-pribadi",
    color: "accent" as const,
    buttonText: "Buka Form"
  },
  {
    title: "SPD TSP Umum",
    description: "Gunakan transportasi umum (Kereta, Pesawat, dll).",
    icon: Train,
    href: "/form-perjalanan-dinas/tsp-umum",
    color: "primary" as const,
    buttonText: "Buka Form"
  },
];

export default function SelectionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Pilih Kategori Perjalanan Dinas</h1>
          <p className="text-muted-foreground mt-2">Silakan pilih jenis transportasi yang Anda gunakan.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {spdMenus.map((menu, idx) => (
            <ServiceCard key={idx} {...menu} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
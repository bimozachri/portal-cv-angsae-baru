import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { Footer } from "@/components/footer"
// 1. Import komponen Announcements yang baru dibuat
import { Announcements } from "@/components/announcements"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <Announcements />
        
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}
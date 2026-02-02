"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Loader2, UserCheck, LogOut, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";

// --- KONFIGURASI ---
const GAS_APPROVAL_URL = "https://script.google.com/macros/s/AKfycbyOdkuY-Dv-mvhHCor1ND0w144YXxSa4fCF7NkbSC5kDMq15xD0aY5tCOfQL3nmrGhI/exec";
const ACCESS_PIN = "998877"; 

export default function ApprovalTeamLeaderPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  // State baru untuk fitur Show/Hide Password
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === ACCESS_PIN) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("PIN Salah! Akses ditolak.");
      setPinInput("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPinInput("");
    setShowPassword(false); // Reset visibility saat logout
    setIsLoading(true); 
  };

  if (!isMounted) return null;

  // --- BAGIAN HEADER ---
  const HeaderSection = () => (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/image.png" 
            alt="CV Angsae Baru Logo" 
            width={40} 
            height={40} 
            className="object-contain" 
          />
          <span className="font-bold text-lg text-foreground hidden sm:block">
            Angsae Baru Group
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {isAuthenticated ? (
            <Button 
              variant="destructive" 
              size="sm" 
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Keluar</span>
            </Button>
          ) : (
            <Button asChild variant="outline" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Kembali ke Portal</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );

  // --- TAMPILAN 1: FORM LOGIN (Belum Masuk) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <HeaderSection />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-2xl font-bold">Portal Team Leader</h1>
              <p className="text-muted-foreground">
                Sesi tidak disimpan demi keamanan. <br/>
                Silakan masukkan PIN untuk mengakses.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"} // Dinamis berdasarkan state
                    placeholder="Masukkan PIN Akses"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    className="text-center text-lg tracking-widest h-12 pr-10" // pr-10 agar teks tidak tertutup ikon
                    autoFocus
                  />
                  {/* Tombol Toggle Show/Hide */}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center font-medium animate-pulse">
                    {error}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full h-11 text-base bg-blue-600 hover:bg-blue-700 text-white">
                Buka Portal
              </Button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // --- TAMPILAN 2: DASHBOARD APPROVAL (Sudah Masuk) ---
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderSection />

      {/* Judul Halaman */}
      <div className="bg-primary/5 border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-primary" />
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              Dashboard Approval
            </h1>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Kelola persetujuan klaim operasional karyawan.
          </p>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 w-full relative">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-2" />
            <p className="text-muted-foreground font-medium">Memuat Data Approval...</p>
          </div>
        )}
        
        <iframe
          src={GAS_APPROVAL_URL}
          className={`w-full h-full min-h-[800px] border-0 transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          title="Google Apps Script Approval"
          onLoad={() => setIsLoading(false)}
          allow="geolocation; microphone; camera"
        />
      </div>
    </div>
  );
}
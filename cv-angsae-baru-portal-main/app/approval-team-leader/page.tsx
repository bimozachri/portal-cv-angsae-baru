"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Loader2, Lock, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";

// --- KONFIGURASI KHUSUS TEAM LEADER ---
// 1. Masukkan Link Google Apps Script (Khusus Approval TL jika ada, atau pakai yang sama)
const GAS_APPROVAL_TL_URL = "MASUKKAN_LINK_GAS_APPROVAL_DISINI";

// 2. PIN Khusus Team Leader (Bisa dibedakan dengan PIN lain)
const TL_PIN = "998877"; 

export default function ApprovalTeamLeaderPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsMounted(true);
    // Cek sesi login khusus TL
    const sessionAuth = sessionStorage.getItem("auth_tl");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === TL_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("auth_tl", "true"); 
      setError("");
    } else {
      setError("PIN Team Leader salah.");
      setPinInput("");
    }
  };

  if (!isMounted) return <div className="min-h-screen bg-background" />;

  // --- TAMPILAN LOGIN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <HeaderSimple />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Portal Team Leader</h1>
              <p className="text-muted-foreground">
                Halaman khusus otorisasi dan approval Team Leader.
                Masukkan PIN akses Anda.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="PIN Team Leader"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="text-center text-lg tracking-widest"
                  autoFocus
                />
                {error && (
                  <p className="text-sm text-red-500 text-center font-medium animate-pulse">
                    {error}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full h-11 text-base bg-blue-600 hover:bg-blue-700">
                Masuk Portal
              </Button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // --- TAMPILAN APPROVAL (IFRAME) ---
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderSimple />

      {/* Judul Halaman Khusus */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              Approval Team Leader
            </h1>
            <p className="text-sm text-muted-foreground">
              Level 1 Approval System
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full relative">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              <p className="text-sm text-muted-foreground">Menyiapkan Data Approval...</p>
            </div>
          </div>
        )}

        <iframe
          src={GAS_APPROVAL_TL_URL}
          className={`w-full h-full min-h-[1000px] border-0 transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          title="Form Approval Team Leader"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        />
      </div>
    </div>
  );
}

function HeaderSimple() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/image.png"
            alt="Logo"
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
          <Button asChild variant="outline" size="sm">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Kembali</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
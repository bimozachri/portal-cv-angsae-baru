import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // <--- IMPORT INI

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portal Office CV. Angsae Baru",
  description:
    "Portal layanan digital terpadu CV. Angsae Baru - Akses form karyawan, absensi, dan administrasi dengan mudah.",
  generator: "v0.app",
  icons: {
    icon: "/images/forms/ab-logo.png", 
    apple: "/images/forms/ab-logo.png", 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Tambahkan suppressHydrationWarning untuk menghindari warning saat reload di dark mode
    <html lang="id" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {/* Wrap content dengan ThemeProvider */}
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
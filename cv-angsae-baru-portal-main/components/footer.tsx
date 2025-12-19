import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
               {/* Gunakan Image logo seperti di Header untuk konsistensi, atau div kotak */}
               <div className="flex items-center justify-center bg-white rounded-md p-1">
                 <Image
                  src="/images/image.png"
                  alt="CV. Angsae Baru Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-background">CV. Angsae Baru</p>
                <p className="text-sm text-background/60">Portal Office</p>
              </div>
            </div>
            <p className="text-background/70 text-sm max-w-md leading-relaxed">
              Portal layanan digital terpadu untuk mengelola administrasi dan aktivitas kerja karyawan CV. Angsae Baru
              dengan mudah dan efisien.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Layanan</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="/angsae-baru-app-form" className="hover:text-primary transition-colors">
                  Angsae Baru App Form
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Dezavasi{"'"}s Sales Form
                </a>
              </li>
              <li>
                <a href="/video-sosialisasi" className="hover:text-primary transition-colors">
                  Video Sosialisasi
                </a>
              </li>
              <li>
                <a href="/form-pengajuan-no-surat" className="hover:text-primary transition-colors">
                  Form Pengajuan Surat
                </a>
              </li>
              <li>
                <a href="/absensi-digital" className="hover:text-primary transition-colors">
                  Absensi Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                {/* GANTI DISINI: Tambahkan dark:text-blue-400 */}
                <Mail className="h-4 w-4 text-primary dark:text-blue-400" />
                <span>adm.angsae@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                {/* GANTI DISINI: Tambahkan dark:text-blue-400 */}
                <Phone className="h-4 w-4 text-primary dark:text-blue-400" />
                <span>+62812 8508 4904</span>
              </li>
              <li className="flex items-start gap-2">
                {/* GANTI DISINI: Tambahkan dark:text-blue-400 */}
                <MapPin className="h-4 w-4 text-primary dark:text-blue-400 mt-0.5" />
                <span>Bogor, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} CV. Angsae Baru. All rights reserved.
            </p>
            <p className="text-sm text-background/50">angsaebaru.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
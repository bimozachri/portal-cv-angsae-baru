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
                <a href="/absensi-digital" className="hover:text-primary transition-colors">
                  Absensi Digital
                </a>
              </li>
              <li>
                <a href="/form-pengajuan-no-surat" className="hover:text-primary transition-colors">
                  Form Pengajuan Surat
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdeO6fNTDfSp7Gm8v4hTjCsNItfkqL0I18eCkuc8gr2KitR8A/viewform" className="hover:text-primary transition-colors">
                  Form Pengajuan Cuti
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdf5xaPhmA-UP1QQ-jFTZhGqc_KHh644utBIkzQwumWiLoIEQ/viewform" className="hover:text-primary transition-colors">
                  Form Izin Sakit
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHE9boh7qmdnXPyvQvjQ3iLvoczltk482hDUJTVM_CiTtP5A/viewform" className="hover:text-primary transition-colors">
                  Form Lembur
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhsP0C3nv5Rg0S0uvB2C7_pmAUuhQftpNnkBaCY3EDNRVOcw/viewform" className="hover:text-primary transition-colors">
                  Form Perjalanan Dinas
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNsXiBpNsuP3ZIOid-RqkRUm63q95Cx0Okx7TfYYuCyahqPA/viewform" className="hover:text-primary transition-colors">
                  Form Klaim Operasional Non-Perjalanan Dinas
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSewbtzCYbBgxQfgmeRme2QKK4e42m9ePhpEf25Q6MlHBB85JQ/viewform" className="hover:text-primary transition-colors">
                  Dezavasi{"'"}s Sales Form
                </a>
              </li>
              <li>
                <a href="/video-sosialisasi" className="hover:text-primary transition-colors">
                  Video Sosialisasi
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
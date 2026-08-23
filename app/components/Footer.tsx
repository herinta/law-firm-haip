"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Scale, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#222226] text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* About & Branding */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="flex flex-col tracking-widest group">
            <span className="text-2xl font-serif font-bold text-white tracking-widest group-hover:text-gold transition-colors duration-300">
              H A I P
            </span>
            <span className="text-[10px] text-gold uppercase tracking-[0.25em] font-sans">
              LAW FIRM
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            H A I P Law Firm berkomitmen menyediakan layanan hukum boutique kelas dunia dengan integritas moral tertinggi dan keahlian hukum yang mendalam demi melindungi kepentingan klien kami.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1.2 1-1.2h3V2h-4.3C10.5 2 9 3.5 9 5.8V8z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-6">
          <h4 className="text-white font-serif font-semibold text-lg border-l-2 border-gold pl-3">
            Tautan Cepat
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="flex items-center space-x-2 hover:text-gold transition-colors duration-200">
                <ChevronRight className="w-3.5 h-3.5 text-gold/70" />
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <Link href="/layanan" className="flex items-center space-x-2 hover:text-gold transition-colors duration-200">
                <ChevronRight className="w-3.5 h-3.5 text-gold/70" />
                <span>Layanan Hukum</span>
              </Link>
            </li>
            <li>
              <Link href="/tentang-kami" className="flex items-center space-x-2 hover:text-gold transition-colors duration-200">
                <ChevronRight className="w-3.5 h-3.5 text-gold/70" />
                <span>Profil Firma</span>
              </Link>
            </li>
            <li>
              <Link href="/kasus" className="flex items-center space-x-2 hover:text-gold transition-colors duration-200">
                <ChevronRight className="w-3.5 h-3.5 text-gold/70" />
                <span>Kasus & Testimoni</span>
              </Link>
            </li>
            <li>
              <Link href="/publikasi" className="flex items-center space-x-2 hover:text-gold transition-colors duration-200">
                <ChevronRight className="w-3.5 h-3.5 text-gold/70" />
                <span>Berita & Jurnal</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-6">
          <h4 className="text-white font-serif font-semibold text-lg border-l-2 border-gold pl-3">
            Kontak Kami
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span>
                Treasury Tower, Lantai 45, SCBD Lot 28,<br />
                Jl. Jend. Sudirman Kav. 52-53,<br />
                Jakarta Selatan, 12190
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gold flex-shrink-0" />
              <span>+62 (21) 5088-2999</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gold flex-shrink-0" />
              <span>contact@haiplaw.com</span>
            </li>
          </ul>
        </div>

        {/* Google Maps Embed */}
        <div className="flex flex-col space-y-6">
          <h4 className="text-white font-serif font-semibold text-lg border-l-2 border-gold pl-3">
            Lokasi Kantor
          </h4>
          <div className="relative w-full h-40 rounded-lg overflow-hidden border border-[#222226] group shadow-inner bg-neutral-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273062635956!2d106.8066597758682!3d-6.227685460987483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f145be8f5727%3A0xe543e0a544bbfb16!2sTreasury%20Tower!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            ></iframe>
            <div className="absolute bottom-2 right-2 bg-[#050505]/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-gold border border-gold/25 font-sans">
              SCBD, Jakarta
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[#222226] flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Scale className="w-4 h-4 text-gold" />
          <p>&copy; {currentYear} H A I P LAW FIRM. Seluruh hak cipta dilindungi.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gold transition-colors duration-200">Kebijakan Privasi</a>
          <a href="#" className="hover:text-gold transition-colors duration-200">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}

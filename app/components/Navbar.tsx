"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Menu, X, PhoneCall, Award, Users, BookOpen, Image as ImageIcon, Briefcase, Info } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const menuItems = {
    about: [
      { name: "Profil Firma", href: "/tentang-kami", icon: Award },
      { name: "Tim Hukum Kami", href: "/tentang-kami#about-team", icon: Users },
    ],
    publications: [
      { name: "Kabar & Berita", href: "/publikasi", icon: BookOpen },
      { name: "Jurnal Hukum", href: "/publikasi#publications-journals", icon: Briefcase },
      { name: "Galeri Foto", href: "/galeri", icon: ImageIcon },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#222226] py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col tracking-widest group">
          <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-widest group-hover:text-gold transition-colors duration-300">
            H A I P
          </span>
          <span className="text-[9px] text-gold uppercase tracking-[0.25em] font-sans">
            LAW FIRM
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <Link
            href="/"
            className="text-gray-300 hover:text-gold transition-colors duration-300 relative py-2"
          >
            Beranda
          </Link>
          
          <Link
            href="/layanan"
            className="text-gray-300 hover:text-gold transition-colors duration-300 relative py-2"
          >
            Layanan Kami
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 text-gray-300 hover:text-gold transition-colors duration-300 py-2 focus:outline-none cursor-pointer">
              <span>Tentang Kami</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180 text-gold" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 bg-[#0e0e10] border border-[#222226] rounded-md shadow-2xl overflow-hidden py-2"
                >
                  {menuItems.about.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-gold hover:bg-white/5 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4 text-gold" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/kasus"
            className="text-gray-300 hover:text-gold transition-colors duration-300 relative py-2"
          >
            Pengalaman & Testimoni
          </Link>

          {/* Publications Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("publications")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 text-gray-300 hover:text-gold transition-colors duration-300 py-2 focus:outline-none cursor-pointer">
              <span>Publikasi & Galeri</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "publications" ? "rotate-180 text-gold" : ""}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "publications" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-60 bg-[#0e0e10] border border-[#222226] rounded-md shadow-2xl overflow-hidden py-2"
                >
                  {menuItems.publications.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-gold hover:bg-white/5 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4 text-gold" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/kontak"
            className="text-gray-300 hover:text-gold transition-colors duration-300 relative py-2"
          >
            Kontak
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/kontak"
            className="relative inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-gold hover:bg-gold hover:text-black text-gold font-semibold transition-all duration-300 text-sm overflow-hidden group shadow-lg shadow-gold/10"
          >
            <PhoneCall className="w-4 h-4 animate-pulse group-hover:animate-none" />
            <span>Konsultasi WA</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-gold focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0c]/98 border-b border-[#222226] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-gold py-2 border-b border-white/5 font-medium"
              >
                Beranda
              </Link>
              <Link
                href="/layanan"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-gold py-2 border-b border-white/5 font-medium"
              >
                Layanan Kami
              </Link>

              {/* Mobile About Dropdown */}
              <div className="py-2 border-b border-white/5">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-gold font-medium focus:outline-none"
                >
                  <span>Tentang Kami</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "about" ? "rotate-180 text-gold" : ""}`} />
                </button>
                {activeDropdown === "about" && (
                  <div className="pl-4 mt-2 space-y-3 pt-1">
                    {menuItems.about.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-gray-400 hover:text-gold py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/kasus"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-gold py-2 border-b border-white/5 font-medium"
              >
                Pengalaman & Testimoni
              </Link>

              {/* Mobile Publications Dropdown */}
              <div className="py-2 border-b border-white/5">
                <button
                  onClick={() => toggleDropdown("publications")}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-gold font-medium focus:outline-none"
                >
                  <span>Publikasi & Galeri</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "publications" ? "rotate-180 text-gold" : ""}`} />
                </button>
                {activeDropdown === "publications" && (
                  <div className="pl-4 mt-2 space-y-3 pt-1">
                    {menuItems.publications.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-gray-400 hover:text-gold py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-gold py-2 border-b border-white/5 font-medium"
              >
                Kontak
              </Link>

              {/* Mobile WA Call-to-action */}
              <div className="pt-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20HAIP%20Law%20Firm,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20hukum%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-gold text-black font-bold py-3 rounded-full hover:bg-gold/90 transition-all duration-300 text-center shadow-lg"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import About from "../components/About";

export default function TentangKamiPage() {
  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Route Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/80 to-transparent border-b border-[#222226]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-bold">Profil Kantor Hukum</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">Tentang Kami</h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>
      </div>
      <About />
    </div>
  );
}

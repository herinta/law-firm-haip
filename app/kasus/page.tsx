"use client";

import Experience from "../components/Experience";

export default function KasusPage() {
  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Route Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/80 to-transparent border-b border-[#222226]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-bold">Pencapaian & Kredibilitas</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">Kasus & Testimoni</h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>
      </div>
      <Experience />
    </div>
  );
}

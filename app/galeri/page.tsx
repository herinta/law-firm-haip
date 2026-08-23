"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export default function GaleriPage() {
  const galleryImages = [
    { src: "/court_building.png", title: "Gedung Mahkamah Agung RI", span: "md:col-span-2 md:row-span-1" },
    { src: "/gavel_book.png", title: "Kajian Berkas Perkara", span: "md:col-span-1 md:row-span-1" },
    { src: "/lawyer_meeting.png", title: "Negosiasi Bisnis Klien", span: "md:col-span-1 md:row-span-2" },
    { src: "/luxury_law_office_bg.png", title: "Ruang Rapat Utama SCBD", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Route Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-bold">Dokumentasi HAIP</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">Galeri Foto</h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className={`${img.span} relative rounded-lg overflow-hidden border border-[#222226] group shadow-xl h-64 bg-neutral-900`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />
              
              {/* Static light black overlay for text visibility */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-gold font-serif font-semibold text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  Kegiatan Firma
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

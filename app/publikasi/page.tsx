"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { newsArticles } from "../data/news";

export default function PublikasiPage() {
  const journals = [
    {
      title: "Analisis Yuridis Eksistensi Klausul Arbitrase dalam Sengketa Konstruksi Nasional",
      volume: "Jurnal Hukum HAIP - Vol. 5, No. 2 (2026)",
      author: "Prof. Dr. Hendra Agung, S.H., M.H., LL.M.",
      href: "#",
    },
    {
      title: "Pertanggungjawaban Pidana Korporasi dalam Kasus Tindak Pidana Pencucian Uang",
      volume: "Jurnal Kajian Advokasi - Vol. 12, No. 1 (2026)",
      author: "Indra Kusuma, S.H., LL.M.",
      href: "#",
    },
    {
      title: "Perlindungan Hukum Rahasia Dagang melalui Non-Disclosure Agreement (NDA) Pasca-Kerja",
      volume: "Kajian Komersial Indonesia - Vol. 8, No. 3 (2025)",
      author: "Agung Dewantoro, S.H., M.H. & Patricia Siahaan, S.H., M.Kn.",
      href: "#",
    },
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Route Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-bold">Riset, Opini & Berita</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">Publikasi Hukum</h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* SECTION 1: NEWS GRID */}
        <div className="mb-24">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-3xl mb-12 space-y-2"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Opini & Berita Advokat</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">Kabar Hukum Terkini</h2>
            <p className="text-gray-400 text-sm">
              Analisis mendalam mengenai penyesuaian regulasi Indonesia serta dampaknya bagi operasional korporasi Anda.
            </p>
          </motion.div>

          {/* News Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0d0d10] border border-[#222226] hover:border-gold/50 rounded-lg overflow-hidden transition-all duration-300 group shadow-2xl flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] to-transparent opacity-60" />
                </div>
                
                {/* Article Info */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500 space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-gold transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#222226]/50">
                    <Link
                      href={`/publikasi/${item.id}`}
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-gold tracking-wide uppercase hover:text-gold-accent transition-colors"
                    >
                      <span>Baca Selengkapnya</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* SECTION 2: JOURNALS LIST */}
        <div id="publications-journals" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-[#1a1a1f]">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Jurnal Riset</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">Jurnal Ilmiah & Studi Kasus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tim riset kami secara rutin menerbitkan telaah hukum komersial sebagai bentuk dedikasi keilmuan dan sumbangsih praktis hukum di Indonesia.
            </p>
          </motion.div>

          {/* Journals List */}
          <div className="lg:col-span-8 space-y-4 w-full">
            {journals.map((journal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0d0d10] border border-[#222226] hover:border-gold/40 p-6 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-300 group shadow-lg"
              >
                <div className="space-y-1.5 max-w-xl">
                  <span className="text-[10px] text-gold font-sans font-semibold uppercase tracking-wider">
                    {journal.volume}
                  </span>
                  <h4 className="text-white font-serif font-bold text-base group-hover:text-gold transition-colors duration-300">
                    {journal.title}
                  </h4>
                  <p className="text-gray-500 text-xs italic">Penulis: {journal.author}</p>
                </div>
                
                <a
                  href={journal.href}
                  className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-black text-gold text-xs font-semibold tracking-wide transition-all duration-300 flex-shrink-0 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh PDF</span>
                </a>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

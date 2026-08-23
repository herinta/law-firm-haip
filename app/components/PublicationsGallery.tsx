"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, FileText, Download, Calendar, ExternalLink, Image as ImageIcon } from "lucide-react";

export default function PublicationsGallery() {
  const news = [
    {
      id: 1,
      title: "Implikasi Regulasi Ketenagakerjaan Baru terhadap PKWT di Indonesia",
      date: "12 Juli 2026",
      desc: "Analisis komprehensif mengenai tata cara penyusunan Perjanjian Kerja Waktu Tertentu (PKWT) pasca penyesuaian regulasi cipta kerja terbaru.",
      image: "/gavel_book.png",
      href: "#",
    },
    {
      id: 2,
      title: "Perlindungan Hak Merek di Era Digital: Panduan untuk Pelaku Usaha",
      date: "28 Juni 2026",
      desc: "Bagaimana korporasi dapat memitigasi risiko pelanggaran merek dagang di platform e-commerce dan sosial media melalui tindakan hukum preventif.",
      image: "/lawyer_meeting.png",
      href: "#",
    },
    {
      id: 3,
      title: "PKPU sebagai Instrumen Penyelamatan Bisnis dalam Krisis Likuiditas",
      date: "15 Mei 2026",
      desc: "Menelaah langkah strategis pengajuan restrukturisasi utang (PKPU) untuk menghindari kepailitan dan memulihkan kesehatan finansial korporasi.",
      image: "/court_building.png",
      href: "#",
    },
  ];

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

  const galleryImages = [
    { src: "/court_building.png", title: "Gedung Mahkamah Agung RI", span: "md:col-span-2 md:row-span-1" },
    { src: "/gavel_book.png", title: "Kajian Berkas Perkara", span: "md:col-span-1 md:row-span-1" },
    { src: "/lawyer_meeting.png", title: "Negosiasi Bisnis Klien", span: "md:col-span-1 md:row-span-2" },
    { src: "/luxury_law_office_bg.png", title: "Ruang Rapat Utama SCBD", span: "md:col-span-2 md:row-span-1" },
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden border-t border-[#1a1a1f]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION 1: NEWS GRID */}
        <div id="publications-news" className="mb-24">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center md:text-left max-w-3xl mb-12 space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Publikasi Utama</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Kabar Hukum & Opini Publik
            </h2>
            <div className="w-12 h-1 bg-gold rounded-full my-3" />
            <p className="text-gray-400 text-sm">
              Analisis hukum dan berita terkini mengenai regulasi Indonesia yang berdampak langsung pada kelangsungan bisnis dan hak perdata Anda.
            </p>
          </motion.div>

          {/* News Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
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
                    <a
                      href={item.href}
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-gold tracking-wide uppercase hover:text-gold-accent transition-colors"
                    >
                      <span>Baca Artikel</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* SECTION 2: JOURNALS LIST */}
        <div id="publications-journals" className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Jurnal Akademik</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              Jurnal Ilmiah & Riset Hukum
            </h3>
            <div className="w-12 h-1 bg-gold rounded-full my-3" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Tim kami aktif berkontribusi dalam perdebatan akademis hukum perdata dan bisnis. Unduh draft riset hukum kami secara cuma-cuma sebagai referensi Anda.
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

        {/* SECTION 3: MASONRY GALLERY */}
        <div id="gallery">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
              <ImageIcon className="w-4 h-4" />
              <span>Dokumentasi Kegiatan</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Galeri & Aktivitas Sidang
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full" />
            <p className="text-gray-400 text-sm">
              Potret aktivitas penanganan perkara, konsultasi komersial klien, serta kehadiran kami dalam forum-forum hukum penting di Indonesia.
            </p>
          </motion.div>

          {/* Grid Layout representing Masonry */}
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
                
                {/* Static light black overlay just to read text in group hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-gold font-serif font-semibold text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                    Dokumentasi HAIP
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

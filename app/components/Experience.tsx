"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldAlert, BadgePercent, ChevronLeft, ChevronRight, Quote, Landmark, Scale } from "lucide-react";

export default function Experience() {
  const cases = [
    {
      title: "Sengketa Saham Korporasi",
      category: "Hukum Bisnis / Litigasi Niaga",
      scale: "Rp 2,4 Triliun",
      result: "Menang di Pengadilan Niaga",
      desc: "Mewakili perusahaan induk teknologi dalam mempertahankan kepemilikan saham mayoritas dari gugatan wanprestasi oleh investor asing.",
    },
    {
      title: "Penyelesaian Kasasi Agraria",
      category: "Pertanahan & Tata Usaha Negara",
      scale: "120 Hektar Lahan",
      result: "Memenangkan Hak Sertifikat",
      desc: "Menyelesaikan sengketa kepemilikan lahan kawasan industri di Jawa Barat di tingkat kasasi Mahkamah Agung RI.",
    },
    {
      title: "Arbitrase Sengketa Konstruksi",
      category: "Arbitrase BANI",
      scale: "USD 45 Juta",
      result: "Mediasi Sukses / Damai",
      desc: "Menyelesaikan klaim keterlambatan pembangunan infrastruktur jalan tol nasional antara BUMN Konstruksi dan konsorsium swasta.",
    },
    {
      title: "Restrukturisasi PKPU & Kepailitan",
      category: "Kepailitan / PKPU",
      scale: "Rp 850 Miliar",
      result: "Homologasi Perdamaian",
      desc: "Mewakili emiten tekstil nasional dalam menyusun proposal perdamaian kreditur hingga disetujui secara aklamasi oleh majelis hakim.",
    },
  ];

  const testimonials = [
    {
      quote: "HAIP Law Firm mendampingi aksi akuisisi korporasi kami dengan sangat detail. Analisis risiko hukum mereka tajam dan tuntas. Kami merasa sangat aman selama proses negosiasi bisnis berlangsung.",
      author: "Hendra Wijaya",
      position: "Direktur Utama PT Global Multi Teknologi",
    },
    {
      quote: "Ketika kami menghadapi sengketa merek dagang yang krusial, tim litigasi HAIP bertindak taktis, cepat, dan sangat berwibawa di pengadilan. Hasilnya melebihi ekspektasi kami.",
      author: "Santi Kirana",
      position: "Founder & CEO Aesthetic Care Indonesia",
    },
    {
      quote: "Pendekatan mereka terhadap hukum hubungan industrial sangat solutif. Mereka membantu kami merevisi PKB dan menyelesaikan perselisihan serikat pekerja dengan suasana damai.",
      author: "Ir. Bambang Hartono",
      position: "VP Human Resources PT Karya Sawit Nusantara",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="experience" className="relative py-24 bg-[#08080a] text-white overflow-hidden border-t border-[#1a1a1f]">
      {/* Decorative Gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>Rekam Jejak Kasus</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Pengalaman & Kasus Unggulan
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Representasi hukum tepercaya dengan tingkat keberhasilan tinggi dalam penyelesaian hukum tingkat korporat maupun sengketa perdata strategis.
          </p>
        </div>

        {/* CASE STUDY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {cases.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0d0d10] border border-[#222226] p-8 rounded-lg shadow-xl relative overflow-hidden group hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Gold Ribbon accent */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gold/30 group-hover:bg-gold transition-colors duration-300" />
              
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] text-gold font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">Nilai Sengketa</span>
                    <p className="text-gold font-serif font-bold text-lg">{item.scale}</p>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors duration-300 pt-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222226]/50 flex items-center justify-between text-xs text-gray-500">
                <span>Hasil Akhir:</span>
                <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping mr-1" />
                  {item.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TESTIMONIALS SLIDER SECTION */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0d0d10] to-[#121216] border border-[#222226] p-8 md:p-12 rounded-xl shadow-2xl relative"
          >
            {/* Quote Icon Background Accent */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-gold/5 pointer-events-none" />

            <div className="flex flex-col items-center text-center space-y-6">
              
              {/* Header Title */}
              <div className="flex items-center space-x-2">
                <Quote className="w-6 h-6 text-gold" />
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold">Testimoni Klien</span>
              </div>

              {/* Quote Content with Animating Presence */}
              <div className="min-h-[120px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-base md:text-lg italic leading-relaxed"
                  >
                    "{testimonials[activeIdx].quote}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#222226] w-full max-w-xs">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-white font-serif font-bold text-base">
                      {testimonials[activeIdx].author}
                    </h4>
                    <p className="text-gold text-xs font-medium mt-0.5 uppercase tracking-wider">
                      {testimonials[activeIdx].position}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-6 pt-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#222226] flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black text-white transition-all duration-300 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeIdx === idx ? "bg-gold w-6" : "bg-[#222226] hover:bg-gold/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#222226] flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black text-white transition-all duration-300 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

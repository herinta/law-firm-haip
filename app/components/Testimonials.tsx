"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
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
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden border-t border-[#1a1a1f]">
      {/* Background Radial Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
            <Quote className="w-4 h-4 text-gold" />
            <span>Bukti Kepercayaan</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Apa Kata Klien Kami?
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-3 rounded-full" />
          <p className="text-gray-400 text-sm">
            Kepuasan dan kesuksesan hukum klien kami adalah prioritas utama dan tolok ukur kesuksesan reputasi firma kami.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0d0d10] to-[#121216] border border-[#222226] p-8 md:p-12 rounded-xl shadow-2xl relative"
          >
            {/* Background Quote Icon */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-gold/5 pointer-events-none" />

            <div className="flex flex-col items-center text-center space-y-6">
              
              {/* Quote Content */}
              <div className="min-h-[120px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-base md:text-lg italic leading-relaxed font-sans"
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
                    <p className="text-gold text-xs font-semibold mt-0.5 uppercase tracking-wider">
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

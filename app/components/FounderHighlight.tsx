"use client";

import { motion, Variants } from "framer-motion";
import { Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function FounderHighlight() {
  const statVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden border-t border-[#1a1a1f]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Teaser */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
              <Landmark className="w-3.5 h-3.5" />
              <span>Profil Pendiri</span>
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
              Dipimpin oleh Dedikasi.<br />
              <span className="gold-text-gradient">Dituntun oleh Integritas.</span>
            </h2>
            
            <div className="w-12 h-1 bg-gold rounded-full my-3" />
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Didirikan oleh Nama **, H A I P Law Firm lahir dengan visi untuk menyediakan jasa hukum boutique berstandar internasional, yang mengedepankan akurasi hukum tinggi dan relasi personal yang kuat dengan setiap klien.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Kami percaya penyelesaian sengketa hukum harus dilakukan secara taktis, cepat, dan bermartabat. Kami melayani sengketa litigasi pidana-perdata yang kompleks serta transaksi aksi korporasi berskala nasional dan internasional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-gray-300 text-xs">Advokat Berlisensi PERADI</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-gray-300 text-xs">Solusi Hukum Kustom Korporasi</span>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#222226]">
              <motion.div variants={statVariants} className="text-center md:text-left">
                <div className="text-2xl font-serif font-bold text-white">
                  <span className="gold-text-gradient">98%</span>
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Kasus Selesai</div>
              </motion.div>
              
              <motion.div variants={statVariants} className="text-center md:text-left">
                <div className="text-2xl font-serif font-bold text-white">
                  <span className="gold-text-gradient">15+</span>
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Tahun Praktik</div>
              </motion.div>

              <motion.div variants={statVariants} className="text-center md:text-left">
                <div className="text-2xl font-serif font-bold text-white">
                  <span className="gold-text-gradient">300+</span>
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Klien Korporasi</div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-gold tracking-wide uppercase hover:text-gold-accent transition-colors"
              >
                <span>Selengkapnya Tentang Kami</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-lg pointer-events-none translate-x-2 translate-y-2 z-0" />
            <div className="relative bg-[#0d0d10] border border-[#222226] p-4 rounded-lg shadow-2xl z-10 overflow-hidden group">
              <div className="relative h-[380px] w-full overflow-hidden rounded bg-neutral-900">
                <img
                  src="/founder_portrait.png"
                  alt="Foto founder."
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md border border-[#222226] p-4 rounded shadow-lg">
                  <h3 className="text-white font-serif font-bold text-sm">Nama Founder</h3>
                  <p className="text-gold text-[10px] font-semibold mt-0.5 tracking-wider uppercase">Pendiri & Managing Partner</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

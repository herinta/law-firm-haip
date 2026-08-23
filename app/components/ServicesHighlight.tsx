"use client";

import { motion, Variants } from "framer-motion";
import { Gavel, Briefcase, Copyright, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesHighlight() {
  const highlights = [
    {
      title: "Litigasi Pidana & Perdata",
      description: "Representasi hukum tangguh di semua tingkat peradilan. Kami menangani sengketa bisnis kompleks, pertanahan, serta tindak pidana kerah putih.",
      icon: Gavel,
      href: "/layanan#litigasi",
    },
    {
      title: "Hukum Bisnis & Korporasi",
      description: "Pendampingan aksi korporasi strategis, investasi, restrukturisasi, kontrak komersial, serta kepatuhan hukum bisnis nasional dan global.",
      icon: Briefcase,
      href: "/layanan#korporasi",
    },
    {
      title: "Hak Kekayaan Intelektual",
      description: "Perlindungan komprehensif atas portofolio kekayaan intelektual korporasi Anda, meliputi pendaftaran merek, hak cipta, dan paten.",
      icon: Copyright,
      href: "/layanan#hki",
    },
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } },
  };

  return (
    <section className="relative py-24 bg-[#08080a] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold">
            Spesialisasi Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Layanan Hukum Unggulan
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-3 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Menghadirkan advokasi hukum khusus tingkat tinggi dengan standar akurasi tinggi di bidang perdata, pidana, dan bisnis korporasi.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                className="bg-[#0d0d10] border border-[#222226] hover:border-gold/50 p-8 rounded-lg shadow-xl relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-gold/5 to-gold-accent/5 opacity-0 group-hover:opacity-100 rounded-lg blur transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="text-gold mb-6 inline-flex p-3 bg-white/5 rounded-lg group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-[#222226]/50 flex items-center justify-between text-xs font-semibold text-gold tracking-wide uppercase">
                  <Link href={item.href} className="inline-flex items-center space-x-2 hover:text-gold-accent transition-colors cursor-pointer">
                    <span>Detail Layanan</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/layanan"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded bg-white/5 border border-[#222226] hover:border-gold hover:bg-gold hover:text-black text-gold font-bold text-sm tracking-wide transition-all duration-300 shadow-lg"
          >
            <span>Buka Seluruh Layanan Hukum</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

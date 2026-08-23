"use client";

import { motion, Variants } from "framer-motion";
import { Gavel, Briefcase, Copyright, Users, HeartHandshake, Home, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "litigasi",
      title: "Litigasi Pidana & Perdata",
      description:
        "Advokasi dan representasi hukum terdepan di tingkat pengadilan negeri hingga Mahkamah Agung. Kami menangani sengketa bisnis kompleks, sengketa pertanahan, tindak pidana kerah putih, serta sengketa perdata umum.",
      icon: Gavel,
      gridClass: "md:col-span-2 md:row-span-2",
      iconClass: "w-12 h-12",
      isFeatured: true,
    },
    {
      id: "korporasi",
      title: "Hukum Bisnis & Korporasi",
      description:
        "Pendampingan transaksi bisnis, merger & akuisisi, kepatuhan regulasi, perancangan kontrak komersial, serta restrukturisasi korporasi untuk melindungi ekspansi usaha Anda.",
      icon: Briefcase,
      gridClass: "md:col-span-2",
      iconClass: "w-10 h-10",
      isFeatured: false,
    },
    {
      id: "hki",
      title: "Hak Kekayaan Intelektual",
      description:
        "Perlindungan aset tak berwujud meliputi pendaftaran dan litigasi hak merek, hak cipta, desain industri, paten, serta rahasia dagang.",
      icon: Copyright,
      gridClass: "md:col-span-1",
      iconClass: "w-8 h-8",
      isFeatured: false,
    },
    {
      id: "industrial",
      title: "Hubungan Industrial",
      description:
        "Resolusi sengketa ketenagakerjaan, pembuatan Peraturan Perusahaan (PP), penyusunan kontrak kerja, serta pendampingan mediasi PHK di PHI.",
      icon: Users,
      gridClass: "md:col-span-1",
      iconClass: "w-8 h-8",
      isFeatured: false,
    },
    {
      id: "arbitrase",
      title: "Arbitrase & ADR",
      description:
        "Penyelesaian sengketa alternatif di luar pengadilan melalui mediasi, negosiasi, konsiliasi, serta representasi formal di lembaga BANI.",
      icon: HeartHandshake,
      gridClass: "md:col-span-2",
      iconClass: "w-10 h-10",
      isFeatured: false,
    },
    {
      id: "properti",
      title: "Pertanahan & Properti",
      description:
        "Audit legalitas kepemilikan tanah, pendampingan transaksi real estate, penyusunan kontrak sewa komersial, serta penanganan kasus tumpang tindih sertifikat.",
      icon: Home,
      gridClass: "md:col-span-1",
      iconClass: "w-8 h-8",
      isFeatured: false,
    },
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="relative py-24 bg-[#08080a] overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold">
            Spesialisasi Praktik Hukum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Layanan Hukum Komprehensif
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Menghadirkan layanan advokasi hukum dengan standar akurasi tinggi dan dedikasi penuh di berbagai lini keahlian hukum perdata, pidana, dan bisnis.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`${service.gridClass} bg-[#0d0d10] border border-[#222226] hover:border-gold/60 p-8 rounded-lg shadow-2xl relative overflow-hidden transition-all duration-300 group flex flex-col justify-between`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-gold/10 to-gold-accent/10 opacity-0 group-hover:opacity-100 rounded-lg blur transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-gold mb-6 inline-flex p-3 bg-white/5 rounded-lg group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon className={`${service.iconClass} transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {/* Content */}
                  <h3 className={`font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 ${service.isFeatured ? "text-2xl" : "text-xl"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-400 font-sans leading-relaxed text-sm ${service.isFeatured ? "text-gray-300 md:text-base" : "text-gray-400"}`}>
                    {service.description}
                  </p>
                </div>

                {/* Footer Link Inside Card */}
                <div className="relative z-10 mt-8 pt-4 border-t border-[#222226]/50 flex items-center justify-between text-xs font-semibold text-gold tracking-wide uppercase opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Client Focus Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#0d0d10] via-gold/5 to-[#0d0d10] border border-[#222226] p-8 rounded-lg text-center md:flex md:items-center md:justify-between md:text-left gap-6 shadow-2xl"
        >
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-2">Memerlukan Solusi Hukum Spesifik?</h4>
            <p className="text-gray-400 text-sm">Diskusikan tantangan hukum atau kebutuhan kepatuhan regulasi korporasi Anda dengan advokat senior kami.</p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20HAIP%20Law%20Firm,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20hukum%20spesifik."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 px-6 py-3 rounded bg-gold hover:bg-gold/90 text-black font-bold text-sm tracking-wide transition-all duration-300 flex-shrink-0"
          >
            <span>Hubungi Kami</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

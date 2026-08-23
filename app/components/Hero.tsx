"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown, Scale, PhoneCall } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105"
        style={{ backgroundImage: `url('/court-bg.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/50 z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-10" />

      {/* Decorative Gold Light Ring */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Main Text & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="lg:col-span-8 flex flex-col space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 px-4 py-1.5 rounded-full w-fit mx-auto md:mx-0 shadow-lg shadow-gold/5"
          >
            <Scale className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold">
              Boutique Law Firm Terkemuka di Jakarta
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight leading-tight"
          >
            Integritas Hukum. <br />
            <span className="gold-text-gradient">Otoritas dalam Tindakan.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed font-sans"
          >
            H A I P Law Firm berkomitmen menghadirkan solusi hukum tingkat tinggi yang tak tertandingi secara strategis, taktis, dan terpercaya. Kami berdedikasi melayani sengketa litigasi kompleks serta transaksi korporasi berskala nasional maupun internasional.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
          >
            <a
              href="https://wa.me/6281234567890?text=Halo%20HAIP%20Law%20Firm,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20hukum%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-md bg-gold hover:bg-gold/90 text-black font-bold tracking-wide transition-all duration-300 shadow-xl shadow-gold/15 group"
            >
              <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Konsultasi Sekarang</span>
            </a>
            
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-md border border-white hover:bg-white/10 text-white font-semibold tracking-wide transition-all duration-300"
            >
              Pelajari Layanan Kami
            </a>
          </motion.div>
        </motion.div>

        {/* Feature Highlights on Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:grid lg:col-span-4 grid-cols-1 gap-6"
        >
          <div className="bg-[#0e0e10]/80 backdrop-blur-md border border-[#222226] p-6 rounded-lg shadow-2xl relative overflow-hidden group hover:border-gold/50 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-1.5 h-full bg-gold" />
            <h3 className="text-gold font-serif font-bold text-lg mb-2">Solusi Taktis</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Penyelesaian sengketa bisnis secara pragmatis dengan pendekatan hukum yang komprehensif.</p>
          </div>

          <div className="bg-[#0e0e10]/80 backdrop-blur-md border border-[#222226] p-6 rounded-lg shadow-2xl relative overflow-hidden group hover:border-gold/50 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-1.5 h-full bg-gold" />
            <h3 className="text-gold font-serif font-bold text-lg mb-2">Advokat Ahli</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Tim pengacara profesional yang berlisensi resmi dan berpengalaman bertahun-tahun di pengadilan.</p>
          </div>

          <div className="bg-[#0e0e10]/80 backdrop-blur-md border border-[#222226] p-6 rounded-lg shadow-2xl relative overflow-hidden group hover:border-gold/50 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-1.5 h-full bg-gold" />
            <h3 className="text-gold font-serif font-bold text-lg mb-2">Fokus Hasil</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Berorientasi penuh pada kesuksesan hukum dan perlindungan terbaik bagi reputasi Anda.</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">Gulir ke bawah</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => {
            const el = document.getElementById("services");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown className="w-5 h-5 text-gold hover:text-gold/80 transition-colors duration-200" />
        </motion.div>
      </div>
    </section>
  );
}

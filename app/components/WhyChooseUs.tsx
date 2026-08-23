"use client";

import { motion, Variants } from "framer-motion";
import { Scale, Landmark, Award, ShieldAlert } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Kemitraan Berbasis Hasil",
      description: "Kami fokus penuh pada kesuksesan komersial dan pencapaian hukum klien kami, memadukan hukum acara yang ketat dengan taktik penyelesaian taktis.",
      icon: Award,
    },
    {
      title: "Reputasi & Kepercayaan",
      description: "Dengan rekam jejak penyelesaian sengketa berskala nasional dan internasional, kami dipercaya oleh berbagai korporasi terkemuka di Indonesia.",
      icon: Scale,
    },
    {
      title: "Lokasi Strategis SCBD",
      description: "Berlokasi di pusat keuangan Jakarta (Treasury Tower, SCBD), memudahkan kami melayani kebutuhan konsultasi korporat secara cepat dan efisien.",
      icon: Landmark,
    },
    {
      title: "Standar Etika Tertinggi",
      description: "Kami menjunjung tinggi kode etik advokat dan komitmen transparansi tanpa kompromi untuk memastikan kenyamanan dan integritas hukum bagi klien.",
      icon: ShieldAlert,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-[#16161a]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold">
            Nilai Utama Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Mengapa Memilih H A I P Law Firm?
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-3 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Menyatukan keahlian akademis mendalam dan taktis ruang sidang praktis untuk memberikan jaminan keamanan hukum terbaik bagi Anda.
          </p>
        </div>

        {/* Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#0d0d10] border border-[#222226] p-6 rounded-lg shadow-xl relative overflow-hidden transition-all duration-300 hover:border-gold/45 flex flex-col justify-between"
              >
                {/* Thin gold top bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                
                <div className="space-y-4">
                  <div className="text-gold p-3 bg-white/5 rounded w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

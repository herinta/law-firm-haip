"use client";

import { motion } from "framer-motion";
import { Scale, CheckCircle2, Award, Calendar, Landmark } from "lucide-react";
import Image from "next/image";

export default function About() {
  const partners = [
    {
      name: "Agung Dewantoro, S.H., M.H.",
      role: "Co-Founder & Senior Partner",
      specialty: "Hukum Korporasi & Transaksi Keuangan",
      educations: ["Universitas Indonesia (S1, S2)", "Anggota PERADI"],
      image: "/partner_agung.png",
    },
    {
      name: "Indra Kusuma, S.H., LL.M.",
      role: "Co-Founder & Senior Partner",
      specialty: "Litigasi Pidana & Hukum Ketenagakerjaan",
      educations: ["Universitas Gadjah Mada (S1)", "Leiden University (LL.M.)"],
      image: "/partner_indra.png",
    },
    {
      name: "Patricia Siahaan, S.H., M.Kn.",
      role: "Partner",
      specialty: "Hukum Properti, Agraria, & Kenotariatan",
      educations: ["Universitas Padjadjaran (S1, S2)"],
      image: "/partner_patricia.png",
    },
  ];

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-[#050505] text-white overflow-hidden border-t border-[#1a1a1f]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION 1: SPLIT SCREEN FOUNDER PROFILE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Side: Copywriting */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
              <Landmark className="w-3.5 h-3.5" />
              <span>Profil Founder & Firma</span>
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
              Dipimpin oleh Dedikasi.<br />
              <span className="gold-text-gradient">Dituntun oleh Integritas.</span>
            </h2>
            
            <div className="w-12 h-1 bg-gold rounded-full my-4" />
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Didirikan oleh Nama, H A I P Law Firm lahir dengan visi untuk menyediakan jasa hukum boutique dengan kualitas setara firma global namun dengan perhatian yang dipersonalisasi khusus bagi setiap klien.
            </p>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Kami percaya bahwa setiap kasus hukum memiliki keunikan tersendiri. Tim kami mengkombinasikan kecerdasan hukum, taktik ruang sidang yang tangguh, serta komitmen etika profesi yang kokoh untuk memformulasikan solusi terbaik bagi sengketa perdata, pidana, maupun aksi korporasi strategis.
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Fokus Solusi Klien</h4>
                  <p className="text-gray-400 text-xs mt-1">Kami mengutamakan kesuksesan komersial dan hukum klien kami di atas segalanya.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Standar Etika Tertinggi</h4>
                  <p className="text-gray-400 text-xs mt-1">Kepatuhan ketat terhadap hukum acara dan kode etik advokat Indonesia.</p>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#222226]">
              <motion.div variants={statVariants} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center justify-center md:justify-start">
                  <span className="gold-text-gradient">98%</span>
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Kasus Selesai</div>
              </motion.div>
              
              <motion.div variants={statVariants} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center justify-center md:justify-start">
                  <span className="gold-text-gradient">15+</span>
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Tahun Pengalaman</div>
              </motion.div>

              <motion.div variants={statVariants} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center justify-center md:justify-start">
                  <span className="gold-text-gradient">300+</span>
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Klien Korporasi</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Founder Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Gold Frame Border Background Accent */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-lg pointer-events-none translate-x-2 translate-y-2 z-0" />
            
            <div className="relative bg-[#0d0d10] border border-[#222226] p-4 rounded-lg shadow-2xl z-10 overflow-hidden group">
              <div className="relative h-[450px] w-full overflow-hidden rounded-md bg-neutral-900">
              
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Float Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md border border-[#222226] p-4 rounded shadow-2xl">
                  <h3 className="text-white font-serif font-bold text-base">Nama.</h3>
                  <p className="text-gold text-xs font-semibold tracking-wider mt-0.5">Pendiri & Managing Partner</p>
                  <p className="text-gray-400 text-[10px] mt-1 italic">"Keadilan tidak melulu tentang memenangkan pertarungan, melainkan menegakkan kehormatan hukum."</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* SECTION 2: THE TEAM GRID */}
        <div id="about-team" className="space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold">Tim Hukum Kami</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">Partner & Rekan Advokat</h3>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Firma kami didukung oleh pengacara terlisensi PERADI dan konsultan hukum berdedikasi tinggi yang ahli di bidang hukum acara, ketenagakerjaan, serta agraria.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0d0d10] border border-[#222226] hover:border-gold/50 rounded-lg shadow-xl relative overflow-hidden transition-all duration-300 group flex flex-col justify-between animate-fadeIn"
              >
                {/* Partner Image Header */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-900 border-b border-[#222226]">
                  <img
                    src={partner.image}
                   
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Small gold line */}
                    <div className="w-8 h-1 bg-gold mb-4 group-hover:w-16 transition-all duration-300" />
                    
                    <h4 className="text-white font-serif font-bold text-lg group-hover:text-gold transition-colors duration-300">
                      {partner.name}
                    </h4>
                    <p className="text-gold text-xs font-semibold mt-1 tracking-wider uppercase">
                      {partner.role}
                    </p>
                    <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                      Spesialisasi: <span className="text-gray-300">{partner.specialty}</span>
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#222226]/50">
                    <div className="text-[11px] text-gray-500">
                      {partner.educations.map((edu, eIdx) => (
                        <div key={eIdx} className="flex items-center space-x-1">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          <span>{edu}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

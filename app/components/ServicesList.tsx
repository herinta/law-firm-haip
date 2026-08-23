"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Gavel, Briefcase, Copyright, Users, HeartHandshake, Home, Scale, Landmark, ShieldAlert, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ServicesList() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const services = [
    {
      title: "Litigasi Perdata & Wanprestasi Kontrak",
      icon: Scale,
      desc: "Penanganan gugatan wanprestasi, perbuatan melawan hukum (PMH), sengketa kepemilikan aset, eksekusi jaminan, serta klaim ganti rugi perdata umum di seluruh Pengadilan Negeri di Indonesia.",
    },
    {
      title: "Litigasi Pidana & Tindak Pidana Korupsi (Tipikor)",
      icon: Gavel,
      desc: "Pendampingan hukum komprehensif pada tingkat penyelidikan di Kepolisian/Kejaksaan, pembelaan terdakwa di pengadilan negeri, hingga pemeriksaan kasasi atas perkara pidana umum dan pidana khusus Tipikor.",
    },
    {
      title: "Hukum Korporasi, Merger & Akuisisi (M&A)",
      icon: Briefcase,
      desc: "Audit kepatuhan hukum perusahaan (legal due diligence), restrukturisasi kepemilikan saham, penyiapan dokumen RUPS, merger, akuisisi, joint venture, serta perizinan investasi asing (PMA).",
    },
    {
      title: "Penyelesaian Sengketa Alternatif & Arbitrase (ADR)",
      icon: HeartHandshake,
      desc: "Penyusunan klausul arbitrase taktis, negosiasi komersial pra-perkara, mediasi perselisihan bisnis, serta representasi formal di forum arbitrase BANI maupun lembaga arbitrase internasional.",
    },
    {
      title: "Hukum Ketenagakerjaan & Kepatuhan Hubungan Industrial",
      icon: Users,
      desc: "Pembuatan Peraturan Perusahaan (PP), negosiasi Perjanjian Kerja Bersama (PKB), audit kepatuhan kontrak kerja (PKWT/PKWTT), serta penyelesaian perselisihan PHK melalui mediasi tripartit hingga Pengadilan PHI.",
    },
    {
      title: "Hak Kekayaan Intelektual (HKI)",
      icon: Copyright,
      desc: "Pendaftaran merek dagang, paten inovasi, hak cipta karya, dan desain industri ke DJKI. Pendampingan hukum mencakup somasi serta gugatan pembatalan merek di Pengadilan Niaga.",
    },
    {
      title: "Pertanahan, Agraria & Properti Komersial",
      icon: Home,
      desc: "Audit legalitas sertifikat tanah, pengurusan perizinan hak guna usaha (HGU) dan hak guna bangunan (HGB), penyusunan draf kontrak sewa properti komersial, serta penyelesaian sengketa tumpang tindih lahan.",
    },
    {
      title: "Hukum Kepailitan, Kepailitan & PKPU",
      icon: Landmark,
      desc: "Pendampingan debitur atau perwakilan kreditur dalam penundaan kewajiban pembayaran utang (PKPU) di Pengadilan Niaga, perumusan proposal perdamaian (homologasi), hingga penanganan likuidasi kepailitan.",
    },
    {
      title: "Keuangan, Perbankan & Pasar Modal",
      icon: Scale,
      desc: "Penyusunan draf perjanjian kredit sindikasi, audit kepatuhan regulasi Otoritas Jasa Keuangan (OJK), penyiapan berkas emisi saham publik (IPO), serta legal opini kepatuhan pasar modal.",
    },
    {
      title: "Hukum Pajak Korporasi & Litigasi Pajak",
      icon: ShieldAlert,
      desc: "Pendampingan pemeriksaan laporan pajak badan, konsultasi restrukturisasi skema pajak transaksi komersial, pengajuan keberatan pajak, serta representasi hukum banding di Pengadilan Pajak.",
    },
  ];

  const toggleExpand = (idx: number) => {
    if (expandedIdx === idx) {
      setExpandedIdx(null);
    } else {
      setExpandedIdx(idx);
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const listVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 bg-[#08080a] overflow-hidden border-t border-[#16161a]">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Sticky) */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-4 lg:sticky lg:top-32 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold">
              Spesialisasi Hukum Kami
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
              Keahlian Hukum & <br />
              <span className="gold-text-gradient">Praktik Advokasi</span>
            </h2>
            
            <div className="w-12 h-1 bg-gold rounded-full" />
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Kami memadukan pemahaman mendalam tentang lanskap regulasi Indonesia dengan taktik ruang sidang yang strategis untuk memberikan jaminan perlindungan hukum terbaik bagi Anda dan perusahaan Anda.
            </p>

            <div className="pt-4">
              <Link
                href="/layanan"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded bg-gold hover:bg-gold/90 text-black font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-gold/5 cursor-pointer"
              >
                <span>Pelajari Detail Layanan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column (Accordion List) */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="lg:col-span-8 space-y-4"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isExpanded = expandedIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border-b border-[#222226] pb-4 transition-all duration-300 ${
                    isExpanded ? "border-gold/30" : "hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex items-center justify-between w-full text-left py-3 cursor-pointer group focus:outline-none"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded transition-colors duration-300 ${
                        isExpanded ? "text-gold bg-gold/10" : "text-gray-500 group-hover:text-gold"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-serif text-base sm:text-lg font-semibold transition-colors duration-300 ${
                        isExpanded ? "text-gold" : "text-white group-hover:text-gold"
                      }`}>
                        {service.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-500 group-hover:text-gold transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-gold" : ""
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 text-sm leading-relaxed pl-11 pr-4 pb-2 pt-1 font-sans">
                          {service.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

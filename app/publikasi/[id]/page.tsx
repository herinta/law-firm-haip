"use client";

import { use } from "react";
import { getArticleById } from "../../data/news";
import { Calendar, User, ArrowLeft, PhoneCall, Scale } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await parameter menggunakan React's 'use' hook untuk Client Component
  const { id } = use(params);
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/publikasi"
            className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-gold transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Kembali ke Publikasi</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-8"
        >
          {/* Category Badge */}
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-gold bg-gold/10 border border-gold/25 px-3 py-1 rounded">
            Publikasi Hukum
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-white">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pt-2 border-b border-[#222226] pb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gold" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gold" />
              <span>Oleh: {article.author}</span>
            </div>
          </div>
        </motion.div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-64 sm:h-96 w-full rounded-lg overflow-hidden border border-[#222226] mb-12 shadow-2xl"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        {/* Article Body Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed font-sans text-base md:text-lg"
        >
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-[#222226] my-16" />

        {/* Consult CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0d0d10] to-[#121216] border border-[#222226] p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gold">
              <Scale className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider font-bold font-sans">Konsultasi Advokat</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white">
              Menghadapi Permasalahan Hukum Serupa?
            </h3>
            <p className="text-gray-400 text-sm max-w-xl">
              Hubungi partner kami untuk mendapatkan konsultasi hukum yang dipersonalisasi khusus untuk melindungi kepentingan bisnis atau perdata Anda.
            </p>
          </div>
          
          <a
            href={`https://wa.me/6281234567890?text=Halo%20HAIP%20Law%20Firm,%20saya%20ingin%20berkonsultasi%20mengenai%20topik%20${encodeURIComponent(article.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3.5 rounded bg-gold hover:bg-gold/90 text-black font-bold text-sm tracking-wide transition-all duration-300 flex-shrink-0 shadow-lg shadow-gold/10"
          >
            <PhoneCall className="w-4.5 h-4.5" />
            <span>Konsultasi WA</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

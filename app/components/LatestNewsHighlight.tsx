"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { newsArticles } from "../data/news";

export default function LatestNewsHighlight() {
  // Ambil maksimal 3 berita terbaru
  const latestNews = newsArticles.slice(0, 3);

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 bg-[#08080a] text-white overflow-hidden border-t border-[#16161a]">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span>Kabar Terbaru</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Publikasi & Opini Hukum
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-3 rounded-full" />
          <p className="text-gray-400 text-sm">
            Artikel hukum dan berita terhangat mengenai hukum komersial, ketenagakerjaan, dan perlindungan aset di Indonesia.
          </p>
        </motion.div>

        {/* News Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {latestNews.map((item, idx) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0d0d10] border border-[#222226] hover:border-gold/50 rounded-lg overflow-hidden transition-all duration-300 group shadow-2xl flex flex-col h-full"
            >
              {/* Image Wrap */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] to-transparent opacity-60" />
              </div>
              
              {/* Article Info */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-500 space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-white group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-[#222226]/50">
                  <Link
                    href={`/publikasi/${item.id}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gold tracking-wide uppercase hover:text-gold-accent transition-colors cursor-pointer"
                  >
                    <span>Baca Lengkap</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/publikasi"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded bg-white/5 border border-[#222226] hover:border-gold hover:bg-gold hover:text-black text-gold font-bold text-sm tracking-wide transition-all duration-300 shadow-lg"
          >
            <span>Semua Publikasi & Jurnal</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

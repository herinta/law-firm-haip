"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function TrustedClients() {
  const clients = [
    { name: "PT Nusantara Global Tbk" },
    { name: "Bank Reksa Mandiri" },
    { name: "Bumi Energi Corp" },
    { name: "Indoland Realty Utama" },
    { name: "Mahakarya Tekno Group" },
  ];

  return (
    <section className="bg-[#08080a] py-12 border-b border-[#222226]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        
        {/* Caption */}
        <div className="flex items-center space-x-2 flex-shrink-0 text-gray-500 hover:text-gold transition-colors duration-300">
          <Handshake className="w-4 h-4 text-gold/60" />
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold">
            Dipercaya Oleh Mitra Industri:
          </span>
        </div>

        {/* Logos Flex Row */}
        <div className="w-full flex flex-wrap items-center justify-center md:justify-end gap-x-12 gap-y-6">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-gray-600 hover:text-white font-serif font-bold text-sm md:text-base tracking-widest uppercase cursor-default transition-colors duration-300 relative group"
            >
              <span>{client.name}</span>
              {/* Subtle gold line hover under name */}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, PhoneCall } from "lucide-react";
import { useState } from "react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Route Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-bold">Hubungi Advokat Kami</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">Kontak</h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">Kantor Pusat Jakarta</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kami siap memberikan respons cepat atas kebutuhan konsultasi dan sengketa hukum Anda. Kunjungi kantor kami di kawasan finansial SCBD atau hubungi kami secara digital.
              </p>
            </div>

            {/* Contacts Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-[#0d0d10] border border-[#222226] rounded-lg">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Alamat Kantor</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Treasury Tower, Lantai 45, SCBD Lot 28, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, 12190
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#0d0d10] border border-[#222226] rounded-lg">
                <Phone className="w-6 h-6 text-gold flex-shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Telepon Kantor</h4>
                  <p className="text-gray-400 text-xs mt-0.5">+62 (21) 5088-2999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#0d0d10] border border-[#222226] rounded-lg">
                <Mail className="w-6 h-6 text-gold flex-shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">E-mail Resmi</h4>
                  <p className="text-gray-400 text-xs mt-0.5">contact@haiplaw.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[#222226] bg-neutral-900 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273062635956!2d106.8066597758682!3d-6.227685460987483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f145be8f5727%3A0xe543e0a544bbfb16!2sTreasury%20Tower!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Contact Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0d0d10] border border-[#222226] p-8 rounded-xl shadow-2xl space-y-6"
          >
            <div className="space-y-2 border-b border-[#222226] pb-4">
              <h3 className="text-xl font-serif font-bold text-white">Formulir Hubungi Kami</h3>
              <p className="text-gray-400 text-xs">Isi formulir di bawah ini untuk mengirimkan detail kasus atau permintaan pertemuan dengan partner kami.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-[#222226] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-gray-400 font-semibold uppercase tracking-wider">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border border-[#222226] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Subjek / Topik Masalah</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black/50 border border-[#222226] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Contoh: Sengketa Merek Dagang / Konsultasi Akuisisi"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Pesan / Penjelasan Kasus Singkat</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/50 border border-[#222226] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Jelaskan kebutuhan hukum atau ringkasan permasalahan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded bg-gold hover:bg-gold/90 text-black font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-gold/5 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-emerald-400 font-semibold mt-2"
                >
                  Pesan Anda telah dikirim. Kami akan membalas via e-mail dalam waktu 24 jam.
                </motion.div>
              )}
            </form>

            <div className="pt-6 border-t border-[#222226] text-center">
              <span className="text-xs text-gray-500">Pilihan Respons Cepat:</span>
              <div className="mt-3">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20HAIP%20Law%20Firm,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20hukum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-gold hover:bg-gold hover:text-black text-gold text-xs font-semibold tracking-wide uppercase transition-all duration-300 shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>

          </motion.div>
          
        </div>

      </div>
    </div>
  );
}

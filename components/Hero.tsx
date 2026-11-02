
'use client';

import React from 'react';
import { Language } from '../types';
import { SPA_INFO, getWhatsAppUrl } from '../data/spaData';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 700], [1, 1.25]);
  const contentOpacity = useTransform(scrollY, [0, 520], [1, 0.1]);

  return (
    <section className="relative min-h-[140vh] flex flex-col justify-start items-center overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: scrollY }}
          className="absolute top-0 left-0 w-full h-screen will-change-transform"
        >
          <motion.img
            src="/spa1.jpg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/spa1.jpg';
            }}
            alt="Lastri Spa Sanctuary Ambience"
            style={{ scale: backgroundScale }}
            className="w-full h-full object-cover will-change-transform"
          />

          {/* Overlay hitam transparan tanpa warna hijau */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/35" />
        </motion.div>

        {/* Transisi halus ke background putih */}
        <div className="absolute inset-x-0 bottom-0 h-56 sm:h-80 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none z-10" />
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-screen flex flex-col justify-center items-center space-y-8 pt-20 pb-12 will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-white/20 backdrop-blur-md px-4.5 py-1.5 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium shadow-md tracking-wide"
        >
          <span>{SPA_INFO.tagline[lang]}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tight leading-[1.15] drop-shadow-md"
        >
          {SPA_INFO.headline[lang]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-white font-normal leading-relaxed drop-shadow"
        >
          {SPA_INFO.subtagline[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#9CAF88] hover:bg-[#8A9E78] text-white text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2.5 min-h-[44px] group"
          >
            <MessageSquare className="w-4.5 h-4.5 text-white fill-white flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
          </a>

          <a
            href="#treatments"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-medium tracking-wide shadow-sm hover:shadow-lg hover:border-white/50 transition-all duration-300 flex items-center justify-center space-x-2.5 min-h-[44px] group"
          >
            <span>{lang === 'en' ? "Discover Treatments" : "Lihat Menu Perawatan"}</span>
            <ArrowDown className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-y-1 transition-all" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

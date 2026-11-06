'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Language } from '../types';
import { SPA_INFO, getWhatsAppUrl } from '../data/spaData';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 700], [1, 1.25]);
  const contentOpacity = useTransform(scrollY, [0, 520], [1, 0.1]);

  return (
    <section className="relative min-h-screen md:min-h-[140vh] flex flex-col justify-start items-center overflow-hidden bg-[#1D1914]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: isMobile ? 0 : scrollY, scale: isMobile ? 1 : backgroundScale }}
          className="absolute top-0 left-0 w-full h-full md:h-screen will-change-transform"
        >
          <Image
            src="/spa1.jpg"
            alt="Layanan Spa dan Pijat Panggilan Lastri Spa Banyuwangi"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover will-change-transform"
          />

          {/* Deep warm luxury overlay - no pale haze */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1D1914]/80 via-[#302310]/60 to-[#1D1914]/85" />
        </motion.div>

        {/* Seamless transition into Warm Ivory section */}
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-80 bg-gradient-to-b from-transparent via-[#F8F5EE]/65 to-[#F8F5EE] pointer-events-none z-10" />
      </div>

      <motion.div
        style={{ opacity: isMobile ? 1 : contentOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-screen flex flex-col justify-center items-center space-y-7 sm:space-y-8 pt-24 pb-16 will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-[#F8F5EE]/15 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#C7AF90]/50 text-[#F8F5EE] text-xs sm:text-sm md:text-base font-semibold shadow-lg tracking-wider uppercase"
        >
          <span>{SPA_INFO.tagline[lang]}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F8F5EE] font-semibold tracking-tight leading-[1.18] drop-shadow-lg"
        >
          {SPA_INFO.headline[lang]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-base md:text-lg text-[#F8F5EE] font-medium leading-[1.75] drop-shadow-md"
        >
          {SPA_INFO.subtagline[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#364A31] hover:bg-[#263A25] text-[#FFFFFF] text-sm sm:text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2.5 min-h-[48px] group cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 sm:w-4.5 sm:h-4.5 text-white fill-white flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
          </a>

          <a
            href="#treatments"
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-[#C7AF90]/70 bg-[#F0E7D8]/20 hover:bg-[#F0E7D8]/35 backdrop-blur-md text-[#F8F5EE] text-sm sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-lg hover:border-[#C7AF90] transition-all duration-300 flex items-center justify-center space-x-2.5 min-h-[48px] group cursor-pointer"
          >
            <span>{lang === 'en' ? "Discover Treatments" : "Lihat Menu Perawatan"}</span>
            <ArrowDown className="w-5 h-5 text-[#F8F5EE]/90 group-hover:text-white group-hover:translate-y-1 transition-all" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

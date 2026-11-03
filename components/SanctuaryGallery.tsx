'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Language, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/spaData';
import { Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SanctuaryGalleryProps {
  lang: Language;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const SanctuaryGallery: React.FC<SanctuaryGalleryProps> = ({
  lang,
  onOpenLightbox,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: lang === 'en' ? 'All Visuals' : 'Semua' },
    { id: 'equipment', label: lang === 'en' ? 'Equipment Setup' : 'Setup Peralatan' },
    { id: 'botanicals', label: lang === 'en' ? 'Oils & Botanicals' : 'Minyak & Rempah' },
    { id: 'session', label: lang === 'en' ? 'Care Sessions' : 'Sesi Perawatan' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F8F5EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#364A31] bg-[#F0E7D8] px-3.5 py-1.5 rounded-full border border-[#C7AF90]/50 inline-block">
            {lang === 'en' ? "Visual Journey" : "Galeri Visual"}
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl text-[#302310] font-semibold tracking-tight">
            {lang === 'en' ? "Lastri Spa Gallery" : "Galeri Lastri Spa"}
          </h2>
          <p className="text-sm sm:text-base text-[#534D2B] font-medium leading-[1.7]">
            {lang === 'en'
              ? "Explore our sterile equipment setups, pure organic ingredients, and comfortable care sessions."
              : "Lihat kesiapan perlengkapan steril, racikan bahan alami murni, dan kenyamanan sesi perawatan."}
          </p>
        </div>

        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2.5 pb-2 -mt-4 sm:-mt-6">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[44px] cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#364A31] text-[#FFFFFF] shadow-md'
                  : 'bg-[#F0E7D8] text-[#534D2B] hover:text-[#302310] hover:bg-[#E6E2D3] border border-[#C7AF90]/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-4/3 sm:aspect-square bg-[#E6E2D3] shadow-[0_4px_16px_rgba(48,35,16,0.06)] border border-[#C7AF90]/50 hover:border-[#364A31]/50 transition-all duration-300"
              >
                <Image
                  src={item.image || '/spa1.jpg'}
                  alt={item.title[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#302310]/90 via-[#302310]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#364A31] px-2.5 py-1 rounded-full w-max block border border-[#C7AF90]/40 text-[#F8F5EE]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#F8F5EE] leading-snug">
                      {item.title[lang]}
                    </h3>
                    <p className="text-xs text-[#F8F5EE]/90 font-medium line-clamp-2 leading-relaxed">
                      {item.description[lang]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

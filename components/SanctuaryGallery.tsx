'use client';

import React, { useState } from 'react';
import { Language, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/spaData';
import { Maximize2 } from 'lucide-react';
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

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'equipment':
        return lang === 'en' ? 'Equipment Setup' : 'Setup Peralatan';
      case 'botanicals':
        return lang === 'en' ? 'Oils & Botanicals' : 'Minyak & Rempah';
      case 'session':
        return lang === 'en' ? 'Care Sessions' : 'Sesi Perawatan';
      default:
        return cat;
    }
  };

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F7FAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-sans text-3xl sm:text-5xl text-[#1B1B1B] font-semibold tracking-tight">
            {lang === 'en' ? "Lastri Spa Gallery" : "Galeri Lastri Spa"}
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] font-light">
            {lang === 'en'
              ? "Explore our sterile equipment setups, pure organic ingredients, and comfortable care sessions."
              : "Lihat kesiapan perlengkapan steril, racikan bahan alami murni, dan kenyamanan sesi perawatan."}
          </p>
        </div>

        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[44px] ${
                activeFilter === f.id
                  ? 'bg-[#9CAF88] text-white shadow-xs'
                  : 'bg-[#E8EDE3] text-[#6B6B6B] hover:text-[#1B1B1B] border border-[#1B1B1B]/10'
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-4/3 sm:aspect-square bg-[#E8EDE3] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#1B1B1B]/10"
              >
                <img
                  src={item.image || '/spa1.jpg'}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/spa1.jpg';
                  }}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="bg-[#2D6A4F]/90 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs inline-block">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <h4 className="font-serif text-xl font-semibold">
                      {item.title[lang]}
                    </h4>
                    <p className="text-xs text-white/80 line-clamp-2">
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

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Language } from '../types';
import { Treatment, treatmentsData } from '../data/treatments';
import { Clock, Plus, Eye, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TreatmentMenuProps {
  lang: Language;
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatmentDirect: (treatment: Treatment) => void;
}

export const TreatmentMenu: React.FC<TreatmentMenuProps> = ({
  lang,
  onSelectTreatment,
  onBookTreatmentDirect,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const categories: Array<'All' | 'Massage' | 'Face' | 'Body' | 'Special'> = [
    'All',
    'Massage',
    'Face',
    'Body',
    'Special',
  ];

  const filteredTreatments = activeCategory === 'All'
    ? treatmentsData
    : treatmentsData.filter((t) => t.category === activeCategory);

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="treatments" className="py-24 sm:py-32 bg-[#F7FAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-sans text-3xl sm:text-5xl text-[#1B1B1B] font-semibold tracking-tight">
            {lang === 'en' ? "Holistic Treatment Menu" : "Menu Perawatan Spa"}
          </h2>
          <p className="text-sm sm:text-base text-[#3A3A3A] font-normal">
            {lang === 'en'
              ? "Select from our specialized massage, facial, body, and specialty therapies. Click any card to view full details."
              : "Pilih perawatan pijat, facial, lulur tubuh, atau terapi spesial kami. Klik kartu untuk melihat rincian lengkap ritual."}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-2 -mt-4 sm:-mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap min-h-[44px] cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#9CAF88] text-white shadow-md'
                  : 'bg-[#E8EDE3] text-[#2C2C2C] hover:text-[#1B1B1B] border border-[#1B1B1B]/15'
              }`}
            >
              {cat === 'All' ? (lang === 'en' ? 'All Categories' : 'Semua Kategori') : cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTreatments.filter((t) => t && t.id).map((treatment) => {
              const treatmentId = treatment.id;
              const currentImg = imgErrors[treatmentId]
                ? (treatment.fallbackImage || '/spa1.jpg')
                : (treatment.image || '/spa1.jpg');

              return (
                <div
                  key={treatmentId}
                  onClick={() => onSelectTreatment(treatment)}
                  className="group bg-[#E8EDE3] rounded-2xl overflow-hidden border border-[#1B1B1B]/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden bg-[#FFFFFF]">
                      <Image
                        src={currentImg}
                        alt={treatment.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(treatmentId)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Tombol Plus Mengarah Langsung ke Pesan Sekarang */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookTreatmentDirect(treatment);
                        }}
                        aria-label={lang === 'en' ? "Book Now" : "Pesan Sekarang"}
                        title={lang === 'en' ? "Book Now" : "Pesan Perawatan Ini"}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-[#9CAF88] text-[#1B1B1B] hover:text-white backdrop-blur-md shadow-md flex items-center justify-center transition-all duration-300 min-w-[44px] min-h-[44px] hover:scale-110 active:scale-95 group/plus cursor-pointer"
                      >
                        <Plus className="w-5 h-5 transition-transform duration-300 group-hover/plus:rotate-90" />
                      </button>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-xs font-medium">
                        <span className="bg-[#2D6A4F]/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs">
                          {treatment.category}
                        </span>
                        <span className="flex items-center space-x-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          <Clock className="w-3.5 h-3.5 text-[#9CAF88]" />
                          <span>{typeof treatment.duration === 'string' ? treatment.duration : treatment.duration[lang]}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5 pt-3.5 pb-2.5 space-y-1.5">
                      <h3 className="font-serif text-lg sm:text-xl text-[#1B1B1B] font-semibold leading-snug group-hover:text-[#9CAF88] transition-colors min-h-[48px] flex items-center">
                        {treatment.name}
                      </h3>

                      {/* Tepat 2 baris agar spacing rapi dan proporsional */}
                      <p className="text-[13px] sm:text-sm text-[#3A3A3A] font-normal line-clamp-2 leading-relaxed min-h-[40px] px-0.5">
                        {typeof treatment.shortDesc === 'string' ? treatment.shortDesc : treatment.shortDesc[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTreatment(treatment);
                      }}
                      className="flex-1 py-3 px-4 rounded-full border border-[#9CAF88] text-[#9CAF88] hover:bg-[#9CAF88] hover:text-white bg-transparent text-xs font-medium transition-all duration-300 flex items-center justify-center space-x-1.5 min-h-[44px] shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-current transition-colors" />
                      <span>{lang === 'en' ? "Detail" : "Detail Perawatan"}</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookTreatmentDirect(treatment);
                      }}
                      className="py-3 px-5 rounded-full bg-[#9CAF88] hover:bg-[#8A9E78] text-white text-xs font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] min-h-[44px] flex items-center space-x-1 group cursor-pointer"
                    >
                      <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

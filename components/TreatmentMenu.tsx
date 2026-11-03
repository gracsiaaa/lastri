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
    <section id="treatments" className="py-24 sm:py-32 bg-[#F0E7D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#364A31] bg-[#E6E2D3] px-3.5 py-1.5 rounded-full border border-[#C7AF90]/50 inline-block">
            {lang === 'en' ? "Signature Care" : "Menu Perawatan"}
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl text-[#302310] font-semibold tracking-tight">
            {lang === 'en' ? "Holistic Treatment Menu" : "Menu Perawatan Spa"}
          </h2>
          <p className="text-sm sm:text-base text-[#534D2B] font-medium leading-[1.7]">
            {lang === 'en'
              ? "Select from our specialized massage, facial, body, and specialty therapies. Click any card to view full details."
              : "Pilih perawatan pijat, facial, lulur tubuh, atau terapi spesial kami. Klik kartu untuk melihat rincian lengkap ritual."}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2.5 pb-2 -mt-4 sm:-mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[44px] cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#364A31] text-[#FFFFFF] shadow-md'
                  : 'bg-[#F8F5EE] text-[#534D2B] hover:text-[#302310] hover:bg-[#E6E2D3] border border-[#C7AF90]/60'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            {filteredTreatments.map((treatment) => {
              const treatmentId = treatment.id;
              const hasError = imgErrors[treatmentId];
              const currentImg = hasError
                ? treatment.fallbackImage || '/spa1.jpg'
                : treatment.image || treatment.fallbackImage || '/spa1.jpg';

              return (
                <div
                  key={treatmentId}
                  onClick={() => onSelectTreatment(treatment)}
                  className="group bg-[#F8F5EE] rounded-2xl overflow-hidden border border-[#C7AF90]/40 shadow-[0_4px_16px_rgba(48,35,16,0.06)] hover:shadow-xl hover:border-[#364A31]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden bg-[#E6E2D3]">
                      <Image
                        src={currentImg}
                        alt={treatment.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(treatmentId)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#302310]/75 via-transparent to-transparent" />

                      {/* Tombol Plus Mengarah Langsung ke Pesan Sekarang */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookTreatmentDirect(treatment);
                        }}
                        aria-label={lang === 'en' ? "Book Now" : "Pesan Sekarang"}
                        title={lang === 'en' ? "Book Now" : "Pesan Perawatan Ini"}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F8F5EE]/95 hover:bg-[#364A31] text-[#302310] hover:text-white backdrop-blur-md shadow-md flex items-center justify-center transition-all duration-300 min-w-[44px] min-h-[44px] hover:scale-110 active:scale-95 group/plus cursor-pointer border border-[#C7AF90]/40"
                      >
                        <Plus className="w-5 h-5 transition-transform duration-300 group-hover/plus:rotate-90" />
                      </button>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-xs font-semibold">
                        <span className="bg-[#534D2B]/90 backdrop-blur-md text-[#F8F5EE] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs border border-[#C7AF90]/30">
                          {treatment.category}
                        </span>
                        <span className="flex items-center space-x-1.5 bg-[#1D1914]/65 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          <Clock className="w-3.5 h-3.5 text-[#C7AF90]" />
                          <span>{typeof treatment.duration === 'string' ? treatment.duration : treatment.duration[lang]}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5 pt-4 pb-3 space-y-2">
                      <h3 className="font-serif text-lg sm:text-xl text-[#302310] font-bold leading-snug group-hover:text-[#364A31] transition-colors min-h-[52px] sm:min-h-[48px] flex items-center">
                        {treatment.name}
                      </h3>

                      {/* Description tegas font-weight 500, line-height 1.6-1.75 */}
                      <p className="text-sm sm:text-sm text-[#534D2B] font-medium line-clamp-2 leading-[1.65] min-h-[44px] sm:min-h-[42px] px-0.5">
                        {typeof treatment.shortDesc === 'string' ? treatment.shortDesc : treatment.shortDesc[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 grid grid-cols-2 gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTreatment(treatment);
                      }}
                      className="w-full py-3 px-3 rounded-lg border border-[#364A31] text-[#364A31] hover:bg-[#364A31] hover:text-white bg-transparent text-sm sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-1.5 min-h-[46px] shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-current transition-colors shrink-0" />
                      <span>Detail</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookTreatmentDirect(treatment);
                      }}
                      className="w-full py-3 px-3 rounded-lg bg-[#364A31] hover:bg-[#263A25] text-[#FFFFFF] text-sm sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] min-h-[46px] flex items-center justify-center space-x-1 group cursor-pointer"
                    >
                      <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
                      <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
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

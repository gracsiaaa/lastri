'use client';

import React, { useEffect } from 'react';
import { GalleryItem, Language } from '../../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: GalleryItem | null;
  lang: Language;
  onNext?: () => void;
  onPrev?: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  item,
  lang,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !item) return null;

  const itemTitle = item.title[lang];
  const itemDescription = item.description[lang];

  const categoryMap: Record<string, string> = {
    equipment: lang === 'en' ? 'Equipment Setup' : 'Setup Peralatan',
    botanicals: lang === 'en' ? 'Oils & Botanicals' : 'Minyak & Rempah',
    session: lang === 'en' ? 'Care Session' : 'Sesi Perawatan',
  };
  const categoryLabel = categoryMap[item.category] || item.category;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1914]/92 backdrop-blur-md overflow-hidden select-none">
        {/* Backdrop Close Click */}
        <div
          onClick={onClose}
          className="absolute inset-0 z-10 cursor-pointer"
          aria-label="Close Lightbox"
        />

        {/* Top Floating Controls */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center space-x-3">
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-[#364A31]/90 hover:bg-[#263A25] text-white flex items-center justify-center transition-all duration-200 border border-[#C7AF90]/40 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6 stroke-[2.2]" />
          </button>
        </div>

        {/* Navigation Arrows */}
        {onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#364A31]/80 hover:bg-[#263A25] text-white flex items-center justify-center transition-all duration-200 border border-[#C7AF90]/40 shadow-lg hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}

        {onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#364A31]/80 hover:bg-[#263A25] text-white flex items-center justify-center transition-all duration-200 border border-[#C7AF90]/40 shadow-lg hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* Modal Content / Lightbox Image Card */}
        <div className="relative z-20 w-full h-full max-w-5xl max-h-screen flex items-center justify-center p-2 sm:p-6 md:p-10 pointer-events-none">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-full max-h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden border border-[#C7AF90]/40 shadow-2xl pointer-events-auto bg-[#1D1914]"
          >
            <img
              src={item.image || '/spa1.jpg'}
              alt={itemTitle}
              className="w-full h-full object-contain select-none"
            />

            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#1D1914]/95 via-[#1D1914]/70 to-transparent pt-20 pb-6 px-5 sm:px-8 md:px-10 flex flex-col justify-end">
              <div className="max-w-3xl space-y-2">
                <div>
                  <span className="bg-[#364A31] text-[#F8F5EE] text-[11px] sm:text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md border border-[#C7AF90]/40 inline-block">
                    {categoryLabel}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F8F5EE] font-bold leading-snug drop-shadow-md">
                  {itemTitle}
                </h3>
                {itemDescription && (
                  <p className="text-xs sm:text-sm md:text-base text-[#F0E7D8] font-medium leading-[1.65] drop-shadow max-w-2xl line-clamp-3 sm:line-clamp-none">
                    {itemDescription}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem, Language } from '../../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: GalleryItem | null;
  lang: Language;
  onPrev?: () => void;
  onNext?: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  item,
  lang,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  const itemTitle =
    item?.title?.[lang] ||
    item?.title?.id ||
    item?.title?.en ||
    (lang === 'en' ? 'Gallery Visual' : 'Galeri Foto');
  const itemDescription =
    item?.description?.[lang] ||
    item?.description?.id ||
    item?.description?.en ||
    '';

  const categoryLabel = (() => {
    switch (item.category) {
      case 'equipment':
        return lang === 'en' ? 'Equipment Setup' : 'Setup Peralatan';
      case 'botanicals':
        return lang === 'en' ? 'Oils & Botanicals' : 'Minyak & Rempah';
      case 'session':
        return lang === 'en' ? 'Care Sessions' : 'Sesi Perawatan';
      default:
        return item.category;
    }
  })();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 z-10"
            aria-hidden="true"
          />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 hover:scale-105 active:scale-95 shadow-lg min-w-[44px] min-h-[44px] cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 hover:scale-110 active:scale-95 shadow-lg min-w-[44px] min-h-[44px] cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 hover:scale-110 active:scale-95 shadow-lg min-w-[44px] min-h-[44px] cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-20 w-full h-full max-w-full max-h-screen flex items-center justify-center p-0 sm:p-4 md:p-8"
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={item.image || '/spa1.jpg'}
                alt={itemTitle}
                className="w-full h-full object-contain max-h-screen select-none"
              />

              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-24 pb-6 px-5 sm:px-8 md:px-12 flex flex-col justify-end">
                <div className="max-w-4xl space-y-2">
                  <div>
                    <span className="bg-[#2D6A4F]/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-md border border-white/20 inline-block">
                      {categoryLabel}
                    </span>
                  </div>
                  <h3 className="font-sans text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-snug drop-shadow-md">
                    {itemTitle}
                  </h3>
                  {itemDescription && (
                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed drop-shadow max-w-3xl line-clamp-3 sm:line-clamp-none">
                      {itemDescription}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

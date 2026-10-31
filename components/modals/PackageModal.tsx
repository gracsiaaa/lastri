'use client';

import React from 'react';
import { BaseModal } from './BaseModal';
import { SpaPackage, Language } from '../../types';
import { CheckCircle2, Clock } from 'lucide-react';

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: SpaPackage | null;
  lang: Language;
  onBookPackage: (pkg: SpaPackage) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  isOpen,
  onClose,
  pkg,
  lang,
  onBookPackage,
}) => {
  if (!pkg || !pkg.title) return null;

  const rawTitle = typeof pkg.title === 'string' ? pkg.title : (pkg.title[lang] || pkg.title.id || pkg.title.en || '');
  const titleText = rawTitle.replace(/\s*\(\d+\s*(Menit|Mins|Jam|Hours)?\)/gi, '').trim();

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={titleText}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6 text-[#1B1B1B] font-sans">
        <div className="relative rounded-2xl overflow-hidden h-56 sm:h-64 shadow-sm border border-[#E0E0E0]">
          <img
            src={pkg.image}
            alt={titleText}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6">
            <div className="w-full flex items-center justify-between gap-3 text-white text-xs font-medium">
              <span className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <Clock className="w-3.5 h-3.5 text-[#9CAF88]" />
                <span>{pkg.duration}</span>
              </span>

              {pkg.badge && (
                <span className="bg-[#2D6A4F]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-xs">
                  {pkg.badge[lang]}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
          {pkg.fullDescription[lang]}
        </p>

        <div className="p-5 rounded-2xl bg-[#E8EDE3] border border-[#1B1B1B]/10 space-y-3">
          <h5 className="font-sans text-lg font-semibold text-[#1B1B1B]">
            {lang === 'en' ? "Package Inclusions & Perks" : "Fasilitas & Keuntungan Paket"}
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            {pkg.inclusions[lang].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-[#6B6B6B]">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#1B1B1B]/10 flex items-center justify-end">
          <button
            onClick={() => onBookPackage(pkg)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#9CAF88] hover:bg-[#8A9E78] text-white text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center min-h-[44px] cursor-pointer"
          >
            <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

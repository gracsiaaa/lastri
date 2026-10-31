'use client';

import React, { useState } from 'react';
import { BaseModal } from './BaseModal';
import { Treatment } from '../../data/treatments';
import { getWhatsAppUrl } from '../../data/spaData';
import { Language } from '../../types';
import { Clock, Check, Calendar } from 'lucide-react';

interface TreatmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: Treatment | null;
  lang: Language;
  onBookTreatment: (treatment: Treatment) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  isOpen,
  onClose,
  treatment,
  lang,
  onBookTreatment,
}) => {
  const [imgSrc, setImgSrc] = useState<string>('');

  React.useEffect(() => {
    if (treatment) {
      setImgSrc(treatment.image);
    }
  }, [treatment]);

  if (!isOpen || !treatment) return null;

  const currentImg = imgSrc || treatment.fallbackImage || '/spa1.jpg';

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={treatment.name}
      subtitle={treatment.shortDesc}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72 group shadow-sm border border-[#E0E0E0]">
            <img
              src={currentImg}
              onError={() => {
                setImgSrc(treatment.fallbackImage || '/spa1.jpg');
              }}
              alt={treatment.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div className="w-full flex items-center justify-between gap-3 text-white">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="bg-[#2D6A4F] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs">
                    {treatment.category}
                  </span>
                  <span className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#9CAF88]" />
                    <span>{treatment.duration}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-[15px] text-[#4A4A4A] leading-relaxed -mt-1.5 font-normal">
          {treatment.fullDesc}
        </p>

        <div className="space-y-3">
          <h4 className="font-sans text-sm sm:text-base text-[#1B1B1B] font-semibold">
            {lang === 'en' ? "Benefits" : "Manfaat Utama"}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
            {treatment.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-[#6B6B6B]">
                <Check className="w-4 h-4 text-[#9CAF88] flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 pt-1">
          <h4 className="font-sans text-sm sm:text-base text-[#1B1B1B] font-semibold">
            {lang === 'en' ? "Ritual Steps" : "Tahapan Ritual Spa"}
          </h4>
          <div className="space-y-2.5">
            {treatment.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-3.5 rounded-xl bg-[#E8EDE3] border border-[#1B1B1B]/10 text-xs sm:text-sm"
              >
                <div className="w-7 h-7 rounded-full bg-[#2D6A4F] text-white font-sans text-xs font-semibold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="text-[#1B1B1B] font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#1B1B1B]/10 flex items-center justify-end">
          <button
            onClick={() => onBookTreatment(treatment)}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#9CAF88] hover:bg-[#8A9E78] text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 min-h-[44px] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'en' ? "Book This Treatment" : "Pesan Perawatan Ini"}</span>
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

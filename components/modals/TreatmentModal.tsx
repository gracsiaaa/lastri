'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BaseModal } from './BaseModal';
import { Treatment } from '../../data/treatments';
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

  if (!isOpen || !treatment) return null;

  const currentImg = imgSrc || treatment.fallbackImage || '/spa1.jpg';

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={treatment.name}
      subtitle={typeof treatment.shortDesc === 'string' ? treatment.shortDesc : treatment.shortDesc[lang]}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72 group shadow-sm border border-[#C7AF90]/50 bg-[#E6E2D3]">
            <Image
              src={currentImg}
              alt={treatment.name}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              onError={() => {
                setImgSrc(treatment.fallbackImage || '/spa1.jpg');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1914]/85 via-[#302310]/30 to-transparent flex items-end p-6">
              <div className="w-full flex items-center justify-between gap-3 text-white">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="bg-[#364A31] text-[#F8F5EE] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs border border-[#C7AF90]/40">
                    {treatment.category}
                  </span>
                  <span className="flex items-center space-x-1.5 bg-[#1D1914]/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#C7AF90]" />
                    <span>{typeof treatment.duration === 'string' ? treatment.duration : treatment.duration[lang]}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-base text-[#534D2B] leading-[1.75] font-medium -mt-1.5">
          {typeof treatment.fullDesc === 'string' ? treatment.fullDesc : treatment.fullDesc[lang]}
        </p>

        <div className="space-y-3">
          <h4 className="font-sans text-base sm:text-base text-[#302310] font-bold">
            {lang === 'en' ? "Benefits" : "Manfaat Utama"}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-base sm:text-sm">
            {(Array.isArray(treatment.benefits) ? treatment.benefits : treatment.benefits[lang]).map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-[#534D2B] font-medium">
                <Check className="w-4 h-4 text-[#364A31] flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 pt-1">
          <h4 className="font-sans text-base sm:text-base text-[#302310] font-bold">
            {lang === 'en' ? "Ritual Steps" : "Tahapan Ritual Spa"}
          </h4>
          <div className="space-y-2.5">
            {(Array.isArray(treatment.steps) ? treatment.steps : treatment.steps[lang]).map((step, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-3.5 rounded-xl bg-[#F0E7D8] border border-[#C7AF90]/40 text-sm sm:text-sm"
              >
                <div className="w-7 h-7 rounded-full bg-[#364A31] text-white font-sans text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <span className="text-[#302310] font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#C7AF90]/40 flex items-center justify-end">
          <button
            onClick={() => onBookTreatment(treatment)}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#364A31] hover:bg-[#263A25] text-white text-sm sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 min-h-[44px] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'en' ? "Book This Treatment" : "Pesan Perawatan Ini"}</span>
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

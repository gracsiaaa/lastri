'use client';

import React from 'react';
import Image from 'next/image';
import { BaseModal } from './BaseModal';
import { PHILOSOPHY_CONTENT, THERAPISTS } from '../../data/spaData';
import { Language } from '../../types';
import { Leaf, ShieldCheck, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenBooking: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Leaf;
      case 1:
        return ShieldCheck;
      default:
        return Sparkles;
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={lang === 'en' ? "About Our Service" : "Tentang Layanan Kami"}
      subtitle={lang === 'en' ? "Get to know our treatments and services" : "Mengenal layanan dan perawatan kami."}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8 text-[#1B1B1B]">
        {/* Intro Quote Banner */}
        <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-[#E8EDE3] to-[#FFFFFF] border border-[#1B1B1B]/10">
          <p className="font-serif text-2xl sm:text-3xl text-[#9CAF88] font-medium leading-relaxed italic mb-3.5 sm:mb-4">
            &quot;{PHILOSOPHY_CONTENT.subtitle[lang]}&quot;
          </p>
          <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
            {PHILOSOPHY_CONTENT.story[lang]}
          </p>
        </div>

        {/* 3 Pillars Grid (Sesuai Foto Referensi) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PHILOSOPHY_CONTENT.pillars.map((pillar, i) => {
            const IconComponent = getPillarIcon(i);
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-black/8 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-[#9CAF88]/40"
              >
                {/* Circular Icon Top */}
                <div className="w-14 h-14 rounded-full bg-[#E8EDE3] flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-[#2D6A4F]" strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h4 className="font-sans text-sm sm:text-[15px] font-semibold text-[#1B1B1B] leading-snug mb-2 min-h-[38px] flex items-center justify-center">
                  {pillar.title[lang]}
                </h4>

                {/* Concise Description */}
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {pillar.description[lang]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Master Therapist Section */}
        <div className="w-full space-y-4">
          {THERAPISTS.map((therapist) => (
            <div
              key={therapist.id}
              className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 p-4 sm:p-4.5 rounded-2xl bg-[#E8EDE3] border border-[#1B1B1B]/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] w-full"
            >
              <div className="w-full sm:w-36 md:w-40 lg:w-44 h-48 sm:h-auto min-h-[180px] rounded-xl overflow-hidden flex-shrink-0 relative border border-[#1B1B1B]/10 shadow-xs self-stretch">
                <Image
                  src={therapist.photo}
                  alt={therapist.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 180px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-2.5 w-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h5 className="font-sans text-base sm:text-lg text-[#1B1B1B] font-semibold">
                      {therapist.name}
                    </h5>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2D6A4F] text-white shadow-xs">
                      {therapist.experience}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                    {therapist.bio[lang]}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {therapist.specialties[lang].map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs bg-[#2D6A4F]/15 text-[#2D6A4F] font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tata Tertib Layanan Home Service */}
        <div className="px-4 sm:px-5 pt-0 pb-1 -mt-2 space-y-3">
          <h5 className="font-sans text-base font-semibold text-[#1B1B1B]">
            {lang === 'en' ? "Home Service Etiquette" : "Tata Tertib Layanan Home Service"}
          </h5>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B6B6B] list-disc list-inside leading-relaxed">
            <li>
              {lang === 'en'
                ? "Please be at your home, hotel, or villa 10–15 minutes before schedule. Therapist Lastri prepares all sterile equipment at your location."
                : "Mohon berada di kediaman, hotel, atau vila Anda 10–15 menit sebelum jadwal. Terapis Lastri menyiapkan seluruh peralatan steril di lokasi Anda."}
            </li>
            <li>
              {lang === 'en'
                ? "Our service is 100% strictly professional health & relaxation therapy with disposable underwear and sterile linen."
                : "Layanan kami 100% murni terapi kesehatan & relaksasi profesional dengan celana sekali pakai dan kain linen steril."}
            </li>
            <li>
              {lang === 'en'
                ? "Health conditions, allergies, or pregnancy details are kept strictly confidential."
                : "Kondisi kesehatan, alergi, atau kehamilan akan dijaga kerahasiaannya."}
            </li>
          </ul>
        </div>
      </div>
    </BaseModal>
  );
};

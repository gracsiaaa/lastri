'use client';

import React from 'react';
import { BaseModal } from './BaseModal';
import { PHILOSOPHY_CONTENT, THERAPISTS } from '../../data/spaData';
import { Language } from '../../types';
import { Leaf, ShieldCheck, Sparkles, ShieldCheck as ShieldIcon, Clock, HeartHandshake } from 'lucide-react';

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

  const etiquetteItems = [
    {
      num: "01",
      icon: Clock,
      title: { en: "Arrival & Readiness", id: "Kesiapan Jadwal" },
      desc: {
        en: "Be ready at your room/villa 10–15 minutes before the session starts.",
        id: "Mohon bersiap di kediaman/kamar 10–15 menit sebelum sesi dimulai."
      }
    },
    {
      num: "02",
      icon: ShieldIcon,
      title: { en: "100% Professional Therapy", id: "100% Terapi Resmi" },
      desc: {
        en: "Strictly wellness & healing bodywork. All non-therapeutic requests are declined.",
        id: "Murni terapi kebugaran & kesehatan. Segala permintaan non-terapeutik ditolak tegas."
      }
    },
    {
      num: "03",
      icon: HeartHandshake,
      title: { en: "Health & Privacy", id: "Privasi & Riwayat" },
      desc: {
        en: "Pregnancy or sensitive medical details are held in absolute confidentiality.",
        id: "Riwayat alergi, kehamilan, dan data pribadi Anda dijaga secara penuh."
      }
    }
  ];

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
          <p className="font-serif text-2xl sm:text-3xl text-[#9CAF88] font-semibold leading-relaxed italic mb-3.5 sm:mb-4">
            &ldquo;{PHILOSOPHY_CONTENT.subtitle[lang]}&rdquo;
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
              <div className="w-full sm:w-36 md:w-40 lg:w-44 h-48 sm:h-auto rounded-xl overflow-hidden flex-shrink-0 relative border border-[#1B1B1B]/10 shadow-xs self-stretch">
                <img
                  src={therapist.photo}
                  alt={therapist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2.5 w-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h5 className="font-sans text-base sm:text-lg text-[#1B1B1B] font-semibold">
                      {therapist.name}
                    </h5>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9CAF88]/15 text-[#9CAF88]">
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

        {/* Tata Tertib / Ketentuan Layanan (Konsep Editorial Monokrom Tanpa Garis Vertikal) */}
        <div className="pt-6 border-t border-[#1B1B1B]/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="font-serif text-lg font-semibold text-[#1B1B1B]">
              {lang === 'en' ? "Important Service Etiquette" : "Ketentuan Layanan Lastri Spa"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {etiquetteItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-serif text-xs font-bold text-[#9CAF88] tracking-widest">
                      {item.num}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#1B1B1B]/30" />
                    <span className="font-sans text-sm font-semibold text-[#1B1B1B]">
                      {item.title[lang]}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#6B6B6B] leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

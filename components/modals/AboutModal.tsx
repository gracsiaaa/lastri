'use client';

import React from 'react';
import Image from 'next/image';
import { BaseModal } from './BaseModal';
import { PHILOSOPHY_CONTENT, THERAPISTS } from '../../data/spaData';
import { Language } from '../../types';
import { Leaf, ShieldCheck, Sparkles, Clock, HeartHandshake } from 'lucide-react';

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
      icon: Leaf,
      title: { en: "Comfortable Ambiance", id: "Kenyamanan Ruang" },
      desc: {
        en: "Prepare a clean room with quiet lighting or gentle ambient temperature.",
        id: "Sediakan ruangan yang tenang dengan suhu dan pencahayaan yang nyaman."
      }
    },
    {
      num: "03",
      icon: HeartHandshake,
      title: { en: "Health Disclosure", id: "Kondisi Tubuh" },
      desc: {
        en: "Inform your therapist about injuries, pressure preferences, or pregnancy.",
        id: "Sampaikan preferensi tekanan pijatan, cedera, atau kondisi kehamilan kepada terapis."
      }
    }
  ];

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={lang === 'en' ? "About Lastri Spa" : "Tentang Lastri Spa"}
      subtitle={lang === 'en' ? "Professional Home & Hotel Spa Service" : "Layanan Pijat Panggilan & Spa Home Service Banyuwangi"}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8 text-[#534D2B]">
        {/* Intro Quote */}
        <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 bg-[#F0E7D8] border border-[#C7AF90]/50">
          <p className="font-serif text-2xl sm:text-3xl text-[#364A31] font-semibold leading-relaxed italic mb-3.5 sm:mb-4">
            &quot;{PHILOSOPHY_CONTENT.subtitle[lang]}&quot;
          </p>
          <p className="text-sm sm:text-base text-[#534D2B] font-medium leading-[1.75]">
            {PHILOSOPHY_CONTENT.story[lang]}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PHILOSOPHY_CONTENT.pillars.map((pillar, i) => {
            const IconComponent = getPillarIcon(i);
            return (
              <div
                key={i}
                className="bg-[#F8F5EE] rounded-2xl p-5 border border-[#C7AF90]/50 shadow-[0_4px_12px_rgba(48,35,16,0.04)] flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-[#364A31]/50"
              >
                {/* Circular Icon Top */}
                <div className="w-14 h-14 rounded-full bg-[#F0E7D8] border border-[#C7AF90]/40 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-[#364A31]" strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h4 className="font-sans text-base sm:text-[15px] font-bold text-[#302310] leading-snug mb-2 min-h-[38px] flex items-center justify-center">
                  {pillar.title[lang]}
                </h4>

                {/* Concise Description */}
                <p className="text-sm text-[#534D2B] font-medium leading-relaxed">
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
              className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-[#F0E7D8] border border-[#C7AF90]/60 shadow-[0_4px_16px_rgba(48,35,16,0.05)] w-full"
            >
              <div className="w-full sm:w-36 md:w-40 lg:w-44 h-48 sm:h-auto min-h-[180px] rounded-xl overflow-hidden flex-shrink-0 relative border border-[#C7AF90]/60 shadow-xs self-stretch bg-[#E6E2D3]">
                <Image
                  src={therapist.photo}
                  alt={`${therapist.name} - Terapis Lastri Spa Banyuwangi`}
                  fill
                  sizes="(max-width: 640px) 100vw, 180px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-2.5 w-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h5 className="font-sans text-base sm:text-lg text-[#302310] font-bold">
                      {therapist.name}
                    </h5>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#364A31] text-[#F8F5EE] shadow-xs">
                      {therapist.experience}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#534D2B] font-medium leading-[1.75]">
                    {therapist.bio[lang]}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {therapist.specialties[lang].map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs bg-[#E6E2D3] border border-[#C7AF90]/40 text-[#364A31] font-bold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spa Etiquette / Panduan Layanan */}
        <div className="space-y-4 pt-2">
          <h4 className="font-sans text-base sm:text-lg text-[#302310] font-bold">
            {lang === 'en' ? "Guest Etiquette & Preparation" : "Panduan & Etika Layanan Home Spa"}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {etiquetteItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8F5EE] border border-[#C7AF90]/50 space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-[#F0E7D8] text-[#364A31] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold font-serif text-[#C7AF90]">{item.num}</span>
                  </div>
                  <h5 className="font-sans text-sm sm:text-sm font-bold text-[#302310]">
                    {item.title[lang]}
                  </h5>
                  <p className="text-sm text-[#534D2B] font-medium leading-relaxed">
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

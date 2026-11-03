'use client';

import React from 'react';
import Image from 'next/image';
import { Language } from '../types';
import { PHILOSOPHY_CONTENT } from '../data/spaData';
import { Leaf, ArrowRight, Award } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenAboutModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenAboutModal,
}) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F5EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 max-h-[420px] border border-[#C7AF90]/40">
              <Image
                src="/spa6.jpg"
                alt="Sanctuary Organic Botanical Healing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#302310]/50 via-transparent to-transparent" />
            </div>

            <div className="absolute top-6 sm:top-10 -left-4 sm:-left-8 bg-[#F0E7D8]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl max-w-[220px] sm:max-w-[250px] shadow-xl border border-[#C7AF90]/60 space-y-1 hidden sm:block z-10">
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-[#364A31] flex-shrink-0" />
                <span className="text-xs sm:text-xs font-bold uppercase tracking-wider text-[#364A31]">
                  {lang === 'en' ? "Experienced Therapists" : "Terapis Berpengalaman"}
                </span>
              </div>
              <p className="text-sm text-[#534D2B] font-semibold leading-relaxed">
                {lang === 'en'
                  ? "Over 10+ years dedicated to wellness."
                  : "Lebih dari 10 tahun berdedikasi dalam kebugaran."}
              </p>
            </div>

            <div className="absolute -bottom-6 right-6 sm:right-12 bg-[#E6E2D3]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl max-w-[220px] sm:max-w-[250px] shadow-xl border border-[#C7AF90]/60 space-y-1 hidden sm:block z-10">
              <div className="flex items-center space-x-1.5">
                <Leaf className="w-4 h-4 text-[#364A31] flex-shrink-0" />
                <span className="text-xs sm:text-xs font-bold uppercase tracking-wider text-[#364A31]">
                  {lang === 'en' ? "Wild Botanicals" : "Bahan Organik Segar"}
                </span>
              </div>
              <p className="text-sm text-[#534D2B] font-semibold leading-relaxed">
                {lang === 'en'
                  ? "Hand-pressed daily using traditional mortars."
                  : "Diracik segar setiap pagi dari ramuan organik murni."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm sm:text-xs font-bold uppercase tracking-widest text-[#364A31] bg-[#F0E7D8] px-3.5 py-1.5 rounded-full border border-[#C7AF90]/40">
                <Leaf className="w-3.5 h-3.5 text-[#364A31]" />
                <span>{lang === 'en' ? "Our Philosophy" : "Filosofi Relaksasi"}</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-4xl lg:text-5xl text-[#302310] font-semibold leading-tight">
                {PHILOSOPHY_CONTENT.title[lang]}
              </h2>
              <p className="text-lg sm:text-base lg:text-lg text-[#534D2B] font-medium leading-[1.75]">
                {PHILOSOPHY_CONTENT.story[lang]}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAboutModal}
                className="px-7 py-3.5 rounded-lg bg-[#364A31] text-[#FFFFFF] hover:bg-[#263A25] transition-all duration-300 text-base sm:text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] inline-flex items-center space-x-2.5 min-h-[44px] group cursor-pointer"
              >
                <span>{lang === 'en' ? "Read Our Full Story" : "Baca Selengkapnya"}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

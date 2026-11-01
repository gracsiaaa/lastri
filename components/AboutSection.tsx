'use client';

import React from 'react';
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
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 max-h-[420px]">
              <img
                src="/spa6.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/spa1.jpg';
                }}
                alt="Sanctuary Organic Botanical Healing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute top-6 sm:top-10 -left-4 sm:-left-8 bg-[#FFFFFF]/75 backdrop-blur-[2px] p-2.5 sm:p-3 rounded-2xl max-w-[210px] sm:max-w-[240px] shadow-xl border border-[#1B1B1B]/15 space-y-1 hidden sm:block z-10">
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-[#2D6A4F] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                  {lang === 'en' ? "Experienced Therapists" : "Terapis Berpengalaman"}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#4A4A4A] font-medium leading-relaxed">
                {lang === 'en'
                  ? "Certified female therapists trained in deep relaxation."
                  : "Ditangani langsung oleh terapis wanita terlatih dan profesional."}
              </p>
            </div>

            <div className="absolute -bottom-6 right-6 sm:right-12 bg-[#E8EDE3]/75 backdrop-blur-[2px] p-2.5 sm:p-3 rounded-2xl max-w-[210px] sm:max-w-[240px] shadow-xl border border-[#1B1B1B]/15 space-y-1 hidden sm:block z-10">
              <div className="flex items-center space-x-1.5">
                <Leaf className="w-4 h-4 text-[#2D6A4F] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                  {lang === 'en' ? "Wild Botanicals" : "Bahan Organik Segar"}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#4A4A4A] font-medium leading-relaxed">
                {lang === 'en'
                  ? "Hand-pressed daily using traditional mortars."
                  : "Diracik segar setiap pagi dari ramuan organik murni."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3.5">
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1B1B1B] font-semibold leading-tight">
                {PHILOSOPHY_CONTENT.title[lang]}
              </h2>
              <p className="text-base sm:text-lg text-[#6B6B6B] font-light leading-relaxed">
                {PHILOSOPHY_CONTENT.story[lang]}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAboutModal}
                className="px-7 py-3 rounded-full border border-[#9CAF88] text-[#9CAF88] hover:bg-[#9CAF88] hover:text-white transition-all duration-300 text-sm font-medium shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] inline-flex items-center space-x-2.5 min-h-[44px] group"
              >
                <span>{lang === 'en' ? "Read Our Full Story" : "Baca Selengkapnya"}</span>
                <ArrowRight className="w-4 h-4 text-[#9CAF88] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { Language, SpaPackage } from '../types';
import { SPA_PACKAGES } from '../data/spaData';
import { Clock, CheckCircle2, Sparkles, ChevronRight, Gift } from 'lucide-react';

interface SignaturePackagesProps {
  lang: Language;
  onSelectPackage: (pkg: SpaPackage) => void;
  onBookPackageDirect: (pkg: SpaPackage) => void;
}

export const SignaturePackages: React.FC<SignaturePackagesProps> = ({
  lang,
  onSelectPackage,
  onBookPackageDirect,
}) => {
  return (
    <section id="packages" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-sans text-3xl sm:text-5xl text-[#1B1B1B] font-semibold tracking-tight">
            {lang === 'en' ? "Special Lastri Spa Packages" : "Paket Spesial Lastri Spa"}
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] font-light">
            {lang === 'en'
              ? "Practical and budget-friendly combination package options"
              : "Pilihan paket kombinasi praktis dan hemat"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPA_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              className="group bg-[#E8EDE3] rounded-2xl overflow-hidden border border-[#1B1B1B]/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image || '/spa1.jpg'}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/spa1.jpg';
                    }}
                    alt={pkg.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {pkg.badge && (
                    <span className="absolute top-4 left-4 bg-[#2D6A4F]/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                      {pkg.badge[lang]}
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center text-white text-xs font-medium">
                    <span className="flex items-center space-x-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      <Clock className="w-3.5 h-3.5 text-[#9CAF88]" />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-2xl text-[#1B1B1B] font-semibold leading-tight group-hover:text-[#9CAF88] transition-colors">
                    {pkg.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {pkg.excerpt[lang]}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#1B1B1B]/10">
                    <span className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider block">
                      {lang === 'en' ? "Journey Highlights:" : "Sorotan Perjalanan:"}
                    </span>
                    {pkg.inclusions[lang].slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-[#6B6B6B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPackage(pkg);
                  }}
                  className="flex-1 py-3 px-4 rounded-full border border-[#9CAF88] text-[#9CAF88] hover:bg-[#9CAF88] hover:text-white bg-transparent text-xs font-medium transition-all duration-300 text-center min-h-[44px] shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  {lang === 'en' ? "View Package Details" : "Lihat Detail Paket"}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookPackageDirect(pkg);
                  }}
                  className="py-3 px-5 rounded-full bg-[#9CAF88] hover:bg-[#8A9E78] text-white text-xs font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] min-h-[44px] flex items-center space-x-1 group/btn"
                >
                  <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

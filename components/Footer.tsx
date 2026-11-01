'use client';

import React from 'react';
import { Language } from '../types';
import { SPA_INFO } from '../data/spaData';
import { Calendar, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
  onOpenAboutModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenBooking,
}) => {
  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About Us' : 'Tentang Kami' },
    { href: '#treatments', label: lang === 'en' ? 'Treatments' : 'Perawatan' },
    { href: '#gallery', label: lang === 'en' ? 'Gallery' : 'Galeri' },
    { href: '#reviews', label: lang === 'en' ? 'Review' : 'Ulasan' },
    { href: '#faq', label: lang === 'en' ? 'FAQ' : 'FAQ' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'Kontak' },
  ];

  return (
    <footer className="bg-[#1B4332] text-[#FFFFFF] pt-14 pb-10 border-t border-white/10 selection:bg-[#9CAF88] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith('/logo.jpg')) {
                    target.src = '/logo.png';
                  } else {
                    target.style.display = 'none';
                    const fallback = document.getElementById('footer-logo-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }
                }}
                alt="Lastri Spa Logo"
                className="h-11 w-auto object-contain rounded-lg"
              />
              <div id="footer-logo-fallback" className="hidden items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-[#1B4332] text-white flex items-center justify-center font-serif text-lg font-bold">
                  L
                </div>
                <span className="font-serif text-xl text-white tracking-widest font-bold uppercase">
                  LASTRI SPA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8EDE3]/75 leading-relaxed max-w-md">
              {SPA_INFO.subtagline[lang]}
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <span className="text-xs text-[#E8EDE3]/60 font-medium">Sosmed & Kontak:</span>
              
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Lastri Spa"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1B4332] text-white flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
                title="TikTok Lastri Spa"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.34 6.34 0 009.34 22a6.33 6.33 0 006.33-6.32V9.05a8.16 8.16 0 004.92 1.63V7.23a4.85 4.85 0 01-1-.54z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/62895347499653?text=Halo%20Lastri%20Spa%20Home%20Service%2C%20saya%20tertarik%20untuk%20pesan%20layanan%20anda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Lastri Spa"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
                title="WhatsApp 0895347499653"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 text-xs sm:text-sm">
            <span className="font-serif text-base text-white font-semibold block">
              {lang === 'en' ? "Quick Menu" : "Menu Utama"}
            </span>
            <ul className="space-y-2 text-[#E8EDE3]/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="font-serif text-base text-white font-semibold block">
              {lang === 'en' ? "Online Reservation" : "Reservasi Layanan Spa"}
            </span>
            <p className="text-xs text-[#E8EDE3]/70 leading-relaxed">
              {lang === 'en'
                ? "Book your favorite home spa treatments easily through our direct online reservation form."
                : "Pesan perawatan spa home service favorit Anda dengan mudah dan cepat melalui formulir reservasi online kami."}
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-5 rounded-full bg-[#1B4332] hover:bg-[#153F2A] text-white text-xs font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 min-h-[44px] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8EDE3]/50 gap-4">
          <p>© {new Date().getFullYear()} Lastri Spa Home Service Banyuwangi (0895347499653). All Rights Reserved.</p>
          <p className="flex items-center space-x-1">
            <span>{lang === 'en' ? "Professional On-Call Spa Service in Banyuwangi" : "Layanan Pijat Panggilan Profesional Banyuwangi"}</span>
            <Heart className="w-3.5 h-3.5 text-[#1B4332] fill-[#1B4332]" />
          </p>
        </div>
      </div>
    </footer>
  );
};

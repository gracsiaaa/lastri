'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About Us' : 'Tentang Kami' },
    { href: '#treatments', label: lang === 'en' ? 'Treatments' : 'Perawatan' },
    { href: '#gallery', label: lang === 'en' ? 'Gallery' : 'Galeri' },
    { href: '#reviews', label: lang === 'en' ? 'Review' : 'Ulasan' },
    { href: '#faq', label: lang === 'en' ? 'FAQ' : 'FAQ' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'Kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-none shadow-none outline-none ${
        scrolled
          ? 'glass-nav py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <img
            src="/logo.jpg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('/logo.jpg')) {
                target.src = '/logo.png';
              } else {
                target.style.display = 'none';
                const fallback = document.getElementById('navbar-logo-icon-fallback');
                if (fallback) fallback.style.display = 'flex';
              }
            }}
            alt="Logo Lastri Spa Banyuwangi"
            className="h-10 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform"
          />
          <div id="navbar-logo-icon-fallback" className="hidden w-9 h-9 rounded-full bg-[#364A31] text-[#F8F5EE] items-center justify-center font-serif text-lg font-bold group-hover:scale-105 transition-transform shadow-xs">
            L
          </div>
          <div className="flex flex-col justify-center">
            <span
              className={`font-serif text-lg sm:text-xl tracking-widest font-bold uppercase block leading-none transition-colors duration-300 ${
                scrolled ? 'text-[#302310]' : 'text-white drop-shadow-md'
              }`}
            >
              LASTRI SPA
            </span>
            <span
              className={`text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold block mt-1 transition-colors duration-300 ${
                scrolled ? 'text-[#534D2B]' : 'text-[#E6E2D3]'
              }`}
            >
              Spa Home Service
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#364A31] hover:after:w-full after:transition-all ${
                scrolled
                  ? 'text-[#302310] hover:text-[#364A31]'
                  : 'text-white/95 hover:text-white drop-shadow-xs'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onToggleLang}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-300 min-h-[44px] cursor-pointer ${
              scrolled
                ? 'border-[#C7AF90]/50 bg-[#F0E7D8] hover:bg-[#E6E2D3] text-[#302310]'
                : 'border-white/30 bg-black/25 hover:bg-black/35 text-white backdrop-blur-md'
            }`}
            title="Switch Language (English / Bahasa Indonesia)"
          >
            <Globe className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${scrolled ? 'text-[#364A31]' : 'text-white'}`} />
            <span className="font-semibold">{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-lg bg-[#364A31] hover:bg-[#263A25] text-[#FFFFFF] text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center space-x-2 min-h-[44px] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
          </button>
        </div>

        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={onToggleLang}
            className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-full border text-xs font-semibold min-h-[44px] transition-all duration-300 cursor-pointer ${
              scrolled
                ? 'border-[#C7AF90]/50 bg-[#F0E7D8] text-[#302310]'
                : 'border-white/30 bg-black/25 text-white backdrop-blur-md'
            }`}
          >
            <Globe className={`w-4 h-4 flex-shrink-0 ${scrolled ? 'text-[#364A31]' : 'text-white'}`} />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2 rounded-xl transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer ${
              scrolled
                ? 'text-[#302310] hover:bg-[#F0E7D8]'
                : 'text-white hover:bg-black/20'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-b border-[#C7AF90]/40 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-3 text-base font-serif font-semibold text-[#302310]">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#364A31] py-1 border-b border-[#C7AF90]/30"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-lg bg-[#364A31] hover:bg-[#263A25] text-white text-sm font-semibold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 min-h-[44px] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

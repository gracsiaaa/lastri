'use client';

import React from 'react';
import Image from 'next/image';
import { Language } from '../types';
import { SPA_INFO, DIRECT_WA_URL } from '../data/spaData';
import { MapPin, Phone, Clock, MessageSquare, Calendar } from 'lucide-react';

interface BookingSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  const directWaUrl = DIRECT_WA_URL;

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F8F5EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-[#364A31] bg-[#F0E7D8] px-3.5 py-1.5 rounded-full border border-[#C7AF90]/50 inline-block">
            {lang === 'en' ? "Get in Touch" : "Kontak & Reservasi"}
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl text-[#302310] font-semibold tracking-tight">
            {lang === 'en' ? "Book Lastri Home Spa Services" : "Pesan Layanan Lastri Home Spa"}
          </h2>
          <p className="text-base sm:text-base text-[#534D2B] font-medium leading-[1.7]">
            {lang === 'en'
              ? "Enjoy the comfort of professional spa treatments delivered directly to your space with quick and easy booking."
              : "Nikmati kenyamanan perawatan spa profesional langsung di tempat Anda dengan reservasi mudah dan cepat."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-[#F0E7D8] p-8 sm:p-10 rounded-2xl border border-[#C7AF90]/60 shadow-[0_4px_16px_rgba(48,35,16,0.06)] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-sans text-2xl sm:text-2xl text-[#302310] font-bold">
                {lang === 'en' ? "Contact & Reservation Details" : "Detail Informasi & Reservasi"}
              </h3>

              <div className="space-y-4 text-sm sm:text-sm text-[#534D2B]">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#364A31] text-[#F8F5EE] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#302310] block text-base">{lang === 'en' ? "Address" : "Alamat"}</span>
                    <p className="font-medium text-[#534D2B] mt-0.5">{lang === 'en' ? "On-call home & hotel service only" : "Layanan panggilan ke rumah, hotel & vila"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#364A31] text-[#F8F5EE] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#302310] block text-base">{lang === 'en' ? "Opening Hours" : "Jam Operasional"}</span>
                    <p className="font-medium text-[#534D2B] mt-0.5">{SPA_INFO.hours[lang]}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#364A31] text-[#F8F5EE] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#302310] block text-base">{lang === 'en' ? "Phone / WhatsApp" : "Telepon / WhatsApp"}</span>
                    <p className="font-medium text-[#534D2B] mt-0.5">{SPA_INFO.whatsapp}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-5 border-t border-[#C7AF90]/40">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-lg bg-[#364A31] hover:bg-[#263A25] text-[#FFFFFF] text-base sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 min-h-[44px] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
              </button>

              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-lg bg-[#534D2B] hover:bg-[#302310] text-[#FFFFFF] text-base sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 min-h-[44px] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{lang === 'en' ? "Chat with Lastri Spa" : "Chat dengan Lastri Spa"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#E6E2D3] rounded-2xl overflow-hidden relative min-h-[380px] shadow-sm flex flex-col justify-end border border-[#C7AF90]/50">
            <Image
              src="/spa3.jpg"
              alt="Banyuwangi Sanctuary Map Area"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1914]/90 via-[#302310]/40 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 text-white space-y-3">
              <h3 className="font-serif text-3xl sm:text-3xl font-bold text-[#F8F5EE]">
                {lang === 'en' ? "Therapist Comes Directly to Your Home, Hotel & Villa" : "Terapis Datang Langsung ke Rumah, Hotel & Vila Anda"}
              </h3>
              <p className="text-base text-[#F8F5EE]/95 max-w-lg leading-[1.7] font-medium font-sans">
                {lang === 'en'
                  ? "Our professional therapist arrives on time with complete sanitized equipment, fresh linens, and natural aromatherapy oils to bring you the finest relaxation in the comfort of your room."
                  : "Terapis wanita profesional kami siap hadir tepat waktu dengan perlengkapan lengkap, linen steril, dan aromaterapi alami untuk menghadirkan relaksasi optimal langsung di tempat Anda."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

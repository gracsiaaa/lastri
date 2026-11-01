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
    <section id="contact" className="py-20 sm:py-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-sans text-3xl sm:text-5xl text-[#1B1B1B] font-semibold tracking-tight">
            {lang === 'en' ? "Book Lastri Home Spa Services" : "Pesan Layanan Lastri Home Spa"}
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] font-light">
            {lang === 'en'
              ? "Enjoy the comfort of professional spa treatments delivered directly to your space with quick and easy booking."
              : "Nikmati kenyamanan perawatan spa profesional langsung di tempat Anda dengan reservasi mudah dan cepat."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-[#E8EDE3] p-8 sm:p-10 rounded-2xl border border-[#1B1B1B]/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-sans text-xl sm:text-2xl text-[#1B1B1B] font-semibold">
                {lang === 'en' ? "Contact & Reservation Details" : "Detail Informasi & Reservasi"}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#6B6B6B]">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#2D6A4F]/15 text-[#2D6A4F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1B1B1B] block">{lang === 'en' ? "Address" : "Alamat"}</span>
                    <p>{lang === 'en' ? "On-call service only" : "Hanya layanan panggilan"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#2D6A4F]/15 text-[#2D6A4F] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1B1B1B] block">{lang === 'en' ? "Opening Hours" : "Jam Operasional"}</span>
                    <p>{SPA_INFO.hours[lang]}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#2D6A4F]/15 text-[#2D6A4F] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1B1B1B] block">{lang === 'en' ? "Phone / WhatsApp" : "Telepon / WhatsApp"}</span>
                    <p>{SPA_INFO.whatsapp}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#1B1B1B]/10">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-full bg-[#9CAF88] hover:bg-[#8A9E78] text-white text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 min-h-[44px] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'en' ? "Book Now" : "Pesan Sekarang"}</span>
              </button>

              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 min-h-[44px] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{lang === 'en' ? "Chat with Lastri Spa" : "Chat dengan Lastri Spa"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#E0E0E0] rounded-3xl overflow-hidden relative min-h-[380px] shadow-sm flex flex-col justify-end border border-[#E0E0E0]">
            <Image
              src="/spa3.jpg"
              alt="Banyuwangi Sanctuary Map Area"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 text-white space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                {lang === 'en' ? "Therapist Comes Directly to Your Home, Hotel & Villa" : "Terapis Datang Langsung ke Rumah, Hotel & Vila Anda"}
              </h3>
              <p className="text-xs sm:text-sm text-white/85 max-w-lg leading-relaxed font-sans">
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

'use client';

import React from 'react';
import { BaseModal } from './BaseModal';
import { BookingFormData, Language } from '../../types';
import { CheckCircle2 } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingFormData | null;
  lang: Language;
  refId?: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  bookingData,
  lang,
  refId,
}) => {
  if (!isOpen || !bookingData) return null;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={lang === 'en' ? "Reservation Sent" : "Reservasi Terkirim"}
      maxWidth="max-w-xl"
    >
      <div className="space-y-6 text-[#534D2B] text-center sm:text-left">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F0E7D8] border border-[#C7AF90]/60 text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-[#364A31] text-[#F8F5EE] flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-[#302310] font-bold">
            {lang === 'en' ? "Thank You, " : "Terima Kasih, "}{bookingData.nama}
          </h4>
          <p className="text-sm text-[#534D2B] max-w-lg mx-auto leading-relaxed font-medium">
            {lang === 'en'
              ? "Your home service spa reservation request has been redirected to WhatsApp. Please make sure to send the message template on WhatsApp so Terapis Lastri can confirm your schedule shortly."
              : "Permintaan reservasi spa panggilan Anda telah diteruskan via WhatsApp. Pastikan Anda sudah mengirim template pesan ke WA agar Terapis Lastri dapat segera mengonfirmasi jadwal Anda."}
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#F0E7D8] border border-[#C7AF90]/60 space-y-3.5 text-xs sm:text-sm">
          <h5 className="font-serif text-base font-bold text-[#302310] border-b border-[#C7AF90]/40 pb-2">
            {lang === 'en' ? "Reservation Summary Details" : "Rincian Reservasi"}
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[#756B5C] block text-[11px] font-bold uppercase tracking-wider">{lang === 'en' ? "Guest Name" : "Nama Pemesan"}</span>
              <span className="font-bold text-[#302310] text-base">{bookingData.nama}</span>
            </div>
            <div>
              <span className="text-[#756B5C] block text-[11px] font-bold uppercase tracking-wider">{lang === 'en' ? "Treatment / Package" : "Layanan / Paket"}</span>
              <span className="font-bold text-[#302310]">{bookingData.layanan}</span>
            </div>
            <div>
              <span className="text-[#756B5C] block text-[11px] font-bold uppercase tracking-wider">{lang === 'en' ? "Schedule" : "Jadwal"}</span>
              <span className="font-bold text-[#302310]">{bookingData.hariTanggal} &bull; {bookingData.jamMulai}</span>
            </div>
            <div>
              <span className="text-[#756B5C] block text-[11px] font-bold uppercase tracking-wider">{lang === 'en' ? "Location & Guests" : "Lokasi & Jumlah Orang"}</span>
              <span className="font-bold text-[#302310]">{bookingData.tipeLokasi} ({bookingData.area}) &bull; {bookingData.jumlahOrang}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end pt-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#364A31] hover:bg-[#263A25] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] min-h-[44px] cursor-pointer"
          >
            {lang === 'en' ? "Done & Return to Site" : "Selesai & Kembali"}
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

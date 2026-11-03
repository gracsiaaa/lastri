'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BaseModal } from './BaseModal';
import { treatmentsData } from '../../data/treatments';
import { Language } from '../../types';
import { BookingData, createWhatsAppBookingUrl } from '../../utils/whatsapp';

// Custom Modern Select Dropdown component with styled floating popover menu
interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: boolean;
  position?: 'down' | 'up';
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Pilih opsional...',
  error,
  position = 'down',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="relative w-full"
      ref={containerRef}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={`w-full px-5 py-3.5 rounded-xl bg-white border text-left text-sm sm:text-base font-semibold transition-all duration-200 min-h-[48px] flex items-center justify-between cursor-pointer shadow-xs ${
          isOpen
            ? 'border-[#364A31] ring-4 ring-[#364A31]/15'
            : error
            ? 'border-red-600'
            : 'border-[#C7AF90]/60 text-[#302310]'
        }`}
      >
        <span className={selectedOption ? 'text-[#302310] font-semibold' : 'text-[#756B5C]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-[#364A31] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute left-0 right-0 ${position === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'} bg-[#F8F5EE] border border-[#C7AF90]/60 rounded-xl shadow-xl z-50 overflow-hidden py-1.5 animate-in fade-in duration-150 max-h-[190px] overflow-y-auto`}>
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 text-sm sm:text-base font-semibold cursor-pointer transition-colors flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#E6E2D3] text-[#364A31]'
                    : 'text-[#302310] hover:bg-[#F0E7D8]'
                }`}
              >
                <span>{opt.label}</span>
                {isSelected && <span className="text-[#364A31] text-xs font-bold">✓</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Custom Modern DatePicker component with styled floating calendar menu
interface CustomDatePickerProps {
  value: string; // ISO date format string YYYY-MM-DD
  onChange: (isoDate: string, formattedText: string) => void;
  formattedText?: string;
  minDateStr?: string;
  error?: boolean;
  position?: 'down' | 'up';
  lang?: Language;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  formattedText,
  minDateStr,
  error,
  position = 'down',
  lang = 'id',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const initialDate = value ? new Date(value + 'T00:00:00') : new Date();
  const [currentViewDate, setCurrentViewDate] = useState<Date>(initialDate);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const year = currentViewDate.getFullYear();
  const month = currentViewDate.getMonth();

  const monthNamesId = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const monthNamesEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthNames = lang === 'en' ? monthNamesEn : monthNamesId;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const todayIso = new Date().toISOString().split('T')[0];
  const minDate = minDateStr || todayIso;

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentViewDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    const selectedIso = `${year}-${pad(month + 1)}-${pad(day)}`;

    const dateObj = new Date(year, month, day);
    const dayName = dateObj.toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', { weekday: 'long' });
    const monthName = monthNames[month];
    const formatted = lang === 'en'
      ? `${dayName}, ${monthName} ${day}, ${year}`
      : `${dayName}, ${day} ${monthName} ${year}`;

    onChange(selectedIso, formatted);
    setIsOpen(false);
  };

  return (
    <div
      className="relative w-full"
      ref={containerRef}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={`w-full px-5 py-3.5 rounded-xl bg-white border text-left text-sm sm:text-base font-semibold transition-all duration-200 min-h-[48px] flex items-center justify-between cursor-pointer shadow-xs ${
          isOpen
            ? 'border-[#364A31] ring-4 ring-[#364A31]/15'
            : error
            ? 'border-red-600'
            : 'border-[#C7AF90]/60 text-[#302310]'
        }`}
      >
        <span className={formattedText ? 'text-[#302310]' : 'text-[#756B5C]'}>
          {formattedText || (lang === 'en' ? 'Select Date...' : 'Pilih Hari & Tanggal...')}
        </span>
        <svg
          className="w-4 h-4 text-[#364A31]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {isOpen && (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 ${position === 'up' ? 'bottom-full mb-1.5' : 'top-full mt-1.5'} bg-[#F8F5EE] border border-[#C7AF90]/60 rounded-xl p-3 shadow-xl z-50 w-full sm:w-[275px] animate-in fade-in duration-150`}
        >
          <div className="flex items-center justify-between mb-1.5 px-1">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="w-6 h-6 rounded-full hover:bg-[#E8EDE3] flex items-center justify-center text-[#1B1B1B] font-semibold text-xs cursor-pointer"
            >
              ‹
            </button>
            <span className="text-xs font-semibold text-[#1B1B1B]">
              {monthNames[month]} {year}
            </span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="w-6 h-6 rounded-full hover:bg-[#E8EDE3] flex items-center justify-center text-[#1B1B1B] font-semibold text-xs cursor-pointer"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
            {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((d) => (
              <span key={d} className="text-[9px] font-semibold uppercase text-[#7A8A7E]">
                {d}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
              const thisIso = `${year}-${pad(month + 1)}-${pad(dayNum)}`;
              const isPast = thisIso < minDate;
              const isSelected = value === thisIso;

              return (
                <button
                  key={dayNum}
                  type="button"
                  disabled={isPast}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectDay(dayNum);
                  }}
                  className={`w-7 h-7 rounded-full text-[11px] font-medium flex items-center justify-center transition-all mx-auto ${
                    isSelected
                      ? 'bg-[#9CAF88] text-white font-bold shadow-xs'
                      : isPast
                      ? 'text-[#CCC] cursor-not-allowed'
                      : 'text-[#1B1B1B] hover:bg-[#E8EDE3] cursor-pointer'
                  }`}
                >
                  {dayNum}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialSelection?: { id: string; type: 'treatment' | 'package' } | null;
  onBookingSubmitted?: (data: BookingData, refId: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialSelection,
  onBookingSubmitted,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rawIsoDate, setRawIsoDate] = useState<string>('');
  const [selectedLayananList, setSelectedLayananList] = useState<string[]>([]);
  const stepNavRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll indicator tab so active step is visible on mobile
  useEffect(() => {
    if (stepNavRef.current) {
      const activeBtn = stepNavRef.current.querySelector<HTMLElement>(`[data-step="${step}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [step]);

  const [formData, setFormData] = useState<BookingData>({
    nama: '',
    layanan: '',
    jumlahOrang: '1 Orang',
    tipeLokasi: 'Rumah',
    alamatLengkap: '',
    area: 'Kota Banyuwangi',
    hariTanggal: '',
    jamMulai: '11:00 WIB',
    catatanTambahan: '',
  });

  // Helper date formatters
  const formatDateLocale = (isoStr: string) => {
    if (!isoStr) return '';
    try {
      const d = new Date(isoStr + 'T00:00:00');
      if (isNaN(d.getTime())) return isoStr;
      return d.toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return isoStr;
    }
  };

  // Initialize date, step & pre-fill selection on modal open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setErrors({});
      const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];
      setRawIsoDate(tomorrowStr);
      const formattedTomorrow = formatDateLocale(tomorrowStr);

      let initialList: string[] = [];
      let defaultPeople = '1 Orang';

      if (initialSelection) {
        if (initialSelection.type === 'treatment') {
          const t = treatmentsData.find((item) => item.id === initialSelection.id);
          if (t) initialList = [t.name];
        }
      }

      setSelectedLayananList(initialList);
      setFormData({
        nama: '',
        layanan: initialList.join(', '),
        jumlahOrang: defaultPeople,
        tipeLokasi: 'Rumah',
        alamatLengkap: '',
        area: 'Kota Banyuwangi',
        hariTanggal: formattedTomorrow,
        jamMulai: '11:00 WIB',
        catatanTambahan: '',
      });
    }
  }, [isOpen, initialSelection, lang]);

  // Multi-select helpers
  const toggleLayanan = (title: string) => {
    setSelectedLayananList((prev) => {
      const exists = prev.includes(title);
      const updated = exists ? prev.filter((item) => item !== title) : [...prev, title];
      setFormData((p) => ({ ...p, layanan: updated.join(', ') }));
      if (errors.layanan) setErrors((e) => ({ ...e, layanan: '' }));
      return updated;
    });
  };

  const removeLayanan = (title: string) => {
    setSelectedLayananList((prev) => {
      const updated = prev.filter((item) => item !== title);
      setFormData((p) => ({ ...p, layanan: updated.join(', ') }));
      return updated;
    });
  };

  const clearAllLayanan = () => {
    setSelectedLayananList([]);
    setFormData((p) => ({ ...p, layanan: '' }));
  };

  // Validation functions
  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.layanan.trim() && selectedLayananList.length === 0) {
      errs.layanan = lang === 'en' ? 'Treatment selection is required.' : 'Pilihan Perawatan wajib diisi.';
    }
    if (!formData.jumlahOrang.trim()) errs.jumlahOrang = lang === 'en' ? 'Number of guests is required.' : 'Jumlah Orang wajib dipilih.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.tipeLokasi.trim()) errs.tipeLokasi = lang === 'en' ? 'Location type is required.' : 'Tipe Lokasi wajib dipilih.';
    if (!formData.alamatLengkap.trim()) errs.alamatLengkap = lang === 'en' ? 'Full Address / Hotel & Room No is required.' : 'Alamat Lengkap / Nama Hotel & No. Kamar wajib diisi.';
    if (!formData.area.trim()) errs.area = lang === 'en' ? 'Area is required.' : 'Area wajib dipilih.';
    if (!formData.hariTanggal.trim()) errs.hariTanggal = lang === 'en' ? 'Date is required.' : 'Hari & Tanggal wajib diisi.';
    if (!formData.jamMulai.trim()) errs.jamMulai = lang === 'en' ? 'Start time is required.' : 'Jam Mulai wajib dipilih.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.nama.trim()) errs.nama = lang === 'en' ? 'Guest name is required.' : 'Nama Pemesan wajib diisi.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateAll = () => {
    const s1 = validateStep1();
    const s2 = validateStep2();
    return s1 && s2;
  };

  const handleNextStep1 = () => {
    if (validateStep1()) setStep(2);
  };

  const handleNextStep2 = () => {
    if (validateStep2()) setStep(3);
  };

  const handleDateChange = (isoStr: string) => {
    setRawIsoDate(isoStr);
    const formatted = formatDateLocale(isoStr);
    setFormData((prev) => ({ ...prev, hariTanggal: formatted }));
    if (errors.hariTanggal) {
      setErrors((prev) => ({ ...prev, hariTanggal: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    // 1. Create WhatsApp URL with required format
    const waUrl = createWhatsAppBookingUrl(formData);

    // 2. Open WhatsApp URL in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // 3. Generate Reference ID
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refId = `LASTRI-${randomCode}`;

    // 4. Trigger parent confirmation modal
    if (onBookingSubmitted) {
      onBookingSubmitted(formData, refId);
    }
  };

  const allLayananOptions = [
    ...treatmentsData.map((t) => ({ id: t.id, title: t.name, category: 'Treatment' })),
  ];

  const renderFooter = () => {
    if (step === 1) {
      return (
        <div className="flex justify-end w-full">
          <button
            type="button"
            onClick={handleNextStep1}
            className="px-7 py-3 rounded-lg bg-[#364A31] text-white text-sm font-semibold hover:bg-[#263A25] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] min-h-[44px] cursor-pointer"
          >
            <span>{lang === 'en' ? "Next: Location & Time" : "Lanjut: Lokasi & Jadwal"}</span>
          </button>
        </div>
      );
    }
    if (step === 2) {
      return (
        <div className="flex justify-between items-center w-full">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="px-5 py-2.5 rounded-lg border border-[#C7AF90]/60 text-xs font-semibold text-[#534D2B] hover:bg-[#E6E2D3] min-h-[44px] transition-colors cursor-pointer"
          >
            {lang === 'en' ? "Back" : "Kembali"}
          </button>
          <button
            type="button"
            onClick={handleNextStep2}
            className="px-7 py-3 rounded-lg bg-[#364A31] text-white text-sm font-semibold hover:bg-[#263A25] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] min-h-[44px] cursor-pointer"
          >
            <span>{lang === 'en' ? "Next: Guest Info" : "Lanjut: Data Pemesan"}</span>
          </button>
        </div>
      );
    }
    if (step === 3) {
      return (
        <div className="flex justify-between items-center w-full">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="px-5 py-2.5 rounded-lg border border-[#C7AF90]/60 text-xs font-semibold text-[#534D2B] hover:bg-[#E6E2D3] min-h-[44px] transition-colors cursor-pointer"
          >
            {lang === 'en' ? "Back" : "Kembali"}
          </button>
          <button
            type="submit"
            form="booking-form"
            onClick={(e) => {
              e.preventDefault();
              const valid1 = validateStep1();
              const valid2 = validateStep2();
              const valid3 = validateStep3();
              if (valid1 && valid2 && valid3) {
                handleSubmit(e);
              }
            }}
            className="px-8 py-3.5 rounded-lg bg-[#364A31] hover:bg-[#263A25] text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] min-h-[44px] cursor-pointer"
          >
            <span>{lang === 'en' ? "Book via WhatsApp" : "Kirim Reservasi WhatsApp"}</span>
          </button>
        </div>
      );
    }
    return null;
  };

  if (!isOpen) return null;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={lang === 'en' ? "Form Reservation" : "Form Reservasi"}
      subtitle={
        <div ref={stepNavRef} className="flex items-center space-x-2 sm:space-x-3.5 pt-1 overflow-x-auto no-scrollbar scroll-smooth">
          {[
            { num: 1, label: lang === 'en' ? "Ritual & Guests" : "Detail Reservasi" },
            { num: 2, label: lang === 'en' ? "Location & Time" : "Lokasi & Jadwal" },
            { num: 3, label: lang === 'en' ? "Contact & Send" : "Pemesan & WhatsApp" },
          ].map((s, idx) => (
            <React.Fragment key={s.num}>
              <button
                type="button"
                data-step={s.num}
                onClick={() => {
                  if (s.num === 1) {
                    setStep(1);
                  } else if (s.num === 2) {
                    if (validateStep1()) setStep(2);
                  } else if (s.num === 3) {
                    if (validateStep1() && validateStep2()) setStep(3);
                  }
                }}
                className={`flex items-center space-x-1.5 text-xs font-semibold transition-colors cursor-pointer shrink-0 px-2.5 py-1 rounded-full ${
                  step === s.num
                    ? 'bg-[#364A31] text-white shadow-xs'
                    : step > s.num
                    ? 'text-[#364A31] hover:bg-[#E6E2D3]'
                    : 'text-[#756B5C] hover:bg-[#E6E2D3]/50'
                }`}
              >
                <span
                  className={`w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all ${
                    step === s.num
                      ? 'bg-white text-[#364A31] ring-2 ring-white/50 shadow-xs'
                      : step > s.num
                      ? 'bg-[#364A31] text-white'
                      : 'bg-[#C7AF90]/40 text-[#534D2B]'
                  }`}
                >
                  {s.num}
                </span>
                <span className="font-sans font-bold text-xs whitespace-nowrap">{s.label}</span>
              </button>
              {idx < 2 && (
                <div
                  className={`w-3 sm:w-5 h-0.5 transition-colors ${
                    step > idx + 1 ? 'bg-[#364A31]' : 'bg-[#C7AF90]/40'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      }
      footer={renderFooter()}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-4 text-[#1B1B1B] -mt-2 sm:-mt-4">
        <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
          {/* STEP 1: DETAIL RESERVASI (Layanan & Jumlah Orang) */}
          {step === 1 && (
            <div className="space-y-4">
              {/* Pilihan Perawatan (Multi-Select) */}
              <div className="space-y-2.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                  {lang === 'en' ? "Treatment Selection *" : "Pilihan Perawatan (Bisa Lebih dari 1) *"}
                </label>

                {/* Selected Treatments Badges + Clear All Button */}
                {selectedLayananList.length > 0 && (
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedLayananList.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center space-x-1.5 bg-[#E6E2D3] border border-[#C7AF90] text-[#302310] px-2.5 py-0.5 rounded-full shadow-xs"
                        >
                          <span className="text-xs font-bold text-[#302310]">{item}</span>
                          <button
                            type="button"
                            onClick={() => removeLayanan(item)}
                            className="w-3.5 h-3.5 rounded-full bg-[#364A31]/15 hover:bg-[#364A31] hover:text-white flex items-center justify-center text-[#302310] text-xs leading-none transition-colors ml-0.5 cursor-pointer"
                            title={lang === 'en' ? `Remove ${item}` : `Hapus ${item}`}
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={clearAllLayanan}
                      className="text-xs text-[#364A31] hover:text-[#263A25] font-bold hover:underline shrink-0 ml-auto cursor-pointer"
                    >
                      <span>{lang === 'en' ? "Clear All" : "Hapus Semua"}</span>
                    </button>
                  </div>
                )}

                {/* Multi-Select Options Grid (Direct cards without outer container box) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[280px] sm:max-h-[295px] overflow-y-auto p-1 pr-2">
                  {allLayananOptions.map((item) => {
                    const isSelected = selectedLayananList.includes(item.title);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleLayanan(item.title)}
                        className={`p-3 sm:p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between space-x-2 ${
                          isSelected
                            ? 'bg-[#E6E2D3] border-[#364A31] shadow-xs'
                            : 'bg-white border-[#C7AF90]/40 hover:border-[#364A31]/50 shadow-xs'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold uppercase text-[#534D2B] tracking-wider block">
                            {item.category}
                          </span>
                          <span className="font-serif text-sm sm:text-base font-bold text-[#302310]">
                            {item.title}
                          </span>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                            isSelected
                              ? 'bg-[#364A31] border-[#364A31] text-white'
                              : 'border-[#C7AF90]'
                          }`}
                        >
                          {isSelected && <span className="text-[10px] font-bold leading-none">✓</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {errors.layanan && (
                  <p className="text-xs sm:text-sm text-red-600 mt-1">
                    <span>{errors.layanan}</span>
                  </p>
                )}
              </div>

              {/* Jumlah Orang */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                  {lang === 'en' ? "Number of People *" : "Jumlah Orang *"}
                </label>
                <div className="grid grid-cols-3 gap-2.5 text-sm sm:text-base">
                  {[
                    { val: '1 Orang', label: lang === 'en' ? '1 Person' : '1 Orang' },
                    { val: '2 Orang', label: lang === 'en' ? '2 People' : '2 Orang' },
                    { val: '3+ Orang', label: lang === 'en' ? '3+ People' : '3+ Orang' },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => {
                        setFormData((p) => ({ ...p, jumlahOrang: item.val }));
                        if (errors.jumlahOrang) setErrors((prev) => ({ ...prev, jumlahOrang: '' }));
                      }}
                      className={`py-3 px-2 rounded-xl border text-center transition-all min-h-[44px] cursor-pointer font-bold ${
                        formData.jumlahOrang === item.val
                          ? 'bg-[#364A31] border-[#364A31] text-white shadow-xs'
                          : 'bg-white border-[#C7AF90]/50 text-[#534D2B] hover:border-[#364A31]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                {errors.jumlahOrang && (
                  <p className="text-xs text-red-600 mt-1">
                    <span>{errors.jumlahOrang}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 2: LOKASI LAYANAN & JADWAL */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Tipe Lokasi */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                    {lang === 'en' ? "Location Type *" : "Tipe Lokasi *"}
                  </label>
                  <CustomSelect
                    value={formData.tipeLokasi}
                    onChange={(val) => {
                      setFormData((p) => ({ ...p, tipeLokasi: val }));
                      if (errors.tipeLokasi) setErrors((prev) => ({ ...prev, tipeLokasi: '' }));
                    }}
                    options={[
                      { value: 'Rumah', label: lang === 'en' ? 'Private Residence' : 'Rumah Pribadi' },
                      { value: 'Hotel', label: lang === 'en' ? 'Hotel / Resort' : 'Hotel / Resort' },
                      { value: 'Vila', label: lang === 'en' ? 'Private Villa' : 'Vila Pribadi' },
                      { value: 'Lainnya', label: lang === 'en' ? 'Other Location' : 'Lokasi Lainnya' },
                    ]}
                    error={!!errors.tipeLokasi}
                  />
                  {errors.tipeLokasi && (
                    <p className="text-xs text-red-600 mt-1">
                      <span>{errors.tipeLokasi}</span>
                    </p>
                  )}
                </div>

                {/* Area */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                    {lang === 'en' ? "Area Coverage *" : "Area Layanan *" }
                  </label>
                  <CustomSelect
                    value={formData.area}
                    onChange={(val) => {
                      setFormData((p) => ({ ...p, area: val }));
                      if (errors.area) setErrors((prev) => ({ ...prev, area: '' }));
                    }}
                    options={[
                      { value: 'Kota Banyuwangi', label: 'Kota Banyuwangi' },
                      { value: 'Klatak', label: 'Klatak' },
                      { value: 'Giri', label: 'Giri' },
                      { value: 'Glagah', label: 'Glagah' },
                      { value: 'Licin', label: 'Licin' },
                      { value: 'Kabat', label: 'Kabat' },
                      { value: 'Rogojampi', label: 'Rogojampi' },
                      { value: 'Opsi Lainnya', label: lang === 'en' ? 'Other Area' : 'Opsi Lainnya' },
                    ]}
                    error={!!errors.area}
                  />
                  {errors.area && (
                    <p className="text-xs text-red-600 mt-1">
                      <span>{errors.area}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Alamat Lengkap */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                  {lang === 'en' ? "Full Address / Hotel & Room No. *" : "Alamat Lengkap / Nama Hotel & No. Kamar *"}
                </label>
                <textarea
                  rows={2}
                  placeholder={lang === 'en' ? "e.g., Hotel Villa Soegondo Room 204, Jl. Ahmad Yani No. 45" : "contoh: Hotel Villa Soegondo No. 204 / Jl. Ahmad Yani No. 45, Banyuwangi"}
                  value={formData.alamatLengkap}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, alamatLengkap: e.target.value }));
                    if (errors.alamatLengkap) setErrors((prev) => ({ ...prev, alamatLengkap: '' }));
                  }}
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-[#C7AF90]/60 text-sm sm:text-base font-semibold text-[#302310] shadow-xs focus:outline-none focus:ring-4 focus:ring-[#364A31]/15 focus:border-[#364A31] transition-all duration-200"
                />
                {errors.alamatLengkap && (
                  <p className="text-xs text-red-600 mt-1">
                    <span>{errors.alamatLengkap}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Hari & Tanggal */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                    {lang === 'en' ? "Date *" : "Hari & Tanggal *"}
                  </label>
                  <CustomDatePicker
                    position="up"
                    value={rawIsoDate}
                    formattedText={formData.hariTanggal}
                    lang={lang}
                    onChange={(isoDate, formatted) => {
                      setRawIsoDate(isoDate);
                      setFormData((p) => ({ ...p, hariTanggal: formatted }));
                      if (errors.hariTanggal) setErrors((prev) => ({ ...prev, hariTanggal: '' }));
                    }}
                    error={!!errors.hariTanggal}
                  />
                  {errors.hariTanggal && (
                    <p className="text-xs text-red-600 mt-1">
                      <span>{errors.hariTanggal}</span>
                    </p>
                  )}
                </div>

                {/* Jam Mulai */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                    {lang === 'en' ? "Start Time *" : "Jam Mulai *"}
                  </label>
                  <CustomSelect
                    position="up"
                    value={formData.jamMulai}
                    onChange={(val) => {
                      setFormData((p) => ({ ...p, jamMulai: val }));
                      if (errors.jamMulai) setErrors((prev) => ({ ...prev, jamMulai: '' }));
                    }}
                    options={[
                      '08:00 WIB', '09:00 WIB', '10:00 WIB', '11:00 WIB',
                      '12:00 WIB', '13:00 WIB', '14:00 WIB', '15:00 WIB',
                      '16:00 WIB', '17:00 WIB', '18:00 WIB', '19:00 WIB',
                      '20:00 WIB', '21:00 WIB', '22:00 WIB'
                    ].map((t) => ({
                      value: t,
                      label: t,
                    }))}
                    error={!!errors.jamMulai}
                  />
                  {errors.jamMulai && (
                    <p className="text-xs text-red-600 mt-1">
                      <span>{errors.jamMulai}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DATA PEMESAN & WHATSAPP SUBMIT */}
          {step === 3 && (
            <div className="space-y-5">
              {/* Nama Pemesan */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                  {lang === 'en' ? "Guest Full Name" : "Nama Pemesan"}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'en' ? "e.g., Sarah Jenkins" : "contoh: Siti Rahma"}
                  value={formData.nama}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, nama: e.target.value }));
                    if (errors.nama) setErrors((prev) => ({ ...prev, nama: '' }));
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#C7AF90]/60 text-base font-semibold text-[#302310] shadow-xs focus:outline-none focus:ring-4 focus:ring-[#364A31]/15 focus:border-[#364A31] transition-all duration-200 min-h-[46px]"
                />
                {errors.nama && (
                  <p className="text-xs text-red-600 mt-1">
                    <span>{errors.nama}</span>
                  </p>
                )}
              </div>

              {/* Catatan Tambahan */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#1B1B1B] uppercase tracking-wider block">
                  {lang === 'en' ? "Special Requests (Optional)" : "Catatan Tambahan (Opsional)"}
                </label>
                <textarea
                  rows={2}
                  placeholder={lang === 'en' ? "e.g., Deep pressure on shoulders, allergic to lavender oil" : "contoh: Pijatan kencang di bahu, alergi minyak lavender"}
                  value={formData.catatanTambahan || ''}
                  onChange={(e) => setFormData((p) => ({ ...p, catatanTambahan: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#C7AF90]/60 text-base font-semibold text-[#302310] shadow-xs focus:outline-none focus:ring-4 focus:ring-[#364A31]/15 focus:border-[#364A31] transition-all duration-200"
                />
              </div>
            </div>
          )}
        </form>
      </div>
    </BaseModal>
  );
};

'use client';

import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS } from '../data/spaData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
  lang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#F8F5EE] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-[#364A31] bg-[#F0E7D8] px-3.5 py-1.5 rounded-full border border-[#C7AF90]/50 inline-block">
            {lang === 'en' ? "Got Questions?" : "Pusat Bantuan"}
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl text-[#302310] font-semibold tracking-tight">
            {lang === 'en' ? "Frequently Asked Questions" : "Pertanyaan Umum (FAQ)"}
          </h2>
          <p className="text-lg sm:text-base text-[#534D2B] font-medium leading-[1.7]">
            {lang === 'en'
              ? "General information and frequently asked questions regarding Lastri Spa Home Service."
              : "Informasi dan pertanyaan umum terkait Lastri Spa Home Service."}
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id}
                className="bg-[#F0E7D8] rounded-xl sm:rounded-2xl border border-[#C7AF90]/50 shadow-[0_2px_12px_rgba(48,35,16,0.04)] overflow-hidden transition-all duration-300 hover:border-[#364A31]/40"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between space-x-4 focus:outline-none min-h-[44px] cursor-pointer"
                >
                  <span className="font-sans text-base sm:text-base text-[#302310] font-bold leading-snug">
                    {faq.question[lang]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-[#364A31] text-white shadow-xs' : 'bg-[#E6E2D3] text-[#364A31] border border-[#C7AF90]/50'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-[15px] text-[#534D2B] font-medium leading-[1.75] border-t border-[#C7AF90]/40 bg-[#F8F5EE]/70">
                        {faq.answer[lang]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

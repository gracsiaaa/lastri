'use client';

import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS } from '../data/spaData';
import { ChevronDown } from 'lucide-react';
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
    <section id="faq" className="py-24 sm:py-32 bg-[#F7FAF7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-sans text-3xl sm:text-5xl text-[#1B1B1B] font-semibold tracking-tight">
            {lang === 'en' ? "Frequently Asked Questions" : "Pertanyaan Umum (FAQ)"}
          </h2>
          <p className="text-sm sm:text-base text-[#3A3A3A] font-normal">
            {lang === 'en'
              ? "General information and frequently asked questions regarding Lastri Spa Home Service."
              : "Informasi dan pertanyaan umum terkait Lastri Spa Home Service."}
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id}
                className="bg-[#E8EDE3] rounded-xl sm:rounded-2xl border border-[#1B1B1B]/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 text-left flex items-center justify-between space-x-4 focus:outline-none min-h-[44px]"
                >
                  <span className="font-sans text-sm sm:text-base text-[#1B1B1B] font-semibold leading-snug">
                    {faq.question[lang]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-[#9CAF88] text-white' : 'bg-[#2D6A4F]/15 text-[#2D6A4F]'
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
                      <div className="px-4 sm:px-5 py-3.5 sm:py-4 text-[13px] sm:text-base text-[#3A3A3A] font-normal leading-relaxed border-t border-[#1B1B1B]/10">
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

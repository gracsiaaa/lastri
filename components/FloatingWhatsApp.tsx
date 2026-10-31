'use client';

import React from 'react';
import { DIRECT_WA_URL } from '../data/spaData';
import { MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const directWaUrl = DIRECT_WA_URL;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      <span className="hidden sm:inline-block bg-[#1B1B1B]/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg border border-white/10">
        {lang === 'en' ? "Chat with Lastri Spa" : "Chat dengan Lastri Spa"}
      </span>

      <a
        href={directWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge Inquiry"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 animate-pulse-subtle min-w-[44px] min-h-[44px]"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};

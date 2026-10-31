'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: string;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  maxWidth = 'max-w-3xl',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1B1B1B]/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${maxWidth} max-h-[92vh] sm:max-h-[88vh] bg-[#FFFFFF] text-[#1B1B1B] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col z-10 border border-[#1B1B1B]/10 overflow-hidden`}
          >
            {(title || subtitle) ? (
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#1B1B1B]/10 gap-4 shrink-0 rounded-t-3xl sm:rounded-t-3xl">
                <div className="flex-1 min-w-0">
                  {title && (
                    <h3 className="font-sans text-xl sm:text-2xl text-[#1B1B1B] font-semibold leading-tight truncate">
                      {title}
                    </h3>
                  )}
                  {subtitle && (
                    <div className="mt-1.5">
                      {typeof subtitle === 'string' ? (
                        <p className="text-xs sm:text-sm text-[#2D6A4F] font-medium tracking-wide">
                          {subtitle}
                        </p>
                      ) : (
                        subtitle
                      )}
                    </div>
                  )}
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-2.5 rounded-full text-[#6B6B6B] hover:text-[#1B1B1B] hover:bg-[#E8EDE3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9CAF88] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full text-[#6B6B6B] hover:text-[#1B1B1B] bg-[#FFFFFF]/80 hover:bg-[#E8EDE3] backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#9CAF88] min-w-[44px] min-h-[44px] flex items-center justify-center border border-[#1B1B1B]/10 shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
              {children}
            </div>

            {footer && (
              <div className="sticky bottom-0 z-20 px-6 sm:px-8 py-4 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#1B1B1B]/10 shrink-0 rounded-b-3xl sm:rounded-b-3xl">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

'use client';

import React, { useRef } from 'react';
import { Language } from '../types';
import { reviewsData } from '../data/reviews';
import { Star, ChevronLeft, ChevronRight, Quote, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewsProps {
  lang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B1B1B] font-semibold leading-tight">
              {lang === 'en' ? "Stories of Pure Relaxation" : "Pengalaman Relaksasi Autentik"}
            </h2>
            <p className="text-base sm:text-lg text-[#9CAF88] font-medium italic">
              "Cerita Relaksasi Dari Tamu Kami"
            </p>
          </div>

          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full border border-[#1B1B1B]/10 bg-[#E8EDE3] text-[#1B1B1B] hover:bg-[#9CAF88] hover:text-white hover:border-[#9CAF88] transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full border border-[#1B1B1B]/10 bg-[#E8EDE3] text-[#1B1B1B] hover:bg-[#9CAF88] hover:text-white hover:border-[#9CAF88] transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 no-scrollbar scroll-smooth"
        >
          {reviewsData.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="snap-start flex-shrink-0 w-[88%] sm:w-[350px] lg:w-[calc(33.333%-16px)] bg-[#E8EDE3] rounded-2xl p-6 sm:p-7 border border-[#1B1B1B]/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 text-[#9CAF88] fill-[#9CAF88]"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-medium tracking-wide text-[#2D6A4F] bg-[#2D6A4F]/15 px-3 py-1 rounded-full border border-[#2D6A4F]/20 inline-block">
                    {review.treatmentName}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-[#2D6A4F]/20 absolute -top-2 -left-3.5 rotate-180 -z-0" />
                  <p className="text-sm text-[#6B6B6B] leading-relaxed italic font-light relative z-10 pl-3">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E0E0E0] flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="relative flex-shrink-0">
                    <img
                      src={review.avatar || '/spa1.jpg'}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/spa1.jpg';
                      }}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#2D6A4F]/20 shadow-xs"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-sans text-base text-[#1B1B1B] font-semibold leading-snug truncate">
                      {review.name}
                    </h4>
                    <span className="text-xs text-[#6B6B6B] block truncate">
                      {review.roleOrLocation}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-[#6B6B6B] flex-shrink-0 flex items-center space-x-1 bg-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#E0E0E0]/60">
                  <Calendar className="w-3 h-3 text-[#2D6A4F]" />
                  <span>{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


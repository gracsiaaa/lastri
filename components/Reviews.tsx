'use client';

import React, { useRef, useEffect } from 'react';
import { Language } from '../types';
import { reviewsData } from '../data/reviews';
import { Star, ChevronLeft, ChevronRight, Quote, Clock } from 'lucide-react';

interface ReviewsProps {
  lang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef<boolean>(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Triple data list for seamless infinite loop scroll
  const loopedReviews = [...reviewsData, ...reviewsData, ...reviewsData];

  // Manual scroll with buttons
  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    const step = 380;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });

    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2000);
  };

  // Infinite continuous loop effect using requestAnimationFrame
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;

    const tick = () => {
      if (!isInteractingRef.current) {
        // One-third width is the exact length of one full set of items
        const singleSetWidth = el.scrollWidth / 3;

        // When scrolled past the first set or before it, wrap around seamlessly
        if (el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += singleSetWidth;
        }

        // Constant smooth drift (0.75px per frame)
        el.scrollLeft += 0.75;
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B1B1B] font-semibold leading-tight">
              {lang === 'en' ? "Stories of Pure Relaxation" : "Pengalaman Relaksasi Autentik"}
            </h2>
            <p className="text-base sm:text-lg text-[#9CAF88] font-medium italic">
              {lang === 'en' ? '"Words of Relaxation from Our Guests"' : '"Cerita Relaksasi Dari Tamu Kami"'}
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
          onMouseEnter={() => { isInteractingRef.current = true; }}
          onMouseLeave={() => { isInteractingRef.current = false; }}
          onTouchStart={() => { isInteractingRef.current = true; }}
          onTouchEnd={() => {
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = setTimeout(() => {
              isInteractingRef.current = false;
            }, 1500);
          }}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar"
        >
          {loopedReviews.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="flex-shrink-0 w-[88%] sm:w-[350px] lg:w-[calc(33.333%-16px)] bg-[#E8EDE3] rounded-2xl p-6 sm:p-7 border border-[#1B1B1B]/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 text-[#9CAF88] fill-[#9CAF88]"
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-[#2D6A4F]/20 absolute -top-2 -left-3.5 rotate-180 -z-0" />
                  <p className="text-[14px] sm:text-[15px] text-[#333333] leading-relaxed italic font-normal relative z-10 pl-3">
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
                    <span className="text-xs text-[#4A4A4A] font-medium flex items-center space-x-1 truncate mt-0.5">
                      <Clock className="w-3 h-3 text-[#2D6A4F] shrink-0" />
                      <span>{review.timeAgo}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


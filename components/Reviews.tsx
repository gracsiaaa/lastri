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

  // Triple items for seamless continuous marquee loop
  const loopedReviews = [...reviewsData, ...reviewsData, ...reviewsData];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.6;

    const step = () => {
      if (!isInteractingRef.current && el) {
        el.scrollLeft += speed;
        const oneThird = el.scrollWidth / 3;
        if (el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneThird;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#F0E7D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#364A31] bg-[#E6E2D3] px-3.5 py-1.5 rounded-full border border-[#C7AF90]/50 inline-block">
              {lang === 'en' ? "Guest Experiences" : "Testimoni Tamu"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302310] font-semibold leading-tight">
              {lang === 'en' ? "Stories of Pure Relaxation" : "Pengalaman Relaksasi Autentik"}
            </h2>
            <p className="text-base sm:text-lg text-[#534D2B] font-medium italic">
              {lang === 'en' ? '"Words of Relaxation from Our Guests"' : '"Cerita Relaksasi Dari Tamu Kami"'}
            </p>
          </div>

          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full border border-[#C7AF90] bg-[#F8F5EE] text-[#302310] hover:bg-[#364A31] hover:text-white hover:border-[#364A31] transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full border border-[#C7AF90] bg-[#F8F5EE] text-[#302310] hover:bg-[#364A31] hover:text-white hover:border-[#364A31] transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
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
              className="flex-shrink-0 w-[88%] sm:w-[350px] lg:w-[calc(33.333%-16px)] bg-[#F8F5EE] rounded-2xl p-6 sm:p-7 border border-[#C7AF90]/50 shadow-[0_4px_16px_rgba(48,35,16,0.06)] hover:shadow-xl hover:border-[#364A31]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 text-[#A29672] fill-[#A29672]"
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-[#C7AF90]/40 absolute -top-2 -left-3.5 rotate-180 -z-0" />
                  <p className="text-[14px] sm:text-[15px] text-[#534D2B] leading-[1.7] italic font-medium relative z-10 pl-3">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#C7AF90]/40 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="font-sans text-base text-[#302310] font-bold leading-snug truncate">
                    {review.name}
                  </h4>
                  <span className="text-xs text-[#756B5C] font-semibold flex items-center space-x-1 truncate mt-0.5">
                    <Clock className="w-3 h-3 text-[#364A31] shrink-0" />
                    <span>{review.timeAgo}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

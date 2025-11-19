"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Jace has been a game-changer for our business operations. The platform is intuitive and has become an essential tool for our daily operations. I highly recommend it to any business leader looking to enhance their productivity.",
    name: "Stacey Helbig",
    title: "Chief Operating Officer @ Fire Department Coffee",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/07e4863f-381a-459d-844d-47b586e5b3b1-jace-ai/assets/images/stacey-3.jpeg?",
  },
  {
    id: 2,
    quote:
      "The AI email drafts feature has saved me countless hours. I can now focus on strategy rather than getting bogged down in email composition.",
    name: "Gini Dietrich",
    title: "CEO & Founder",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1754078465360-sdp7homjvwd.png",
  },
  {
    id: 3,
    quote:
      "I was skeptical about AI, but Proactiv exceeded all my expectations. It's truly indispensable for my daily routine.",
    name: "Miguel Alvarez",
    title: "Digital Marketing Lead",
    avatar: "https://i.pravatar.cc/150?img=22",
  },
  {
    id: 4,
    quote:
      "Adopting Proactiv accelerated our team's onboarding and cut our email volume by half. Can't recommend it enough!",
    name: "Priya Patel",
    title: "Head of People Ops",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
  {
    id: 5,
    quote:
      "From setup to daily use, Proactiv has made my workflow seamless. The time saved is invaluable.",
    name: "Carlo Rossi",
    title: "Product Lead",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
];

export const AutoSwipingTestimonials = () => {
  const AUTOPLAY_DELAY = 5000;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay with pause on hover/focus
  useEffect(() => {
    if (!emblaApi) return;
    if (isHovered) return;
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const handlePrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const handleNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const handleDot = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  return (
    <section className="w-full bg-gradient-to-b from-[#fff4e6] to-[#ffe6cc] py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div
          className="relative w-full max-w-[700px] mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] min-w-0 px-2 sm:px-6 lg:px-8 transition-all duration-500"
                >
                  <div
                    className="bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.10)] rounded-2xl p-8 md:p-12 max-w-[700px] mx-auto flex flex-col items-center"
                    style={{ minHeight: 400 }}
                  >
                    <svg
                      width="40"
                      height="32"
                      viewBox="0 0 40 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-6"
                    >
                      <path
                        d="M11.668 31.0609C9.52984 31.0609 7.6417 30.5186 6.00356 29.4339C4.36542 28.3492 3.0538 26.8532 2.06871 24.946C1.08361 23.0388 0.591064 20.8529 0.591064 18.3883C0.591064 13.5478 2.02984 9.42906 4.90739 6.03211C7.79207 2.62791 11.5312 0.388306 16.1249 0.388306V7.47648C13.2474 7.69733 11.1249 8.65349 9.75739 10.3449C8.38984 12.0291 7.70607 14.215 7.70607 16.9022H13.8829V31.0609H11.668Z"
                        fill="#E6D7FF"
                      />
                      <path
                        d="M34.553 31.0609C32.4149 31.0609 30.5267 30.5186 28.8886 29.4339C27.2505 28.3492 25.9388 26.8532 24.9537 24.946C23.9686 23.0388 23.4761 20.8529 23.4761 18.3883C23.4761 13.5478 24.9149 9.42906 27.7924 6.03211C30.6771 2.62791 34.4162 0.388306 39.0099 0.388306V7.47648C36.1324 7.69733 34.0099 8.65349 32.6424 10.3449C31.2749 12.0291 30.5911 14.215 30.5911 16.9022H36.7679V31.0609H34.553Z"
                        fill="#E6D7FF"
                      />
                    </svg>
                    <blockquote className="text-2xl md:text-3xl font-medium text-[#1a1a1a] leading-snug text-center mb-8">
                      {t.quote}
                    </blockquote>
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-lg font-semibold text-primary-black">
                      {t.name}
                    </div>
                    <div className="text-gray-medium text-sm mt-1">
                      {t.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Swipe left/right arrows (in future: hidden if only 1 slide) */}
          {TESTIMONIALS.length > 1 && (
            <>
              <button
                aria-label="Previous testimonial"
                onClick={handlePrev}
                className="absolute left-[-28px] top-1/2 -translate-y-1/2 bg-white/80 border shadow-md rounded-full p-2 backdrop-blur z-10 hover:scale-110 transition"
              >
                <ChevronLeft className="h-6 w-6 text-gray-500" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={handleNext}
                className="absolute right-[-28px] top-1/2 -translate-y-1/2 bg-white/80 border shadow-md rounded-full p-2 backdrop-blur z-10 hover:scale-110 transition"
              >
                <ChevronRight className="h-6 w-6 text-gray-500" />
              </button>
            </>
          )}
        </div>
        {/* Dots Progress Indicators (future support for multi-slide) */}
        {TESTIMONIALS.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => handleDot(i)}
                className={`w-3 h-3 rounded-full border border-purple-200 transition-all duration-300 focus:outline-none ${
                  i === selectedIndex
                    ? 'bg-purple-500 scale-125'
                    : 'bg-white/60 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
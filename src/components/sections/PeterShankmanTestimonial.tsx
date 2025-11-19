"use client";

import React from 'react';
import Image from 'next/image';
import { Star, StarIcon } from 'lucide-react';

export const TestimonialCard = ({ 
  avatarUrl = "/api/placeholder/120/120",
  name = "Peter Shankman",
  title = "Best-Selling Author + ADHD Superpower Advocate",
  rating = 5,
  testimonial = "If you're not using PodPitch, you're missing out big time."
}) => {
  return (
    <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-br from-[#f8e6f0] to-[#e6d7ff] p-8 font-['Inter'] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
        <div className="relative">
          <div className="h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image 
              src={avatarUrl}
              alt={`${name} avatar`}
              width={120}
              height={120}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="mb-3 flex justify-center gap-1 md:justify-start">
            {Array.from({ length: rating }).map((_, index) => (
              <Star
                key={index}
                className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24]"
              />
            ))}
          </div>
          
          <blockquote className="mb-4">
            <p className="text-2xl font-medium leading-relaxed text-[#1a1a1a]">
              "{testimonial}"
            </p>
          </blockquote>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">
              {name}
            </h3>
            <p className="text-sm text-[#6b7280]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <TestimonialCard />
      </div>
    </section>
  );
}
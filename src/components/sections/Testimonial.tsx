import Image from "next/image";
import { Linkedin } from "lucide-react";
import React from 'react';

const QuotationMarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="32"
    viewBox="0 0 40 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
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
);

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff4e6] to-[#ffe6cc] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="flex justify-center lg:col-span-1">
            <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/07e4863f-381a-459d-844d-47b586e5b3b1-jace-ai/assets/images/stacey-3.jpeg?"
                alt="Stacey Helbig"
                fill
                className="rounded-2xl border-8 border-white object-cover shadow-xl"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="mb-6">
              <QuotationMarkIcon />
            </div>
            <blockquote className="text-2xl font-medium leading-snug text-primary-black md:text-[1.70rem] md:leading-snug">
              <p>
                Jace has been a game-changer for our business operations. The
                platform is intuitive and has become an essential tool for our
                daily operations. I highly recommend it to any business leader
                looking to enhance their productivity.
              </p>
            </blockquote>
            <div className="my-8 border-b border-dashed border-gray-300"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-primary-black">Stacey Helbig</p>
                <p className="text-sm text-gray-medium">
                  Chief Operating Officer @ Fire Department Coffee
                </p>
              </div>
              <a
                href="#"
                aria-label="Stacey Helbig's LinkedIn profile"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

"use client";

import { useState, useEffect } from 'react';
import { Check, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'without' | 'with'>('without');
  const [currentIntegration, setCurrentIntegration] = useState(0);

  const integrations = [
    { name: 'Gmail', logo: 'https://logo.clearbit.com/gmail.com' },
    { name: 'Outlook', logo: 'https://logo.clearbit.com/outlook.com' },
    { name: 'Muck Rack', logo: 'https://logo.clearbit.com/muckrack.com' },
    { name: 'Cision', logo: 'https://logo.clearbit.com/cision.com' },
    { name: 'Prowly', logo: 'https://logo.clearbit.com/prowly.com' },
    { name: 'Qwoted', logo: 'https://logo.clearbit.com/qwoted.com' },
    { name: 'Hubspot', logo: 'https://logo.clearbit.com/hubspot.com' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIntegration((prev) => (prev + 1) % integrations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gradient-pink-start to-gradient-pink-end overflow-hidden pt-24 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left">
            {/* Rotating Integration Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-black shadow-sm">
                <span className="text-gray-700 whitespace-nowrap">Links seamlessly with </span>
                
                <div className="relative inline-block ml-2 h-6 min-w-[120px]">
                  {integrations.map((integration, index) => (
                    <div
                      key={integration.name}
                      className={`absolute inset-0 flex items-center gap-1 transition-opacity duration-500 ${
                        index === currentIntegration ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={integration.logo}
                        alt={integration.name}
                        width={18}
                        height={14}
                        className="inline-block rounded-sm"
                        unoptimized
                        priority
                      />
                      <span className="font-semibold text-sm whitespace-nowrap">
                        {integration.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-black lg:leading-[1.1]">
              Do PR in 10X less time
              <br />
              <span className="text-purple-600">with PR Hero</span>
            </h1>

            {/* Star Rating & Social Proof */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-primary-black">
                3,000+ PR Agencies & Brands
              </span>
            </div>

            {/* Supporting Subheadline */}
            <p className="mt-6 text-lg text-gray-medium leading-relaxed !whitespace-pre-line !whitespace-pre-line">Make media lists. Pitch more journalists, podcasts, and newsletters than any other PR software¹. Get higher reply rates than Muck Rack or Cision, guaranteed.
              <span className="text-sm text-gray-500 block mt-2 !opacity-55">
                ¹ PR Hero has bounce-free contact info for over 250,000 active journalists, 3.5 million podcasts, and 350,000 Substacks.
              </span>
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-end">
              {/* Handwriting annotation with Starbucks logo directly above primary CTA */}
              <div className="flex flex-col">
                <div className="hidden sm:flex items-center gap-2 mb-1" style={{ transform: 'rotate(-2deg)' }}>
                  <Image
                    src="https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/6716aa7e004828262fc20e74_starbucks-p-500.png"
                    alt="Starbucks"
                    width={24}
                    height={24}
                    className="inline-block"
                    unoptimized
                  />
                  <p className="text-2xl font-bold text-[#d946ef]" style={{ fontFamily: 'var(--font-caveat)' }}>
                    Get Free Coffee
                  </p>
                </div>
                <Button
                  size="lg"
                  className="h-12 cursor-pointer bg-primary-black px-10 text-base text-primary-white hover:bg-primary-black/90"
                >
                  See 500 Free Pitches
                </Button>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="h-12 cursor-pointer border border-black/10 bg-white/50 px-6 text-base text-primary-black hover:bg-white/70 hover:text-primary-black"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch a Demo
              </Button>
            </div>

            {/* Reassurance Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-medium">
              {[
                { icon: Check, text: '30 days risk free' },
                { icon: Check, text: 'Takes 5 minutes' },
                { icon: Check, text: 'Get personalized onboarding' }
              ].map((item, index) =>
              <div key={index} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-purple-600" />
                  <span>{item.text}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Tabs with Manual Switching - Wrapped in Card */}
          <div className="order-1 lg:order-2 relative">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-card p-6">
              {/* Tab Buttons */}
              <div className="flex gap-2 mb-6 justify-center">
                <button
                  onClick={() => setActiveTab('without')}
                  className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    activeTab === 'without'
                      ? 'bg-primary-black text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Without PR Hero
                </button>
                <button
                  onClick={() => setActiveTab('with')}
                  className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    activeTab === 'with'
                      ? 'bg-primary-black text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  With PR Hero
                </button>
              </div>

              <div className="relative z-10">
                {/* Without Product Content */}
                {activeTab === 'without' && (
                  <div className="animate-in fade-in duration-300">
                    {/* Numbered Steps - Cute Style - 2 Column Grid */}
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {[
                        "Check your CRM",
                        "Find out the reporter changed jobs",
                        "Find the next reporter's email",
                        "Research them",
                        "Write pitch",
                        "Manually send follow ups"
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl p-2.5 shadow-sm">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white font-semibold flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                          <div className="text-gray-800 font-medium text-xs leading-tight">
                            {step}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mock Email Container */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-white/60 to-white/40 p-6 lg:p-8 shadow-xl backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="text-sm font-medium text-gray-medium mb-2">
                          Draft email to TechCrunch reporter
                        </div>
                        <div className="space-y-3">
                          <div className="rounded-lg bg-white/80 p-4">
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-xs font-medium text-gray-medium">
                                To: sarah.chen@techcrunch.com
                              </span>
                              <span className="text-xs text-red-500 animate-pulse">
                                Writing manually...
                              </span>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="font-medium text-primary-black">
                                Subject: Exclusive: AI startup raises $15M to revolutionize B2B sales
                              </div>
                              <div className="text-gray-medium leading-relaxed">
                                Hi Sarah,
                              </div>
                              <div className="text-gray-400 leading-relaxed">
                                [Writing draft...] I wanted to reach out regarding an interesting story. Our startup has some news that might be relevant to your coverage. We recently closed funding and have seen significant growth in the AI space. Would you be interested in learning more?
                              </div>
                            </div>
                          </div>
                          
                          {/* Stats comparison */}
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary-black">45 mins</div>
                              <div className="text-gray-medium">Draft time</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary-black">12%</div>
                              <div className="text-gray-medium">Response rate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* With Product Content */}
                {activeTab === 'with' && (
                  <div className="animate-in fade-in duration-300">
                    {/* Mock Email Container */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-white/60 to-white/40 p-6 lg:p-8 shadow-xl backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="text-sm font-medium text-gray-medium mb-2">
                          Draft email to TechCrunch reporter
                        </div>
                        <div className="space-y-3">
                          <div className="rounded-lg bg-white/80 p-4">
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-xs font-medium text-gray-medium">
                                To: sarah.chen@techcrunch.com
                              </span>
                              <span className="text-xs text-green-600 flex items-center gap-1">
                                <Check className="h-3 w-3" />
                                Ready to send
                              </span>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="font-medium text-primary-black">
                                Subject: Exclusive: AI startup raises $15M to revolutionize B2B sales
                              </div>
                              <div className="text-gray-medium leading-relaxed">
                                Hi Sarah,
                              </div>
                              <div className="text-gray-medium leading-relaxed">
                                I hope this finds you well. I'm reaching out because we've just raised a $15M Series A to expand our AI-powered B2B sales platform that analyzes prospect emails in real-time and suggests personalized follow-ups. Our 200+ customers including Notion and Figma have seen 3x faster deal cycles and 40% higher conversion rates. Our founder, previously VP Sales at Gong, is available for an exclusive interview. Would love to share the news exclusively with TechCrunch readers.
                              </div>
                            </div>
                          </div>
                          
                          {/* Stats comparison */}
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary-black">3 mins</div>
                              <div className="text-gray-medium">Draft time</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary-black">67%</div>
                              <div className="text-gray-medium">Response rate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
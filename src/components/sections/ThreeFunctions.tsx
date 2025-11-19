"use client";

import { Database, Inbox, Zap, TrendingUp, Users, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const ThreeFunctions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">All-in-One PR Platform</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-black mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            One Software, Three Functions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to dominate PR in a single, powerful platform
          </p>
        </div>

        {/* Three Function Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Function 1: Databases */}
          <div className={`group flex flex-col items-start p-8 rounded-3xl bg-gradient-to-br from-[#F8E6F0] via-[#F0E0F8] to-[#E6D7FF] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-200/50 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-pink-400/0 to-purple-400/0 group-hover:from-purple-400/10 group-hover:via-pink-400/10 group-hover:to-purple-400/10 transition-all duration-500 rounded-3xl" />
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
              <span className="text-xs font-semibold text-purple-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Largest DB
              </span>
            </div>

            <div className="relative z-10 w-full">
              <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Database className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary-black mb-3 group-hover:text-purple-900 transition-colors">
                Databases
              </h3>
              
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                You get instant access to the world's largest combined media database. Every podcast host, journalist, and newsletter publisher you need to reach is already here.
              </p>

              {/* Database Types */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary-black">Podcasts</div>
                    <div className="text-xs text-gray-600">Every show, every host</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary-black">Journalists</div>
                    <div className="text-xs text-gray-600">Top-tier media contacts</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary-black">Newsletters</div>
                    <div className="text-xs text-gray-600">Influential publishers</div>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4" />
                  <span className="text-sm font-bold">Database Scale</span>
                </div>
                <div className="text-2xl font-bold">5,000,000+</div>
                <div className="text-xs text-purple-100">Media contacts tracked</div>
              </div>
            </div>
          </div>

          {/* Function 2: Magic Inbox */}
          <div className={`group flex flex-col items-start p-8 rounded-3xl bg-gradient-to-br from-[#FFF4E6] via-[#FFF0D9] to-[#FFE6CC] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-yellow-200/50 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-orange-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:via-orange-400/10 group-hover:to-yellow-400/10 transition-all duration-500 rounded-3xl" />
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
              <span className="text-xs font-semibold text-yellow-700 flex items-center gap-1">
                <Users className="w-3 h-3" />
                Multi-Team
              </span>
            </div>

            <div className="relative z-10 w-full">
              <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Inbox className="h-8 w-8 text-yellow-600 group-hover:text-yellow-700 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary-black mb-3 group-hover:text-yellow-900 transition-colors">
                Magic Inbox
              </h3>
              
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Your entire team's Gmail and Outlook accounts sync into one unified inbox. You see every message, every reply, every opportunity in real time.
              </p>

              {/* Feature highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                  <span className="text-sm text-gray-700 flex-1">Universal inbox view</span>
                </div>
                <div className="flex items-start gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                  <span className="text-sm text-gray-700 flex-1">Team collaboration</span>
                </div>
                <div className="flex items-start gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                  <span className="text-sm text-gray-700 flex-1">Real-time sync</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-yellow-300/30">
                <p className="text-xs font-medium text-yellow-800">
                  ✨ Never miss a media opportunity again
                </p>
              </div>
            </div>
          </div>

          {/* Function 3: Time Saving Automations */}
          <div className={`group flex flex-col items-start p-8 rounded-3xl bg-gradient-to-br from-[#F8E6F0] via-[#F0E0F8] to-[#E6D7FF] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-200/50 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-pink-400/0 to-purple-400/0 group-hover:from-purple-400/10 group-hover:via-pink-400/10 group-hover:to-purple-400/10 transition-all duration-500 rounded-3xl" />
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
              <span className="text-xs font-semibold text-purple-600 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                AI-Powered
              </span>
            </div>

            <div className="relative z-10 w-full">
              <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Zap className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary-black mb-3 group-hover:text-purple-900 transition-colors">
                Time Saving Automations
              </h3>
              
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                You set custom follow-up sequences that run automatically. Our AI responds instantly to media requests using strategies from 1 million proven PR Hero pitches.
              </p>

              {/* AI Training Badge */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-4 mb-6 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-bold">AI Training Data</span>
                </div>
                <div className="text-2xl font-bold">1,000,000+</div>
                <div className="text-xs text-purple-100">PR Hero pitches analyzed</div>
              </div>

              {/* Automation Features */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Smart follow-up sequences</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Instant AI responses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>Custom scheduling rules</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className={`mt-20 max-w-5xl mx-auto bg-gradient-to-r from-purple-50 via-white to-yellow-50 rounded-2xl border border-gray-200 shadow-lg p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10X</div>
              <div className="text-sm text-gray-600">Faster Outreach</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">3-in-1</div>
              <div className="text-sm text-gray-600">Unified Platform</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-sm text-gray-600">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeFunctions;
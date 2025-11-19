"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

const VideoDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "cybVnblK3GTubfnYjvOa0201rojSYr1d00jtL3XhGgnivE";
    const thumbnailUrl = `https://image.mux.com/${videoId}/thumbnail.png?time=2`;

    return (
        <section id="video" className="bg-gradient-to-b from-[#fff4e6] to-[#ffe6cc] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-[48px] font-semibold leading-[1.2] text-[#1a1a1a]">
                        See Jace in action
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-[#6b7280]">
                        Watch how Jace handles an email in the example below.
                    </p>
                    <a 
                        href="https://cal.com/pawel-jace-ai/jace-personal-demo" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-6 inline-flex items-center gap-x-2 text-[#8b5cf6] hover:text-[#8b5cf6]/90 text-lg font-medium transition-colors"
                    >
                        Book a personal demo
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
                
                <div className="mt-16 sm:mt-20">
                    <div className="relative mx-auto max-w-4xl rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/10">
                        {isPlaying ? (
                            <iframe
                                src={`https://stream.mux.com/${videoId}?autoplay=true`}
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="aspect-[16/9] w-full"
                                frameBorder="0"
                            ></iframe>
                        ) : (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="relative block w-full aspect-[16/9] group"
                                aria-label="Play video"
                            >
                                <Image
                                    src={thumbnailUrl}
                                    alt="Jace AI video demo thumbnail"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/5" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-transform group-hover:scale-110">
                                        <Play className="h-12 w-12 fill-white text-white ml-2" />
                                    </div>
                                </div>
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a href="https://www.mux.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80"><path d="M3.32211 12C2.08333 12 1.11111 11.0278 1.11111 9.78899V8.04403L3.32211 6.811V9.78899H5.53311V12H3.32211ZM6.46689 12V9.78899H8.67789V6.811L10.8889 8.04403V9.78899C10.8889 11.0278 9.91667 12 8.67789 12H6.46689ZM5.53311 0H3.32211C2.08333 0 1.11111 0.972222 1.11111 2.21101V3.95597L3.32211 5.189V2.21101H5.53311V0ZM8.67789 0H6.46689V2.21101H8.67789V5.189L10.8889 3.95597V2.21101C10.8889 0.972222 9.91667 0 8.67789 0Z" fill="currentColor"></path></svg>
                        Powered by Mux
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VideoDemo;
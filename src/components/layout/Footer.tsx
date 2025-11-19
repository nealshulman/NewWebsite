"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// SVG Icon components
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M21.12,4.88A18.84,18.84,0,0,0,15.35,3.31,13.78,13.78,0,0,0,12,4a13.78,13.78,0,0,0-3.35-.69,18.84,18.84,0,0,0-5.77,1.57A20.3,20.3,0,0,0,2.15,13.55a15.4,15.4,0,0,0,4,4.64,13.14,13.14,0,0,0,4.2.82,1.17,1.17,0,0,0,1.1-.75,10.63,10.63,0,0,1-.52-2.17,1.18,1.18,0,0,1,.84-1.28,7.85,7.85,0,0,0,1.43-.8,1.25,1.25,0,0,1,1.68,0,7.85,7.85,0,0,0,1.43.8,1.18,1.18,0,0,1,.84,1.28,10.63,10.63,0,0,1-.52,2.17,1.17,1.17,0,0,0,1.1.75,13.14,13.14,0,0,0,4.2-.82,15.4,15.4,0,0,0,4-4.64A20.3,20.3,0,0,0,21.12,4.88ZM9.41,14.19a2,2,0,1,1,2-2A2,2,0,0,1,9.41,14.19Zm5.18,0a2,2,0,1,1,2-2A2,2,0,0,1,14.59,14.19Z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-8 6.75a.75.75 0 0 0-1.5 0V18h-2V9.75a.75.75 0 0 0-1.5 0V18h-2V9h3.25a3.75 3.75 0 1 1 7.5 0V18h-3v-5.25zM6.5 6.75A1.75 1.75 0 1 0 3 6.75a1.75 1.75 0 0 0 3.5 0z" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.75-1.76-2.85-4.02-2.85-6.55 0-2.54.99-4.96 2.85-6.72 1.83-1.73 4.3-2.73 6.66-2.68.02 1.51-.02 3.01.01 4.52-.01 1.05.51 2.04 1.48 2.53.84.44 1.87.52 2.77.27.36-.1.71-.27.96-.52.25-.25.43-.57.5-.91.07-.33.05-.68.05-1.02.02-2.18-.01-4.36-.01-6.54z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.25 5 12 5 12 5s-6.25 0-7.82.44c-.86.23-1.52.89-1.75 1.75C2 8.75 2 12 2 12s0 3.25.43 4.81c.23.86.9 1.52 1.75 1.75C5.75 19 12 19 12 19s6.25 0 7.82-.44c.86-.23 1.52-.89 1.75-1.75C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z" />
  </svg>
);

/* COOKIE PREFERENCES - COMMENTED OUT FOR NOW
const CookiePreferences = ({
  onAccept,
  onReject,
}: {
  onAccept: () => void;
  onReject: () => void;
}) => (
  <div className="fixed bottom-6 left-6 z-50 bg-[#262626] text-white rounded-2xl p-6 max-w-sm shadow-2xl animate-fade-in-up">
    <div>
      <h3 className="font-semibold text-white">Cookie Preferences</h3>
      <p className="text-sm text-gray-400 mt-2">
        We use cookies to enhance your experience. Choose your preferences
        below. Read about our privacy policy{" "}
        <Link href="/privacy" className="underline hover:text-white">
          here
        </Link>
        .
      </p>
    </div>
    <div className="mt-6 flex items-center justify-between gap-4">
      <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
        Settings
      </button>
      <div className="flex items-center gap-2">
        <button
          onClick={onReject}
          className="px-4 py-2 text-sm font-medium bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
        >
          Reject
        </button>
        <button
          onClick={onAccept}
          className="px-4 py-2 text-sm font-medium bg-yellow-accent text-primary-black rounded-lg hover:opacity-90 transition-opacity"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
);
*/

const Footer = () => {
  // const [showCookieBanner, setShowCookieBanner] = useState(true);

  // const handleAcceptCookies = () => {
  //   setShowCookieBanner(false);
  // };

  // const handleRejectCookies = () => {
  //   setShowCookieBanner(false);
  // };

  const socialLinks = [
    {
      name: "Discord",
      href: "https://discord.gg/EnQCG3eFPd",
      icon: DiscordIcon,
    },
    { name: "X", href: "https://x.com/jace_ai", icon: XIcon },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/zetaai/",
      icon: LinkedInIcon,
    },
    { name: "TikTok", href: "https://www.tiktok.com/@tryjace", icon: TikTokIcon },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tryjace/",
      icon: InstagramIcon,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC19cHiXUvbh689yNEowobeg",
      icon: YouTubeIcon,
    },
  ];

  const legalLinks = [
    { name: "Terms of service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Extension Privacy", href: "/extension-privacy" },
    { name: "Security", href: "#security" },
  ];

  return (
    <>
      <footer className="relative overflow-hidden pt-16 pb-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/07e4863f-381a-459d-844d-47b586e5b3b1-jace-ai/assets/images/footer-bg-4.png"
            alt="Footer background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6">
            <Link href="/" aria-label="Jace Home">
              <span className="text-3xl font-bold text-primary-black">jace</span>
            </Link>
            <div className="flex items-center gap-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-primary-black/60 hover:text-primary-black transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <hr className="my-8 border-t border-black/10" />

          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-y-6">
            <p className="text-sm text-primary-black/60">
              © 2025 Jace. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-primary-black/60 hover:text-primary-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
      {/* COOKIE BANNER - COMMENTED OUT
      {showCookieBanner && (
        <CookiePreferences
          onAccept={handleAcceptCookies}
          onReject={handleRejectCookies}
        />
      )}
      */}
    </>
  );
};

export default Footer;
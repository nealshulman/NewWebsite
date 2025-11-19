"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navItems = [
{ name: 'Pricing', href: '/pricing' },
{ name: 'Security', href: '/security' },
{ name: 'Features', href: '/features' },
{ name: 'FAQ', href: '/faq' },
{ name: 'Affiliate', href: '/affiliate' },
{ name: 'Blog', href: '/blog' }];


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ?
      'bg-white/60 backdrop-blur-lg shadow-[0_6px_24px_rgba(0,0,0,0.08)] border-b border-[var(--color-gray-light)]' :
      'bg-transparent backdrop-blur-0 border-b-0 shadow-none'}
        rounded-full mt-5 ml-5 mr-5
      `}
      style={{ WebkitBackdropFilter: scrolled ? 'blur(12px)' : undefined }}>

      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-2xl font-bold text-primary-black">
            <video
              src="https://zeozseshoegctsqzxvqt.supabase.co/storage/v1/object/sign/assets/A%20superhero%20figure%20remaining%20still,%20with%20the%20cape%20fluttering%20and%20wind%20moving%20past%20the%20figure,%20the%20leftmost%20outstretched%20arm%20moving%20barely,%20against%20a%20plain%20white%20background,%20with%20subtle,%20controlled%20motion..mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzdlNGUxZC0yYjk4LTQ3MzAtYTk5ZS0yOTAzYjE0MzQyZDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQSBzdXBlcmhlcm8gZmlndXJlIHJlbWFpbmluZyBzdGlsbCwgd2l0aCB0aGUgY2FwZSBmbHV0dGVyaW5nIGFuZCB3aW5kIG1vdmluZyBwYXN0IHRoZSBmaWd1cmUsIHRoZSBsZWZ0bW9zdCBvdXRzdHJldGNoZWQgYXJtIG1vdmluZyBiYXJlbHksIGFnYWluc3QgYSBwbGFpbiB3aGl0ZSBiYWNrZ3JvdW5kLCB3aXRoIHN1YnRsZSwgY29udHJvbGxlZCBtb3Rpb24uLm1wNCIsImlhdCI6MTc1MzE0OTc3NywiZXhwIjoxNzg0Njg1Nzc3fQ.OtqBgKOnaP-f1M8bPIiGFM3L1aFURZnSxc0Oy8kcsEQ"
              autoPlay
              loop
              muted
              playsInline
              className="h-11 w-11 object-contain rounded"
              style={{ background: '#fff' }} />

            <div className="flex flex-col items-start ml-2">
              <span>PR Hero</span>
              <span className="text-sm font-medium text-primary-black opacity-60">
                by PodPitch
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) =>
            <li key={item.name}>
                <Link
                href={item.href}
                className="text-sm font-medium text-primary-black transition-colors hover:text-purple-accent">

                  {item.name}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" className="h-10 rounded-lg px-4 text-sm font-medium">
            Log in
          </Button>
          <Button className="h-10 rounded-lg bg-primary-black px-4 text-sm font-medium text-primary-white hover:bg-black/80 flex items-center gap-2">
            <Image
              src="https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/6716aa7e004828262fc20e74_starbucks-p-500.png"
              alt="Starbucks"
              width={20}
              height={20}
              className="inline-block"
              unoptimized
            />
            Get Free Coffee
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white p-0">
               <div className="flex h-[72px] items-center justify-between border-b px-5">
                 <Link href="/" className="text-2xl font-bold text-primary-black" onClick={() => setIsMenuOpen(false)}>
                    jace
                  </Link>
                <SheetClose asChild>
                </SheetClose>
              </div>
              <div className="p-5">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) =>
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-primary-black transition-colors hover:text-purple-accent"
                    onClick={() => setIsMenuOpen(false)}>

                      {item.name}
                    </Link>
                  )}
                </nav>
                <div className="mt-8 flex flex-col space-y-3">
                  <Button variant="outline" className="w-full h-11 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                    Log in
                  </Button>
                  <Button className="w-full h-11 bg-primary-black text-base font-medium text-primary-white hover:bg-black/80 flex items-center justify-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Image
                      src="https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/6716aa7e004828262fc20e74_starbucks-p-500.png"
                      alt="Starbucks"
                      width={20}
                      height={20}
                      className="inline-block"
                      unoptimized
                    />
                    Get Free Coffee
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>);

};

export default Navigation;
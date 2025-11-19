"use client";

import { useEffect, useRef } from "react";

const logoRows = [
  [
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d449d2c88dc6ad8a7700d7_19.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d449a7e3d064f4a28dbc62_16.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d449e8e42304feb74c8a95_20.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/66e47f73bf307f709d349491_Untitled%20design%20(59)%20(1).png"
  ],
  [
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d4495ebed13e46cf8260fe_9.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d4496f8afba7de54f05da9_12.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d449983e27ac5b5c56d5ca_13.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44a28e5a2993df82a1938_18.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d449c0efdd47a5194e52e3_17.png"
  ],
  [
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44a3862a7ad83dcd941ee_14.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/66e47f75bf307f709d3496e4_output-onlinetools.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/66e47f73bf307f709d3494c9_Untitled%20design%20(62).png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/66e47f74bf307f709d3495f9_Untitled%20design%20(69).png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/66e47f75bf307f709d3496dd_Untitled%20design%20(64)%20(2).png"
  ],
  [
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/67a266824cd576dd4256980a_1.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/67a266899f4a63dab441dc95_2.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/67a2669198413461562b252d_3.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d4498210cca496c335c24c_23.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/67a266a5249e506670279567_5.png"
  ]
];

const prFirmsRows = [
  [
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44a4fc2966347569813d8_4.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44a610c1820544a769f71_7.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44ad39efca360e02fc7ce_8.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44ae25408457478f3abaa_6.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44aee2753b778326367ab_3.png"
  ],
  [
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44af91e644fad5a68c7c4_2.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/68d44b05177562db3ca82977_1.png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/66e47f73bf307f709d3494ea_Untitled%20design%20(63).png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/66e47f74bf307f709d349570_Untitled%20design%20(65).png",
    "https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/66e47f74bf307f709d34957a_Untitled%20design%20(66).png"
  ]
];

const LogoWall = () => {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((row, index) => {
      if (!row) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("opacity-100", "translate-y-0");
                entry.target.classList.remove("opacity-0", "translate-y-4");
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(row);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const allLogoRows = [...logoRows, ...prFirmsRows];

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm sm:text-base font-medium tracking-wide">
            Trusted by the world's smartest companies
          </p>
        </div>

        {/* Company Logo Rows */}
        <div className="space-y-8 mb-16">
          {logoRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
              className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-0 translate-y-4 transition-all duration-700"
            >
              {row.map((logoUrl, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <img
                    src={logoUrl}
                    alt={`Company logo ${rowIndex}-${logoIndex}`}
                    className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* PR Firms Section */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm sm:text-base font-medium tracking-wide">
            And the world's best PR firms
          </p>
        </div>

        {/* PR Firms Logo Rows */}
        <div className="space-y-8">
          {prFirmsRows.map((row, rowIndex) => (
            <div
              key={`pr-${rowIndex}`}
              ref={(el) => {
                rowRefs.current[logoRows.length + rowIndex] = el;
              }}
              className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-0 translate-y-4 transition-all duration-700"
            >
              {row.map((logoUrl, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <img
                    src={logoUrl}
                    alt={`PR firm logo ${rowIndex}-${logoIndex}`}
                    className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
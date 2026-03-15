import React from 'react';

const brands = [
  "iTERO",
  "INVISALIGN",
  "CARESTREAM",
  "ULTRADENT",
  "3M",
  "AMERICAN ORTHODONTICS",
  "SPRINTRAY"
];

export default function BrandsCarousel() {
  // Duplicate enough times to ensure a smooth, unbroken infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <div className="w-full h-10 md:h-14 bg-dark flex items-center overflow-hidden relative z-30">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center h-full">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="flex items-center h-full"
          >
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-sm bg-accent/80 mx-4 md:mx-6"></span>
            <span className="text-white/90 font-mono text-[10px] md:text-[12px] tracking-[0.15em] whitespace-nowrap leading-none mt-[2px]">
              {brand}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); } /* -20% because we have 5 sets of brands */
        }
      `}</style>
    </div>
  );
}

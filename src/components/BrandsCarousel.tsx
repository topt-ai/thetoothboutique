import React from 'react';

export default function BrandsCarousel() {
  const brands = [
    { name: 'iTero', src: '/itero logo.webp' },
    { name: 'Invisalign', src: '/invisalign logo.webp' },
    { name: 'Carestream Dental', src: '/carestream-dental-logo_01.webp' },
    { name: 'Ultradent', src: '/ultradent logo.webp' },
    { name: '3M', src: '/3m logo.webp' },
    { name: 'American Orthodontics', src: '/american ortho logo.webp' },
    { name: 'SprintRay', src: '/sprintray logo.webp' },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full h-[72px] overflow-hidden flex items-center relative border-t border-muted/10">
      <div className="flex w-max animate-[marquee_30s_linear_infinite]">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-8 md:px-12"
          >
            <img 
              src={brand.src} 
              alt={brand.name} 
              className="h-6 md:h-8 w-auto object-contain brightness-0 opacity-40 hover:opacity-80 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

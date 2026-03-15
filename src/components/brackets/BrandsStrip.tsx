import React from 'react';

type StripItem =
  | { type: 'logo'; name: string; logo: string }
  | { type: 'text'; label: string };

const items: StripItem[] = [
  { type: 'text', label: 'BRACKETS METÁLICOS' },
  { type: 'text', label: 'BRACKETS CERÁMICOS' },
  { type: 'text', label: 'BRACKETS AUTOLIGADOS' },
  { type: 'logo', name: '3M', logo: '/3m test.webp' },
  { type: 'logo', name: 'AMERICAN ORTHODONTICS', logo: '/american ortho logo.webp' },
  { type: 'text', label: 'TECNOLOGÍA DE PRECISIÓN' },
  { type: 'text', label: 'SAN SALVADOR' }
];

export default function BrandsStrip() {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="w-full bg-dark h-[72px] overflow-hidden flex items-center relative">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-12">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center shrink-0"
          >
            {item.type === 'logo' ? (
              <img
                src={item.logo}
                alt={item.name}
                className="h-5 w-auto max-w-[120px] object-contain brightness-0 invert opacity-90"
              />
            ) : (
              <span className="font-mono text-[11px] text-white tracking-[0.15em] whitespace-nowrap">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}

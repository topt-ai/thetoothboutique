import React from 'react';

type StripItem =
  | { type: 'logo'; name: string; logo: string }
  | { type: 'text'; label: string };

const items: StripItem[] = [
  { type: 'text', label: 'BLANQUEAMIENTO DENTAL' },
  { type: 'text', label: 'UNA SESIÓN' },
  { type: 'text', label: '10 MINUTOS' },
  { type: 'text', label: '5 A 7 TONOS' },
  { type: 'text', label: 'SAN SALVADOR' },
  { type: 'text', label: 'ZONA ROSA' },
  { type: 'text', label: 'THE TOOTH BOUTIQUE' },
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

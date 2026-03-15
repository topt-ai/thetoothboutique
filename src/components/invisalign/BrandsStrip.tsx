import React from 'react';

export default function BrandsStrip() {
  const items = [
    'INVISALIGN DOCTOR PROVIDER',
    'iTERO DIGITAL',
    'SPRINTRAY 3D',
    'TECNOLOGÍA DE PRECISIÓN',
    'SAN SALVADOR',
    'ZONA ROSA'
  ];

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="w-full bg-dark h-[72px] overflow-hidden flex items-center relative">
      <div className="flex w-max animate-[marquee_30s_linear_infinite]">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6"
          >
            <span className="font-mono text-[11px] text-white tracking-[0.15em] whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/50 ml-12"></span>
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

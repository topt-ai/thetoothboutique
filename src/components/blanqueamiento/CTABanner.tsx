import React from 'react';

export default function CTABanner() {
  return (
    <section className="w-full bg-gold py-[80px] px-8 md:px-[8%] text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-display font-bold text-[clamp(36px,4vw,60px)] text-white leading-[1.1] mb-4">
          Tu sonrisa más blanca<br />
          <span className="italic font-normal">te espera.</span>
        </h2>

        <p className="font-body font-light text-[17px] text-white/80 max-w-[480px] leading-[1.6] mb-10 mx-auto">
          Una sola sesión de 10 minutos. Sin compromiso, sin varias visitas. Escríbenos y agendamos.
        </p>

        <a
          href="https://wa.me/50379056000"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass-light inline-flex items-center justify-center text-white font-body font-semibold text-[15px] px-10 py-4 rounded-full"
        >
          Agendar cita por WhatsApp
        </a>
      </div>
    </section>
  );
}

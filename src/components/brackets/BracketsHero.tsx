import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

export default function BracketsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade-up for text elements
      gsap.fromTo(
        '.hero-text-element',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Image slide-in
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.4,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] bg-bg flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Copy */}
      <div
        ref={textRef}
        className="w-full md:w-[55%] flex flex-col justify-center px-8 md:pl-[8%] pt-32 md:pt-24 pb-16 md:pb-24 z-10"
      >
        <div className="hero-text-element font-mono text-[11px] text-muted mb-4">
          <Link to="/" className="hover:text-dark transition-colors">Inicio</Link> / Brackets
        </div>
        
        <span className="hero-text-element font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6">
          // Ortodoncia · Metálicos · Cerámicos · Autoligados
        </span>

        <h2 className="hero-text-element font-display font-bold text-[clamp(52px,6vw,88px)] text-text leading-[1.05] mb-6">
          Ortodoncia precisa.<br />
          <span className="italic font-normal">Para cada sonrisa.</span>
        </h2>

        <p className="hero-text-element font-body font-light text-[18px] text-muted max-w-[480px] leading-[1.7] mb-8">
          Brackets metálicos, cerámicos o autoligados. Tres opciones, un mismo objetivo: terminar tu tratamiento antes de lo que esperas, con los resultados que mereces.
        </p>

        <div className="hero-text-element flex flex-wrap items-center gap-3 font-mono text-[11px] text-muted mb-10">
          <span>Metálicos y Cerámicos</span>
          <span className="w-1 h-1 rounded-full bg-muted/50"></span>
          <span>Brackets Autoligados</span>
          <span className="w-1 h-1 rounded-full bg-muted/50"></span>
          <span>Tratamiento más corto</span>
        </div>

        <div className="hero-text-element flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-2">
          <a
            href="https://wa.me/50379056000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold text-white font-body font-semibold text-[15px] px-9 py-4 rounded-full hover:bg-gold/90 transition-colors"
          >
            Agenda tu consulta
          </a>
          <a
            href="#opciones"
            className="font-body font-normal text-[14px] text-muted hover:text-dark underline decoration-muted/30 hover:decoration-dark underline-offset-4 transition-all"
          >
            Ver opciones de brackets
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[45%] h-[50vh] md:h-auto md:absolute md:inset-y-0 md:right-0 relative">
        <div
          ref={imageRef}
          className="w-full h-full md:rounded-bl-[40px] overflow-hidden relative z-10"
        >
          <img
            src="/brackets%20servicio.webp"
            alt="Brackets"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Deep teal overlay on image at 15% opacity */}
          <div className="absolute inset-0 bg-[#0D2B28] opacity-15 pointer-events-none"></div>
        </div>
        {/* Organic Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-dark opacity-[0.06] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl z-0 pointer-events-none mix-blend-multiply"></div>
      </div>
    </section>
  );
}

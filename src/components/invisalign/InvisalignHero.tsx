import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import BrandsCarousel from '../BrandsCarousel';

export default function InvisalignHero() {
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

      // Image slide-in (desktop only)
      if (imageRef.current) {
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
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] bg-bg flex flex-col md:flex-row overflow-hidden"
    >
      {/* Mobile Background Image + Overlay */}
      <div
        className="absolute inset-0 md:hidden z-0"
        style={{
          backgroundImage: 'url(/invisaaaaaa.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,43,40,0.15) 0%, rgba(13,43,40,0.6) 60%, rgba(13,43,40,0.85) 100%)',
          }}
        />
      </div>

      {/* Left Copy */}
      <div
        ref={textRef}
        className="w-full md:w-[55%] flex flex-col justify-end md:justify-center px-[6%] md:pl-[8%] pt-32 md:pt-24 pb-[100px] md:pb-24 z-10 min-h-[100dvh] md:min-h-0"
      >
        <div className="hero-text-element font-mono text-[11px] text-[rgba(250,250,248,0.75)] md:text-muted mb-4">
          <Link to="/" className="hover:text-[#FAFAF8] md:hover:text-dark transition-colors">Inicio</Link> / Invisalign
        </div>

        <span className="hero-text-element font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6">
          // Alineadores invisibles · Invisalign Doctor
        </span>

        <h2 className="hero-text-element font-display font-bold text-[clamp(52px,6vw,88px)] text-[#FAFAF8] md:text-text leading-[1.05] mb-6">
          Transforma tu sonrisa<br />
          <span className="italic font-normal">sin que nadie lo note.</span>
        </h2>

        <p className="hero-text-element font-body font-light text-[18px] text-[rgba(250,250,248,0.75)] md:text-muted max-w-[480px] leading-[1.7] mb-8">
          Invisalign es el sistema de alineadores más avanzado del mundo. Discreto, cómodo y con resultados que se ven antes de lo que esperas.
        </p>

        <div className="hero-text-element flex flex-wrap items-center gap-3 font-mono text-[11px] text-[rgba(250,250,248,0.75)] md:text-muted mb-10">
          <span>Invisalign Doctor Provider</span>
          <span className="w-1 h-1 rounded-full bg-[rgba(250,250,248,0.3)] md:bg-muted/50"></span>
          <span>Tecnología iTero 3D</span>
          <span className="w-1 h-1 rounded-full bg-[rgba(250,250,248,0.3)] md:bg-muted/50"></span>
          <span>Sin alambres</span>
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
            href="#proceso"
            className="font-body font-normal text-[14px] text-[#FAFAF8] md:text-muted hover:text-dark underline decoration-[rgba(250,250,248,0.3)] md:decoration-muted/30 hover:decoration-dark underline-offset-4 transition-all"
          >
            Ver el proceso
          </a>
        </div>
      </div>

      {/* Right Image - Desktop Only */}
      <div className="hidden md:block w-full md:w-[45%] h-auto md:absolute md:inset-y-0 md:right-0 relative">
        <div
          ref={imageRef}
          className="w-full h-full md:rounded-bl-[40px] overflow-hidden relative z-10"
        >
          <img
            src="/invisaaaaaa.webp"
            alt="Invisalign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Deep teal overlay on image at 15% opacity */}
          <div className="absolute inset-0 bg-[#0D2B28] opacity-15 pointer-events-none"></div>
        </div>
        {/* Organic Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-dark opacity-[0.06] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl z-0 pointer-events-none mix-blend-multiply"></div>
      </div>

      {/* Brands Carousel - Full Width */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <BrandsCarousel />
      </div>
    </section>
  );
}

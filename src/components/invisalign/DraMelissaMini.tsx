import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DraMelissaMini() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.dra-text-element',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[100px] px-8 md:px-[8%] bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Column - Image */}
        <div ref={imageRef} className="w-full md:w-[40%] h-[480px] rounded-[20px] overflow-hidden">
          <img
            src="/radiografia.webp"
            alt="Dra. Melissa Reneé"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Column - Copy */}
        <div ref={contentRef} className="w-full md:w-[60%] flex flex-col justify-center">
          <span className="dra-text-element font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6">
            // Invisalign Doctor Provider
          </span>

          <h3 className="dra-text-element font-display font-bold text-[clamp(32px,3vw,52px)] text-text leading-[1.1] mb-2">
            Dra. Melissa Reneé
          </h3>
          
          <p className="dra-text-element font-display italic font-normal text-[20px] text-muted mb-8">
            Especialista certificada en Invisalign
          </p>

          <p className="dra-text-element font-body font-light text-[16px] text-muted leading-[1.8] max-w-[540px] mb-10">
            Como Invisalign Doctor Provider, la Dra. Reneé tiene acceso a los casos más complejos del sistema y la experiencia para resolverlos en menos tiempo del estándar.
          </p>

          <div className="dra-text-element flex flex-col gap-[14px] mb-12">
            <div className="flex items-center gap-3 font-mono text-[11px] text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
              <span>Máster en Ortodoncia · Universidad Francisco Marroquín</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
              <span>Invisalign Doctor Provider · Casos complejos</span>
            </div>
          </div>

          <div className="dra-text-element">
            <a
              href="https://wa.me/50379056000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass inline-flex items-center justify-center text-white font-body font-semibold text-[14px] px-8 py-3.5 rounded-full"
            >
              Agenda tu consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

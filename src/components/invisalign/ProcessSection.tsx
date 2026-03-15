import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Consulta y Evaluación',
      body: 'Evaluamos tu caso con tecnología 3D y te mostramos el resultado antes de empezar.',
    },
    {
      number: '02',
      title: 'Planificación Digital',
      body: 'Creamos tu plan de tratamiento personalizado con simulación del resultado final.',
    },
    {
      number: '03',
      title: 'Fabricación de Alineadores',
      body: 'Tus alineadores se fabrican a medida usando tecnología de precisión.',
    },
    {
      number: '04',
      title: 'Inicio del Tratamiento',
      body: 'Recibes tus primeros alineadores y comenzamos.',
    },
    {
      number: '05',
      title: 'Seguimiento Regular',
      body: 'Citas mensuales para monitorear y terminar el caso en menos tiempo.',
    },
  ];

  return (
    <section ref={sectionRef} id="proceso" className="py-[120px] px-8 md:px-[8%] bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
            // El proceso
          </span>
          <h2 className="font-display font-bold text-[clamp(40px,4vw,64px)] text-text leading-[1.1]">
            Proceso de Tratamiento<br />
            <span className="italic font-normal">Invisalign</span>
          </h2>
        </div>

        <div ref={stepsRef} className="relative">
          {/* Dashed line for desktop */}
          <div className="hidden md:block absolute top-[20px] left-0 w-full border-t border-dashed border-[#4ABFBF]/30 z-0"></div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="process-step flex-1 flex flex-col items-start relative">
                {/* Vertical line for mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[40px] left-[19px] w-[1px] h-[calc(100%+24px)] border-l border-dashed border-[#4ABFBF]/30 z-0"></div>
                )}
                
                <div className="w-10 h-10 rounded-full bg-[#4ABFBF]/12 flex items-center justify-center font-mono font-semibold text-[14px] text-accent mb-6 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-body font-semibold text-[15px] text-dark mb-3">
                  {step.title}
                </h3>
                <p className="font-body font-light text-[13px] text-muted leading-[1.6]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

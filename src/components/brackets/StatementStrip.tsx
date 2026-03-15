import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StatementStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.statement-word');
      
      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const line1 = "En otros lugares te dicen que tardará 2 o 3 años.".split(' ');
  const line2 = "Aquí terminamos antes.".split(' ');

  return (
    <section ref={sectionRef} className="w-full bg-dark py-[80px] px-8 md:px-[8%] text-center">
      <div className="max-w-4xl mx-auto">
        <div className="font-display italic text-[clamp(28px,3vw,48px)] text-white/40 font-normal leading-[1.2] mb-[28px]">
          {line1.map((word, i) => (
            <span key={i} className="statement-word inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </div>
        
        <div className="w-full max-w-[160px] h-[1px] bg-white/10 mx-auto mb-[28px]"></div>
        
        <div className="font-display italic text-[clamp(40px,5vw,72px)] text-white font-bold leading-[1.1]">
          {line2.map((word, i) => (
            <span key={i} className="statement-word inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

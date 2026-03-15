import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo dura el tratamiento con Invisalign?',
      answer: 'El tratamiento promedio dura entre 12 y 18 meses, pero muchos pacientes ven resultados significativos en los primeros 3 a 6 meses. El tiempo exacto depende de la complejidad de tu caso.',
    },
    {
      question: '¿Es doloroso el tratamiento con Invisalign?',
      answer: 'Invisalign es mucho más cómodo que los brackets tradicionales. Puedes sentir una ligera presión los primeros días con cada nuevo alineador, pero es mínima y desaparece rápidamente.',
    },
    {
      question: '¿Cuántas horas al día debo usar los alineadores?',
      answer: 'Debes usar los alineadores 20 a 22 horas al día, retirándolos solo para comer y beber (excepto agua).',
    },
    {
      question: '¿Qué casos puede tratar Invisalign?',
      answer: 'Invisalign puede tratar la mayoría de casos: dientes apiñados, espacios entre dientes, sobremordida, submordida y mordida cruzada. En tu consulta evaluaremos si eres candidato.',
    },
    {
      question: '¿Cuánto cuesta el tratamiento con Invisalign?',
      answer: 'El precio varía según la complejidad de tu caso. Agenda una consulta gratuita y te damos un presupuesto exacto sin compromiso.',
    },
  ];

  return (
    <section className="py-[100px] px-8 md:px-[8%] bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-6 block">
            // Preguntas frecuentes
          </span>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-white leading-[1.1]">
            Preguntas Frecuentes sobre Invisalign
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="font-body font-medium text-[16px] text-white group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-accent transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[200px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-body font-light text-[15px] text-white/65 leading-[1.6] pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

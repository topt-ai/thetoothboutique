import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Duele el tratamiento?',
      answer: 'No. El procedimiento es completamente indoloro. Algunos pacientes pueden sentir una leve sensibilidad temporal después, pero desaparece rápido.',
    },
    {
      question: '¿Cuánto dura el resultado?',
      answer: 'Depende de tus hábitos. Con café, té o tabaco el resultado dura menos. Evitando estos factores, los resultados pueden durar entre 1 y 2 años.',
    },
    {
      question: '¿Puedo hacerme el blanqueamiento si tengo brackets?',
      answer: 'No recomendamos blanqueamiento con brackets colocados. El tratamiento no actúa de manera uniforme debajo y alrededor de los brackets, lo que puede generar diferencias de tono al retirarlos. Lo ideal es hacerlo antes de comenzar ortodoncia o al finalizar el tratamiento.',
    },
    {
      question: '¿Aplica para cualquier tipo de mancha?',
      answer: 'El blanqueamiento es efectivo para manchas causadas por alimentos, bebidas y envejecimiento natural. Para manchas por trauma, fluorosis o medicamentos, la efectividad varía. En tu consulta evaluamos tu caso específico.',
    },
    {
      question: '¿Cuánto cuesta el blanqueamiento dental?',
      answer: 'Escríbenos por WhatsApp y te damos el precio exacto. El costo varía según el caso.',
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
            Preguntas frecuentes sobre blanqueamiento
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
                  className={`text-accent transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] opacity-100 mb-4' : 'max-h-0 opacity-0'
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

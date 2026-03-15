import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Duele ponerse brackets?',
      answer: 'La colocación de brackets no duele. Puedes sentir molestias leves los primeros días después de cada ajuste, pero desaparecen rápidamente.',
    },
    {
      question: '¿Cuánto tiempo dura el tratamiento con brackets?',
      answer: 'El tratamiento promedio dura entre 18 y 24 meses, pero puede variar según la complejidad del caso. Muchos pacientes ven mejoras significativas en los primeros 6 meses. Con brackets autoligados, los tiempos se reducen aún más.',
    },
    {
      question: '¿Qué puedo comer con brackets?',
      answer: 'Puedes comer la mayoría de alimentos, evitando los muy duros, pegajosos o que se puedan atascar. Te daremos una lista completa de recomendaciones desde el primer día.',
    },
    {
      question: '¿Cómo mantengo la higiene con brackets?',
      answer: 'Es importante cepillarse después de cada comida y usar hilo dental especial. Te enseñaremos las técnicas correctas de limpieza en tu primera cita.',
    },
    {
      question: '¿Cuál tipo de bracket me conviene?',
      answer: 'Depende de tu caso, tu presupuesto y tu preferencia estética. En la consulta evaluamos tu caso y te explicamos cuál opción te da el mejor resultado en el menor tiempo posible.',
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
            Preguntas Frecuentes sobre Brackets
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

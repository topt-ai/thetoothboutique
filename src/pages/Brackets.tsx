import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BracketsHero from '../components/brackets/BracketsHero';
import TypesOfBrackets from '../components/brackets/TypesOfBrackets';
import Advantages from '../components/brackets/Advantages';
import ProcessSection from '../components/brackets/ProcessSection';
import StatementStrip from '../components/brackets/StatementStrip';
import DraMelissaMini from '../components/brackets/DraMelissaMini';
import FAQSection from '../components/brackets/FAQSection';
import CTABanner from '../components/brackets/CTABanner';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Brackets El Salvador',
  description:
    'Ortodoncia con brackets metálicos, cerámicos y autoligados en San Salvador. Tratamientos modernos, rápidos y con planificación precisa.',
  provider: {
    '@type': 'Dentist',
    name: 'The Tooth Boutique',
    url: 'https://thetoothboutique.com',
  },
  url: 'https://thetoothboutique.com/brackets',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Duele ponerse brackets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La colocación de brackets no duele. Puedes sentir molestias leves los primeros días después de cada ajuste, pero desaparecen rápidamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo dura el tratamiento con brackets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tratamiento promedio dura entre 18 y 24 meses, pero puede variar según la complejidad del caso. Muchos pacientes ven mejoras significativas en los primeros 6 meses. Con brackets autoligados, los tiempos se reducen aún más.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué puedo comer con brackets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes comer la mayoría de alimentos, evitando los muy duros, pegajosos o que se puedan atascar. Te daremos una lista completa de recomendaciones desde el primer día.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo mantengo la higiene con brackets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es importante cepillarse después de cada comida y usar hilo dental especial. Te enseñaremos las técnicas correctas de limpieza en tu primera cita.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál tipo de bracket me conviene?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de tu caso, tu presupuesto y tu preferencia estética. En la consulta evaluamos tu caso y te explicamos cuál opción te da el mejor resultado en el menor tiempo posible.',
      },
    },
  ],
};

export default function Brackets() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Brackets en El Salvador | Ortodoncia moderna y rápida – The Tooth Boutique</title>
        <meta name="description" content="Brackets en El Salvador: metálicos y estéticos con planificación precisa. Tratamientos de ortodoncia modernos, rápidos y con menos molestias. Consulta precios de brackets y agenda tu cita cerca de ti." />
        <link rel="canonical" href="https://thetoothboutique.com/brackets" />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">Brackets</h1>

      <main>
        <BracketsHero />
        <TypesOfBrackets />
        <Advantages />
        <ProcessSection />
        <StatementStrip />
        <DraMelissaMini />
        <FAQSection />
        <CTABanner />
      </main>
    </>
  );
}

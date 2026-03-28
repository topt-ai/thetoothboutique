import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BlanqueamientoHero from '../components/blanqueamiento/BlanqueamientoHero';
import NumbersSection from '../components/blanqueamiento/NumbersSection';
import ProcessSection from '../components/blanqueamiento/ProcessSection';
import WhyDifferent from '../components/blanqueamiento/WhyDifferent';
import StatementStrip from '../components/blanqueamiento/StatementStrip';
import DraMelissaMini from '../components/blanqueamiento/DraMelissaMini';
import FAQSection from '../components/blanqueamiento/FAQSection';
import CTABanner from '../components/blanqueamiento/CTABanner';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Blanqueamiento Dental San Salvador',
  description:
    'Blanqueamiento dental profesional en San Salvador. Resultados de 5 a 7 tonos más blanco en una sola sesión de 10 minutos.',
  provider: {
    '@type': 'Dentist',
    name: 'The Tooth Boutique',
    url: 'https://thetoothboutique.com',
  },
  url: 'https://thetoothboutique.com/blanqueamiento',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Duele el tratamiento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El procedimiento es completamente indoloro. Algunos pacientes pueden sentir una leve sensibilidad temporal después, pero desaparece rápido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura el resultado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de tus hábitos. Con café, té o tabaco el resultado dura menos. Evitando estos factores, los resultados pueden durar entre 1 y 2 años.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacerme el blanqueamiento si tengo brackets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No recomendamos blanqueamiento con brackets colocados. El tratamiento no actúa de manera uniforme debajo y alrededor de los brackets, lo que puede generar diferencias de tono al retirarlos. Lo ideal es hacerlo antes de comenzar ortodoncia o al finalizar el tratamiento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Aplica para cualquier tipo de mancha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El blanqueamiento es efectivo para manchas causadas por alimentos, bebidas y envejecimiento natural. Para manchas por trauma, fluorosis o medicamentos, la efectividad varía. En tu consulta evaluamos tu caso específico.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el blanqueamiento dental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Escríbenos por WhatsApp y te damos el precio exacto. El costo varía según el caso.',
      },
    },
  ],
};

export default function Blanqueamiento() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Blanqueamiento Dental San Salvador | De 5 a 7 tonos más blanco en una sola sesión – The Tooth Boutique
        </title>
        <meta
          name="description"
          content="Blanqueamiento dental en San Salvador en una sola sesión de 10 minutos. Resultados de 5 a 7 tonos más blanco. Century Tower, Zona Rosa. Agenda tu cita en The Tooth Boutique."
        />
        <link rel="canonical" href="https://thetoothboutique.com/blanqueamiento" />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <h1 className="sr-only">Blanqueamiento Dental San Salvador</h1>

      <main>
        <BlanqueamientoHero />
        <NumbersSection />
        <ProcessSection />
        <WhyDifferent />
        <StatementStrip />
        <DraMelissaMini />
        <FAQSection />
        <CTABanner />
      </main>
    </>
  );
}

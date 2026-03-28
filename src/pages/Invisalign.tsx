import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import InvisalignHero from '../components/invisalign/InvisalignHero';
import WhyInvisalign from '../components/invisalign/WhyInvisalign';
import ProcessSection from '../components/invisalign/ProcessSection';
import StatementStrip from '../components/invisalign/StatementStrip';
import DraMelissaMini from '../components/invisalign/DraMelissaMini';
import FAQSection from '../components/invisalign/FAQSection';
import CTABanner from '../components/invisalign/CTABanner';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Invisalign El Salvador',
  description:
    'Tratamiento de ortodoncia con alineadores transparentes Invisalign en San Salvador. Discreto, cómodo y con resultados visibles en los primeros meses.',
  provider: {
    '@type': 'Dentist',
    name: 'The Tooth Boutique',
    url: 'https://thetoothboutique.com',
  },
  url: 'https://thetoothboutique.com/invisalign',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo dura el tratamiento con Invisalign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tratamiento promedio dura entre 12 y 18 meses, pero muchos pacientes ven resultados significativos en los primeros 3 a 6 meses. El tiempo exacto depende de la complejidad de tu caso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es doloroso el tratamiento con Invisalign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invisalign es mucho más cómodo que los brackets tradicionales. Puedes sentir una ligera presión los primeros días con cada nuevo alineador, pero es mínima y desaparece rápidamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas horas al día debo usar los alineadores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Debes usar los alineadores 20 a 22 horas al día, retirándolos solo para comer y beber (excepto agua).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué casos puede tratar Invisalign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invisalign puede tratar la mayoría de casos: dientes apiñados, espacios entre dientes, sobremordida, submordida y mordida cruzada. En tu consulta evaluaremos si eres candidato.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el tratamiento con Invisalign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El precio varía según la complejidad de tu caso. Agenda una consulta gratuita y te damos un presupuesto exacto sin compromiso.',
      },
    },
  ],
};

export default function Invisalign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Invisalign en El Salvador | Alineadores transparentes cerca de ti – The Tooth Boutique</title>
        <meta name="description" content="Invisalign en El Salvador: alineadores transparentes, cómodos y efectivos. Tratamientos más rápidos y con menos molestias. Pregunta por precio de Invisalign y agenda tu cita cerca de ti." />
        <link rel="canonical" href="https://thetoothboutique.com/invisalign" />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">Invisalign</h1>

      <main>
        <InvisalignHero />
        <WhyInvisalign />
        <ProcessSection />
        <StatementStrip />
        <DraMelissaMini />
        <FAQSection />
        <CTABanner />
      </main>
    </>
  );
}

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import InvisalignHero from '../components/invisalign/InvisalignHero';
import BrandsStrip from '../components/invisalign/BrandsStrip';
import WhyInvisalign from '../components/invisalign/WhyInvisalign';
import ProcessSection from '../components/invisalign/ProcessSection';
import StatementStrip from '../components/invisalign/StatementStrip';
import DraMelissaMini from '../components/invisalign/DraMelissaMini';
import FAQSection from '../components/invisalign/FAQSection';
import CTABanner from '../components/invisalign/CTABanner';

export default function Invisalign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Invisalign en El Salvador | Alineadores transparentes cerca de ti – Tooth Boutique</title>
        <meta name="description" content="Invisalign en El Salvador: alineadores transparentes, cómodos y efectivos. Tratamientos más rápidos y con menos molestias. Pregunta por precio de Invisalign y agenda tu cita cerca de ti." />
      </Helmet>

      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">Invisalign</h1>

      <main>
        <InvisalignHero />
        <BrandsStrip />
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

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BracketsHero from '../components/brackets/BracketsHero';
import BrandsStrip from '../components/brackets/BrandsStrip';
import TypesOfBrackets from '../components/brackets/TypesOfBrackets';
import Advantages from '../components/brackets/Advantages';
import ProcessSection from '../components/brackets/ProcessSection';
import StatementStrip from '../components/brackets/StatementStrip';
import DraMelissaMini from '../components/brackets/DraMelissaMini';
import FAQSection from '../components/brackets/FAQSection';
import CTABanner from '../components/brackets/CTABanner';

export default function Brackets() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Brackets en El Salvador | Ortodoncia moderna y rápida – Tooth Boutique</title>
        <meta name="description" content="Brackets en El Salvador: metálicos y estéticos con planificación precisa. Tratamientos de ortodoncia modernos, rápidos y con menos molestias. Consulta precios de brackets y agenda tu cita cerca de ti." />
      </Helmet>

      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">Brackets</h1>

      <main>
        <BracketsHero />
        <BrandsStrip />
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

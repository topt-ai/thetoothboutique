import React, { Suspense } from 'react';
import Hero from '../components/Hero';

const SmilePreview = React.lazy(() => import('../components/SmilePreview'));
const Differentiators = React.lazy(() => import('../components/Differentiators'));
const Services = React.lazy(() => import('../components/Services'));
const DraMelissa = React.lazy(() => import('../components/DraMelissa'));
const VideoSection = React.lazy(() => import('../components/VideoSection'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const FAQSection = React.lazy(() => import('../components/FAQSection'));
const Contact = React.lazy(() => import('../components/Contact'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div className="h-[200px] w-full bg-bg flex items-center justify-center"></div>}>
        <SmilePreview />
        <Differentiators />
        <Services />
        <DraMelissa />
        <VideoSection />
        <Testimonials />
        <FAQSection />
        <Contact />
      </Suspense>
    </main>
  );
}

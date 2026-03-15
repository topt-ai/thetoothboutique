import React, { Suspense } from 'react';

const Hero = React.lazy(() => import('../components/Hero'));
const SmilePreview = React.lazy(() => import('../components/SmilePreview'));
const Differentiators = React.lazy(() => import('../components/Differentiators'));
const Services = React.lazy(() => import('../components/Services'));
const DraMelissa = React.lazy(() => import('../components/DraMelissa'));
const VideoSection = React.lazy(() => import('../components/VideoSection'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const Contact = React.lazy(() => import('../components/Contact'));

export default function Home() {
  return (
    <main>
      <Hero />
      <SmilePreview />
      <Differentiators />
      <Services />
      <DraMelissa />
      <VideoSection />
      <Testimonials />
      <Contact />
    </main>
  );
}

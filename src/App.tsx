import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Footer = React.lazy(() => import('./components/Footer'));

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Invisalign = React.lazy(() => import('./pages/Invisalign'));
const Brackets = React.lazy(() => import('./pages/Brackets'));

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <Router>
      <div className="bg-bg min-h-screen text-text font-body">
        <Suspense fallback={<div className="h-screen w-full bg-bg flex items-center justify-center"></div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invisalign" element={<Invisalign />} />
            <Route path="/brackets" element={<Brackets />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

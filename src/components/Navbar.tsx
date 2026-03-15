import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto rounded-full px-7 py-3 flex items-center justify-between md:justify-center gap-8 transition-all duration-300 bg-dark/85 backdrop-blur-[20px] border border-accent/15"
      >
        <Link to="/" className="flex items-center justify-center">
          <img 
            src="/tooth-boutique-logo.png" 
            alt="The Tooth Boutique" 
            className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-body font-normal text-[13px] text-white tracking-[0.08em] hover:text-accent transition-colors">Inicio</Link>
          <Link to="/invisalign" className="font-body font-normal text-[13px] text-white tracking-[0.08em] hover:text-accent transition-colors">Invisalign</Link>
          <Link to="/brackets" className="font-body font-normal text-[13px] text-white tracking-[0.08em] hover:text-accent transition-colors">Brackets</Link>
        </div>

        <a
          href="https://wa.me/50379056000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-accent text-dark font-body font-medium text-[13px] px-5 py-2 rounded-full hover:bg-white transition-colors whitespace-nowrap"
        >
          Agendar cita
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-body text-2xl text-white tracking-widest">Inicio</Link>
          <Link to="/invisalign" onClick={() => setIsMobileMenuOpen(false)} className="font-body text-2xl text-white tracking-widest">Invisalign</Link>
          <Link to="/brackets" onClick={() => setIsMobileMenuOpen(false)} className="font-body text-2xl text-white tracking-widest">Brackets</Link>
          <a
            href="https://wa.me/50379056000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-dark font-body font-medium text-lg px-8 py-3 rounded-full mt-4"
          >
            Agendar cita
          </a>
        </div>
      )}
    </>
  );
}

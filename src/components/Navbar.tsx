import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Heart, Clock } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#invitation-message', icon: Heart },
    { name: 'Countdown', href: '#countdown', icon: Clock },
    { name: 'Events', href: '#wedding-timeline', icon: Calendar },
    { name: 'Location', href: '#venue-map', icon: MapPin },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/30 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center bg-ivory-warm shadow-xs">
            <span className="font-script text-burgundy font-bold text-lg leading-none">M&amp;L</span>
          </div>
          <span className="font-serif text-xs md:text-sm tracking-[0.2em] uppercase text-forest font-semibold hidden sm:inline-block">
            Meenakshi &amp; Lokesh
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="font-serif text-xs tracking-widest uppercase text-forest/85 hover:text-burgundy flex items-center gap-1.5 transition-colors py-1 relative group"
              >
                <Icon className="w-3.5 h-3.5 text-gold-dark" />
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-burgundy group-hover:w-full transition-all duration-300" />
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 rounded-lg bg-ivory-warm border border-gold/40 text-forest hover:text-burgundy transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-gold/30 px-4 py-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-sm tracking-wider uppercase text-forest hover:text-burgundy flex items-center gap-2.5 py-1.5 border-b border-gold/15"
                >
                  <Icon className="w-4 h-4 text-burgundy" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Calendar, MapPin, Sparkles } from 'lucide-react';
import { GoldFlourish, HeartFlourish } from './FloralDecorations';
import { weddingDetails } from '../data/weddingDetails';

export const ClosingInvitation: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-16 px-4 bg-gradient-to-b from-[#FAF8EF] via-[#F3EEDC] to-[#FAF8EF] overflow-hidden">
      {/* Decorative Floral Canopy at Bottom */}
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Soft Mandap Illustration Vignette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-2xl mx-auto mb-10 rounded-2xl overflow-hidden border-2 border-gold/40 shadow-xl group"
        >
          <img
            src="/mandap-couple.jpg"
            alt="Meenakshi & Lokesh under the floral mandap"
            className="w-full h-64 sm:h-80 object-cover object-center filter saturate-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute bottom-4 left-0 right-0 text-center px-4">
            <span className="font-script text-3xl sm:text-4xl text-ivory drop-shadow-md">
              A Lifetime of Love Begins
            </span>
          </div>
        </motion.div>

        {/* Closing Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-gold">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-forest/75 font-semibold">
              Save The Dates
            </span>
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest font-bold tracking-tight">
            {weddingDetails.invitationMessage.closingHeader}
          </h2>

          <p className="font-cormorant italic text-lg sm:text-xl text-forest/85">
            "{weddingDetails.invitationMessage.closingText}"
          </p>

          <HeartFlourish className="my-3 mx-auto" />

          {/* Couple Calligraphy Names */}
          <div className="pt-2">
            <h1 className="font-script text-5xl sm:text-6xl text-burgundy drop-shadow-sm">
              Meenakshi &amp; Lokesh
            </h1>
          </div>

          <GoldFlourish className="w-36 h-4 mx-auto my-3" />

          {/* Summary Box with Dates & Venue */}
          <div className="mt-6 p-5 rounded-2xl bg-ivory/95 border border-gold/40 shadow-md text-sm font-serif text-forest space-y-2">
            <div className="flex items-center justify-center gap-2 font-semibold text-burgundy">
              <Calendar className="w-4 h-4" />
              <span>Reception: 29 Oct 2026 (6:00 PM) • Muhurtham: 30 Oct 2026 (6:00 AM)</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-forest/80 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-gold-dark" />
              <span>Dhanalakshmi Mahal, Redhills, Chennai.</span>
            </div>
          </div>
        </motion.div>

        {/* Back To Top Button */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Back to top of wedding invitation"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory text-forest text-xs font-serif uppercase tracking-widest border border-gold/50 shadow-md hover:border-gold hover:bg-gold/10 hover:text-burgundy transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-dark group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <p className="text-[11px] text-forest/60 font-serif flex items-center gap-1.5 mt-2">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-burgundy fill-burgundy" />
            <span>for Meenakshi &amp; Lokesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

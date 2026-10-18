import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Heart } from 'lucide-react';
import { GoldFlourish, HeartFlourish } from './FloralDecorations';
import { weddingDetails } from '../data/weddingDetails';

export const CoupleHero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-between pt-6 pb-12 px-4 overflow-hidden bg-gradient-to-b from-[#FAF8EF] via-[#F3EEDC]/60 to-[#FAF8EF]">
      {/* Hanging Vines Top Garland */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none select-none z-10">
        <img
          src="/floral-canopy.jpg"
          alt="Hanging vines canopy"
          className="w-full h-20 sm:h-28 md:h-32 object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF8EF]" />
      </div>

      {/* Top Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-20 text-center max-w-2xl mx-auto pt-24 sm:pt-32 md:pt-36"
      >
        <span className="inline-block font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-forest/75 mb-2 font-medium">
          {weddingDetails.invitationMessage.welcomeHeader}
        </span>
        <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-forest font-semibold mb-1">
          {weddingDetails.invitationMessage.subHeader}
        </h2>

        <HeartFlourish className="my-2 mx-auto" />

        {/* Couple Names */}
        <div className="my-3">
          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-burgundy tracking-wide drop-shadow-sm">
            Meenakshi
          </h1>
          <div className="flex items-center justify-center gap-3 my-1">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-serif italic text-gold text-2xl sm:text-3xl">&amp;</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-burgundy tracking-wide drop-shadow-sm">
            Lokesh
          </h1>
        </div>

        <GoldFlourish className="w-40 sm:w-48 h-4 mx-auto my-2" />

        <p className="font-serif italic text-sm sm:text-base text-forest/90 mt-2 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>{weddingDetails.invitationMessage.tagline}</span>
          <Sparkles className="w-3.5 h-3.5 text-gold" />
        </p>
      </motion.div>

      {/* Central Illustrated Couple & Floral Mandap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-20 w-full max-w-4xl mx-auto my-6 px-2 sm:px-6"
      >
        {/* Ornate Arch Frame with Champagne Gold Border */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/40 bg-gradient-to-b from-[#F7F3E7] to-[#FAF8EF] p-2 sm:p-4 group">
          {/* Inner Golden Border */}
          <div className="absolute inset-2 sm:inset-3 border border-gold/30 rounded-2xl pointer-events-none z-10" />

          {/* Ambient Warm Golden Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-radial from-gold/15 via-blush/10 to-transparent blur-2xl pointer-events-none" />

          {/* Mandap & Couple Artwork */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-[2/1] max-h-[520px]">
            <img
              src="/mandap-couple.jpg"
              alt="Meenakshi & Lokesh under the traditional South Indian floral wedding mandap"
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Subtle Vignette for Editorial Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Blessings Ribbon */}
          <div className="mt-3 flex items-center justify-between flex-wrap gap-2 px-3 py-2 bg-ivory-warm/80 rounded-xl border border-gold/30 text-xs sm:text-sm text-forest font-serif">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-burgundy" />
              <span>29 &amp; 30 October 2026</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-burgundy" />
              <span>Dhanalakshmi Mahal, Chennai</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-gold font-script text-base">
              <Heart className="w-3 h-3 text-burgundy fill-burgundy" />
              <span>Forever &amp; Always</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-20 text-center"
      >
        <a
          href="#invitation-message"
          className="inline-flex flex-col items-center gap-1 text-forest/70 hover:text-burgundy transition-colors duration-300 group"
        >
          <span className="font-serif text-[11px] uppercase tracking-[0.25em]">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border border-gold/60 flex items-start justify-center p-1 group-hover:border-burgundy transition-colors">
            <span className="w-1.5 h-2 rounded-full bg-burgundy animate-bounce" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

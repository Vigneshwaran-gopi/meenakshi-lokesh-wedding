import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Copy, Check, Car, Compass } from 'lucide-react';
import { GoldFlourish } from './FloralDecorations';
import { weddingDetails, WeddingEvent } from '../data/weddingDetails';

export const VenueMap: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(weddingDetails.venueGeneral.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue-map" className="relative py-20 px-4 bg-gradient-to-b from-[#FAF8EF] via-[#F3EEDC] to-[#FAF8EF] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-serif tracking-widest uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-burgundy" />
            <span>Find Your Way</span>
          </div>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-burgundy">
            Venue &amp; Location
          </h2>
          <p className="font-serif text-sm sm:text-base text-forest/80 max-w-md mx-auto mt-1">
            Dhanalakshmi Mahal A/C, Red Hills, Chennai
          </p>
          <GoldFlourish className="w-36 h-4 mx-auto mt-2" />
        </motion.div>

        {/* Two Venue Cards (Reception & Muhurtham) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {weddingDetails.events.map((event: WeddingEvent, index: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative bg-ivory rounded-2xl p-6 border border-gold/40 shadow-lg hover:border-gold transition-all duration-300"
            >
              {/* Gold Inset Frame */}
              <div className="absolute inset-1.5 border border-gold/20 rounded-xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-gold/20 pb-3 mb-4">
                <span className="font-serif text-xs font-bold tracking-[0.2em] text-burgundy uppercase px-3 py-1 rounded-full bg-burgundy/10">
                  {event.title}
                </span>
                <span className="font-serif text-xs text-forest/70">{event.dateFormatted}</span>
              </div>

              <div className="space-y-2 mb-5">
                <h3 className="font-serif text-lg font-bold text-forest">{event.venueName}</h3>
                <p className="font-serif text-xs sm:text-sm text-forest/80">
                  {event.venueFull}
                </p>
                <p className="font-serif text-xs text-forest/65 italic">
                  {event.landmark}
                </p>
                <p className="font-serif text-xs text-burgundy font-medium flex items-center gap-1.5 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>{event.time}</span>
                </p>
              </div>

              {/* Action Buttons with Exact Google Maps Links */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gold/20">
                <a
                  href={event.googleMapsDirectionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-burgundy text-ivory text-xs font-serif uppercase tracking-wider font-semibold shadow hover:bg-burgundy-light transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={event.googleMapsSearchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-gold/50 text-forest text-xs font-serif hover:bg-gold/10 transition-colors"
                  title="Open exact location in Google Maps"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Open Maps</span>
                </a>

                <a
                  href={event.plusCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-forest/5 text-forest/70 text-xs font-serif hover:bg-forest/10 transition-colors"
                  title="Plus Code: 55RR+5MH"
                >
                  <Compass className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Pin</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Google Map Embed Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-ivory rounded-3xl p-4 sm:p-6 border border-gold/40 shadow-xl overflow-hidden"
        >
          {/* Map Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-gold/30 h-[360px] sm:h-[420px] bg-sage-light/20 shadow-inner">
            <iframe
              title="Dhanalakshmi Mahal A/C, Red Hills, Chennai - Wedding Location Map"
              src={weddingDetails.venueGeneral.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.05]"
            />
          </div>

          {/* Venue Address & Quick Navigation Strip */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-ivory-warm rounded-xl border border-gold/30">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-full bg-forest/10 text-forest">
                <Car className="w-5 h-5 text-burgundy" />
              </div>
              <div>
                <p className="font-serif font-semibold text-sm sm:text-base text-forest">
                  {weddingDetails.venueGeneral.name}
                </p>
                <p className="font-serif text-xs text-forest/80">
                  {weddingDetails.venueGeneral.fullAddress}
                </p>
                <p className="font-serif text-[11px] text-forest/60">
                  {weddingDetails.venueGeneral.landmark} • Plus Code: {weddingDetails.venueGeneral.plusCode}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyAddress}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-gold/40 text-forest text-xs font-serif hover:border-gold transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-forest" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gold-dark" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={weddingDetails.venueGeneral.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-burgundy text-ivory text-xs font-serif uppercase tracking-wider font-semibold shadow hover:bg-burgundy-light transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>Navigate</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

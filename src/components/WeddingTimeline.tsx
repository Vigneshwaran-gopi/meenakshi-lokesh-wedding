import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { CalendarButton } from './CalendarButton';
import { GoldFlourish, LotusIcon } from './FloralDecorations';
import { weddingDetails, WeddingEvent } from '../data/weddingDetails';

export const WeddingTimeline: React.FC = () => {
  return (
    <section id="wedding-timeline" className="relative py-20 px-4 bg-[#FAF8EF] overflow-hidden">
      {/* Decorative Floral Backdrop */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-forest/75 font-semibold">
            Wedding Itinerary
          </span>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-burgundy mt-1 mb-2">
            Ceremony &amp; Celebrations
          </h2>
          <p className="font-serif text-sm sm:text-base text-forest/85 max-w-lg mx-auto">
            Please join us to celebrate and bless Meenakshi &amp; Lokesh at both auspicious ceremonies.
          </p>
          <GoldFlourish className="w-40 h-4 mx-auto mt-3" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Fine Gold Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute top-4 bottom-8 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold/30 via-gold to-gold/30" />

          {/* Events List */}
          <div className="space-y-12 md:space-y-16">
            {weddingDetails.events.map((event: WeddingEvent, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Floral Marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-ivory border-2 border-gold shadow-md">
                    <LotusIcon className="w-5 h-5 text-burgundy" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Event Card */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                    <div className="relative bg-gradient-to-b from-[#F7F3E7] to-[#FAF8EF] rounded-2xl p-6 sm:p-7 border border-gold/40 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative Gold Inset Border */}
                      <div className="absolute inset-1.5 sm:inset-2 border border-gold/20 rounded-xl pointer-events-none" />

                      {/* Reference Design Style Plaque Title */}
                      <div className="flex items-center justify-center mb-5">
                        <div className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-ivory via-blush/20 to-ivory border border-gold/50 shadow-sm">
                          <span className="text-gold text-xs">❧</span>
                          <h3 className="font-serif tracking-[0.25em] text-sm sm:text-base font-bold text-burgundy uppercase">
                            {event.title}
                          </h3>
                          <span className="text-gold text-xs">❧</span>
                        </div>
                      </div>

                      {/* Event Details Grid */}
                      <div className="space-y-3.5 font-serif text-sm sm:text-base text-forest mb-6">
                        {/* Date */}
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 rounded-lg bg-burgundy/10 text-burgundy mt-0.5">
                            <Calendar className="w-4 h-4 text-burgundy" />
                          </div>
                          <div>
                            <span className="font-semibold text-burgundy block text-sm sm:text-base">
                              {event.dateFormatted}
                            </span>
                            <span className="text-xs text-forest/70">{event.subtitle}</span>
                          </div>
                        </div>

                        {/* Time */}
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 rounded-lg bg-burgundy/10 text-burgundy mt-0.5">
                            <Clock className="w-4 h-4 text-burgundy" />
                          </div>
                          <div>
                            <span className="font-medium text-forest">{event.time}</span>
                          </div>
                        </div>

                        {/* Venue */}
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 rounded-lg bg-burgundy/10 text-burgundy mt-0.5">
                            <MapPin className="w-4 h-4 text-burgundy" />
                          </div>
                          <div>
                            <span className="font-medium text-forest block">{event.venueName}</span>
                            <span className="text-xs text-forest/75">{event.venueArea}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons: Add to Calendar & View Location */}
                      <div className="pt-2 border-t border-gold/20 flex flex-wrap items-center justify-between gap-3">
                        <CalendarButton event={event} variant="primary" />

                        <div className="flex items-center gap-2">
                          <a
                            href="#venue-map"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-forest/5 hover:bg-forest/10 text-forest text-xs font-serif transition-colors"
                          >
                            <Navigation className="w-3.5 h-3.5 text-gold-dark" />
                            <span>Map View</span>
                          </a>

                          <a
                            href={event.googleMapsDirectionsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-burgundy/10 hover:bg-burgundy/20 text-burgundy text-xs font-serif transition-colors"
                            title="Get Google Maps driving directions"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Directions</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

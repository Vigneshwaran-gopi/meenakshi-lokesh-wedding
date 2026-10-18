import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Eye } from 'lucide-react';
import { GoldFlourish, LotusIcon } from './FloralDecorations';
import { weddingDetails } from '../data/weddingDetails';

interface InvitationMessageProps {
  onViewOriginalCard: () => void;
}

export const InvitationMessage: React.FC<InvitationMessageProps> = ({ onViewOriginalCard }) => {
  return (
    <section
      id="invitation-message"
      className="relative py-16 md:py-24 px-4 bg-[#FAF8EF] overflow-hidden"
    >
      {/* Decorative Botanical Ambient Background */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-sage/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-blush/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative bg-gradient-to-b from-ivory-warm to-ivory rounded-3xl p-8 sm:p-12 md:p-14 text-center shadow-xl border border-gold/40"
        >
          {/* Double Golden Border Inset */}
          <div className="absolute inset-2.5 sm:inset-3 border border-gold/25 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 border border-gold/15 rounded-xl pointer-events-none" />

          {/* Lotus Header Motif */}
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gold/10 border border-gold/30">
              <LotusIcon className="w-8 h-8 text-gold-dark" />
            </div>
          </div>

          <h3 className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-forest/75 font-semibold mb-3">
            A Cordial Invitation
          </h3>

          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-burgundy mb-4">
            With Joy in Our Hearts
          </h2>

          <GoldFlourish className="w-32 h-4 mx-auto mb-6" />

          {/* Editorial Message */}
          <div className="space-y-6 font-cormorant text-lg sm:text-xl md:text-2xl text-forest leading-relaxed max-w-2xl mx-auto font-normal">
            <p className="relative">
              <span>{weddingDetails.invitationMessage.storyParagraph1}</span>
              <Heart className="w-4 h-4 inline-block ml-2 text-burgundy fill-burgundy transform -translate-y-0.5" />
            </p>

            <p className="relative">
              <span>{weddingDetails.invitationMessage.storyParagraph2}</span>
              <Sparkles className="w-4 h-4 inline-block ml-2 text-gold animate-pulse" />
            </p>
          </div>

          {/* Golden Divider */}
          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold to-gold" />
            <span className="font-script text-2xl text-burgundy">M &amp; L</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-gold to-gold" />
          </div>

          {/* Invitation Card Reference Modal Action */}
          <div className="pt-2">
            <button
              onClick={onViewOriginalCard}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory text-forest text-xs sm:text-sm font-serif tracking-wider uppercase border border-gold/50 shadow-sm hover:border-gold hover:bg-gold/10 transition-all duration-300"
            >
              <Eye className="w-3.5 h-3.5 text-gold-dark" />
              <span>View Original Invitation Card</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

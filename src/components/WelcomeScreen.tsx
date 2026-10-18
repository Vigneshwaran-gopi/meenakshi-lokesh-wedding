import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HeartFlourish, GoldFlourish } from './FloralDecorations';
import { weddingDetails } from '../data/weddingDetails';

interface WelcomeScreenProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ isOpen, onOpen }) => {
  const handleOpenInvitation = () => {
    // Elegant luxury gold & blush confetti shower
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C7A66A', '#E8B9C1', '#FAF8EF', '#862D46'],
    });
    onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="welcome-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -60, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-b from-[#A9B9A0]/25 via-[#FAF8EF] to-[#F3EEDC] flex flex-col items-center justify-center p-4 sm:p-6"
        >
          {/* Top hanging flower vines - framed at top with soft gradient fade */}
          <div className="absolute top-0 left-0 right-0 pointer-events-none select-none z-10">
            <motion.img
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              src="/floral-canopy.jpg"
              alt="Hanging floral garland"
              className="w-full h-16 sm:h-24 md:h-28 object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF8EF]" />
          </div>

          {/* Luxury Card Frame - positioned safely below the top garland with generous margins */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-20 max-w-md sm:max-w-lg w-full bg-[#FAF8EF] rounded-2xl p-6 sm:p-8 text-center shadow-2xl border border-gold/40 my-auto mt-14 sm:mt-20 mb-6"
          >
            {/* Fine Ornamental Inner Border */}
            <div className="absolute inset-2 sm:inset-3 border border-gold/30 rounded-xl pointer-events-none" />
            <div className="absolute inset-3 sm:inset-4 border border-gold/20 rounded-lg pointer-events-none" />

            {/* Corner Ornamental Accents */}
            <span className="absolute top-4 left-4 text-gold text-xs">✤</span>
            <span className="absolute top-4 right-4 text-gold text-xs">✤</span>
            <span className="absolute bottom-4 left-4 text-gold text-xs">✤</span>
            <span className="absolute bottom-4 right-4 text-gold text-xs">✤</span>

            {/* Pre-header */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-forest/80 text-xs sm:text-sm tracking-[0.25em] uppercase mb-2 font-medium"
            >
              {weddingDetails.invitationMessage.welcomeHeader}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-script text-3xl sm:text-4xl text-forest font-semibold mb-2"
            >
              {weddingDetails.invitationMessage.subHeader}
            </motion.h2>

            <HeartFlourish className="my-3 mx-auto" />

            {/* Couple Calligraphy Names */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="my-5"
            >
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy drop-shadow-sm leading-tight">
                Meenakshi
              </h1>
              <div className="flex items-center justify-center gap-3 my-1">
                <span className="h-[1px] w-12 bg-gold/50" />
                <span className="font-serif italic text-gold text-2xl">&amp;</span>
                <span className="h-[1px] w-12 bg-gold/50" />
              </div>
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy drop-shadow-sm leading-tight">
                Lokesh
              </h1>
            </motion.div>

            <GoldFlourish className="w-36 h-4 mx-auto my-2" />

            {/* Romantic Heading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="font-serif italic text-forest/90 text-sm sm:text-base mb-6 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span>{weddingDetails.invitationMessage.tagline}</span>
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            </motion.p>

            {/* Open Invitation CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="pt-2"
            >
              <button
                onClick={handleOpenInvitation}
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-ivory font-serif tracking-widest text-xs sm:text-sm uppercase shadow-xl hover:shadow-burgundy/40 border border-gold/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <MailOpen className="w-4 h-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium tracking-[0.2em]">OPEN THE INVITATION</span>
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

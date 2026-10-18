import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarHeart, Sparkles } from 'lucide-react';
import { GoldFlourish } from './FloralDecorations';
import { weddingDetails } from '../data/weddingDetails';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const WeddingCountdown: React.FC = () => {
  // Target: Friday, 30 October 2026, 6:00 AM IST (Asia/Kolkata, UTC+05:30)
  const targetEpoch = new Date(weddingDetails.muhurthamDateIso).getTime();
  const receptionEpoch = new Date(weddingDetails.receptionDateIso).getTime();

  const calculateTimeLeft = (target: number): TimeLeft => {
    const now = Date.now();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isPast: false };
  };

  const [muhurthamTime, setMuhurthamTime] = useState<TimeLeft>(() => calculateTimeLeft(targetEpoch));
  const [receptionTime, setReceptionTime] = useState<TimeLeft>(() => calculateTimeLeft(receptionEpoch));

  useEffect(() => {
    const timer = setInterval(() => {
      setMuhurthamTime(calculateTimeLeft(targetEpoch));
      setReceptionTime(calculateTimeLeft(receptionEpoch));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetEpoch, receptionEpoch]);

  const timeBlocks = [
    { label: 'Days', value: muhurthamTime.days },
    { label: 'Hours', value: muhurthamTime.hours },
    { label: 'Minutes', value: muhurthamTime.minutes },
    { label: 'Seconds', value: muhurthamTime.seconds },
  ];

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-[#FAF8EF] via-[#F3EEDC] to-[#FAF8EF] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/5 border border-forest/20 text-forest text-xs tracking-widest uppercase font-serif mb-3">
            <Clock className="w-3.5 h-3.5 text-gold-dark" />
            <span>Counting Down to the Sacred Muhurtham</span>
          </div>
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-burgundy">
            Auspicious Moments Await
          </h2>
          <p className="font-serif text-sm sm:text-base text-forest/80 mt-1">
            Friday, 30 October 2026 • 6:00 AM IST (Asia/Kolkata)
          </p>
          <GoldFlourish className="w-36 h-4 mx-auto mt-2" />
        </motion.div>

        {/* Live Muhurtham Countdown Grid */}
        {muhurthamTime.isPast ? (
          <div className="p-8 rounded-2xl bg-ivory border border-gold/40 shadow-lg text-center max-w-lg mx-auto">
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-2 animate-bounce" />
            <h3 className="font-script text-3xl text-burgundy">The Sacred Celebration Has Begun!</h3>
            <p className="font-serif text-forest/80 mt-1 text-sm">
              Thank you for blessing Meenakshi &amp; Lokesh on their wedding day.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto"
          >
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="relative bg-[#FAF8EF] rounded-2xl p-4 sm:p-6 border border-gold/40 shadow-lg hover:border-gold transition-colors duration-300 group"
              >
                {/* Decorative Inner Border */}
                <div className="absolute inset-1.5 border border-gold/20 rounded-xl pointer-events-none group-hover:border-gold/40 transition-colors" />

                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy tracking-tight">
                  {String(block.value).padStart(2, '0')}
                </div>
                <div className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-forest/75 mt-2 font-medium">
                  {block.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Reception Date Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-md mx-auto"
        >
          <div className="p-3.5 sm:p-4 rounded-xl bg-ivory-warm/90 border border-gold/30 shadow-sm flex items-center justify-between text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-burgundy/10 text-burgundy">
                <CalendarHeart className="w-4 h-4 text-burgundy" />
              </div>
              <div>
                <p className="font-serif text-xs uppercase tracking-wider text-burgundy font-semibold">
                  Reception Prelude
                </p>
                <p className="font-serif text-xs sm:text-sm text-forest font-medium">
                  Thursday, 29 October 2026 • 6:00 PM Onwards
                </p>
              </div>
            </div>
            <div className="text-right pl-2 border-l border-gold/30">
              <span className="font-serif text-[11px] text-forest/70 block">Starts in</span>
              <span className="font-serif text-xs sm:text-sm font-semibold text-burgundy">
                {receptionTime.isPast ? 'Celebrated' : `${receptionTime.days}d ${receptionTime.hours}h`}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';

export const GoldFlourish: React.FC<{ className?: string }> = ({ className = "w-24 h-4" }) => (
  <svg
    viewBox="0 0 200 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block text-gold ${className}`}
  >
    <path
      d="M10 12h75m30 0h75"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.6"
    />
    <circle cx="100" cy="12" r="3" fill="currentColor" />
    <path
      d="M93 12c-4-4-9-5-14-1m28 1c4-4 9-5 14-1"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.75"
    />
    <circle cx="85" cy="12" r="1.5" fill="currentColor" />
    <circle cx="115" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const HeartFlourish: React.FC<{ className?: string }> = ({ className = "w-32 h-6" }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold to-gold/70" />
    <span className="text-burgundy text-sm transform hover:scale-125 transition-transform duration-300">
      ♡
    </span>
    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold to-gold/70" />
  </div>
);

export const LotusIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-gold" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 4c-1.5 3-4 6-8 7 4 1 6.5 4 8 9 1.5-5 4-8 8-9-4-1-6.5-4-8-7z" fill="currentColor" fillOpacity="0.15" />
    <path d="M12 9c-1 2-2.5 4-5 4.5 2.5.5 4 2.5 5 5.5 1-3 2.5-5 5-5.5-2.5-.5-4-2.5-5-4.5z" />
  </svg>
);

export const HangingVinesHeader: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden pointer-events-none select-none z-10">
      <img
        src="/floral-canopy.jpg"
        alt="Floral Garland Vines"
        className="w-full h-24 md:h-36 object-cover object-top opacity-95 filter drop-shadow-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF8EF]" />
    </div>
  );
};

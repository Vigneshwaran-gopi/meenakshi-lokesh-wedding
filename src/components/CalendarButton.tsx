import React, { useState } from 'react';
import { Calendar, ChevronDown, Check, Download } from 'lucide-react';
import { WeddingEvent } from '../data/weddingDetails';

interface CalendarButtonProps {
  event: WeddingEvent;
  className?: string;
  variant?: 'primary' | 'secondary' | 'compact';
}

export const CalendarButton: React.FC<CalendarButtonProps> = ({
  event,
  className = '',
  variant = 'primary',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `${event.title} - Meenakshi & Lokesh`
  )}&dates=${event.calendarUtcStart}/${event.calendarUtcEnd}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.venueFull)}`;

  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Meenakshi & Lokesh Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:wedding-${event.id}-202610@meenakshi-lokesh.wedding`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${event.calendarUtcStart}`,
      `DTEND:${event.calendarUtcEnd}`,
      `SUMMARY:${event.title} - Meenakshi & Lokesh Wedding`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.venueFull}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}-meenakshi-lokesh-wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      setIsOpen(false);
    }, 2000);
  };

  const baseStyles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-gold/90 via-gold to-gold/90 hover:from-gold hover:to-gold-dark text-forest font-semibold shadow-md'
      : 'bg-white/80 hover:bg-white text-forest border border-gold/40 shadow-sm';

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 text-xs md:text-sm tracking-wide ${baseStyles}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Calendar className="w-4 h-4 text-burgundy" />
        <span>Add to Calendar</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 rounded-xl bg-ivory-warm border border-gold/40 shadow-xl z-50 overflow-hidden py-1.5 animate-fadeIn">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-xs text-forest hover:bg-gold/15 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-burgundy" />
              <span>Google Calendar</span>
            </a>
            <button
              onClick={downloadIcs}
              className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-forest hover:bg-gold/15 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-forest" />
                <span>Apple / Outlook (.ics)</span>
              </div>
              {downloaded ? (
                <Check className="w-3.5 h-3.5 text-forest" />
              ) : (
                <Download className="w-3.5 h-3.5 text-gold-dark" />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

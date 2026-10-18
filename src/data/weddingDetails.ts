export interface WeddingEvent {
  id: 'reception' | 'muhurtham';
  title: string;
  subtitle: string;
  day: string;
  date: string;
  dateFormatted: string;
  time: string;
  venueName: string;
  venueArea: string;
  venueFull: string;
  landmark: string;
  sharedMapLink: string;
  originalShortLink: string;
  googleMapsSearchLink: string;
  googleMapsDirectionsLink: string;
  plusCodeLink: string;
  targetDateIso: string; // ISO string with +05:30 offset
  calendarUtcStart: string; // YYYYMMDDTHHMMSSZ
  calendarUtcEnd: string;
  description: string;
}

export interface WeddingData {
  couple: {
    bride: string;
    groom: string;
    combined: string;
    title: string;
  };
  invitationMessage: {
    welcomeHeader: string;
    subHeader: string;
    tagline: string;
    storyParagraph1: string;
    storyParagraph2: string;
    closingHeader: string;
    closingText: string;
  };
  muhurthamDateIso: string; // Target for live countdown in Asia/Kolkata
  receptionDateIso: string;
  events: WeddingEvent[];
  venueGeneral: {
    name: string;
    hallType: string;
    area: string;
    city: string;
    pincode: string;
    landmark: string;
    plusCode: string;
    fullAddress: string;
    embedMapUrl: string;
    searchUrl: string;
    directionsUrl: string;
    plusCodeUrl: string;
  };
}

const EXACT_VENUE_QUERY = encodeURIComponent(
  "Dhanalakshmi Mahal A/C, No. 14, Service Road, Bypass Road, Pulliline, Red Hills, Chennai, Tamil Nadu 600052"
);

const EXACT_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${EXACT_VENUE_QUERY}`;
const EXACT_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${EXACT_VENUE_QUERY}`;
const EXACT_PLUS_CODE_URL = "https://www.google.com/maps/search/?api=1&query=55RR%2B5MH+Red+Hills+Chennai";
const EXACT_EMBED_URL = `https://maps.google.com/maps?q=${EXACT_VENUE_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export const weddingDetails: WeddingData = {
  couple: {
    bride: "Meenakshi",
    groom: "Lokesh",
    combined: "Meenakshi & Lokesh",
    title: "Meenakshi & Lokesh's Wedding",
  },
  invitationMessage: {
    welcomeHeader: "Together with our families",
    subHeader: "You Are Cordially Invited",
    tagline: "A Beautiful Beginning Awaits...",
    storyParagraph1:
      "With hearts full of happiness and dreams of a beautiful future, we are excited to begin a new chapter of our lives together.",
    storyParagraph2:
      "We would be delighted to have you join us as we celebrate this special occasion. Your presence, love, and blessings will make our celebration truly unforgettable.",
    closingHeader: "Your Presence Is Our Greatest Gift",
    closingText: "With love, we look forward to celebrating with you.",
  },
  // Target: Friday, 30 October 2026, 6:00 AM IST (+05:30)
  muhurthamDateIso: "2026-10-30T06:00:00+05:30",
  // Target: Thursday, 29 October 2026, 6:00 PM IST (+05:30)
  receptionDateIso: "2026-10-29T18:00:00+05:30",
  events: [
    {
      id: "reception",
      title: "RECEPTION",
      subtitle: "An Evening of Celebration & Blessings",
      day: "Thursday",
      date: "29 October 2026",
      dateFormatted: "Thursday, 29 October 2026",
      time: "6:00 PM onwards",
      venueName: "Dhanalakshmi Mahal A/C",
      venueArea: "Redhills, Chennai.",
      venueFull: "Dhanalakshmi Mahal A/C, No. 14, Service Road, Bypass Road, Pulliline, Red Hills, Chennai, Tamil Nadu – 600052.",
      landmark: "Near Red Hills Bypass Road & Kumaran Hospital",
      sharedMapLink: EXACT_SEARCH_URL,
      originalShortLink: "https://share.google/j5xPoffmy7Qa5OKQL",
      googleMapsSearchLink: EXACT_SEARCH_URL,
      googleMapsDirectionsLink: EXACT_DIRECTIONS_URL,
      plusCodeLink: EXACT_PLUS_CODE_URL,
      targetDateIso: "2026-10-29T18:00:00+05:30",
      calendarUtcStart: "20261029T123000Z", // 6:00 PM IST = 12:30 PM UTC
      calendarUtcEnd: "20261029T163000Z",   // 4-hour window default for calendar
      description: "Wedding Reception celebration of Meenakshi & Lokesh at Dhanalakshmi Mahal A/C, Red Hills, Chennai.",
    },
    {
      id: "muhurtham",
      title: "MUHURTHAM",
      subtitle: "A Sacred Union & Auspicious Beginnings",
      day: "Friday",
      date: "30 October 2026",
      dateFormatted: "Friday, 30 October 2026",
      time: "6:00 AM onwards",
      venueName: "Dhanalakshmi Mahal A/C",
      venueArea: "Redhills, Chennai.",
      venueFull: "Dhanalakshmi Mahal A/C, No. 14, Service Road, Bypass Road, Pulliline, Red Hills, Chennai, Tamil Nadu – 600052.",
      landmark: "Near Red Hills Bypass Road & Kumaran Hospital",
      sharedMapLink: EXACT_SEARCH_URL,
      originalShortLink: "https://share.google/YwJz4rITnjW2JSYXo",
      googleMapsSearchLink: EXACT_SEARCH_URL,
      googleMapsDirectionsLink: EXACT_DIRECTIONS_URL,
      plusCodeLink: EXACT_PLUS_CODE_URL,
      targetDateIso: "2026-10-30T06:00:00+05:30",
      calendarUtcStart: "20261030T003000Z", // 6:00 AM IST = 00:30 AM UTC
      calendarUtcEnd: "20261030T043000Z",   // 4-hour window default for calendar
      description: "Sacred Wedding Muhurtham of Meenakshi & Lokesh at Dhanalakshmi Mahal A/C, Red Hills, Chennai.",
    },
  ],
  venueGeneral: {
    name: "Dhanalakshmi Mahal A/C",
    hallType: "Air Conditioned Kalyana Mandapam",
    area: "Pulliline, Red Hills",
    city: "Chennai",
    pincode: "600052",
    landmark: "Near Red Hills Market / Kumaran Hospital / Bypass Service Road",
    plusCode: "55RR+5MH Red Hills, Chennai",
    fullAddress: "No. 14, Service Road, Bypass Road, Pulliline, Red Hills, Chennai, Tamil Nadu – 600052",
    embedMapUrl: EXACT_EMBED_URL,
    searchUrl: EXACT_SEARCH_URL,
    directionsUrl: EXACT_DIRECTIONS_URL,
    plusCodeUrl: EXACT_PLUS_CODE_URL,
  },
};

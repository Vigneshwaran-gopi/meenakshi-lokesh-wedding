# Meenakshi & Lokesh — Luxury Wedding Invitation Website 🌸✨

A bespoke, production-ready, interactive luxury wedding invitation website created for **Meenakshi & Lokesh**. Inspired by traditional South Indian aesthetics, rich floral mandap artistry, champagne gold accents, and refined editorial typography.

---

## 🌟 Features

- **Cinematic Welcome Screen (Section A)**:
  - Hanging floral canopy vines reveal.
  - "Together with our families", "You Are Cordially Invited".
  - Calligraphy names for **Meenakshi & Lokesh**.
  - Interactive "OPEN THE INVITATION" button with golden confetti shower and smooth curtain reveal.
- **Couple Hero & Mandap (Section B)**:
  - Central artwork featuring the South Indian bride in rich maroon/red bridal attire with gold zardozi embroidery and groom in cream/ivory sherwani under an elaborate floral mandap arch with golden pillars.
  - Ambient warm glow and layered botanical depth.
- **Editorial Love & Invitation Message (Section C)**:
  - Elegant typography with lotus motifs, ornamental dividers, and heartwarming message.
  - "View Original Invitation Card" modal for viewing and downloading the original card.
- **Live Wedding Countdown (Section D)**:
  - Real-time countdown to the sacred **Muhurtham: Friday, 30 October 2026, 6:00 AM IST** calculated in the `Asia/Kolkata` timezone.
  - Highlight card for the **Reception: Thursday, 29 October 2026, 6:00 PM onwards**.
- **Wedding Events Timeline (Section E)**:
  - Vertical timeline with fine gold center line and lotus markers.
  - Separate cards for **Reception** and **Muhurtham**.
  - One-click **"Add to Calendar"** (downloads `.ics` file or adds directly to Google Calendar with exact timezone data).
  - One-click **"Map View"** and **"Directions"**.
- **Interactive Location & Map (Section F)**:
  - Dedicated "Find Your Way" section with two styled cards for both events at **Dhanalakshmi Mahal, Redhills, Chennai**.
  - Responsive embedded Google Map.
  - Direct navigation links using user-provided shortlinks and reliable directions.
  - One-click **"Copy Address"** button.
- **Closing Invitation & Blessings (Section H)**:
  - Romantic couple portrait vignette, summary dates, blessings, and smooth "Back to Top" control.
- **Motion & Audio Experience**:
  - Silky 60fps canvas floating rose petals (respects `prefers-reduced-motion`).
  - Traditional auspicious South Indian wedding music player synthesized using the Web Audio API (warm flute/veena melody in Raga Mohanam/Kalyani scale) with mute/play controls. (You can also drop your own `wedding-music.mp3` in the `public` folder).

---

## 🚀 How to Run the Website

### Step 1: Open Terminal in the project folder
```powershell
cd "c:\Users\vigne\OneDrive\Desktop\project"
```

### Step 2: Start Development Server
```powershell
npm run dev
```

### Step 3: Open in Browser
Open your browser and navigate to:
- **On this computer:** [http://localhost:5173/](http://localhost:5173/)
- **On your phone / family devices (same Wi-Fi):** `http://<your-ip>:5173/` (shown in your terminal)

---

## ✏️ How to Edit Wedding Details

All wedding information is centralized in a single file for easy customization:

📂 **`src/data/weddingDetails.ts`**

In this file, you can edit:
- **Couple Names**: `bride`, `groom`, `combined`
- **Invitation Message & Story Text**
- **Event Dates & Times**:
  - `receptionDateIso` & `muhurthamDateIso` (for countdown calculations)
  - `dateFormatted` (e.g., "Thursday, 29 October 2026")
  - `time` (e.g., "6:00 PM onwards", "6:00 AM onwards")
- **Venue & Address**: `Dhanalakshmi Mahal, Redhills, Chennai`
- **Google Maps Links**: `sharedMapLink`, `googleMapsSearchLink`, `googleMapsDirectionsLink`

---

## 📁 Project Structure

```
project/
├── public/
│   ├── favicon.svg            # Luxury monogram gold favicon (M&L)
│   ├── floral-canopy.jpg      # Hanging floral vines top garland
│   ├── mandap-couple.jpg      # South Indian bride & groom under floral mandap
│   └── invitation-card.jpg    # Reference high-resolution wedding card
├── src/
│   ├── assets/                # Image and media assets
│   ├── components/
│   │   ├── WelcomeScreen.tsx      # Section A: Full-screen opening card
│   │   ├── CoupleHero.tsx         # Section B: Illustrated bride & groom mandap
│   │   ├── InvitationMessage.tsx  # Section C: Editorial message & card viewer
│   │   ├── WeddingCountdown.tsx   # Section D: Live countdown (Asia/Kolkata)
│   │   ├── WeddingTimeline.tsx    # Section E: Itinerary with calendar downloads
│   │   ├── VenueMap.tsx           # Section F: Interactive map & directions
│   │   ├── ClosingInvitation.tsx  # Section H: Closing artwork & back to top
│   │   ├── Navbar.tsx             # Sticky luxury monogram navigation
│   │   ├── CalendarButton.tsx     # .ics generator & Google Calendar integration
│   │   ├── MusicToggle.tsx        # Auspicious wedding audio player
│   │   ├── PetalCanvas.tsx        # Floating rose petals animation
│   │   ├── FloralDecorations.tsx  # SVG flourishes, lotus motifs, & garlands
│   │   └── InvitationModal.tsx    # High-res card viewer modal
│   ├── data/
│   │   └── weddingDetails.ts      # Central configuration for all wedding info
│   ├── App.tsx                    # Main app layout
│   ├── index.css                  # Custom styling, fonts, and keyframes
│   └── main.tsx                   # React root entry
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Luxury color palette & typography
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🛠️ Build for Production

When you are ready to publish the website (e.g., on Vercel, Netlify, or GitHub Pages):

```powershell
npm run build
```

This creates a high-performance, minified `dist/` folder ready to be deployed to any hosting service.

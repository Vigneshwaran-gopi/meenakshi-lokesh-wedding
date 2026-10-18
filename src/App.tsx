import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { WelcomeScreen } from './components/WelcomeScreen';
import { CoupleHero } from './components/CoupleHero';
import { InvitationMessage } from './components/InvitationMessage';
import { WeddingCountdown } from './components/WeddingCountdown';
import { WeddingTimeline } from './components/WeddingTimeline';
import { VenueMap } from './components/VenueMap';
import { ClosingInvitation } from './components/ClosingInvitation';
import { PetalCanvas } from './components/PetalCanvas';
import { MusicToggle } from './components/MusicToggle';
import { InvitationModal } from './components/InvitationModal';

export const App: React.FC = () => {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8EF] text-[#254B35] font-cormorant relative selection:bg-[#E8B9C1] selection:text-[#862D46]">
      {/* Floating Rose Petals Ambient Layer */}
      <PetalCanvas />

      {/* Floating Music Control */}
      <MusicToggle />

      {/* Section A: Cinematic Welcome Overlay Screen */}
      <WelcomeScreen
        isOpen={isInvitationOpened}
        onOpen={() => setIsInvitationOpened(true)}
      />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Wedding Invitation Website Flow */}
      <main className="relative">
        {/* Section B: Couple Hero with Illustrated Mandap */}
        <CoupleHero />

        {/* Section C: Love & Invitation Message */}
        <InvitationMessage onViewOriginalCard={() => setIsModalOpen(true)} />

        {/* Section D: Live Wedding Countdown */}
        <div id="countdown">
          <WeddingCountdown />
        </div>

        {/* Section E: Wedding Events Timeline */}
        <WeddingTimeline />

        {/* Section F: Interactive Venue & Map */}
        <VenueMap />

        {/* Section H: Final Closing Invitation */}
        <ClosingInvitation />
      </main>

      {/* Original Invitation Card Viewer Modal */}
      <InvitationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;

import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudioFile, setHasAudioFile] = useState(false);
  const isPlayingRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const activeNodesRef = useRef<{ stop: () => void }[]>([]);
  const loopTimeoutRef = useRef<number | null>(null);

  // Check if an external or local audio file exists in public/wedding-music.mp3
  useEffect(() => {
    const audio = new Audio('/wedding-music.mp3');
    audio.oncanplay = () => setHasAudioFile(true);
    audio.onerror = () => setHasAudioFile(false);
    audioRef.current = audio;
  }, []);

  const stopAllSynthesizerAudio = () => {
    if (loopTimeoutRef.current) {
      window.clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }

    // Stop and clear all active playing nodes
    activeNodesRef.current.forEach((node) => {
      try {
        node.stop();
      } catch {
        // Ignore if already stopped
      }
    });
    activeNodesRef.current = [];

    // Fade out master gain gently if context exists
    if (masterGainRef.current && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
        masterGainRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1);
      } catch {
        // ignore
      }
    }
  };

  // Web Audio Synthesizer for traditional auspicious raga melody (Mohanam scale)
  const playSynthesizedMelody = () => {
    try {
      stopAllSynthesizerAudio();

      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master gain for smooth volume control
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.3);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Traditional auspicious pentatonic notes (Raga Mohanam: Sa, Ri, Ga, Pa, Dha, Sa')
      const notes = [
        { f: 261.63, dur: 0.65 }, // Sa (C4)
        { f: 293.66, dur: 0.65 }, // Ri (D4)
        { f: 329.63, dur: 0.8 },  // Ga (E4)
        { f: 392.00, dur: 0.8 },  // Pa (G4)
        { f: 440.00, dur: 1.0 },  // Dha (A4)
        { f: 523.25, dur: 1.2 },  // Sa' (C5)
        { f: 440.00, dur: 0.7 },  // Dha
        { f: 392.00, dur: 0.7 },  // Pa
        { f: 329.63, dur: 0.9 },  // Ga
        { f: 293.66, dur: 0.7 },  // Ri
        { f: 261.63, dur: 1.5 },  // Sa
      ];

      // Tanpura drone baseline (Sa - Pa)
      const droneOsc1 = ctx.createOscillator();
      const droneOsc2 = ctx.createOscillator();
      const droneGain = ctx.createGain();

      droneOsc1.type = 'triangle';
      droneOsc1.frequency.setValueAtTime(130.81, ctx.currentTime); // C3
      droneOsc2.type = 'sine';
      droneOsc2.frequency.setValueAtTime(196.00, ctx.currentTime); // G3

      droneGain.gain.setValueAtTime(0.03, ctx.currentTime);
      droneOsc1.connect(droneGain);
      droneOsc2.connect(droneGain);
      droneGain.connect(masterGain);

      droneOsc1.start();
      droneOsc2.start();

      activeNodesRef.current.push(droneOsc1, droneOsc2);

      let startTime = ctx.currentTime + 0.2;

      notes.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm flute / shehnai tone blend
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.f, startTime);

        // Soft attack & decay envelope
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.07, startTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + note.dur - 0.05);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(startTime);
        osc.stop(startTime + note.dur);

        activeNodesRef.current.push(osc);
        startTime += note.dur;
      });

      const totalMelodyDuration = startTime - ctx.currentTime;

      // Loop after completion if still active
      loopTimeoutRef.current = window.setTimeout(() => {
        try {
          droneOsc1.stop();
          droneOsc2.stop();
        } catch {
          // ignore
        }
        if (isPlayingRef.current) {
          playSynthesizedMelody();
        }
      }, totalMelodyDuration * 1000);
    } catch {
      // AudioContext may be restricted by browser until interacted
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (hasAudioFile && audioRef.current) {
        audioRef.current.pause();
      } else {
        stopAllSynthesizerAudio();
      }
    } else {
      isPlayingRef.current = true;
      setIsPlaying(true);
      if (hasAudioFile && audioRef.current) {
        audioRef.current.play().catch(() => playSynthesizedMelody());
      } else {
        playSynthesizedMelody();
      }
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      stopAllSynthesizerAudio();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause background wedding music' : 'Play auspicious wedding music'}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${
          isPlaying
            ? 'bg-burgundy text-ivory border-gold/70 shadow-burgundy/30 scale-105'
            : 'bg-ivory/95 text-burgundy border-gold/50 shadow-black/10 hover:border-gold hover:scale-105'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-gold animate-pulse" />
            <span className="text-xs font-serif tracking-widest uppercase">Music Playing</span>
            {/* Audio Wave Bars */}
            <span className="flex items-center gap-0.5 ml-1 h-3">
              <span className="w-0.5 h-full bg-gold rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-0.5 h-2/3 bg-gold rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-0.5 h-4/5 bg-gold rounded-full animate-bounce [animation-delay:300ms]" />
            </span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-gold" />
            <VolumeX className="w-4 h-4 text-burgundy/70" />
            <span className="text-xs font-serif tracking-widest uppercase">Play Music</span>
          </>
        )}
      </button>
    </div>
  );
};

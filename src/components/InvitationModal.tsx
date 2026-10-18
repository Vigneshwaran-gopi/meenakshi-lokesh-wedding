import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Share2, Check } from 'lucide-react';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvitationModal: React.FC<InvitationModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Meenakshi & Lokesh Wedding Invitation',
          text: 'You are cordially invited to celebrate the wedding of Meenakshi & Lokesh on 29 & 30 October 2026 at Dhanalakshmi Mahal, Redhills, Chennai.',
          url: window.location.href,
        });
      } catch {
        // Share dismissed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm">
          {/* Backdrop click to dismiss */}
          <div className="fixed inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 max-w-md w-full bg-ivory rounded-2xl overflow-hidden shadow-2xl border border-gold/50 my-auto"
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-ivory-warm border-b border-gold/30">
              <span className="font-serif text-xs uppercase tracking-widest text-burgundy font-semibold">
                Original Invitation Card
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleShare}
                  aria-label="Share invitation link"
                  title="Share or Copy Link"
                  className="p-1.5 rounded-full hover:bg-gold/20 text-forest transition-colors relative"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-forest" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
                <a
                  href="/invitation-card.jpg"
                  download="Meenakshi-Lokesh-Wedding-Invitation.jpg"
                  aria-label="Download invitation card"
                  title="Download Image"
                  className="p-1.5 rounded-full hover:bg-gold/20 text-forest transition-colors"
                >
                  <Download className="w-4 h-4 text-forest" />
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close invitation modal"
                  className="p-1.5 rounded-full hover:bg-burgundy/10 text-burgundy transition-colors ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Notification Badge if copied */}
            {copied && (
              <div className="bg-forest/10 border-b border-forest/20 text-forest text-center py-1.5 text-xs font-serif font-medium">
                Invitation link copied to clipboard!
              </div>
            )}

            {/* High-res Card Display */}
            <div className="p-3 bg-gradient-to-b from-[#F3EEDC] to-[#FAF8EF] max-h-[75vh] overflow-y-auto">
              <img
                src="/invitation-card.jpg"
                alt="Meenakshi and Lokesh Wedding Invitation Card"
                className="w-full h-auto rounded-lg shadow-md border border-gold/20"
              />
            </div>

            {/* Footer with Actions */}
            <div className="p-3 bg-ivory-warm border-t border-gold/30 flex items-center justify-between gap-2 text-xs font-serif">
              <span className="text-forest/70">Meenakshi &amp; Lokesh • 2026</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-burgundy text-ivory text-xs uppercase font-medium hover:bg-burgundy-light transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

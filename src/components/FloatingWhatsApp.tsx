import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp, X } from 'lucide-react';
import { BRAND_SPECS } from '../data/interiorData';

export const FloatingConcierge: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating WhatsApp Concierge with Tooltip */}
      <div className="relative pointer-events-auto flex items-center">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="mr-3 px-3.5 py-2 bg-white text-stone-900 border border-stone-200 text-xs shadow-xl rounded-xs flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-stone-800">Chat with Principal Architect</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-stone-400 hover:text-stone-700 ml-1 cursor-pointer"
                aria-label="Dismiss tooltip"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={BRAND_SPECS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-13 h-13 rounded-full bg-[#032517] text-[#F3E3BE] border border-[#B89547]/50 flex items-center justify-center shadow-[0_6px_24px_rgba(3,37,23,0.35)] cursor-pointer group"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle outer glowing ring */}
          <span className="absolute -inset-1 rounded-full border border-emerald-500/30 animate-ping opacity-40 pointer-events-none" />
          <MessageSquare className="w-6 h-6 transition-transform group-hover:rotate-12" />
        </motion.a>
      </div>

      {/* Smooth Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="pointer-events-auto w-10 h-10 rounded-full bg-white text-[#032517] border border-stone-300 flex items-center justify-center shadow-lg hover:bg-stone-50 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

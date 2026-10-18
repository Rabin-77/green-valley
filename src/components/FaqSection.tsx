import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/interiorData';
import { ChevronDown } from 'lucide-react';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';

interface FaqSectionProps {
  headerFont?: HeaderFontOption;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ headerFont = 'playfair' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  return (
    <section className="py-20 md:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#B89547] font-semibold block mb-2">
            Clarity & Reassurance
          </span>
          <h2 className={`${fontClass} text-3xl sm:text-4xl text-[#032517] font-normal`}>
            Frequently Addressed Questions
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Essential facts on our single-contract turnkey methodology, workshop fabrication, and regional service parameters.
          </p>
        </div>

        <div className="max-w-3xl space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50"
                >
                  <span className="text-sm md:text-base font-semibold text-[#032517]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#032517]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JOURNAL_ARTICLES } from '../data/interiorData';
import { JournalArticle } from '../types';
import { ArrowUpRight, BookOpen, Clock, X } from 'lucide-react';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';

interface JournalSectionProps {
  headerFont?: HeaderFontOption;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ headerFont = 'playfair' }) => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  return (
    <section id="journal" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header with Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 mb-3 font-semibold">
              <span className="text-[#032517]">The Atelier Journal</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Perspectives on Modern Living</span>
            </div>
            <h2 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-normal text-[#032517] leading-tight`}>
              Architectural Essays & Spatial Theory
            </h2>
          </div>
          <p className="text-stone-600 text-sm md:text-base max-w-md font-normal leading-relaxed">
            Private quarterly perspectives, material studies, and design treatises written by our principal architects in Nagercoil.
          </p>
        </motion.div>

        {/* 3 Articles Grid with Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setActiveArticle(article)}
              className="bg-white border border-stone-200 p-8 flex flex-col justify-between hover:border-[#032517] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-xl rounded-xs group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 mb-4 font-mono">
                  <span>{article.date}</span>
                  <span className="text-[#B89547] font-sans font-semibold uppercase tracking-wider text-[11px]">
                    {article.category}
                  </span>
                </div>

                <h3 className={`${fontClass} text-2xl text-[#032517] font-medium group-hover:text-[#1B3B2B] transition-colors mb-3 leading-snug`}>
                  {article.title}
                </h3>

                <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
                <span className="text-[#032517] font-semibold flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                  Read Essay <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Full Essay Modal */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-stone-950/75 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FAF8F5] border border-stone-300 w-full max-w-3xl p-6 md:p-10 shadow-2xl rounded-xs max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#B89547] font-semibold">
                      {activeArticle.category} · {activeArticle.date}
                    </span>
                    <h3 className={`${fontClass} text-2xl md:text-3xl text-[#032517] font-normal mt-1`}>
                      {activeArticle.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-1.5 text-stone-500 hover:text-stone-900 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-stone-700 leading-relaxed text-sm md:text-base">
                  {activeArticle.fullContent.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
                  <div className="text-xs text-stone-500">
                    Published by Green Valley Atelier · Nagercoil Studio
                  </div>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 bg-[#032517] text-[#F3E3BE] text-xs uppercase tracking-wider font-semibold hover:bg-[#1B3B2B] cursor-pointer rounded-xs"
                  >
                    Close Essay
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

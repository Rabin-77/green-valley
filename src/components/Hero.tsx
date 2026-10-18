import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_SPECS, HERO_IMAGE } from '../data/interiorData';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePortfolio: () => void;
  headerFont?: HeaderFontOption;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExplorePortfolio,
  headerFont = 'playfair'
}) => {
  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  const metricsData = [
    { value: 150, suffix: '+', label: 'Sanctuaries Built', detail: 'Private villas & penthouses across South India' },
    { value: 185, suffix: 'k+', label: 'Commissioned Sq.Ft', detail: 'Turnkey architectural fit-outs executed' },
    { value: 100, suffix: '%', label: 'Craft Guarantee', detail: 'Zero-punchlist quality assurance standard' },
    { value: 12, suffix: '+', label: 'Years of Atelier Craft', detail: 'Continuous leadership in Nagercoil since 2012' }
  ];

  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Atelier Kicker Strip with Smooth Fade */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 text-xs tracking-[0.2em] uppercase text-stone-500 mb-6 font-semibold"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#032517] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89547] animate-pulse" />
              {BRAND_SPECS.tagline}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="hidden sm:inline">{BRAND_SPECS.subtagline}</span>
          </div>

          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-2 text-stone-500 font-mono text-[11px] bg-white px-2.5 py-1 border border-stone-200 rounded-xs shadow-2xs"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B89547]" />
            <span>{BRAND_SPECS.coordinates}</span>
          </motion.div>
        </motion.div>

        {/* Hero Title & Description Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-4"
          >
            {/* Regional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#032517]/10 text-[#032517] border border-[#032517]/20 rounded-xs text-xs font-semibold uppercase tracking-widest"
            >
              <Sparkles className="w-3 h-3 text-[#B89547]" />
              <span>{BRAND_SPECS.locationBadge}</span>
            </motion.div>

            {/* Headline with Letter Animation */}
            <h1 className={`${fontClass} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.04] text-[#032517] tracking-tight`}>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="block"
              >
                BRING MAGIC
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="italic font-normal text-[#B89547] block"
              >
                TO HOME.
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-end"
          >
            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-8 font-normal">
              {BRAND_SPECS.heroSubheadline}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#032517] text-[#F3E3BE] text-xs uppercase tracking-widest font-semibold hover:bg-[#1B3B2B] hover:text-white transition-all cursor-pointer shadow-[0_4px_20px_rgba(3,37,23,0.18)] rounded-xs group"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExplorePortfolio}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-stone-300 text-stone-800 text-xs uppercase tracking-widest font-semibold hover:border-[#032517] hover:text-[#032517] transition-all cursor-pointer bg-white rounded-xs"
              >
                Explore Projects
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={BRAND_SPECS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 border border-stone-200 text-stone-600 text-xs font-semibold hover:text-[#032517] hover:border-[#032517] transition-all bg-white/60 rounded-xs"
                title="Direct WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#032517]" />
                <span>+91 822 006 0017</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Featured Visual Canvas Frame with Subtle Zoom Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-16/9 md:aspect-21/9 overflow-hidden bg-stone-900 border border-stone-300 shadow-xl mb-12 rounded-xs group"
        >
          <img
            src={HERO_IMAGE}
            alt="Signature Villa Series by Green Valley Interiors"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#032517]/90 via-[#032517]/25 to-transparent flex items-end p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between w-full text-white gap-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-[#F3E3BE] font-semibold block mb-1">
                  Signature Commission · Nagercoil Presidential Penthouse
                </span>
                <p className={`${fontClass} text-2xl md:text-4xl font-light text-white`}>
                  The Dravidian Modernist Pavilion
                </p>
              </motion.div>

              <div className="text-xs md:text-sm text-stone-200 flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89547]" />
                  Turnkey Execution
                </span>
                <span aria-hidden="true" className="text-[#F3E3BE]">·</span>
                <span>High-End Millwork</span>
                <span aria-hidden="true" className="text-[#F3E3BE]">·</span>
                <span>Zero Cost Drift</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metrics Strip with Smooth Counter Roll-up Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-6 border-t border-stone-200">
          {metricsData.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1"
            >
              <div className="flex items-center gap-2 text-stone-400 mb-1">
                <span className="w-1.5 h-1.5 bg-[#B89547] rounded-full" />
                <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500">
                  {metric.label}
                </span>
              </div>
              <div className={`${fontClass} text-3xl md:text-4xl font-normal text-[#032517] tabular-nums`}>
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-xs text-stone-500 leading-snug">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

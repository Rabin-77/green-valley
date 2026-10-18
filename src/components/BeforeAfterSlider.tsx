import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, Sparkles, Check } from 'lucide-react';
import { BEFORE_IMAGE, AFTER_IMAGE } from '../data/interiorData';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';

interface BeforeAfterSliderProps {
  headerFont?: HeaderFontOption;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ headerFont = 'playfair' }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const hotspots = [
    {
      id: 1,
      x: 22,
      y: 38,
      title: 'Acoustic Teak & Walnut Panelling',
      desc: 'Precision CNC-milled 12mm timber slats dampening room echoes and housing concealed climate return ducts.'
    },
    {
      id: 2,
      x: 52,
      y: 18,
      title: 'Circadian Cove Architecture',
      desc: 'Indirect 2700K warm LED glow channel cast within drywall false ceilings with zero direct glare.'
    },
    {
      id: 3,
      x: 35,
      y: 80,
      title: 'Dravidian Granite & Travertine Slabs',
      desc: 'Continuous 1200x1200mm stone subfloor with acoustic decoupling membrane and micro-grout lines.'
    },
    {
      id: 4,
      x: 68,
      y: 58,
      title: 'Bespoke In-House Seating',
      desc: 'Custom low-profile curved bouclé suite fabricated in Green Valley Nagercoil carpentry workshop.'
    }
  ];

  return (
    <section id="metamorphosis" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 mb-3 font-semibold">
              <span className="text-[#032517]">Spatial Metamorphosis</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Turnkey Precision</span>
            </div>
            <h2 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-normal text-[#032517] leading-tight`}>
              From Bare Concrete to Sanctuary.
            </h2>
          </div>
          <p className="text-stone-600 text-sm md:text-base max-w-md font-normal leading-relaxed">
            Drag the interactive slider below to reveal how Green Valley orchestrates empty floor plans into cinematic, warm, functional masterworks.
          </p>
        </motion.div>

        {/* Preset Selector Buttons with Animated Active Pill */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2">
            {[
              { val: 0, label: 'Raw Structure Phase (0%)' },
              { val: 50, label: 'Interactive Revelation (50%)' },
              { val: 100, label: 'Finished Turnkey Interior (100%)' }
            ].map((btn) => (
              <motion.button
                key={btn.val}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSliderPosition(btn.val)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold border transition-all cursor-pointer rounded-xs ${
                  sliderPosition === btn.val
                    ? 'bg-[#032517] text-[#F3E3BE] border-[#032517] shadow-xs'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                }`}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>

          <div className="text-xs text-stone-500 font-mono tabular-nums flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B89547] animate-pulse" />
            <span>Turnkey Reveal: {Math.round(sliderPosition)}%</span>
          </div>
        </div>

        {/* Interactive Comparison Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-16/9 md:aspect-21/9 overflow-hidden bg-stone-900 select-none cursor-ew-resize border border-stone-300 shadow-xl rounded-xs group"
        >
          {/* Base Layer: Before Image (Raw Concrete) */}
          <img
            src={BEFORE_IMAGE}
            alt="Raw architectural canvas before renovation"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Top Layer: After Image (Turnkey Luxury) clipped via clipPath */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img
              src={AFTER_IMAGE}
              alt="Transformed living space after Green Valley turnkey execution"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Pulsing Hotspots on the Luxury Area */}
            {hotspots.map((hs) => {
              if (hs.x > sliderPosition) return null;
              const isActive = activeHotspot === hs.id;
              return (
                <div
                  key={hs.id}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/hs"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(isActive ? null : hs.id);
                  }}
                >
                  <button
                    className="relative w-7 h-7 rounded-full bg-[#032517]/95 text-white flex items-center justify-center border border-[#F3E3BE] shadow-xl cursor-pointer hover:scale-115 transition-transform"
                    aria-label={hs.title}
                  >
                    {/* Glowing Ping Ring */}
                    <span className="absolute -inset-1 rounded-full border border-[#B89547] animate-ping opacity-75" />
                    <span className="w-2 h-2 rounded-full bg-[#B89547]" />
                  </button>

                  {/* Hotspot Tooltip */}
                  <div
                    className={`absolute bottom-9 left-1/2 -translate-x-1/2 w-64 p-3.5 bg-[#032517]/95 text-stone-100 text-xs backdrop-blur-md border border-[#B89547]/50 shadow-2xl pointer-events-auto transition-all duration-200 rounded-xs ${
                      isActive
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 translate-y-1 pointer-events-none group-hover/hs:opacity-100 group-hover/hs:scale-100 group-hover/hs:pointer-events-auto'
                    }`}
                  >
                    <p className="font-semibold text-[#F3E3BE] mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#B89547]" />
                      <span>{hs.title}</span>
                    </p>
                    <p className="text-stone-300 font-normal leading-relaxed">{hs.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Badges on Top Corners */}
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 bg-[#032517]/85 text-[#F3E3BE] text-xs uppercase tracking-widest backdrop-blur-xs font-semibold border border-[#B89547]/40 pointer-events-none rounded-xs shadow-sm">
            Transformed Living Space
          </div>
          <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 bg-stone-900/85 text-stone-300 text-xs uppercase tracking-widest backdrop-blur-xs font-semibold border border-stone-700/60 pointer-events-none rounded-xs shadow-sm">
            Raw Architectural Canvas
          </div>

          {/* Vertical Slider Handle Line with Animated Pulse Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#F3E3BE] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#032517] text-[#F3E3BE] flex items-center justify-center border-2 border-[#F3E3BE] shadow-2xl"
            >
              <Sliders className="w-4 h-4 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

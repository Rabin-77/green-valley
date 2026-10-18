import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Maximize2, Calendar, Check, X } from 'lucide-react';
import { PROJECTS } from '../data/interiorData';
import { Project } from '../types';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
  headerFont?: HeaderFontOption;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenConsultation,
  headerFont = 'playfair'
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'residential', label: 'Private Sanctuaries' },
    { id: 'luxury', label: 'Luxury Suites' },
    { id: 'office', label: 'Executive Offices' },
    { id: 'culinary', label: 'Culinary & Dining' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 mb-3 font-semibold">
              <span className="text-[#032517]">Curated Archive · 2021—2025</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Built Sanctuaries</span>
            </div>
            <h2 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-normal text-[#032517] leading-tight`}>
              Distinguished Case Studies & Monographs
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs uppercase tracking-widest text-[#B89547] font-semibold block">
              185,000+ Commissioned Sq.Ft
            </span>
            <span className="text-xs text-stone-500">
              Zero-Punchlist Quality Guarantee Standard
            </span>
          </div>
        </motion.div>

        {/* Filter Segmented Controls with layoutId Animated Indicator */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/60 border border-stone-300 max-w-fit mb-12 overflow-x-auto rounded-xs">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors cursor-pointer rounded-xs ${
                  isSelected ? 'text-[#F3E3BE]' : 'text-stone-600 hover:text-[#032517]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 bg-[#032517] rounded-xs shadow-xs"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Smooth AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col bg-white border border-stone-200 hover:border-[#032517] transition-all duration-300 shadow-xs hover:shadow-2xl rounded-xs overflow-hidden"
              >
                {/* Image Frame with Zoom */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#032517]/90 text-[#F3E3BE] text-[10px] uppercase tracking-widest font-mono font-semibold backdrop-blur-xs shadow-sm">
                    {project.monographNumber}
                  </div>
                  <div className="absolute inset-0 bg-[#032517]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/95 text-[#032517] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 shadow-xl backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Inspect Monograph <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content with Zero-Pill Typography */}
                <div className="p-6 flex flex-col justify-between grow">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2 font-medium">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums font-mono">{project.scale}</span>
                    </div>

                    <h3 className={`${fontClass} text-2xl text-[#032517] font-medium group-hover:text-[#1B3B2B] transition-colors mb-2`}>
                      {project.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="text-stone-400 font-mono text-[11px] truncate max-w-[70%]">
                      Discipline: {project.discipline}
                    </span>
                    <span className="text-[#032517] font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Details <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Monograph Detail Modal with Spring Reveal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-stone-950/75 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FAF8F5] border border-stone-300 w-full max-w-4xl p-6 md:p-8 shadow-2xl rounded-xs max-h-[92vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#B89547] font-mono font-semibold">
                      {selectedProject.monographNumber} · {selectedProject.categoryLabel}
                    </span>
                    <h3 className={`${fontClass} text-2xl md:text-3xl text-[#032517] font-normal`}>
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 text-stone-500 hover:text-stone-900 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal image */}
                <div className="relative aspect-16/9 overflow-hidden bg-stone-900 mb-6 border border-stone-300 rounded-xs">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Specs row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white border border-stone-200 text-xs mb-6">
                  <div>
                    <span className="text-stone-400 uppercase tracking-wider block mb-1">Scale</span>
                    <span className="font-semibold text-stone-900 flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-[#B89547]" />
                      {selectedProject.scale}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase tracking-wider block mb-1">Location</span>
                    <span className="font-semibold text-stone-900 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B89547]" />
                      {selectedProject.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase tracking-wider block mb-1">Delivered</span>
                    <span className="font-semibold text-stone-900 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#B89547]" />
                      {selectedProject.completedYear}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase tracking-wider block mb-1">Discipline</span>
                    <span className="font-semibold text-stone-900 truncate">
                      {selectedProject.discipline}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-stone-700">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#B89547] font-bold mb-2">
                      Architectural Narrative
                    </h4>
                    <p className="leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#B89547] font-bold mb-3">
                      Structural & Spatial Axioms
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      {selectedProject.architecturalAxioms.map((ax, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{ax}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.clientQuote && (
                    <div className="p-5 bg-[#F4EFEA] border-l-2 border-[#032517]">
                      <p className={`${fontClass} text-base italic text-stone-800 mb-2`}>
                        "{selectedProject.clientQuote.text}"
                      </p>
                      <span className="text-xs font-semibold text-[#032517] uppercase tracking-wider">
                        {selectedProject.clientQuote.author} · {selectedProject.clientQuote.role}
                      </span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 border border-stone-300 text-xs uppercase tracking-wider text-stone-700 hover:text-stone-900 cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenConsultation();
                      }}
                      className="px-6 py-2.5 bg-[#032517] text-[#F3E3BE] text-xs uppercase tracking-widest font-semibold hover:bg-[#1B3B2B] cursor-pointer rounded-xs"
                    >
                      Inquire About Similar Architecture
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

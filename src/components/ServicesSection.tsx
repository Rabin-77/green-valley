import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/interiorData';
import { ServiceDetail } from '../types';
import { Check, ArrowRight, Layers, Briefcase, Store, Wrench, X, Clock, Shield } from 'lucide-react';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
  headerFont?: HeaderFontOption;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenConsultation,
  headerFont = 'playfair'
}) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  const icons = [Layers, Briefcase, Store, Wrench];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section Header with Staggered Fade */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 mb-3 font-semibold">
              <span className="text-[#032517]">Our Curated Practices</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Turnkey Execution</span>
            </div>
            <h2 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-normal text-[#032517] leading-tight`}>
              Comprehensive Architectural Interior Solutions
            </h2>
          </div>
          <p className="text-stone-600 text-sm md:text-base max-w-md font-normal leading-relaxed">
            Every space has an emotional timbre. We blend technical engineering with tailored tactile finishes to elevate everyday life across residential, corporate, and luxury domains.
          </p>
        </motion.div>

        {/* Services 4-Column Grid with Smooth Stagger & Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-stone-200 p-8 flex flex-col justify-between hover:border-[#032517] transition-all duration-300 shadow-xs hover:shadow-xl rounded-xs group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#B89547] font-bold">
                      {service.number} • {service.subtitle}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-10 h-10 bg-[#FAF8F5] text-[#032517] flex items-center justify-center rounded-xs group-hover:bg-[#032517] group-hover:text-[#F3E3BE] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <h3 className={`${fontClass} text-2xl text-[#032517] font-medium mb-3 group-hover:text-[#1B3B2B] transition-colors`}>
                    {service.title}
                  </h3>

                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <div className="space-y-2 border-t border-stone-100 pt-4">
                    {service.scopePoints.slice(0, 3).map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#032517] shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100">
                  <div className="w-full py-2.5 px-3 border border-stone-200 text-[#032517] group-hover:bg-[#032517] group-hover:text-[#F3E3BE] group-hover:border-[#032517] transition-all text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 rounded-xs">
                    <span>View Scope Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Four Principles of Form with Animated Hairline Header */}
        <div className="mt-20 pt-16 border-t border-stone-200">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#B89547] font-semibold block mb-2">
              Non-Negotiable Convictions
            </span>
            <h3 className={`${fontClass} text-3xl md:text-4xl text-[#032517] font-normal`}>
              The Four Principles of Form
            </h3>
            <p className="text-stone-600 text-sm mt-2 leading-relaxed">
              We reject decorative excess and fleeting styling fads. Every spatial decision is rigorously vetted against our timeless architectural matrix.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Material Authenticity',
                sub: 'Zero Synthetic Veneers',
                desc: 'We employ honest stone, unlacquered bronze, patinated leathers, and sustainably harvested FSC hardwoods that age with nobility.'
              },
              {
                num: '02',
                title: 'Light as Sculpture',
                sub: 'Circadian Infiltration',
                desc: 'Harnessing natural dawn-to-dusk solar orientations. Apertures and shadowlines breathe kinetic spirit into structural stillness.'
              },
              {
                num: '03',
                title: 'Ergonomic Serenity',
                sub: 'Effortless Utility',
                desc: 'Seamless spatial flow, concealed service pockets, and intuitive programmatic adjacencies produce acoustic stillness and calm.'
              },
              {
                num: '04',
                title: 'Turnkey Accountability',
                sub: 'Complete Ownership',
                desc: 'Exacting engineering precision, total procurement transparency, and military-grade scheduling ensure zero cost surprises.'
              }
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-white border border-stone-200/80 rounded-xs space-y-2 hover:border-[#032517] transition-all shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#B89547]">{p.num}</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">{p.sub}</span>
                </div>
                <h4 className={`${fontClass} text-lg font-medium text-[#032517]`}>{p.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-stone-950/75 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FAF8F5] border border-stone-300 w-full max-w-2xl p-6 md:p-8 shadow-2xl rounded-xs max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#B89547] font-semibold">
                      Practice {selectedService.number} · {selectedService.subtitle}
                    </span>
                    <h3 className={`${fontClass} text-2xl md:text-3xl text-[#032517] font-normal`}>
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 text-stone-500 hover:text-stone-900 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6 text-sm text-stone-700">
                  <p className="leading-relaxed">{selectedService.description}</p>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-white border border-stone-200 text-xs">
                    <div>
                      <span className="text-stone-400 uppercase tracking-wider block mb-1">Timeline</span>
                      <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#B89547]" />
                        {selectedService.timeline}
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-400 uppercase tracking-wider block mb-1">Quality Standard</span>
                      <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#032517]" />
                        Zero Punchlist
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-3">
                      Architectural Deliverables
                    </h4>
                    <ul className="space-y-2 text-xs">
                      {selectedService.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-xs text-stone-500">Ready to initiate design feasibility?</span>
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        onOpenConsultation();
                      }}
                      className="px-5 py-2.5 bg-[#032517] text-[#F3E3BE] text-xs uppercase tracking-widest font-semibold hover:bg-[#1B3B2B] cursor-pointer rounded-xs"
                    >
                      Book Consultation
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

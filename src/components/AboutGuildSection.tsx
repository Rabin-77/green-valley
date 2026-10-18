import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/interiorData';
import { Award, ShieldCheck, Compass, CheckCircle } from 'lucide-react';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';

interface AboutGuildSectionProps {
  headerFont?: HeaderFontOption;
}

export const AboutGuildSection: React.FC<AboutGuildSectionProps> = ({ headerFont = 'playfair' }) => {
  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200">
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
              <span className="text-[#032517]">Atelier Manifesto · Est. 2012</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Nagercoil · Kanyakumari · Trivandrum</span>
            </div>
            <h2 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-normal text-[#032517] leading-tight`}>
              The Philosophy of Poise, Provenance & Space.
            </h2>
          </div>
          <p className="text-stone-600 text-sm md:text-base max-w-md font-normal leading-relaxed">
            We orchestrate living volumes that balance the contemplative silence of ancient South Indian stone with the fluid precision of European modernism.
          </p>
        </motion.div>

        {/* Narrative Split with Hover Glow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20 bg-white p-8 md:p-12 border border-stone-200 rounded-xs shadow-xs">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-5"
          >
            <span className="text-xs uppercase tracking-widest text-[#B89547] font-semibold block">
              The Studio Story
            </span>
            <h3 className={`${fontClass} text-2xl md:text-3xl text-[#032517] font-normal leading-snug`}>
              Rooted in Dravidian Artisanship, <br />
              Refined by Continental Clarity.
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              Green Valley was inaugurated in 2012 within the coastal hinterlands of Nagercoil, Tamil Nadu. Surrounded by centuries of monolithic granite stonemasonry and indigenous teak woodcraft, our founders recognized a rare opportunity: to synthesize native architectural vernacular with the rational restraint of European modernism.
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              From our primary design chambers at Praise Complex, our atelier commands an integrated network of generational joiners, stone carvers, and metallurgical artisans. We eliminate the friction between conceptual sketches and final physical execution, ensuring an uninterrupted lineage of quality.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs">
              <div>
                <span className="text-stone-400 uppercase tracking-wider block mb-1">Master Craft Guilds</span>
                <span className="font-mono text-xl font-bold text-[#032517]">08+ Guilds</span>
                <span className="text-stone-500 block text-[11px]">Under studio patronage</span>
              </div>
              <div>
                <span className="text-stone-400 uppercase tracking-wider block mb-1">Bespoke Millwork</span>
                <span className="font-mono text-xl font-bold text-[#032517]">100% In-House</span>
                <span className="text-stone-500 block text-[11px]">Engineered in Nagercoil</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-[#032517] text-[#FAF8F5] p-8 md:p-10 rounded-xs space-y-6 shadow-xl relative overflow-hidden"
          >
            <span className="text-xs uppercase tracking-widest text-[#F3E3BE] font-semibold block">
              Leadership Axiom
            </span>
            <p className={`${fontClass} text-xl md:text-2xl font-light italic text-[#F3E3BE] leading-relaxed`}>
              “We do not decorate rooms; we sculpt the psychic boundaries within which families converse, heal, celebrate, and contemplate their legacies.”
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="font-semibold text-white text-sm">Ar. V. Anandasundaram</p>
              <p className="text-xs text-[#F3E3BE]/80">Founder & Principal Architect · B.Arch, M.Sc (Milan) · IIA Member</p>
            </div>
          </motion.div>
        </div>

        {/* Guild Leadership Grid with Stagger & Lift */}
        <div>
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-[#B89547] font-semibold block mb-2">
              Guild Leadership
            </span>
            <h3 className={`${fontClass} text-2xl md:text-3xl text-[#032517] font-normal`}>
              The Minds & Hands Sculpting Your Realm
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-stone-200 p-6 flex flex-col justify-between rounded-xs hover:border-[#032517] transition-all shadow-xs hover:shadow-xl group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#FAF8F5] text-[#032517] rounded-xs flex items-center justify-center font-serif text-lg font-bold mb-4 border border-stone-200 group-hover:bg-[#032517] group-hover:text-[#F3E3BE] transition-colors">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>

                  <h4 className={`${fontClass} text-xl text-[#032517] font-medium mb-1`}>
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#B89547] font-semibold uppercase tracking-wider mb-1">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-stone-400 font-mono mb-4">
                    {member.credentials} · {member.experience}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialization.slice(0, 2).map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 bg-stone-100 text-stone-700 text-[10px] rounded-2xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

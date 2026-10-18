import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, MessageSquare, MapPin, Mail, CheckCircle2, Calculator, Info } from 'lucide-react';
import { BRAND_SPECS } from '../data/interiorData';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';

interface InquiryEstimatorSectionProps {
  headerFont?: HeaderFontOption;
}

export const InquiryEstimatorSection: React.FC<InquiryEstimatorSectionProps> = ({ headerFont = 'playfair' }) => {
  const [projectType, setProjectType] = useState<'residential' | 'villa' | 'office' | 'commercial'>('residential');
  const [areaSqFt, setAreaSqFt] = useState<number>(2400);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  // Live turnkey cost calculation based on project type & sq.ft
  const { minCostINR, maxCostINR, estimatedDays } = useMemo(() => {
    const ratePerSqFt = {
      residential: 2400,
      villa: 3200,
      office: 2200,
      commercial: 2800
    }[projectType];

    const base = areaSqFt * ratePerSqFt;
    const min = Math.round(base * 0.95);
    const max = Math.round(base * 1.1);

    let days = 60;
    if (areaSqFt > 1500) days = 75;
    if (areaSqFt > 3000) days = 95;
    if (areaSqFt > 6000) days = 135;

    return { minCostINR: min, maxCostINR: max, estimatedDays: days };
  }, [projectType, areaSqFt]);

  const formatLakhs = (val: number) => {
    const inLakhs = val / 100000;
    if (inLakhs >= 100) {
      return `₹ ${(inLakhs / 100).toFixed(2)} Cr`;
    }
    return `₹ ${inLakhs.toFixed(1)} Lakhs`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `GVI-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Atelier Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 mb-3 font-semibold">
                <span className="text-[#032517]">Tailored Engagement</span>
                <span aria-hidden="true" className="text-stone-300">/</span>
                <span>Private Consultation</span>
              </div>
              <h2 className={`${fontClass} text-3xl sm:text-4xl md:text-5xl font-normal text-[#032517] leading-tight`}>
                Begin Your Spatial Transformation.
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed mt-4">
                Share your blueprint or dream spatial layout. Our principal architects will review your parameters and prepare a bespoke preliminary plan.
              </p>
            </div>

            {/* Studio Coordinates & Channels */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              {/* WhatsApp direct with hover lift */}
              <motion.a
                whileHover={{ y: -2, x: 4 }}
                href={BRAND_SPECS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-xs hover:border-[#032517] transition-all shadow-2xs group"
              >
                <div className="w-10 h-10 bg-[#032517] text-[#F3E3BE] rounded-xs flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                    WhatsApp Concierge
                  </span>
                  <p className="font-semibold text-stone-900 group-hover:text-[#032517] transition-colors text-sm">
                    {BRAND_SPECS.displayPhone}
                  </p>
                  <p className="text-[11px] text-stone-500">Instant response during atelier hours</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                whileHover={{ y: -2, x: 4 }}
                href={`tel:${BRAND_SPECS.phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-xs hover:border-[#032517] transition-all shadow-2xs group"
              >
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#032517] border border-stone-200 rounded-xs flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B89547]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                    Direct Studio Desk
                  </span>
                  <p className="font-semibold text-stone-900 group-hover:text-[#032517] transition-colors text-sm">
                    {BRAND_SPECS.phone}
                  </p>
                  <p className="text-[11px] text-stone-500">Principal Architect direct line</p>
                </div>
              </motion.a>

              {/* Headquarters */}
              <div className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-xs shadow-2xs">
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#032517] border border-stone-200 rounded-xs flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#B89547]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                    Headquarters & Foundry
                  </span>
                  <p className="text-stone-800 text-xs leading-relaxed font-medium mt-0.5">
                    {BRAND_SPECS.regOffice}
                  </p>
                  <p className="text-[11px] text-stone-500 font-mono mt-1">{BRAND_SPECS.coordinates}</p>
                </div>
              </div>

              {/* Email */}
              <motion.a
                whileHover={{ y: -2, x: 4 }}
                href={`mailto:${BRAND_SPECS.email}`}
                className="flex items-start gap-4 p-4 bg-white border border-stone-200 rounded-xs hover:border-[#032517] transition-all shadow-2xs group"
              >
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#032517] border border-stone-200 rounded-xs flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B89547]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                    Confidential Inquiries
                  </span>
                  <p className="font-semibold text-stone-900 group-hover:text-[#032517] transition-colors text-sm">
                    {BRAND_SPECS.email}
                  </p>
                  <p className="text-[11px] text-stone-500">Detailed drawings & RFPs</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Confidential Estimate & Architectural Scoping Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 border border-stone-200 shadow-md rounded-xs"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-[#032517] text-[#F3E3BE] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className={`${fontClass} text-3xl text-[#032517] font-normal`}>
                    Inquiry Received
                  </h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you, <strong className="text-stone-900">{fullName}</strong>. Your project scoping parameters have been allocated to our Senior Architectural Partner in Nagercoil.
                  </p>
                </div>

                <div className="p-6 bg-[#FAF8F5] border border-stone-200 text-xs text-left max-w-md mx-auto space-y-3 rounded-xs">
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-400 uppercase tracking-wider">Inquiry Reference</span>
                    <span className="font-mono font-bold text-[#032517]">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-400 uppercase tracking-wider">Project Scope</span>
                    <span className="font-semibold text-stone-800 capitalize">{projectType} ({areaSqFt.toLocaleString()} sq.ft)</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-stone-400 uppercase tracking-wider">Direct Phone</span>
                    <span className="font-medium text-stone-800">{phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400 uppercase tracking-wider">Estimated Investment</span>
                    <span className="font-mono font-semibold text-[#032517]">{formatLakhs(minCostINR)} – {formatLakhs(maxCostINR)}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#032517] text-[#F3E3BE] text-xs uppercase tracking-widest font-semibold hover:bg-[#1B3B2B] cursor-pointer rounded-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B89547] font-semibold block mb-1">
                    Private Consultation Inquiry
                  </span>
                  <p className="text-xs text-stone-500">
                    Confidential estimate & architectural scoping
                  </p>
                </div>

                {/* 1. Project Type */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#032517] mb-2.5">
                    1. Select Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'residential', label: 'Residential' },
                      { id: 'villa', label: 'Villa' },
                      { id: 'office', label: 'Office' },
                      { id: 'commercial', label: 'Commercial' }
                    ].map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setProjectType(type.id as any)}
                        className={`p-3 text-xs uppercase tracking-wider font-semibold border rounded-xs transition-all cursor-pointer ${
                          projectType === type.id
                            ? 'bg-[#032517] text-[#F3E3BE] border-[#032517] shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Area Slider with Real Instant Estimation Output */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#032517]">
                      2. Approximate Area (Sq. Ft.)
                    </label>
                    <span className={`${fontClass} text-lg text-[#032517] font-semibold tabular-nums`}>
                      {areaSqFt.toLocaleString()} sq.ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={15000}
                    step={100}
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#032517]"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 font-mono mt-1">
                    <span>500 sq.ft (Studio/Suite)</span>
                    <span>15,000+ sq.ft (Estate/Commercial)</span>
                  </div>

                  {/* Dynamic Turnkey Estimate Box with Pulse */}
                  <motion.div
                    key={`${projectType}-${areaSqFt}`}
                    initial={{ opacity: 0.8, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-3 p-3 bg-[#FAF8F5] border border-stone-200 rounded-xs flex flex-wrap items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-center gap-1.5 text-stone-600">
                      <Calculator className="w-3.5 h-3.5 text-[#B89547]" />
                      <span>Estimated Turnkey Budget:</span>
                    </div>
                    <div className="font-mono font-bold text-[#032517] text-sm tabular-nums">
                      {formatLakhs(minCostINR)} – {formatLakhs(maxCostINR)}
                      <span className="text-stone-400 font-sans font-normal text-xs ml-2">
                        (~{estimatedDays} Days)
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* 3. Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#032517] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. S. Ramanathan"
                      className="w-full bg-[#FAF8F5] px-4 py-2.5 rounded-xs border border-stone-300 text-sm focus:border-[#032517] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#032517] mb-1.5">
                      Direct Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 822 006 0017"
                      className="w-full bg-[#FAF8F5] px-4 py-2.5 rounded-xs border border-stone-300 text-sm focus:border-[#032517] focus:outline-none"
                    />
                  </div>
                </div>

                {/* 4. Notes / Location */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#032517] mb-1.5">
                    Project Notes / Location
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention project location (e.g. Nagercoil, Kanyakumari, Trivandrum) and key styling desires..."
                    className="w-full bg-[#FAF8F5] px-4 py-2.5 rounded-xs border border-stone-300 text-sm focus:border-[#032517] focus:outline-none resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-4 bg-[#032517] hover:bg-[#1B3B2B] text-[#F3E3BE] hover:text-white font-semibold text-xs uppercase tracking-widest rounded-xs transition-all duration-300 shadow-[0_4px_20px_rgba(3,37,23,0.22)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit & Request Preliminary Plan</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

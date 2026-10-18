import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, MapPin, Phone, Mail, User } from 'lucide-react';
import { BRAND_SPECS } from '../data/interiorData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEstimate?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledEstimate
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: 'Nagercoil / Tamil Nadu',
    projectType: 'Residential Villa',
    areaSqFt: '2,400',
    consultationType: 'studio',
    specialRequirements: ''
  });

  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (prefilledEstimate) {
      setFormData(prev => ({
        ...prev,
        specialRequirements: `Client Estimate Reference: ${prefilledEstimate}`
      }));
    }
  }, [prefilledEstimate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `GVI-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-stone-950/75 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#FAF8F5] text-stone-900 border border-stone-300 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col rounded-xs"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-white shrink-0">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B89547] font-semibold">Private Atelier Session</p>
              <h3 className="font-playfair text-xl md:text-2xl text-[#032517] font-normal">
                Book Architectural Consultation
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 md:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="w-16 h-16 bg-[#032517] text-[#F3E3BE] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="font-playfair text-2xl md:text-3xl text-[#032517] font-normal mb-2">
                    Consultation Confirmed
                  </h4>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Our Principal Architectural Lead in Nagercoil will connect with you shortly.
                  </p>
                </div>

                {/* Booking summary badge */}
                <div className="bg-white border border-stone-200 p-6 text-left max-w-md mx-auto text-xs space-y-3 rounded-xs">
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-400 uppercase tracking-wider">Booking Reference</span>
                    <span className="font-mono font-bold text-[#032517]">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-400 uppercase tracking-wider">Session Format</span>
                    <span className="font-medium text-stone-800 capitalize">
                      {formData.consultationType === 'studio' ? 'Nagercoil Studio Visit (Praise Complex)' : formData.consultationType === 'onsite' ? 'On-Site Property Inspection' : 'Virtual 3D Discovery'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-400 uppercase tracking-wider">Contact Phone</span>
                    <span className="font-medium text-stone-800">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400 uppercase tracking-wider">Property Scope</span>
                    <span className="font-medium text-stone-800">{formData.projectType} ({formData.areaSqFt} sq.ft)</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#032517] text-[#F3E3BE] text-xs uppercase tracking-widest font-semibold hover:bg-[#1B3B2B] cursor-pointer rounded-xs"
                  >
                    Done & Return to Studio
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {prefilledEstimate && (
                  <div className="p-3 bg-[#F4EFEA] border border-stone-200 text-xs text-stone-800 rounded-xs">
                    <span className="font-semibold block text-[#032517] mb-0.5">Pre-configured Estimate Attached:</span>
                    <span>{prefilledEstimate}</span>
                  </div>
                )}

                {/* Consultation Format */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#032517] font-semibold block mb-2.5">
                    Consultation Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'studio', label: 'Nagercoil Studio Visit', sub: 'Praise Complex, 2nd Floor' },
                      { id: 'onsite', label: 'On-Site Inspection', sub: 'At your property site' },
                      { id: 'virtual', label: 'Virtual 3D Video', sub: 'Screen share & CAD review' }
                    ].map((mode) => (
                      <button
                        type="button"
                        key={mode.id}
                        onClick={() => setFormData({ ...formData, consultationType: mode.id })}
                        className={`p-3 border text-left cursor-pointer transition-all rounded-xs ${
                          formData.consultationType === mode.id
                            ? 'border-[#032517] bg-[#032517] text-[#F3E3BE]'
                            : 'border-stone-200 bg-white text-stone-800 hover:border-stone-400'
                        }`}
                      >
                        <p className="font-semibold">{mode.label}</p>
                        <p className={`text-[11px] mt-0.5 ${formData.consultationType === mode.id ? 'text-stone-300' : 'text-stone-500'}`}>{mode.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. S. Ramanathan"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-300 text-sm focus:border-[#032517] focus:outline-none rounded-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 822 006 0017"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-300 text-sm focus:border-[#032517] focus:outline-none rounded-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@example.com"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-300 text-sm focus:border-[#032517] focus:outline-none rounded-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-1.5">
                      Project Location / City
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Nagercoil, Kanyakumari, Trivandrum"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-300 text-sm focus:border-[#032517] focus:outline-none rounded-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Space Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-1.5">
                      Project Typology
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-stone-300 text-sm focus:border-[#032517] focus:outline-none rounded-xs"
                    >
                      <option value="Residential Villa">Residential Villa / Independent Estate</option>
                      <option value="Luxury Penthouse / Apartment">Luxury Penthouse / Apartment</option>
                      <option value="Executive Corporate Suite">Executive Corporate Suite / Office</option>
                      <option value="Boutique Commercial / Hospitality">Boutique Commercial / Hospitality</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-1.5">
                      Approximate Area (Sq. Ft.)
                    </label>
                    <input
                      type="text"
                      value={formData.areaSqFt}
                      onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                      placeholder="e.g. 2,400"
                      className="w-full px-3 py-2.5 bg-white border border-stone-300 text-sm focus:border-[#032517] focus:outline-none rounded-xs"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-stone-600 font-semibold block mb-1.5">
                    Styling Aspirations / Remarks
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                    placeholder="Mention key styling desires, preferred materials, or timeline requirements..."
                    className="w-full px-3 py-2.5 bg-white border border-stone-300 text-sm focus:border-[#032517] focus:outline-none rounded-xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#032517] hover:bg-[#1B3B2B] text-[#F3E3BE] text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer rounded-xs shadow-md"
                  >
                    Confirm Consultation Request
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-2.5">
                    Green Valley Interiors · Praise Complex, Nagercoil · Strictly confidential
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

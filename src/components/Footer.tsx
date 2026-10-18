import React, { useState } from 'react';
import { BRAND_SPECS } from '../data/interiorData';
import { Phone, Mail, MapPin, Send, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { HeaderFontOption, FONT_CONFIGS } from './Navbar';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenDomainGuide: () => void;
  headerFont?: HeaderFontOption;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onOpenDomainGuide,
  headerFont = 'playfair'
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const fontClass = FONT_CONFIGS[headerFont]?.class || 'font-playfair';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#home" className={`${fontClass} text-2xl md:text-3xl font-bold text-[#032517] tracking-tight`}>
              Green Valley
            </a>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed max-w-sm font-normal">
              High-end interior architecture and bespoke residential transformations crafted with organic poise and severe architectural precision — from our studio in Nagercoil, Tamil Nadu.
            </p>

            {/* Social & Channel Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={BRAND_SPECS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="w-9 h-9 rounded-xs bg-[#F4EFEA] flex items-center justify-center text-[#032517] hover:bg-[#032517] hover:text-[#F3E3BE] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_SPECS.email}`}
                aria-label="Email the studio"
                className="w-9 h-9 rounded-xs bg-[#F4EFEA] flex items-center justify-center text-[#032517] hover:bg-[#032517] hover:text-[#F3E3BE] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Praise+Complex+Asaripallam+Road+Nagercoil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find our studio on Google Maps"
                className="w-9 h-9 rounded-xs bg-[#F4EFEA] flex items-center justify-center text-[#032517] hover:bg-[#032517] hover:text-[#F3E3BE] transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND_SPECS.phone.replace(/\s+/g, '')}`}
                aria-label="Call studio"
                className="w-9 h-9 rounded-xs bg-[#F4EFEA] flex items-center justify-center text-[#032517] hover:bg-[#032517] hover:text-[#F3E3BE] transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Practice & Services */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#032517]">
              Practice & Services
            </h3>
            <nav className="flex flex-col gap-2 text-xs text-stone-600">
              <a href="#services" className="hover:text-[#032517] transition-colors">Residential Interior Design</a>
              <a href="#services" className="hover:text-[#032517] transition-colors">Office & Corporate Interiors</a>
              <a href="#services" className="hover:text-[#032517] transition-colors">Commercial & Hospitality</a>
              <a href="#services" className="hover:text-[#032517] transition-colors">Modular Kitchen Design</a>
              <a href="#services" className="hover:text-[#032517] transition-colors">Bespoke Millwork & Joinery</a>
              <a href="#portfolio" className="hover:text-[#032517] transition-colors">Featured Case Studies</a>
              <button
                onClick={onOpenDomainGuide}
                className="text-left text-[#032517] font-semibold hover:underline inline-flex items-center gap-1 mt-1 cursor-pointer"
              >
                <span>Domain Setup ({BRAND_SPECS.domain})</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </nav>
          </div>

          {/* Studio Headquarters */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#032517]">
              Studio
            </h3>
            <address className="not-italic flex flex-col gap-2 text-xs text-stone-600">
              <span className="text-[11px] uppercase tracking-wider text-[#B89547] font-semibold">
                Tamil Nadu Headquarters
              </span>
              <p className="leading-relaxed">
                Praise Complex, 2nd Floor<br />
                Asaripallam Road, Nagercoil<br />
                Tamil Nadu 629201, India
              </p>
              <a
                href={`tel:${BRAND_SPECS.phone.replace(/\s+/g, '')}`}
                className="text-[#032517] font-semibold hover:underline"
              >
                {BRAND_SPECS.phone}
              </a>
              <a
                href={`mailto:${BRAND_SPECS.email}`}
                className="text-[#032517] hover:underline break-all"
              >
                {BRAND_SPECS.email}
              </a>
            </address>
          </div>

          {/* Atelier Dispatch (Newsletter) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#032517]">
              Atelier Dispatch
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Private quarterly architectural perspectives, project invitations, and material studies.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-[#032517] text-[#F3E3BE] text-xs rounded-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B89547]" />
                <span>Subscribed. Welcome to the Atelier Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="flex items-center bg-white border border-stone-300 rounded-xs px-3 py-1.5 focus-within:border-[#032517]">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your private email"
                    className="w-full bg-transparent text-xs text-stone-800 focus:outline-none py-1 placeholder:text-stone-400"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="p-1 text-[#032517] hover:text-[#B89547] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-stone-500">
                  Discretion assured. No marketing solicitations.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Green Valley Interiors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-[#032517]">Services</a>
            <span>·</span>
            <a href="#portfolio" className="hover:text-[#032517]">Portfolio</a>
            <span>·</span>
            <a href="#inquiry" className="hover:text-[#032517]">Contact</a>
            <span>·</span>
            <button onClick={onOpenDomainGuide} className="hover:text-[#032517] underline cursor-pointer">
              Deploy to {BRAND_SPECS.domain}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

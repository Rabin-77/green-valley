import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Type, ChevronDown, Check, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_SPECS } from '../data/interiorData';

export type HeaderFontOption = 'playfair' | 'cormorant' | 'cinzel' | 'bodoni' | 'manrope';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenDomainGuide: () => void;
  currentFont?: HeaderFontOption;
  onFontChange?: (font: HeaderFontOption) => void;
  activeSection?: string;
}

export const FONT_CONFIGS: Record<HeaderFontOption, { name: string; class: string; description: string }> = {
  playfair: {
    name: 'Playfair Display',
    class: 'font-playfair',
    description: 'Classic Architectural Elegance (from client site)'
  },
  cormorant: {
    name: 'Cormorant Garamond',
    class: 'font-cormorant',
    description: 'Ultra-luxurious high-end editorial serif'
  },
  cinzel: {
    name: 'Cinzel Roman',
    class: 'font-cinzel',
    description: 'Classical Roman engraved architectural serif'
  },
  bodoni: {
    name: 'Bodoni Moda',
    class: 'font-bodoni',
    description: 'High-contrast haute-couture editorial serif'
  },
  manrope: {
    name: 'Manrope Clean',
    class: 'font-manrope',
    description: 'Modern Swiss architectural geometric grotesk'
  }
};

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenDomainGuide,
  currentFont = 'playfair',
  onFontChange,
  activeSection = 'home'
}) => {
  const [selectedFont, setSelectedFont] = useState<HeaderFontOption>(currentFont);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false);

  useEffect(() => {
    setSelectedFont(currentFont);
  }, [currentFont]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectFont = (fontKey: HeaderFontOption) => {
    setSelectedFont(fontKey);
    if (onFontChange) {
      onFontChange(fontKey);
    }
    setFontDropdownOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Before & After', href: '#metamorphosis', id: 'metamorphosis' },
    { label: 'About & Guild', href: '#about', id: 'about' },
    { label: 'Journal', href: '#journal', id: 'journal' },
    { label: 'Estimator', href: '#inquiry', id: 'inquiry' }
  ];

  const activeFontConfig = FONT_CONFIGS[selectedFont];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#032517]/10 shadow-[0_4px_24px_rgba(3,37,23,0.06)] py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-stone-200/60 py-4.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark with Elevated Letter Typography */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#home" className="flex items-center gap-3 group">
              {/* Minimalist Geometric Monogram Badge */}
              <div className="w-9 h-9 rounded-xs bg-[#032517] text-[#F3E3BE] flex items-center justify-center font-serif text-base font-bold shadow-xs transition-transform duration-300 group-hover:scale-105">
                GV
              </div>
              <div className="flex flex-col">
                <span
                  className={`${activeFontConfig.class} text-xl md:text-2xl font-bold text-[#032517] tracking-[0.14em] uppercase whitespace-nowrap transition-colors duration-200 group-hover:text-[#1B3B2B]`}
                >
                  Green Valley
                </span>
                <span className="text-[9px] tracking-[0.24em] uppercase text-stone-500 font-semibold -mt-1 font-sans">
                  Interiors · Architecture · Nagercoil
                </span>
              </div>
            </a>

            {/* Quick Header Font Switcher Popover */}
            <div className="relative hidden xl:block ml-2">
              <button
                type="button"
                onClick={() => setFontDropdownOpen(!fontDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-stone-700 bg-white border border-stone-200 rounded hover:border-[#032517] transition-all cursor-pointer shadow-2xs"
                title="Change and preview header font"
              >
                <Type className="w-3 h-3 text-[#B89547]" />
                <span className="font-semibold text-stone-900">{activeFontConfig.name}</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              <AnimatePresence>
                {fontDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white border border-stone-300 shadow-xl rounded-md p-2 z-50 text-left"
                  >
                    <div className="px-2.5 py-1.5 border-b border-stone-100 mb-1">
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">
                        Header Letter Fonts
                      </p>
                      <p className="text-[11px] text-stone-500">Select any typeface to test on headers</p>
                    </div>

                    {(Object.keys(FONT_CONFIGS) as HeaderFontOption[]).map((fontKey) => {
                      const cfg = FONT_CONFIGS[fontKey];
                      const isSelected = selectedFont === fontKey;
                      return (
                        <button
                          key={fontKey}
                          onClick={() => handleSelectFont(fontKey)}
                          className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center justify-between cursor-pointer ${
                            isSelected ? 'bg-[#032517] text-[#F3E3BE]' : 'hover:bg-stone-50 text-stone-800'
                          }`}
                        >
                          <div>
                            <span className={`text-base block ${cfg.class} ${isSelected ? 'text-[#F3E3BE]' : 'text-stone-900'}`}>
                              {cfg.name}
                            </span>
                            <span className={`text-[10px] ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                              {cfg.description}
                            </span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#F3E3BE] shrink-0" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-semibold tracking-wider uppercase text-stone-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`hover:text-[#032517] transition-colors whitespace-nowrap shrink-0 relative py-1 group ${
                    isActive ? 'text-[#032517] font-bold' : ''
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B89547] transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Direct WhatsApp / Phone & Primary CTA Button */}
          <div className="flex items-center gap-3.5 shrink-0">
            {/* Phone link */}
            <a
              href={`tel:${BRAND_SPECS.phone.replace(/\s+/g, '')}`}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-[#032517] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89547]" />
              <span>{BRAND_SPECS.displayPhone}</span>
            </a>

            {/* WhatsApp Quick Chat */}
            <a
              href={BRAND_SPECS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#032517] bg-[#F4EFEA] hover:bg-[#EAE4DC] border border-[#032517]/15 rounded transition-all cursor-pointer whitespace-nowrap"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#032517]" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenConsultation}
              className="px-4.5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#F3E3BE] bg-[#032517] hover:bg-[#1B3B2B] hover:text-white transition-all cursor-pointer shadow-[0_4px_16px_rgba(3,37,23,0.18)] active:scale-[0.98] whitespace-nowrap shrink-0 rounded-xs"
            >
              Get Consultation / Quote
            </button>

            {/* Mobile menu toggle button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-stone-800 hover:text-[#032517] focus:outline-none cursor-pointer"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 z-30 bg-[#FAF8F5] border-b border-stone-200 px-6 py-6 shadow-xl lg:hidden"
          >
            {/* Mobile Font Switcher */}
            <div className="mb-4 pb-4 border-b border-stone-200">
              <label className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block mb-2">
                Header Letter Font:
              </label>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {(Object.keys(FONT_CONFIGS) as HeaderFontOption[]).map((fontKey) => (
                  <button
                    key={fontKey}
                    onClick={() => handleSelectFont(fontKey)}
                    className={`p-2 border rounded text-left transition-colors cursor-pointer ${
                      selectedFont === fontKey
                        ? 'border-[#032517] bg-[#032517] text-[#F3E3BE] font-semibold'
                        : 'border-stone-200 bg-white text-stone-800'
                    }`}
                  >
                    <span className={FONT_CONFIGS[fontKey].class}>{FONT_CONFIGS[fontKey].name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm font-semibold tracking-wider uppercase text-stone-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-stone-100 hover:text-[#032517]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${BRAND_SPECS.phone.replace(/\s+/g, '')}`}
                  className="py-2 text-[#032517] flex items-center gap-2 font-medium text-xs"
                >
                  <Phone className="w-4 h-4 text-[#B89547]" />
                  <span>Call Studio: {BRAND_SPECS.displayPhone}</span>
                </a>
                <a
                  href={BRAND_SPECS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-emerald-800 flex items-center gap-2 font-medium text-xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Chat on WhatsApp (+91 822 006 0017)</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDomainGuide();
                  }}
                  className="text-left py-2 text-stone-600 font-medium text-xs"
                >
                  Domain Setup Guide ({BRAND_SPECS.domain})
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="mt-2 w-full py-3.5 text-xs uppercase tracking-widest font-semibold text-[#F3E3BE] bg-[#032517] text-center hover:bg-[#1B3B2B] cursor-pointer rounded-xs shadow-md"
                >
                  Get Consultation / Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

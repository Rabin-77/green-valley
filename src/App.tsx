/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, HeaderFontOption } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutGuildSection } from './components/AboutGuildSection';
import { JournalSection } from './components/JournalSection';
import { InquiryEstimatorSection } from './components/InquiryEstimatorSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { DomainPublishGuide } from './components/DomainPublishGuide';
import { FloatingConcierge } from './components/FloatingWhatsApp';

export default function App() {
  const [headerFont, setHeaderFont] = useState<HeaderFontOption>('playfair');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [domainGuideOpen, setDomainGuideOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'metamorphosis', 'about', 'journal', 'inquiry'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleExplorePortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#032517] selection:text-[#F3E3BE]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenDomainGuide={() => setDomainGuideOpen(true)}
        currentFont={headerFont}
        onFontChange={(newFont) => setHeaderFont(newFont)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero: Authentic BRING MAGIC TO HOME */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExplorePortfolio={handleExplorePortfolio}
          headerFont={headerFont}
        />

        {/* 2. Before & After Metamorphosis Slider */}
        <BeforeAfterSlider
          headerFont={headerFont}
        />

        {/* 3. Curated Practices & Services + Four Principles of Form */}
        <ServicesSection
          onOpenConsultation={handleOpenConsultation}
          headerFont={headerFont}
        />

        {/* 4. Curated Portfolio & Monographs Archive */}
        <PortfolioSection
          onOpenConsultation={handleOpenConsultation}
          headerFont={headerFont}
        />

        {/* 5. About the Atelier & Guild Leadership */}
        <AboutGuildSection
          headerFont={headerFont}
        />

        {/* 6. Atelier Journal & Architectural Essays */}
        <JournalSection
          headerFont={headerFont}
        />

        {/* 7. Tailored Engagement & Cost Estimator */}
        <InquiryEstimatorSection
          headerFont={headerFont}
        />

        {/* 8. Frequently Addressed Questions */}
        <FaqSection
          headerFont={headerFont}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenDomainGuide={() => setDomainGuideOpen(true)}
        headerFont={headerFont}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Domain Deployment Guide for greenvalleyinteriors.hbtintegrisys.com */}
      <DomainPublishGuide
        isOpen={domainGuideOpen}
        onClose={() => setDomainGuideOpen(false)}
      />

      {/* Floating WhatsApp Concierge & Back-to-Top */}
      <FloatingConcierge />
    </div>
  );
}

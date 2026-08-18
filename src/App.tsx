import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FreeAuditModal } from './components/FreeAuditModal';
import { HomePage } from './pages/HomePage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { OurExpertisePage } from './pages/OurExpertisePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { OurPartnersPage } from './pages/OurPartnersPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    const path = window.location.pathname as RoutePath;
    const validPaths: RoutePath[] = [
      '/',
      '/what-we-do',
      '/our-expertise',
      '/industries',
      '/why-choose-us',
      '/our-partner',
      '/contact-us',
    ];
    return validPaths.includes(path) ? path : '/';
  });

  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync browser navigation (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as RoutePath;
      const validPaths: RoutePath[] = [
        '/',
        '/what-we-do',
        '/our-expertise',
        '/industries',
        '/why-choose-us',
        '/our-partner',
        '/contact-us',
      ];
      setCurrentPath(validPaths.includes(path) ? path : '/');
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (path: RoutePath) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the active route view
  const renderActivePage = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditModalOpen(true)}
          />
        );
      case '/what-we-do':
        return (
          <WhatWeDoPage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditModalOpen(true)}
          />
        );
      case '/our-expertise':
        return (
          <OurExpertisePage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditModalOpen(true)}
          />
        );
      case '/industries':
        return (
          <IndustriesPage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditModalOpen(true)}
          />
        );
      case '/why-choose-us':
        return (
          <WhyChooseUsPage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditModalOpen(true)}
          />
        );
      case '/our-partner':
        return (
          <OurPartnersPage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditModalOpen(true)}
          />
        );
      case '/contact-us':
        return (
          <ContactUsPage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditModalOpen(true)}
          />
        );
    }
  };

  return (
    <div
      className="min-h-screen text-white flex flex-col selection:bg-pink-500 selection:text-white relative font-sans"
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #110724 50%, #1a0b2e 100%)' }}
    >
      {/* Sticky Header Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Shared 4-Column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Interactive Free Audit Tool Modal */}
      <FreeAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onNavigateToContact={() => handleNavigate('/contact-us')}
      />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Free Audit Quick Pill */}
        <button
          onClick={() => setIsAuditModalOpen(true)}
          className="btn-gradient p-3 sm:px-4 sm:py-2.5 rounded-full shadow-xl shadow-pink-500/30 flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
          title="Launch Free AI Audit Scanner"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
            Free AI Audit
          </span>
        </button>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md transition-all shadow-lg self-end cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

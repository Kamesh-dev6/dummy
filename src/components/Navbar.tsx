import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { NAV_ITEMS } from '../data/agencyData';
import { Bot, Menu, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import thebotLogo from '../assets/images/thebot_logo.png';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a1a]/75 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-950/30 py-3.5'
            : 'bg-[#0a0a1a]/30 backdrop-blur-md border-b border-white/[0.06] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="nav-logo"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <img
                src={thebotLogo}
                alt="The Bot — AI Agency"
                className="h-6 sm:h-7 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[9px] tracking-widest uppercase font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-cyan-400 border border-white/10">
                AI Agency
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-2 bg-white/[0.04] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-xl shadow-inner">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    id={`nav-link-${item.path.replace('/', '') || 'home'}`}
                    onClick={() => handleNavClick(item.path)}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#22d3ee] bg-white/10 shadow-inner border border-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#22d3ee] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                id="btn-audit-navbar"
                onClick={onOpenAudit}
                className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-semibold hover:bg-white/10 transition-all shadow-inner backdrop-blur-md flex items-center gap-2 group cursor-pointer text-white"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-400 group-hover:rotate-12 transition-transform" />
                <span>Free Audit Tool</span>
              </button>
              <button
                id="btn-get-started-navbar"
                onClick={() => handleNavClick('/contact-us')}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#ec4899] to-[#a855f7] font-bold text-xs shadow-lg shadow-purple-500/30 flex items-center gap-1.5 cursor-pointer text-white hover:opacity-95 hover:-translate-y-0.5 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-audit-btn-quick"
                onClick={onOpenAudit}
                className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[11px]">Audit</span>
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu-dropdown"
            className="lg:hidden bg-[#0a0a1c]/95 border-b border-white/10 backdrop-blur-2xl px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top-4 duration-200"
          >
            <div className="grid grid-cols-1 gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    id={`mobile-link-${item.path.replace('/', '') || 'home'}`}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-transparent text-white border-l-4 border-pink-500 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
              <button
                id="mobile-audit-btn-drawer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="btn-gradient-outline py-2.5 px-3 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>AI Audit Tool</span>
              </button>
              <button
                id="mobile-contact-btn-drawer"
                onClick={() => handleNavClick('/contact-us')}
                className="btn-gradient py-2.5 px-3 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

import React from 'react';
import { RoutePath } from '../types';
import { Bot, MapPin, Mail, Phone, ArrowUpRight, Github, Twitter, Linkedin, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import thebotLogo from '../assets/images/thebot_logo.png';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit }) => {
  return (
    <footer id="main-footer" className="relative bg-[#080816]/90 backdrop-blur-2xl border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#a855f7]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={thebotLogo}
                alt="The Bot — AI Agency"
                className="h-6 w-auto"
              />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Node
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Deploying enterprise neural intelligence solutions for the world's most ambitious brands. We synthesize advanced AI models, performance media, and scalable full-stack engineering.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenAudit}
                title="Launch Free AI Audit"
                className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold flex items-center gap-1.5 hover:bg-pink-500/20 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Scanner</span>
              </button>
            </div>
          </div>

          {/* Column 2: Solutions / Services */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-pink-400 font-semibold mb-4">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/what-we-do')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  Digital Growth & Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/what-we-do')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Technical SEO & GEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/what-we-do')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Next-Gen Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/what-we-do')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Platforms & Custom AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/what-we-do')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Predictive Analytics
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Sectors */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold mb-4">
              Explore Agency
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/our-expertise')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/industries')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Industry Verticals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/why-choose-us')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why Choose The Bot
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/our-partner')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ecosystem Alliances
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact-us')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Global Offices & Map
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAudit}
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors flex items-center gap-1"
                >
                  <span>Free Audit Engine</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Physical Nodes & Direct Line */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-purple-400 font-semibold mb-4">
              Physical Hubs
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-pink-400" />
                  <span>Mumbai Core</span>
                </div>
                <p className="text-[11px] text-gray-400">Quantum Tower, Andheri East, Mumbai 400069</p>
                <div className="mt-1 font-mono text-[10px] text-cyan-400">+91 22 4567 8900</div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Chennai Hub</span>
                </div>
                <p className="text-[11px] text-gray-400">Tidel Space Building, Taramani, Chennai 600113</p>
                <div className="mt-1 font-mono text-[10px] text-cyan-400">+91 44 4567 8901</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>© 2026 The Bot Intelligence Agency. All rights reserved.</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Enterprise AI Grade</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/contact-us')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Protocol
            </button>
            <button
              onClick={() => onNavigate('/contact-us')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('/contact-us')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Security SLA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

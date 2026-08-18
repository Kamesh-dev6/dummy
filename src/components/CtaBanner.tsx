import React from 'react';
import { RoutePath } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface CtaBannerProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
  title?: string;
  subtitle?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onNavigate,
  onOpenAudit,
  title = 'Ready to Deploy Autonomous Marketing & Scaled Tech?',
  subtitle = 'Initiate a 15-minute diagnostic session with our principal engineers and growth architects to unlock your next exponential curve.',
}) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden border border-white/15 bg-white/[0.035] backdrop-blur-2xl shadow-2xl shadow-purple-950/40">
          
          {/* Ambient light flares */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ec4899]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#22d3ee]/15 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Inner specular reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

          {/* Background grid */}
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#22d3ee] text-xs font-mono tracking-wider uppercase backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-[#22d3ee]" />
              <span>Zero-Obligation Diagnostic</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
              {subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-banner-audit-btn"
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#ec4899] to-[#a855f7] text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-purple-500/30 cursor-pointer text-white hover:opacity-95 hover:-translate-y-0.5 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Free AI Audit</span>
              </button>
              
              <button
                id="cta-banner-contact-btn"
                onClick={() => onNavigate('/contact-us')}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-sm font-semibold hover:bg-white/10 transition-all shadow-inner backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer text-white"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                NDAs Standard
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                24-Hour Telemetry Turnaround
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

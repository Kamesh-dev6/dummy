import React from 'react';
import { RoutePath } from '../types';
import { WHY_CHOOSE_US_PILLARS, COMPARISON_MATRIX, TESTIMONIALS } from '../data/agencyData';
import { PageHeader } from '../components/PageHeader';
import { CtaBanner } from '../components/CtaBanner';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  TrendingUp, 
  Star,
  Layers,
  Lock
} from 'lucide-react';

interface WhyChooseUsPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onNavigate, onOpenAudit }) => {
  return (
    <div id="why-choose-us-page" className="min-h-screen">
      {/* 1. PAGE HEADER */}
      <PageHeader
        badge="THE UNFAIR ADVANTAGE"
        titlePrefix="Why Choose"
        titleHighlight="The Bot"
        subtitle="We replaced bloated agency meetings and manual guesswork with sub-second machine intelligence, deterministic tracking, and production-grade software engineering."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Why Choose Us' },
        ]}
        onNavigate={onNavigate}
      />

      {/* 2. 4 CORE PILLARS / FEATURE GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
              <span>Architectural Differentiators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              4 Structural Pillars Setting Us <span className="text-gradient-accent">Lightyears Ahead</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card-glow p-8 sm:p-10 rounded-3xl space-y-5 hover:border-pink-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 font-mono">
                    {pillar.number}
                  </span>
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                    Proprietary Moat
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {pillar.title}
                </h3>

                <div className="text-xs font-mono text-pink-400 font-semibold">
                  {pillar.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {pillar.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIDE-BY-SIDE COMPARISON MATRIX */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
              <span>Direct Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Bot vs <span className="text-gradient-cyan">Traditional Alternatives</span>
            </h2>
            <p className="text-sm text-gray-400">
              See why modern technical founders and enterprise leaders are migrating their growth engines to The Bot.
            </p>
          </div>

          {/* Responsive Table Container */}
          <div className="overflow-x-auto rounded-3xl border border-white/10 glass-card">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-5 text-xs font-mono uppercase text-gray-400 font-bold w-1/4">
                    Capability Dimension
                  </th>
                  <th className="p-5 text-sm font-bold text-pink-400 bg-pink-500/10 w-1/3 border-x border-pink-500/20">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>The Bot (AI Agency)</span>
                    </div>
                  </th>
                  <th className="p-5 text-xs font-mono uppercase text-gray-400 w-1/5">
                    Traditional Agency
                  </th>
                  <th className="p-5 text-xs font-mono uppercase text-gray-400 w-1/5">
                    In-House Team
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                {COMPARISON_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-bold text-white font-mono text-xs">
                      {row.feature}
                    </td>
                    <td className="p-5 font-semibold text-white bg-pink-500/[0.04] border-x border-pink-500/20">
                      <div className="flex items-start gap-2 text-cyan-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.theBot}</span>
                      </div>
                    </td>
                    <td className="p-5 text-gray-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.traditionalAgency}</span>
                      </div>
                    </td>
                    <td className="p-5 text-gray-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{row.inHouseTeam}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. STATS / PROOF BAND */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-glow p-8 sm:p-12 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 font-mono">
                $180M+
              </div>
              <div className="text-sm font-bold text-white">Direct Client Revenue</div>
              <div className="text-xs font-mono text-gray-400">Attributed in past 24 mos</div>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-mono">
                4.8x
              </div>
              <div className="text-sm font-bold text-white">Mean Client ROAS</div>
              <div className="text-xs font-mono text-gray-400">Across 40+ verticals</div>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                99.4%
              </div>
              <div className="text-sm font-bold text-white">Tracking Precision</div>
              <div className="text-xs font-mono text-gray-400">Server-side CAPI pipeline</div>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-mono">
                &lt;14 Days
              </div>
              <div className="text-sm font-bold text-white">Avg Time to Launch</div>
              <div className="text-xs font-mono text-gray-400">From kickoff to live ads</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL HIGHLIGHT */}
      <section className="py-16 bg-white/[0.01] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-white font-medium italic leading-relaxed">
              "{TESTIMONIALS[1].quote}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div>
                <div className="font-bold text-white text-base">{TESTIMONIALS[1].author}</div>
                <div className="text-xs text-gray-400">{TESTIMONIALS[1].role} • <span className="text-cyan-400">{TESTIMONIALS[1].company}</span></div>
              </div>

              <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {TESTIMONIALS[1].stats}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CtaBanner
        onNavigate={onNavigate}
        onOpenAudit={onOpenAudit}
        title="Stop Burning Media Budget on Guesswork"
        subtitle="Get a deterministic audit of your current ad spend, tech stack, and attribution leakage."
      />
    </div>
  );
};

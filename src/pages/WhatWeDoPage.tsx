import React, { useState } from 'react';
import { RoutePath } from '../types';
import { SERVICES_LIST } from '../data/agencyData';
import { PageHeader } from '../components/PageHeader';
import { CtaBanner } from '../components/CtaBanner';
import { 
  TrendingUp, 
  Search, 
  Code2, 
  LayoutGrid, 
  Sparkles, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Sliders 
} from 'lucide-react';
import mascotRobotImg from '../assets/images/mascot_robot_3d_1787040719306.jpg';

interface WhatWeDoPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const WhatWeDoPage: React.FC<WhatWeDoPageProps> = ({ onNavigate, onOpenAudit }) => {
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].id);

  // Interactive ROI Calculator State
  const [monthlySpend, setMonthlySpend] = useState(25000);
  const [currentRoas, setCurrentRoas] = useState(2.2);

  const estimatedNewRoas = (currentRoas * 1.85).toFixed(1);
  const estimatedRevenue = Math.round(monthlySpend * Number(estimatedNewRoas));
  const estimatedLift = Math.round(estimatedRevenue - (monthlySpend * currentRoas));

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-pink-400" />;
      case 'Search': return <Search className="w-6 h-6 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-fuchsia-400" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-400" />;
      default: return <Cpu className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <div id="what-we-do-page" className="min-h-screen">
      {/* 1. PAGE HEADER */}
      <PageHeader
        badge="SOLUTIONS & ARCHITECTURE"
        titlePrefix="Intelligent"
        titleHighlight="Digital Solutions"
        subtitle="We synthesize advanced AI, data-driven performance marketing, and cutting-edge software engineering to propel brands into autonomous market dominance."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'What We Do' },
        ]}
        onNavigate={onNavigate}
      />

      {/* 2. HERO FEATURED SHOWCASE WITH MASCOT */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-glow p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
                <span>The Multi-Dimensional Approach</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                A Unified Intelligence Stack for <span className="text-gradient-accent">High-Growth Modern Brands</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Rather than treating paid media, web development, SEO, and AI as siloed activities, The Bot unifies them into a continuous feedback loop. Real-time advertising telemetry informs software engineering; custom AI models optimize marketing bidding; and lightning-fast edge code converts visitors into lifelong customers.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-2xl font-black text-pink-400">99.4%</div>
                  <div className="text-xs text-gray-300 font-semibold">Attribution Accuracy</div>
                  <div className="text-[10px] text-gray-500 font-mono">Zero pixel signal drop-off</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-2xl font-black text-cyan-400">&lt;500ms</div>
                  <div className="text-xs text-gray-300 font-semibold">Edge Response Time</div>
                  <div className="text-[10px] text-gray-500 font-mono">Next.js & Cloudflare edge</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={onOpenAudit}
                  className="btn-gradient px-6 py-3 text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Audit Your Tech Stack</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden glass-card p-3">
                <img
                  src={mascotRobotImg}
                  alt="The Bot AI mascot tablet showcase"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-[#090616]/90 border border-white/15 backdrop-blur-md text-center">
                  <span className="text-xs font-mono text-cyan-400">The Bot Autonomous Core Engine</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE COMPETENCIES LIST / ALTERNATING DEEP-DIVE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
              <span>Full Service Taxonomy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Core <span className="text-gradient-purple">Competencies</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Explore our full suite of technical, creative, and performance capabilities.
            </p>
          </div>

          <div className="space-y-12">
            {SERVICES_LIST.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-5 ${isEven ? '' : 'lg:order-2'}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                          {getIcon(service.icon)}
                        </div>
                        <div>
                          <span className="text-xs font-mono uppercase text-pink-400 tracking-wider font-bold">
                            Module 0{idx + 1}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-mono text-cyan-300">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-gray-300 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features Bullet List */}
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                          Key Capabilities:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies Chips */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-mono text-gray-400 mr-1">Stack:</span>
                        {service.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => onNavigate('/contact-us')}
                          className="btn-gradient-outline px-5 py-2.5 text-xs font-bold flex items-center gap-2 cursor-pointer"
                        >
                          <span>Request Solution Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Stats & Visual Metric Box */}
                    <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="p-6 rounded-2xl bg-[#0d091e] border border-white/10 space-y-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="text-xs font-mono text-gray-400 uppercase">Quantifiable Impact</span>
                          <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            Verified Case
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {service.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300">
                                {m.value}
                              </div>
                              <div className="text-xs text-gray-300 font-semibold mt-1">{m.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-gray-300 leading-relaxed">
                          <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-purple-400" />
                            Enterprise SLA Included
                          </div>
                          Complete dedicated engineering squad, bi-weekly algorithmic tuning sprints, and real-time telemetry dashboards.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE REVENUE & ROAS ESTIMATOR */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-glow p-8 sm:p-12 rounded-3xl space-y-8">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
                <Sliders className="w-3.5 h-3.5" />
                <span>Autonomous Uplift Simulator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Estimate Your Revenue Potential With The Bot
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Simulate the mathematical impact of real-time algorithmic bidding and Next.js edge conversion funnels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-gray-300">Monthly Digital Ad Spend:</span>
                    <span className="text-pink-400 font-bold">${monthlySpend.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="200000"
                    step="5000"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                    <span>$5k</span>
                    <span>$100k</span>
                    <span>$200k+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-gray-300">Current Average ROAS:</span>
                    <span className="text-cyan-400 font-bold">{currentRoas}x</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="4.0"
                    step="0.1"
                    value={currentRoas}
                    onChange={(e) => setCurrentRoas(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                    <span>1.0x</span>
                    <span>2.5x</span>
                    <span>4.0x</span>
                  </div>
                </div>
              </div>

              {/* Output Results Box */}
              <div className="p-6 rounded-2xl bg-[#0c081e] border border-pink-500/20 space-y-4">
                <div className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                  Projected Monthly Performance
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[11px] text-gray-400 font-mono">Projected ROAS</div>
                    <div className="text-2xl font-black text-cyan-400">{estimatedNewRoas}x</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[11px] text-gray-400 font-mono">Est. Net Revenue</div>
                    <div className="text-2xl font-black text-pink-400">${estimatedRevenue.toLocaleString()}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-300">Est. Additional Monthly Lift:</span>
                  <span className="text-sm font-black text-emerald-400 font-mono">+${estimatedLift.toLocaleString()}</span>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="w-full btn-gradient py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Full Diagnostic Assessment</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CtaBanner
        onNavigate={onNavigate}
        onOpenAudit={onOpenAudit}
        title="Ready to Transform Your Marketing Architecture?"
        subtitle="Schedule an engineering-led architecture call with The Bot today."
      />
    </div>
  );
};

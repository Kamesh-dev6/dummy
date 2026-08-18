import React, { useState } from 'react';
import { RoutePath } from '../types';
import { INDUSTRIES_LIST } from '../data/agencyData';
import { PageHeader } from '../components/PageHeader';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Building2, 
  Rocket, 
  Cpu, 
  ShoppingBag, 
  Truck, 
  Hammer, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  BarChart2
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenAudit }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'enterprise' | 'commerce' | 'infrastructure'>('all');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-pink-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      case 'Truck': return <Truck className="w-6 h-6 text-emerald-400" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-rose-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-teal-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      default: return <Sparkles className="w-6 h-6 text-pink-400" />;
    }
  };

  const filteredIndustries = INDUSTRIES_LIST.filter((ind) => {
    if (activeFilter === 'enterprise') return ['b2b-enterprise', 'saas-platforms', 'fintech-banking'].includes(ind.id);
    if (activeFilter === 'commerce') return ['b2c-retail', 'startups-scaleups'].includes(ind.id);
    if (activeFilter === 'infrastructure') return ['logistics-supply', 'construction-realestate', 'healthcare-biotech'].includes(ind.id);
    return true;
  });

  return (
    <div id="industries-page" className="min-h-screen">
      {/* 1. PAGE HEADER */}
      <PageHeader
        badge="SECTORS WE TRANSFORM"
        titlePrefix="Sectors We"
        titleHighlight="Power & Scale"
        subtitle="Neural link enables AI solutions tailored for high-stakes environments, deploying intelligent systems across critical global infrastructure."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Industries' },
        ]}
        onNavigate={onNavigate}
      />

      {/* 2. INDUSTRY FILTER TABS */}
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Verticals ({INDUSTRIES_LIST.length})
            </button>
            <button
              onClick={() => setActiveFilter('enterprise')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeFilter === 'enterprise'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Enterprise & SaaS
            </button>
            <button
              onClick={() => setActiveFilter('commerce')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeFilter === 'commerce'
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Retail & High-Growth
            </button>
            <button
              onClick={() => setActiveFilter('infrastructure')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeFilter === 'infrastructure'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Infrastructure & Health
            </button>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY CARDS GRID (3-COL / 1-COL RESPONSIVE) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.map((ind) => (
              <div
                key={ind.id}
                id={`industry-${ind.id}`}
                className="glass-card p-7 flex flex-col justify-between hover:border-pink-500/30 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Icon & Metric Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-pink-500/30 transition-all">
                      {getIndustryIcon(ind.icon)}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300">
                        {ind.growthMetric}
                      </div>
                      <div className="text-[10px] font-mono text-gray-400">{ind.metricLabel}</div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">
                      {ind.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Use Cases */}
                  <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      Deployed Frameworks:
                    </div>
                    {ind.useCases.slice(0, 2).map((useCase, uIdx) => (
                      <div key={uIdx} className="text-xs text-gray-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {ind.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400">Enterprise Ready</span>
                  <button
                    onClick={() => onNavigate('/contact-us')}
                    className="text-xs text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Request Vertical Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESULTS-BY-INDUSTRY PERFORMANCE ROW */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Attributed Benchmark Uplift</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Deterministic Performance Across Industry Sectors
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Aggregated across 250+ enterprise production deployments over the past 24 months.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-5 text-center">
              <div className="text-3xl font-black text-pink-400 font-mono mb-1">+340%</div>
              <div className="text-xs font-bold text-white">Enterprise Pipeline Velocity</div>
              <div className="text-[10px] text-gray-400 mt-1">B2B Software & Consulting</div>
            </div>

            <div className="glass-card p-5 text-center">
              <div className="text-3xl font-black text-cyan-400 font-mono mb-1">68%</div>
              <div className="text-xs font-bold text-white">CAC Burn Optimization</div>
              <div className="text-[10px] text-gray-400 mt-1">Series A to C Startups</div>
            </div>

            <div className="glass-card p-5 text-center">
              <div className="text-3xl font-black text-purple-400 font-mono mb-1">4.8x</div>
              <div className="text-xs font-bold text-white">LTV to CAC Ratio</div>
              <div className="text-[10px] text-gray-400 mt-1">SaaS & Subscription Apps</div>
            </div>

            <div className="glass-card p-5 text-center">
              <div className="text-3xl font-black text-amber-400 font-mono mb-1">+42%</div>
              <div className="text-xs font-bold text-white">Conversion Rate Lift</div>
              <div className="text-[10px] text-gray-400 mt-1">High-Volume D2C Retail</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CtaBanner
        onNavigate={onNavigate}
        onOpenAudit={onOpenAudit}
        title="Don't See Your Specific Industry Listed?"
        subtitle="Our neural architecture adapts to any sector with high customer lifetime value or complex transaction cycles."
      />
    </div>
  );
};

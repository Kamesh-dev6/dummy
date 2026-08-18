import React, { useState } from 'react';
import { RoutePath } from '../types';
import { PARTNER_ALLIANCES } from '../data/agencyData';
import { PageHeader } from '../components/PageHeader';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Sparkles, 
  Cloud, 
  Cpu, 
  Shield, 
  Server, 
  Layers, 
  Bot, 
  Search, 
  Database, 
  Share2, 
  Terminal, 
  Workflow, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Check
} from 'lucide-react';
import neuralAlliancesImg from '../assets/images/neural_alliances_1787040733838.jpg';

interface OurPartnersPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const OurPartnersPage: React.FC<OurPartnersPageProps> = ({ onNavigate, onOpenAudit }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    tier: 'technology',
    techStack: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getPartnerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-purple-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-pink-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-rose-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Search': return <Search className="w-5 h-5 text-cyan-300" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-orange-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-pink-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-pink-400" />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div id="our-partners-page" className="min-h-screen">
      {/* 1. PAGE HEADER */}
      <PageHeader
        badge="GLOBAL ALLIANCE"
        titlePrefix="Collaborating for"
        titleHighlight="Innovation"
        subtitle="We align with industry leaders, visionary cloud providers, and foundation AI labs to push the boundaries of autonomous machine technology."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Partners' },
        ]}
        onNavigate={onNavigate}
      />

      {/* 2. ECOSYSTEM ALLIANCES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
              <span>Co-Engineering Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ecosystem <span className="text-gradient-accent">Alliances</span>
            </h2>
            <p className="text-sm text-gray-400">
              Joint engineering frameworks, private alpha SDK access, and dedicated enterprise compute clusters.
            </p>
          </div>

          {/* Alliance Categories */}
          <div className="space-y-12">
            {PARTNER_ALLIANCES.map((alliance) => (
              <div key={alliance.id} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                    {alliance.categoryTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {alliance.partners.map((partner, pIdx) => (
                    <div
                      key={pIdx}
                      className="glass-card p-6 flex flex-col justify-between hover:border-pink-500/40 transition-all duration-300 group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {getPartnerIcon(partner.icon)}
                          </div>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 text-cyan-400 border border-white/10">
                            {partner.tier}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                            {partner.name}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            {partner.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Active Protocol</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC ALLIANCES SHOWCASE (MATCHES SCREENSHOT 4) */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-glow p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Deep Integrations</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Strategic <span className="text-gradient-purple">Alliances & Data Mesh</span>
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Beyond standard sponsorships, we forge deep compute alliances. These joint partnerships unlock real-time data streams, cross-platform neural architectures, and co-development of generative algorithmic systems.
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-pink-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Dedicated GPU Compute Instances</div>
                    <div className="text-[11px] text-gray-400">Sub-millisecond inference for real-time media bid decisions</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <Database className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Zero-Copy Data Synapses</div>
                    <div className="text-[11px] text-gray-400">Direct server-side event ingestion bypassing client latency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden glass-card p-2 w-full max-w-lg shadow-2xl border border-pink-500/20">
                <img
                  src={neuralAlliancesImg}
                  alt="Neural Network Strategic Alliances Graphic"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="p-3 text-center text-xs font-mono text-cyan-300">
                  Real-time Neural Interconnect Protocol Live
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BECOME A PARTNER APPLICATION FORM */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-glow p-8 sm:p-12 rounded-3xl space-y-8">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
                <Send className="w-3.5 h-3.5" />
                <span>Ecosystem Application</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Become a <span className="text-gradient-accent">Partner</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
                Join the vanguard of neural intelligence. We are actively seeking visionary organizations to integrate with our global network.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">Alliance Application Transmitted</h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Thank you, <span className="text-emerald-400 font-bold">{formData.name}</span>. Our Global Partner Ecosystem director will review your stack specifications and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-gradient-outline px-6 py-2.5 text-xs font-bold"
                >
                  Submit Another Proposal
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Alexander Vance"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Neural Labs Inc."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@neurallabs.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Partnership Track
                    </label>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                      className="w-full bg-[#160f2e] border border-white/10 rounded-xl py-3 px-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all"
                    >
                      <option value="technology">Technology & Co-Engineering</option>
                      <option value="cloud">Cloud / Infrastructure Provider</option>
                      <option value="agency">Agency Referral / Solution Partner</option>
                      <option value="academic">Academic & AI Research Fellowship</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Core Tech Stack / Integrations
                  </label>
                  <input
                    type="text"
                    value={formData.techStack}
                    onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                    placeholder="e.g. Next.js, PyTorch, BigQuery, NVIDIA TensorRT"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Partnership Brief / Proposal
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your platform, proposed integration points, and how our teams can collaborate..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gradient py-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-pink-500/30"
                  >
                    {isSubmitting ? (
                      <span>Encrypting & Transmitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Alliance Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CtaBanner onNavigate={onNavigate} onOpenAudit={onOpenAudit} />
    </div>
  );
};

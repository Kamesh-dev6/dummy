import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { 
  AGENCY_STATS, 
  CLIENT_LOGOS, 
  WHO_WE_SERVE_PREVIEW, 
  PROCESS_STEPS, 
  TESTIMONIALS 
} from '../data/agencyData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Cpu,
  Layers,
  Activity,
  Building2,
  Rocket,
  ShoppingBag,
  Truck,
  Hammer
} from 'lucide-react';
import mascotRobotImg from '../assets/images/mascot_robot_3d_1787040719306.jpg';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAudit }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-cycle testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-pink-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      case 'Truck': return <Truck className="w-6 h-6 text-emerald-400" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-rose-400" />;
      default: return <Zap className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <div id="home-page" className="min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-pink-600/15 via-purple-600/20 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-900/15 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Cyber grid background */}
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#22d3ee] backdrop-blur-xl shadow-lg shadow-cyan-950/20">
                <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-ping" />
                <span>Next-Gen Autonomous Agency</span>
              </div>

              {/* H1 Headline scaling 40px to 80px */}
              <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black tracking-tight text-white leading-[1.08]">
                Intelligent <br />
                <span className="text-gradient-accent">Digital Solutions</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                We synthesize advanced AI, data-driven performance marketing, and cutting-edge software engineering to propel modern brands into compounding market dominance.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-btn-audit"
                  onClick={onOpenAudit}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#ec4899] to-[#a855f7] font-bold text-sm shadow-xl shadow-purple-500/30 text-white hover:opacity-95 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Free AI Audit</span>
                </button>
                
                <button
                  id="hero-btn-explore"
                  onClick={() => onNavigate('/what-we-do')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-sm font-semibold hover:bg-white/10 transition-all shadow-inner backdrop-blur-md text-white flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Live Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Deterministic Attribution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Sub-Second Model Bidding</span>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Robot Mascot & Live Telemetry Badge */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-md">
                
                {/* Glowing Aura Ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-500/30 via-purple-500/20 to-cyan-400/30 blur-2xl transform scale-95 pointer-events-none" />

                {/* Mascot Card container */}
                <div className="relative glass-card-glow p-3 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={mascotRobotImg}
                    alt="The Bot AI Mascot Robot holding diagnostic holographic tablet"
                    className="w-full h-auto rounded-2xl object-cover animate-float-slow"
                    loading="lazy"
                  />

                  {/* Floating Telemetry Pill */}
                  <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-2xl bg-[#090616]/85 border border-white/15 backdrop-blur-xl flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-pink-400 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Neural Optimizer v4</div>
                        <div className="text-[10px] font-mono text-cyan-400">Processing 4,800 events/sec</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      +310% ROAS
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Animated Stat Counters Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {AGENCY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center group hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-0.5">{stat.label}</div>
                <div className="text-xs font-mono text-gray-400">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CLIENT LOGO MARQUEE STRIP */}
      <section className="py-8 border-y border-white/[0.06] bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500">
            Powered by & Integrated With Global Tech Ecosystems
          </span>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="animate-marquee flex gap-12 items-center">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-gray-400 font-mono text-xs font-semibold tracking-wider uppercase hover:text-white hover:border-white/20 transition-all shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (2-COL: TEXT + 4 STAT CARDS) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: About Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
                <Bot className="w-3.5 h-3.5" />
                <span>The Architecture of Modern Growth</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Where Machine Intelligence Meets <span className="text-gradient-cyan">Engineering Rigor</span>
              </h2>

              <p className="text-gray-300 text-base leading-relaxed">
                The era of static marketing campaigns and guesswork is over. At The Bot, we engineer automated growth pipelines that operate 24/7/365. We combine deep neural attribution, real-time programmatic media bidding, and bespoke software systems that turn traffic into exponential revenue.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold text-sm">Deterministic Server-Side Tracking: </span>
                    <span className="text-gray-400 text-sm">Eliminate 40%+ tracking loss caused by browser blockers and privacy changes.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold text-sm">Sub-500ms Next.js Edge Web Platforms: </span>
                    <span className="text-gray-400 text-sm">Blazing speed that pushes conversion rates to 2-3x above industry norms.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold text-sm">Autonomous Inbound Lead Qualification: </span>
                    <span className="text-gray-400 text-sm">Smart conversational agents that qualify, schedule, and route enterprise buyers in under 60 seconds.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/why-choose-us')}
                  className="btn-gradient-outline px-6 py-3 text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <span>Discover Why Enterprises Choose The Bot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: 4 Stat / Capability Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 space-y-3 border-pink-500/20 bg-gradient-to-b from-pink-500/5 to-transparent">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Continuous Alpha</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Our machine models test thousands of ad micro-variations per hour to prevent creative fatigue.
                </p>
                <div className="text-xs font-mono text-pink-400 font-bold">Avg +310% ROAS</div>
              </div>

              <div className="glass-card p-6 space-y-3 border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Full-Stack Code</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We write production TypeScript, React, and Python applications that don't rely on bloated templates.
                </p>
                <div className="text-xs font-mono text-cyan-400 font-bold">99/100 PageSpeed</div>
              </div>

              <div className="glass-card p-6 space-y-3 border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Zero Vanity Bias</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We anchor our remuneration to verified closed revenue, pipeline growth, and actual enterprise bookings.
                </p>
                <div className="text-xs font-mono text-purple-400 font-bold">100% Attribution</div>
              </div>

              <div className="glass-card p-6 space-y-3 border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Compounding Moats</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Every visitor interaction sharpens your private proprietary dataset, driving compounding lower CAC over time.
                </p>
                <div className="text-xs font-mono text-amber-400 font-bold">-48% CAC Scale</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE PREVIEW GRID (6 CARDS) */}
      <section className="py-20 bg-white/[0.01] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
              <span>Sectors & Archetypes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered for High-Stakes <span className="text-gradient-accent">Industry Verticals</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Deploying intelligent systems across critical global infrastructure, enterprise tech, SaaS, and retail ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_WE_SERVE_PREVIEW.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-7 flex flex-col justify-between group cursor-pointer"
                onClick={() => onNavigate(item.path)}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-pink-500/40 transition-all duration-300">
                    {getServiceIcon(item.icon)}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">{item.subtitle}</div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {item.metric}
                  </span>
                  
                  <span className="text-xs text-pink-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Sector</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('/industries')}
              className="btn-gradient-outline px-8 py-3 text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View All 8 Industry Frameworks & Results</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. PROCESS STEP CARDS (4 PHASES) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase">
              <span>Operational Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 4-Phase <span className="text-gradient-purple">Neural Growth Cycle</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              A battle-tested methodology transforming uncalibrated marketing into an autonomous, high-yield revenue engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative glass-card p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
              >
                {/* Top Step Number Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase text-pink-400 font-bold tracking-wider">
                      {step.step}
                    </span>
                    <span className="text-2xl font-black text-white/20 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <div className="text-xs font-mono text-cyan-400 mb-3">{step.subtitle}</div>
                  
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Key Deliverables</div>
                  {step.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="text-xs text-gray-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-white/[0.01] border-y border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
              <span>Client Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Enterprise <span className="text-gradient-accent">Outcomes</span>
            </h2>
          </div>

          {/* Interactive Carousel Box */}
          <div className="max-w-4xl mx-auto relative">
            <div className="glass-card-glow p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-2xl text-white font-medium leading-relaxed mb-8 italic">
                "{TESTIMONIALS[activeTestimonial].quote}"
              </p>

              {/* Author & Stats row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-base font-bold text-white">
                    {TESTIMONIALS[activeTestimonial].author}
                  </div>
                  <div className="text-xs text-gray-400">
                    {TESTIMONIALS[activeTestimonial].role} • <span className="text-cyan-400">{TESTIMONIALS[activeTestimonial].company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{TESTIMONIALS[activeTestimonial].stats}</span>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                id="btn-prev-testimonial"
                onClick={() =>
                  setActiveTestimonial(
                    (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                  )
                }
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeTestimonial ? 'w-8 bg-pink-500' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                id="btn-next-testimonial"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
                }
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <CtaBanner onNavigate={onNavigate} onOpenAudit={onOpenAudit} />

    </div>
  );
};

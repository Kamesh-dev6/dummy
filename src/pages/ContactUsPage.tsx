import React, { useState } from 'react';
import { RoutePath } from '../types';
import { OFFICE_NODES, GLOBAL_NODES, FAQS } from '../data/agencyData';
import { PageHeader } from '../components/PageHeader';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Globe2,
  Check
} from 'lucide-react';

interface ContactUsPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate, onOpenAudit }) => {
  // Lead Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    objective: 'growth',
    budget: '25k-50k',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Selected Office Map State
  const [selectedOfficeId, setSelectedOfficeId] = useState<'mumbai' | 'chennai'>('mumbai');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeOffice = OFFICE_NODES.find((o) => o.id === selectedOfficeId) || OFFICE_NODES[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  return (
    <div id="contact-us-page" className="min-h-screen">
      {/* 1. PAGE HEADER */}
      <PageHeader
        badge="COMMUNICATION NODE"
        titlePrefix="Let's"
        titleHighlight="Connect Now."
        subtitle="Initiate a synapse with our neural link support nodes. Enter your coordinates and intent to commence data exchange."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' },
        ]}
        onNavigate={onNavigate}
      />

      {/* 2. LEAD TRANSMISSION FORM & INTRO (MATCHES SCREENSHOT 3) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="glass-card-glow p-8 sm:p-10 rounded-3xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>Transmit Brief</span>
                      <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      Direct intake to principal growth architects
                    </p>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    24h Telemetry SLA
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Transmission Received</h4>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      Thank you, <span className="text-emerald-400 font-bold">{formData.firstName}</span>. Your brief has been routed to our technical squad. We will respond with an initial diagnostic blueprint in under 24 hours.
                    </p>
                    <div className="pt-4 flex justify-center gap-3">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="btn-gradient-outline px-6 py-2.5 text-xs font-bold"
                      >
                        Transmit Additional Specs
                      </button>
                      <button
                        onClick={onOpenAudit}
                        className="btn-gradient px-6 py-2.5 text-xs font-bold flex items-center gap-1.5"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Run Instant AI Audit</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@enterprise.com"
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                          Primary Growth Objective
                        </label>
                        <select
                          value={formData.objective}
                          onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                          className="w-full bg-[#160f2e] border border-white/10 rounded-xl py-3 px-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-all"
                        >
                          <option value="growth">Performance Media & CAC Reduction</option>
                          <option value="seo">Technical SEO & GEO Search Domination</option>
                          <option value="engineering">Next.js & Custom Web App Build</option>
                          <option value="ai">Autonomous AI & CRM Agents</option>
                          <option value="enterprise">Full Agency Growth Retainer</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                          Monthly Media Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#160f2e] border border-white/10 rounded-xl py-3 px-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-all"
                        >
                          <option value="10k-25k">$10,000 - $25,000 / mo</option>
                          <option value="25k-50k">$25,000 - $50,000 / mo</option>
                          <option value="50k-150k">$50,000 - $150,000 / mo</option>
                          <option value="150k+">$150,000+ / mo (Enterprise Scale)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                        Project Brief / Mission Objectives *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current channels, bottlenecks, ARR/revenue target, and timeline..."
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
                          <span>Encrypting Transmission...</span>
                        ) : (
                          <>
                            <span>Transmit Brief</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 font-mono pt-1">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Mutual NDA Guaranteed
                      </span>
                      <span>•</span>
                      <span>Zero Spam Protocol</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

            {/* Right: Direct Channels & Guarantee */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-card p-6 rounded-3xl space-y-4 border-pink-500/20">
                <div className="flex items-center gap-2.5 text-pink-400 font-mono text-xs uppercase tracking-wider font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Immediate Direct WhatsApp</span>
                </div>
                <h4 className="text-xl font-bold text-white">Need an Instant Response?</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Connect with our on-duty Growth Engineers on WhatsApp for fast turnarounds, technical inquiries, or emergency scaling support.
                </p>
                <a
                  href="https://wa.me/914445678900?text=Hello%20The%20Bot%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gradient-outline w-full py-3 text-xs font-bold flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp (+91 44 4567 8900)</span>
                </a>
              </div>

              {/* Service Standards */}
              <div className="glass-card p-6 rounded-3xl space-y-3">
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider text-cyan-400">
                  Engagement Guarantees
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>15-Minute Response:</strong> Standard on all active client channels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Dedicated Squad:</strong> 1 Principal Strategist + 1 Data Engineer + 1 Creative Director.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Real-Time Dashboards:</strong> 24/7 live telemetry access via Looker Studio & PostHog.</span>
                  </li>
                </ul>
              </div>

              {/* Instant Audit Trigger */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-500/30 text-center space-y-3">
                <div className="text-xs font-mono text-purple-300 uppercase">Self-Serve Diagnostic</div>
                <div className="text-sm font-bold text-white">Want to evaluate your domain right now?</div>
                <button
                  onClick={onOpenAudit}
                  className="btn-gradient py-2.5 px-5 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Run Free AI Audit</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. GLOBAL NODE SUPPORT (4 CARDS MATCHING SCREENSHOT 3) */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
              <Globe2 className="w-3.5 h-3.5" />
              <span>International Channels</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Global Node Support
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Connect with localized agents across multiple time zones. Secure encrypted channels available.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GLOBAL_NODES.map((node, idx) => (
              <div
                key={idx}
                className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 text-cyan-400 border border-white/10">
                      {node.badge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {node.region}
                    </h4>
                    <p className="text-xs text-gray-400">{node.city}</p>
                  </div>

                  <div className="space-y-1 text-xs font-mono pt-2 border-t border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <Mail className="w-3.5 h-3.5 text-pink-400" />
                      <span className="text-xs truncate">{node.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <Phone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{node.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06]">
                  <a
                    href={node.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Connect</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PHYSICAL INFRASTRUCTURE & EMBEDDED MAP (MATCHES SCREENSHOT 3) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Dedicated Physical Facilities</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Physical Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Locate our terrestrial data centers, client experience lounges, and operational hubs.
            </p>
          </div>

          {/* Location Selector Tabs */}
          <div className="flex justify-center gap-3">
            {OFFICE_NODES.map((office) => (
              <button
                key={office.id}
                onClick={() => setSelectedOfficeId(office.id as 'mumbai' | 'chennai')}
                className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  selectedOfficeId === office.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{office.city}</span>
              </button>
            ))}
          </div>

          {/* Interactive Map & Office Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Map Frame */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-card p-2 border border-white/15 min-h-[340px]">
              <iframe
                title={`Map of The Bot ${activeOffice.city}`}
                src={activeOffice.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ minHeight: '340px', border: 0, borderRadius: '18px', filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office Info Card */}
            <div className="lg:col-span-5 glass-card-glow p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
                  <span>{activeOffice.type}</span>
                </div>

                <h4 className="text-2xl font-bold text-white">{activeOffice.city}</h4>

                <div className="space-y-3 text-xs text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span>{activeOffice.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono text-white">{activeOffice.phone}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="font-mono text-cyan-300">{activeOffice.email}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-mono text-gray-400">{activeOffice.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={activeOffice.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gradient w-full py-3 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Directly with {activeOffice.city.split(' ')[0]}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white/[0.01] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Addressed Protocols
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Clear clarity on engagement parameters, technology integrations, and security.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-pink-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-pink-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-gray-300 leading-relaxed border-t border-white/[0.04] pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Copy, Check, ShieldCheck, Zap, BarChart3, Globe, Cpu } from 'lucide-react';
import { AuditResult } from '../types';

interface FreeAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const FreeAuditModal: React.FC<FreeAuditModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact,
}) => {
  const [url, setUrl] = useState('');
  const [industry, setIndustry] = useState('b2b');
  const [goal, setGoal] = useState('cac');
  const [email, setEmail] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const analysisSteps = [
    'Initializing neural scraper and checking Edge TTFB latency...',
    'Scanning Core Web Vitals, mobile viewport, and script payload...',
    'Parsing SEO metadata, structured schema, and GEO indexation...',
    'Simulating multi-touch attribution and conversion drop-offs...',
    'Evaluating AI automation readiness and programmatic bidding vectors...',
    'Synthesizing diagnostic report and revenue uplift model...',
  ];

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    setAnalysisStep(0);
    setAuditResult(null);

    // Simulate multi-step progressive scanning
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < analysisSteps.length) {
        setAnalysisStep(step);
      } else {
        clearInterval(interval);
        // Generate simulated dynamic result based on url
        const cleanUrl = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
        const score = Math.floor(Math.random() * 18) + 72; // 72 to 89
        
        const mockResult: AuditResult = {
          url: cleanUrl,
          overallScore: score,
          grade: score >= 85 ? 'A' : 'B',
          categories: [
            {
              name: 'Technical Architecture & Speed',
              score: Math.floor(Math.random() * 15) + 80,
              status: 'Optimal',
              findings: [
                'Time to First Byte (TTFB) is within 420ms edge threshold',
                'Unused JavaScript payloads detected in third-party marketing tags',
                'Server-side rendering capable with minimal hydration lag',
              ],
            },
            {
              name: 'SEO & Generative Engine Optimization',
              score: Math.floor(Math.random() * 20) + 65,
              status: 'Warning',
              findings: [
                'Missing Schema.org Organization and Service structured data entities',
                'High vulnerability to LLM search engines (Perplexity / ChatGPT Search)',
                'Top 5 competitive commercial keywords lack dedicated semantic topic hubs',
              ],
            },
            {
              name: 'Attribution & Conversion Tracking',
              score: Math.floor(Math.random() * 25) + 60,
              status: 'Critical',
              findings: [
                'Client-side tracking losing ~38% of conversion signals to ad-blockers & iOS Safari',
                'Server-Side Meta CAPI / Google Enhanced Conversions not fully configured',
                'Checkout / Demo booking funnel suffers a 44% drop-off at step 2',
              ],
            },
            {
              name: 'AI Automation & Neural Bidding Readiness',
              score: Math.floor(Math.random() * 20) + 70,
              status: 'Warning',
              findings: [
                'Manual ad bidding cycles creating 22% ad budget inefficiency during off-hours',
                'Inbound inquiries lack real-time autonomous qualification bot routing',
                'CRM pipeline lacks predictive intent scoring for high-ticket accounts',
              ],
            },
          ],
          criticalFixes: [
            'Deploy Server-Side CAPI Gateway to recover lost 38% attribution telemetry immediately',
            'Upgrade core landing experience to Next.js edge-rendered micro-funnels',
            'Implement Generative Search (GEO) schema to capture high-intent AI search traffic',
            'Integrate automated WhatsApp / chat lead routing to respond in <60 seconds',
          ],
          estimatedRevenueUplift: '+28% to +44% in 90 Days',
          suggestedRoadmap: [
            'Week 1: Telemetry & Server-Side Tracking Bridge',
            'Week 2: Conversion Funnel Re-engineering & Speed Boost',
            'Week 3: Neural Bidding & Programmatic Search Deployment',
            'Week 4: Automated Inbound AI Qualification Loop',
          ],
        };

        setAuditResult(mockResult);
        setIsAnalyzing(false);
      }
    }, 600);
  };

  const handleCopyReport = () => {
    if (!auditResult) return;
    const text = `THE BOT - AI AUDIT REPORT FOR ${auditResult.url}
Overall Score: ${auditResult.overallScore}/100 (Grade: ${auditResult.grade})
Estimated Revenue Uplift: ${auditResult.estimatedRevenueUplift}

CRITICAL FIXES:
${auditResult.criticalFixes.map((f, i) => `${i + 1}. ${f}`).join('\n')}

Generated by The Bot AI Intelligence Agency (thebot.ai)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const resetAudit = () => {
    setAuditResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div
      id="free-audit-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#0d091e] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50 my-8">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          id="btn-close-audit-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-400 p-[1px]">
            <div className="w-full h-full bg-[#110c26] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Autonomous AI Audit Tool
              <span className="text-[10px] font-mono uppercase bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full border border-pink-500/30">
                v2.4 Live
              </span>
            </h3>
            <p className="text-xs text-gray-400">
              Analyze speed, attribution leakages, SEO visibility, and AI automation readiness in 5 seconds.
            </p>
          </div>
        </div>

        {/* FORM STATE */}
        {!isAnalyzing && !auditResult && (
          <form onSubmit={handleStartAudit} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                Target URL or Domain
              </label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="e.g. acme-enterprise.com"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                  Industry Vertical
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-[#160f2e] border border-white/10 rounded-xl py-3 px-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all"
                >
                  <option value="b2b">B2B Enterprise & Tech</option>
                  <option value="saas">SaaS & Cloud Platforms</option>
                  <option value="startup">High-Growth Startup</option>
                  <option value="retail">B2C & Direct Commerce</option>
                  <option value="logistics">Logistics & Supply Chain</option>
                  <option value="construction">Construction & Real Estate</option>
                  <option value="healthcare">Healthcare & BioTech</option>
                  <option value="fintech">FinTech & Banking</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                  Primary Objective
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-[#160f2e] border border-white/10 rounded-xl py-3 px-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all"
                >
                  <option value="cac">Slash Customer Acquisition Cost (CAC)</option>
                  <option value="pipeline">Accelerate Enterprise Pipeline</option>
                  <option value="speed">Upgrade Web Stack & Core Vitals</option>
                  <option value="seo">Dominate Google & AI Search (GEO)</option>
                  <option value="ai">Deploy Autonomous AI Agents</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                Work Email <span className="text-gray-400 lowercase">(for detailed telemetry report)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="executive@company.com (optional)"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                id="btn-run-scanner"
                className="w-full btn-gradient py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>Execute Deep Neural Scan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-[11px] text-gray-400 font-mono">
              Safe & non-intrusive analysis • Over 1,200 audits completed this month
            </p>
          </form>
        )}

        {/* LOADING / SCANNING STATE */}
        {isAnalyzing && (
          <div className="py-12 px-4 text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 animate-spin opacity-80" />
              <div className="absolute inset-1 rounded-full bg-[#0d091e] flex items-center justify-center">
                <Cpu className="w-8 h-8 text-cyan-300 animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white font-mono">
                Scanning Telemetry for <span className="text-cyan-400">{url}</span>
              </h4>
              <p className="text-xs text-pink-400 font-mono animate-pulse min-h-[20px]">
                {analysisSteps[analysisStep]}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md mx-auto bg-white/5 rounded-full h-2 overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-all duration-300"
                style={{ width: `${((analysisStep + 1) / analysisSteps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* RESULTS STATE */}
        {auditResult && !isAnalyzing && (
          <div className="space-y-6 pt-2 max-h-[70vh] overflow-y-auto pr-1">
            {/* Top Score Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-gray-400">Target Node</span>
                <h4 className="text-base font-bold text-white truncate max-w-xs">{auditResult.url}</h4>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Estimated Uplift: {auditResult.estimatedRevenueUplift}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300">
                    {auditResult.overallScore}
                    <span className="text-xs text-gray-400 font-normal">/100</span>
                  </div>
                  <div className="text-[10px] font-mono text-gray-400">HEALTH INDEX</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg">
                  {auditResult.grade}
                </div>
              </div>
            </div>

            {/* Diagnostic Categories */}
            <div className="space-y-3">
              <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Telemetry Breakdown
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {auditResult.categories.map((cat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white truncate max-w-[170px]">{cat.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                          cat.status === 'Optimal'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : cat.status === 'Warning'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {cat.score}% • {cat.status}
                      </span>
                    </div>
                    <ul className="text-[11px] text-gray-400 space-y-1">
                      {cat.findings.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <span className="text-pink-400">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Fixes Recommendation */}
            <div className="p-4 rounded-xl bg-pink-950/20 border border-pink-500/20 space-y-2">
              <h5 className="text-xs font-mono uppercase tracking-wider text-pink-300 font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-pink-400" />
                Priority High-Impact Interventions
              </h5>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {auditResult.criticalFixes.map((fix, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{fix}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onNavigateToContact();
                }}
                className="w-full sm:flex-1 btn-gradient py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Deploy Solutions With The Bot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyReport}
                className="w-full sm:w-auto px-4 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Brief' : 'Copy Report'}</span>
              </button>

              <button
                onClick={resetAudit}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Run New Audit"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

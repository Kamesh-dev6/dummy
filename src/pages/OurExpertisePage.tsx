import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import {
  EXPERTISE_AREAS,
  EXPERTISE_DIFFERENTIATORS,
  EXPERTISE_INDUSTRIES,
  EXPERTISE_APPROACH,
  EXPERTISE_OUTCOMES,
  EXPERTISE_FAQS,
} from '../data/agencyData';
import { PageHeader } from '../components/PageHeader';
import { CtaBanner } from '../components/CtaBanner';
import {
  TrendingUp,
  Search,
  Code2,
  LayoutGrid,
  Database,
  Sparkles,
  Target,
  Eye,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ArrowDown,
} from 'lucide-react';

interface OurExpertisePageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

const PAGE_TITLE = 'Our Expertise | AI, SEO, Digital Marketing & Technology | The Bot Agency';
const PAGE_DESCRIPTION =
  "Explore The Bot Agency's expertise in AI-driven marketing, SEO, web development, digital growth, and business technology solutions built for measurable growth.";

const SCHEMA_JSON = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.thebot.agency/our-expertise/#webpage',
      url: 'https://www.thebot.agency/our-expertise/',
      name: 'Our Expertise | The Bot Agency',
      description: PAGE_DESCRIPTION,
      isPartOf: { '@id': 'https://www.thebot.agency/#website' },
      about: { '@id': 'https://www.thebot.agency/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.thebot.agency/#organization',
      name: 'The Bot Agency',
      url: 'https://www.thebot.agency/',
    },
    {
      '@type': 'Service',
      name: 'Digital Growth',
      provider: { '@id': 'https://www.thebot.agency/#organization' },
      serviceType: 'Digital Marketing and Growth Solutions',
      areaServed: 'Worldwide',
    },
    {
      '@type': 'Service',
      name: 'SEO Services',
      provider: { '@id': 'https://www.thebot.agency/#organization' },
      serviceType: 'Search Engine Optimization',
      areaServed: 'Worldwide',
    },
    {
      '@type': 'Service',
      name: 'Web Development',
      provider: { '@id': 'https://www.thebot.agency/#organization' },
      serviceType: 'Website and Web Application Development',
      areaServed: 'Worldwide',
    },
    {
      '@type': 'Service',
      name: 'Business Technology Solutions',
      provider: { '@id': 'https://www.thebot.agency/#organization' },
      serviceType: 'HRMS, CRM, ERP and Business Technology Solutions',
      areaServed: 'Worldwide',
    },
  ],
};

export const OurExpertisePage: React.FC<OurExpertisePageProps> = ({ onNavigate, onOpenAudit }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Inject page-specific SEO metadata (title, description, OG tags, JSON-LD schema)
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let tag = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      const existed = !!tag;
      const previousContent = tag?.getAttribute('content') ?? null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
      return { existed, previousContent };
    };

    const descState = upsertMeta('name', 'description', PAGE_DESCRIPTION);
    const ogTitleState = upsertMeta('property', 'og:title', 'Our Expertise | AI, SEO, Marketing & Technology | The Bot Agency');
    const ogDescState = upsertMeta(
      'property',
      'og:description',
      "Discover The Bot Agency's expertise in AI-driven marketing, SEO, web development, digital growth, and business technology solutions."
    );

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'schema-our-expertise';
    schemaScript.text = JSON.stringify(SCHEMA_JSON);
    document.head.appendChild(schemaScript);

    return () => {
      document.title = previousTitle;
      const restore = (attr: 'name' | 'property', key: string, state: { existed: boolean; previousContent: string | null }) => {
        const tag = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
        if (!tag) return;
        if (state.existed && state.previousContent !== null) {
          tag.setAttribute('content', state.previousContent);
        } else if (!state.existed) {
          tag.remove();
        }
      };
      restore('name', 'description', descState);
      restore('property', 'og:title', ogTitleState);
      restore('property', 'og:description', ogDescState);
      document.getElementById('schema-our-expertise')?.remove();
    };
  }, []);

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-pink-400" />;
      case 'Search': return <Search className="w-6 h-6 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-pink-400" />;
    }
  };

  const getDiffIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Search': return <Search className="w-5 h-5 text-cyan-400" />;
      case 'Target': return <Target className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-pink-400" />;
    }
  };

  const getOutcomeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye': return <Eye className="w-5 h-5 text-cyan-400" />;
      case 'Target': return <Target className="w-5 h-5 text-pink-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <div id="our-expertise-page" className="min-h-screen">
      {/* 1. PAGE HEADER */}
      <PageHeader
        badge="OUR EXPERTISE"
        titlePrefix="AI, Marketing & Technology"
        titleHighlight="That Drive Business Growth"
        subtitle="At The Bot Agency, we bring together AI, digital marketing, SEO, web development, and business technology to help companies build stronger digital brands, generate qualified leads, improve visibility, and scale efficiently."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Expertise' },
        ]}
        onNavigate={onNavigate}
      />

      {/* 2. INTRO */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our approach combines strategic thinking, data-driven execution, creative solutions, and technology to create digital systems that support real business growth. Whether you need better search visibility, a high-performing website, stronger lead generation, or technology to streamline operations, our expertise is designed around your business goals.
          </p>
          <a
            href="#core-areas"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('core-areas')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gradient inline-flex px-6 py-3 text-xs font-bold items-center gap-2 cursor-pointer"
          >
            <span>Explore Our Capabilities</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 3. CORE AREAS OF EXPERTISE */}
<section id="core-areas" className="py-20 scroll-mt-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
        <span>Full Capability Set</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Our Core Areas of <span className="text-gradient-purple">Expertise</span>
      </h2>
    </div>

    <div className="space-y-8">
      {EXPERTISE_AREAS.map((area) => (
        <div
          key={area.number}
          id={`expertise-${area.number}`}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Column 1: Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {getAreaIcon(area.icon)}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-pink-400 tracking-wider font-bold">
                    {area.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {area.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{area.tagline}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{area.description}</p>
            </div>

            {/* Column 2: Items (4 cols) */}
            <div className="lg:col-span-4">
              <div className="flex flex-wrap gap-2">
                {area.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-200 bg-white/[0.04] border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 3: Image (4 cols) */}
            <div className="lg:col-span-4 overflow-hidden rounded-2xl border border-white/10 h-48 sm:h-56 lg:h-full min-h-[180px]">
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. WHAT MAKES OUR EXPERTISE DIFFERENT */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-wider uppercase">
              <span>Strategy + Creativity + Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Makes Our <span className="text-gradient-accent">Expertise Different</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Many businesses treat marketing, technology, and business operations as separate functions. We bring them together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE_DIFFERENTIATORS.map((diff, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl space-y-3">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getDiffIcon(diff.icon)}
                </div>
                <h3 className="text-sm font-bold text-white">{diff.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Expertise Built for <span className="text-gradient-purple">Different Industries</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Our experience spans multiple business environments, positioning our expertise across B2B, B2C, logistics, SaaS, startups, exporters, engineering, manufacturing, industrial equipment, and construction-related businesses.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {EXPERTISE_INDUSTRIES.map((industry, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-xs font-semibold text-gray-200 bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-black text-pink-400">50+</div>
              <div className="text-xs text-gray-400 font-semibold">Brands Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-400">2,200+</div>
              <div className="text-xs text-gray-400 font-semibold">Campaigns Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase">
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Understand → Strategize → <span className="text-gradient-purple">Build → Grow</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE_APPROACH.map((step, idx) => (
              <div key={idx} className="relative glass-card p-6 space-y-3">
                <span className="text-2xl font-black text-white/20 font-mono">{step.number}</span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BUILT FOR MEASURABLE GROWTH */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built for <span className="text-gradient-accent">Measurable Growth</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Our expertise is designed to help businesses move beyond simply having a digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {EXPERTISE_OUTCOMES.map((outcome, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  {getOutcomeIcon(outcome.icon)}
                </div>
                <h3 className="text-sm font-bold text-white">{outcome.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY BUSINESSES CHOOSE THE BOT AGENCY */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Businesses Choose <span className="text-gradient-purple">The Bot Agency</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            We combine marketing expertise, AI capabilities, SEO knowledge, and technology development under one growth-focused approach. Instead of managing multiple disconnected teams, businesses can work with one partner.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 pt-2">
            {['Digital Growth', 'SEO', 'Technology', 'Business Solutions'].map((tag, idx, arr) => (
              <React.Fragment key={tag}>
                <span className="px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
                  {tag}
                </span>
                {idx < arr.length - 1 && <span className="text-gray-500 text-xs">+</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="text-sm text-gray-400 pt-2">
            Our objective is simple: turn digital capabilities into meaningful business growth.
          </p>
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <CtaBanner
        onNavigate={onNavigate}
        onOpenAudit={onOpenAudit}
        title="Let's Build What's Next"
        subtitle="Your business needs more than a website or marketing campaign. Let's turn your ideas, challenges, and growth goals into a scalable digital solution."
      />

      {/* 10. FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Common questions about our expertise, approach, and the industries we serve.
            </p>
          </div>

          <div className="space-y-3">
            {EXPERTISE_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-pink-300 transition-colors cursor-pointer"
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

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('/contact-us')}
              className="btn-gradient-outline inline-flex px-6 py-3 text-xs font-bold items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { RoutePath } from '../types';
import { ChevronRight, Sparkles } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  subtitle: string;
  breadcrumbs?: { label: string; path?: RoutePath }[];
  onNavigate?: (path: RoutePath) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  titlePrefix,
  titleHighlight,
  titleSuffix = '',
  subtitle,
  breadcrumbs = [],
  onNavigate,
}) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#0e0720]/40 via-transparent to-transparent">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-600/15 via-purple-600/15 to-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 mb-6 text-xs text-gray-400 font-mono">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3 h-3 text-gray-600" />}
                {crumb.path && onNavigate ? (
                  <button
                    onClick={() => onNavigate(crumb.path!)}
                    className="hover:text-pink-400 transition-colors"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-gray-200">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#22d3ee] mb-6 backdrop-blur-xl shadow-lg shadow-cyan-950/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>{badge}</span>
        </div>

        {/* Scaled H1 Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
          {titlePrefix}{' '}
          <span className="text-gradient-accent">{titleHighlight}</span>
          {titleSuffix && ` ${titleSuffix}`}
        </h1>

        {/* Subtitle / Intro */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

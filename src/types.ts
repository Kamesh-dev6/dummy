export type RoutePath = 
  | '/'
  | '/what-we-do'
  | '/our-expertise'
  | '/industries'
  | '/why-choose-us'
  | '/our-partner'
  | '/contact-us';

export interface NavItem {
  name: string;
  path: RoutePath;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  icon: string;
  gradient: string;
  technologies: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  growthMetric: string;
  metricLabel: string;
  useCases: string[];
  techStack: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  stats: string;
  rating: number;
  avatarUrl?: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface PartnerAlliance {
  id: string;
  category: 'cloud' | 'ai' | 'data' | 'growth';
  categoryTitle: string;
  partners: {
    name: string;
    tier: string;
    description: string;
    icon: string;
  }[];
}

export interface OfficeNode {
  id: string;
  city: string;
  country: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: string;
  mapEmbedUrl: string;
  coordinates: { lat: number; lng: number };
}

export interface AuditResult {
  url: string;
  overallScore: number;
  grade: 'A+' | 'A' | 'B' | 'C';
  categories: {
    name: string;
    score: number;
    status: 'Optimal' | 'Warning' | 'Critical';
    findings: string[];
  }[];
  criticalFixes: string[];
  estimatedRevenueUplift: string;
  suggestedRoadmap: string[];
}

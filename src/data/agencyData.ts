import { image } from 'motion/react-client';
import {
  NavItem,
  ServiceItem,
  IndustryItem,
  Testimonial,
  ProcessStep,
  PartnerAlliance,
  OfficeNode
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'What We Do', path: '/what-we-do' },
  { name: 'Our Expertise', path: '/our-expertise' },
  { name: 'Industries', path: '/industries' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Our Partners', path: '/our-partner' },
  { name: 'Contact Us', path: '/contact-us' },
];

export const AGENCY_STATS = [
  { value: '99.4%', label: 'Attribution Precision', sub: 'Zero vanity tracking' },
  { value: '4.8x', label: 'Average Client ROAS', sub: 'Across 40+ verticals' },
  { value: '$180M+', label: 'Client Revenue Generated', sub: 'Past 24 calendar months' },
  { value: '250+', label: 'Neural Deployments', sub: 'High-availability infrastructure' },
];

export const CLIENT_LOGOS = [
  { name: 'Google Cloud', code: 'GCP' },
  { name: 'AWS Partner', code: 'AWS' },
  { name: 'NVIDIA Inception', code: 'NVDA' },
  { name: 'Microsoft Azure', code: 'AZURE' },
  { name: 'OpenAI Stack', code: 'OAI' },
  { name: 'Snowflake Data', code: 'SNOW' },
  { name: 'Stripe Scale', code: 'STRIPE' },
  { name: 'Databricks AI', code: 'DBRX' },
  { name: 'Shopify Plus', code: 'SHOP' },
  { name: 'HubSpot Elite', code: 'HUBS' },
];

export const WHO_WE_SERVE_PREVIEW = [
  {
    title: 'B2B Enterprise',
    subtitle: 'Account-Based Neural Pipelines',
    description: 'Autonomous lead enrichment, algorithmic intent scoring, and executive pipeline acceleration for 7-figure deal sizes.',
    path: '/industries' as const,
    metric: '+340% Pipeline Velocity',
    icon: 'Building2',
  },
  {
    title: 'High-Growth Startups',
    subtitle: '0-to-1 Acquisition Engines',
    description: 'Rapid-deployment growth frameworks to validate product-market fit, slash customer acquisition costs, and scale.',
    path: '/industries' as const,
    metric: '68% Lower CAC',
    icon: 'Rocket',
  },
  {
    title: 'SaaS Platforms',
    subtitle: 'Product-Led Neural Loops',
    description: 'Algorithmic onboarding, dynamic feature tiering, automated churn prediction, and behavioral expansion engines.',
    path: '/industries' as const,
    metric: '4.2x LTV/CAC Ratio',
    icon: 'Cpu',
  },
  {
    title: 'B2C & Direct-to-Consumer',
    subtitle: 'Real-Time Intent Commerce',
    description: 'Hyper-personalized conversion journeys, automated dynamic pricing, and cross-channel retargeting bots.',
    path: '/industries' as const,
    metric: '+42% Checkout Conversion',
    icon: 'ShoppingBag',
  },
  {
    title: 'Logistics & Supply Chain',
    subtitle: 'Autonomous Telemetry Intelligence',
    description: 'Route optimization algorithms, predictive maintenance for fleets, and neural supply chain forecasting models.',
    path: '/industries' as const,
    metric: '32% Route Efficiency',
    icon: 'Truck',
  },
  {
    title: 'Construction & Real Estate',
    subtitle: 'Spatial Intelligence & PropTech',
    description: 'Drone telemetry processing, generative project scheduling, and high-intent buyer acquisition matrices.',
    path: '/industries' as const,
    metric: '-28% Project Slippage',
    icon: 'Hammer',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'Phase 01',
    number: '01',
    title: 'Neural Discovery & Data Audit',
    subtitle: 'Deep telemetry intake and attribution analysis',
    description: 'We connect directly to your analytics, CRM, and ad accounts to unmask hidden conversion drop-offs, untracked pipeline leakage, and high-probability growth levers.',
    deliverables: ['Full Attribution Diagnostic', 'Unit Economics Audit', 'Vulnerability Assessment', 'Growth Matrix Model'],
  },
  {
    step: 'Phase 02',
    number: '02',
    title: 'Algorithmic Blueprint & Architecture',
    subtitle: 'Custom machine learning & tech stack design',
    description: 'Our engineers and growth tacticians architect an omni-channel system tailored specifically to your target ICP, integrating autonomous bidding models and modern frontend apps.',
    deliverables: ['Custom ML Attribution Pipeline', 'High-Speed Web Framework', 'Dynamic Creative Assets', 'Channel Allocation Engine'],
  },
  {
    step: 'Phase 03',
    number: '03',
    title: 'Autonomous Execution & Launch',
    subtitle: 'Continuous sub-second calibration',
    description: 'Deployment of neural ad scripts, predictive SEO clusters, and reactive landing pages that adjust copy, offers, and layout based on individual visitor behavioral signals in real time.',
    deliverables: ['Live Predictive Bidding', 'Conversion Optimization Bot', 'Real-Time Telemetry Dashboard', 'Automated Lead Routing'],
  },
  {
    step: 'Phase 04',
    number: '04',
    title: 'Exponential Scale & Product Moats',
    subtitle: 'Compounding returns and proprietary data dominance',
    description: 'As your customer data volume grows, our neural models sharpen, reducing blended acquisition costs and unlocking aggressive scale across tier-1 domestic and global markets.',
    deliverables: ['Market Share Expansion', 'Custom Enterprise APIs', 'Autonomous Retention Loops', 'Executive Board Reporting'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'The Bot re-architected our entire customer acquisition funnel in 60 days. Our customer acquisition cost plummeted by 54% while pipeline volume tripled. Their AI bidding model is unlike anything traditional agencies offer.',
    author: 'Vikramaditya Singhania',
    role: 'Chief Commercial Officer',
    company: 'Aetheris Global Technologies',
    stats: '+320% Revenue in 6 Months',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Most agencies hand you vanity reports with zero bottom-line accountability. The Bot gave us complete deterministic tracking and custom Next.js micro-frontends that convert at 7.8% cold traffic.',
    author: 'Elena Rostova',
    role: 'VP of Growth & Marketing',
    company: 'Synthetix Cloud Systems',
    stats: '5.2x ROAS on $400k/mo spend',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The AI-driven SEO architecture built by The Bot helped us dominate competitive search terms across 14 countries. Organic inbound leads now account for 62% of our total quarterly enterprise bookings.',
    author: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'OmniFlow Logistics',
    stats: '1.4M Monthly Organic Visitors',
    rating: 5,
  },
  {
    id: '4',
    quote: 'The Bot delivers true engineering-grade marketing. Their autonomous lead scoring and WhatsApp conversational agents handled 85% of our high-volume inquiries without adding headcount.',
    author: 'Priya Narayanan',
    role: 'Director of Digital Transformation',
    company: 'Zenith Retail Consortium',
    stats: '85% Inbound Qualification Rate',
    rating: 5,
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'digital-growth',
    title: 'Digital Growth & Performance Marketing',
    tagline: 'Algorithmic targeting engineered for maximum capital efficiency',
    description: 'We move beyond manual media buying. Our proprietary machine learning bidding engines optimize ad spend across Google, Meta, LinkedIn, and TikTok in real-time to capture high-intent demand at the lowest possible cost per acquisition.',
    features: [
      'Multi-Armed Bandit Creative Testing',
      'Real-Time Algorithmic Bidding Optimization',
      'Cross-Platform Intent Attribution Modeling',
      'Predictive High-LTV Audience Synthesis',
      'Automated Budget Rebalancing Scripts',
    ],
    metrics: [
      { label: 'Avg ROAS Uplift', value: '+310%' },
      { label: 'CAC Reduction', value: '-48%' },
    ],
    icon: 'TrendingUp',
    gradient: 'from-pink-500 via-rose-500 to-amber-500',
    technologies: ['Meta CAPI', 'Google Ads Smart Bidding', 'LinkedIn Ads API', 'AppsFlyer', 'Segment CDP'],
  },
  {
    id: 'seo-intelligence',
    title: 'SEO Intelligence & AI Search Domination',
    tagline: 'Algorithmic dominance for traditional and LLM-driven search',
    description: 'Rank at the absolute top of Google, Bing, and emergent AI search platforms (Perplexity, ChatGPT Search, Gemini). We synthesize deep technical crawlability, programmatic semantic clusters, and high-authority digital PR.',
    features: [
      'LLM & Generative Engine Optimization (GEO)',
      'Programmatic Semantic Content Clustering',
      'Core Web Vitals & Sub-500ms Edge TTFB',
      'Knowledge Graph & Structured Entity Ingestion',
      'Continuous Crawlability & Indexation Defense',
    ],
    metrics: [
      { label: 'Search Visibility', value: '+450%' },
      { label: 'Organic Inbound Pipeline', value: '$42M+' },
    ],
    icon: 'Search',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    technologies: ['Schema.org', 'Cloudflare Workers', 'Semrush API', 'Ahrefs', 'Custom GEO Scrapers'],
  },
  {
    id: 'engineering',
    title: 'Next-Gen Engineering & Web Platforms',
    tagline: 'Ultra-fast, conversion-optimized digital architecture',
    description: 'Fast sites convert. We build high-throughput, beautifully designed web apps, headless e-commerce stores, and high-converting landing systems built on React, Next.js, TypeScript, and serverless edge functions.',
    features: [
      'Sub-Second Next.js & React Architectures',
      'Headless Commerce & Micro-Frontend Systems',
      'Dynamic Server-Side A/B Experimentation',
      'Real-Time Analytics & Event Streaming',
      'Bank-Grade Zero-Trust Security Protocols',
    ],
    metrics: [
      { label: 'Average PageSpeed Score', value: '99/100' },
      { label: 'Serverless Uptime', value: '99.99%' },
    ],
    icon: 'Code2',
    gradient: 'from-purple-500 via-indigo-500 to-cyan-400',
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'Cloudflare Edge'],
  },
  {
    id: 'platforms-products',
    title: 'Platforms, Custom AI & Products',
    tagline: 'Enterprise-grade systems tailored to streamline operational intelligence',
    description: 'Deploy custom AI agents, automated CRM lead routing, internal LLM fine-tuned models, and bespoke software products that unlock operational scale and turn manual labor into autonomous workflows.',
    features: [
      'Custom LLM Fine-Tuning & RAG Pipelines',
      'Autonomous WhatsApp & Web Inbound Agents',
      'Custom CRM, ERP & LMS Intelligence Layers',
      'Predictive Customer Churn & Expansion Engines',
      'Automated Document Processing & OCR Workflows',
    ],
    metrics: [
      { label: 'Operational Hours Saved', value: '45,000+' },
      { label: 'Automation Precision', value: '99.2%' },
    ],
    icon: 'LayoutGrid',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    technologies: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis', 'Gemini Pro'],
  },
  {
    id: 'creative-intelligence',
    title: 'Creative Intelligence & Brand Identity',
    tagline: 'Data-informed creative assets that halt the scroll and provoke action',
    description: 'We blend human creative direction with machine-learning performance data. We produce high-converting motion graphics, 3D brand assets, video ads, and interactive UI systems engineered to drive high click-through rates.',
    features: [
      'High-Velocity Motion Graphics & 3D Renders',
      'Dynamic UGC & Creator Ad Synthesis',
      'Psychological Framing & Copywriting Systems',
      'Omni-Channel Brand Design Systems',
      'Real-Time Creative Fatigue Detection',
    ],
    metrics: [
      { label: 'Avg Click-Through Rate', value: '3.9%' },
      { label: 'Creative Win Rate', value: '68%' },
    ],
    icon: 'Sparkles',
    gradient: 'from-fuchsia-500 via-pink-500 to-purple-600',
    technologies: ['Blender 3D', 'Figma Tokens', 'After Effects', 'WebP/AVIF Pipelines'],
  },
  {
    id: 'predictive-data',
    title: 'Data Infrastructure & Predictive Analytics',
    tagline: 'Unified customer data platform and revenue attribution models',
    description: 'Break data silos. We construct modern cloud data warehouses, real-time telemetry pipelines, and predictive revenue dashboards that give executive leaders total visibility over their growth engine.',
    features: [
      'Multi-Touch Deterministic Attribution Pipelines',
      'Real-Time Server-Side Event Ingestion',
      'Executive KPI & Financial Forecast Dashboards',
      'Predictive Customer Lifetime Value (pLTV)',
      'Data Privacy & GDPR/CCPA Compliance Auditing',
    ],
    metrics: [
      { label: 'Data Latency', value: '<500ms' },
      { label: 'Pipeline Reliability', value: '99.98%' },
    ],
    icon: 'Database',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    technologies: ['Snowflake', 'BigQuery', 'dbt', 'ClickHouse', 'PostHog', 'Looker Studio'],
  },
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'b2b-enterprise',
    name: 'B2B Enterprise',
    tagline: 'Complex sales cycle acceleration and automated executive pipeline',
    description: 'Automated lead attribution, predictive analytics, and executive relationship management systems designed for 6-figure and 7-figure enterprise deal cycles.',
    icon: 'Building2',
    growthMetric: '+340%',
    metricLabel: 'Pipeline Velocity Uplift',
    useCases: [
      'Account-Based Marketing (ABM) targeting Fortune 1000 buying committees',
      'Intent-triggered automated outbound personalization sequences',
      'CRM predictive pipeline scoring and deal slippage warnings',
      'Custom interactive ROI calculator tools embedded in sales proposals',
    ],
    techStack: ['Salesforce API', 'Clearbit', 'LinkedIn Campaign API', 'HubSpot Hub', 'Next.js'],
  },
  {
    id: 'startups-scaleups',
    name: 'Startups & Scaleups',
    tagline: 'Rapid-deployment AI frameworks for 0-to-1 exponential growth',
    description: 'Rapid-deployment AI growth frameworks to accelerate product-market fit, optimize burn rate, and scale customer acquisitions exponentially from seed to Series C.',
    icon: 'Rocket',
    growthMetric: '68%',
    metricLabel: 'Reduction in CAC',
    useCases: [
      'Lean omni-channel acquisition testing across 8+ growth channels simultaneously',
      'High-converting viral waitlist and referral mechanics',
      'Micro-budget ad algorithmic allocation for maximum learning velocity',
      'Investor-ready unit economics and cohort retention dashboards',
    ],
    techStack: ['PostHog', 'Stripe Billing', 'Supabase', 'Meta Ads', 'Google Search'],
  },
  {
    id: 'saas-platforms',
    name: 'SaaS Platforms',
    tagline: 'Intelligent onboarding, churn prediction, and dynamic monetization',
    description: 'Intelligent user onboarding, churn prediction models, and dynamic pricing engines embedded directly into your software architecture to drive net revenue retention.',
    icon: 'Cpu',
    growthMetric: '4.8x',
    metricLabel: 'LTV to CAC Ratio',
    useCases: [
      'In-app behavioral event tracking triggering contextual upgrade prompts',
      'Predictive churn warning models with automated retention bot interventions',
      'Product-led growth SEO programmatic templates ranking for 10,000+ keywords',
      'Self-serve enterprise lead qualification and calendar booking routing',
    ],
    techStack: ['Segment', 'Mixpanel', 'AWS Lambda', 'OpenAI Embeddings', 'React'],
  },
  {
    id: 'b2c-retail',
    name: 'B2C & Direct Retail',
    tagline: 'Hyper-personalized commerce driven by behavioral intent AI',
    description: 'Hyper-personalized commerce experiences driven by behavioral AI. We decode consumer intent in real-time, bridging the gap between desire and instant checkout conversion.',
    icon: 'ShoppingBag',
    growthMetric: '+42%',
    metricLabel: 'Checkout Conversion Rate',
    useCases: [
      'Real-time personalized product recommendation and bundle carousels',
      'Cart abandonment recovery via WhatsApp conversational AI bots',
      'Dynamic flash sales and personalized urgency pricing triggers',
      'Omni-channel attribution across Meta, TikTok, and Google Performance Max',
    ],
    techStack: ['Shopify Plus', 'Klaviyo AI', 'WhatsApp Business API', 'Gorgias', 'Tailwind'],
  },
  {
    id: 'logistics-supply',
    name: 'Logistics & Supply Chain',
    tagline: 'Neural network route optimization and predictive maintenance',
    description: 'Route optimization algorithms, predictive maintenance for fleets, and neural network-driven supply chain forecasting deployed across complex physical distribution networks.',
    icon: 'Truck',
    growthMetric: '-32%',
    metricLabel: 'Fleet Operational Waste',
    useCases: [
      'Real-time predictive delivery ETA and route bottleneck recalculations',
      'Automated freight brokerage quote generation and carrier matching',
      'Warehouse demand forecasting models based on macroeconomic indicators',
      'Driver telemetry and IoT anomaly detection alerts',
    ],
    techStack: ['Kafka Streams', 'Python GeoSpatial', 'PostgreSQL', 'Grafana', 'Docker'],
  },
  {
    id: 'construction-realestate',
    name: 'Construction & Real Estate',
    tagline: 'Autonomous drone surveying analysis and high-intent buyer acquisition',
    description: 'Autonomous drone surveying analysis, risk-predictive schedules, and resource allocation algorithms alongside high-converting digital buyer acquisition for mega-projects.',
    icon: 'Hammer',
    growthMetric: '12x',
    metricLabel: 'High-Net-Worth Lead Surge',
    useCases: [
      'Interactive 3D architectural digital twins and virtual walkthroughs',
      'Targeted geo-fenced marketing to ultra-high-net-worth real estate investors',
      'Generative construction milestone tracking and material delay predictions',
      'Automated site inspection compliance logging with computer vision',
    ],
    techStack: ['Three.js', 'Google Maps Platform', 'PyTorch Vision', 'Next.js', 'HubSpot'],
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Life Sciences',
    tagline: 'HIPAA-compliant patient acquisition and clinical intelligence',
    description: 'Secure, privacy-first patient intake funnels, medical provider SEO clustering, and diagnostic support algorithms built to rigorous regulatory compliance standards.',
    icon: 'Activity',
    growthMetric: '+210%',
    metricLabel: 'Verified Patient Bookings',
    useCases: [
      'HIPAA-compliant conversational appointment booking assistants',
      'High-authority medical condition content hubs that capture patient intent',
      'Clinic multi-location local search domination across regional nodes',
      'Telehealth onboarding flow optimization with identity verification',
    ],
    techStack: ['HIPAA AWS Vault', 'Next.js', 'Twilio Voice API', 'FastAPI'],
  },
  {
    id: 'fintech-banking',
    name: 'FinTech & WealthTech',
    tagline: 'Algorithmic compliance, fraud intelligence, and investor acquisition',
    description: 'Customer acquisition for neo-banks, algorithmic trading platforms, and wealth advisors with integrated real-time KYC/AML onboarding optimization.',
    icon: 'ShieldCheck',
    growthMetric: '72%',
    metricLabel: 'Onboarding Completion Rate',
    useCases: [
      'Frictionless KYC drop-off mitigation and dynamic form compression',
      'High-intent investor search acquisition targeting accredited wealth creators',
      'Financial product comparison tools and personalized interest calculators',
      'Zero-trust data pipelines meeting SOC2 Type II standards',
    ],
    techStack: ['Plaid API', 'Stripe Elements', 'Cloudflare Zero Trust', 'TypeScript'],
  },
];

export const WHY_CHOOSE_US_PILLARS = [
  {
    number: '01',
    title: 'Proprietary AI Models vs Generic Playbooks',
    subtitle: 'Trained on 10M+ high-conversion consumer data points',
    description: 'Traditional agencies use cookie-cutter templates and manual bid tweaking. The Bot deploys proprietary reinforcement learning algorithms that test thousands of creative, audience, and bidding permutations per second.',
    highlights: ['Sub-second bid calibration', 'Creative fatigue prediction', 'Multi-source intent modeling'],
  },
  {
    number: '02',
    title: 'Full-Stack Engineering Rigor',
    subtitle: 'We write production code, not just ad copy',
    description: 'Marketing fails when the technical foundation is weak. Our team consists of seasoned software engineers, data scientists, and creative strategists who build fast, scalable, modern applications that convert at 3-5x industry averages.',
    highlights: ['Sub-500ms Edge TTFB', 'Headless CMS & Commerce', 'Custom API & Webhook Integrations'],
  },
  {
    number: '03',
    title: 'Deterministic Revenue Attribution',
    subtitle: 'Zero vanity metrics — only bankable bottom-line growth',
    description: 'We ban impressions and clicks as primary success metrics. Every dollar of ad spend is tied to actual closed revenue, pipeline creation, and verified customer lifetime value through server-side multi-touch tracking.',
    highlights: ['Server-Side CAPI tracking', 'Zero data drop-off', 'Custom executive revenue dashboards'],
  },
  {
    number: '04',
    title: 'Autonomous Scaling Loops',
    subtitle: 'Systems that compound in efficiency over time',
    description: 'Unlike manual workflows that hit human capacity bottlenecks, our neural pipelines continuously learn from your customer interaction data, getting smarter, cheaper, and faster as your volume expands.',
    highlights: ['Compounding data moats', 'Autonomous WhatsApp triage', 'Continuous A/B conversion engine'],
  },
];

export const COMPARISON_MATRIX = [
  {
    feature: 'Core Methodology',
    theBot: 'Autonomous AI Models + Real-Time Code Deployment',
    traditionalAgency: 'Manual ad tweaking + Static templates',
    inHouseTeam: 'Limited by team size & time constraints',
  },
  {
    feature: 'Attribution Tracking',
    theBot: '100% Server-Side Multi-Touch Deterministic Attribution',
    traditionalAgency: 'Basic pixel tracking prone to 40%+ data loss',
    inHouseTeam: 'Struggles with cross-channel deduplication',
  },
  {
    feature: 'Optimization Speed',
    theBot: 'Sub-second real-time algorithmic adjustments (24/7/365)',
    traditionalAgency: 'Weekly or bi-weekly manual reviews',
    inHouseTeam: 'Daily manual checks during business hours',
  },
  {
    feature: 'Web Tech Stack',
    theBot: 'Custom Next.js, React, Edge Functions (99/100 PageSpeed)',
    traditionalAgency: 'Slow bloated WordPress or builder themes',
    inHouseTeam: 'Engineers occupied with core product roadmap',
  },
  {
    feature: 'Accountability',
    theBot: 'Guaranteed pipeline velocity & verified ROAS thresholds',
    traditionalAgency: 'Vanity reports focused on clicks & impressions',
    inHouseTeam: 'Cost center subject to fixed overhead',
  },
  {
    feature: 'Speed to Deployment',
    theBot: 'Complete growth engine live in under 14 days',
    traditionalAgency: '6-8 weeks of kickoff meetings and onboarding',
    inHouseTeam: '3-6 months to hire, onboard, and build tools',
  },
];

export const PARTNER_ALLIANCES: PartnerAlliance[] = [
  {
    id: 'cloud-infrastructure',
    category: 'cloud',
    categoryTitle: 'Cloud & Compute Infrastructure',
    partners: [
      {
        name: 'Google Cloud Platform',
        tier: 'Premier Partner',
        description: 'Co-engineering on BigQuery, Vertex AI, and enterprise global compute distribution.',
        icon: 'Cloud',
      },
      {
        name: 'Amazon Web Services',
        tier: 'Advanced Technology Partner',
        description: 'Serverless Lambda edge execution, ECS microservices, and SageMaker model hosting.',
        icon: 'Server',
      },
      {
        name: 'Microsoft Azure',
        tier: 'AI Co-Innovation Partner',
        description: 'Enterprise Azure OpenAI Service integration and high-security enterprise data vaults.',
        icon: 'Shield',
      },
      {
        name: 'NVIDIA Inception',
        tier: 'Premier AI Accelerator',
        description: 'Deep neural model training on H100 GPU clusters and TensorRT inference optimization.',
        icon: 'Cpu',
      },
    ],
  },
  {
    id: 'ai-frameworks',
    category: 'ai',
    categoryTitle: 'Foundation AI & Research Labs',
    partners: [
      {
        name: 'OpenAI Ecosystem',
        tier: 'Solution Partner',
        description: 'Custom fine-tuned GPT models and low-latency embeddings for semantic marketing agents.',
        icon: 'Sparkles',
      },
      {
        name: 'Anthropic Claude',
        tier: 'Enterprise Partner',
        description: 'Long-context document analysis and high-precision brand voice synthesis systems.',
        icon: 'Bot',
      },
      {
        name: 'Hugging Face',
        tier: 'Model Hub Contributor',
        description: 'Open-source transformer deployment and specialized multilingual tokenizers.',
        icon: 'Layers',
      },
      {
        name: 'Cohere',
        tier: 'Enterprise Search Partner',
        description: 'Multilingual neural search reranking and zero-shot intent categorization.',
        icon: 'Search',
      },
    ],
  },
  {
    id: 'martech-data',
    category: 'data',
    categoryTitle: 'MarTech, CDP & Data Warehousing',
    partners: [
      {
        name: 'Snowflake',
        tier: 'Select Data Partner',
        description: 'Zero-copy data sharing and cross-channel marketing data clean rooms.',
        icon: 'Database',
      },
      {
        name: 'Databricks',
        tier: 'AI & Lakehouse Alliance',
        description: 'Unified lakehouse architectures for real-time customer behavioral feature stores.',
        icon: 'Terminal',
      },
      {
        name: 'Meta Business Partner',
        tier: 'Elite Marketing Partner',
        description: 'Direct Conversions API (CAPI) alpha testing and automated creative feed integration.',
        icon: 'Share2',
      },
      {
        name: 'HubSpot Elite',
        tier: 'Certified Integrator',
        description: 'Deep bidirectional CRM orchestration, pipeline automation, and multi-touch reporting.',
        icon: 'Workflow',
      },
    ],
  },
];

export const OFFICE_NODES: OfficeNode[] = [
  {
    id: 'mumbai',
    city: 'Mumbai Core',
    country: 'India',
    type: 'Headquarters & Engineering Nexus',
    address: 'Unit 402, Quantum Tower, Cyber Park West, Andheri East, Mumbai 400069',
    phone: '+91 22 4567 8900',
    email: 'mumbai@thebot.ai',
    whatsapp: 'https://wa.me/912245678900?text=Hello%20The%20Bot%20Mumbai%20Team%2C%20I%20would%20like%20to%20request%20a%20consultation.',
    hours: 'Mon - Fri: 09:00 - 19:00 IST',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.878143213038!2d72.86873997596096!3d19.11299995081198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b81a7b%3A0x2db4812328df9521!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    coordinates: { lat: 19.113, lng: 72.868 },
  },
  {
    id: 'chennai',
    city: 'Chennai Hub',
    country: 'India',
    type: 'AI Research & Delivery Center',
    address: 'Level 6, Tidel Space Building, Rajiv Gandhi IT Expressway, Taramani, Chennai 600113',
    phone: '+91 44 4567 8901',
    email: 'chennai@thebot.ai',
    whatsapp: 'https://wa.me/914445678901?text=Hello%20The%20Bot%20Chennai%20Team%2C%20I%20would%20like%20to%20connect%20with%20an%20AI%20specialist.',
    hours: 'Mon - Fri: 09:00 - 19:00 IST',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4897258380486!2d80.24647317585098!3d12.983995814138092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d666687236d%3A0x6a086b9f2913e618!2sTIDEL%20Park%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin',
    coordinates: { lat: 12.984, lng: 80.246 },
  },
];

export const GLOBAL_NODES = [
  {
    region: 'India / APAC',
    city: 'Mumbai & Chennai',
    email: 'apac@thebot.ai',
    phone: '+91 44 4567 8900',
    whatsapp: 'https://wa.me/914445678900?text=Hi%20The%20Bot%20APAC%20team%2C%20inquiry%20regarding%20AI%20solutions',
    badge: 'Primary Operations Node',
  },
  {
    region: 'MEA Node',
    city: 'Riyadh & Dubai',
    email: 'mea@thebot.ai',
    phone: '+971 4 398 2210',
    whatsapp: 'https://wa.me/97143982210?text=Hi%20The%20Bot%20MEA%20team%2C%20inquiry%20regarding%20AI%20solutions',
    badge: 'Middle East Tech Gateway',
  },
  {
    region: 'UK / EU Protocol',
    city: 'London Tech Nexus',
    email: 'eu@thebot.ai',
    phone: '+44 20 7946 0912',
    whatsapp: 'https://wa.me/442079460912?text=Hi%20The%20Bot%20EU%20team%2C%20inquiry%20regarding%20AI%20solutions',
    badge: 'GDPR & Euro Node',
  },
  {
    region: 'USA / Canada',
    city: 'Austin Silicon Hills',
    email: 'us@thebot.ai',
    phone: '+1 512 843 0192',
    whatsapp: 'https://wa.me/15128430192?text=Hi%20The%20Bot%20US%20team%2C%20inquiry%20regarding%20AI%20solutions',
    badge: 'North America Commercial',
  },
];

export const EXPERTISE_AREAS = [
  {
    number: '01',
    image: 'src/assets/images/digi growth.jpg',
    title: 'Digital Growth',
    icon: 'TrendingUp',
    tagline: 'We create growth-focused digital strategies that help businesses reach the right audience and convert attention into measurable opportunities.',
    description: 'Our focus is not simply generating traffic—it is building a system that supports better leads, stronger engagement, and sustainable growth.',
    items: [
      'Digital Marketing',
      'Marketing Strategy',
      'Branding',
      'Social Media Management',
      'Lead Generation',
      'AI-Driven Lead Generation',
      'Predictive Market Analysis',
      'Performance Monitoring',
      'Campaign Audit & Reporting',
    ],
  },
  {
    number: '02',
    image: 'src/assets/images/seo.jpg',
    title: 'Search Engine Optimization',
    icon: 'Search',
    tagline: 'Our SEO expertise helps businesses improve their online visibility and attract high-intent customers through search.',
    description: "We build SEO strategies around search intent, website performance, content quality, technical health, and long-term organic growth. The Bot Agency's current SEO offering also emphasizes AEO and AI visibility alongside conventional search optimization.",
    items: [
      'Technical SEO',
      'On-Page SEO',
      'Off-Page SEO',
      'Local SEO',
      'International SEO',
      'SEO Audits',
      'Link Building',
      'AEO',
      'Content Optimization',
      'Website Performance Optimization',
      'Schema Markup',
    ],
  },
  {
    number: '03',
    image: 'src/assets/images/web and tech.jpg',
    title: 'Web & Technology Development',
    icon: 'Code2',
    tagline: 'We build modern digital experiences that combine design, performance, functionality, and search readiness.',
    description: 'We focus on creating websites that are not only visually professional but also designed to support traffic, lead generation, usability, and business growth.',
    items: [
      'Custom Website Development',
      'Web Development',
      'B2B Website Development',
      'Manufacturing Website Development',
      'WordPress Development',
      'Ecommerce Development',
      'App Development',
      'Technology Development',
    ],
  },
  {
    number: '04',
    image: 'src/assets/images/buisness.jpg',
    title: 'Business Platforms & Digital Products',
    icon: 'LayoutGrid',
    tagline: 'Technology should simplify business operations, not make them more complicated.',
    description: 'These solutions help businesses organize operations, manage information, improve productivity, and create more connected workflows.',
    items: [
      'HRMS',
      'People Management Systems',
      'CRM',
      'ERP',
      'AMC Management',
      'Business Process Solutions',
    ],
  },
];

export const EXPERTISE_DIFFERENTIATORS = [
  {
    icon: 'Database',
    title: 'Data-Driven Strategy',
    description: 'We use business data, market insights, search trends, and performance signals to build more informed strategies.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Enabled Growth',
    description: 'We integrate AI into marketing, lead generation, content, and digital workflows to improve efficiency and decision-making.',
  },
  {
    icon: 'Search',
    title: 'Search-Ready Digital Experiences',
    description: 'From technical SEO to website architecture and content optimization, we build digital experiences with visibility in mind.',
  },
  {
    icon: 'Target',
    title: 'Business-Focused Execution',
    description: 'Our work is connected to practical business outcomes such as qualified leads, stronger visibility, better engagement, and scalable growth.',
  },
];

export const EXPERTISE_INDUSTRIES = [
  'B2B Businesses',
  'B2C Businesses',
  'Engineering Companies',
  'Manufacturing Companies',
  'Industrial Equipment',
  'SaaS Companies',
  'Startups',
  'Logistics Businesses',
  'Export Businesses',
  'Construction Companies',
];

export const EXPERTISE_APPROACH = [
  {
    number: '01',
    title: 'Understand',
    description: 'We first understand your business, target audience, industry, competition, and growth objectives.',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'We create a practical strategy based on market opportunities, digital performance, and business priorities.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We execute through marketing, SEO, technology, content, automation, and digital platforms.',
  },
  {
    number: '04',
    title: 'Grow',
    description: 'We continuously measure performance, identify opportunities, and optimize the strategy for stronger results.',
  },
];

export const EXPERTISE_OUTCOMES = [
  {
    icon: 'Eye',
    title: 'Higher Visibility',
    description: 'Improve your presence across search engines and digital channels.',
  },
  {
    icon: 'Target',
    title: 'Better Lead Quality',
    description: 'Reach customers who are more relevant to your products and services.',
  },
  {
    icon: 'LayoutGrid',
    title: 'Stronger Digital Experiences',
    description: 'Create websites and platforms that are easier to use and built for conversion.',
  },
  {
    icon: 'Cpu',
    title: 'Smarter Operations',
    description: 'Use technology and automation to simplify repetitive business processes.',
  },
  {
    icon: 'TrendingUp',
    title: 'Scalable Growth',
    description: 'Build digital systems that can evolve as your business grows.',
  },
];

export const EXPERTISE_FAQS = [
  {
    q: 'What areas of expertise does The Bot Agency offer?',
    a: 'The Bot Agency provides expertise across AI-driven marketing, digital marketing, SEO, web development, lead generation, and business technology solutions such as HRMS, CRM, and ERP.',
  },
  {
    q: "How can The Bot Agency help improve my business's online visibility?",
    a: 'We use SEO, content optimization, AEO, technical SEO, digital marketing, and performance-focused web development to improve online visibility and attract more relevant users.',
  },
  {
    q: 'Does The Bot Agency provide AI-powered digital solutions?',
    a: 'Yes. We integrate AI into marketing, lead generation, content workflows, analytics, and business processes to help improve efficiency and support smarter decision-making.',
  },
  {
    q: 'Can The Bot Agency develop a website for my business?',
    a: 'Yes. We provide custom website development, B2B website development, WordPress development, ecommerce development, and web application solutions based on business requirements.',
  },
  {
    q: 'Does The Bot Agency offer solutions for business operations?',
    a: 'Yes. Our technology expertise includes HRMS, CRM, ERP, and other business management solutions designed to help businesses improve workflows, productivity, and operational efficiency.',
  },
  {
    q: 'Which industries does The Bot Agency work with?',
    a: 'We work with businesses across industries including manufacturing, engineering, industrial equipment, SaaS, logistics, construction, startups, exporters, and B2B and B2C businesses.',
  },
  {
    q: 'How does The Bot Agency approach digital growth?',
    a: 'Our approach follows four key stages: Understand → Strategize → Build → Grow. We first understand the business and then develop, implement, measure, and continuously optimize the strategy.',
  },
  {
    q: 'Can The Bot Agency combine SEO, marketing, and technology services?',
    a: 'Yes. Our expertise brings digital marketing, SEO, AI, web development, and business technology together so businesses can manage multiple digital growth requirements through one strategic partner.',
  },
];

export const FAQS = [
  {
    q: 'How fast can The Bot launch our AI marketing and tech infrastructure?',
    a: 'Our modular architecture enables rapid deployment. Following our Phase 01 Neural Audit, standard client integrations go live within 10 to 14 business days, complete with server-side attribution, custom landing pages, and algorithmic bidding pipelines.',
  },
  {
    q: 'How does The Bot differ from conventional marketing agencies?',
    a: 'Conventional agencies rely on static ad copy and manual bidding schedules that lose 30-50% efficiency. We are an AI technology agency that deploys custom machine learning models, sub-second bidding algorithms, and high-performance Next.js web applications with 100% deterministic revenue tracking.',
  },
  {
    q: 'What minimum ad spend or company size is required to work together?',
    a: 'We partner with high-growth startups spending at least $10k/month in paid media, as well as mid-market and global enterprises with multi-million dollar annual budgets seeking aggressive scale and engineering superiority.',
  },
  {
    q: 'Can you integrate with our existing CRM, tech stack, and ad accounts?',
    a: 'Yes. We natively integrate with Salesforce, HubSpot, Shopify Plus, Segment, Snowflake, Meta CAPI, Google Ads, BigQuery, AWS, and custom REST/GraphQL APIs with zero disruption to your active operations.',
  },
];

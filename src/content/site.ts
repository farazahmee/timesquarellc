/**
 * Single source of truth for site copy.
 *
 * Everything marked "dummy" is placeholder content to be replaced with real
 * numbers and quotes before launch. Keeping it here means the layout and the
 * copy can change independently.
 */

export const SITE = {
  name: "TimeSquare",
  legalName: "TimeSquare LLC",
  tagline: "AI systems for operations teams.",
  description:
    "TimeSquare designs, builds, and runs AI automation, agents, and custom software for operations teams. Scoped in a week. In production in four to twelve.",
  email: "hello@timesquarellc.com",
  legalEmail: "contact@timesquarellc.com",
  location: "Chafford Hundred, Grays, England",
  calendarUrl: "https://calendar.app.google/meegViXuibrs6Egq7",
  linkedinUrl: "https://www.linkedin.com/company/timesquarellc/",
  url: "https://timesquarellc.com",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
] as const;

export const HERO = {
  eyebrow: "AI automation studio · UK based, working globally",
  titleLead: "AI systems that take the",
  titleMuted: "manual work",
  titleTail: "off your team.",
  lead: "We design, build, and run automation, agents, and custom software for operations teams. Scoped in a week. In production in four to twelve.",
  primaryCta: "Book a free consultation",
  secondaryCta: "See the work",
  footnote: "Healthcare · Finance · Retail · Digital signage · Coaching",
} as const;

export const STATS = [
  { value: "40+", label: "systems shipped" },
  { value: "12", label: "industries served" },
  { value: "4–12", label: "weeks to production" },
] as const;

export const CLIENTS = [
  "SurgiSync",
  "RevelTV",
  "Simpla.AI",
  "A-Plan",
  "Adlytic",
  "OMNO AI",
] as const;

export const CAPABILITIES = [
  {
    number: "01",
    title: "AI automation",
    description:
      "We map the repetitive work inside your team — approvals, data entry, reporting, follow-ups — and replace it with pipelines that run unattended.",
    tags: ["Workflow mapping", "Human in the loop", "Monitoring"],
    href: "/services#automation",
    art: "/art/cap-automation.svg",
  },
  {
    number: "02",
    title: "AI agents",
    description:
      "Support, qualification, and research agents grounded in your own documents and systems. Low-confidence answers hand off to a person, not a guess.",
    tags: ["RAG", "Tool use", "Escalation"],
    href: "/services#agents",
    art: "/art/cap-agents.svg",
  },
  {
    number: "03",
    title: "Custom software",
    description:
      "Production systems built around how your business actually operates — not a SaaS product with your name on the login screen.",
    tags: ["Python", "React", "Cloud"],
    href: "/services#software",
    art: "/art/cap-software.svg",
  },
  {
    number: "04",
    title: "Web & mobile",
    description:
      "Customer-facing apps and conversion-focused sites built for speed, search visibility, and clean analytics — so you can see what earns revenue.",
    tags: ["Next.js", "Mobile", "Analytics"],
    href: "/services#web",
    art: "/art/cap-web.svg",
  },
] as const;

export type BuildTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  metric: { value: string; label: string };
  dashboard: {
    title: string;
    subtitle: string;
    metrics: { label: string; value: string; delta: string }[];
    rows: { name: string; detail: string; status: "ok" | "warn"; duration: string }[];
    chartLabel: string;
  };
};

export const BUILD_TABS: BuildTab[] = [
  {
    id: "automate",
    label: "Automate",
    title: "Remove the handoffs, not the judgement.",
    description:
      "We take the copy-paste, the chasing, and the status updates out of the middle of your process. Your team keeps the decisions that need a human.",
    bullets: [
      "Document intake, validation, and routing",
      "Cross-system sync with a full audit trail",
      "Exception queues that surface only what needs attention",
    ],
    metric: { value: "186 hrs", label: "saved per month across three workflows" },
    dashboard: {
      title: "Automation overview",
      subtitle: "Operations · last 24 hours",
      metrics: [
        { label: "Runs today", value: "1,284", delta: "+12.4%" },
        { label: "Hours saved", value: "186", delta: "+8.1%" },
        { label: "Exceptions", value: "7", delta: "−3" },
        { label: "Success rate", value: "99.4%", delta: "stable" },
      ],
      rows: [
        { name: "Invoice intake", detail: "Finance · 412 documents", status: "ok", duration: "1.8s avg" },
        { name: "New client onboarding", detail: "Operations · 38 accounts", status: "ok", duration: "4.2s avg" },
        { name: "CRM enrichment", detail: "Sales · 126 records", status: "warn", duration: "2 flagged" },
        { name: "Weekly board pack", detail: "Reporting · 1 report", status: "ok", duration: "Queued" },
      ],
      chartLabel: "Automated runs",
    },
  },
  {
    id: "assist",
    label: "Assist",
    title: "Give every team a second pair of hands.",
    description:
      "Agents that read your documents, answer with citations, and know when to stop. They sit inside the tools your team already uses.",
    bullets: [
      "Retrieval grounded in approved documents",
      "Drafting, summarising, and first-line support",
      "Confidence thresholds with clean human handoff",
    ],
    metric: { value: "71%", label: "of first-line questions resolved without a person" },
    dashboard: {
      title: "Agent workspace",
      subtitle: "Support & knowledge · last 7 days",
      metrics: [
        { label: "Conversations", value: "2,941", delta: "+18.2%" },
        { label: "Resolved", value: "71%", delta: "+4.6%" },
        { label: "Handoffs", value: "854", delta: "−11%" },
        { label: "CSAT", value: "4.8", delta: "+0.2" },
      ],
      rows: [
        { name: "Policy assistant", detail: "HR · 612 conversations", status: "ok", duration: "3.1s avg" },
        { name: "Support triage", detail: "Customer · 1,204 tickets", status: "ok", duration: "2.4s avg" },
        { name: "Research briefs", detail: "Strategy · 44 briefs", status: "warn", duration: "6 reviewed" },
        { name: "Sales qualification", detail: "Revenue · 87 leads", status: "ok", duration: "1.9s avg" },
      ],
      chartLabel: "Agent conversations",
    },
  },
  {
    id: "build",
    label: "Build",
    title: "Software shaped around how you work.",
    description:
      "When the right answer is not another subscription, we build the internal tool or customer product that fits the process exactly.",
    bullets: [
      "Discovery sprint with a fixed scope and price",
      "Working demos every week, not status decks",
      "Deployed to your cloud with monitoring from day one",
    ],
    metric: { value: "6 weeks", label: "from signed scope to a live internal tool" },
    dashboard: {
      title: "Operations console",
      subtitle: "Custom platform · live",
      metrics: [
        { label: "Active users", value: "248", delta: "+31" },
        { label: "Tasks cleared", value: "3,806", delta: "+22%" },
        { label: "Avg. handle time", value: "2m 14s", delta: "−38s" },
        { label: "Uptime", value: "99.98%", delta: "30 days" },
      ],
      rows: [
        { name: "Surgical list sync", detail: "Healthcare · 18 theatres", status: "ok", duration: "Live" },
        { name: "Client onboarding", detail: "Operations · 42 clients", status: "ok", duration: "Live" },
        { name: "Signage content queue", detail: "Media · 3,000+ sites", status: "ok", duration: "Live" },
        { name: "Data migration", detail: "Platform · 1.2m records", status: "warn", duration: "Review" },
      ],
      chartLabel: "Platform activity",
    },
  },
];

export const PROCESS = [
  {
    number: "01",
    title: "Map",
    description:
      "One working session to map your workflows and find where the manual hours actually go. You leave with a shortlist of what is worth automating first.",
    output: "Opportunity map",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "A scoped build plan with a fixed stack, timeline, and cost. No over-engineering, no surprises. You approve it before we write code.",
    output: "Fixed-scope plan",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Weekly sprints with working demos. You see the system running against your real data long before launch day.",
    output: "Working system",
  },
  {
    number: "04",
    title: "Run",
    description:
      "We deploy to your cloud, wire up monitoring, and stay on after launch to tune it as usage grows.",
    output: "Monitoring + support",
  },
] as const;

export const OUTCOMES = [
  {
    metric: "35%",
    label: "higher surgical list accuracy",
    client: "SurgiSync",
    category: "Healthcare",
    description:
      "A real-time surgical collaboration platform with live list sync, role-based access, and a suggestion module that teams actually use during theatre.",
    tech: "WebSocket · Redis · OAuth 2.0",
  },
  {
    metric: "3,000+",
    label: "clients served on the platform",
    client: "RevelTV",
    category: "Digital signage",
    description:
      "A nationwide signage network with automated content operations and containerised deployments across automotive, corporate, and retail sites.",
    tech: "Django · Vue.js · Kubernetes",
  },
  {
    metric: "24/7",
    label: "automated document validation",
    client: "Simpla.AI",
    category: "Finance",
    description:
      "A tax and accounting platform combining LLM guidance, document validation, and analytics dashboards so finance teams reach compliant decisions faster.",
    tech: "Django REST · Python · AWS",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "TimeSquare built an AI-powered coaching system that reduced our client response time by 60%. Their ChatGPT integration was seamless.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "A-Plan Coaching",
  },
  {
    quote:
      "The real-time surgical collaboration tool they built improved our list accuracy by 35%. Their WebSocket expertise was exactly what we needed.",
    name: "Dr James Chen",
    role: "Lead Surgeon",
    company: "SurgiSync",
  },
  {
    quote:
      "They automated our entire content pipeline serving 3,000+ clients. Rock-solid reliability across our nationwide digital signage network.",
    name: "Michael Torres",
    role: "CTO",
    company: "RevelTV",
  },
] as const;

export const INDUSTRIES = [
  {
    name: "Healthcare",
    icon: "health",
    description:
      "Clinical coordination, patient intake, and document-heavy admin where accuracy is not optional.",
  },
  {
    name: "Financial services",
    icon: "finance",
    description:
      "Validation, reporting, and compliance workflows with a complete audit trail.",
  },
  {
    name: "Retail & e-commerce",
    icon: "retail",
    description:
      "Order operations, merchandising, and customer support that scale without adding headcount.",
  },
  {
    name: "Logistics",
    icon: "logistics",
    description:
      "Scheduling, exception handling, and supplier communication across distributed teams.",
  },
] as const;

export const FAQS = [
  {
    question: "What types of AI solutions do you build?",
    answer:
      "We specialise in LLM integrations (ChatGPT, GPT-4), natural language processing, computer vision, chatbot development, and machine learning models like churn prediction. We focus on practical AI that solves real business problems — not AI for AI's sake.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects range from 4–12 weeks depending on complexity. A chatbot or API integration might take 4–6 weeks, while a full-stack platform with AI features typically takes 8–12 weeks. We provide detailed timelines after our discovery phase.",
  },
  {
    question: "Do you work with businesses outside the UK?",
    answer:
      "Yes — we serve clients across the UK, US, and Middle East. Our team has timezone flexibility to overlap with US Eastern and Gulf time zones for smooth collaboration.",
  },
  {
    question: "What is your tech stack?",
    answer:
      "We primarily work with Python (FastAPI, Django), React/Next.js, Node.js, PostgreSQL, MongoDB, AWS, Docker, and Kubernetes. For AI, we use OpenAI APIs, LangChain, TensorFlow, and custom ML pipelines with tools like Apache Airflow.",
  },
  {
    question: "How much does an AI integration project cost?",
    answer:
      "Project costs vary based on scope and complexity. A focused AI integration might start from £5,000, while a full-stack platform with multiple AI features could range from £15,000–50,000+. We provide detailed quotes after a free consultation.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes — every project includes post-launch support. We offer maintenance packages for ongoing monitoring, updates, and optimisation.",
  },
] as const;

export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: "automation",
    number: "01",
    title: "AI automation for operations",
    shortTitle: "AI automation",
    summary: "Pipelines for approvals, reporting and follow-ups.",
    description:
      "We map the repetitive work inside your team — approvals, data entry, reporting, follow-ups — and replace it with pipelines that run unattended and alert a human only when something needs a decision.",
    features: ["Workflow automation", "Data pipeline automation", "Scheduled task management", "Real-time notifications"],
  },
  {
    id: "agents",
    number: "02",
    title: "AI agents & assistants",
    shortTitle: "AI agents",
    summary: "Support and research agents grounded in your data.",
    description:
      "Support, qualification, and research agents grounded in your own documents and systems. Every conversation is logged, and low-confidence answers hand off to your team instead of guessing.",
    features: ["LLM integration", "Retrieval-augmented generation", "Voice & chat agents", "Human handoff"],
  },
  {
    id: "software",
    number: "03",
    title: "Custom software development",
    shortTitle: "Custom software",
    summary: "Internal tools and production platforms built around you.",
    description:
      "Production systems built around how your business actually operates. Python and FastAPI or Django on the backend, React on the front, deployed to your cloud with monitoring from day one.",
    features: ["Internal tools", "Platform engineering", "API development", "Cloud-native architecture"],
  },
  {
    id: "web",
    number: "04",
    title: "Web & mobile applications",
    shortTitle: "Web & mobile",
    summary: "Fast, measurable customer-facing products.",
    description:
      "Customer-facing apps and conversion-focused landing pages built for speed, search visibility, and clean analytics — so you can see which pages earn revenue.",
    features: ["Custom web applications", "Mobile apps", "E-commerce", "Analytics & tracking"],
  },
  {
    id: "data",
    number: "05",
    title: "Data & system integration",
    shortTitle: "Data & integrations",
    summary: "One place for your team's daily work and reporting.",
    description:
      "Dashboards, admin panels, and integrations that put your team's daily work in one place instead of five tabs and a shared spreadsheet.",
    features: ["Business intelligence", "CRM integration", "Legacy modernisation", "Real-time data sync"],
  },
];

export const ENGAGEMENTS = [
  {
    name: "Discovery sprint",
    price: "£4,000",
    cadence: "one week, fixed",
    description:
      "A focused week to map the workflow, size the opportunity, and leave you with a build plan you can act on — with or without us.",
    features: ["Stakeholder interviews", "Workflow and data map", "Prioritised opportunity list", "Fixed-price build proposal"],
    featured: false,
    cta: "Start with a sprint",
  },
  {
    name: "Build",
    price: "£12,000+",
    cadence: "4–12 weeks",
    description:
      "Design, build, and deploy the system. Weekly demos, a fixed scope, and a working product in your environment — not a slide deck.",
    features: ["Fixed scope and timeline", "Weekly working demos", "Production deployment", "30 days post-launch support"],
    featured: true,
    cta: "Scope a build",
  },
  {
    name: "Retainer",
    price: "£2,500/mo",
    cadence: "ongoing",
    description:
      "Keep the system improving after launch. Monitoring, fixes, new workflows, and a senior engineer who already knows your stack.",
    features: ["Monitoring & on-call", "Monthly improvements", "Workflow expansion", "Architecture reviews"],
    featured: false,
    cta: "Talk about support",
  },
] as const;

export const TECH = [
  "Python",
  "FastAPI",
  "Django",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "OpenAI",
  "LangChain",
  "AWS",
  "Docker",
  "Kubernetes",
  "Redis",
  "Airflow",
  "TensorFlow",
  "WebSocket",
] as const;

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  metric?: string;
  metricLabel: string;
  summary: string;
  description: string;
  tech: string[];
  results: string[];
  link?: string;
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "surgisync",
    title: "SurgiSync",
    category: "Healthcare",
    metric: "35%",
    metricLabel: "higher surgical list accuracy",
    summary:
      "A real-time collaboration platform for surgical teams, with live list sync and role-based access.",
    description:
      "We designed and built a real-time surgical collaboration platform — a custom AI-powered solution for healthcare teams. Using WebSocket and Redis for live data sync, we delivered a suggestion module that improved surgical list accuracy by 35% and team efficiency by 50%. Enterprise-grade security with OAuth 2.0, JWT authentication, and role-based access control reduced unauthorised access by 80%.",
    tech: ["WebSocket", "Redis", "OAuth 2.0", "JWT"],
    results: ["35% accuracy increase", "50% efficiency improvement", "80% security improvement"],
    link: "https://eg-app-46443-staging.botics.co/",
    featured: true,
  },
  {
    slug: "reveltv",
    title: "RevelTV",
    category: "Digital signage",
    metric: "3,000+",
    metricLabel: "clients served",
    summary:
      "A nationwide signage network with automated content operations and containerised deployments.",
    description:
      "For RevelTV, we delivered automation and platform engineering for a nationwide digital signage network. The system supports real-time content operations, distributed deployment workflows, and analytics visibility at scale, helping serve 3,000+ clients across automotive, corporate, and retail environments.",
    tech: ["Python", "Django", "PostgreSQL", "Vue.js", "AWS", "Docker", "Kubernetes"],
    results: ["3,000+ clients served", "Multi-industry solutions", "Nationwide presence"],
    link: "https://reveltv.com/",
  },
  {
    slug: "simpla-ai",
    title: "Simpla.AI",
    category: "Finance",
    metric: "24/7",
    metricLabel: "automated validation",
    summary:
      "A finance platform combining LLM guidance, document validation, and analytics dashboards.",
    description:
      "For this finance platform, we built AI automation that streamlines tax and accounting workflows. The platform combines LLM guidance, intelligent document validation, and analytics dashboards that help teams make faster, compliant financial decisions.",
    tech: ["Django REST Framework", "Python", "AWS"],
    results: ["AI-powered tax guidance", "Document validation", "Financial insights"],
    link: "https://www.simpla.ai/",
  },
  {
    slug: "a-plan",
    title: "A-Plan Coaching",
    category: "Coaching",
    metric: "60%",
    metricLabel: "faster client response",
    summary:
      "A ChatGPT-powered coaching system with automated email dispatch and calendar sync.",
    description:
      "We delivered ChatGPT integration for a coaching platform, combining AI strategy with custom full-stack execution. The solution included automated email dispatch with Celery, Google Calendar scheduling sync, and secure data migration from Firebase to PostgreSQL.",
    tech: ["Python", "FastAPI", "React.js", "jQuery"],
    results: ["AI-powered communication", "Automated scheduling", "Seamless data migration"],
    link: "https://beta.a-plancoaching.com/",
  },
  {
    slug: "adlytic",
    title: "Adlytic",
    category: "Retail analytics",
    metric: "Real-time",
    metricLabel: "in-store behaviour",
    summary:
      "A retail analytics platform that turns existing cameras into smart sensors.",
    description:
      "This retail analytics platform transformed existing cameras into smart sensors for business teams. We implemented machine learning pipelines for real-time traffic analysis, demographic insights, and area utilisation reporting.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    results: ["Real-time analytics", "Customer behaviour tracking", "Retail optimisation"],
    link: "https://www.adlytic.ai/",
  },
  {
    slug: "omno-ai",
    title: "OMNO AI",
    category: "AI solutions",
    summary:
      "Platform architecture and delivery across NLP, computer vision, and predictive systems.",
    metricLabel: "production AI across three disciplines",
    description:
      "OMNO AI required scalable LLM integration and advanced data workflows across NLP, computer vision, and predictive systems. We supported platform architecture and delivery, focused on practical, production-ready AI.",
    tech: ["Next.js", "Ruffle", "React", "Cloudflare"],
    results: ["NLP solutions", "Computer vision", "Custom AI tools"],
  },
  {
    slug: "churn-prediction",
    title: "Churn Prediction",
    category: "Machine learning",
    summary:
      "A repeatable ML pipeline with feature engineering, training automation, and Slack alerts.",
    metricLabel: "retention decisions, automated",
    description:
      "This churn prediction project combined feature engineering, model training automation, and orchestration with Apache Airflow. We built a repeatable ML pipeline with reporting and alerts that improved retention decision-making.",
    tech: ["Apache Airflow", "Pandas", "NumPy", "Wandb", "Slack"],
    results: ["Automated predictions", "Pipeline automation", "Slack notifications"],
  },
];

export const PRINCIPLES = [
  {
    title: "Senior people only",
    description:
      "No juniors handed a spec. The people who scope your project are the people who build it.",
  },
  {
    title: "Something real every week",
    description:
      "Weekly working demos against your data. If a week goes by without something you can click, we are doing it wrong.",
  },
  {
    title: "Boring where it counts",
    description:
      "Proven infrastructure, clear logs, and a rollback path. The interesting part should be the problem, not the stack.",
  },
  {
    title: "Handover is part of the build",
    description:
      "Documentation, monitoring, and a clean handover. You should be able to run it without us — and choose to keep us anyway.",
  },
] as const;

export const TEAM = [
  {
    name: "Faraz",
    initials: "F",
    role: "Founder & Lead Engineer",
    description:
      "Leads architecture and delivery across AI integration engagements, including LLM systems and cloud-native platforms.",
  },
  {
    name: "Aisha",
    initials: "A",
    role: "Senior AI Engineer",
    description:
      "Builds LLM integrations, retrieval pipelines, and custom AI solutions for workflows in regulated industries.",
  },
  {
    name: "Daniel",
    initials: "D",
    role: "Senior Full-Stack Engineer",
    description:
      "Owns frontend and backend implementation with React and Python FastAPI for high-performance products.",
  },
  {
    name: "Mariam",
    initials: "M",
    role: "Automation & Data Engineer",
    description:
      "Designs process automation and analytics pipelines with Airflow, Celery, and real-time integrations.",
  },
] as const;

export const TIMELINE = [
  { year: "2020", event: "Founded in Grays, England" },
  { year: "2021", event: "First AI integration project shipped" },
  { year: "2022", event: "Expanded into healthcare and finance" },
  { year: "2023", event: "3,000+ end users reached through RevelTV" },
  { year: "2024", event: "Serving clients across the UK, US, and Middle East" },
] as const;

export const ABOUT_STATS = [
  { value: "40+", label: "systems shipped" },
  { value: "12", label: "industries served" },
  { value: "3", label: "continents served" },
] as const;

export const CONTACT_FAQS = [
  {
    q: "How quickly can we start a project?",
    a: "Most projects can start within 1–2 weeks after discovery and scope alignment.",
  },
  {
    q: "Do you work with UK-only businesses?",
    a: "No. We are based in England and serve clients globally across time zones.",
  },
  {
    q: "Can you work with our existing engineering team?",
    a: "Yes. We often collaborate with internal teams for architecture, delivery, and handover.",
  },
  {
    q: "What project sizes do you typically support?",
    a: "From focused integrations and MVPs to full-scale platforms and multi-phase delivery.",
  },
] as const;

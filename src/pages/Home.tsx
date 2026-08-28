import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  Code2,
  LayoutDashboard,
  Smartphone,
  Workflow,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Workflow,
    title: "AI Automation for Operations",
    description:
      "We map the repetitive work inside your team - approvals, data entry, reporting, follow-ups - and replace it with pipelines that run unattended and alert a human only when something needs a decision.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Voice Agents",
    description:
      "Support, qualification, and booking agents grounded in your own documents and systems. Every conversation is logged, and low-confidence answers hand off to your team instead of guessing.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Production systems built around how your business actually operates. Python and FastAPI or Django on the backend, React on the front, deployed to your cloud with monitoring from day one.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Customer-facing apps and conversion-focused landing pages built for speed, search visibility, and clean analytics - so you can see which pages earn revenue.",
  },
  {
    icon: LayoutDashboard,
    title: "CRM & Internal Tools",
    description:
      "Dashboards, admin panels, and CRM integrations that put your team's daily work in one place instead of five tabs and a shared spreadsheet.",
  },
];

type CaseStudy = {
  title: string;
  category: string;
  /** Only set where we have a client-reported figure we can stand behind. */
  metric?: string;
  metricLabel: string;
  summary: string;
  tech: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "SurgiSync",
    category: "Healthcare",
    metric: "35%",
    metricLabel: "higher surgical list accuracy",
    summary:
      "Real-time collaboration platform for surgical teams. Live list sync over WebSocket and Redis lifted team efficiency by 50%, and role-based access with OAuth 2.0 cut unauthorised access by 80%.",
    tech: "WebSocket, Redis, OAuth 2.0",
    image: "/case-studies/surgisync.svg",
  },
  {
    title: "RevelTV",
    category: "Digital signage",
    metric: "3,000+",
    metricLabel: "clients served on the platform",
    summary:
      "Nationwide signage network with automated content operations and containerised deployments across automotive, corporate, and retail sites.",
    tech: "Django, Vue.js, Docker, Kubernetes",
    image: "/case-studies/reveltv.svg",
  },
  {
    title: "Simpla.AI",
    category: "Finance",
    metricLabel:
      "Manual tax document review replaced by automated AI validation and guidance.",
    summary:
      "Tax and accounting platform combining LLM-driven guidance, document validation, and analytics dashboards so finance teams reach compliant decisions faster.",
    tech: "Django REST Framework, Python, AWS",
    image: "/case-studies/simpla.svg",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "One session to map your workflows and find where the manual hours actually go. You leave with a shortlist of what is worth automating first.",
  },
  {
    title: "Architecture",
    description:
      "A scoped build plan with a fixed stack, timeline, and cost. No over-engineering, no surprises. You approve it before we write code.",
  },
  {
    title: "Build & Iterate",
    description:
      "Weekly sprints with working demos. You see the system running against your real data long before launch day.",
  },
  {
    title: "Deploy & Support",
    description:
      "We deploy to your cloud, wire up monitoring, and stay on after launch to tune it as usage grows.",
  },
];

const technologies = [
  "Python",
  "FastAPI",
  "Django",
  "React",
  "Next.js",
  "Node.js",
  "OpenAI",
  "LangChain",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
];

const testimonials = [
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
    name: "Dr. James Chen",
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
];

const faqs = [
  {
    question: "What types of AI solutions do you build?",
    answer:
      "We specialize in LLM integrations (ChatGPT, GPT-4), natural language processing, computer vision, chatbot development, and machine learning models like churn prediction. We focus on practical AI that solves real business problems - not AI for AI's sake.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects range from 4-12 weeks depending on complexity. A chatbot or API integration might take 4-6 weeks, while a full-stack platform with AI features typically takes 8-12 weeks. We provide detailed timelines after our discovery phase.",
  },
  {
    question: "Do you work with businesses outside the UK?",
    answer:
      "Yes - we serve clients across the UK, US, and Middle East. Our team has timezone flexibility to overlap with US Eastern and Gulf time zones for smooth collaboration.",
  },
  {
    question: "What is your tech stack?",
    answer:
      "We primarily work with Python (FastAPI, Django), React/Next.js, Node.js, PostgreSQL, MongoDB, AWS, Docker, and Kubernetes. For AI, we use OpenAI APIs, LangChain, TensorFlow, and custom ML pipelines with tools like Apache Airflow.",
  },
  {
    question: "How much does an AI integration project cost?",
    answer:
      "Project costs vary based on scope and complexity. A focused AI integration might start from GBP 5,000, while a full-stack platform with multiple AI features could range from GBP 15,000-50,000+. We provide detailed quotes after a free consultation.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes - every project includes post-launch support. We offer maintenance packages for ongoing monitoring, updates, and optimization.",
  },
];

export default function Home() {
  useSEO({
    title: "AI Automation & Custom Software Development | TimeSquare LLC",
    description:
      "We build AI automation, chatbots, and custom software that cut manual work out of business operations. UK-based, serving teams in healthcare, finance and retail.",
    canonical: "https://timesquarellc.com",
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const initials = useMemo(
    () => testimonials.map((item) => item.name.split(" ").map((p) => p[0]).join("")),
    [],
  );

  return (
    <div className="relative">
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/hero-poster.svg"
            className="w-full h-full object-cover opacity-25"
          >
            <source src="/videos/hero-bg-compressed.mp4" type="video/mp4" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />
          <div
            className="absolute inset-x-0 top-0 h-[70vh]"
            style={{ background: "var(--gradient-glow)" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 backdrop-blur-sm px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-brand-cyan animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              AI automation &amp; software studio - UK based, working globally
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            We build AI systems that{" "}
            <span className="gradient-text">take the manual work off your team</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Automation, chatbots, and custom software for growing operations teams.
            Scoped in a week, in production in 4 to 12 weeks, supported after launch.
          </p>

          <div className="flex flex-col items-center gap-5">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center gap-2 group text-base"
            >
              Book a free consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Or see what we have shipped
            </Link>
          </div>

          <p className="mt-12 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            Healthcare &middot; Finance &middot; Retail &middot; Digital signage &middot; Coaching
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section className="relative py-24 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What we <span className="gradient-text">build</span>
              </h2>
              <p className="text-muted-foreground">
                Five things, done properly. If your problem is not on this list, we will tell
                you and point you somewhere useful.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group glass-card p-7 hover:border-primary/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              ))}
              <article className="glass-card gradient-border p-7 flex flex-col justify-center">
                <h3 className="font-display text-lg font-semibold mb-3">
                  Not sure which one you need?
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Most teams start with one automation, prove the time saved, then expand.
                  We will help you pick the first one.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Talk it through
                  <ArrowRight size={16} />
                </Link>
              </article>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Work that <span className="gradient-text">moved a number</span>
                </h2>
                <p className="text-muted-foreground">
                  Every figure below was reported by the client after launch.
                </p>
              </div>
              <Link to="/case-studies" className="hidden md:inline-flex text-primary hover:underline">
                View all projects
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study) => (
                <Link
                  to="/case-studies"
                  key={study.title}
                  className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col"
                >
                  <img
                    src={study.image}
                    alt={`${study.title} case study`}
                    className="h-36 w-full object-cover"
                    loading="lazy"
                    width={640}
                    height={288}
                  />
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-xs uppercase tracking-wider text-accent mb-4">
                      {study.category}
                    </p>

                    {study.metric ? (
                      <div className="mb-5">
                        <div className="font-display text-4xl lg:text-5xl font-bold gradient-text leading-none mb-2">
                          {study.metric}
                        </div>
                        <p className="text-sm text-foreground/90">{study.metricLabel}</p>
                      </div>
                    ) : (
                      <p className="text-sm text-foreground/90 mb-5">{study.metricLabel}</p>
                    )}

                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 flex-1">{study.summary}</p>
                    <p className="text-xs text-muted-foreground/80">{study.tech}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 md:hidden">
              <Link to="/case-studies" className="inline-flex text-primary hover:underline">
                View all projects
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
              What clients <span className="gradient-text">say</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <article key={item.name} className="glass-card p-7">
                  {/* TODO: Replace with real, permissioned client testimonials before launch. */}
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-sm font-semibold text-foreground">
                      {initials[index]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                How we <span className="gradient-text">work</span>
              </h2>
              <p className="text-muted-foreground">
                Four steps from first call to a system your team uses every day.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="glass-card p-7">
                  <p className="font-display text-2xl font-bold text-primary/60 mb-4">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-14 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-6">
              Built with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full border border-border/60 bg-secondary/25 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={faq.question} className="glass-card overflow-hidden">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                      onClick={() => setOpenFaqIndex((prev) => (prev === index ? null : index))}
                    >
                      <span className="font-semibold">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24 border-t border-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card gradient-border p-12 md:p-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Tell us where the <span className="gradient-text">manual work</span> is
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                A free 30-minute call. We will tell you what is worth automating first,
                what it takes to build, and roughly what it costs.
              </p>
              <Link
                to="/contact"
                className="btn-gradient inline-flex items-center gap-2 group text-base"
              >
                Book a free consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-muted-foreground mt-6">
                Or email{" "}
                <a href="mailto:hello@timesquarellc.com" className="text-primary hover:underline">
                  hello@timesquarellc.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

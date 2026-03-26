import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code, BarChart3, Workflow, ChevronDown } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/ui/AnimatedSection";

const technologies = [
  "Python",
  "React",
  "Next.js",
  "FastAPI",
  "Django",
  "Node.js",
  "AWS",
  "Docker",
  "Kubernetes",
  "OpenAI",
  "LangChain",
  "TensorFlow",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "WebSocket",
];

const services = [
  {
    icon: Brain,
    title: "AI & ML Integration",
    description:
      "From ChatGPT-powered coaching platforms to intelligent document processing - we integrate large language models where they create the most business value.",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "High-performance applications built with React, Next.js, FastAPI, and Django. Scalable cloud-native architecture from day one.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Performance-first digital marketing campaigns including SEO, paid ads, conversion optimization, and analytics reporting.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automated email dispatch, scheduled data pipelines, real-time sync with Celery and Airflow - we eliminate the repetitive work slowing your team down.",
  },
];

const featuredStudies = [
  {
    title: "SurgiSync",
    category: "Healthcare Tech",
    result: "35% accuracy increase, 50% efficiency improvement",
    tech: "WebSocket, Redis, OAuth 2.0",
    image: "/case-studies/surgisync.svg",
  },
  {
    title: "Simpla.AI",
    category: "AI Tax Platform",
    result: "AI-powered tax guidance and document validation",
    tech: "Django, Python, AWS",
    image: "/case-studies/simpla.svg",
  },
  {
    title: "RevelTV",
    category: "Digital Signage",
    result: "3,000+ clients served nationwide",
    tech: "Python, Django, Vue.js, Docker, Kubernetes",
    image: "/case-studies/reveltv.svg",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We analyze your workflows, data, and goals to identify the highest-impact AI and automation opportunities.",
  },
  {
    title: "Architecture",
    description:
      "We design a solution with the right tech stack - no over-engineering, no shortcuts. You approve before we build.",
  },
  {
    title: "Build & Iterate",
    description:
      "Agile sprints with weekly demos. You see real progress every week, not just at launch.",
  },
  {
    title: "Deploy & Support",
    description:
      "We handle deployment, monitoring, and optimization. Post-launch support included.",
  },
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

function formatStat(value: number, suffix = "") {
  if (value >= 1000) {
    return `${value.toLocaleString()}${suffix}`;
  }
  return `${value}${suffix}`;
}

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    let start: number | null = null;
    let frameId = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.round(progress * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, inView]);

  return count;
}

function StatCard({
  target,
  suffix,
  label,
  inView,
}: {
  target: number;
  suffix?: string;
  label: string;
  inView: boolean;
}) {
  const value = useCountUp(target, inView);
  return (
    <div className="text-center glass-card p-6">
      <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
        {formatStat(value, suffix)}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function Home() {
  useSEO({
    title: "TimeSquare LLC | AI Integration & Automation Agency | UK",
    description:
      "We build AI-powered automation, ChatGPT integration services, and data analytics solutions for businesses. Based in UK, serving clients globally.",
    canonical: "https://timesquarellc.com",
  });

  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.25, triggerOnce: true });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const initials = useMemo(() => testimonials.map((item) => item.name.split(" ").map((p) => p[0]).join("")), []);

  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/hero-poster.svg"
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/videos/hero-bg-compressed.mp4" type="video/mp4" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              AI & Automation Agency - Based in UK, Serving Globally
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            AI Solutions That Deliver <span className="gradient-text">Real Business Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            We build intelligent automation systems, AI integrations, and data platforms that help
            businesses in healthcare, finance, and retail operate smarter and grow faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gradient flex items-center gap-2 group">
              Book a Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/case-studies" className="btn-outline-gradient">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="relative py-14 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-2xl md:text-3xl font-semibold mb-8">
            Technologies We Work With
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-sm text-muted-foreground grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section ref={statsRef} className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard target={7} suffix="+" label="Projects Shipped" inView={statsInView} />
            <StatCard target={35} suffix="%" label="Avg. Efficiency Gain" inView={statsInView} />
            <StatCard target={3000} suffix="+" label="End Users Impacted" inView={statsInView} />
            <StatCard target={5} label="Industries Served" inView={statsInView} />
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Services Built for <span className="gradient-text">Measurable Growth</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <article key={service.title} className="group glass-card p-6 hover:border-primary/50 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="gradient-text">Case Studies</span>
            </h2>
            <Link to="/case-studies" className="hidden md:inline-flex text-primary hover:underline">
              View All Projects -
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredStudies.map((study) => (
              <Link to="/case-studies" key={study.title} className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500">
                <img
                  src={study.image}
                  alt={`${study.title} case study`}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-primary mb-2">{study.category}</p>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{study.result}</p>
                  <p className="text-xs text-muted-foreground">Tech: {study.tech}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link to="/case-studies" className="inline-flex text-primary hover:underline">
              View All Projects -
            </Link>
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
            How We <span className="gradient-text">Work</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <article key={step.title} className="glass-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  Step {index + 1}
                </p>
                <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <article key={item.name} className="glass-card p-6">
                {/* TODO: Replace with real client testimonials */}
                <p className="text-sm text-muted-foreground mb-6">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-sm font-semibold text-foreground">
                    {initials[index]}
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
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
        <section className="relative py-24 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="glass-card overflow-hidden">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between text-left px-5 py-4"
                    onClick={() => setOpenFaqIndex((prev) => (prev === index ? null : index))}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 md:p-16 gradient-border">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something That <span className="gradient-text">Matters?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute consultation. We&apos;ll discuss your goals, explore AI opportunities,
              and outline a clear path forward - no pressure, no jargon.
            </p>
            <Link to="/contact" className="btn-gradient inline-flex items-center gap-2 group">
              Book Your Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-muted-foreground mt-5">
              Or email us at{" "}
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

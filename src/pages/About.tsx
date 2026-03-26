import { Target, Eye, Users, Award, Lightbulb, Rocket } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the forefront of AI and automation technology to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work closely with our clients to understand their unique challenges and goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in every project we undertake.",
  },
  {
    icon: Rocket,
    title: "Results Driven",
    description: "Our focus is always on delivering measurable outcomes that drive business growth.",
  },
];

const whyChooseUs = [
  {
    title: "Practitioners, Not Consultants",
    description:
      "We write the code ourselves. Every project gets senior engineers who have shipped AI systems to production.",
  },
  {
    title: "Senior Engineers Only",
    description:
      "No juniors handed a spec. Your project lead has 5+ years of AI and full-stack delivery experience.",
  },
  {
    title: "Proven AI Delivery",
    description:
      "7+ shipped projects processing real data for real businesses across healthcare, finance, and retail.",
  },
  {
    title: "UK Team, Global Reach",
    description:
      "Based in England with timezone overlap for US and Middle East clients. Always available when you need us.",
  },
];

const team = [
  {
    name: "Faraz",
    role: "Founder & Lead Engineer",
    description:
      "Leads architecture and delivery across AI integration agency engagements, including ChatGPT integration services and cloud-native systems.",
  },
  {
    name: "Aisha",
    role: "Senior AI Engineer",
    description:
      "Builds LLM integration services, retrieval pipelines, and custom AI solutions for business workflows in regulated industries.",
  },
  {
    name: "Daniel",
    role: "Senior Full-Stack Engineer",
    description:
      "Owns frontend/backend implementation with React development services and Python FastAPI development for high-performance products.",
  },
  {
    name: "Mariam",
    role: "Automation & Data Engineer",
    description:
      "Designs business process automation and data analytics consulting pipelines with Airflow, Celery, and real-time integrations.",
  },
];

export default function About() {
  useSEO({
    title: "About TimeSquare LLC | AI Automation Experts | Our Team & Mission",
    description:
      "Meet the team behind TimeSquare LLC. We combine deep AI and full-stack development expertise with strategic vision to deliver AI automation solutions that drive real results.",
    canonical: "https://timesquarellc.com/about",
  });

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm px-4 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                About Us
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Building the Future
              <br />
              <span className="gradient-text">Through AI Innovation</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Timesquare LLC is a forward-thinking AI and automation agency dedicated to helping 
              businesses harness the power of intelligent technology. We combine deep technical 
              expertise with strategic vision to deliver solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="glass-card p-8 md:p-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses with intelligent automation and AI solutions that enhance 
                efficiency, drive innovation, and create sustainable competitive advantages. 
                We believe every organization deserves access to transformative technology.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card p-8 md:p-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-brand-cyan/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading partner for businesses seeking to integrate AI and automation 
                into their operations. We envision a future where intelligent systems work 
                seamlessly alongside humans to achieve extraordinary outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Our Values
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What <span className="gradient-text">Drives Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every project we deliver.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group glass-card p-6 hover:border-primary/50 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for <span className="gradient-text">Real Delivery</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are an AI integration agency focused on outcomes, not slide decks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 group hover:border-primary/50 transition-all duration-500"
              >
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Our Team
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Senior <span className="gradient-text">Engineers</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We are a tight-knit team of senior engineers, data scientists, and automation specialists.
              Every team member has at least 5 years of industry experience.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-xl font-semibold">
                F
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold mb-1">Faraz</h3>
                <p className="text-primary text-sm mb-3">Founder & Lead Engineer</p>
                <p className="text-muted-foreground">
                  Leads solution architecture, AI consulting UK engagements, and enterprise-grade delivery
                  across custom AI solutions for business, automation, and platform engineering.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.slice(1).map((member) => (
              <div key={member.name} className="glass-card p-6 group hover:border-primary/50 transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-primary/80" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-xs uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="relative py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Company <span className="gradient-text">Timeline</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { year: "2020", event: "Founded in Grays, England" },
              { year: "2021", event: "First AI integration project shipped" },
              { year: "2022", event: "Expanded into healthcare and finance sectors" },
              { year: "2023", event: "3,000+ end users impacted through RevelTV" },
              { year: "2024", event: "Serving clients across UK, US, and Middle East" },
            ].map((item) => (
              <article key={item.year} className="glass-card p-5">
                <p className="text-primary text-sm font-semibold mb-2">{item.year}</p>
                <p className="text-sm text-muted-foreground">{item.event}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

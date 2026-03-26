import { Brain, Zap, Code, BarChart3, Bot, Shield, Cloud, Cog, Megaphone, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const services = [
  {
    icon: Brain,
    title: "AI & ML Integration",
    description: "Seamlessly integrate artificial intelligence into your existing systems and workflows.",
    features: [
      "ChatGPT & LLM Integration",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build scalable, high-performance web applications with modern technologies.",
    features: [
      "Custom Web Applications",
      "API Development",
      "E-commerce Solutions",
      "Cloud-Native Architecture",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Drive qualified traffic and growth with performance-focused digital marketing campaigns.",
    features: [
      "Marketing Campaign Strategy",
      "Paid Ads Management (Google & Social)",
      "SEO Content & On-page Optimization",
      "Conversion Tracking & Reporting",
    ],
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that reduces costs and errors.",
    features: [
      "Workflow Automation",
      "Data Pipeline Automation",
      "Scheduled Task Management",
      "Real-time Notifications",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive strategic decisions.",
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Churn Prediction",
      "Customer Analytics",
    ],
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    description: "Create intelligent conversational interfaces that enhance customer engagement.",
    features: [
      "AI-Powered Chatbots",
      "Customer Support Bots",
      "Lead Generation Bots",
      "Multi-platform Integration",
    ],
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Protect your business with advanced cybersecurity and compliance solutions.",
    features: [
      "Phishing Detection",
      "Security Awareness",
      "Incident Response",
      "Compliance Management",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leverage cloud infrastructure for scalability, reliability, and performance.",
    features: [
      "AWS & Cloud Migration",
      "Serverless Architecture",
      "Container Orchestration",
      "DevOps Implementation",
    ],
  },
  {
    icon: Cog,
    title: "System Integration",
    description: "Connect disparate systems for seamless data flow and operational efficiency.",
    features: [
      "API Integration",
      "Legacy System Modernization",
      "Real-time Data Sync",
      "Third-party Integrations",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Drive qualified traffic and growth with performance-focused digital marketing campaigns.",
    features: [
      "Marketing Campaign Strategy",
      "Paid Ads Management (Google & Social)",
      "SEO Content & On-page Optimization",
      "Conversion Tracking & Reporting",
    ],
  },
];

const techStack = [
  "Python", "FastAPI", "Django", "React", "Next.js", "Node.js",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "LangChain",
  "OpenAI", "TensorFlow", "Redis", "WebSocket"
];

export default function Services() {
  useSEO({
    title: "AI Integration & Automation Services | ChatGPT, Web Dev, Analytics | TimeSquare LLC",
    description:
      "Comprehensive AI integration agency services: business process automation, LLM integration services, full-stack web development, and data analytics consulting with Python FastAPI development and React.",
    canonical: "https://timesquarellc.com/services",
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
                Our Services
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Comprehensive
              <br />
              <span className="gradient-text">AI & Automation Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              From AI integration to full-stack development, we offer end-to-end solutions 
              that transform how businesses operate and compete in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group glass-card p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Technology
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable solutions.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-5 py-3 rounded-full border border-border bg-secondary/30 text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 md:p-16 gradient-border">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform Your Business?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project requirements and explore how our services 
              can help you achieve your goals.
            </p>
            <a href="/contact" className="btn-gradient inline-flex items-center gap-2 group">
              Start a Conversation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

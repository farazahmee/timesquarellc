import { ExternalLink, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const caseStudies = [
  {
    title: "A-Plan Coaching System",
    category: "AI Integration",
    description:
      "We delivered ChatGPT integration services for a coaching platform, combining AI consulting UK strategy with custom full-stack execution. The solution included automated email dispatch with Celery, Google Calendar scheduling sync, and secure data migration from Firebase to PostgreSQL for reliable business process automation.",
    techStack: ["Python", "FastAPI", "React.js", "jQuery"],
    link: "https://beta.a-plancoaching.com/",
    results: ["AI-powered communication", "Automated scheduling", "Seamless data migration"],
  },
  {
    title: "Simpla.AI",
    category: "AI Platform",
    description:
      "For this finance platform, our AI integration agency team built AI automation solutions that streamline tax and accounting workflows. The platform combines LLM integration services for guidance, intelligent document validation, and analytics dashboards that help teams make faster, compliant financial decisions.",
    techStack: ["Django REST Framework", "Python", "AWS"],
    link: "https://www.simpla.ai/",
    results: ["AI-powered tax guidance", "Document validation", "Financial insights"],
  },
  {
    title: "SurgiSync",
    category: "Healthcare Tech",
    description:
      "We designed and built a real-time surgical collaboration platform - a custom AI-powered solution for healthcare teams. Using WebSocket and Redis for live data sync, our full-stack web development agency delivered a suggestion module that improved surgical list accuracy by 35% and team efficiency by 50%. Enterprise-grade security with OAuth 2.0, JWT authentication, and role-based access control reduced unauthorized access by 80%.",
    techStack: ["Stripe Connect", "PubNub", "OneSignal"],
    link: "https://eg-app-46443-staging.botics.co/",
    results: ["35% accuracy increase", "50% efficiency improvement", "80% security improvement"],
  },
  {
    title: "Adlytic",
    category: "AI Analytics",
    description:
      "This retail analytics platform transformed existing cameras into smart sensors with custom AI solutions for business teams. We implemented machine learning development pipelines for real-time traffic analysis, demographic insights, and area utilization reporting to support data analytics consulting and store performance optimization.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://www.adlytic.ai/",
    results: ["Real-time analytics", "Customer behavior tracking", "Retail optimization"],
  },
  {
    title: "OMNO AI",
    category: "AI Solutions",
    description:
      "OMNO AI required scalable LLM integration services and advanced data workflows across NLP, computer vision, and predictive systems. We supported platform architecture and delivery as an AI integration agency focused on practical, production-ready AI automation solutions for startups and enterprise teams.",
    techStack: ["Next.js", "Ruffle", "React", "Cloudflare"],
    link: "#",
    results: ["NLP solutions", "Computer vision", "Custom AI tools"],
  },
  {
    title: "Churn Prediction System",
    category: "Machine Learning",
    description:
      "This churn prediction machine learning project combined feature engineering, model training automation, and orchestration with Apache Airflow. As part of our data analytics consulting and Python FastAPI development stack, we built a repeatable ML pipeline with reporting and alerts that improved retention decision-making.",
    techStack: ["Apache Airflow", "Pandas", "NumPy", "Wandb", "Slack"],
    link: "#",
    results: ["Automated predictions", "Pipeline automation", "Slack notifications"],
  },
  {
    title: "RevelTV",
    category: "Digital Signage",
    description:
      "For RevelTV, we delivered AI automation solutions and platform engineering for a nationwide digital signage network. The system supports real-time content operations, distributed deployment workflows, and analytics visibility at scale, helping serve 3,000+ clients across automotive, corporate, and retail environments.",
    techStack: ["Python", "Django", "PostgreSQL", "Vue.js", "AWS", "Docker", "Kubernetes"],
    link: "https://reveltv.com/",
    results: ["3,000+ clients served", "Multi-industry solutions", "Nationwide presence"],
  },
];

export default function CaseStudies() {
  useSEO({
    title: "AI Case Studies & Portfolio | Healthcare, Finance, Retail Projects | TimeSquare LLC",
    description:
      "Explore our portfolio of AI automation solutions across healthcare, finance, and retail, including SurgiSync, Simpla.AI, and RevelTV projects.",
    canonical: "https://timesquarellc.com/case-studies",
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
                Case Studies
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Projects That
              <br />
              <span className="gradient-text">Drive Results</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our portfolio of successful AI and automation projects that have 
              transformed businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 md:p-8 mb-8">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Results at a Glance
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="rounded-lg border border-border/50 bg-secondary/30 px-4 py-3">
                7 Projects Delivered
              </div>
              <div className="rounded-lg border border-border/50 bg-secondary/30 px-4 py-3">
                5 Industries: Healthcare, Finance, Retail, Digital Signage, Coaching
              </div>
              <div className="rounded-lg border border-border/50 bg-secondary/30 px-4 py-3">
                35-80% Efficiency Improvements
              </div>
              <div className="rounded-lg border border-border/50 bg-secondary/30 px-4 py-3">
                AI, Automation & Full-Stack Solutions
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Header */}
                <div className="p-6 pb-4 border-b border-border/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                        {study.category}
                      </span>
                      <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                    </div>
                    {study.link !== "#" && (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-4">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs bg-secondary/50 text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 md:p-16 gradient-border">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Want Similar <span className="gradient-text">Results?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can apply our expertise to your unique challenges 
              and help you achieve transformative outcomes.
            </p>
            <a href="/contact" className="btn-gradient inline-flex items-center gap-2 group">
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

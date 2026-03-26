import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowRight, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 animate-grid-move" />
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Contact Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contact Us
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Build <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI and automation? Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold gradient-text">TimeSquareLLC</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Transforming businesses through intelligent AI solutions and cutting-edge automation technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/timesquarellc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Case Studies", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {["AI Integration", "Process Automation", "Web Development", "Data Analytics"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get occasional updates on AI, automation, and new case studies.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                window.location.href = "mailto:hello@timesquarellc.com?subject=Newsletter%20Signup";
              }}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="h-10 flex-1 rounded-lg border border-border bg-background px-3 text-sm"
              />
              <button type="submit" className="btn-gradient px-4 py-2 text-sm">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@timesquarellc.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail size={18} className="mt-0.5 text-primary" />
                  <span className="text-sm">hello@timesquarellc.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={18} className="mt-0.5 text-primary" />
                  <span className="text-sm">
                    Chafford Hundred<br />
                    Grays, England
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Timesquare LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

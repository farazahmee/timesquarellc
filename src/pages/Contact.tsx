import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Mail, MapPin, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";
import { useSEO } from "@/hooks/useSEO";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  budget: string;
  project_type: string;
  message: string;
};

const BOOK_CALL_URL = "https://calendar.app.google/meegViXuibrs6Egq7";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  company: "",
  budget: "",
  project_type: "",
  message: "",
};

export default function Contact() {
  useSEO({
    title: "Contact TimeSquare LLC | Book a Free AI Consultation",
    description:
      "Contact TimeSquare LLC for AI integration, business process automation, and full-stack web development. Book a free consultation or send an inquiry.",
    canonical: "https://timesquarellc.com/contact",
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

  const CONTACT_TO_EMAIL = import.meta.env.VITE_CONTACT_TO_EMAIL ?? "faraz.root@gmail.com";

  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof ContactFormData) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const emailHref = useMemo(() => "mailto:hello@timesquarellc.com", []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: "Email not configured",
        description:
          "Please configure EmailJS environment variables (VITE_EMAILJS_*).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          budget: formData.budget,
          project_type: formData.project_type,
          message: formData.message,
          // Some templates may use this variable; safe to pass even if unused.
          to_email: CONTACT_TO_EMAIL,
        },
        PUBLIC_KEY,
      );

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. We will get back to you shortly.",
      });
      setFormData(initialForm);
    } catch (_error) {
      toast({
        title: "Submission failed",
        description:
          "Please check EmailJS configuration and try again, or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative py-24 lg:py-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold mb-6">
              Project Inquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <input
                required
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Full name"
                className="h-11 rounded-lg border border-border bg-background px-4 text-sm"
              />
              <input
                required
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="Email address"
                className="h-11 rounded-lg border border-border bg-background px-4 text-sm"
              />
              <input
                value={formData.company}
                onChange={handleChange("company")}
                placeholder="Company"
                className="h-11 rounded-lg border border-border bg-background px-4 text-sm"
              />
              <select
                value={formData.budget}
                onChange={handleChange("budget")}
                className="h-11 rounded-lg border border-border bg-background px-4 text-sm"
              >
                <option value="">Budget range</option>
                <option value="under-5k">Under GBP 5k</option>
                <option value="5k-20k">GBP 5k - 20k</option>
                <option value="20k-50k">GBP 20k - 50k</option>
                <option value="50k-plus">GBP 50k+</option>
              </select>
              <select
                value={formData.project_type}
                onChange={handleChange("project_type")}
                className="h-11 rounded-lg border border-border bg-background px-4 text-sm md:col-span-2"
              >
                <option value="">Project type</option>
                <option value="ai-integration">AI / LLM Integration</option>
                <option value="automation">Business Process Automation</option>
                <option value="web-development">Web Platform Development</option>
                <option value="data-analytics">Data Analytics / ML</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
              <textarea
                required
                value={formData.message}
                onChange={handleChange("message")}
                rows={6}
                placeholder="Tell us about your current challenge and desired outcome..."
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm md:col-span-2"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient md:col-span-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="mt-5 flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <img src="/robot-assistant.svg" alt="" className="h-6 w-6" loading="lazy" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">
                  Prefer email?{" "}
                  <a href={emailHref} className="text-primary hover:underline">
                    hello@timesquarellc.com
                  </a>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  We send inquiries to{" "}
                  <span className="text-primary font-semibold">{CONTACT_TO_EMAIL}</span>.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Direct Contact</h3>
              <div className="space-y-3 text-sm">
                <a
                  href={emailHref}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Mail size={16} /> hello@timesquarellc.com
                </a>
                <p className="flex items-start gap-2 text-muted-foreground">
                  <MapPin size={16} className="mt-0.5" />
                  Chafford Hundred, Grays, England
                </p>
                <a
                  href="https://www.linkedin.com/company/timesquarellc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-semibold mb-3">Book a Call</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a consultation and we will walk through scope, timeline, and next steps.
              </p>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gradient inline-flex items-center gap-2 w-full justify-center"
              >
                <Calendar size={16} />
                Open Calendar
              </a>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-semibold mb-3">Legal</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="hover:text-primary">
                  Terms of Service
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="glass-card p-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "How quickly can we start a project?",
                  a: "Most projects can start within 1-2 weeks after discovery and scope alignment.",
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
              ].map((item) => (
                <article key={item.q} className="space-y-2">
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}


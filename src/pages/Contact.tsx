import { ChangeEvent, FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";
import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import FaqAccordion from "@/components/site/FaqAccordion";
import { CONTACT_FAQS, SITE } from "@/content/site";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  budget: string;
  project_type: string;
  message: string;
};

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
  const CONTACT_TO_EMAIL =
    import.meta.env.VITE_CONTACT_TO_EMAIL ?? "faraz.root@gmail.com";

  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof ContactFormData) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

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
        description:
          "Thanks for reaching out. We will get back to you shortly.",
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
    <div className="relative">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us where the{" "}
            <span className="text-white/38">work piles up.</span>
          </>
        }
        lead="A free 30-minute call. We will tell you what is worth automating first, what it takes to build, and roughly what it costs."
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.22fr_0.78fr] lg:items-start">
            {/* Form */}
            <Reveal>
              <div className="glass p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="display-3">Project inquiry</h2>
                    <p className="body-copy mt-2">
                      A few details are enough to start. We reply within one
                      working day.
                    </p>
                  </div>
                  <span className="hidden shrink-0 rounded-[5px] border border-white/10 bg-white/[0.025] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/32 sm:block">
                    No obligation
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="meta-label mb-2 block">
                      Full name <span className="text-ice/50">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange("name")}
                      placeholder="Your name"
                      className="field"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="meta-label mb-2 block">
                      Email <span className="text-ice/50">*</span>
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      placeholder="you@company.com"
                      className="field"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="meta-label mb-2 block">
                      Company
                    </label>
                    <input
                      id="company"
                      value={formData.company}
                      onChange={handleChange("company")}
                      placeholder="Company name"
                      className="field"
                      autoComplete="organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="meta-label mb-2 block">
                      Budget range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange("budget")}
                      className="field"
                    >
                      <option value="">Select a range</option>
                      <option value="under-5k">Under £5k</option>
                      <option value="5k-20k">£5k – £20k</option>
                      <option value="20k-50k">£20k – £50k</option>
                      <option value="50k-plus">£50k+</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="project_type" className="meta-label mb-2 block">
                      Project type
                    </label>
                    <select
                      id="project_type"
                      value={formData.project_type}
                      onChange={handleChange("project_type")}
                      className="field"
                    >
                      <option value="">What are you looking to build?</option>
                      <option value="ai-integration">AI / LLM integration</option>
                      <option value="automation">Business process automation</option>
                      <option value="agents">AI agent or assistant</option>
                      <option value="web-development">Web platform development</option>
                      <option value="data-analytics">Data analytics / ML</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="meta-label mb-2 block">
                      What is the problem? <span className="text-ice/50">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleChange("message")}
                      rows={6}
                      placeholder="Tell us about the workflow, the volume, and what a good outcome looks like..."
                      className="field"
                    />
                  </div>

                  <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] leading-relaxed text-white/30">
                      By sending this form you agree to our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-white/50 underline decoration-white/20 underline-offset-2 hover:text-white/80"
                      >
                        privacy policy
                      </a>
                      .
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary h-12 px-6 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                      {!isSubmitting && <ArrowUpRight size={15} strokeWidth={1.8} />}
                    </button>
                  </div>
                </form>

                <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[7px] border border-white/10 bg-white/[0.025] text-white/40">
                    <MessageSquare size={14} strokeWidth={1.7} />
                  </span>
                  <p className="text-[12px] leading-[1.6] text-white/40">
                    Prefer email? Write to{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-white/70 underline decoration-white/20 underline-offset-2 hover:text-white"
                    >
                      {SITE.email}
                    </a>{" "}
                    and we will reply within one working day.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Aside */}
            <div className="space-y-4">
              <Reveal delay={90}>
                <div className="rounded-[14px] border border-white/12 bg-gradient-to-br from-ice/[0.07] via-white/[0.025] to-transparent p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-[7px] border border-white/10 bg-white/[0.035] text-ice/70">
                      <Calendar size={14} strokeWidth={1.7} />
                    </span>
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">
                      Book directly
                    </p>
                  </div>
                  <h3 className="display-3 mt-6">A 30-minute call.</h3>
                  <p className="body-copy mt-3">
                    Pick a time that suits you. Bring the workflow, the
                    spreadsheet, or the problem you keep postponing.
                  </p>
                  <a
                    href={SITE.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-6 w-full"
                  >
                    Open calendar
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </a>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/30">
                    <Clock size={11} />
                    30 min · Google Meet · Free
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="glass p-6">
                  <h3 className="meta-label">Direct contact</h3>
                  <div className="mt-4 space-y-3 text-[12.5px]">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-white/85"
                    >
                      <Mail size={14} strokeWidth={1.7} className="text-white/30" />
                      {SITE.email}
                    </a>
                    <p className="flex items-start gap-2.5 text-white/55">
                      <MapPin size={14} strokeWidth={1.7} className="mt-0.5 text-white/30" />
                      {SITE.location}
                    </p>
                    <a
                      href={SITE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-white/85"
                    >
                      <Linkedin size={14} strokeWidth={1.7} className="text-white/30" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={210}>
                <div className="glass p-6">
                  <h3 className="meta-label">What happens next</h3>
                  <ol className="mt-4 space-y-4">
                    {[
                      "We read the details and reply within one working day.",
                      "A 30-minute call to understand the workflow and the constraint.",
                      "A short, fixed-scope proposal with timeline and cost.",
                    ].map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-mono text-[9px] text-ice/55">
                          0{index + 1}
                        </span>
                        <span className="text-[12.5px] leading-[1.55] text-white/50">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeading
              eyebrow="Questions"
              title={
                <>
                  Before you{" "}
                  <span className="text-white/38">send anything.</span>
                </>
              }
              lead="A few practical answers. If yours is not here, ask it in the form."
            />
            <FaqAccordion
              faqs={CONTACT_FAQS.map((item) => ({
                question: item.q,
                answer: item.a,
              }))}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

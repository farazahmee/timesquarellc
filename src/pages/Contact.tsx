import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router-dom";
import { Calendar, Sparkles, Mail, MapPin, Linkedin } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const BOOK_CALL_URL = "https://calendar.app.google/meegViXuibrs6Egq7";
const ROBOT_SIZE_PX = 56; // matches `h-14 w-14`

const faqs = [
  {
    question: "How quickly can we start a project?",
    answer:
      "Most projects can start within 1-2 weeks after discovery and scope alignment.",
  },
  {
    question: "Do you work with UK-only businesses?",
    answer:
      "No. We are based in England and serve clients globally across time zones.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Yes. We often collaborate with internal teams for architecture, delivery, and handover.",
  },
  {
    question: "What project sizes do you typically support?",
    answer:
      "From focused integrations and MVPs to full-scale platforms and multi-phase delivery.",
  },
];

export default function Contact() {
  useSEO({
    title: "Contact TimeSquare LLC | Book a Free AI Consultation",
    description:
      "Get in touch with TimeSquare LLC for AI integration agency support, ChatGPT integration services, business process automation, and full-stack development.",
    canonical: "https://timesquarellc.com/contact",
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 28, y: 120 });
  const dragOffsetRef = useRef({ dx: 0, dy: 0 });

  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

  useEffect(() => {
    // Keep robot inside bounds on resize.
    const onResize = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const maxX = Math.max(0, rect.width - ROBOT_SIZE_PX);
      const maxY = Math.max(0, rect.height - ROBOT_SIZE_PX);
      setPos((p) => ({
        x: clamp(p.x, 0, maxX),
        y: clamp(p.y, 0, maxY),
      }));
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLImageElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    dragOffsetRef.current = {
      dx: event.clientX - (rect.left + pos.x),
      dy: event.clientY - (rect.top + pos.y),
    };

    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLImageElement>) => {
    if (!dragging) return;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    const maxX = Math.max(0, rect.width - ROBOT_SIZE_PX);
    const maxY = Math.max(0, rect.height - ROBOT_SIZE_PX);

    const nextX = event.clientX - rect.left - dragOffsetRef.current.dx;
    const nextY = event.clientY - rect.top - dragOffsetRef.current.dy;

    setPos({
      x: clamp(nextX, 0, maxX),
      y: clamp(nextY, 0, maxY),
    });
  };

  const onPointerUp = () => setDragging(false);

  const emailHref = useMemo(() => "mailto:hello@timesquarellc.com", []);

  return (
    <div className="relative py-24 lg:py-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary via-accent to-brand-cyan animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contact
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s Build Your Next <span className="gradient-text">AI Project</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Drag the robot assistant, then book a call or email us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-8 md:p-10">
            <div className="flex items-start justify-between gap-6 mb-6">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-2">AI Concierge</h2>
                <p className="text-muted-foreground">
                  This is a lightweight “demo robot”. Drag it around anywhere in the box.
                </p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div
              ref={containerRef}
              className="relative h-[380px] md:h-[420px] rounded-xl border border-border/50 bg-secondary/20 overflow-hidden select-none touch-none"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
              >
                <source src="/videos/transparent-inquiry.mp4" type="video/mp4" />
              </video>

              <div className="absolute -top-20 -left-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

              <img
                src="/robot-assistant.svg"
                alt="AI Concierge robot"
                loading="lazy"
                draggable={false}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                style={{
                  position: "absolute",
                  left: pos.x,
                  top: pos.y,
                  cursor: dragging ? "grabbing" : "grab",
                  touchAction: "none",
                  userSelect: "none",
                }}
                className="h-14 w-14"
              />

              <div className="absolute left-5 bottom-5 right-5">
                <div className="glass-card p-4">
                  <p className="text-sm font-semibold mb-1">Need to reach us?</p>
                  <p className="text-xs text-muted-foreground">
                    Email{" "}
                    <a href={emailHref} className="text-primary hover:underline">
                      hello@timesquarellc.com
                    </a>{" "}
                    or book a call.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={emailHref}
                className="btn-outline-gradient inline-flex items-center justify-center gap-2 flex-1"
              >
                <Mail size={16} />
                Email us
              </a>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center justify-center gap-2 flex-1"
              >
                <Calendar size={16} />
                Book a Call
              </a>
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
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="glass-card p-8 md:p-10">
          <h2 className="font-display text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <article key={faq.question} className="space-y-2">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


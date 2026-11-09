import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Database,
  Smartphone,
  Workflow,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import ButtonLink from "@/components/site/ButtonLink";
import SectionHeading from "@/components/site/SectionHeading";
import StatBand from "@/components/site/StatBand";
import Marquee from "@/components/site/Marquee";
import ClosingCTA from "@/components/site/ClosingCTA";
import { ENGAGEMENTS, SERVICES, TECH } from "@/content/site";
import { cn } from "@/lib/utils";

const serviceIcons = {
  automation: Workflow,
  agents: Bot,
  software: Code2,
  web: Smartphone,
  data: Database,
};

const stats = [
  { value: "5", label: "core services" },
  { value: "4–12", label: "weeks to a production build" },
  { value: "1", label: "senior team, start to finish" },
];

export default function Services() {
  useSEO({
    title:
      "AI Integration & Automation Services | ChatGPT, Web Dev, Analytics | TimeSquare LLC",
    description:
      "Comprehensive AI integration agency services: business process automation, LLM integration services, full-stack web development, and data analytics consulting with Python FastAPI development and React.",
    canonical: "https://timesquarellc.com/services",
  });

  return (
    <div className="relative">
      <PageHero
        eyebrow="Services"
        title={
          <>
            Build the system,{" "}
            <span className="text-white/38">not another spreadsheet.</span>
          </>
        }
        lead="Five services, one operating principle: remove the manual work, keep the judgement, and leave you with something your team can run."
      >
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink to="/contact" variant="primary" size="lg" withArrow>
            Book a free consultation
          </ButtonLink>
          <ButtonLink to="/case-studies" variant="ghost" withArrow>
            See the work
          </ButtonLink>
        </div>
      </PageHero>

      <Container>
        <StatBand stats={stats} />
      </Container>

      {/* Services */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                The useful middle,{" "}
                <span className="text-white/38">done properly.</span>
              </>
            }
            lead="Most engagements combine two or three of these. We will tell you which one to start with — and which ones you do not need."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {SERVICES.map((service, index) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
              return (
                <Reveal key={service.id} delay={index * 60}>
                  <article
                    id={service.id}
                    className="group glass card-lift flex h-full scroll-mt-28 flex-col p-6 md:p-7"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-[9px] border border-white/10 bg-white/[0.035] text-ice/70 transition-colors duration-300 group-hover:border-ice/20 group-hover:text-ice">
                          <Icon size={18} strokeWidth={1.5} />
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.12em] text-white/28">
                          {service.number}
                        </span>
                      </span>
                      <Link
                        to="/contact"
                        aria-label={`Discuss ${service.title}`}
                        className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/35 transition-all duration-300 hover:border-white/25 hover:text-white/80"
                      >
                        <ArrowUpRight size={14} strokeWidth={1.8} />
                      </Link>
                    </div>

                    <h3 className="display-3 mt-7">{service.title}</h3>
                    <p className="body-copy mt-3 flex-1">{service.description}</p>

                    <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-[7px] border border-white/[0.07] bg-white/[0.02] px-2.5 py-2 text-[11.5px] text-white/48"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}

            <Reveal delay={300}>
              <div className="flex h-full flex-col justify-between rounded-[14px] border border-white/10 bg-gradient-to-br from-ice/[0.06] via-white/[0.025] to-transparent p-7">
                <div>
                  <p className="meta-label">Not sure where to start?</p>
                  <h3 className="display-3 mt-5">
                    Start with the workflow that annoys everyone most.
                  </h3>
                  <p className="body-copy mt-3">
                    Bring us the process your team complains about. We will
                    tell you whether it is worth automating, what it would take,
                    and what it should save.
                  </p>
                </div>
                <ButtonLink
                  to="/contact"
                  variant="secondary"
                  withArrow
                  className="mt-7 self-start"
                >
                  Talk it through
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Engagements */}
      <section className="section border-y border-white/10 bg-[#090b0e]">
        <Container>
          <SectionHeading
            eyebrow="Ways to work together"
            title={
              <>
                Three ways to start.{" "}
                <span className="text-white/38">No surprises.</span>
              </>
            }
            lead="Fixed scope before work starts. The numbers below are typical starting points — the proposal will be specific to your build."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {ENGAGEMENTS.map((engagement, index) => (
              <Reveal key={engagement.name} delay={index * 70}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-[14px] border p-6 md:p-7",
                    engagement.featured
                      ? "border-white/20 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      : "border-white/10 bg-white/[0.02]",
                  )}
                >
                  {engagement.featured && (
                    <span className="absolute right-5 top-5 rounded-[5px] border border-ice/20 bg-ice/[0.07] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-ice/80">
                      Most common
                    </span>
                  )}
                  <p className="meta-label">{engagement.name}</p>
                  <div className="mt-7 flex items-baseline gap-2">
                    <span className="font-display text-[2.5rem] font-medium leading-none tracking-[-0.05em] text-white/92">
                      {engagement.price}
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/32">
                    {engagement.cadence}
                  </p>
                  <p className="body-copy mt-5 flex-1">{engagement.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    {engagement.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[12.5px] text-white/52"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ice/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    to="/contact"
                    variant={engagement.featured ? "primary" : "secondary"}
                    withArrow
                    className="mt-7 w-full"
                  >
                    {engagement.cta}
                  </ButtonLink>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-white/25">
            All prices exclude VAT · Scope and cost confirmed before build
          </p>
        </Container>
      </section>

      {/* Tech */}
      <section className="section-tight">
        <Container>
          <div className="flex flex-col gap-4 border-y border-white/10 py-6 md:flex-row md:items-center md:gap-8">
            <p className="meta-label shrink-0">Our stack</p>
            <Marquee
              items={TECH}
              className="flex-1"
              itemClassName="font-mono text-[10px] uppercase tracking-[0.1em] text-white/34"
            />
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </div>
  );
}

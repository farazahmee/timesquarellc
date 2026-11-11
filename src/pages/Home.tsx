import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  GraduationCap,
  HeartPulse,
  Landmark,
  RadioTower,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import Container from "@/components/site/Container";
import Eyebrow from "@/components/site/Eyebrow";
import Reveal from "@/components/site/Reveal";
import ButtonLink from "@/components/site/ButtonLink";
import Marquee from "@/components/site/Marquee";
import SectionHeading from "@/components/site/SectionHeading";
import FaqAccordion from "@/components/site/FaqAccordion";
import DashboardMock from "@/components/site/DashboardMock";
import ClosingCTA from "@/components/site/ClosingCTA";
import {
  BUILD_TABS,
  CAPABILITIES,
  CLIENTS,
  FAQS,
  HERO,
  INDUSTRIES,
  OUTCOMES,
  PROCESS,
  STATS,
  TECH,
  TESTIMONIALS,
} from "@/content/site";
import { cn } from "@/lib/utils";

const industryIcons = {
  health: HeartPulse,
  finance: Landmark,
  retail: ShoppingBag,
  logistics: Truck,
  telecom: RadioTower,
  education: GraduationCap,
};

export default function Home() {
  useSEO({
    title: "AI Automation & Custom Software Development | TimeSquare LLC",
    description:
      "We build AI automation, chatbots, and custom software that cut manual work out of business operations. UK-based, serving teams in healthcare, finance and retail.",
    canonical: "https://timesquarellc.com",
  });

  const [activeTab, setActiveTab] = useState(BUILD_TABS[0]);

  return (
    <div className="relative">
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-40 lg:pb-20 lg:pt-44">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-70" />
          <div className="absolute -right-[28%] top-[-4%] w-[110%] max-w-[1100px] opacity-55 sm:-right-[14%] sm:top-[-12%] sm:w-[80%] sm:opacity-65 lg:right-[-2%] lg:top-0 lg:w-[68%] lg:opacity-90">
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet="/art/hero-ribbon-mobile.webp"
              />
              <img
                src="/art/hero-ribbon.webp"
                alt=""
                width={1800}
                height={772}
                className="h-auto w-full animate-float-slow"
              />
            </picture>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090b] via-[#08090b]/88 to-[#08090b]/10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08090b] to-transparent" />
        </div>

        <Container className="relative">
          <div className="max-w-[780px]">
            <Reveal>
              <Eyebrow>{HERO.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-1 mt-8">
                {HERO.titleLead}{" "}
                <span className="text-white/38">{HERO.titleMuted}</span>{" "}
                {HERO.titleTail}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead mt-7 max-w-[560px]">{HERO.lead}</p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <ButtonLink to="/contact" variant="primary" size="lg" withArrow>
                  {HERO.primaryCta}
                </ButtonLink>
                <ButtonLink to="/case-studies" variant="ghost" withArrow>
                  {HERO.secondaryCta}
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-11 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
                {HERO.footnote}
              </p>
            </Reveal>
          </div>

          <Reveal delay={380} className="mt-16 lg:mt-24">
            <div className="grid border-t border-white/10 pt-7 sm:grid-cols-3 sm:gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3 py-2">
                  <span className="shrink-0 whitespace-nowrap font-display text-[2.35rem] font-medium leading-none tracking-[-0.05em] text-white/90">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase leading-[1.45] tracking-[0.14em] text-white/35">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Client strip ---------------- */}
      <section className="border-y border-white/10 bg-white/[0.012] py-5">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <p className="meta-label shrink-0">Trusted by teams at</p>
            <Marquee
              items={CLIENTS}
              className="flex-1"
              itemClassName="text-[14px] text-white/40"
            />
          </div>
        </Container>
      </section>

      {/* ---------------- Capabilities ---------------- */}
      <section id="capabilities" className="section">
        <Container>
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What we build"
              title={
                <>
                  Four ways we remove{" "}
                  <span className="text-white/38">manual work.</span>
                </>
              }
              lead="Start with one workflow. Prove the time saved. Then expand into the rest of the operation."
            />
            <ButtonLink
              to="/services"
              variant="secondary"
              withArrow
              className="hidden md:inline-flex"
            >
              Explore services
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 70}>
                <Link
                  to={capability.href}
                  className="group glass card-lift flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.07]">
                    <img
                      src={capability.art}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11] via-[#0b0d11]/10 to-transparent" />
                    <span className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.12em] text-white/40">
                      {capability.number}
                    </span>
                    <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-white/12 bg-black/25 text-white/65 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={14} strokeWidth={1.8} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="display-4">{capability.title}</h3>
                    <p className="body-copy mt-3 flex-1">{capability.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {capability.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-[5px] border border-white/10 bg-white/[0.025] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white/38"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Inside a build ---------------- */}
      <section className="section border-y border-white/10 bg-[#090b0e]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Inside a build"
                title={
                  <>
                    One system,{" "}
                    <span className="text-white/38">three ways in.</span>
                  </>
                }
                lead="Every engagement starts with the same question: what is the smallest system that removes the most manual work?"
              />

              <div
                role="tablist"
                aria-label="Ways to work with TimeSquare"
                className="mt-8 flex flex-wrap gap-1.5"
              >
                {BUILD_TABS.map((tab) => {
                  const selected = activeTab.id === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`tab-${tab.id}`}
                      aria-selected={selected}
                      aria-controls={`panel-${tab.id}`}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "h-8 rounded-[7px] border px-3 font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-300",
                        selected
                          ? "border-white/20 bg-white/[0.07] text-white/90"
                          : "border-transparent text-white/38 hover:text-white/70",
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                id={`panel-${activeTab.id}`}
                aria-labelledby={`tab-${activeTab.id}`}
                className="mt-8"
              >
                <h3 className="display-3">{activeTab.title}</h3>
                <p className="body-copy mt-4">{activeTab.description}</p>
                <ul className="mt-6 space-y-3">
                  {activeTab.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-[14px] text-white/58">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-ice/20 bg-ice/[0.06] text-ice/80">
                        <Check size={9} strokeWidth={2.4} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-baseline gap-3 border-t border-white/10 pt-5">
                  <span className="font-display text-[2rem] font-medium leading-none tracking-[-0.045em] text-white/90">
                    {activeTab.metric.value}
                  </span>
                  <span className="max-w-[230px] font-mono text-[9px] uppercase leading-[1.5] tracking-[0.1em] text-white/35">
                    {activeTab.metric.label}
                  </span>
                </div>
              </div>
            </div>

            <Reveal direction="right" className="lg:pt-7">
              <DashboardMock tab={activeTab} />
              <p className="mt-4 text-right font-mono text-[9px] uppercase tracking-[0.12em] text-white/25">
                Illustrative interface · real build scoped to your stack
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- Process ---------------- */}
      <section id="process" className="section">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                From first call to{" "}
                <span className="text-white/38">running system.</span>
              </>
            }
            lead="Four steps, no black boxes. You approve the scope and the cost before anything gets built."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[14px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 70}
                className="bg-[#090b0e] p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-white/28">
                    {step.number}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-ice/45">
                    {step.output}
                  </span>
                </div>
                <h3 className="display-4 mt-10">{step.title}</h3>
                <p className="body-copy mt-3">{step.description}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:gap-8">
            <p className="meta-label shrink-0">Built with</p>
            <Marquee
              items={TECH}
              reverse
              className="flex-1"
              itemClassName="font-mono text-[10px] uppercase tracking-[0.1em] text-white/32"
            />
          </div>
        </Container>
      </section>

      {/* ---------------- Outcomes ---------------- */}
      <section className="section border-y border-white/10 bg-[#090b0e]">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Work that moved{" "}
                <span className="text-white/38">a number.</span>
              </>
            }
            lead="Every figure below was reported by the client after launch."
            actions={
              <ButtonLink to="/case-studies" variant="secondary" withArrow>
                All case studies
              </ButtonLink>
            }
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {OUTCOMES.map((outcome, index) => (
              <Reveal key={outcome.client} delay={index * 80}>
                <Link
                  to="/case-studies"
                  className="group glass card-lift flex h-full flex-col p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="meta-label">{outcome.category}</span>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                    />
                  </div>
                  <p className="mt-8 font-display text-[3.1rem] font-medium leading-none tracking-[-0.055em] text-white/92">
                    {outcome.metric}
                  </p>
                  <p className="mt-2 text-[13px] text-white/55">{outcome.label}</p>
                  <div className="mt-7 flex-1 border-t border-white/10 pt-5">
                    <h3 className="display-4">{outcome.client}</h3>
                    <p className="body-copy mt-2">{outcome.description}</p>
                  </div>
                  <p className="mt-5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-white/28">
                    {outcome.tech}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="In their words"
            title={
              <>
                The work, in{" "}
                <span className="text-white/38">their words.</span>
              </>
            }
            lead="We keep the circle small: the people who scope your project are the people who build it."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 80}>
                <figure className="glass card-lift flex h-full flex-col p-6">
                  <span
                    aria-hidden="true"
                    className="font-display text-[2.4rem] leading-none tracking-[-0.06em] text-white/12"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-[14px] leading-[1.7] text-white/62">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-[10px] text-white/55">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <span>
                      <span className="block text-[12px] font-medium text-white/80">
                        {testimonial.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.08em] text-white/32">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Industries ---------------- */}
      <section className="section border-y border-white/10 bg-[#090b0e]">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                Built for work where{" "}
                <span className="text-white/38">mistakes are expensive.</span>
              </>
            }
            lead="We are not a general-purpose agency. These are the operations we know well enough to improve quickly."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry, index) => {
              const Icon = industryIcons[industry.icon as keyof typeof industryIcons];
              return (
                <Reveal key={industry.name} delay={index * 60}>
                  <Link
                    to="/services"
                    className="group relative flex aspect-[4/5] h-full flex-col justify-end overflow-hidden rounded-[14px] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                  >
                    <img
                      src={industry.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-80"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-[#07090d]/55 to-[#07090d]/10"
                    />
                    <div className="relative p-6">
                      <span className="grid h-10 w-10 place-items-center rounded-[9px] border border-white/15 bg-black/30 text-ice/80 backdrop-blur-md transition-colors duration-300 group-hover:border-ice/30 group-hover:text-ice">
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      <h3 className="display-4 mt-8">{industry.name}</h3>
                      <p className="mt-3 text-[13.5px] leading-[1.6] text-white/55">
                        {industry.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40 transition-colors group-hover:text-white/75">
                        Explore
                        <ArrowUpRight size={11} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <Eyebrow>Questions</Eyebrow>
              <h2 className="display-2 mt-6">
                The things teams{" "}
                <span className="text-white/38">usually ask.</span>
              </h2>
              <p className="lead mt-5">
                If yours is not here, ask it directly. You will get a straight
                answer, not a discovery call.
              </p>
              <ButtonLink
                to="/contact"
                variant="secondary"
                withArrow
                className="mt-7"
              >
                Ask us directly
              </ButtonLink>
            </div>
            <FaqAccordion faqs={FAQS} />
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </div>
  );
}

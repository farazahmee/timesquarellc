import { ExternalLink } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import ButtonLink from "@/components/site/ButtonLink";
import SectionHeading from "@/components/site/SectionHeading";
import StatBand from "@/components/site/StatBand";
import ClosingCTA from "@/components/site/ClosingCTA";
import { CASE_STUDIES } from "@/content/site";

const sectorCount = new Set(CASE_STUDIES.map((study) => study.category)).size;

const results = [
  { value: String(CASE_STUDIES.length), label: "selected case studies" },
  { value: String(sectorCount), label: "sectors represented" },
  { value: "35–80%", label: "reported improvements" },
];

export default function CaseStudies() {
  useSEO({
    title:
      "AI Case Studies & Portfolio | Healthcare, Finance, Retail, Transport | TimeSquare LLC",
    description:
      "Explore our portfolio of AI automation and custom software across healthcare, finance, retail and private hire, including SurgiSync, Simpla.AI, RevelTV and a chauffeur operations platform.",
    canonical: "https://timesquarellc.com/case-studies",
  });

  const featured = CASE_STUDIES.find((study) => study.featured) ?? CASE_STUDIES[0];
  const spotlight = CASE_STUDIES.find((study) => study.spotlight);
  const rest = CASE_STUDIES.filter(
    (study) =>
      study.slug !== featured.slug && study.slug !== spotlight?.slug,
  );

  return (
    <div className="relative">
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Work that moved{" "}
            <span className="text-white/38">a number.</span>
          </>
        }
        lead="A sample of the systems we have shipped. Every figure below was reported by the client after launch."
      >
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink to="/contact" variant="primary" size="lg" withArrow>
            Start a project
          </ButtonLink>
          <ButtonLink to="/services" variant="ghost" withArrow>
            How we work
          </ButtonLink>
        </div>
      </PageHero>

      <Container>
        <StatBand stats={results} />
      </Container>

      {/* Featured */}
      <section className="section-tight">
        <Container>
          <Reveal>
            <article
              id={featured.slug}
              className="glass group scroll-mt-28 overflow-hidden"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-ice/[0.09] via-indigo/10 to-transparent p-7 md:p-9 lg:border-b-0 lg:border-r">
                  {featured.image && (
                    <>
                      <img
                        src={featured.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover opacity-45"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/70 to-[#08090b]/25"
                      />
                    </>
                  )}
                  <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-4">
                      <span className="meta-label">{featured.category}</span>
                      <span className="rounded-[5px] border border-ice/20 bg-ice/[0.06] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-ice/75">
                        Featured
                      </span>
                    </div>
                    <div className="mt-20 lg:mt-32">
                      <p className="font-display text-[clamp(4rem,8vw,6.5rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white/92">
                        {featured.metric}
                      </p>
                      <p className="mt-4 max-w-[240px] text-[14px] leading-[1.55] text-white/55">
                        {featured.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <h2 className="display-2">{featured.title}</h2>
                  <p className="body-copy mt-5">{featured.description}</p>

                  <div className="mt-7 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                    <div>
                      <h3 className="meta-label">Key results</h3>
                      <ul className="mt-3 space-y-2.5">
                        {featured.results.map((result) => (
                          <li
                            key={result}
                            className="flex items-start gap-2.5 text-[12.5px] text-white/55"
                          >
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ice/60" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="meta-label">Stack</h3>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {featured.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-[5px] border border-white/10 bg-white/[0.025] px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.06em] text-white/38"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-[12px] font-medium text-white/55 transition-colors hover:text-white/90"
                    >
                      Visit the project
                      <ExternalLink size={13} strokeWidth={1.7} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      {/* Project spotlight */}
      {spotlight && (
        <section className="section-tight">
          <Container>
            <SectionHeading
              eyebrow="Project spotlight"
              title={
                <>
                  From booking request to{" "}
                  <span className="text-white/38">paid invoice.</span>
                </>
              }
              lead="A recent platform build for chauffeur and private-hire operators — booking review, compliance gates, invoicing and a driver app in one system."
              actions={
                <ButtonLink to="/contact" variant="secondary" withArrow>
                  Discuss a similar build
                </ButtonLink>
              }
            />

            <Reveal>
              <article
                id={spotlight.slug}
                className="glass mt-12 scroll-mt-28 overflow-hidden"
              >
                <div className="relative border-b border-white/10 bg-[#070a0f]">
                  <img
                    src={spotlight.image}
                    alt="Chauffeur and private-hire car outside an airport terminal."
                    width={1799}
                    height={773}
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b]/85 via-[#08090b]/20 to-transparent"
                  />
                  {spotlight.imageSecondary && (
                    <img
                      src={spotlight.imageSecondary}
                      alt="Chauffeur operations dashboard showing bookings, compliance and invoicing."
                      width={1200}
                      height={675}
                      loading="lazy"
                      className="absolute bottom-5 right-5 z-10 hidden w-[38%] rounded-[10px] border border-white/15 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] md:block lg:bottom-7 lg:right-7"
                    />
                  )}
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2 md:left-7 md:top-7">
                    <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/70 backdrop-blur-md">
                      {spotlight.category}
                    </span>
                    <span className="rounded-full border border-ice/25 bg-ice/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ice/80 backdrop-blur-md">
                      New build
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="p-7 md:p-9 lg:border-r lg:border-white/10">
                    <p className="meta-label">{spotlight.category}</p>
                    <h2 className="display-3 mt-3">{spotlight.title}</h2>

                    <p className="body-copy mt-5">{spotlight.description}</p>

                    <div className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
                      {spotlight.results.map((result) => (
                        <div
                          key={result}
                          className="flex items-start gap-2 text-[12px] leading-[1.5] text-white/55"
                        >
                          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-ice/60" />
                          {result}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-1.5">
                      {spotlight.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[5px] border border-white/[0.08] bg-white/[0.02] px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.06em] text-white/32"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-7 md:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="meta-label">What it handles</h3>
                      {spotlight.metric && (
                        <div className="text-right">
                          <p className="font-display text-[1.35rem] font-medium leading-none tracking-[-0.04em] text-white/85">
                            {spotlight.metric}
                          </p>
                          <p className="mt-1 max-w-[150px] text-[10px] leading-[1.45] text-white/40">
                            {spotlight.metricLabel}
                          </p>
                        </div>
                      )}
                    </div>
                    <ul className="mt-4 divide-y divide-white/[0.07]">
                      {spotlight.highlights?.map((highlight, index) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 py-3 first:pt-0"
                        >
                          <span className="mt-[1px] shrink-0 font-mono text-[9px] tracking-[0.08em] text-ice/45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[12.5px] leading-[1.55] text-white/55">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {spotlight.note && (
                      <div className="mt-6 rounded-[10px] border border-white/10 bg-white/[0.025] p-5">
                        <p className="text-[12.5px] leading-[1.6] text-white/52">
                          {spotlight.note}
                        </p>
                        <ButtonLink
                          to="/contact"
                          variant="primary"
                          size="sm"
                          className="mt-4"
                          withArrow
                        >
                          Talk about a build
                        </ButtonLink>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Grid */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="More work"
            title={
              <>
                Systems in the wild,{" "}
                <span className="text-white/38">under real load.</span>
              </>
            }
            lead="Different industries, same approach: understand the process, remove the fragile parts, and measure what changed."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {rest.map((study, index) => (
              <Reveal key={study.slug} delay={index * 60}>
                <article
                  id={study.slug}
                  className="group glass card-lift flex h-full scroll-mt-28 flex-col overflow-hidden"
                >
                  {study.image && (
                    <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#07090d]">
                      <img
                        src={study.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#08090b]/80 via-[#08090b]/20 to-transparent"
                      />
                      <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/70 backdrop-blur-md">
                        {study.category}
                      </span>
                      {study.link && (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${study.title}`}
                          className="absolute right-4 top-5 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/40 text-white/60 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:text-white"
                        >
                          <ExternalLink size={13} strokeWidth={1.7} />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    {!study.image && (
                      <div className="flex items-start justify-between gap-4">
                        <span className="meta-label">{study.category}</span>
                        {study.link && (
                          <a
                            href={study.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${study.title}`}
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-white/35 transition-all duration-300 hover:border-white/25 hover:text-white/80"
                          >
                            <ExternalLink size={13} strokeWidth={1.7} />
                          </a>
                        )}
                      </div>
                    )}

                    <div className="mt-7 flex items-end justify-between gap-4">
                      <h3 className="display-3">{study.title}</h3>
                      {study.metric && (
                        <span className="shrink-0 font-display text-[2rem] font-medium leading-none tracking-[-0.05em] text-white/85">
                          {study.metric}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-[13px] text-white/48">{study.metricLabel}</p>
                    <p className="body-copy mt-4 flex-1">{study.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-5">
                      {study.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[5px] border border-white/[0.08] bg-white/[0.02] px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.06em] text-white/32"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </div>
  );
}

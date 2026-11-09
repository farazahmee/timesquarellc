import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import ButtonLink from "@/components/site/ButtonLink";
import StatBand from "@/components/site/StatBand";
import ClosingCTA from "@/components/site/ClosingCTA";
import {
  ABOUT_STATS,
  PRINCIPLES,
  TEAM,
  TIMELINE,
} from "@/content/site";

export default function About() {
  useSEO({
    title:
      "About TimeSquare LLC | AI Automation Experts | Our Team & Mission",
    description:
      "Meet the team behind TimeSquare LLC. We combine deep AI and full-stack development expertise with strategic vision to deliver AI automation solutions that drive real results.",
    canonical: "https://timesquarellc.com/about",
  });

  return (
    <div className="relative">
      <PageHero
        eyebrow="About"
        title={
          <>
            A small senior team, building{" "}
            <span className="text-white/38">quietly useful AI.</span>
          </>
        }
        lead="We started TimeSquare because the gap between an AI demo and a system a team actually uses every day was too wide. We work on the second part."
      >
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink to="/contact" variant="primary" size="lg" withArrow>
            Talk to the team
          </ButtonLink>
          <ButtonLink to="/case-studies" variant="ghost" withArrow>
            See the work
          </ButtonLink>
        </div>
      </PageHero>

      {/* Statement */}
      <section className="section-tight">
        <Container>
          <div className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal>
              <p className="font-display text-[clamp(1.6rem,2.8vw,2.5rem)] font-medium leading-[1.22] tracking-[-0.035em] text-white/82">
                Most AI projects fail in the last mile: the handoff, the
                exception, the person who has to trust the output.{" "}
                <span className="text-white/38">
                  That is the part we build for.
                </span>
              </p>
            </Reveal>
            <Reveal delay={100} className="space-y-5">
              <p className="body-copy">
                We are a compact team of senior engineers based in England,
                working with operations teams across the UK, US, and Middle
                East. We scope the work ourselves and write the code ourselves.
              </p>
              <p className="body-copy">
                Our projects tend to sit where the work is high-volume,
                document-heavy, and expensive to get wrong: healthcare,
                finance, retail operations, and digital signage. The pattern is
                usually the same — a process held together by spreadsheets,
                email, and one person who knows how it really works.
              </p>
              <p className="body-copy">
                We replace the fragile parts, keep the judgement, and leave
                behind a system your team can run without us.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="section border-y border-white/10 bg-[#090b0e]">
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title={
              <>
                How we work,{" "}
                <span className="text-white/38">in four lines.</span>
              </>
            }
            lead="These are the rules we use to make the hundred small decisions that do not fit in a statement of work."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 70}>
                <article className="glass card-lift flex h-full flex-col p-6 md:p-7">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-white/28">
                    0{index + 1}
                  </span>
                  <h3 className="display-3 mt-8">{principle.title}</h3>
                  <p className="body-copy mt-3">{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title={
              <>
                The people who{" "}
                <span className="text-white/38">build it.</span>
              </>
            }
            lead="No account managers, no handoff to a delivery pod. The people in the first call are the people in the codebase."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => (
              <Reveal key={member.name} delay={index * 70}>
                <article className="glass card-lift flex h-full flex-col p-6">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-ice/[0.12] to-indigo/20 font-display text-[17px] font-medium text-white/80">
                    {member.initials}
                  </span>
                  <h3 className="display-4 mt-7">{member.name}</h3>
                  <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-ice/60">
                    {member.role}
                  </p>
                  <p className="body-copy mt-4 flex-1">{member.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section border-y border-white/10 bg-[#090b0e]">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title={
              <>
                A short history of{" "}
                <span className="text-white/38">shipping quietly.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-white/10 bg-white/10 md:grid-cols-5">
            {TIMELINE.map((item, index) => (
              <Reveal
                key={item.year}
                delay={index * 60}
                className="bg-[#090b0e] p-5"
              >
                <p className="font-mono text-[10px] tracking-[0.12em] text-ice/60">
                  {item.year}
                </p>
                <p className="mt-3 text-[13px] leading-[1.6] text-white/50">
                  {item.event}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <StatBand stats={ABOUT_STATS} />
        </Container>
      </section>

      <ClosingCTA />
    </div>
  );
}

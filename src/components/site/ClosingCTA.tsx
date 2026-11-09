import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import ButtonLink from "./ButtonLink";
import { SITE } from "@/content/site";

export default function ClosingCTA() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0b0d11]">
            <img
              src="/art/cta-topography.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090b] via-[#08090b]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/70 via-transparent to-transparent" />

            <div className="relative px-6 py-14 sm:px-10 md:px-14 md:py-20">
              <div className="max-w-[620px]">
                <Eyebrow>Next step</Eyebrow>
                <h2 className="display-2 mt-6">
                  Tell us where the{" "}
                  <span className="text-white/40">manual work</span> is.
                </h2>
                <p className="lead mt-5">
                  A free 30-minute call. We will tell you what is worth
                  automating first, what it takes to build, and roughly what it
                  costs.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink to="/contact" variant="primary" size="lg" withArrow>
                    Book a free consultation
                  </ButtonLink>
                  <ButtonLink
                    href={`mailto:${SITE.email}`}
                    variant="secondary"
                    size="lg"
                  >
                    Email us
                  </ButtonLink>
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.13em] text-white/35">
                  <span>30 minutes</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/25" />
                  <span>No pitch deck</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/25" />
                  <span>A clear next step</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

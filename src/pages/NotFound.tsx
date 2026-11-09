import { useSEO } from "@/hooks/useSEO";
import Container from "@/components/site/Container";
import ButtonLink from "@/components/site/ButtonLink";

export default function NotFound() {
  useSEO({
    title: "Page Not Found | TimeSquare LLC",
    description:
      "The page you are looking for does not exist. Explore TimeSquare LLC's AI automation, software development, and case study pages instead.",
    canonical: "https://timesquarellc.com/404",
  });

  return (
    <div className="relative flex min-h-[82vh] items-center overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-glow blur-2xl" />
      <Container className="relative">
        <div className="max-w-[600px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
            404 · Page not found
          </p>
          <h1 className="display-1 mt-6">
            This page took a{" "}
            <span className="text-white/38">wrong turn.</span>
          </h1>
          <p className="lead mt-5">
            The page you're looking for doesn't exist or has been moved. The
            work, the services, and the team are all still here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/" variant="primary" withArrow>
              Back to home
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary" withArrow>
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

import { ReactNode } from "react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-glow blur-2xl" />
      <Container className="relative">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="display-1 mt-7 max-w-[940px]">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={140}>
            <div className="lead mt-6 max-w-[650px]">{lead}</div>
          </Reveal>
        )}
        {children && (
          <Reveal delay={200} className="mt-9">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}

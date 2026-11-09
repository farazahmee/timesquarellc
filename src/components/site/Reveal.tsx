import { ElementType, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  as?: ElementType;
  threshold?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
  threshold = 0.12,
}: RevealProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "reveal",
        direction === "left" && "reveal-left",
        direction === "right" && "reveal-right",
        inView && "is-visible",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

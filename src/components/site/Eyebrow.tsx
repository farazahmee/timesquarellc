import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
  shimmer = true,
}: {
  children: ReactNode;
  className?: string;
  shimmer?: boolean;
}) {
  return (
    <span
      className={cn(
        "eyebrow-pill",
        shimmer && "eyebrow-shimmer",
        className,
      )}
    >
      <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ice/50 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ice/90" />
      </span>
      {children}
    </span>
  );
}

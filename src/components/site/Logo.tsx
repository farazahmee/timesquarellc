import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="TimeSquare LLC home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden="true"
        className="grid h-[26px] w-[26px] grid-cols-2 gap-[3px] rounded-[7px] border border-white/10 bg-white/[0.035] p-[4px] transition-colors duration-300 group-hover:border-white/20"
      >
        <span className="rounded-[1.5px] bg-white/85" />
        <span className="rounded-[1.5px] bg-white/25" />
        <span className="rounded-[1.5px] bg-white/25" />
        <span className="rounded-[1.5px] bg-ice/75" />
      </span>
      <span className="font-display text-[15px] font-medium leading-none tracking-[-0.03em] text-white/90">
        TimeSquare{" "}
        <span className="align-[1px] font-mono text-[9px] font-normal tracking-[0.16em] text-white/35">
          LLC
        </span>
      </span>
    </Link>
  );
}

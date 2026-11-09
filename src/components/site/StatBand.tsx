import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type Stat = { value: string; label: string };

export default function StatBand({
  stats,
  className,
}: {
  stats: readonly Stat[];
  className?: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        "grid border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-white/10",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "flex items-baseline gap-4 border-b border-white/10 py-6 sm:border-b-0 sm:px-7 sm:py-8 sm:first:pl-0 sm:last:pr-0",
            index === stats.length - 1 && "border-b-0",
          )}
        >
          <span
            className={cn(
              "shrink-0 whitespace-nowrap font-display text-[2.15rem] font-medium leading-none tracking-[-0.05em] text-white/90 transition-all duration-700",
              inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-50",
            )}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            {stat.value}
          </span>
          <span className="font-mono text-[10px] uppercase leading-[1.5] tracking-[0.14em] text-white/40">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

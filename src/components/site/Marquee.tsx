import { cn } from "@/lib/utils";

export default function Marquee({
  items,
  reverse = false,
  className,
  itemClassName,
  separator = "square",
}: {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: "square" | "dot";
}) {
  const row = [...items];

  return (
    <div className={cn("marquee", className)}>
      <div className={cn("marquee-track", reverse && "marquee-track-reverse")}>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {row.map((item, index) => (
              <span
                key={`${copy}-${index}-${item}`}
                className={cn("ticker-item", itemClassName)}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 bg-white/20",
                    separator === "square"
                      ? "h-[5px] w-[5px] rounded-[1px]"
                      : "h-1 w-1 rounded-full",
                  )}
                />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

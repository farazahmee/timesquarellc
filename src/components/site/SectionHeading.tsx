import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
  actions?: ReactNode;
  titleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  actions,
  titleClassName,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        centered && "items-center text-center",
        actions && !centered && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-[720px]", centered && "mx-auto")}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className={cn("display-2 mt-6", titleClassName)}>{title}</h2>
        {lead && (
          <div
            className={cn(
              "lead mt-5 max-w-[620px]",
              centered && "mx-auto",
            )}
          >
            {lead}
          </div>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}

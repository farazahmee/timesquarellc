import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Faq = { question: string; answer: string };

export default function FaqAccordion({
  faqs,
  className,
  defaultOpen = 0,
}: {
  faqs: readonly Faq[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("border-y border-white/10", className)}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="border-b border-white/10 last:border-b-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span
                className={cn(
                  "text-[15px] font-medium leading-snug tracking-[-0.01em] transition-colors duration-300",
                  isOpen ? "text-white/90" : "text-white/70 group-hover:text-white/90",
                )}
              >
                {faq.question}
              </span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-white/45 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/75">
                <Plus
                  size={13}
                  strokeWidth={1.8}
                  className={cn(
                    "transition-transform duration-300 ease-out",
                    isOpen && "rotate-45",
                  )}
                />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[620px] pb-5 pr-8 text-[14px] leading-[1.65] text-white/50">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

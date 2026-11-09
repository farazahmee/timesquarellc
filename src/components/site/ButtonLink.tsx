import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function ButtonLink({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  onClick,
}: ButtonLinkProps) {
  const classes = cn(
    "btn group",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "ghost" && "btn-ghost",
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          size={15}
          strokeWidth={1.8}
          className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to ?? "/"} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}

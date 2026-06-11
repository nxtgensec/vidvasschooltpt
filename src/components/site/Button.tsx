import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors btn-primary-fx focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary",
  secondary: "bg-accent text-accent-foreground hover:bg-accent",
  outline:
    "border border-border bg-background text-navy hover:bg-surface",
  ghost: "text-navy hover:bg-surface",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}

export function CTALink({
  to,
  href,
  external,
  ...rest
}: CommonProps & {
  to?: string;
  href?: string;
  external?: boolean;
}) {
  const { children, variant = "primary", className, withArrow = true } = rest;
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="btn-arrow size-4" aria-hidden />}
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  bleed,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn("section-y", className)}>
      {bleed ? children : <div className="container-page">{children}</div>}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-3xl font-normal leading-[1.1] text-navy md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className={cn("max-w-2xl text-pretty text-base text-muted-foreground md:text-lg", align === "center" && "mx-auto")}>
          {intro}
        </p>
      )}
    </div>
  );
}

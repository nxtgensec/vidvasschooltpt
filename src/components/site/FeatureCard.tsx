import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  children,
  className,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card-hover flex h-full flex-col gap-4 rounded-3xl border border-border bg-background p-6 shadow-soft md:p-8",
        className,
      )}
    >
      {icon && (
        <div className="card-icon grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <h3 className="font-serif text-xl text-navy md:text-2xl">{title}</h3>
      <p className="text-sm text-muted-foreground md:text-base">{children}</p>
    </div>
  );
}

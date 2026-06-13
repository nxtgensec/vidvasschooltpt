import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "reveal reveal-left"
      : variant === "right"
        ? "reveal reveal-right"
        : variant === "scale"
          ? "reveal reveal-scale"
          : "reveal";

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref}
      className={cn(variantClass, seen && "in-view", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

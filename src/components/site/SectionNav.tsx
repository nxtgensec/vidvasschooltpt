import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { id: string; label: string };

export function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!items.length) return;
    const elements = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // active when section is roughly under the sticky nav
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // auto-scroll active chip into view on mobile
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLAnchorElement>(
      `a[data-id="${active}"]`,
    );
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }, [active]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    history.replaceState(null, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-[64px] z-30 -mx-5 border-y border-border bg-background/90 backdrop-blur-xl md:top-[72px] md:mx-0">
      <div className="container-page">
        <ul
          ref={listRef}
          className="no-scrollbar -mx-5 flex items-center gap-1 overflow-x-auto px-5 py-2 md:mx-0 md:px-0"
        >
          {items.map((it) => (
            <li key={it.id} className="shrink-0">
              <a
                href={`#${it.id}`}
                data-id={it.id}
                onClick={(e) => onClick(e, it.id)}
                className={cn(
                  "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                  active === it.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-surface hover:text-navy",
                )}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

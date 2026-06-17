import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { nav, tel, whatsapp } from "@/lib/site-config";
import { pageSections } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

/* ─── Scrollspy hook ─────────────────────────────────────── */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* ─── Sub-nav row (inside header, desktop) ───────────────── */
function SubNavRow({ pathname }: { pathname: string }) {
  const sections = pageSections[pathname] ?? [];
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);
  const listRef = useRef<HTMLDivElement>(null);

  // auto-scroll active pill into view
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-sub-id="${active}"]`,
    );
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  if (!sections.length) return null;

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    history.replaceState(null, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hidden border-t border-white/10 lg:block">
      <div
        ref={listRef}
        className="container-page no-scrollbar flex items-center justify-center gap-1 overflow-x-auto py-1.5"
      >
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-sub-id={s.id}
              onClick={(e) => scrollTo(e, s.id)}
              className={cn(
                "relative shrink-0 rounded-full border px-3.5 py-1 text-xs font-medium transition-all duration-200",
                isActive
                  ? "border-white/40 bg-white/15 text-white"
                  : "border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:bg-white/10 hover:text-white/90",
              )}
            >
              {s.label}
              {/* active underline indicator */}
              {isActive && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-white/80" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main header ────────────────────────────────────────── */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // current page has sub-sections
  const hasSections = (pageSections[pathname]?.length ?? 0) > 0;

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary shadow-elevated">
      {/* ── Top bar ── */}
      <div className="container-page grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:px-5 md:h-16 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4">
        <Logo variant="header" />

        {/* Desktop nav — centred */}
        <nav className="hidden min-w-0 items-center justify-center gap-0.5 overflow-hidden lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.to ||
              (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 lg:px-2.5 lg:text-xs xl:px-3.5 xl:text-sm",
                  active
                    ? "bg-white text-primary shadow-sm"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex min-w-0 items-center justify-end gap-1 sm:gap-1.5 md:gap-2">
          <a
            href={tel}
            aria-label="Call Vidvas School"
            className="grid size-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-primary sm:size-9"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Vidvas School"
            className="grid size-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-primary sm:size-9"
          >
            <MessageCircle className="size-4" />
          </a>
          <Link
            to="/admissions"
            className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary xl:inline-flex"
          >
            Admissions Open
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid size-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white sm:size-9 lg:hidden"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* ── Sub-nav row — only when on a page that has sections ── */}
      {hasSections && <SubNavRow pathname={pathname} />}

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="max-h-[calc(100dvh-56px)] overflow-y-auto border-t border-white/10 bg-primary lg:hidden">
          <div className="container-page flex flex-col gap-0.5 py-3">
            {nav.map((item) => {
              const active =
                pathname === item.to ||
                (item.to !== "/" && pathname.startsWith(item.to));
              const expanded = mobileExpanded === item.label;

              return (
                <div key={item.label}>
                  <div className="flex items-center">
                    <Link
                      to={item.to}
                      className={cn(
                        "flex-1 rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-white/15 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.menu && (
                      <button
                        type="button"
                        aria-label={expanded ? "Collapse" : "Expand"}
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.label)
                        }
                        className="ml-1 grid size-9 shrink-0 place-items-center rounded-xl text-white/60 hover:bg-white/10 hover:text-white"
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-200",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile sub-items — only on explicit tap of chevron */}
                  {item.menu && expanded && (
                    <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-white/15 pl-3 pb-1">
                      {item.menu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={item.to}
                          hash={sub.hash}
                          className="rounded-xl px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              to="/admissions"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
            >
              Admissions Open <ArrowRight className="size-4" />
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={tel}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="size-4" />
                Call
              </a>
              <a
                href={whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <span className="font-serif text-lg leading-none">V</span>
          </span>
          <span className="font-serif text-xl text-navy">{site.name.replace(" School", "")}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.menu ? item.label : null)}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-primary" : "text-navy hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
                {item.menu && openMenu === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div
                      className="w-[360px] origin-top rounded-3xl border border-border bg-background p-3 shadow-elevated"
                      style={{ animation: "scale-in 250ms ease-out" }}
                    >
                      <div className="grid gap-1">
                        {item.menu.map((sub) => (
                          <Link
                            key={sub.label}
                            to={item.to}
                            className="group flex flex-col gap-0.5 rounded-2xl px-4 py-3 transition-colors hover:bg-surface"
                          >
                            <span className="text-sm font-semibold text-navy group-hover:text-primary">
                              {sub.label}
                            </span>
                            <span className="text-xs text-muted-foreground">{sub.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/admissions"
            className="btn-primary-fx hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground md:inline-flex"
          >
            Admissions Open
            <ArrowRight className="btn-arrow size-4" aria-hidden />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-border bg-background lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-2xl px-4 py-3 text-base font-medium text-navy hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Admissions Open <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

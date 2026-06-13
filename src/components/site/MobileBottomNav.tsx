import { Link, useRouterState } from "@tanstack/react-router";
import { Home, GraduationCap, FileText, Trophy, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/academics", label: "Academics", icon: GraduationCap },
  { to: "/admissions", label: "Admissions", icon: FileText },
  { to: "/achievements", label: "Achievements", icon: Trophy },
  { to: "/campus-life", label: "Campus", icon: Sparkles },
] as const;

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Primary mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl shadow-[0_-8px_24px_-12px_color-mix(in_oklab,var(--navy)_15%,transparent)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="container-page grid grid-cols-5 gap-1 px-2 py-1.5">
        {items.map((item) => {
          const active =
            item.to === "/"
              ? pathname === "/"
              : pathname === item.to || pathname.startsWith(item.to + "/");
          const Icon = item.icon;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-2 text-[10px] font-medium leading-tight transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-navy",
                )}
              >
                <span
                  className={cn(
                    "grid size-9 place-items-center rounded-xl transition-all",
                    active
                      ? "bg-primary/12 text-primary scale-105"
                      : "text-current",
                  )}
                >
                  <Icon className="size-[18px]" />
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

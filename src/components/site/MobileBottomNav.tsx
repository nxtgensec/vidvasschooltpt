import { Link, useRouterState } from "@tanstack/react-router";
import { Home, GraduationCap, FileText, Trophy, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/academics", label: "Learn", icon: GraduationCap },
  { to: "/admissions", label: "Apply", icon: FileText },
  { to: "/achievements", label: "Awards", icon: Trophy },
  { to: "/campus-life", label: "Campus", icon: Building2 },
] as const;

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Primary mobile"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <ul className="mx-auto grid max-w-md grid-cols-5 gap-1 rounded-[1.35rem] border border-border/80 bg-background/95 p-1.5 shadow-[0_-10px_35px_-18px_color-mix(in_oklab,var(--navy)_35%,transparent),0_10px_35px_-22px_color-mix(in_oklab,var(--navy)_30%,transparent)] backdrop-blur-xl">
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
                  "group flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1.5 text-[10px] font-semibold leading-none transition-all",
                  active
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:bg-muted hover:text-navy",
                )}
              >
                <span
                  className={cn(
                    "grid size-6 place-items-center rounded-xl transition-all",
                    active
                      ? "scale-105 text-primary-foreground"
                      : "text-current group-hover:scale-105",
                  )}
                >
                  <Icon className="size-[17px]" />
                </span>
                <span className="max-w-full truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

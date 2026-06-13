import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";

// TODO: replace with the actual school logo file in src/assets/
// e.g. import logoSrc from "@/assets/vidvas-logo.png";
const logoSrc = "/favicon.ico";

type Props = {
  variant?: "header" | "footer";
  className?: string;
};

export function Logo({ variant = "header", className }: Props) {
  const isFooter = variant === "footer";
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="Vidvas School — Home"
    >
      <img
        src={logoSrc}
        alt="Vidvas School logo"
        width={64}
        height={64}
        className={cn(
          "object-contain",
          isFooter ? "size-14 rounded-xl bg-background/95 p-1.5" : "size-10",
        )}
      />
      {isFooter ? (
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-2xl text-background">
            {site.taglineLines[0]}
          </span>
          <span className="font-serif text-2xl text-background">
            {site.taglineLines[1]}
          </span>
        </span>
      ) : (
        <span className="font-serif text-xl text-navy">
          {site.name.replace(" School", "")}
        </span>
      )}
    </Link>
  );
}

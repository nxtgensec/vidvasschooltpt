import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { site, mailto, tel } from "@/lib/site-config";
import { Logo } from "./Logo";

const linkGroups = [
  {
    title: "Academics",
    links: [
      { label: "Curriculum", to: "/academics", hash: "curriculum" },
      { label: "Teaching Methodology", to: "/academics", hash: "methodology" },
      { label: "Faculty Excellence", to: "/academics", hash: "faculty" },
      { label: "Robotics & Coding", to: "/academics", hash: "programs" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Why Vidvas", to: "/admissions", hash: "why" },
      { label: "Documents", to: "/admissions", hash: "documents" },
      { label: "Process", to: "/admissions", hash: "process" },
      { label: "Campus Visit", to: "/admissions", hash: "visit" },
    ],
  },
  {
    title: "Campus Life",
    links: [
      { label: "Sports", to: "/campus-life", hash: "facilities" },
      { label: "Events", to: "/campus-life", hash: "events" },
      { label: "Gallery", to: "/gallery", hash: "" },
      { label: "Achievements", to: "/achievements", hash: "" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy text-background">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1.2fr]">
          <div>
            <Logo variant="footer" />
            <p className="mt-5 max-w-xs text-sm text-background/70">
              A premier English-medium school in {site.location} nurturing values, excellence and future-ready minds.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, href: site.social.instagram, label: "Instagram" },
                { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
                { Icon: Youtube, href: site.social.youtube, label: "YouTube" },
                { Icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-background/15 transition-colors hover:bg-background/10"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h3 className="font-serif text-base text-background">{g.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-background/70">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        hash={l.hash || undefined}
                        className="transition-colors hover:text-background"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-serif text-base text-background">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href={tel} className="hover:text-background">{site.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="flex flex-col gap-1">
                  <a href={mailto("Admissions enquiry")} className="hover:text-background">{site.emailAdmissions}</a>
                  <a href={`mailto:${site.emailContact}`} className="hover:text-background">{site.emailContact}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-background/10 pt-6 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.curriculum} • {site.location}</p>
        </div>
      </div>
    </footer>
  );
}


# Vidvas School — Full Site Build Plan

A premium, minimalist marketing site for Vidvas School. All 7 sections built in one pass with placeholder copy and AI-generated imagery. Forms link to mailto/WhatsApp (no backend).

## Design System (foundation, built first)

Tokens defined in `src/styles.css` via Tailwind v4 `@theme inline`:

- **Colors** (oklch): Deep Brand Blue (primary), Growth Green (secondary), Achievement Orange (accent), Pure White (bg), Soft Gray (surface), Dark Navy (foreground). 70/20/8/2 usage ratio enforced in components.
- **Type**: DM Serif Display (headings) + Inter (body/UI), loaded via `<link>` in `__root.tsx`.
- **Radius**: 24px sections/cards, 999px buttons.
- **Container**: max-w 1280px. Section padding: 120/80/64 (desktop/tablet/mobile).
- **Shadows**: soft elevation tokens (`--shadow-soft`, `--shadow-elevated`, `--shadow-glow`).
- **Motion**: 300ms ease-out global; reduced-motion respected.

Reusable primitives (`src/components/`):
- `SiteHeader` — sticky nav, transparent→white-blur on scroll, logo + mega menu + "Admissions Open" CTA
- `MegaMenu` — fade+slide panels (250ms) for Academics / Admissions / Achievements / Campus Life
- `MobileNav` — Sheet-based drawer
- `SiteFooter` — logo, quick links, contact, social, newsletter (mailto), copyright
- `StickyApply` — floating Apply / WhatsApp / Call buttons (mobile)
- `Section`, `SectionHeading`, `StatCounter`, `FeatureCard`, `TestimonialCard`, `FAQAccordion`, `CTABand`, `GalleryGrid` (masonry + lightbox), `Reveal` (scroll fade-up wrapper)

## Routes

All under `src/routes/` (TanStack file-based). Each route owns `head()` with unique title, description, OG tags. Root holds Organization JSON-LD (Vidvas School, Tirupati, AP State Board).

1. `index.tsx` — Home: Hero (word-by-word headline reveal, parallax image, floating shapes) → Stats Strip → About → Vision/Mission/Values → Leadership → Vidvas Way → Why Families Choose → Journey timeline → Academics preview → Beyond Classroom → Faculty → Achievements → Testimonials → FAQ → Admissions CTA
2. `academics.tsx` — Hero → Philosophy → Journey → Curriculum → Methodology → Smart Learning → Special Programs (Robotics, Coding) → Faculty → Achievements → FAQ → CTA
3. `admissions.tsx` — Hero → Why Vidvas → Eligibility table → Documents checklist → Process steps → Campus Visit → Contact card (mailto/tel/WhatsApp) → FAQ → CTA
4. `achievements.tsx` — Hero → Stats → Academic / Sports / Cultural / Technology / Competitions → Student Stories → Milestones timeline → CTA
5. `campus-life.tsx` — Hero → Life at Vidvas → Smart Classrooms / Library / Robotics Lab / Coding Lab / Sports / Yoga / Music / Dance / Archery → Events → Celebrations → Leadership → Gallery preview → Experiences → CTA
6. `gallery.tsx` — Filterable masonry (Campus, Classrooms, Activities, Events, Sports, Competitions, Celebrations, Annual Day, Tech, Faculty, Transport) + lightbox
7. `contact.tsx` — Hero → Address/phone/email/WhatsApp cards (placeholder data) → Map embed placeholder → Mailto enquiry form → FAQ

Plus: `sitemap.xml.ts` server route covering all 7 pages; `public/robots.txt`.

## Animations

Implemented with CSS + IntersectionObserver in a small `Reveal` component (no heavy lib). Variants: fade-up, reveal-left, reveal-right, scale-in, stagger. Hero headline = word-by-word stagger. Number counters on stats. Card hover: 8px lift + shadow + accent border + icon scale. Image hover: 1.05 scale + overlay fade. Buttons: lift + glow + arrow translate.

## Forms (display-only)

- Enquiry form → `mailto:admissions@vidvasschool.com` (placeholder address) with prefilled subject/body
- WhatsApp buttons → `https://wa.me/91XXXXXXXXXX?text=...` (placeholder number)
- Call buttons → `tel:+91XXXXXXXXXX`
- Newsletter → mailto

All placeholders centralised in `src/lib/site-config.ts` so you can swap in one place.

## Imagery

AI-generated via imagegen, saved to `src/assets/`:
- Hero (campus exterior, students learning), Academics hero, Admissions hero, Achievements hero, Campus Life hero, Gallery cover, Contact hero
- ~16 gallery photos across categories (varied compositions)
- 4 leadership portraits, 6 faculty portraits, 3 testimonial portraits
- Robotics/coding lab, sports, library scene

Premium photography style: warm natural light, candid, editorial. Generated in parallel.

## SEO / GEO / AEO

- Per-route `head()` with title, description, OG, canonical (relative paths — no domain yet)
- Root: viewport, charSet, og:site_name "Vidvas School", Organization JSON-LD (name, address Tirupati AP, contactPoint, sameAs)
- Admissions/Academics/Contact: FAQPage JSON-LD
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`, single H1/page)
- Target keywords woven naturally into copy: "Vidvas School", "Best School in Tirupati", "English Medium School in Tirupati", "AP State Board School in Tirupati", "School Admissions Tirupati"
- AEO: dedicated FAQ blocks with question-first headings ready for featured snippets

## Accessibility

- WCAG AA contrast via tokens, focus-visible rings, keyboard nav for mega menu (Radix-based), `aria-label` on icon buttons, alt text on every image, `prefers-reduced-motion` short-circuits Reveal + parallax, `h-dvh` for full-height sections.

## Technical Notes

- TanStack Start v1, Tailwind v4, shadcn/ui primitives (Sheet, Accordion, Dialog for lightbox, NavigationMenu for mega menu)
- No backend, no Lovable Cloud
- Single `<main>` per route lives inside each route component; `__root.tsx` only hosts shell + header/footer
- Site config (contact, social, nav) lives in `src/lib/site-config.ts` for easy editing
- Logo: text wordmark "Vidvas" in DM Serif until you provide the real logo

## What you'll need to replace later

All copy, contact numbers/email, social URLs, and AI imagery — centralised so swaps are quick. I'll flag these with a `// TODO: replace` comment near each placeholder cluster.

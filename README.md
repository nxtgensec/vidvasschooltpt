# Vidvas School — Official Website

> **"Where Values Meet Excellence"**  
> A premium, fully responsive marketing website for Vidvas School, Tirupati, Andhra Pradesh.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Live Preview](#2-live-preview)
3. [Tech Stack](#3-tech-stack)
4. [Project Structure](#4-project-structure)
5. [Pages & Routes](#5-pages--routes)
6. [Component Library](#6-component-library)
7. [Design System](#7-design-system)
8. [Site Configuration](#8-site-configuration)
9. [Getting Started](#9-getting-started)
10. [Available Scripts](#10-available-scripts)
11. [Building for Production](#11-building-for-production)
12. [Customisation Guide](#12-customisation-guide)
13. [SEO & Structured Data](#13-seo--structured-data)
14. [Accessibility](#14-accessibility)
15. [Contributing](#15-contributing)

---

## 1. Project Overview

This is the official website for **Vidvas School**, a premier English-medium institution in Tirupati following the Andhra Pradesh State Board curriculum. The website serves as the primary digital presence for the school — covering academics, admissions, campus life, achievements, gallery, and contact.

**Key characteristics:**

- **Static-first, server-rendered** — no backend, no database. All contact actions use `mailto:`, `tel:`, and WhatsApp deep links.
- **Config-driven** — every piece of school contact info, copy, and navigation is centralised in a single file (`src/lib/site-config.ts`), making updates easy without touching component code.
- **SEO-ready out of the box** — per-route `<title>`, meta descriptions, Open Graph tags, canonical URLs, and JSON-LD structured data (Organization, FAQPage schemas).
- **Performance-first animations** — scroll-triggered reveal animations via `IntersectionObserver` with zero JavaScript animation libraries. Fully respects `prefers-reduced-motion`.
- **Mobile-first, fully responsive** — dedicated mobile bottom navigation bar, sticky floating action buttons, and a full-screen hamburger menu on small screens.

---

## 2. Live Preview

| Environment | URL |
|---|---|
| Local development | `http://localhost:8080` |
| Network (LAN)     | `http://<your-local-ip>:8080` |

To start the dev server, see [Getting Started](#9-getting-started).

---

## 3. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Meta-framework | [TanStack Start](https://tanstack.com/start) | v1 |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) | v1 |
| UI Library | [React](https://react.dev) | v19 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) | v4 |
| Component primitives | [Radix UI](https://www.radix-ui.com) via [shadcn/ui](https://ui.shadcn.com) | Latest |
| Icons | [Lucide React](https://lucide.dev) | v0.575 |
| Fonts | DM Serif Display + Inter | via Google Fonts |
| Data fetching | [TanStack Query](https://tanstack.com/query) | v5 |
| Forms | [react-hook-form](https://react-hook-form.com) + [Zod](https://zod.dev) | v7 / v3 |
| Build tool | [Vite](https://vite.dev) | v7 |
| Server runtime | [Nitro](https://nitro.unjs.io) (Cloudflare Workers target) | v3 |
| Package manager | [Bun](https://bun.sh) | v1.3 |
| Language | TypeScript | v5.8 |
| Linting | ESLint v9 (flat config) | v9 |
| Formatting | Prettier | v3 |

---

## 4. Project Structure

```
vidvasschooltpt/
├── public/                        # Static assets served as-is
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/                    # Optimised image assets
│   │   ├── hero-campus.jpg
│   │   ├── classroom.jpg
│   │   ├── library.jpg
│   │   ├── sports.jpg
│   │   ├── arts.jpg
│   │   ├── robotics.jpg
│   │   ├── science.jpg
│   │   ├── events.jpg
│   │   ├── leader-1.jpg
│   │   ├── leader-2.jpg
│   │   └── vidvas-logo.asset.json # Logo CDN reference
│   │
│   ├── components/
│   │   ├── site/                  # School-specific custom components
│   │   │   ├── Button.tsx         # CTALink / unified CTA button
│   │   │   ├── CTABand.tsx        # Full-width call-to-action banner
│   │   │   ├── FAQ.tsx            # Animated accordion FAQ
│   │   │   ├── FeatureCard.tsx    # Icon + title + body card
│   │   │   ├── GalleryGrid.tsx    # Filterable masonry gallery + lightbox
│   │   │   ├── Logo.tsx           # School logo (header / footer variants)
│   │   │   ├── MobileBottomNav.tsx# Fixed bottom navigation (mobile only)
│   │   │   ├── PageHero.tsx       # Reusable inner-page hero section
│   │   │   ├── Reveal.tsx         # Scroll-triggered animation wrapper
│   │   │   ├── Section.tsx        # Page section layout + heading primitives
│   │   │   ├── SectionNav.tsx     # Sticky scrollspy sub-navigation bar
│   │   │   ├── SiteFooter.tsx     # Global site footer
│   │   │   ├── SiteHeader.tsx     # Global sticky header with mega-menu
│   │   │   ├── StatCounter.tsx    # Animated count-up number statistic
│   │   │   └── StickyApply.tsx    # Floating WhatsApp + Call FABs (mobile)
│   │   │
│   │   └── ui/                    # Generic shadcn/ui primitives
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       └── ...                # (full shadcn/ui component set)
│   │
│   ├── lib/
│   │   ├── site-config.ts         # ⭐ Single source of truth — all school content
│   │   ├── utils.ts               # cn() class merging helper
│   │   ├── error-capture.ts       # SSR error capture utility
│   │   ├── error-page.ts          # Static HTML fallback error page
│   │   └── config.server.ts       # Server-only environment config
│   │
│   ├── routes/                    # File-based pages (TanStack Router)
│   │   ├── __root.tsx             # Root shell — header, footer, mobile nav
│   │   ├── index.tsx              # Home page  (/)
│   │   ├── academics.tsx          # Academics  (/academics)
│   │   ├── admissions.tsx         # Admissions (/admissions)
│   │   ├── achievements.tsx       # Achievements (/achievements)
│   │   ├── campus-life.tsx        # Campus Life  (/campus-life)
│   │   ├── gallery.tsx            # Gallery      (/gallery)
│   │   ├── contact.tsx            # Contact      (/contact)
│   │   └── sitemap[.]xml.ts      # Auto-generated XML sitemap
│   │
│   ├── router.tsx                 # TanStack Router + QueryClient setup
│   ├── routeTree.gen.ts           # Auto-generated route tree (do not edit)
│   ├── server.ts                  # SSR server entry
│   └── styles.css                 # Global CSS — Tailwind v4 theme tokens
│
├── components.json                # shadcn/ui configuration
├── vite.config.ts                 # Vite / TanStack Start build config
├── bunfig.toml                    # Bun runtime config
├── package.json                   # Scripts and dependencies
├── tsconfig.json                  # TypeScript config
├── eslint.config.js               # ESLint 9 flat config
└── .prettierrc                    # Prettier formatting rules
```

---

## 5. Pages & Routes

Every route is server-rendered and has its own `<head>` with a unique title, meta description, OG tags, and canonical link.

| Page | URL | Description |
|---|---|---|
| **Home** | `/` | Hero, stats strip, About, Vision/Mission/Values, Leadership, The Vidvas Way (6 pillars), Academic Journey, Beyond Classroom, Parent Testimonials, FAQ |
| **Academics** | `/academics` | Philosophy, Academic Journey timeline, Curriculum details, Teaching Methodology (6 moves), Special Programs (Robotics & Coding), Faculty Excellence |
| **Admissions** | `/admissions` | Why Vidvas, Eligibility criteria, Documents checklist, 4-step admission process, Campus Visit booking, FAQ |
| **Achievements** | `/achievements` | Stats overview, Academic Excellence, Sports Excellence, Cultural & Tech achievements, Student Stories, School Milestones (2007–2025) |
| **Campus Life** | `/campus-life` | Facilities (labs, library, sports), Clubs & Activities, Events & Celebrations, Student Leadership (council/prefects), Gallery teaser |
| **Gallery** | `/gallery` | Filterable masonry photo gallery across 7 categories with a full-screen lightbox |
| **Contact** | `/contact` | 4 contact cards, enquiry form (mailto-based), Google Maps embed, FAQ |
| **Sitemap** | `/sitemap.xml` | Auto-generated XML sitemap for all public routes |
| **404** | any unmatched | Custom "Page not found" screen |

### Scrollspy Sub-Navigation

Each inner page features a **sticky scrollspy bar** (`SectionNav`) that sits just below the main header. As you scroll, the active section is automatically highlighted and the corresponding pill is scrolled into view on mobile.

Section IDs and labels are defined per-route in `site-config.ts → pageSections`.

---

## 6. Component Library

### Site Components (`src/components/site/`)

These are the school-specific building blocks unique to this project.

#### `SiteHeader`
Fixed header with transparent → frosted-glass scroll transition. Desktop shows a mega-menu dropdown per nav item (hover-triggered, scale-in animation). Mobile shows a full-height hamburger drawer. Includes an "Admissions Open" CTA button. Active route is highlighted.

#### `SiteFooter`
Dark navy footer with three sections: school branding + social icons, three link columns (Academics / Admissions / Campus Life), and a contact details column with address, phone, and email.

#### `MobileBottomNav`
Fixed bottom navigation bar visible only on mobile (`lg:hidden`). Five tabs: Home, Academics, Admissions, Achievements, Campus. Active tab shows a primary-colour fill and scale animation. Safe-area padding ensures correct rendering on iOS.

#### `StickyApply`
Floating action buttons (mobile only, bottom-right). WhatsApp button in green, Call button in primary blue. Deep-links directly to WhatsApp chat and the phone dialler.

#### `PageHero`
Reusable two-column hero for inner pages. Left: eyebrow badge + `h1` + intro paragraph. Right: hero image with floating blur-sphere decorations. Accepts `image`, `alt`, `eyebrow`, `title`, and `intro` props.

#### `Reveal`
Scroll-triggered animation wrapper. Uses `IntersectionObserver` — triggers once on first viewport entry, then disconnects. Four variants: `up` (default), `left`, `right`, `scale`. Optional `delay` in milliseconds. Fully respects `prefers-reduced-motion`.

#### `StatCounter`
Animated count-up component. Counts from 0 to `value` using `requestAnimationFrame` with a cubic ease. Triggers on first viewport entry via `IntersectionObserver`. Accepts `prefix`, `suffix`, and `label`.

#### `SectionNav`
Sticky scrollspy sub-navigation. Uses `IntersectionObserver` on each section to determine which is currently in view. Clicking a pill smoothly scrolls to the section. On mobile, the active pill is auto-scrolled into view horizontally.

#### `Section` / `SectionHeading` / `Eyebrow`
Layout primitives. `Section` wraps content in consistent vertical padding (`section-y`) and a max-width container. `SectionHeading` renders an optional eyebrow badge, an `h2`, and an intro paragraph. `Eyebrow` is a pill badge with a coloured dot.

#### `FeatureCard`
Card with an icon (in a rounded square), a serif heading, and body text. Hover state lifts the card and adds an accent border via `card-hover` utility.

#### `FAQ`
Custom accordion. One item open at a time. Smooth height animation using CSS `grid-rows-[0fr] → grid-rows-[1fr]` (no JS height measurement needed). Plus/minus icon toggle.

#### `CTABand`
Full-width call-to-action section with a deep navy background and animated floating glow shapes. Two buttons: "Apply Now" (primary) and "WhatsApp Us". Used at the bottom of every page.

#### `GalleryGrid`
Filterable masonry gallery using CSS `columns-`. Category filter pills at the top. Clicking an image opens a full-screen lightbox overlay (React state + Dialog pattern).

#### `CTALink` / `Button`
Unified CTA component. Renders `<Link>` from TanStack Router when `to=` is provided, and a plain `<a>` for external `href=`. Four style variants: `primary`, `secondary`, `outline`, `ghost`. Optional animated arrow icon.

---

## 7. Design System

The design system is defined entirely in `src/styles.css` via Tailwind CSS v4's `@theme inline` block, using **oklch colour space** for perceptual uniformity.

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--primary` | Deep Brand Blue (`oklch(0.38 0.15 255)`) | Buttons, active states, links |
| `--secondary` | Growth Green (`oklch(0.62 0.14 155)`) | Secondary actions, positive indicators |
| `--accent` | Achievement Orange (`oklch(0.72 0.17 55)`) | Highlights, achievement callouts |
| `--navy` | Deep Navy (`oklch(0.2 0.04 250)`) | Headings, body text |
| `--surface` | Off-White (`oklch(0.975 0.005 250)`) | Alternating section backgrounds |
| `--background` | Pure White | Default page background |
| `--muted-foreground` | Mid-Grey | Secondary text, captions |

### Typography

| Role | Font | Weight |
|---|---|---|
| Headings (`h1`–`h4`) | **DM Serif Display** | Regular (400) |
| Body & UI | **Inter** | 400 / 500 / 600 / 700 |

### Shadows

| Token | Use |
|---|---|
| `shadow-soft` | Cards, dropdowns — subtle lift |
| `shadow-elevated` | Hero images, card hover — strong lift |
| `shadow-glow` | Primary button hover — brand-coloured glow |

### Animation Utility Classes

| Class | Effect |
|---|---|
| `.reveal` + `.in-view` | Fade-up reveal on viewport entry |
| `.reveal-left.in-view` | Slide-in from left |
| `.reveal-right.in-view` | Slide-in from right |
| `.reveal-scale.in-view` | Scale-in reveal |
| `.card-hover` | Lift + accent border on hover |
| `.image-hover` | Subtle zoom on the inner `<img>` on hover |
| `.btn-primary-fx` | Lift + glow shadow on primary buttons |
| `.float-shape` | Slow floating idle animation (decorative blobs) |
| `.word-reveal` | Staggered per-word fade-up for hero headlines |

### Border Radius

Base radius is `1.5rem` (`--radius`). The scale extends from `sm` (1.25rem) to `4xl` (1.875rem + extra), giving the UI its characteristic rounded, friendly aesthetic.

---

## 8. Site Configuration

**`src/lib/site-config.ts`** is the single source of truth for all school-specific content. Update this one file to change contact details, social links, navigation labels, or page section IDs across the entire site.

```ts
export const site = {
  name: "Vidvas School",
  tagline: "Where Values Meet Excellence",
  location: "Tirupati, Andhra Pradesh",
  curriculum: "Andhra Pradesh State Board",
  email: "admissions@vidvasschool.com",      // TODO: replace with real email
  phone: "+91 90000 00000",                   // TODO: replace with real phone
  whatsapp: "919000000000",                   // TODO: replace with real WhatsApp number
  address: "Vidvas School Campus, Tirupati, Andhra Pradesh 517501, India",
  social: {
    instagram: "https://instagram.com/vidvasschool",
    facebook:  "https://facebook.com/vidvasschool",
    youtube:   "https://youtube.com/@vidvasschool",
    linkedin:  "https://linkedin.com/company/vidvasschool",
  },
};
```

The file also exports:
- `mailto(subject, body)` — generates a `mailto:` URL
- `whatsapp(message)` — generates a `wa.me` deep link
- `tel` — formatted `tel:` link
- `nav` — full navigation structure with mega-menu items
- `pageSections` — per-page section IDs and labels for the scrollspy sub-navigation

---

## 9. Getting Started

### Prerequisites

| Tool | Minimum version | Install |
|---|---|---|
| [Bun](https://bun.sh) | v1.0+ | [bun.sh](https://bun.sh) |
| [Node.js](https://nodejs.org) | v18+ (optional, for tooling) | [nodejs.org](https://nodejs.org) |

### Install & Run

```bash
# 1. Clone the repository
git clone <repository-url>
cd vidvasschooltpt

# 2. Install dependencies
bun install

# 3. Start the development server
bun run dev
```

The site will be available at **http://localhost:8080**.

> **Windows users:** If `bun` is not found in your shell PATH, use the full path:
> ```
> C:\Users\<your-username>\.bun\bin\bun.exe run dev
> ```
> Or add `C:\Users\<your-username>\.bun\bin` to your system PATH.

---

## 10. Available Scripts

All scripts are defined in `package.json` and run via Bun:

| Script | Command | Description |
|---|---|---|
| Development server | `bun run dev` | Starts Vite dev server at `localhost:8080` with HMR |
| Production build | `bun run build` | Full SSR build for deployment (Nitro/Cloudflare target) |
| Dev-mode build | `bun run build:dev` | Production build with development mode flags |
| Preview build | `bun run preview` | Serves the production build locally for testing |
| Lint | `bun run lint` | Runs ESLint v9 across the entire project |
| Format | `bun run format` | Runs Prettier to auto-format all files |

---

## 11. Building for Production

```bash
# Build for production (default target: Cloudflare Workers via Nitro)
bun run build

# Preview the production build locally
bun run preview
```

The build process:
1. **Vite** bundles and tree-shakes all client assets.
2. **TanStack Start** renders each route server-side (SSR).
3. **Nitro** wraps the output for the configured server target (default: Cloudflare).

Output is placed in `.output/` (Nitro) and `dist/` (Vite client assets).

### Deploying to Cloudflare Pages

```bash
bun run build
# Then deploy the .output directory to Cloudflare Pages
# or use Wrangler: npx wrangler pages deploy .output/public
```

To target a different deployment platform (Vercel, Node.js, etc.), change the Nitro preset in `vite.config.ts`.

---

## 12. Customisation Guide

### Update School Contact Details

Edit **`src/lib/site-config.ts`** — this is the only file you need to touch for contact info:

```ts
phone: "+91 98765 43210",
email: "info@yourschool.com",
whatsapp: "919876543210",
address: "123 School Road, Tirupati, AP 517501",
```

### Swap Logo

Place your logo image (PNG, SVG, or JPEG) in `src/assets/` and update the import in `src/components/site/Logo.tsx`:

```ts
import logoSrc from "@/assets/vidvas-logo.png";
```

### Replace Hero & Section Images

Drop new images into `src/assets/` using the same filenames. Vite handles image optimisation automatically. Alternatively, change the import paths in the relevant route files.

### Add or Rename Navigation Items

In `src/lib/site-config.ts`, update the `nav` array:

```ts
export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Academics", to: "/academics", menu: [...] },
  // Add new items here
  { label: "Blog", to: "/blog" },
];
```

### Add a New Page

1. Create `src/routes/your-page.tsx`
2. Export a `Route` with `createFileRoute("/your-page")({ ... })`
3. Add a `head()` function for SEO metadata
4. The route tree is auto-generated — no manual registration needed
5. Optionally add the page to `pageSections` in `site-config.ts` for scrollspy support

### Add Sections to an Existing Page

1. Add a `<Section id="new-section">` block in the route file
2. Add `{ id: "new-section", label: "New Section" }` to `pageSections["/your-page"]` in `site-config.ts`

---

## 13. SEO & Structured Data

### Per-Route Metadata

Every route exports a `head()` function that injects:
- `<title>` — unique per page
- `<meta name="description">` — unique per page
- `<meta property="og:*">` — Open Graph for social sharing
- `<link rel="canonical">` — prevents duplicate content indexing

### JSON-LD Structured Data

| Schema | Location | Details |
|---|---|---|
| `EducationalOrganization` | `__root.tsx` | Global — name, address, contact point, social profiles |
| `FAQPage` | `academics.tsx`, `admissions.tsx`, `contact.tsx` | Page-specific FAQ structured data |

### XML Sitemap

An auto-generated sitemap is served at `/sitemap.xml` via `src/routes/sitemap[.]xml.ts`.  
Update the `BASE_URL` constant in that file to match your production domain.

---

## 14. Accessibility

- **Semantic HTML** throughout — single `<h1>` per page, `<article>`, `<figure>`/`<figcaption>`, `<ol>` for ordered steps.
- **`aria-label`** on all icon-only interactive elements (social icon links, hamburger button, gallery close button).
- **Keyboard navigation** — all interactive elements are reachable via Tab and activate on Enter/Space.
- **Focus management** — TanStack Router scrolls to the top on navigation; hash links smoothly scroll to sections.
- **Reduced motion** — all animations are suppressed via a single `@media (prefers-reduced-motion: reduce)` block in `styles.css`.
- **Colour contrast** — oklch-based colour tokens ensure WCAG AA contrast ratios for primary text on white backgrounds.
- **`alt` text** on all `<img>` elements. Decorative images use `alt=""`.

> Full WCAG compliance validation requires manual testing with screen readers and assistive technologies.

---

## 15. Contributing

### Code Style

- **TypeScript** — strict mode, no implicit any. All props typed.
- **Components** — functional components with named exports. Co-locate types with the component.
- **Styling** — Tailwind utility classes only. No inline styles. Custom utilities go in `src/styles.css`.
- **Configuration** — all school-specific content belongs in `src/lib/site-config.ts`, not hardcoded in components.
- **Imports** — use the `@/` path alias for all `src/` imports.

### Before Committing

```bash
bun run lint     # Fix any lint errors
bun run format   # Auto-format with Prettier
```

---

## Licence

This project is private and proprietary to Vidvas School. All rights reserved.

---

<p align="center">Built with ❤️ for Vidvas School, Tirupati · Andhra Pradesh · India</p>

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Heart,
  Trophy,
  Compass,
  GraduationCap,
  FlaskConical,
  Cpu,
  Palette,
  ShieldCheck,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroCampus from "@/assets/hero-campus.jpg";
import vidvasBuilding from "@/assets/vidvas-building.jpg";
import classroom from "@/assets/classroom.jpg";
import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";
import arts from "@/assets/arts.jpg";
import robotics from "@/assets/robotics.jpg";
import science from "@/assets/science.jpg";
import events from "@/assets/events.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import achievement1 from "@/assets/achievements/achievement-1.png";
import achievement2 from "@/assets/achievements/achievement-2.png";
import achievement3 from "@/assets/achievements/achievement-3.png";
import achievement4 from "@/assets/achievements/achievement-4.png";
import achievement5 from "@/assets/achievements/achievement-5.png";
import achievement6 from "@/assets/achievements/achievement-6.png";

import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { FeatureCard } from "@/components/site/FeatureCard";
import { CTABand } from "@/components/site/CTABand";
import { FAQ } from "@/components/site/FAQ";
import { CTALink } from "@/components/site/Button";
import { whatsapp } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vidvas School — Where Values Meet Excellence | Tirupati" },
      {
        name: "description",
        content:
          "A premier English-medium school in Tirupati nurturing values, academic excellence and future-ready skills. Admissions open for 2026.",
      },
      { property: "og:title", content: "Vidvas School — Where Values Meet Excellence" },
      {
        property: "og:description",
        content:
          "AP State Board curriculum, robotics, coding, sports and holistic development in the heart of Tirupati.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

// Hero slides — using student achievement images
const heroSlides = [
  { src: achievement1, alt: "Student achievement - Best School Award" },
  { src: achievement2, alt: "Student achievement - Science Fair Winners" },
  { src: achievement3, alt: "Student achievement - Academic Excellence" },
  { src: achievement4, alt: "Student achievement - Sports Champions" },
  { src: achievement5, alt: "Student achievement - Coding Winners" },
  { src: achievement6, alt: "Student achievement - Cultural Excellence" },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      {/* Dynamic slideshow background */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              aria-hidden={i !== current}
              className="size-full object-cover object-center scale-105"
              width={1920}
              height={1080}
            />
            {/* Individual slide gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/75 to-navy/50" />
          </div>
        ))}
      </div>

      {/* Slide indicators — modern pill style */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-md lg:left-12 lg:translate-x-0">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current 
                ? "w-8 bg-accent shadow-[0_0_12px_rgba(255,183,77,0.6)]" 
                : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute -left-32 top-20 size-[600px] rounded-full bg-primary/20 blur-[140px] animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="pointer-events-none absolute -right-32 bottom-20 size-[500px] rounded-full bg-accent/15 blur-[120px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />

      {/* Main hero content */}
      <div className="container-page relative z-20 flex min-h-screen items-center justify-center py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl text-center">
          {/* School branding */}
          <Reveal>
            <div className="inline-flex flex-col gap-2">
              <h1 className="font-display text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Vidvas School
              </h1>
              <div className="flex items-baseline justify-center gap-3 text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                <span className="font-body font-light text-white/90">Where</span>
                <span 
                  style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Bradley Hand', cursive" }} 
                  className="font-bold text-accent drop-shadow-[0_4px_12px_rgba(255,183,77,0.6)]"
                >
                  values
                </span>
                <span className="font-body font-light text-white/90">meet</span>
                <span 
                  style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Bradley Hand', cursive" }} 
                  className="font-bold text-accent drop-shadow-[0_4px_12px_rgba(255,183,77,0.6)]"
                >
                  excellence
                </span>
              </div>
            </div>
          </Reveal>

          {/* Status badge */}
          <Reveal delay={150}>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 backdrop-blur-sm">
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-accent" />
              </span>
              <span className="font-caption text-white">
                Admissions Open 2026–27
              </span>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal delay={300}>
            <p className="mt-10 mx-auto max-w-3xl font-body text-xl leading-relaxed text-white/85 sm:text-2xl lg:text-3xl">
              A premier English-medium school in Tirupati, nurturing <span className="font-semibold text-white">confident, compassionate, future-ready learners</span> through the AP State Board curriculum.
            </p>
          </Reveal>

          {/* Action buttons */}
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-4 text-base font-semibold text-white shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(99,102,241,0.5)]"
              >
                Apply for Admission
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <a
                href={whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/20"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { value: 10, suffix: "+", label: "Years of excellence" },
    { value: 2400, suffix: "+", label: "Students nurtured" },
    { value: 50, suffix: "+", label: "Expert faculty" },
    { value: 100, suffix: "%", label: "Class X excellence" },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <StatCounter {...s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left">
          <div className="image-hover aspect-[4/5] rounded-[2rem] shadow-elevated">
            <img src={classroom} alt="Smart classroom at Vidvas School" width={1280} height={896} loading="lazy" className="size-full object-cover" />
          </div>
        </Reveal>
        <Reveal variant="right">
          <SectionHeading
            eyebrow="About Vidvas"
            title={<>A school where character is taught with the same care as concepts.</>}
            intro="For nearly two decades, Vidvas School has been shaping young minds in Tirupati — combining timeless Indian values with a modern, future-ready curriculum."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Heart, t: "Values-first", d: "Every learning moment is rooted in empathy, integrity and respect." },
              { icon: Sparkles, t: "Excellence", d: "Rigorous academics paired with personal mentorship." },
              { icon: Compass, t: "Creativity", d: "Art, music, design thinking and project-based learning." },
              { icon: ShieldCheck, t: "Safety & Care", d: "A secure campus where every child is seen and supported." },
            ].map((p) => (
              <div key={p.t} className="flex gap-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy">{p.t}</p>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function VisionMission() {
  return (
    <Section id="vision" className="bg-surface">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Vision · Mission · Values"
          title="The compass that guides every decision at Vidvas."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          {
            icon: Compass,
            t: "Our Vision",
            d: "To be South India's most loved school — known for kind, courageous learners ready for a rapidly changing world.",
          },
          {
            icon: Heart,
            t: "Our Mission",
            d: "Nurture children through a values-led, concept-first education that honours each child's unique pace and potential.",
          },
          {
            icon: Star,
            t: "Our Values",
            d: "Integrity · Excellence · Creativity · Empathy · Leadership · Curiosity. The pillars woven into every classroom and corridor.",
          },
        ].map((p, i) => (
          <Reveal key={p.t} delay={i * 100}>
            <FeatureCard icon={<p.icon className="size-5" />} title={p.t}>
              {p.d}
            </FeatureCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Leadership() {
  const leaders = [
    { img: leader1, name: "Jayachandra Reddy T", role: "Chairman", bio: "Visionary founder who built Vidvas from the ground up with a deep commitment to values-based education." },
    { img: leader2, name: "Subbanaidu V", role: "Academic Director", bio: "Drives academic excellence and curriculum innovation across all classes at Vidvas School." },
    { img: leader1, name: "Madana Mohan A", role: "Admin Director", bio: "Ensures smooth daily operations and a safe, well-organised campus environment for every child." },
    { img: leader2, name: "Dr. Lakshmi Reddy", role: "Principal", bio: "Two decades of educational leadership across State Board and CBSE institutions in Andhra Pradesh." },
  ];

  // Duplicate for seamless left-to-right infinite loop
  const all = [...leaders, ...leaders, ...leaders];

  return (
    <Section id="leadership">
      <Reveal>
        <SectionHeading
          eyebrow="Leadership"
          title="Educators who lead by example."
          intro="Meet the people steering Vidvas with experience, warmth and conviction."
        />
      </Reveal>

      {/* Left-to-right marquee */}
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-5 marquee-track">
          {all.map((l, i) => (
            <article
              key={i}
              className="shrink-0 w-68 overflow-hidden rounded-3xl border border-border bg-background shadow-soft"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={l.img}
                  alt={l.name}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{l.role}</p>
                <h3 className="mt-1 font-serif text-lg text-navy">{l.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{l.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function VidvasWay() {
  const pillars = [
    { icon: GraduationCap, t: "Academic rigour", d: "Mastery-based learning with frequent low-stakes assessments." },
    { icon: Cpu, t: "Future skills", d: "Robotics, coding, design and digital literacy from primary classes." },
    { icon: Palette, t: "Creative arts", d: "Music, dance, drama and visual arts as core, not extra." },
    { icon: Trophy, t: "Sports & wellness", d: "Daily PE, yoga and inter-school competitions." },
    { icon: Heart, t: "Character & values", d: "Weekly value circles and community service." },
    { icon: Sparkles, t: "Personal mentorship", d: "A dedicated mentor for every child across the year." },
  ];
  return (
    <Section id="way" className="bg-surface">
      <Reveal>
        <SectionHeading
          eyebrow="The Vidvas Way"
          title="Six pillars. One unforgettable school experience."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.t} delay={i * 70}>
            <FeatureCard icon={<p.icon className="size-5" />} title={p.t}>{p.d}</FeatureCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Journey() {
  const steps = [
    { y: "Pre-Primary", d: "Play, exploration and joyful early literacy." },
    { y: "Primary", d: "Concept-first foundations in language, math and inquiry." },
    { y: "Middle School", d: "Project-based learning across STEM, arts and social science." },
    { y: "High School", d: "Board preparation, leadership, and career mentoring." },
  ];
  return (
    <Section id="journey">
      <Reveal>
        <SectionHeading
          eyebrow="The Vidvas Journey"
          title="One continuous arc from curious child to confident graduate."
        />
      </Reveal>
      <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.y} delay={i * 80}>
            <li className="card-hover relative h-full rounded-3xl border border-border bg-background p-6 shadow-soft md:p-8">
              <span className="font-serif text-5xl text-primary/30">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-xl text-navy">{s.y}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function Beyond() {
  const items = [
    { img: sports, title: "Sports", d: "Cricket, athletics, archery, basketball" },
    { img: arts, title: "Arts & Music", d: "Classical and contemporary, dance and drama" },
    { img: robotics, title: "Robotics & Coding", d: "Hands-on STEM from Class 3 onwards" },
    { img: library, title: "Library & Reading", d: "10,000+ titles, weekly reading hour" },
  ];
  return (
    <Section id="beyond" className="bg-surface">
      <Reveal>
        <SectionHeading
          eyebrow="Beyond the Classroom"
          title="Children grow in many directions. We make room for all of them."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80}>
            <article className="card-hover overflow-hidden rounded-3xl border border-border bg-background shadow-soft">
              <div className="image-hover aspect-[4/3]">
                <img src={it.img} alt={it.title} width={1280} height={896} loading="lazy" className="size-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-navy">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    { q: "Vidvas has become a second home for our daughter. The teachers know her, challenge her and care for her.", a: "Anitha & Suresh, Class 7 parents" },
    { q: "The robotics program lit a spark in our son. He now codes for fun on weekends.", a: "Padma, Class 9 parent" },
    { q: "Confidence, kindness, curiosity — these are the things we see growing in our child.", a: "Kiran, Class 4 parent" },
    { q: "The teachers genuinely know each child. My son has never felt lost or left behind.", a: "Ramesh, Class 5 parent" },
    { q: "We visited three schools before Vidvas. The warmth here was instant — we signed up the same day.", a: "Sunitha & Prakash, Class 2 parents" },
    { q: "Sports, robotics, academics — our daughter is thriving in every direction.", a: "Meena, Class 8 parent" },
    { q: "The individual attention each child gets here is remarkable. Teachers remember every student's name.", a: "Priya & Raj, Class 6 parents" },
    { q: "Our son's confidence has grown tremendously. He now participates in debates and cultural programs.", a: "Lakshmi, Class 9 parent" },
    { q: "The school's focus on values alongside academics is exactly what we wanted for our daughter.", a: "Kavitha & Ravi, Class 3 parents" },
    { q: "The STEM programs are excellent. My daughter built her first robot in Class 5.", a: "Deepa, Class 8 parent" },
    { q: "Vidvas doesn't just educate children, it nurtures their character and creativity.", a: "Sriram & Vani, Class 4 parents" },
    { q: "The transport system is safe and reliable. We never worry about our child's journey to school.", a: "Madhavi, Class 6 parent" },
  ];
  const all = [...items, ...items, ...items];

  return (
    <Section id="voices">
      <Reveal>
        <SectionHeading
          eyebrow="Parent Voices"
          title="Why families choose Vidvas."
        />
      </Reveal>
      {/* Left-to-right scrolling marquee */}
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-5 marquee-track">
          {all.map((t, i) => (
            <figure
              key={i}
              className="shrink-0 w-80 rounded-3xl border border-border bg-background p-6 shadow-soft"
            >
              <Quote className="size-7 text-accent" />
              <blockquote className="mt-4 text-sm text-navy">"{t.q}"</blockquote>
              <figcaption className="mt-5 text-xs font-medium text-muted-foreground">{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Gallery() {
  const galleryImages = [
    // Achievement images first
    { src: achievement1, title: "Olympiad Gold Medal Achievers", desc: "Our students excel in national mathematics and science olympiads", category: "Achievement" },
    { src: achievement2, title: "Parents Teachers Meet", desc: "Strengthening partnership between families and educators", category: "Achievement" },
    { src: achievement3, title: "Festival Vibes (Sankranti)", desc: "Celebrating traditional festivals with cultural programs", category: "Achievement" },
    { src: achievement4, title: "Olympiad Excellence", desc: "Consistent performance in inter-school academic competitions", category: "Achievement" },
    { src: achievement5, title: "Kids Graduation", desc: "Proud graduation ceremony for our young achievers", category: "Achievement" },
    { src: achievement6, title: "2025 Top Rank Students", desc: "Celebrating our academic toppers and merit holders", category: "Achievement" },
    // Campus facilities
    { src: classroom, title: "Smart Classrooms", desc: "Interactive digital learning environments", category: "Facilities" },
    { src: library, title: "Resource Library", desc: "Comprehensive collection and study spaces", category: "Facilities" },
    { src: robotics, title: "STEM Innovation Lab", desc: "Advanced robotics and technology center", category: "Facilities" },
    { src: science, title: "Science Laboratory", desc: "State-of-the-art equipment and apparatus", category: "Facilities" },
    { src: sports, title: "Sports Complex", desc: "Professional athletic facilities and grounds", category: "Facilities" },
    { src: arts, title: "Creative Arts Studio", desc: "Music, dance and visual arts spaces", category: "Facilities" },
  ];

  return (
    <Section id="gallery" className="bg-surface">
      <Reveal>
        <SectionHeading
          eyebrow="Campus Gallery"
          title="Excellence in action at Vidvas."
          intro="From student achievements to world-class facilities - witness the Vidvas experience."
        />
      </Reveal>
      
      <div className="mt-12">
        {/* Achievement Gallery */}
        <div className="mb-16">
          <Reveal>
            <h3 className="mb-8 font-heading text-2xl text-navy lg:text-3xl">Recent Achievements</h3>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.filter(img => img.category === "Achievement").map((image, i) => (
              <Reveal key={image.title} delay={i * 80}>
                <article className="card-hover group overflow-hidden rounded-3xl border border-border bg-background shadow-elevated">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="size-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="font-caption rounded-full bg-accent px-3 py-1.5 text-navy">{image.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading text-xl text-navy">{image.title}</h4>
                    <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">{image.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Campus Facilities */}
        <div>
          <Reveal>
            <h3 className="mb-8 font-heading text-2xl text-navy lg:text-3xl">Campus Facilities</h3>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.filter(img => img.category === "Facilities").map((image, i) => (
              <Reveal key={image.title} delay={i * 80}>
                <article className="card-hover group overflow-hidden rounded-3xl border border-border bg-background shadow-elevated">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="size-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="font-caption rounded-full bg-primary px-3 py-1.5 text-white">{image.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading text-xl text-navy">{image.title}</h4>
                    <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground">{image.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced CTA */}
      <Reveal delay={800}>
        <div className="mt-16 text-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-semibold text-white shadow-elevated transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">See more photos and virtual campus tour</p>
        </div>
      </Reveal>
    </Section>
  );
}

function HomeFAQ() {
  return (
    <Section id="faq" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions parents often ask."
            intro="Can't find what you're looking for? Our admissions team is a message away."
          />
          <div className="mt-6">
            <CTALink href={whatsapp()} external variant="outline" withArrow={false}>
              Chat on WhatsApp
            </CTALink>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <FAQ
            items={[
              { q: "What curriculum does Vidvas School follow?", a: "Vidvas follows the Andhra Pradesh State Board curriculum, delivered in English medium with strong concept-first pedagogy." },
              { q: "What classes are available at Vidvas School?", a: "We offer education from Pre-Primary through Class X, with seamless progression and personal mentorship at each stage." },
              { q: "How can I apply for admission?", a: "Submit the enquiry form, visit the campus, complete the simple assessment, and our team will guide you through the documentation." },
              { q: "Where is Vidvas School located?", a: "Vidvas School is located in Tirupati, Andhra Pradesh, easily accessible from all parts of the city." },
              { q: "Does the school offer transport?", a: "Yes — a fleet of GPS-tracked buses with trained attendants serves all major routes in and around Tirupati." },
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <VisionMission />
      <Leadership />
      <VidvasWay />
      <Journey />
      <Beyond />
      <Testimonials />
      <Gallery />
      <HomeFAQ />
      <CTABand />
    </>
  );
}

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

import heroCampus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/classroom.jpg";
import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";
import arts from "@/assets/arts.jpg";
import robotics from "@/assets/robotics.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";

import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
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

const headline = "Where values meet excellence.";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -left-32 top-10 size-80 rounded-full bg-primary/15 blur-3xl float-shape" />
      <div
        className="pointer-events-none absolute -right-28 top-40 size-96 rounded-full bg-accent/20 blur-3xl float-shape"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 size-72 rounded-full bg-secondary/15 blur-3xl float-shape"
        style={{ animationDelay: "6s" }}
      />

      <div className="container-page relative grid items-center gap-12 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-32">
        <div>
          <Eyebrow>Admissions Open 2026–27</Eyebrow>
          <h1 className="word-reveal mt-6 text-balance font-serif text-4xl leading-[1.05] text-navy sm:text-5xl md:text-6xl lg:text-7xl">
            {headline.split(" ").map((w, i) => (
              <span key={i} style={{ animationDelay: `${i * 90}ms` }}>
                {w === "excellence." ? (
                  <span className="text-primary">{w}</span>
                ) : (
                  w
                )}
                {i < headline.split(" ").length - 1 && " "}
              </span>
            ))}
          </h1>
          <Reveal delay={800}>
            <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
              Vidvas School is a premier English-medium school in Tirupati, shaping confident, kind and future-ready learners through the Andhra Pradesh State Board curriculum.
            </p>
          </Reveal>
          <Reveal delay={950}>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTALink to="/admissions">Apply for Admission</CTALink>
              <CTALink to="/campus-life" variant="outline" withArrow={false}>
                Explore Campus Life
              </CTALink>
            </div>
          </Reveal>
          <Reveal delay={1100}>
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[leader1, leader2, leader1].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="size-9 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <p>
                <span className="font-semibold text-navy">2,400+ families</span> trust Vidvas with their children's future.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={400}>
          <div className="relative">
            <div className="image-hover aspect-[4/5] rounded-[2rem] shadow-elevated">
              <img
                src={heroCampus}
                alt="Vidvas School campus with students walking at golden hour"
                width={1600}
                height={1024}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-4 shadow-soft md:block">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-secondary/15 text-secondary">
                  <Trophy className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Class X result</p>
                  <p className="font-serif text-lg text-navy">98% distinction</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-10 hidden rounded-2xl border border-border bg-background p-4 shadow-soft md:block">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
                  <Star className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Best School</p>
                  <p className="font-serif text-lg text-navy">Tirupati 2025</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { value: 18, suffix: "+", label: "Years of excellence" },
    { value: 2400, suffix: "+", label: "Students nurtured" },
    { value: 120, suffix: "+", label: "Expert faculty" },
    { value: 98, suffix: "%", label: "Class X distinctions" },
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
    <Section>
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
    <Section className="bg-surface">
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
    { img: leader1, name: "Dr. Lakshmi Reddy", role: "Principal", bio: "Two decades of educational leadership across CBSE and State Board institutions." },
    { img: leader2, name: "Mr. Ravi Kumar", role: "Director, Academics", bio: "Curriculum designer focused on inquiry-based, concept-first learning." },
  ];
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Leadership"
          title="Educators who lead by example."
          intro="Meet the people steering Vidvas with experience, warmth and conviction."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {leaders.map((l, i) => (
          <Reveal key={l.name} delay={i * 100}>
            <article className="card-hover overflow-hidden rounded-3xl border border-border bg-background shadow-soft">
              <div className="grid sm:grid-cols-[200px_1fr]">
                <div className="image-hover aspect-square sm:aspect-auto">
                  <img src={l.img} alt={l.name} width={768} height={896} loading="lazy" className="size-full object-cover" />
                </div>
                <div className="flex flex-col justify-center gap-2 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{l.role}</p>
                  <h3 className="font-serif text-2xl text-navy">{l.name}</h3>
                  <p className="text-sm text-muted-foreground">{l.bio}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
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
    <Section className="bg-surface">
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
    <Section>
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
    <Section className="bg-surface">
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
    {
      q: "Vidvas has become a second home for our daughter. The teachers know her, challenge her and care for her.",
      a: "Anitha & Suresh, Class 7 parents",
    },
    {
      q: "The robotics program lit a spark in our son. He now codes for fun on weekends.",
      a: "Padma, Class 9 parent",
    },
    {
      q: "Confidence, kindness, curiosity — these are the things we see growing in our child.",
      a: "Kiran, Class 4 parent",
    },
  ];
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Parent Voices"
          title="Why families choose Vidvas."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.a} delay={i * 100}>
            <figure className="card-hover h-full rounded-3xl border border-border bg-background p-6 shadow-soft md:p-8">
              <Quote className="size-7 text-accent" />
              <blockquote className="mt-4 text-base text-navy">"{t.q}"</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">{t.a}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function HomeFAQ() {
  return (
    <Section className="bg-surface">
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
      <HomeFAQ />
      <CTABand />
    </>
  );
}

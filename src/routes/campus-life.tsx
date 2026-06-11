import { createFileRoute, Link } from "@tanstack/react-router";
import { Music, Palette, Trophy, Sparkles, Activity, Target, BookOpen, Cpu } from "lucide-react";

import classroom from "@/assets/classroom.jpg";
import library from "@/assets/library.jpg";
import robotics from "@/assets/robotics.jpg";
import sports from "@/assets/sports.jpg";
import arts from "@/assets/arts.jpg";
import events from "@/assets/events.jpg";
import science from "@/assets/science.jpg";

import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FeatureCard } from "@/components/site/FeatureCard";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/campus-life")({
  head: () => ({
    meta: [
      { title: "Campus Life — Vidvas School Tirupati" },
      { name: "description", content: "Sports, arts, events, leadership and labs — explore the full Vidvas campus experience in Tirupati." },
      { property: "og:title", content: "Campus Life at Vidvas School" },
      { property: "og:description", content: "Discover everything happening beyond the classroom at Vidvas." },
      { property: "og:url", content: "/campus-life" },
    ],
    links: [{ rel: "canonical", href: "/campus-life" }],
  }),
  component: CampusLifePage,
});

function CampusLifePage() {
  const facilities = [
    { img: classroom, title: "Smart Classrooms", d: "Interactive displays, flexible seating, natural light." },
    { img: library, title: "Library", d: "10,000+ titles across fiction, science and the arts." },
    { img: robotics, title: "Robotics Lab", d: "LEGO, Arduino, microcontrollers and hands-on projects." },
    { img: science, title: "Science Labs", d: "Dedicated physics, chemistry and biology labs." },
    { img: sports, title: "Sports Ground", d: "Cricket, athletics, basketball and football fields." },
    { img: arts, title: "Music & Dance", d: "Studios for classical and contemporary practice." },
  ];

  const activities = [
    { icon: Activity, t: "Yoga & wellness", d: "Daily morning yoga, mindfulness and PE." },
    { icon: Target, t: "Archery", d: "Inter-school archery training programme." },
    { icon: Music, t: "Music", d: "Vocal, keyboard, percussion and choir." },
    { icon: Palette, t: "Visual arts", d: "Painting, pottery and design studios." },
    { icon: Trophy, t: "Sports clubs", d: "Cricket, football, basketball, chess." },
    { icon: Cpu, t: "Tech clubs", d: "Robotics, coding, electronics and AI." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title={<>A campus that <span className="text-primary">comes alive</span> every single day.</>}
        intro="Sports, music, science, debate, leadership — at Vidvas, every child finds something to fall in love with."
        image={arts}
        imageAlt="Students performing at Vidvas"
      />

      <Section>
        <Reveal><SectionHeading eyebrow="Facilities" title="Built for every kind of learner." /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <article className="card-hover overflow-hidden rounded-3xl border border-border bg-background shadow-soft">
                <div className="image-hover aspect-[4/3]">
                  <img src={f.img} alt={f.title} loading="lazy" className="size-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-navy">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <Reveal><SectionHeading eyebrow="Activities" title="A world of clubs and disciplines." /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.t} delay={i * 60}><FeatureCard icon={<a.icon className="size-5" />} title={a.t}>{a.d}</FeatureCard></Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="image-hover aspect-[4/3] rounded-[2rem] shadow-elevated">
              <img src={events} alt="Annual day at Vidvas" loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
          <Reveal variant="right">
            <SectionHeading eyebrow="Events & Celebrations" title="Memories that last a lifetime." intro="Annual day, sports day, science fair, cultural fests and traditional celebrations across the year." />
            <ul className="mt-6 grid gap-3 text-sm text-navy md:text-base">
              {[
                "Annual Day — every December",
                "Sports Day — January",
                "Science & Innovation Fair — August",
                "Cultural Day, Diwali, Independence Day & more",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{l}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface">
        <Reveal><SectionHeading eyebrow="Student Leadership" title="Voices, choices, responsibility." intro="A student council elected each year leads events, peer mentorship and community service." /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Sparkles, t: "Student Council", d: "Head boy, head girl, prefects and club captains." },
            { icon: BookOpen, t: "Peer mentorship", d: "Senior students mentor juniors academically and socially." },
            { icon: Trophy, t: "Community service", d: "Monthly outreach with NGOs and local community." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 80}><FeatureCard icon={<p.icon className="size-5" />} title={p.t}>{p.d}</FeatureCard></Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Gallery" title="See campus life in pictures." intro="Browse a curated set of moments from across our campus." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8">
            <Link to="/gallery" className="btn-primary-fx inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Open Gallery
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTABand title="Come experience a day at Vidvas" subtitle="Book a campus visit to see life at Vidvas firsthand." />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal, Music, Cpu, BookOpen, Award, Quote } from "lucide-react";

import events from "@/assets/events.jpg";
import sports from "@/assets/sports.jpg";

import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { FeatureCard } from "@/components/site/FeatureCard";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Vidvas School Tirupati" },
      { name: "description", content: "Academic, sports, cultural and technology achievements of Vidvas School students in Tirupati." },
      { property: "og:title", content: "Achievements — Vidvas School" },
      { property: "og:description", content: "Top ranks, medals and stories from Vidvas students." },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title={<>Excellence is a <span className="text-primary">daily habit.</span></>}
        intro="From state-level toppers to national sports medallists — Vidvas students show up, give their best and lead with humility."
        image={events}
        imageAlt="Cultural performance at Vidvas School"
      />

      <section id="stats" className="border-y border-border bg-background">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
          {[
            { value: 98, suffix: "%", label: "Class X distinctions" },
            { value: 240, suffix: "+", label: "State-level medals" },
            { value: 18, suffix: "", label: "National finalists" },
            { value: 75, suffix: "+", label: "Cultural awards" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}><StatCounter {...s} /></Reveal>
          ))}
        </div>
      </section>

      <Section id="academic">
        <Reveal>
          <SectionHeading eyebrow="Academic Excellence" title="Where understanding turns into results." intro="Consistent board performance, with students placed in top engineering, medical and arts colleges." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Trophy, t: "State Topper 2024", d: "Sai Charan – Class X, AP State Board" },
            { icon: Medal, t: "Mathematics Olympiad", d: "12 students qualified for national rounds" },
            { icon: BookOpen, t: "Reading Champion", d: "Inter-school reading marathon, district winners" },
          ].map((a, i) => (
            <Reveal key={a.t} delay={i * 80}><FeatureCard icon={<a.icon className="size-5" />} title={a.t}>{a.d}</FeatureCard></Reveal>
          ))}
        </div>
      </Section>

      <Section id="sports" className="bg-surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="image-hover aspect-[4/3] rounded-[2rem] shadow-elevated">
              <img src={sports} alt="Sports at Vidvas" loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
          <Reveal variant="right">
            <SectionHeading eyebrow="Sports Excellence" title="Champions on the field, leaders off it." intro="From cricket and athletics to chess and archery, our students compete with discipline and joy." />
            <ul className="mt-6 grid gap-3 text-sm text-navy md:text-base">
              {[
                "U-14 District Cricket Champions, 2024 & 2025",
                "Gold at State Athletic Meet — 100m & 200m",
                "Silver at National Archery Championship",
                "Inter-school Chess Champions, three years running",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{l}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="cultural">
        <Reveal>
          <SectionHeading eyebrow="Cultural & Tech" title="Beyond textbooks, students shine in art and innovation." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Music, t: "Cultural Excellence", d: "Best School Choir at the state cultural festival, 2025." },
            { icon: Cpu, t: "Technology", d: "Two student teams selected for the National Robotics Showcase." },
            { icon: Award, t: "Competitions", d: "Regular winners at inter-school debates and quizzes." },
          ].map((a, i) => (
            <Reveal key={a.t} delay={i * 80}><FeatureCard icon={<a.icon className="size-5" />} title={a.t}>{a.d}</FeatureCard></Reveal>
          ))}
        </div>
      </Section>

      <Section id="stories" className="bg-surface">
        <Reveal>
          <SectionHeading eyebrow="Student Stories" title="In their own words." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { q: "Vidvas taught me to ask why before how. That changed everything in college.", a: "Aarav, Alumni · Class of 2023" },
            { q: "The robotics lab is where I found my favourite hobby — and now my career.", a: "Sneha, Class 10" },
            { q: "I came in shy. I'm leaving as the head of the student council.", a: "Ravi, Class 10" },
          ].map((t) => (
            <Reveal key={t.a}>
              <figure className="card-hover h-full rounded-3xl border border-border bg-background p-6 shadow-soft md:p-8">
                <Quote className="size-7 text-accent" />
                <blockquote className="mt-4 text-base text-navy">"{t.q}"</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">{t.a}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="milestones">
        <Reveal>
          <SectionHeading eyebrow="Milestones" title="The Vidvas timeline." />
        </Reveal>
        <ol className="mt-12 space-y-6 border-l border-border pl-6">
          {[
            { y: "2007", d: "Vidvas School founded with 80 students and 9 teachers." },
            { y: "2012", d: "First Class X batch achieves 100% pass with multiple distinctions." },
            { y: "2017", d: "Robotics and coding programmes introduced from Class 3." },
            { y: "2022", d: "New smart campus inaugurated with science and tech labs." },
            { y: "2025", d: "2,400+ students, faculty of 120, recognised as a leading school in Tirupati." },
          ].map((m) => (
            <Reveal key={m.y}>
              <li className="relative">
                <span className="absolute -left-[34px] top-1.5 grid size-4 place-items-center rounded-full border-2 border-primary bg-background">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                <p className="font-serif text-2xl text-primary">{m.y}</p>
                <p className="mt-1 text-sm text-navy md:text-base">{m.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CTABand title="Be part of the next Vidvas story" subtitle="Admissions are open for 2026–27." />
    </>
  );
}

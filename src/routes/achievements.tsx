import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal, Music, Cpu, BookOpen, Award, Quote, Users } from "lucide-react";

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
  const stories = [
    { q: "Vidvas taught me to ask why before how. That changed everything in college.", a: "Aarav, Alumni · Class of 2023" },
    { q: "The robotics lab is where I found my favourite hobby — and now my career path.", a: "Sneha, Class 10" },
    { q: "I came in shy. I'm leaving as the head of the student council.", a: "Ravi, Class 10" },
    { q: "Every teacher knew my name and my story. That made all the difference.", a: "Divya, Alumni · Class of 2024" },
    { q: "Winning at nationals felt normal — because the school always pushed us beyond limits.", a: "Arun, Class 9" },
    { q: "Vidvas gave me a stage. Now I perform at state-level events with full confidence.", a: "Kavya, Class 8" },
  ];
  const allStories = [...stories, ...stories];

  const leaders = [
    { name: "D. Jayachandra Reddy", role: "Chairman", desc: "Visionary leader with 30+ years in education" },
    { name: "V. Subbanaidu", role: "Academic Director", desc: "PhD in Pedagogy, guiding excellence since 2015" },
    { name: "A. Madana Mohan", role: "Admin Director", desc: "Operations expert ensuring seamless campus life" },
    { name: "Dr. Priya Sharma", role: "Principal", desc: "Empowering students through innovative teaching" },
    { name: "K. Venkatesh", role: "Sports Coordinator", desc: "Former national athlete, nurturing champions" },
    { name: "S. Lakshmi", role: "Cultural Head", desc: "Celebrating creativity and artistic expression" },
  ];
  const allLeaders = [...leaders, ...leaders];

  const parentVoices = [
    { q: "The teachers don't just teach — they genuinely care. That's rare.", a: "Mrs. Radhika, Parent of Class 7" },
    { q: "My son's confidence has grown beyond academics. Thank you, Vidvas.", a: "Mr. Suresh, Parent of Class 9" },
    { q: "The focus on values alongside education is what sets Vidvas apart.", a: "Mrs. Anjali, Parent of Class 5" },
    { q: "We moved to Tirupati for this school. Best decision we ever made.", a: "Mr. Ramesh, Parent of Class 10" },
    { q: "Regular parent meetings and transparency make us feel part of the journey.", a: "Mrs. Kavitha, Parent of Class 6" },
    { q: "Holistic education isn't a buzzword here — it's a lived reality.", a: "Mr. Prakash, Parent of Class 8" },
  ];
  const allParentVoices = [...parentVoices, ...parentVoices];

  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title={<>Excellence is a <span className="text-primary">daily habit.</span></>}
        intro="From state-level toppers to national sports medallists — Vidvas students show up, give their best and lead with humility."
        image={events}
        imageAlt="Cultural performance at Vidvas School"
      />

      {/* Tagline Banner — 2 lines with highlighted words */}
      <section className="border-y border-border bg-gradient-to-br from-primary/5 via-accent/5 to-background py-12">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
            Where <span className="font-['Comic_Sans_MS',cursive] text-primary">values</span> meet
            <br />
            <span className="font-['Comic_Sans_MS',cursive] text-accent">excellence</span>.
          </h2>
        </div>
      </section>

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

      {/* Leadership — left-to-right scrolling marquee */}
      <Section id="leadership" className="bg-surface">
        <Reveal>
          <SectionHeading eyebrow="Leadership" title="Guided by experience. Led by passion." />
        </Reveal>
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-5 marquee-track">
            {allLeaders.map((leader, i) => (
              <div
                key={i}
                className="shrink-0 w-72 rounded-3xl border border-border bg-background p-6 shadow-soft"
              >
                <Users className="size-8 text-primary" />
                <h3 className="mt-4 text-lg font-bold text-navy">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{leader.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Parent Voices — right-to-left scrolling marquee */}
      <Section id="parent-voices">
        <Reveal>
          <SectionHeading eyebrow="Parent Voices" title="Trust built, one family at a time." />
        </Reveal>
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-5 marquee-track-rtl">
            {allParentVoices.map((voice, i) => (
              <figure
                key={i}
                className="shrink-0 w-80 rounded-3xl border border-border bg-background p-6 shadow-soft"
              >
                <Quote className="size-7 text-accent" />
                <blockquote className="mt-4 text-sm text-navy">"{voice.q}"</blockquote>
                <figcaption className="mt-5 text-xs font-medium text-muted-foreground">{voice.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* Student Stories — right-to-left scrolling marquee */}
      <Section id="stories" className="bg-surface">
        <Reveal>
          <SectionHeading eyebrow="Student Stories" title="In their own words." />
        </Reveal>
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-5 marquee-track-rtl">
            {allStories.map((t, i) => (
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

      <CTABand title="Be part of the next Vidvas story" subtitle="Admissions are open for 2026–27." />
    </>
  );
}

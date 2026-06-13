import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Brain, Cpu, FlaskConical, Languages, Microscope, Palette, Users } from "lucide-react";

import classroom from "@/assets/classroom.jpg";
import science from "@/assets/science.jpg";
import robotics from "@/assets/robotics.jpg";
import library from "@/assets/library.jpg";

import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FeatureCard } from "@/components/site/FeatureCard";
import { FAQ } from "@/components/site/FAQ";
import { CTABand } from "@/components/site/CTABand";
import { SectionNav } from "@/components/site/SectionNav";
import { pageSections } from "@/lib/site-config";

const faqItems = [
  { q: "What curriculum does Vidvas School follow?", a: "Vidvas follows the Andhra Pradesh State Board curriculum in English medium, taught with a concept-first, inquiry-led approach." },
  { q: "Are classes English medium?", a: "Yes. Every subject is taught in English, with strong support for regional languages including Telugu and Hindi." },
  { q: "How are students assessed?", a: "We blend continuous classroom assessments, project work and term examinations — emphasising understanding over rote learning." },
  { q: "What special programs does the school offer?", a: "Robotics, coding, design thinking, public speaking, classical music, dance and art are integrated into the timetable from primary classes." },
];

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics at Vidvas School — AP State Board, English Medium" },
      { name: "description", content: "AP State Board curriculum in English medium, robotics, coding, science labs and concept-first teaching at Vidvas School, Tirupati." },
      { property: "og:title", content: "Academics at Vidvas School" },
      { property: "og:description", content: "Concept-first learning, robotics, coding and a values-led classroom in Tirupati." },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: AcademicsPage,
});

function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title={<>Concept-first learning, taught with <span className="text-primary">care and craft.</span></>}
        intro="Our academic programme blends the rigour of the AP State Board with modern pedagogy — making children think deeply, ask boldly and create freely."
        image={classroom}
        imageAlt="Vidvas School smart classroom"
      />

      <SectionNav items={pageSections["/academics"]} />

      <Section id="philosophy">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Philosophy"
            title="Understanding before memorisation. Curiosity before competition."
            intro="Every classroom at Vidvas is built on the belief that children learn best when they feel safe, seen and stretched."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Brain, t: "Concept-first", d: "Big ideas before procedures. Children build mental models that last." },
            { icon: Users, t: "Small mentor groups", d: "Each teacher mentors a small group across the academic year." },
            { icon: BookOpen, t: "Beyond textbooks", d: "Real-world projects, field studies and interdisciplinary units." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <FeatureCard icon={<p.icon className="size-5" />} title={p.t}>{p.d}</FeatureCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="journey" className="bg-surface">
        <Reveal>
          <SectionHeading eyebrow="Academic Journey" title="A continuous arc, designed for every stage." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { stage: "Pre-Primary", years: "Ages 3–5", d: "Play-based learning, phonics, early numeracy and motor skills." },
            { stage: "Primary", years: "Classes 1–5", d: "Foundational literacy, math, environmental studies and the arts." },
            { stage: "Middle School", years: "Classes 6–8", d: "Science labs, social studies projects, robotics and second language." },
            { stage: "High School", years: "Classes 9–10", d: "Board preparation, career guidance, leadership and capstone projects." },
          ].map((s, i) => (
            <Reveal key={s.stage} delay={i * 80}>
              <article className="card-hover h-full rounded-3xl border border-border bg-background p-6 shadow-soft md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{s.years}</p>
                <h3 className="mt-2 font-serif text-2xl text-navy">{s.stage}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="curriculum">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="image-hover aspect-[4/3] rounded-[2rem] shadow-elevated">
              <img src={science} alt="Students working in the science lab" loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
          <Reveal variant="right">
            <SectionHeading eyebrow="Curriculum" title="AP State Board, taught the Vidvas way." intro="We respect the board's structure and extend it with a richer, more curious classroom." />
            <ul className="mt-6 grid gap-3">
              {[
                "English, Telugu, Hindi — strong tri-lingual foundation",
                "Mathematics with conceptual depth and problem-solving",
                "Science with weekly hands-on lab work",
                "Social studies with field studies and discussions",
                "Computer science, robotics and coding from Class 3",
                "Music, dance, art, sports as core subjects",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-navy md:text-base">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="methodology" className="bg-surface">
        <Reveal>
          <SectionHeading eyebrow="Teaching Methodology" title="Six classroom moves you'll see at Vidvas." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Brain, t: "Inquiry questions", d: "Lessons open with a question, not an answer." },
            { icon: Microscope, t: "Hands-on labs", d: "Children manipulate before they memorise." },
            { icon: Languages, t: "Bilingual scaffolding", d: "Concepts anchored across English and Telugu when helpful." },
            { icon: FlaskConical, t: "Project sprints", d: "Two project weeks per term across disciplines." },
            { icon: Cpu, t: "Tech-enabled", d: "Smart boards, simulations and adaptive practice." },
            { icon: Palette, t: "Reflection journals", d: "Students reflect weekly on what they learned and how." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <FeatureCard icon={<p.icon className="size-5" />} title={p.t}>{p.d}</FeatureCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="programs">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <SectionHeading eyebrow="Special Programs" title="Future-ready skills, woven into the timetable." intro="Robotics, coding and design are not extras at Vidvas — they're part of how children learn to think." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Robotics Lab", d: "LEGO, Arduino and microcontroller projects." },
                { t: "Coding Studio", d: "Scratch, Python and web fundamentals." },
                { t: "Design Thinking", d: "Empathy maps, prototyping and pitches." },
                { t: "Public Speaking", d: "Weekly speaking circles and inter-school debates." },
              ].map((p) => (
                <div key={p.t} className="rounded-2xl border border-border bg-background p-5">
                  <p className="font-semibold text-navy">{p.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className="image-hover aspect-[4/3] rounded-[2rem] shadow-elevated">
              <img src={robotics} alt="Students in robotics lab" loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="faculty" className="bg-surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="image-hover aspect-[4/3] rounded-[2rem] shadow-elevated">
              <img src={library} alt="Library" loading="lazy" className="size-full object-cover" />
            </div>
          </Reveal>
          <Reveal variant="right">
            <SectionHeading eyebrow="Faculty Excellence" title="Mentors who shape minds — and hearts." intro="Our teachers are selected for warmth, subject mastery and a love of learning that's contagious." />
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { n: "120+", l: "Expert teachers" },
                { n: "85%", l: "With 5+ years experience" },
                { n: "40+", l: "Hours training / year" },
                { n: "1:14", l: "Teacher to student ratio" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-background p-5">
                  <p className="font-serif text-3xl text-navy">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="faq">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Academic questions, answered." />
          </Reveal>
          <Reveal delay={100}><FAQ items={faqItems} /></Reveal>
        </div>
      </Section>

      <CTABand title="See a Vidvas classroom in action" subtitle="Book a campus visit and sit in on a live lesson with our teachers." />
    </>
  );
}

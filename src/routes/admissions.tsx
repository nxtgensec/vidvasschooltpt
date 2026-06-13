import { createFileRoute } from "@tanstack/react-router";
import { FileText, Phone, Mail, MapPin, MessageCircle, CalendarCheck, CheckCircle2, Sparkles, GraduationCap, Heart, ShieldCheck, Trophy } from "lucide-react";

import heroCampus from "@/assets/hero-campus.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FeatureCard } from "@/components/site/FeatureCard";
import { FAQ } from "@/components/site/FAQ";
import { CTABand } from "@/components/site/CTABand";
import { CTALink } from "@/components/site/Button";
import { SectionNav } from "@/components/site/SectionNav";
import { mailto, tel, whatsapp, site, pageSections } from "@/lib/site-config";

const faqItems = [
  { q: "When do admissions open at Vidvas School?", a: "Admissions for the 2026–27 academic year are open now. Early applications are recommended as seats fill quickly." },
  { q: "What is the age criteria for Pre-Primary admission?", a: "Children should complete 3 years by 31st May of the admission year for Pre-KG. Specific age bands apply to each class." },
  { q: "Is there an entrance test?", a: "For Class 1 and above, we conduct a brief, age-appropriate interaction — never high-stakes. The aim is to know your child, not to filter." },
  { q: "What documents are required?", a: "Birth certificate, previous report card (if applicable), Aadhaar copy of child and parent, transfer certificate and passport-size photos." },
  { q: "Can I visit the campus before applying?", a: "Absolutely — we strongly encourage a campus visit. Walk through classrooms, meet our team and feel the Vidvas culture firsthand." },
];

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Vidvas School Tirupati | Apply 2026–27" },
      { name: "description", content: "Admissions open at Vidvas School, Tirupati for 2026–27. Eligibility, documents required and a simple process for parents." },
      { property: "og:title", content: "Admissions — Vidvas School Tirupati" },
      { property: "og:description", content: "Apply now for Pre-Primary through Class X at Vidvas School." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions 2026–27"
        title={<>Begin your child's <span className="text-primary">Vidvas journey.</span></>}
        intro="A simple, transparent admissions process designed around your family. Apply online, visit the campus and meet our team."
        image={heroCampus}
        imageAlt="Vidvas School campus"
      />

      <SectionNav items={pageSections["/admissions"]} />

      <Section id="why">
        <Reveal>
          <SectionHeading eyebrow="Why Vidvas" title="Six reasons families choose us." />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: GraduationCap, t: "Proven academics", d: "Consistent Class X results with strong distinctions." },
            { icon: Sparkles, t: "Future-ready skills", d: "Robotics, coding and design from primary onwards." },
            { icon: Heart, t: "Values-led culture", d: "Empathy, integrity and curiosity in every classroom." },
            { icon: Trophy, t: "Sports & arts", d: "Daily PE, music and dance as core subjects." },
            { icon: ShieldCheck, t: "Safe campus", d: "Secure, CCTV-monitored campus with trained staff." },
            { icon: Sparkles, t: "Personal mentorship", d: "A dedicated mentor for every child." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <FeatureCard icon={<p.icon className="size-5" />} title={p.t}>{p.d}</FeatureCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="eligibility" className="bg-surface">
        <Reveal>
          <SectionHeading eyebrow="Eligibility" title="Age criteria by class." intro="As on 31st May of the admission year." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-background shadow-soft">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-surface text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Class</th>
                  <th className="px-6 py-4">Minimum age</th>
                  <th className="px-6 py-4">Seats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Pre-KG", "3 years", "Limited"],
                  ["LKG", "4 years", "Open"],
                  ["UKG", "5 years", "Open"],
                  ["Class 1", "6 years", "Open"],
                  ["Classes 2 – 9", "Age-appropriate", "Few seats"],
                  ["Class 10", "Subject to records", "Closed"],
                ].map(([cls, age, seats]) => (
                  <tr key={cls}>
                    <td className="px-6 py-4 font-medium text-navy">{cls}</td>
                    <td className="px-6 py-4 text-muted-foreground">{age}</td>
                    <td className="px-6 py-4 text-muted-foreground">{seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <Section id="documents">
        <Reveal>
          <SectionHeading eyebrow="Documents Required" title="A short, simple checklist." />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            "Child's birth certificate (original + copy)",
            "Latest report card / progress card",
            "Transfer Certificate (for Class 2 and above)",
            "Aadhaar card copy — child and both parents",
            "4 passport-size photographs of the child",
            "Address proof of parents",
          ].map((d) => (
            <Reveal key={d}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                <p className="text-sm text-navy md:text-base">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="process" className="bg-surface">
        <Reveal>
          <SectionHeading eyebrow="Admission Process" title="Four simple steps to your seat." />
        </Reveal>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: FileText, t: "Submit enquiry", d: "Share your details — we'll get in touch within 24 hours." },
            { i: CalendarCheck, t: "Campus visit", d: "Tour the campus, meet teachers and see classrooms in action." },
            { i: Sparkles, t: "Interaction", d: "A warm, age-appropriate meeting with your child and family." },
            { i: CheckCircle2, t: "Confirm seat", d: "Submit documents, pay fees and welcome to Vidvas." },
          ].map((s, idx) => (
            <Reveal key={s.t} delay={idx * 80}>
              <li className="card-hover h-full rounded-3xl border border-border bg-background p-6 shadow-soft md:p-8">
                <div className="card-icon grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <s.i className="size-5" />
                </div>
                <p className="mt-4 font-serif text-xs uppercase tracking-[0.2em] text-muted-foreground">Step 0{idx + 1}</p>
                <h3 className="mt-1 font-serif text-xl text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="visit">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal variant="left">
            <SectionHeading eyebrow="Campus Visit" title="The best way to know Vidvas is to walk through it." intro="Book a guided tour at your convenience. Mornings and weekends are popular slots." />
            <div className="mt-6 flex flex-wrap gap-3">
              <CTALink href={mailto("Campus visit request", "I'd like to schedule a campus visit at Vidvas School. Preferred date/time:")}>Book a Visit</CTALink>
              <CTALink href={whatsapp("Hi, I'd like to schedule a campus visit at Vidvas School.")} external variant="outline" withArrow={false}>WhatsApp Us</CTALink>
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className="rounded-3xl border border-border bg-background p-6 shadow-soft md:p-8">
              <h3 className="font-serif text-xl text-navy">Contact Admissions</h3>
              <ul className="mt-5 space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-navy">{site.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={tel} className="text-navy hover:text-primary">{site.phoneDisplay}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={mailto("Admissions enquiry")} className="text-navy hover:text-primary">{site.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 size-5 shrink-0 text-secondary" />
                  <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="text-navy hover:text-primary">WhatsApp us</a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="faq" className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal><SectionHeading eyebrow="FAQ" title="Admission questions, answered." /></Reveal>
          <Reveal delay={100}><FAQ items={faqItems} /></Reveal>
        </div>
      </Section>

      <CTABand title="Seats are filling fast for 2026–27" subtitle="Apply today to secure your child's place at Vidvas." />
    </>
  );
}

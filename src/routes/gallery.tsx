import { createFileRoute } from "@tanstack/react-router";

import classroom from "@/assets/classroom.jpg";
import library from "@/assets/library.jpg";
import robotics from "@/assets/robotics.jpg";
import sports from "@/assets/sports.jpg";
import arts from "@/assets/arts.jpg";
import events from "@/assets/events.jpg";
import science from "@/assets/science.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vidvas School Tirupati" },
      { name: "description", content: "Photos from across Vidvas School — campus, classrooms, sports, events, celebrations and more." },
      { property: "og:title", content: "Vidvas School Gallery" },
      { property: "og:description", content: "Moments from campus life at Vidvas School, Tirupati." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const categories = [
  "Campus",
  "Classrooms",
  "Activities",
  "Events",
  "Sports",
  "Technology",
  "Celebrations",
];

const items = [
  { src: heroCampus, alt: "Campus exterior", category: "Campus" },
  { src: classroom, alt: "Smart classroom session", category: "Classrooms" },
  { src: library, alt: "Library", category: "Campus" },
  { src: robotics, alt: "Robotics lab", category: "Technology" },
  { src: sports, alt: "Sports ground", category: "Sports" },
  { src: arts, alt: "Music and dance", category: "Activities" },
  { src: events, alt: "Annual day performance", category: "Celebrations" },
  { src: science, alt: "Science lab", category: "Classrooms" },
  { src: heroCampus, alt: "Students walking on campus", category: "Campus" },
  { src: sports, alt: "Athletics meet", category: "Sports" },
  { src: arts, alt: "Cultural performance", category: "Activities" },
  { src: events, alt: "Celebration on stage", category: "Events" },
  { src: robotics, alt: "Coding session", category: "Technology" },
  { src: science, alt: "Lab experiment", category: "Classrooms" },
  { src: library, alt: "Reading hour", category: "Activities" },
  { src: classroom, alt: "Group discussion", category: "Classrooms" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-page py-16 md:py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Gallery"
              title="Moments from across the Vidvas campus."
              intro="Filter by category to see what's been happening — from classrooms to celebrations."
            />
          </Reveal>
        </div>
      </section>

      <Section>
        <GalleryGrid items={items} categories={categories} />
      </Section>

      <CTABand title="Want to see it in person?" subtitle="Book a campus visit and walk through Vidvas with our team." />
    </>
  );
}

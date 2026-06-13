import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Section";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-primary/15 blur-3xl float-shape" />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-accent/15 blur-3xl float-shape"
        style={{ animationDelay: "4s" }}
      />
      <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:py-28">
        <div>
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.05] text-navy md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">{intro}</p>
          </Reveal>
        </div>
        <Reveal variant="scale" delay={250}>
          <div className="image-hover aspect-[4/3] rounded-[2rem] shadow-elevated md:aspect-[4/3] lg:aspect-[4/5]">
            <img src={image} alt={imageAlt} loading="eager" className="size-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

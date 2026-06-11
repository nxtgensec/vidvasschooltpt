import { CTALink } from "./Button";
import { whatsapp } from "@/lib/site-config";
import { Reveal } from "./Reveal";

export function CTABand({
  title = "Begin your child's Vidvas journey",
  subtitle = "Admissions are open. Schedule a campus visit or speak to our admissions team.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-primary-foreground md:px-14 md:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary-glow opacity-40 blur-3xl float-shape" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent opacity-25 blur-3xl float-shape" style={{ animationDelay: "3s" }} />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_auto]">
              <div>
                <h2 className="text-balance font-serif text-3xl leading-[1.1] md:text-5xl">{title}</h2>
                <p className="mt-4 max-w-xl text-primary-foreground/80 md:text-lg">{subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <CTALink to="/admissions" variant="secondary">Apply Now</CTALink>
                <CTALink href={whatsapp()} external variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  WhatsApp Us
                </CTALink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, MessageCircle, Clock, Mail } from "lucide-react";

import heroCampus from "@/assets/hero-campus.jpg";

import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";
import { whatsapp, tel, site } from "@/lib/site-config";

const faqItems = [
  { q: "What are the school timings?", a: "Regular classes run from 8:30 AM to 3:30 PM, Monday to Friday, with extended care available till 5:30 PM." },
  { q: "Does the school provide transport?", a: "Yes, GPS-tracked buses serve all major routes in and around Tirupati with trained attendants on board." },
  { q: "How do I reach Vidvas School?", a: "We're located centrally in Tirupati and easily accessible by road. Contact us on WhatsApp to plan your visit." },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vidvas School Tirupati" },
      { name: "description", content: "Get in touch with Vidvas School, Tirupati. Call 0877 224 2277 or WhatsApp us at 7995550238 / 7995550239 for admissions and campus visits." },
      { property: "og:title", content: "Contact Vidvas School" },
      { property: "og:description", content: "Reach our admissions team in Tirupati — call or WhatsApp 0877 224 2277." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
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
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      icon: MapPin,
      t: "Visit us",
      d: site.address,
      href: "https://maps.google.com/?q=" + encodeURIComponent(site.address),
      label: "Open in Maps",
      external: true,
    },
    {
      icon: Phone,
      t: "Call us",
      d: site.phoneDisplay,
      href: tel,
      label: "Call now",
      external: false,
    },
    {
      icon: MessageCircle,
      t: "WhatsApp",
      d: site.whatsappDisplay,
      href: whatsapp(),
      label: "Open chat",
      external: true,
    },
    {
      icon: Mail,
      t: "Email",
      d: `${site.emailAdmissions}\n${site.emailContact}`,
      href: `mailto:${site.emailAdmissions}`,
      label: "Send email",
      external: false,
    },
    {
      icon: Clock,
      t: "Office hours",
      d: "Mon – Fri: 8:30 AM – 4:30 PM\nSat: 9:00 AM – 12:30 PM",
      href: whatsapp("Hello, I'd like to visit Vidvas School. Please let me know the best time."),
      label: "Book a visit",
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to <span className="text-primary">hear from you.</span></>}
        intro="Reach out for admissions, campus visits or general queries. Chat with us on WhatsApp — we reply fast."
        image={heroCampus}
        imageAlt="Vidvas School entrance"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="card-hover flex h-full flex-col gap-3 rounded-3xl border border-border bg-background p-6 shadow-soft"
              >
                <div className="card-icon grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="size-5" />
                </div>
                <h3 className="font-serif text-lg text-navy">{c.t}</h3>
                <p className="whitespace-pre-line text-sm text-muted-foreground">{c.d}</p>
                <span className="mt-auto text-xs font-semibold uppercase tracking-wider text-primary">{c.label} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Enquiry — goes to WhatsApp */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Enquiry"
              title="Send us a message on WhatsApp."
              intro="Fill in your details and tap Send — we'll receive your enquiry directly on WhatsApp and get back to you quickly."
            />
            <form
              className="mt-8 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const name = (f.elements.namedItem("name") as HTMLInputElement).value;
                const phone = (f.elements.namedItem("phone") as HTMLInputElement).value;
                const childClass = (f.elements.namedItem("class") as HTMLInputElement).value;
                const message = (f.elements.namedItem("message") as HTMLTextAreaElement).value;
                const text = `Hello Vidvas School,\n\nName: ${name}\nPhone: ${phone}\nEnquiring for: ${childClass || "Not specified"}\n\n${message}`;
                window.open(whatsapp(text), "_blank", "noopener,noreferrer");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required maxLength={80} placeholder="Your name" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
                <input name="phone" required maxLength={20} placeholder="Phone number" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              </div>
              <input name="class" maxLength={40} placeholder="Class you're enquiring for (e.g. Class 3)" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <textarea name="message" required maxLength={500} rows={4} placeholder="How can we help?" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <button type="submit" className="btn-primary-fx inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white">
                <MessageCircle className="size-4" />
                Send via WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal variant="right">
            <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-soft">
              <div className="aspect-[4/3] bg-surface">
                <iframe
                  title="Vidvas School location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-3 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm text-navy">{site.address}</p>
                </div>
                <a
                  href={whatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="size-4" />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal><SectionHeading eyebrow="FAQ" title="Quick answers." /></Reveal>
          <Reveal delay={100}><FAQ items={faqItems} /></Reveal>
        </div>
      </Section>
    </>
  );
}

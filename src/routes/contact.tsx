import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

import heroCampus from "@/assets/hero-campus.jpg";

import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";
import { mailto, tel, whatsapp, site } from "@/lib/site-config";

const faqItems = [
  { q: "What are the school timings?", a: "Regular classes run from 8:30 AM to 3:30 PM, Monday to Friday, with extended care available till 5:30 PM." },
  { q: "Does the school provide transport?", a: "Yes, GPS-tracked buses serve all major routes in and around Tirupati with trained attendants on board." },
  { q: "How do I reach Vidvas School?", a: "We're located centrally in Tirupati and easily accessible by road. Use the contact details below to plan your visit." },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vidvas School Tirupati" },
      { name: "description", content: "Get in touch with Vidvas School, Tirupati. Address, phone, email, WhatsApp and admissions enquiry." },
      { property: "og:title", content: "Contact Vidvas School" },
      { property: "og:description", content: "Reach our admissions and front office team in Tirupati." },
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
    { icon: MapPin, t: "Visit us", d: site.address, href: "https://maps.google.com/?q=" + encodeURIComponent(site.address), label: "Open in Maps" },
    { icon: Phone, t: "Call us", d: site.phoneDisplay, href: tel, label: "Call now" },
    { icon: Mail, t: "Email us", d: site.email, href: mailto("Enquiry from website"), label: "Send email" },
    { icon: MessageCircle, t: "WhatsApp", d: "Chat with our admissions team", href: whatsapp(), label: "Open chat", external: true },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to <span className="text-primary">hear from you.</span></>}
        intro="Reach out for admissions, campus visits, partnerships or general queries. Our team replies within one business day."
        image={heroCampus}
        imageAlt="Vidvas School entrance"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                <p className="text-sm text-muted-foreground">{c.d}</p>
                <span className="mt-auto text-xs font-semibold uppercase tracking-wider text-primary">{c.label} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal variant="left">
            <SectionHeading eyebrow="Enquiry" title="Send us a message." intro="Fill in your details and our team will reach out shortly." />
            <form
              className="mt-8 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const name = (f.elements.namedItem("name") as HTMLInputElement).value;
                const phone = (f.elements.namedItem("phone") as HTMLInputElement).value;
                const childClass = (f.elements.namedItem("class") as HTMLInputElement).value;
                const message = (f.elements.namedItem("message") as HTMLTextAreaElement).value;
                const body = `Name: ${name}\nPhone: ${phone}\nLooking for class: ${childClass}\n\nMessage:\n${message}`;
                window.location.href = mailto(`Enquiry from ${name}`, body);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required maxLength={80} placeholder="Your name" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
                <input name="phone" required maxLength={20} placeholder="Phone number" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              </div>
              <input name="class" maxLength={40} placeholder="Class you're enquiring for (e.g. Class 3)" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <textarea name="message" required maxLength={1000} rows={5} placeholder="How can we help?" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <button type="submit" className="btn-primary-fx inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                Send Enquiry
              </button>
              <p className="text-xs text-muted-foreground">Submitting will open your email client with the details prefilled.</p>
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
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-navy">Office hours</p>
                    <p className="text-sm text-muted-foreground">Mon – Fri: 8:30 AM – 4:30 PM · Sat: 9:00 AM – 12:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm text-navy">{site.address}</p>
                </div>
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

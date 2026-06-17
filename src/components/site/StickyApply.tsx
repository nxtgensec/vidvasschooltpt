import { Phone, MessageCircle } from "lucide-react";
import { tel, whatsapp } from "@/lib/site-config";

export function StickyApply() {
  return (
    <div className="fixed bottom-24 right-3 z-40 flex flex-col gap-2 md:hidden">
      <a
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="grid size-11 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-elevated ring-4 ring-background/85"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={tel}
        aria-label="Call"
        className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-elevated ring-4 ring-background/85"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}

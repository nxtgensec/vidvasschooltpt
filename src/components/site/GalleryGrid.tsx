import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  span?: "tall" | "wide" | "normal";
}

export function GalleryGrid({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: string[];
}) {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-navy hover:bg-surface",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((item) => (
          <button
            key={item.src + item.alt}
            type="button"
            onClick={() => setLightbox(item)}
            className={cn(
              "image-hover block w-full break-inside-avoid",
              item.span === "tall" && "row-span-2",
            )}
            aria-label={`Open ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-background text-navy"
            onClick={() => setLightbox(null)}
          >
            <X className="size-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

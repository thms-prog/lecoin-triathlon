"use client";

import { useEffect, useRef, useState } from "react";

// Sommaire collant (PC) : surligne la section en cours de lecture et la garde visible
// dans son bloc défilant (data-toc-scroll), sans faire bouger la page.
export default function TocNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const link = listRef.current?.querySelector<HTMLElement>(`[href="#${active}"]`);
    const box = link?.closest<HTMLElement>("[data-toc-scroll]");
    if (!link || !box) return;
    const top = link.offsetTop; // box est en position relative : offsetTop est mesuré depuis lui
    if (top < box.scrollTop || top + link.offsetHeight > box.scrollTop + box.clientHeight) {
      box.scrollTo({ top: top - box.clientHeight / 3, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav aria-label="Sommaire">
      <p className="eyebrow text-muted">Sommaire</p>
      <ol ref={listRef} className="mt-4 space-y-1 border-l border-line">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition ${
                active === i.id ? "border-accent text-fg" : "border-transparent text-muted hover:text-fg"
              }`}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

"use client";

import { useEffect } from "react";

// Boutons « Copier » des prompts : le HTML de l'article est statique, on branche le clic ici.
export default function CopyButtons() {
  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("[data-copy]");
      const text = btn?.closest(".prompt")?.querySelector("pre")?.innerText;
      if (!btn || !text) return;
      await navigator.clipboard.writeText(text);
      btn.textContent = "Copié ✓";
      setTimeout(() => (btn.textContent = "Copier"), 1600);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

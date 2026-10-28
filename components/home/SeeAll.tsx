import Link from "next/link";

// « Tout voir » sur smartphone : pastille néon sur la ligne du sur-titre de la section.
// Sur PC, c'est le dernier onglet de la barre qui joue ce rôle.
export default function SeeAll({ href, count }: { href: string; count: number }) {
  return (
    <Link
      href={href}
      className="heading flex shrink-0 items-center gap-1.5 rounded-full border border-accent px-3 py-1.5 text-xs text-accent shadow-[0_0_14px_rgba(0,129,143,0.45)] md:hidden"
    >
      Tout voir <span className="opacity-60">{count}</span> →
    </Link>
  );
}

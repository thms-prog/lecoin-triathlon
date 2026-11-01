import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg text-muted">
      <div className="mx-auto flex max-w-350 flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
        <p>© Lecoin-Triathlon</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/mentions-legales" className="transition hover:text-accent">Mentions légales</Link>
          <Link href="/confidentialite" className="transition hover:text-accent">Confidentialité</Link>
        </nav>
      </div>
      {/* Mention imposée par le programme Partenaires d'Amazon (liens de la section Matériel). */}
      <p className="mx-auto max-w-350 px-5 pb-8 text-xs text-muted-2 md:px-12 lg:px-20">
        En tant que Partenaire Amazon, Lecoin-Triathlon réalise un bénéfice sur les achats remplissant les conditions requises.
      </p>
    </footer>
  );
}

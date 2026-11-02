import { signOut } from "@/app/connexion/actions";

// En-tête commun aux espaces athlète et coach : qui est connecté, déconnexion.
export default function SpaceHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="heading mt-2 text-2xl text-fg md:text-3xl">{title}</h1>
      </div>
      <form action={signOut}>
        <button type="submit" className="heading rounded-full border border-white/15 px-4 py-2 text-xs text-muted transition hover:border-accent hover:text-fg">
          Déconnexion
        </button>
      </form>
    </header>
  );
}

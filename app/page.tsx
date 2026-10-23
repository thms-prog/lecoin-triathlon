export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-2">
        Aperçu du thème — pas la vraie home
      </p>

      <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-fg text-balance max-w-2xl">
        Lecoin-Triathlon
      </h1>

      <p className="font-sans text-base text-muted max-w-md">
        Fond sombre, accent teal unique, titres en Bricolage Grotesque,
        texte courant en Inter.
      </p>

      <div className="flex items-center gap-6 font-mono text-sm text-fg">
        <span className="rounded-lg border border-line bg-panel px-4 py-2 tabular-nums">
          80% VMA
        </span>
        <span className="rounded-lg border border-line bg-panel px-4 py-2 tabular-nums">
          1:42/100m
        </span>
      </div>

      <button className="mt-4 rounded-full bg-accent px-6 py-3 font-sans font-semibold text-bg hover:opacity-90 transition">
        Voir l&apos;entraînement du jour
      </button>
    </main>
  );
}

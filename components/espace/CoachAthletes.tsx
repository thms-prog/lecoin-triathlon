"use client";

import { useActionState, useState } from "react";
import { addAthlete, athleteLoginLink, type CreateState } from "@/app/coach/actions";

type AthleteRow = { id: string; name: string; email: string };

function LinkButton({ id }: { id: string }) {
  const [link, setLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  if (link) {
    return (
      <div className="flex min-w-0 items-center gap-2">
        <input readOnly value={link} className="min-w-0 flex-1 rounded-full border border-white/10 bg-bg/60 px-3 py-1.5 text-xs text-muted" />
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(link);
            setCopied(true);
          }}
          className="heading shrink-0 rounded-full border border-accent px-3 py-1.5 text-xs text-[#3fe0ec]"
        >
          {copied ? "Copié ✓" : "Copier"}
        </button>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={async () => {
        const r = await athleteLoginLink(id);
        if (r.link) setLink(r.link);
      }}
      className="heading rounded-full border border-white/15 px-3 py-1.5 text-xs text-muted transition hover:border-accent hover:text-fg"
    >
      Créer un lien de connexion
    </button>
  );
}

export default function CoachAthletes({ athletes }: { athletes: AthleteRow[] }) {
  const [state, action, pending] = useActionState<CreateState, FormData>(addAthlete, {});
  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
        <h2 className="eyebrow mb-4 text-muted">Ajouter un athlète</h2>
        <form action={action} className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <input name="name" required placeholder="Prénom Nom" className="rounded-full border border-white/10 bg-bg/60 px-4 py-2.5 text-sm text-fg placeholder:text-muted-2" />
          <input name="email" type="email" required placeholder="e-mail" className="rounded-full border border-white/10 bg-bg/60 px-4 py-2.5 text-sm text-fg placeholder:text-muted-2" />
          <button type="submit" disabled={pending} className="heading rounded-full bg-accent px-5 py-2.5 text-xs text-fg disabled:opacity-50">
            Ajouter
          </button>
        </form>
        {state.error && <p className="mt-3 text-sm text-crit">{state.error}</p>}
        {state.ok && <p className="mt-3 text-sm text-[#3fe0ec]">✓ {state.ok}</p>}
      </section>

      <section className="rounded-3xl border border-white/10 bg-panel p-3 md:p-4">
        <h2 className="eyebrow px-2 pt-2 pb-3 text-muted">Tes athlètes · {athletes.length}</h2>
        {athletes.length === 0 ? (
          <p className="px-2 pb-3 text-sm text-muted">Aucun athlète pour l&apos;instant. Ajoute le premier ci-dessus.</p>
        ) : (
          <ul className="divide-y divide-white/5">
            {athletes.map((a) => (
              <li key={a.id} className="grid gap-3 p-3 md:grid-cols-[1fr_auto] md:items-center">
                <div className="min-w-0">
                  <p className="font-semibold text-fg">{a.name}</p>
                  <p className="truncate text-xs text-muted">{a.email}</p>
                </div>
                <LinkButton id={a.id} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

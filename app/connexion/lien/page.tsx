import type { Metadata } from "next";
import { Suspense } from "react";
import { confirmLogin } from "../actions";

export const metadata: Metadata = { title: "Connexion · Lecoin-Triathlon", robots: { index: false } };

// Le lien de l'e-mail ouvre cette page ; le jeton n'est consommé qu'au clic sur le bouton.
// Les anti-virus de messagerie qui « visitent » les liens ne le brûlent donc pas.
export default function Lien({ searchParams }: PageProps<"/connexion/lien">) {
  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-16 text-center md:py-24">
      <p className="eyebrow text-accent">Espace athlète</p>
      <h1 className="heading mt-3 text-3xl">Bienvenue</h1>
      <Suspense>
        <Confirm searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function Confirm({ searchParams }: Pick<PageProps<"/connexion/lien">, "searchParams">) {
  const { t } = await searchParams;
  return (
    <form action={confirmLogin} className="mt-8">
      <input type="hidden" name="t" value={typeof t === "string" ? t : ""} />
      <button
        type="submit"
        className="heading w-full rounded-full bg-accent py-3 text-sm text-fg shadow-[0_0_24px_rgba(0,129,143,0.6)] transition hover:shadow-[0_0_36px_rgba(63,224,236,0.8)]"
      >
        Me connecter
      </button>
    </form>
  );
}

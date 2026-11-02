import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "@/components/espace/LoginForm";

export const metadata: Metadata = { title: "Connexion · Lecoin-Triathlon", robots: { index: false } };

export default function Connexion({ searchParams }: PageProps<"/connexion">) {
  return (
    <main className="mx-auto w-full max-w-md flex-1 px-5 py-16 md:py-24">
      <p className="eyebrow text-accent">Espace athlète</p>
      <h1 className="heading mt-3 text-3xl">Connexion</h1>
      <p className="mt-3 text-muted">Pas de mot de passe : tu reçois un lien de connexion par e-mail.</p>
      <Suspense>
        <LinkError searchParams={searchParams} />
      </Suspense>
      <LoginForm />
    </main>
  );
}

async function LinkError({ searchParams }: Pick<PageProps<"/connexion">, "searchParams">) {
  const { erreur } = await searchParams;
  if (erreur !== "lien") return null;
  return (
    <p className="mt-6 rounded-xl border border-crit/40 bg-crit/10 p-3 text-sm text-crit">
      Ce lien n&apos;est plus valable (déjà utilisé ou expiré). Demande un nouveau lien ci-dessous.
    </p>
  );
}

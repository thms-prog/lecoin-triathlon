"use client";

import { useActionState } from "react";
import { requestLoginLink, type LoginState } from "@/app/connexion/actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(requestLoginLink, {});
  return (
    <form action={action} className="mt-8 space-y-4">
      <label className="block">
        <span className="eyebrow text-muted">Ton e-mail</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-bg/60 px-4 py-3 text-fg placeholder:text-muted-2 focus:border-accent focus:outline-none"
          placeholder="prenom@exemple.fr"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="heading w-full rounded-full bg-accent py-3 text-sm text-fg shadow-[0_0_24px_rgba(0,129,143,0.6)] transition hover:shadow-[0_0_36px_rgba(63,224,236,0.8)] disabled:opacity-50"
      >
        {pending ? "Envoi…" : "Recevoir mon lien de connexion"}
      </button>
      {state.error && <p className="text-sm text-crit">{state.error}</p>}
      {state.message && <p className="text-sm text-muted">{state.message}</p>}
      {state.devLink && (
        <p className="rounded-xl border border-warn/40 bg-warn/10 p-3 text-xs break-all text-warn">
          Développement uniquement : <a href={state.devLink} className="underline">{state.devLink}</a>
        </p>
      )}
    </form>
  );
}

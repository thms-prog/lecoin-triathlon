import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { HOST, PUBLISHER } from "@/data/legal";

export const metadata: Metadata = {
  title: "Mentions légales · Lecoin-Triathlon",
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updated="1er novembre 2026">
      <section>
        <h2>Éditeur du site</h2>
        <p>
          <strong>{PUBLISHER.name}</strong> · {PUBLISHER.status}
          <br />
          SIRET : {PUBLISHER.siret}
          <br />
          {PUBLISHER.address}
          <br />
          Contact : {PUBLISHER.email}
        </p>
        <p>Directeur de la publication : {PUBLISHER.name}.</p>
      </section>
      <section>
        <h2>Hébergement</h2>
        <p>
          {HOST.name}, {HOST.address} · {HOST.site}
        </p>
      </section>
      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Les textes, séances, programmes, logos et images de ce site sont protégés. Toute reproduction, même partielle,
          sans autorisation écrite de l&apos;éditeur est interdite.
        </p>
      </section>
      <section>
        <h2>Liens affiliés</h2>
        <p>
          Certains liens de la rubrique Matériel sont des liens affiliés Amazon : en tant que Partenaire Amazon,
          Lecoin-Triathlon réalise un bénéfice sur les achats remplissant les conditions requises, sans surcoût pour toi.
        </p>
      </section>
      <section>
        <h2>Santé</h2>
        <p>
          Les séances et conseils publiés sont généraux et ne remplacent pas un avis médical. Consulte un médecin avant de
          reprendre ou d&apos;intensifier une activité sportive.
        </p>
      </section>
    </LegalPage>
  );
}

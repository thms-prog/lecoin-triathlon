import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { HOST, PUBLISHER } from "@/data/legal";

export const metadata: Metadata = {
  title: "Confidentialité · Lecoin-Triathlon",
};

// Décrit le site tel qu'il est aujourd'hui (aucun compte, aucun paiement, aucun outil de mesure d'audience).
// À réviser dès l'ajout du coaching, des paiements Stripe ou d'emails.
export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité" updated="1er novembre 2026">
      <section>
        <h2>En bref</h2>
        <p>
          Aujourd&apos;hui, Lecoin-Triathlon ne te demande aucune donnée : pas de compte, pas de formulaire, pas de
          paiement, et aucun cookie de mesure d&apos;audience ou de publicité.
        </p>
      </section>
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          Le site est édité par un particulier · contact : <a href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</a>. Voir les <Link href="/mentions-legales">mentions légales</Link>.
        </p>
      </section>
      <section>
        <h2>Données techniques</h2>
        <p>
          Comme tout site web, notre hébergeur ({HOST.name}, États-Unis) enregistre des journaux techniques (adresse IP,
          navigateur, pages demandées) pour faire fonctionner le site et le protéger. Ces données ne sont pas utilisées pour
          te suivre ni te profiler. Le transfert vers les États-Unis est encadré par le cadre de protection des données
          UE-États-Unis.
        </p>
      </section>
      <section>
        <h2>Liens vers Amazon</h2>
        <p>
          Les liens de la rubrique Matériel mènent vers Amazon. Une fois sur leur site, c&apos;est la politique de
          confidentialité d&apos;Amazon qui s&apos;applique, y compris pour leurs cookies.
        </p>
      </section>
      <section>
        <h2>Tes droits</h2>
        <p>
          Tu disposes d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition sur les
          données qui te concernent : écris à {PUBLISHER.email}. Tu peux aussi saisir la CNIL (cnil.fr).
        </p>
      </section>
    </LegalPage>
  );
}

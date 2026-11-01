"use client";
import { useState } from "react";

// Outils de l'article FTP, repris de Tri-Lab (mêmes seuils) : estimation FTP + niveau, et tableau W/kg.
// Les ancres #outil-ftp-calculateur et #outil-ftp-tableau sont citées dans le texte de l'article.

type Sexe = "homme" | "femme";
type Niveau = { min: number; max: number; label: string };

const NIVEAUX: Record<Sexe, Niveau[]> = {
  homme: [
    { min: 5.8, max: Infinity, label: "World Class" },
    { min: 5.3, max: 5.8, label: "Exceptional" },
    { min: 4.7, max: 5.3, label: "Excellent (Cat 1)" },
    { min: 4.1, max: 4.7, label: "Very Good (Cat 2)" },
    { min: 3.5, max: 4.1, label: "Good (Cat 3)" },
    { min: 2.9, max: 3.5, label: "Moderate (Cat 4)" },
    { min: 2.3, max: 2.9, label: "Fair" },
    { min: 1.7, max: 2.3, label: "Novice 2" },
    { min: 1.3, max: 1.7, label: "Novice 1" },
    { min: 0, max: 1.3, label: "Débutant / Loisir" },
  ],
  femme: [
    { min: 5.1, max: Infinity, label: "World Class" },
    { min: 4.6, max: 5.1, label: "Exceptional" },
    { min: 4.1, max: 4.6, label: "Excellent (Cat 1)" },
    { min: 3.5, max: 4.1, label: "Very Good (Cat 2)" },
    { min: 3.0, max: 3.5, label: "Good (Cat 3)" },
    { min: 2.8, max: 3.0, label: "Moderate (Cat 4)" },
    { min: 2.5, max: 2.8, label: "Fair" },
    { min: 1.9, max: 2.5, label: "Novice 2" },
    { min: 1.3, max: 1.9, label: "Novice 1" },
    { min: 0, max: 1.3, label: "Débutant / Loisir" },
  ],
};

const range = (n: Niveau) => (n.max === Infinity ? `≥ ${n.min}` : n.min === 0 ? `< ${n.max}` : `${n.min} – ${n.max}`);

function niveauDe(sexe: Sexe, ftpKg: number) {
  return NIVEAUX[sexe].find((n) => ftpKg >= n.min && ftpKg < n.max) ?? NIVEAUX[sexe][NIVEAUX[sexe].length - 1];
}

const INPUT = "w-20 rounded-lg border border-line bg-bg px-2 py-1.5 text-center font-mono text-sm text-fg";

export default function FtpTools() {
  const [sexe, setSexe] = useState<Sexe>("homme");
  const [poids, setPoids] = useState(70);
  const [puissance, setPuissance] = useState(210);

  // FTP ≈ 95 % de la puissance moyenne d'un test de 20 min.
  const ftp = Math.round(puissance * 0.95);
  const ftpKg = poids > 0 ? +(ftp / poids).toFixed(2) : 0;
  const niveau = niveauDe(sexe, ftpKg);

  return (
    <div className="my-10 grid gap-5 lg:grid-cols-2">
      <div id="outil-ftp-calculateur" className="neon scroll-mt-24 rounded-3xl bg-panel p-5 md:p-6">
        <p className="eyebrow text-accent">Outil</p>
        <p className="heading mt-1 text-xl text-fg">Estime ta FTP et ton niveau</p>
        <p className="mt-2 mb-5 text-sm text-muted">Ta puissance moyenne sur un test de 20 min et ton poids.</p>

        <div className="mb-4 flex gap-1.5">
          {(["homme", "femme"] as Sexe[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSexe(s)}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold capitalize transition ${
                sexe === s ? "border-accent bg-accent text-fg" : "border-line text-muted hover:text-fg"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <label className="mb-3 flex items-center gap-3">
          <span className="eyebrow w-20 text-[0.65rem] text-muted">Poids</span>
          <input type="range" min={30} max={150} value={poids} onChange={(e) => setPoids(Number(e.target.value))} className="min-w-0 flex-1 accent-[#3fe0ec]" aria-label="Poids (kg)" />
          <input type="number" min={30} max={150} value={poids} onChange={(e) => setPoids(Number(e.target.value))} className={INPUT} aria-label="Poids (kg)" />
        </label>
        <label className="mb-5 flex items-center gap-3">
          <span className="eyebrow w-20 text-[0.65rem] text-muted">20 min</span>
          <input type="range" min={0} max={500} value={puissance} onChange={(e) => setPuissance(Number(e.target.value))} className="min-w-0 flex-1 accent-[#3fe0ec]" aria-label="Puissance 20 min (W)" />
          <input type="number" min={0} max={500} value={puissance} onChange={(e) => setPuissance(Number(e.target.value))} className={INPUT} aria-label="Puissance 20 min (W)" />
        </label>

        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-bg/60 p-4 text-center">
          <div>
            <p className="eyebrow text-[0.6rem] text-muted">FTP estimée</p>
            <p className="font-mono text-2xl font-extrabold text-fg">{ftp} W</p>
          </div>
          <div>
            <p className="eyebrow text-[0.6rem] text-muted">FTP / kg</p>
            <p className="font-mono text-2xl font-extrabold text-fg">{ftpKg}</p>
          </div>
          <p className="col-span-2 mt-1">
            <span className="heading inline-block rounded-full bg-accent px-4 py-1.5 text-xs text-fg">{niveau.label}</span>
          </p>
        </div>
      </div>

      <div id="outil-ftp-tableau" className="scroll-mt-24 rounded-3xl border border-white/10 bg-panel p-5 md:p-6">
        <p className="eyebrow text-accent">Repères</p>
        <p className="heading mt-1 text-xl text-fg">Références FTP/kg</p>
        <p className="mt-2 mb-5 text-sm text-muted">Compare ton ratio W/kg à des repères internationaux.</p>
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-bg/60 text-left">
                <th className="eyebrow px-3 py-2 text-[0.6rem] text-muted">Niveau</th>
                <th className="eyebrow px-3 py-2 text-[0.6rem] text-muted">Homme</th>
                <th className="eyebrow px-3 py-2 text-[0.6rem] text-muted">Femme</th>
              </tr>
            </thead>
            <tbody>
              {NIVEAUX.homme.map((n, i) => {
                const on = niveau.label === n.label;
                return (
                  <tr key={n.label} className={`border-t border-line ${on ? "bg-accent/20" : ""}`}>
                    <td className={`px-3 py-2 whitespace-nowrap ${on ? "font-semibold text-fg" : "text-fg/80"}`}>{n.label}</td>
                    <td className="px-3 py-2 font-mono whitespace-nowrap text-muted">{range(n)}</td>
                    <td className="px-3 py-2 font-mono whitespace-nowrap text-muted">{range(NIVEAUX.femme[i])}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-center text-xs text-muted">Sources : Zwift, TrainingPeaks, guides internationaux.</p>
      </div>
    </div>
  );
}

"use client";
import { useMemo, useState } from "react";

// Calculateur de temps triathlon, repris de Tri-Lab (mêmes formules et sources), au design du site.

type Distance = "sprint" | "olympique" | "70.3" | "ironman";
type SwimEnv = "bassin" | "mer_combi" | "mer_sans_combi";
type Experience = "premier" | "quelques" | "experimente";
type Scenario = "prudent" | "realiste" | "bonjour";

const DISTANCES: Record<Distance, { label: string; swim_m: number; bike_km: number; run_km: number }> = {
  sprint: { label: "Sprint", swim_m: 750, bike_km: 20, run_km: 5 },
  olympique: { label: "Olympique", swim_m: 1500, bike_km: 40, run_km: 10 },
  "70.3": { label: "70.3", swim_m: 1900, bike_km: 90, run_km: 21.1 },
  ironman: { label: "Ironman", swim_m: 3800, bike_km: 180, run_km: 42.2 },
};

// % de VMA correspondant a une course solo de la distance la plus proche du parcours course
// a pied de chaque format (memes reperes que le tableau des allures VMA utilise ailleurs sur le site :
// 5 km 94%, 10 km 90%, semi 85%, marathon 80%).
const SOLO_VMA_PCT: Record<Distance, number> = { sprint: 0.94, olympique: 0.9, "70.3": 0.85, ironman: 0.8 };

// % de ralentissement en course a pied vs allure solo (cf. recherche : 5-8% sprint/oly, 6-10% 70.3, 10-15%+ ironman).
const RUN_PENALTY: Record<Distance, Record<Experience, number>> = {
  sprint: { premier: 7.5, quelques: 6.5, experimente: 5.5 },
  olympique: { premier: 7.5, quelques: 6.5, experimente: 5.5 },
  "70.3": { premier: 10, quelques: 8, experimente: 6.5 },
  ironman: { premier: 17, quelques: 15, experimente: 12 },
};

// % de FTP cible selon la distance (cf. reperes Best Bike Split/TrainingPeaks : ~90/83/78/70%),
// varie legerement selon le scenario (jour prudent = plus prudent, bon jour = plus pousse).
const BIKE_PCT_FTP: Record<Distance, Record<Scenario, number>> = {
  sprint: { prudent: 0.86, realiste: 0.9, bonjour: 0.94 },
  olympique: { prudent: 0.79, realiste: 0.83, bonjour: 0.87 },
  "70.3": { prudent: 0.73, realiste: 0.78, bonjour: 0.82 },
  ironman: { prudent: 0.62, realiste: 0.68, bonjour: 0.74 },
};

// Cout du denivele sur la vitesse "plat" issue de la puissance, en fonction du D+/km du parcours.
// Echelle sourcee (sportcoaching.com.au, "Elevation Gain in Cycling") : 5 m/km = vallonne (gently rolling),
// 10 m/km = parcours franchement vallonne ("a hilly day"), 15 m/km = grosse journee de montagne ("serious climbing").
// On interpole entre ces reperes plutot que d'utiliser 3 categories a paliers, qui punissent trop fort
// pile a la frontiere (verifie sur un cas reel : Vichy 70.3, 1000 m D+ / 90 km = 11,1 m/km).
function profileCostPct(mPerKm: number): number {
  if (mPerKm <= 0) return 0;
  if (mPerKm <= 5) return mPerKm * 0.6; // 0 a 5 m/km : 0 a 3%
  if (mPerKm <= 10) return 3 + (mPerKm - 5) * 1.0; // 5 a 10 m/km : 3 a 8%
  if (mPerKm <= 15) return 8 + (mPerKm - 10) * 1.2; // 10 a 15 m/km : 8 a 14%
  return 14 + (mPerKm - 15) * 1.2; // au-dela : grosse montagne, continue a monter
}
function profileLabel(mPerKm: number): string {
  if (mPerKm < 5) return "Plat";
  if (mPerKm < 12) return "Vallonné";
  return "Montagneux";
}

const SWIM_ENV_PCT: Record<SwimEnv, number> = { bassin: 0, mer_combi: 2, mer_sans_combi: 10 };
// Le 400 m se nage a fond (quasi-anaerobie) : meme le 750 m ne se nage pas a cette allure, l'ecart le
// plus important se creuse tout de suite apres le 400 m, puis se tasse (1500 a 3800 m restent proches).
const SWIM_DISTANCE_PCT: Record<Distance, number> = { sprint: 6, olympique: 12, "70.3": 14, ironman: 16 };

// Transitions T1+T2 en minutes, selon distance et experience (cf. recherche + verification terrain :
// une T1 seule sur un 70.3 labellise peut depasser 5-6 min meme sans trainer, d'ou la hausse vs la premiere version).
const TRANSITIONS_MIN: Record<Distance, Record<Experience, number>> = {
  sprint: { premier: 5, quelques: 4, experimente: 3 },
  olympique: { premier: 6, quelques: 5, experimente: 4 },
  "70.3": { premier: 14, quelques: 11, experimente: 9 },
  ironman: { premier: 20, quelques: 14, experimente: 10 },
};

const SCENARIOS: { key: Scenario; label: string; emoji: string }[] = [
  { key: "prudent", label: "Jour prudent", emoji: "🌧️" },
  { key: "realiste", label: "Réaliste", emoji: "🎯" },
  { key: "bonjour", label: "Bon jour", emoji: "☀️" },
];

// Vitesse (m/s) atteinte pour une puissance donnee, en resolvant l'equation
// puissance = trainee aero + resistance au roulement, sur plat (approximation simplifiee,
// meme logique que les calculateurs vitesse/puissance usuels : CdA ~0.32, Crr ~0.005).
// Le cout du profil (vallonne/montagneux) est applique a part, cf. profileCostPct.
function speedFromPower(powerW: number, massKg: number): number {
  const RHO = 1.225;
  const CDA = 0.32;
  const CRR = 0.005;
  const G = 9.81;
  const f = (v: number) => 0.5 * RHO * CDA * v ** 3 + CRR * massKg * G * v;
  let lo = 0;
  let hi = 25;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (f(mid) < powerW) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2; // m/s
}

function fmtMin(totalMin: number): string {
  const m = Math.round(totalMin);
  const h = Math.floor(m / 60);
  const rest = m % 60;
  if (h <= 0) return `${rest} min`;
  return `${h} h ${String(rest).padStart(2, "0")}`;
}

const CARD = "rounded-2xl border border-white/10 bg-bg/60 p-4";
const LABEL = "eyebrow mb-2 block text-[0.65rem] text-muted";
const INPUT = "rounded-lg border border-line bg-bg px-2 py-1.5 text-center font-mono text-sm text-fg";
const RANGE = "flex-1 accent-[#3fe0ec]";

function PillGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { key: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          onClick={() => onChange(o.key)}
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
            value === o.key ? "border-accent bg-accent text-fg" : "border-line text-muted hover:border-accent/60 hover:text-fg"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function TimeCalculator() {
  const [distance, setDistance] = useState<Distance>("olympique");

  // Tes donnees (performances mesurees, independantes du parcours du jour)
  const [swimMin, setSwimMin] = useState(7);
  const [swimSec, setSwimSec] = useState(30);
  const [ftp, setFtp] = useState(230);
  const [poids, setPoids] = useState(75);
  const [vma, setVma] = useState(15);

  // Conditions de course (varient selon l'epreuve, pas selon toi)
  const [swimEnv, setSwimEnv] = useState<SwimEnv>("bassin");
  const [deniv, setDeniv] = useState(500);
  const [experience, setExperience] = useState<Experience>("quelques");

  const result = useMemo(() => {
    const d = DISTANCES[distance];
    const swimPaceSec100 = (swimMin * 60 + swimSec) / 4; // 400 m -> sec/100m
    const runBasePaceMinKm = 60 / (vma * SOLO_VMA_PCT[distance]);
    const mass = poids + 10; // + velo/equipement
    const transitionsMin = TRANSITIONS_MIN[distance][experience];
    const mPerKm = deniv / d.bike_km;
    const profileMult = 1 - profileCostPct(mPerKm) / 100;

    const byScenario = SCENARIOS.map(({ key }) => {
      const swimPct = Math.max(0, SWIM_ENV_PCT[swimEnv] + SWIM_DISTANCE_PCT[distance] + (key === "prudent" ? 3 : key === "bonjour" ? -3 : 0));
      const swimTimeMin = ((d.swim_m / 100) * (swimPaceSec100 * (1 + swimPct / 100))) / 60;

      const targetPowerW = ftp * BIKE_PCT_FTP[distance][key];
      const speedMs = speedFromPower(targetPowerW, mass);
      const speedKmh = Math.max(speedMs * 3.6 * profileMult, 5);
      const bikeTimeMin = (d.bike_km / speedKmh) * 60;

      const runPct = Math.max(3, RUN_PENALTY[distance][experience] + (key === "prudent" ? 2.5 : key === "bonjour" ? -2.5 : 0));
      const runTimeMin = d.run_km * (runBasePaceMinKm * (1 + runPct / 100));

      const totalMin = swimTimeMin + transitionsMin + bikeTimeMin + runTimeMin;
      return { key, swimTimeMin, bikeTimeMin, runTimeMin, transitionsMin, totalMin, speedKmh };
    });

    return { byScenario, mPerKm };
  }, [distance, swimMin, swimSec, ftp, poids, vma, swimEnv, deniv, experience]);

  const realiste = result.byScenario.find((s) => s.key === "realiste")!;

  return (
    <div className="neon my-10 rounded-3xl bg-panel p-5 md:p-8">
      <p className="eyebrow text-accent">Outil gratuit</p>
      <p className="heading mt-1 mb-6 text-xl text-fg md:text-2xl">Calculateur de temps triathlon</p>

      <div className="mb-6">
        <span className={LABEL}>Ta course</span>
        <PillGroup
          options={(Object.keys(DISTANCES) as Distance[]).map((k) => ({ key: k, label: DISTANCES[k].label }))}
          value={distance}
          onChange={setDistance}
        />
      </div>

      <span className={LABEL}>Tes données</span>
      <div className="mb-6 grid gap-3 md:grid-cols-3">
        <div className={CARD}>
          <p className="mb-2 text-sm font-semibold text-fg">🏊 Nage : 400 m à fond</p>
          <div className="flex items-center gap-1.5">
            <input type="number" min={4} max={20} value={swimMin} onChange={(e) => setSwimMin(Number(e.target.value))} className={`${INPUT} w-14`} aria-label="Minutes 400 m" />
            <span className="text-sm text-muted">min</span>
            <input type="number" min={0} max={59} value={swimSec} onChange={(e) => setSwimSec(Number(e.target.value))} className={`${INPUT} w-14`} aria-label="Secondes 400 m" />
            <span className="text-sm text-muted">s</span>
          </div>
        </div>

        <div className={CARD}>
          <p className="mb-2 text-sm font-semibold text-fg">🚴 Vélo : FTP et poids</p>
          <div className="mb-3 flex items-center gap-2">
            <input type="range" min={100} max={400} value={ftp} onChange={(e) => setFtp(Number(e.target.value))} className={RANGE} aria-label="FTP en watts" />
            <span className="w-16 text-right font-mono text-sm text-fg">{ftp} W</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="range" min={45} max={110} value={poids} onChange={(e) => setPoids(Number(e.target.value))} className={RANGE} aria-label="Poids en kg" />
            <span className="w-16 text-right font-mono text-sm text-fg">{poids} kg</span>
          </div>
        </div>

        <div className={CARD}>
          <p className="mb-2 text-sm font-semibold text-fg">🏃 Course : ta VMA</p>
          <div className="flex items-center gap-2">
            <input type="range" min={9} max={22} step={0.5} value={vma} onChange={(e) => setVma(Number(e.target.value))} className={RANGE} aria-label="VMA en km/h" />
            <span className="w-20 text-right font-mono text-sm text-fg">{vma} km/h</span>
          </div>
        </div>
      </div>

      <span className={LABEL}>Conditions de course (ce qui varie selon l&apos;épreuve)</span>
      <div className={`${CARD} mb-6 grid gap-5 sm:grid-cols-3`}>
        <div>
          <span className={LABEL}>Environnement nage</span>
          <PillGroup
            options={[
              { key: "bassin" as SwimEnv, label: "Bassin" },
              { key: "mer_combi" as SwimEnv, label: "Mer/lac + combi" },
              { key: "mer_sans_combi" as SwimEnv, label: "Mer/lac sans combi" },
            ]}
            value={swimEnv}
            onChange={setSwimEnv}
          />
        </div>
        <div>
          <span className={LABEL}>D+ du parcours vélo</span>
          <div className="mb-1 flex items-center gap-1.5">
            <input type="number" min={0} max={5000} step={50} value={deniv} onChange={(e) => setDeniv(Number(e.target.value))} className={`${INPUT} w-24`} aria-label="Dénivelé positif vélo en mètres" />
            <span className="text-sm text-muted">m</span>
          </div>
          <p className="text-xs text-muted">
            ≈ {result.mPerKm.toFixed(1)} m/km · <span className="font-semibold text-fg">{profileLabel(result.mPerKm)}</span>
          </p>
        </div>
        <div>
          <span className={LABEL}>Ton expérience sur cette distance</span>
          <PillGroup
            options={[
              { key: "premier" as Experience, label: "1er triathlon" },
              { key: "quelques" as Experience, label: "Quelques courses" },
              { key: "experimente" as Experience, label: "Expérimenté(e)" },
            ]}
            value={experience}
            onChange={setExperience}
          />
        </div>
      </div>

      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        {result.byScenario.map((s) => {
          const meta = SCENARIOS.find((m) => m.key === s.key)!;
          const isReal = s.key === "realiste";
          return (
            <div
              key={s.key}
              className={`rounded-2xl border p-4 text-center ${
                isReal ? "border-accent bg-accent text-fg shadow-[0_0_30px_rgba(0,129,143,0.6)]" : "border-white/10 bg-bg/60 text-fg"
              }`}
            >
              <p className={`eyebrow mb-1 text-[0.65rem] ${isReal ? "text-fg/80" : "text-muted"}`}>
                {meta.emoji} {meta.label}
              </p>
              <p className="font-mono text-2xl font-extrabold">{fmtMin(s.totalMin)}</p>
            </div>
          );
        })}
      </div>

      <div className={`${CARD} mb-4`}>
        <p className="mb-3 text-sm font-semibold text-fg">Détail du scénario « Réaliste »</p>
        <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          {[
            ["Nage", fmtMin(realiste.swimTimeMin), null],
            ["T1 + T2", fmtMin(realiste.transitionsMin), null],
            ["Vélo", fmtMin(realiste.bikeTimeMin), `${realiste.speedKmh.toFixed(1)} km/h`],
            ["Course", fmtMin(realiste.runTimeMin), null],
          ].map(([label, value, sub]) => (
            <div key={label}>
              <p className="eyebrow text-[0.6rem] text-muted">{label}</p>
              <p className="font-mono font-bold text-fg">{value}</p>
              {sub && <p className="text-[0.65rem] text-muted">{sub}</p>}
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs leading-relaxed text-muted">
        Estimation à partir de données de recherche et d&apos;heuristiques de coachs (détaillées plus bas), pas une promesse.
        Météo, forme du jour et gestion de course peuvent la faire bouger de plusieurs minutes.
      </p>
    </div>
  );
}

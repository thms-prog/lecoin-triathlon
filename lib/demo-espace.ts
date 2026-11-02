// TEMP /variantes : données fictives de l'espace client (athlète + coach), déterministes.
// La charge suit la logique décidée : le coach écrit les séances, l'athlète les valide ;
// une séance validée compte sa charge prévue, une séance manquée ne compte rien.

export type Sport = "swim" | "bike" | "run";
export const SPORTS: Sport[] = ["swim", "bike", "run"];
export const SPORT_LABEL: Record<Sport, string> = { swim: "Nage", bike: "Vélo", run: "Course" };
// Palette validée (dataviz) sur les deux fonds du site : #121923 et #0b0f16.
export const SPORT_COLOR: Record<Sport, string> = { swim: "#169fac", bike: "#8b67d9", run: "#bf8228" };

export const DEMO_TODAY = "2026-11-05";

export const ATHLETE = {
  name: "Julie Martin",
  initials: "JM",
  goal: "Ironman 70.3 Aix-en-Provence",
  raceDate: "2027-05-16",
  coachSince: "2026-08-17",
};

// Générateur pseudo-aléatoire stable (mêmes données à chaque rendu, serveur comme client).
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const addDays = (iso: string, n: number) => {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

// Semaine type : charge prévue (minutes, intensité) par jour, du lundi au samedi.
const WEEK_PATTERN: { sport: Sport; min: number; if: number }[] = [
  { sport: "swim", min: 45, if: 0.7 },
  { sport: "run", min: 50, if: 0.82 },
  { sport: "bike", min: 65, if: 0.8 },
  { sport: "swim", min: 50, if: 0.8 },
  { sport: "run", min: 45, if: 0.68 },
  { sport: "bike", min: 110, if: 0.7 },
];

export type DayLoad = { date: string; sport: Sport | null; plannedMin: number; doneMin: number; load: number };
export type WeekVolume = { start: string; planned: Record<Sport, number>; done: Record<Sport, number> };
export type FormPoint = { date: string; ctl: number; atl: number; tsb: number };

// 12 semaines (17 août → 8 nov) : 3 semaines qui montent, 1 plus légère.
function buildDays(seed: number, compliance: number): DayLoad[] {
  const r = rng(seed);
  const days: DayLoad[] = [];
  for (let w = 0; w < 12; w++) {
    // Volume qui monte de semaine en semaine (×0,7 → ×1,25), semaine légère toutes les 4.
    const factor = (0.7 + w * 0.05) * (w % 4 === 3 ? 0.7 : 1);
    for (let d = 0; d < 7; d++) {
      const date = addDays(ATHLETE.coachSince, w * 7 + d);
      if (d === 6) {
        days.push({ date, sport: null, plannedMin: 0, doneMin: 0, load: 0 });
        continue;
      }
      const p = WEEK_PATTERN[d];
      const plannedMin = Math.round(p.min * factor);
      const future = date > DEMO_TODAY;
      const done = !future && r() < compliance;
      const doneMin = done ? plannedMin : 0;
      // Charge façon TSS : heures × intensité² × 100.
      const load = done ? Math.round((doneMin / 60) * p.if * p.if * 100) : 0;
      days.push({ date, sport: p.sport, plannedMin, doneMin, load });
    }
  }
  return days;
}

// Forme (moyenne 42 j), fatigue (moyenne 7 j), fraîcheur = forme − fatigue.
function buildForm(days: DayLoad[], start = 28): FormPoint[] {
  let ctl = start;
  let atl = start;
  return days
    .filter((d) => d.date <= DEMO_TODAY)
    .map((d) => {
      ctl += (d.load - ctl) / 42;
      atl += (d.load - atl) / 7;
      return { date: d.date, ctl: Math.round(ctl), atl: Math.round(atl), tsb: Math.round(ctl - atl) };
    });
}

function buildWeeks(days: DayLoad[]): WeekVolume[] {
  const weeks: WeekVolume[] = [];
  for (let i = 0; i < days.length; i += 7) {
    const slice = days.slice(i, i + 7);
    const zero = () => ({ swim: 0, bike: 0, run: 0 });
    const w: WeekVolume = { start: slice[0].date, planned: zero(), done: zero() };
    for (const d of slice) {
      if (!d.sport) continue;
      w.planned[d.sport] += d.plannedMin;
      w.done[d.sport] += d.doneMin;
    }
    weeks.push(w);
  }
  return weeks;
}

const days = buildDays(7, 0.9);
export const DAYS = days;
export const FORM = buildForm(days);
export const WEEKS = buildWeeks(days);

export const TESTS = {
  ftp: { label: "FTP", unit: "W", better: "up" as const, points: [{ date: "2026-08-20", v: 212 }, { date: "2026-09-24", v: 218 }, { date: "2026-10-22", v: 226 }] },
  vma: { label: "VMA", unit: "km/h", better: "up" as const, points: [{ date: "2026-08-22", v: 14.6 }, { date: "2026-09-26", v: 14.9 }, { date: "2026-10-24", v: 15.2 }] },
  css: { label: "CSS", unit: "/100 m", better: "down" as const, points: [{ date: "2026-08-21", v: 118 }, { date: "2026-09-25", v: 114 }, { date: "2026-10-23", v: 111 }] },
};
export const fmtPace = (sec: number) => `${Math.floor(sec / 60)}'${String(sec % 60).padStart(2, "0")}`;

// Statut des séances de la semaine en cours (aujourd'hui = jeudi 5).
export type SessionStatus = "done" | "missed" | "today" | "upcoming";
export const WEEK_STATUS: { status: SessionStatus; rpe?: number; comment?: string }[] = [
  { status: "done", rpe: 4 },
  { status: "done", rpe: 8, comment: "Côtes dures à partir de la 6e, mais foulée tenue." },
  { status: "missed", comment: "Réunion tardive, pas pu caler le home trainer." },
  { status: "today" },
  { status: "upcoming" },
  { status: "upcoming" },
];

export const THREAD = [
  { from: "athlete" as const, at: "Mar. 3 · 20:14", text: "Côtes dures à partir de la 6e, mais foulée tenue. RPE 8." },
  { from: "coach" as const, at: "Mar. 3 · 21:02", text: "Parfait, c'est exactement l'effort visé. Garde ce relâchement des épaules dans les dernières." },
  { from: "athlete" as const, at: "Mer. 4 · 22:40", text: "Réunion tardive, pas pu caler le home trainer ce soir." },
];

export const daysToRace = Math.round((Date.parse(ATHLETE.raceDate) - Date.parse(DEMO_TODAY)) / 86_400_000);
export const compliance = (() => {
  const past = days.filter((d) => d.sport && d.date <= DEMO_TODAY && d.date >= addDays(DEMO_TODAY, -27));
  return Math.round((past.filter((d) => d.doneMin > 0).length / past.length) * 100);
})();

// Vue coach : 5 athlètes fictifs, avec ce qui demande ton attention.
export type CoachAthlete = {
  name: string;
  initials: string;
  goal: string;
  compliance: number;
  tsb: number;
  ctl: number;
  loads: number[];
  alerts: ("comment" | "missed" | "fatigue")[];
  last: string;
};
export const COACH_ATHLETES: CoachAthlete[] = [
  { seed: 7, c: 0.9, name: "Julie Martin", goal: "70.3 Aix · mai 2027", alerts: ["comment"] as const, last: "Réunion tardive, pas pu caler le home trainer." },
  { seed: 11, c: 0.97, name: "Marc Dubois", goal: "Ironman Nice · juin 2027", alerts: ["fatigue"] as const, last: "Jambes lourdes depuis samedi." },
  { seed: 23, c: 1, name: "Sofia Lambert", goal: "Sprint Paris · avril 2027", alerts: [] as const, last: "Tout validé, super semaine !" },
  { seed: 31, c: 0.6, name: "Karim Haddad", goal: "Olympique Deauville · juin 2027", alerts: ["missed"] as const, last: "Semaine compliquée au boulot." },
  { seed: 41, c: 0.88, name: "Léa Fontaine", goal: "70.3 Vichy · août 2027", alerts: [] as const, last: "Nage CSS validée, 1'52 de moyenne." },
].map(({ seed, c, name, goal, alerts, last }) => {
  const d = buildDays(seed, c);
  const form = buildForm(d, 22 + (seed % 15));
  const end = form[form.length - 1];
  const past = d.filter((x) => x.sport && x.date <= DEMO_TODAY && x.date >= addDays(DEMO_TODAY, -27));
  return {
    name,
    initials: name.split(" ").map((p) => p[0]).join(""),
    goal,
    compliance: Math.round((past.filter((x) => x.doneMin > 0).length / past.length) * 100),
    tsb: name === "Marc Dubois" ? Math.min(end.tsb, -24) : end.tsb,
    ctl: end.ctl,
    loads: buildWeeks(d).slice(-8).map((w) => SPORTS.reduce((s, k) => s + w.done[k], 0)),
    alerts: [...alerts],
    last,
  };
});

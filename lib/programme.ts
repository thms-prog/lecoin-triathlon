import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type { Discipline, Workout, WorkoutBlock } from "@/data/workouts";

// Lit le programme écrit en texte (data/programme/AAAA-MM.md, format décrit dans FORMAT.md)
// et le transforme en séances. Exécuté côté serveur uniquement.

const DIR = path.join(process.cwd(), "data", "programme");

const MONTHS: Record<string, number> = {
  janvier: 1, fevrier: 2, février: 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7,
  aout: 8, août: 8, septembre: 9, octobre: 10, novembre: 11, decembre: 12, décembre: 12,
};
const DISCIPLINES: Record<string, Discipline | "rest"> = {
  nage: "swim", natation: "swim", velo: "bike", vélo: "bike", course: "run", repos: "rest",
};

const pad = (n: number) => String(n).padStart(2, "0");
// Les blocs en distance (natation) sont convertis en temps pour le profil et la durée totale,
// sur une base de 2'00/100 m : 1 minute pour 50 m.

// « 10' » → 10 min · « 1h30 » → 90 · « 30'' » → 0,5 · « 300 m » / « 1,5 km » → mètres.
function quantity(s: string): { min?: number; meters?: number } | null {
  const t = s.trim().toLowerCase().replace(",", ".");
  let m = t.match(/^(\d+)\s*h\s*(\d+)?$/);
  if (m) return { min: Number(m[1]) * 60 + Number(m[2] ?? 0) };
  m = t.match(/^(\d+(?:\.\d+)?)\s*(?:''|"|s)$/);
  if (m) return { min: Number(m[1]) / 60 };
  m = t.match(/^(\d+(?:\.\d+)?)\s*(?:'|min)$/);
  if (m) return { min: Number(m[1]) };
  m = t.match(/^(\d+(?:\.\d+)?)\s*km$/);
  if (m) return { meters: Number(m[1]) * 1000 };
  m = t.match(/^(\d+)\s*m$/);
  if (m) return { meters: Number(m[1]) };
  return null;
}

// « 75% FTP » · « 55-65% FTP » (milieu pour le profil, fourchette affichée) · « RPE 6 ».
function intensity(s: string): Partial<WorkoutBlock> | null {
  const t = s.trim();
  let m = t.match(/^(\d+)(?:\s*-\s*(\d+))?\s*%\s*(FTP|VMA|CSS)$/i);
  if (m) {
    const lo = Number(m[1]);
    const hi = Number(m[2] ?? m[1]);
    const key = m[3].toLowerCase() as "ftp" | "vma" | "css";
    return { [key]: String((lo + hi) / 200), ...(m[2] ? { label: `${lo}-${hi}%` } : {}) };
  }
  m = t.match(/^RPE\s*(\d+)(?:\s*-\s*(\d+))?$/i);
  if (m) return { rpe: m[2] ? String((Number(m[1]) + Number(m[2])) / 2) : m[1], ...(m[2] ? { label: `${m[1]}-${m[2]}` } : {}) };
  return null;
}

// Un bloc simple : « durée · intensité · consigne » (intensité et consigne facultatives).
function simpleBlock(raw: string, where: string): WorkoutBlock {
  const parts = raw.split("·").map((p) => p.trim()).filter(Boolean);
  const q = quantity(parts[0] ?? "");
  if (!q) throw new Error(`${where} : durée ou distance illisible « ${parts[0]} »`);
  const i = parts[1] ? intensity(parts[1]) : null;
  const text = parts.slice(i ? 2 : 1).join(" · ");
  return { text, ...q, ...i };
}

// « 4 × [5' · 75% FTP · assis | 3' · 55% FTP · récup] » : une ligne dans la liste,
// des segments développés pour le profil.
function repeatBlock(count: number, inner: string, extra: string, where: string): WorkoutBlock {
  const steps = inner.split("|").map((s) => simpleBlock(s, where));
  const segments = Array.from({ length: count }, () => steps).flat();
  const min = segments.reduce((s, b) => s + (b.min ?? (b.meters ?? 0) / 50), 0);
  const meters = steps.every((s) => s.meters) ? segments.reduce((s, b) => s + (b.meters ?? 0), 0) : undefined;
  const describe = (b: WorkoutBlock) =>
    [b.min ? `${fmt(b.min)}` : `${b.meters} m`, b.label ? `${b.label} ${unit(b)}` : pct(b), b.text].filter(Boolean).join(" ");
  const text = `${count} × [${steps.map(describe).join(" + ")}]${extra ? ` · ${extra}` : ""}`;
  // Intensité affichée dans la liste : celle de l'effort (premier pas de la répétition).
  const { ftp, vma, css, rpe } = steps[0];
  return { text, ftp, vma, css, rpe, segments, ...(meters ? { meters } : { min }) };
}

const unit = (b: WorkoutBlock) => (b.ftp ? "FTP" : b.vma ? "VMA" : b.css ? "CSS" : b.rpe ? "RPE" : "");
const pct = (b: WorkoutBlock) => {
  const r = b.ftp ?? b.vma ?? b.css;
  return r ? `${Math.round(Number(r) * 100)}% ${unit(b)}` : b.rpe ? `RPE ${b.rpe}` : "";
};
const fmt = (min: number) => (min < 1 ? `${Math.round(min * 60)}''` : `${Math.round(min)}'`);

// Durée totale lisible : « 45' », « 1h », « 1h15 ».
function duration(blocks: WorkoutBlock[]): string {
  const total = Math.round(blocks.reduce((s, b) => s + (b.min ?? (b.meters ?? 0) / 50), 0));
  if (total < 60) return `${total}'`;
  const h = Math.floor(total / 60);
  const m = total % 60;
  return m ? `${h}h${pad(m)}` : `${h}h`;
}

export function parseMonth(file: string, text: string): Workout[] {
  const [year] = file.split("-").map(Number);
  const workouts: Workout[] = [];
  let current: (Workout & { rest?: boolean }) | null = null;
  const summary: string[] = [];

  const flush = () => {
    if (current && !current.rest) {
      current.summary = summary.join(" ").trim();
      current.duration = duration(current.blocks);
      workouts.push(current);
    }
    summary.length = 0;
  };

  text.split(/\r?\n/).forEach((line, n) => {
    const where = `${file} ligne ${n + 1}`;
    const t = line.trim();
    if (!t || t.startsWith("<!--")) return;
    const head = t.match(/^##\s+\S+\s+(\d{1,2})\s+(\S+)(?:\s+(\d{4}))?\s*·\s*([^·]+?)(?:\s*·\s*(.+))?$/);
    if (head) {
      flush();
      const month = MONTHS[head[2].toLowerCase()];
      const disc = DISCIPLINES[head[4].trim().toLowerCase()];
      if (!month) throw new Error(`${where} : mois inconnu « ${head[2]} »`);
      if (!disc) throw new Error(`${where} : discipline inconnue « ${head[4]} » (Nage, Vélo, Course ou Repos)`);
      const date = `${head[3] ?? year}-${pad(month)}-${pad(Number(head[1]))}`;
      current = { date, discipline: disc === "rest" ? "run" : disc, title: head[5]?.trim() ?? "", duration: "", summary: "", blocks: [], rest: disc === "rest" };
      return;
    }
    if (!current) return;
    if (t.startsWith(">")) {
      current.blocks.push({ text: t.replace(/^>\s*/, ""), note: true });
      return;
    }
    if (t.startsWith("-")) {
      const body = t.replace(/^-\s*/, "");
      const rep = body.match(/^(\d+)\s*[×x]\s*\[(.+)\]\s*(?:·\s*(.+))?$/);
      current.blocks.push(rep ? repeatBlock(Number(rep[1]), rep[2], rep[3] ?? "", where) : simpleBlock(body, where));
      return;
    }
    if (!current.blocks.length) summary.push(t);
  });
  flush();
  return workouts;
}

// Toutes les séances écrites, triées par date.
export function loadProgramme(): Workout[] {
  let files: string[] = [];
  try {
    files = readdirSync(DIR).filter((f) => /^\d{4}-\d{2}\.md$/.test(f));
  } catch {
    return [];
  }
  return files
    .flatMap((f) => parseMonth(f, readFileSync(path.join(DIR, f), "utf8")))
    .sort((a, b) => a.date.localeCompare(b.date));
}

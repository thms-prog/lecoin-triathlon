import "server-only";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

// Stockage clé-valeur de l'espace client.
// Production : Redis Upstash par son API REST (KV_REST_API_URL / KV_REST_API_TOKEN, déjà sur Vercel).
// Développement sans ces variables : un fichier local .data/store.json (ignoré par git).
// Toutes les clés sont préfixées « lt: » : l'instance Redis pourra servir aux autres sites Lecoin.

const PREFIX = "lt:";

export interface Store {
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: unknown, ttlSeconds?: number): Promise<void>;
  del(key: string): Promise<void>;
  sadd(key: string, member: string): Promise<void>;
  smembers(key: string): Promise<string[]>;
  // Compteur avec expiration posée à la création (limitation de débit).
  incr(key: string, ttlSeconds: number): Promise<number>;
}

function upstash(url: string, token: string): Store {
  const call = async (...cmd: (string | number)[]) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(cmd),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Upstash ${cmd[0]} : HTTP ${res.status}`);
    return ((await res.json()) as { result: unknown }).result;
  };
  return {
    async get<T>(key: string) {
      const raw = (await call("GET", PREFIX + key)) as string | null;
      return raw === null ? null : (JSON.parse(raw) as T);
    },
    async set(key, value, ttl) {
      const args: (string | number)[] = ["SET", PREFIX + key, JSON.stringify(value)];
      if (ttl) args.push("EX", ttl);
      await call(...args);
    },
    async del(key) {
      await call("DEL", PREFIX + key);
    },
    async sadd(key, member) {
      await call("SADD", PREFIX + key, member);
    },
    async smembers(key) {
      return ((await call("SMEMBERS", PREFIX + key)) as string[]) ?? [];
    },
    async incr(key, ttl) {
      const n = (await call("INCR", PREFIX + key)) as number;
      if (n === 1) await call("EXPIRE", PREFIX + key, ttl);
      return n;
    },
  };
}

type Entry = { v: unknown; exp?: number };

function localFile(): Store {
  const file = path.join(process.cwd(), ".data", "store.json");
  const load = (): Record<string, Entry> => {
    try {
      return JSON.parse(readFileSync(file, "utf8"));
    } catch {
      return {};
    }
  };
  const save = (db: Record<string, Entry>) => {
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, JSON.stringify(db, null, 2));
  };
  const live = (db: Record<string, Entry>, key: string) => {
    const e = db[key];
    if (e?.exp && e.exp < Date.now()) {
      delete db[key];
      return undefined;
    }
    return e;
  };
  return {
    async get<T>(key: string) {
      return (live(load(), key)?.v as T) ?? null;
    },
    async set(key, value, ttl) {
      const db = load();
      db[key] = { v: value, ...(ttl ? { exp: Date.now() + ttl * 1000 } : {}) };
      save(db);
    },
    async del(key) {
      const db = load();
      delete db[key];
      save(db);
    },
    async sadd(key, member) {
      const db = load();
      const set = new Set((live(db, key)?.v as string[]) ?? []);
      set.add(member);
      db[key] = { v: [...set] };
      save(db);
    },
    async smembers(key) {
      return (live(load(), key)?.v as string[]) ?? [];
    },
    async incr(key, ttl) {
      const db = load();
      const e = live(db, key);
      const n = ((e?.v as number) ?? 0) + 1;
      db[key] = { v: n, exp: e?.exp ?? Date.now() + ttl * 1000 };
      save(db);
      return n;
    },
  };
}

const url = process.env.KV_REST_API_URL;
const token = process.env.KV_REST_API_TOKEN;
if (!url && process.env.VERCEL_ENV === "production") {
  throw new Error("KV_REST_API_URL manquant en production : l'espace client ne peut pas stocker ses données.");
}

export const store: Store = url && token ? upstash(url, token) : localFile();

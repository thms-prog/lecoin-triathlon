"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BLOG_POSTS } from "@/data/home";
import { formatPostDate } from "../home/Blog";
import FilterChips from "./FilterChips";

const POSTS = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
const CATEGORIES = [...new Set(POSTS.map((p) => p.category))];

// Tous les articles, du plus récent au plus ancien, filtrables par catégorie.
export default function BlogIndex() {
  const [filter, setFilter] = useState<string | null>(null);
  const posts = filter ? POSTS.filter((p) => p.category === filter) : POSTS;

  return (
    <>
      <FilterChips options={CATEGORIES} value={filter} onChange={setFilter} total={POSTS.length} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug} className="animate-[fadeIn_.4s_ease-out]">
            <Link href={`/blog/${p.slug}`} className="group block">
              <div className="relative aspect-16/10 overflow-hidden rounded-3xl ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_0_60px_-15px_var(--accent)] group-hover:ring-accent">
                <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-4 text-accent">{p.category} · {formatPostDate(p.date)}</p>
              <p className="heading mt-2 text-xl transition group-hover:text-accent">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

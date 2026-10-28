"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BLOG_POSTS, latestPosts } from "@/data/home";
import SeeAll from "./SeeAll";
import StoryBar from "./StoryBar";
import Section from "./Section";
import { useSeen, useSwipe } from "./useSwipe";

const POSTS = latestPosts(6);
const AUTOPLAY = "7s";

export const formatPostDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

const pad = (n: number) => String(n).padStart(2, "0");

// « À la une » des derniers articles : onglets en haut comme le matériel, qui défilent tout seuls
// façon stories (pause au survol) ; l'image, dans un cadre néon, se fait glisser au doigt
// ou à la souris. Le dernier onglet mène à tous les articles.
export default function Blog() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const [hintRef, seen] = useSeen<HTMLDivElement>();
  const post = POSTS[active];
  const step = (dir: 1 | -1) => setActive((i) => (i + dir + POSTS.length) % POSTS.length);
  const { dx, dragging, handlers } = useSwipe((dir) => {
    setSwiped(true);
    step(dir);
  });

  return (
    <Section
      id="blog"
      tone="light"
      eyebrow="Blog · Derniers articles"
      title="Comprendre pour mieux s'entraîner"
      action={<SeeAll href="/blog" count={BLOG_POSTS.length} />}
    >
      <div onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} className="space-y-6 md:space-y-12">
        {/* Smartphone : barres façon stories qui tiennent toutes dans la largeur. PC : onglets titrés. */}
        <div role="tablist" className="flex gap-1.5 md:grid md:grid-cols-7 md:gap-4">
          {POSTS.map((p, i) => {
            const on = i === active;
            return (
              <button key={p.slug} type="button" role="tab" aria-selected={on} aria-label={p.title} onClick={() => setActive(i)} className="group min-w-0 flex-1 py-2 text-left md:py-0">
                <StoryBar
                  state={on ? "current" : i < active ? "done" : "todo"}
                  duration={AUTOPLAY}
                  running={seen && !paused && !dragging}
                  onEnd={() => step(1)}
                  className="h-1 rounded-full bg-ink/10 md:h-0.5 md:rounded-none"
                />
                <span className={`heading mt-3 hidden text-sm transition md:block ${on ? "text-accent" : "text-ink/35 group-hover:text-ink/60"}`}>{pad(i + 1)}</span>
                <span className={`mt-0.5 hidden text-sm leading-snug transition md:line-clamp-2 ${on ? "text-ink" : "text-ink-muted group-hover:text-ink"}`}>{p.title}</span>
              </button>
            );
          })}
          <Link href="/blog" className="group hidden md:block">
            <span className="block h-0.5 bg-[repeating-linear-gradient(90deg,var(--accent)_0_6px,transparent_6px_10px)] opacity-60 transition group-hover:opacity-100" />
            <span className="heading mt-3 block text-sm text-accent">Tout voir →</span>
            <span className="mt-0.5 block text-sm text-ink-muted transition group-hover:text-ink">{BLOG_POSTS.length} articles</span>
          </Link>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div ref={hintRef} className="relative">
            <span
              aria-hidden
              className="display-xl pointer-events-none absolute -top-10 -right-2 hidden text-[11rem] text-transparent [-webkit-text-stroke:1px_rgba(11,15,22,0.12)] md:block"
            >
              {pad(active + 1)}
            </span>
            <div
              {...handlers}
              className="neon relative aspect-16/10 cursor-grab touch-pan-y overflow-hidden rounded-3xl bg-bg select-none active:cursor-grabbing"
            >
              <div className={seen && !swiped ? "h-full animate-[nudge_1.2s_ease-in-out_.4s_2]" : "h-full"}>
                <div
                  className="flex h-full"
                  style={{
                    transform: `translateX(calc(${-active * 100}% + ${dx}px))`,
                    transition: dragging ? "none" : "transform .6s cubic-bezier(.2,.8,.2,1)",
                  }}
                >
                  {POSTS.map((p) => (
                    <div key={p.slug} className="relative h-full w-full shrink-0">
                      <Image src={p.image} alt="" fill draggable={false} sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/85 via-transparent to-transparent" />
              {!swiped && (
                <span className="eyebrow pointer-events-none absolute top-4 right-4 rounded-full bg-bg/60 px-3 py-1.5 text-white/90 backdrop-blur">
                  ‹ Glisse ›
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-5">
                <p className="heading pointer-events-none text-sm tabular-nums text-white/80">{pad(active + 1)} / {pad(POSTS.length)}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  draggable={false}
                  className="heading flex items-center gap-2 rounded-full bg-accent py-2.5 pr-2.5 pl-5 text-sm text-fg shadow-[0_0_24px_rgba(0,129,143,0.8)] transition hover:shadow-[0_0_36px_rgba(63,224,236,0.9)]"
                >
                  Lire
                  <span className="flex size-7 items-center justify-center rounded-full bg-fg text-accent">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <div key={post.slug} className="animate-[fadeIn_.5s_ease-out]">
            <p className="eyebrow text-accent">{post.category} · {formatPostDate(post.date)}</p>
            <h3 className="heading mt-3 text-2xl text-balance md:text-4xl">
              <Link href={`/blog/${post.slug}`} className="transition hover:text-accent">{post.title}</Link>
            </h3>
            <p className="mt-4 max-w-lg border-l-2 border-accent pl-4 leading-relaxed text-ink-muted">{post.excerpt}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

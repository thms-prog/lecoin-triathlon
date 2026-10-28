import Image from "next/image";
import FilmGrain from "./FilmGrain";
import IntensityProfile from "./IntensityProfile";
import { DISCIPLINE_HERO, DISCIPLINE_LABEL, type Workout } from "@/data/workouts";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });
}

// Smartphone : image en haut, texte dessous, le tout tient sur un écran.
// PC : image plein cadre, texte en fondu sur la droite (le sujet est à gauche).
export default function TodayHero({ workout }: { workout: Workout }) {
  return (
    <section className="relative flex h-[calc(100svh-3.5rem)] flex-col md:block">
      <div className="relative flex-1 md:absolute md:inset-0">
        <Image
          src={DISCIPLINE_HERO[workout.discipline]}
          alt=""
          fill
          preload
          quality={90}
          sizes="100vw"
          className="object-cover object-[25%_center] md:object-left"
        />
        <FilmGrain />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/10 to-transparent md:bg-linear-to-l md:from-bg/95 md:via-bg/50 md:to-transparent" />
        {/* PC : fondu vers le bas pour enchaîner sans coupure avec la séance détaillée. */}
        <div className="absolute inset-x-0 -bottom-px hidden h-64 bg-linear-to-t from-bg from-10% via-bg/70 to-transparent md:block" />
      </div>

      <div className="relative px-5 pb-10 md:mx-auto md:flex md:h-full md:max-w-350 md:items-center md:justify-end md:px-12 md:pb-0 lg:px-20">
        {/* Panneau de verre : discipline en contour néon, titre, profil d'intensité de la séance. */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg/45 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl md:w-[30rem] md:p-8">
          <span aria-hidden className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[#3fe0ec] to-transparent" />
          <p className="eyebrow text-muted">Entraînement du jour · {formatDate(workout.date)}</p>
          <h1 className="display-xl mt-3 text-5xl text-transparent [-webkit-text-stroke:1.5px_#3fe0ec] [text-shadow:0_0_28px_rgba(0,129,143,0.75)] md:text-6xl">
            {DISCIPLINE_LABEL[workout.discipline]}
          </h1>
          <p className="heading mt-2 text-xl md:text-2xl">{workout.title}</p>
          <div className="mt-5 md:mt-6">
            <div className="mb-2 flex justify-between text-xs text-muted">
              <span>Profil de la séance</span>
              <span className="tabular-nums">{workout.duration}</span>
            </div>
            <IntensityProfile workout={workout} height={56} />
          </div>
          <a
            href="#seance"
            className="heading mt-5 inline-flex items-center gap-2 rounded-full bg-accent py-2.5 pr-2.5 pl-6 text-sm text-fg shadow-[0_0_24px_rgba(0,129,143,0.8)] transition hover:shadow-[0_0_36px_rgba(63,224,236,0.9)] md:mt-6"
          >
            Voir la séance
            <span className="flex size-8 items-center justify-center rounded-full bg-fg text-accent">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

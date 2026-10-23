import Image from "next/image";
import { DISCIPLINE_LABEL, type Workout } from "@/data/workouts";

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
          src={workout.image}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-[25%_center] md:object-left"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/10 to-transparent md:bg-linear-to-l md:from-bg/95 md:via-bg/50 md:to-transparent" />
        {/* PC : fondu vers le bas pour enchaîner sans coupure avec la séance détaillée. */}
        <div className="absolute inset-x-0 -bottom-px hidden h-64 bg-linear-to-t from-bg from-10% via-bg/70 to-transparent md:block" />
      </div>

      <div className="relative px-5 pb-10 md:mx-auto md:flex md:h-full md:max-w-350 md:items-center md:justify-end md:px-12 md:pb-0 lg:px-20">
        <div className="md:w-[30rem]">
          <p className="eyebrow text-muted">Entraînement du jour · {formatDate(workout.date)}</p>
          <h1 className="display-xl mt-3 text-5xl text-accent md:text-6xl">
            {DISCIPLINE_LABEL[workout.discipline]}
          </h1>
          <p className="heading mt-3 text-xl md:text-2xl">{workout.title}</p>
          <div className="mt-6 flex items-center gap-5">
            <a
              href="#seance"
              className="heading rounded-full bg-accent px-7 py-3.5 text-sm text-fg transition hover:brightness-110"
            >
              Voir la séance
            </a>
            <span className="text-sm text-muted">{workout.duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

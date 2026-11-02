"use client";

import { useState } from "react";
import type { RecentWorkout } from "@/lib/today";
import TodayHero from "./TodayHero";
import WorkoutDetail from "./WorkoutDetail";

// Hero + séance détaillée, partagés par les onglets de jours (J à J-3) : changer de jour
// change l'image, le profil et le détail de la séance.
export default function TodayBlock({ days }: { days: RecentWorkout[] }) {
  const [active, setActive] = useState(0);
  const { workout } = days[active];
  return (
    <>
      <TodayHero days={days} active={active} onSelect={setActive} />
      <WorkoutDetail key={workout.date} workout={workout} />
    </>
  );
}

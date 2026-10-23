import TodayHero from "@/components/home/TodayHero";
import WorkoutDetail from "@/components/home/WorkoutDetail";
import Offers from "@/components/home/Offers";
import Coaching from "@/components/home/Coaching";
import Blog from "@/components/home/Blog";
import Gear from "@/components/home/Gear";
import { getTodayWorkout } from "@/data/workouts";

export default function Home() {
  const workout = getTodayWorkout();
  return (
    <main className="flex-1">
      <TodayHero workout={workout} />
      <WorkoutDetail workout={workout} />
      <Offers />
      <Coaching />
      <Blog />
      <Gear />
    </main>
  );
}

import TodayBlock from "@/components/home/TodayBlock";
import Offers from "@/components/home/Offers";
import Coaching from "@/components/home/Coaching";
import Blog from "@/components/home/Blog";
import Gear from "@/components/home/Gear";
import { getRecentWorkouts } from "@/lib/today";

export default async function Home() {
  const days = await getRecentWorkouts();
  return (
    <main className="flex-1">
      <TodayBlock days={days} />
      <Offers />
      <Coaching />
      <Blog />
      <Gear />
    </main>
  );
}

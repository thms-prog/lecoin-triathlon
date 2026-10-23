import { DISCIPLINE_LABEL, type Workout, type WorkoutBlock } from "@/data/workouts";
import Section from "./Section";

// Grande valeur d'intensité (ex. "75%") + son unité (ex. "FTP").
function intensity(block: WorkoutBlock): { value: string; unit: string } | null {
  if (block.ftp) return { value: `${Math.round(Number(block.ftp) * 100)}%`, unit: "FTP" };
  if (block.vma) return { value: `${Math.round(Number(block.vma) * 100)}%`, unit: "VMA" };
  if (block.css) return { value: `${Math.round(Number(block.css) * 100)}%`, unit: "CSS" };
  if (block.rpe) return { value: block.rpe, unit: "RPE" };
  return null;
}

export default function WorkoutDetail({ workout }: { workout: Workout }) {
  return (
    <Section id="seance" eyebrow={`Séance détaillée · ${DISCIPLINE_LABEL[workout.discipline]}`} title={workout.title}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.7fr] md:gap-16">
        <div>
          <p className="leading-relaxed text-muted">{workout.summary}</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted-2">
            Durée {workout.duration}
          </p>
        </div>

        <ol className="[&>li:first-child]:pt-0">
          {workout.blocks.map((block, i) => {
            const value = intensity(block);
            return (
              <li key={i} className="grid grid-cols-[6rem_1fr] items-baseline gap-4 border-b border-white/10 py-4 md:grid-cols-[8rem_1fr] md:py-5">
                <div>
                  {value ? (
                    <>
                      <span className="heading tabular-nums text-accent">{value.value}</span>{" "}
                      <span className="heading text-accent">{value.unit}</span>
                    </>
                  ) : (
                    <span className="text-muted-2">—</span>
                  )}
                </div>
                <div>
                  <p className="leading-relaxed text-fg">{block.text}</p>
                  {block.rpe && value?.unit !== "RPE" && (
                    <p className="mt-1 text-sm text-muted-2">RPE {block.rpe}/10</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

// Barre de progression façon stories, partagée par les onglets des programmes, du blog et du matériel.
// « current » se remplit en `duration` puis appelle `onEnd` ; « on » est pleine (sélection sans défilement).
export default function StoryBar({
  state,
  duration,
  running = true,
  onEnd,
  className = "",
}: {
  state: "todo" | "done" | "current" | "on";
  duration?: string;
  running?: boolean;
  onEnd?: () => void;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      {state === "current" ? (
        <span
          onAnimationEnd={onEnd}
          style={{ animationDuration: duration, animationPlayState: running ? "running" : "paused" }}
          className="block h-full animate-[grow_linear_forwards] bg-accent motion-reduce:w-full motion-reduce:animate-none"
        />
      ) : (
        <span className={`block h-full ${state === "on" ? "w-full bg-accent" : state === "done" ? "w-full bg-accent/45" : "w-0"}`} />
      )}
    </span>
  );
}

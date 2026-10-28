// Grain de pellicule par-dessus les photos : rend la texture « film » que l'agrandissement
// des images IA a lissée, et unifie le rendu des images d'origines différentes.
// Image de bruit en style inline : une règle CSS avec ce SVG intégré n'arrivait pas
// dans la feuille de style compilée.
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function FilmGrain({ opacity = 0.22 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 mix-blend-overlay"
      style={{ backgroundImage: NOISE, opacity }}
    />
  );
}

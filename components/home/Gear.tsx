import Image from "next/image";
import { GEAR, amazonUrl } from "@/data/home";
import Section from "./Section";

export default function Gear() {
  return (
    <Section id="materiel" eyebrow="Matériel" title="Ce que j'utilise vraiment">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-6">
        {GEAR.map((item) => (
          <a key={item.asin} href={amazonUrl(item)} target="_blank" rel="sponsored noopener noreferrer" className="group">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 768px) 280px, 50vw"
                className="object-contain p-6 transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="eyebrow mt-3 text-accent">{item.category}</p>
            <p className="heading mt-1 text-lg">{item.label}</p>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-2">Liens affiliés Amazon : une petite commission m&apos;est reversée, sans surcoût pour toi.</p>
    </Section>
  );
}

import type { Article } from "@/data/articles/types";
import CoachingCta, { type CoachingVariant } from "./CoachingCta";
import CopyButtons from "./CopyButtons";
import Faq from "./Faq";
import GearPicks from "./GearPicks";

// Le HTML de l'article est rendu côté serveur (indexable) ; les marqueurs <!--X--> sont
// remplacés par des composants React à l'endroit exact du texte.
export default function ArticleBody({ article, className = "" }: { article: Article; className?: string }) {
  const parts = article.content.split(/<!--([A-Z]+(?::[a-z]+)?)-->/);

  return (
    <div className={`article ${className}`}>
      <CopyButtons />
      {parts.map((part, i) => {
        if (i % 2 === 0) return <div key={i} className="article-html" dangerouslySetInnerHTML={{ __html: part }} />;
        const [name, arg] = part.split(":");
        if (name === "FAQ") return <Faq key={i} items={article.faq} />;
        if (name === "GEAR" && article.gear) return <GearPicks key={i} picks={article.gear} />;
        if (name === "COACHING") return <CoachingCta key={i} variant={arg as CoachingVariant} />;
        return null;
      })}
    </div>
  );
}

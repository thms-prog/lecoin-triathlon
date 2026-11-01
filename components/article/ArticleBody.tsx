import type { Article } from "@/data/articles/types";
import CoachingCta from "./CoachingCta";
import CopyButtons from "./CopyButtons";
import Faq from "./Faq";
import GearPicks from "./GearPicks";
import DistanceQuiz from "./tools/DistanceQuiz";
import FtpTools from "./tools/FtpTools";
import TimeCalculator from "./tools/TimeCalculator";

// Le HTML de l'article est rendu côté serveur (indexable) ; les marqueurs <!--X--> sont
// remplacés par des composants React à l'endroit exact du texte.
export default function ArticleBody({ article, className = "" }: { article: Article; className?: string }) {
  const parts = article.content.split(/<!--([A-Z]+)-->/);

  return (
    <div className={`article ${className}`}>
      <CopyButtons />
      {parts.map((part, i) => {
        if (i % 2 === 0) return <div key={i} className="article-html" dangerouslySetInnerHTML={{ __html: part }} />;
        if (part === "FAQ") return <Faq key={i} items={article.faq} />;
        if (part === "GEAR" && article.gear) return <GearPicks key={i} {...article.gear} />;
        if (part === "COACHING" && article.coaching) return <CoachingCta key={i} {...article.coaching} />;
        if (part === "CALC") return <TimeCalculator key={i} />;
        if (part === "QUIZ") return <DistanceQuiz key={i} />;
        if (part === "FTPTOOLS") return <FtpTools key={i} />;
        return null;
      })}
    </div>
  );
}

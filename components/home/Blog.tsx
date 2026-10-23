import Image from "next/image";
import { BLOG_POSTS } from "@/data/home";
import Section from "./Section";

export default function Blog() {
  return (
    <Section id="blog" tone="light" eyebrow="Blog" title="Comprendre pour mieux s'entraîner">
      <div className="grid gap-5 md:grid-cols-4 md:gap-6">
        {BLOG_POSTS.map((post) => (
          <a key={post.title} href="#" className="group flex items-center gap-4 md:flex-col md:items-stretch">
            <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-2xl md:aspect-4/5 md:w-full">
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(min-width: 768px) 280px, 96px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="eyebrow text-accent">{post.category}</p>
              <p className="heading mt-1 text-lg md:text-xl">{post.title}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

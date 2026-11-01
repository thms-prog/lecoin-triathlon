// FAQ dépliable. Le même tableau alimente le JSON-LD FAQPage de la page.
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="my-8 space-y-3">
      {items.map((item) => (
        <details key={item.q} className="group rounded-2xl border border-white/10 bg-panel open:border-accent/60">
          <summary className="flex cursor-pointer list-none items-start gap-3 p-4 font-semibold text-fg md:p-5 [&::-webkit-details-marker]:hidden">
            <span className="mt-0.5 text-accent transition group-open:rotate-90">❯</span>
            {item.q}
          </summary>
          <p className="px-4 pb-5 pl-11 leading-relaxed text-muted md:px-5 md:pl-12">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

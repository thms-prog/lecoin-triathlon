import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-350 items-center justify-between px-5 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Lecoin-Triathlon" width={32} height={32} preload />
          <span className="heading text-base text-fg">
            Lecoin-Triathlon
          </span>
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";

const links = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/levels", label: "Darajalar" },
  { href: "/game", label: "O'yin" },
  { href: "/blog", label: "Blog" },
];

export default function SiteNav() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900">
          LinguaPlay
        </Link>
        <nav className="flex items-center gap-1.5 sm:gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


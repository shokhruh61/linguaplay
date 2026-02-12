import Link from "next/link";
import { DEFAULT_OG_IMAGE } from "../../utils/site";

export const metadata = {
  title: "Grammar Blog",
  description: "Present Simple, Present Continuous, Past Simple, Present Perfect bo‘yicha qisqa Uzbek qo‘llanmalar.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "LinguaPlay Grammar Blog",
    description: "Uzbek tilida qisqa grammar darslar va amaliy ichki linklar.",
    url: "/blog",
    images: [DEFAULT_OG_IMAGE],
  },
};

const posts = [
  {
    href: "/blog/present-simple",
    title: "Present Simple: qachon va qanday ishlatiladi?",
    excerpt: "Har kuni takrorlanadigan odatlar, faktlar va umumiy haqiqatlar uchun asosiy zamon.",
  },
  {
    href: "/blog/present-continuous",
    title: "Present Continuous: hozir sodir bo‘layotgan ishlar",
    excerpt: "Am/is/are + V-ing formasi bilan vaqtinchalik va ayni damdagi harakatlar.",
  },
  {
    href: "/blog/past-simple",
    title: "Past Simple: yakunlangan o‘tgan zamon",
    excerpt: "Kecha, o‘tgan hafta kabi aniq o‘tgan vaqt markerlari bilan ishlatiladi.",
  },
  {
    href: "/blog/present-perfect",
    title: "Present Perfect: tajriba va natija",
    excerpt: "Have/has + V3 orqali natijasi hozirga bog‘langan holatlarni ifodalaydi.",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">English Grammar Blog (Uzbek)</h1>
        <p className="mt-2 text-slate-600">Qisqa dars + darhol amaliyot: maqolani o‘qib, o‘yinda mustahkamlang.</p>
      </header>
      <section className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <Link href={post.href} className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              O‘qish
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

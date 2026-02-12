import Link from "next/link";
import BlogCta from "../../../components/BlogCta";
import SeoJsonLd from "../../../components/SeoJsonLd";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../../../utils/site";

export const metadata = {
  title: "Past Simple",
  description: "Past Simple Uzbekcha: aniq o‘tgan vaqtda tugagan harakatlar uchun qoida va misollar.",
  alternates: { canonical: "/blog/past-simple" },
  openGraph: {
    type: "article",
    title: "Past Simple: tugagan o‘tgan voqea",
    description: "Past Simple Uzbekcha: aniq o‘tgan vaqtda tugagan harakatlar uchun qoida va misollar.",
    url: "/blog/past-simple",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PastSimplePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Past Simple: tugagan o‘tgan voqea",
    description: "Past Simple Uzbekcha: aniq o‘tgan vaqtda tugagan harakatlar uchun qoida va misollar.",
    inLanguage: "uz",
    mainEntityOfPage: `${SITE_URL}/blog/past-simple`,
    author: { "@type": "Organization", name: "LinguaPlay" },
    publisher: { "@type": "Organization", name: "LinguaPlay" },
  };

  return (
    <article className="mx-auto max-w-3xl space-y-5">
      <SeoJsonLd data={articleJsonLd} />
      <h1 className="text-3xl font-black tracking-tight text-slate-900">Past Simple: tugagan o‘tgan voqea</h1>
      <p className="text-slate-700">Aniq o‘tgan vaqtdagi yakunlangan ishlar uchun ishlatiladi: <strong>We watched a film yesterday.</strong></p>
      <h2 className="text-xl font-bold text-slate-900">Formula</h2>
      <p className="text-slate-700">Darak: `verb-2` (yoki irregular V2). Inkor: `did not + verb`. So‘roq: `Did + subject + verb?`</p>
      <h2 className="text-xl font-bold text-slate-900">Signal so‘zlar</h2>
      <p className="text-slate-700">yesterday, last week, in 2020, ago.</p>
      <h2 className="text-xl font-bold text-slate-900">Muhim eslatma</h2>
      <p className="text-slate-700">`did` ishlatilsa, asosiy fe&apos;l base form bo‘ladi: `didn&apos;t go`, `did she call?`</p>
      <BlogCta />
      <p className="text-sm text-slate-500">
        Keyingi mavzu: <Link href="/blog/present-perfect" className="font-semibold text-emerald-700">Present Perfect</Link>
      </p>
    </article>
  );
}

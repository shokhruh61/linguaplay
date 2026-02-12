import Link from "next/link";
import BlogCta from "../../../components/BlogCta";
import SeoJsonLd from "../../../components/SeoJsonLd";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../../../utils/site";

export const metadata = {
  title: "Present Continuous",
  description: "Present Continuous Uzbekcha tushuntirish: am/is/are + V-ing, hozirgi jarayonlar.",
  alternates: { canonical: "/blog/present-continuous" },
  openGraph: {
    type: "article",
    title: "Present Continuous: hozir davom etayotgan ish",
    description: "Present Continuous Uzbekcha tushuntirish: am/is/are + V-ing, hozirgi jarayonlar.",
    url: "/blog/present-continuous",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PresentContinuousPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Present Continuous: hozir davom etayotgan ish",
    description: "Present Continuous Uzbekcha tushuntirish: am/is/are + V-ing, hozirgi jarayonlar.",
    inLanguage: "uz",
    mainEntityOfPage: `${SITE_URL}/blog/present-continuous`,
    author: { "@type": "Organization", name: "LinguaPlay" },
    publisher: { "@type": "Organization", name: "LinguaPlay" },
  };

  return (
    <article className="mx-auto max-w-3xl space-y-5">
      <SeoJsonLd data={articleJsonLd} />
      <h1 className="text-3xl font-black tracking-tight text-slate-900">Present Continuous: hozir davom etayotgan ish</h1>
      <p className="text-slate-700">Ayni damdagi yoki vaqtinchalik harakatni aytishda ishlatiladi: <strong>She is reading now.</strong></p>
      <h2 className="text-xl font-bold text-slate-900">Formula</h2>
      <p className="text-slate-700">`am/is/are + verb-ing`. Inkor: `am/is/are not + verb-ing`. So‘roq: `Am/Is/Are + subject + verb-ing?`</p>
      <h2 className="text-xl font-bold text-slate-900">Signal so‘zlar</h2>
      <p className="text-slate-700">now, right now, at the moment, currently.</p>
      <h2 className="text-xl font-bold text-slate-900">Farq</h2>
      <p className="text-slate-700">Present Simple odatlarni, Present Continuous esa hozirgi jarayonni bildiradi.</p>
      <BlogCta />
      <p className="text-sm text-slate-500">
        Keyingi mavzu: <Link href="/blog/past-simple" className="font-semibold text-emerald-700">Past Simple</Link>
      </p>
    </article>
  );
}

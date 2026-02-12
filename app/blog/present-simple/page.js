import Link from "next/link";
import BlogCta from "../../../components/BlogCta";
import SeoJsonLd from "../../../components/SeoJsonLd";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../../../utils/site";

export const metadata = {
  title: "Present Simple",
  description: "Present Simple qoidasi Uzbek tilida: formula, signal so‘zlar va xatolar.",
  alternates: { canonical: "/blog/present-simple" },
  openGraph: {
    type: "article",
    title: "Present Simple: eng kerakli asos",
    description: "Present Simple qoidasi Uzbek tilida: formula, signal so‘zlar va xatolar.",
    url: "/blog/present-simple",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PresentSimplePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Present Simple: eng kerakli asos",
    description: "Present Simple qoidasi Uzbek tilida: formula, signal so‘zlar va xatolar.",
    inLanguage: "uz",
    mainEntityOfPage: `${SITE_URL}/blog/present-simple`,
    author: { "@type": "Organization", name: "LinguaPlay" },
    publisher: { "@type": "Organization", name: "LinguaPlay" },
  };

  return (
    <article className="mx-auto max-w-3xl space-y-5">
      <SeoJsonLd data={articleJsonLd} />
      <h1 className="text-3xl font-black tracking-tight text-slate-900">Present Simple: eng kerakli asos</h1>
      <p className="text-slate-700">Present Simple odatlar, reja bo‘yicha takroriy ishlar va umumiy faktlar uchun ishlatiladi. Misol: <strong>I go to work every day.</strong></p>
      <h2 className="text-xl font-bold text-slate-900">Formula</h2>
      <p className="text-slate-700">`I/You/We/They + verb`, `He/She/It + verb-s/es`. Inkor: `do/does not + verb`.</p>
      <h2 className="text-xl font-bold text-slate-900">Signal so‘zlar</h2>
      <p className="text-slate-700">always, usually, often, sometimes, never, every day/week.</p>
      <h2 className="text-xl font-bold text-slate-900">Ko‘p uchraydigan xato</h2>
      <p className="text-slate-700">`He go` noto‘g‘ri, `He goes` to‘g‘ri. 3-shaxs birlikda -s/-es unutilmasin.</p>
      <BlogCta />
      <p className="text-sm text-slate-500">
        Keyingi mavzu: <Link href="/blog/present-continuous" className="font-semibold text-emerald-700">Present Continuous</Link>
      </p>
    </article>
  );
}

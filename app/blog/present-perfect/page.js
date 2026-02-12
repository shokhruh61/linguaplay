import BlogCta from "../../../components/BlogCta";
import SeoJsonLd from "../../../components/SeoJsonLd";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../../../utils/site";

export const metadata = {
  title: "Present Perfect",
  description: "Present Perfect Uzbekcha qo‘llanma: have/has + V3, tajriba va hozirgi natija.",
  alternates: { canonical: "/blog/present-perfect" },
  openGraph: {
    type: "article",
    title: "Present Perfect: natija hozirga bog‘liq bo‘lsa",
    description: "Present Perfect Uzbekcha qo‘llanma: have/has + V3, tajriba va hozirgi natija.",
    url: "/blog/present-perfect",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PresentPerfectPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Present Perfect: natija hozirga bog‘liq bo‘lsa",
    description: "Present Perfect Uzbekcha qo‘llanma: have/has + V3, tajriba va hozirgi natija.",
    inLanguage: "uz",
    mainEntityOfPage: `${SITE_URL}/blog/present-perfect`,
    author: { "@type": "Organization", name: "LinguaPlay" },
    publisher: { "@type": "Organization", name: "LinguaPlay" },
  };

  return (
    <article className="mx-auto max-w-3xl space-y-5">
      <SeoJsonLd data={articleJsonLd} />
      <h1 className="text-3xl font-black tracking-tight text-slate-900">Present Perfect: natija hozirga bog‘liq bo‘lsa</h1>
      <p className="text-slate-700">O‘tgan harakatning natijasi hozir sezilsa yoki tajriba aytilsa Present Perfect ishlatiladi: <strong>I have finished my homework.</strong></p>
      <h2 className="text-xl font-bold text-slate-900">Formula</h2>
      <p className="text-slate-700">`have/has + V3`. Inkor: `have/has not + V3`. So‘roq: `Have/Has + subject + V3?`</p>
      <h2 className="text-xl font-bold text-slate-900">Signal so‘zlar</h2>
      <p className="text-slate-700">already, yet, just, ever, never, since, for.</p>
      <h2 className="text-xl font-bold text-slate-900">Past Simple bilan farqi</h2>
      <p className="text-slate-700">Past Simple aniq vaqt beradi; Present Perfectda esa vaqt noaniq yoki hozirga ta&apos;siri muhim.</p>
      <BlogCta />
    </article>
  );
}

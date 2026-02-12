import HomeClient from "../components/HomeClient";
import SeoJsonLd from "../components/SeoJsonLd";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../utils/site";

export const metadata = {
  title: "Bosh sahifa",
  description: "LinguaPlay: O‘ynab inglizcha o‘rgan! Grammar o‘yinlari, CEFR darajalari va daily challenge.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "LinguaPlay - Bosh sahifa",
    description: "O‘ynab inglizcha o‘rgan! Grammar o‘yinlari va daily challenge.",
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
};

const faq = [
  { q: "LinguaPlay nima?", a: "LinguaPlay ingliz tili grammatikasini o‘yin orqali mashq qildirish platformasi." },
  { q: "Qaysi darajalar bor?", a: "A1, A2, B1, B2, C1 darajalari bor." },
  { q: "Ball qanday beriladi?", a: "1 blank uchun +10, 2 blank uchun +15, har 5 streakda +20 bonus." },
  { q: "Daily Challenge qanday?", a: "Har kuni alohida seed bilan 10 ta savol beriladi." },
  { q: "Progress qayerda saqlanadi?", a: "Progress localStorage'da shu qurilmada saqlanadi." },
];

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LinguaPlay",
    url: SITE_URL,
  };

  return (
    <>
      <SeoJsonLd data={faqJsonLd} />
      <SeoJsonLd data={orgJsonLd} />
      <HomeClient />
    </>
  );
}

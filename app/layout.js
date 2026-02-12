import "./globals.css";
import SiteNav from "../components/SiteNav";
import SeoJsonLd from "../components/SeoJsonLd";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../utils/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - English Grammar Game`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "LinguaPlay orqali o‘ynab inglizcha o‘rganing: A1-C1 grammar game, daily challenge va xatolar bo‘yicha mashq.",
  keywords: ["english grammar game", "ingliz tili", "grammatika", "o'yin", "Uzbek"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - English Grammar Game`,
    description: "LinguaPlay orqali o‘ynab inglizcha o‘rganing: A1-C1 grammar game, daily challenge va xatolar bo‘yicha mashq.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "LinguaPlay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - English Grammar Game`,
    description: "LinguaPlay orqali o‘ynab inglizcha o‘rganing.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "uz",
  };

  return (
    <html lang="uz">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <SeoJsonLd data={webSiteJsonLd} />
        <SiteNav />
        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      </body>
    </html>
  );
}

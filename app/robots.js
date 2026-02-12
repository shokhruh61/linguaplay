import { SITE_URL } from "../utils/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/results"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

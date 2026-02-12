import { SITE_URL } from "../utils/site";

const routes = [
  "",
  "/levels",
  "/game",
  "/blog",
  "/blog/present-simple",
  "/blog/present-continuous",
  "/blog/past-simple",
  "/blog/present-perfect",
];

export default function sitemap() {
  const now = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/blog") ? "weekly" : "daily",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.8 : 0.7,
  }));
}

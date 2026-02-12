export default function manifest() {
  return {
    name: "LinguaPlay",
    short_name: "LinguaPlay",
    description: "O‘ynab inglizcha o‘rgan! LinguaPlay grammar game.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0f172a",
    lang: "uz",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}

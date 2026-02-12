import { Suspense } from "react";
import GameClient from "../../components/GameClient";

export const metadata = {
  title: "O‘yin",
  description: "LinguaPlay Missing Word(s) game: ball to‘plang, streak qiling va grammar ko‘nikmalarni oshiring.",
  alternates: { canonical: "/game" },
};

export default function GamePage() {
  return (
    <Suspense fallback={<p className="rounded-xl bg-white p-4 text-sm text-slate-600">Yuklanmoqda...</p>}>
      <GameClient />
    </Suspense>
  );
}

import { Suspense } from "react";
import ResultsClient from "../../components/ResultsClient";

export const metadata = {
  title: "Natijalar",
  description: "LinguaPlay natijalari: score, accuracy, best streak va xatolar tahlili.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <Suspense fallback={<p className="rounded-xl bg-white p-4 text-sm text-slate-600">Yuklanmoqda...</p>}>
      <ResultsClient />
    </Suspense>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getLastResult } from "../utils/storage";
import { ALL_QUESTIONS } from "../data/questions";

export default function ResultsClient() {
  const searchParams = useSearchParams();
  const [result] = useState(() => getLastResult());

  const byId = useMemo(() => {
    const map = new Map();
    ALL_QUESTIONS.forEach((q) => map.set(q.id, q));
    return map;
  }, []);

  const mode = searchParams.get("mode") || result?.mode || "normal";
  const level = searchParams.get("level") || result?.level || "A1";

  if (!result) {
    return (
      <section className="lp-card rounded-3xl p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Natija topilmadi</h1>
        <Link href="/levels" className="mt-4 inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          Darajani tanlash
        </Link>
      </section>
    );
  }

  return (
    <div className="space-y-6">
      <section className="lp-card rounded-3xl p-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Natijalar</h1>
        <p className="mt-2 text-sm text-slate-600">{mode} · {level}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-100 p-4">
            <p className="text-xs text-slate-600">Jami ball</p>
            <p className="text-2xl font-bold text-slate-900">{result.score}</p>
          </div>
          <div className="rounded-2xl bg-emerald-100 p-4">
            <p className="text-xs text-emerald-800">Aniqlik</p>
            <p className="text-2xl font-bold text-emerald-900">{result.accuracy}%</p>
          </div>
          <div className="rounded-2xl bg-orange-100 p-4">
            <p className="text-xs text-orange-700">Best streak</p>
            <p className="text-2xl font-bold text-orange-900">{result.bestStreak}</p>
          </div>
        </div>
      </section>

      <section className="lp-card rounded-3xl p-6">
        <h2 className="text-xl font-bold text-slate-900">Xatolar tahlili</h2>
        {result.wrongAnswers?.length ? (
          <ul className="mt-4 space-y-3">
            {result.wrongAnswers.map((item) => {
              const q = byId.get(item.questionId);
              if (!q) return null;
              return (
                <li key={`${item.questionId}-${item.chosen}`} className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm">
                  <p className="font-semibold text-slate-900">{q.sentence}</p>
                  <p className="mt-1 text-rose-700">Siz tanladingiz: {item.chosen}</p>
                  <p className="text-emerald-700">To‘g‘ri javob: {item.correct}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-600">Xato yo‘q. Zo‘r natija!</p>
        )}
      </section>

      <section className="flex flex-wrap gap-3">
        <Link href={`/game?level=${level}`} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-slate-800">
          Replay
        </Link>
        <Link href="/levels" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Darajani tanlash
        </Link>
        <Link href="/game?mode=mistakes" className="rounded-xl border border-sky-300 px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50">
          Xatolarimni mashq qilish
        </Link>
      </section>
    </div>
  );
}

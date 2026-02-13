"use client";

import Link from "next/link";
import { useState } from "react";
import { LEVEL_META, LEVELS } from "../utils/constants";
import { getLeaderboard, getUnlockedLevels } from "../utils/storage";

export default function LevelsClient() {
  const [unlocked] = useState(() => getUnlockedLevels());
  const [leaderboard] = useState(() => getLeaderboard());

  return (
    <div className="space-y-7 sm:space-y-8">
      <section>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Darajani tanlang</h1>
        <p className="mt-2 text-slate-600">A1 ochiq. Boshqa darajalar o‘yinni tugatgan sari ochiladi.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {LEVELS.map((level) => {
          const item = LEVEL_META[level];
          const isUnlocked = unlocked.includes(level) || level === "A1";

          return (
            <article key={level} className="lp-card rounded-3xl p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">{level}</h2>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isUnlocked ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                  {isUnlocked ? "Unlocked" : "Locked"}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-700">{item.title}</p>
              <p className="mt-2 min-h-16 text-sm text-slate-600">{item.description}</p>
              {isUnlocked ? (
                <Link href={`/game?level=${level}`} className="mt-4 inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-slate-800">
                  O‘ynash
                </Link>
              ) : (
                <button type="button" disabled className="mt-4 rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-500">
                  Yopiq
                </button>
              )}

              <div className="mt-4 border-t border-slate-100 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Top 3 Leaderboard</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600">
                  {(leaderboard[level] || []).slice(0, 3).map((row, idx) => (
                    <li key={`${level}-${idx}-${row.date}`}>#{idx + 1} · {row.score} ball · {row.accuracy}%</li>
                  ))}
                  {!(leaderboard[level] || []).length ? <li>Hali natija yo‘q</li> : null}
                </ul>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

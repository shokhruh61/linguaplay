"use client";

import Link from "next/link";
import { useState } from "react";
import { getDailyState, hasContinuableSession } from "../utils/storage";
import { getTodayKey } from "../utils/game";

const features = [
  "CEFR darajalari: A1 dan C1 gacha",
  "Missing Word(s) formati bilan tez amaliyot",
  "Streak va bonus tizimi motivatsiya beradi",
  "Daily Challenge orqali har kuni 10 ta savol",
  "Xatolarim rejimi bilan zaif joylarni yopish",
  "Progress va leaderboard qurilmada saqlanadi",
];

const faq = [
  {
    q: "LinguaPlay nima?",
    a: "LinguaPlay - ingliz tili grammatikasini o‘yin orqali mashq qildirish uchun yaratilgan web platforma.",
  },
  {
    q: "Qaysi darajalar bor?",
    a: "A1, A2, B1, B2, C1 darajalari bor. A1 ochiq, qolganlari o‘yin o‘ynab bosqichma-bosqich ochiladi.",
  },
  {
    q: "Ball qanday hisoblanadi?",
    a: "1 ta bo‘sh joyli savol +10, 2 ta bo‘sh joyli savol +15. Har 5 ta ketma-ket to‘g‘ri javob uchun +20 bonus beriladi.",
  },
  {
    q: "Daily Challenge qanday ishlaydi?",
    a: "Har kun uchun alohida seed bilan 10 ta savol tanlanadi va kunlik natija alohida saqlanadi.",
  },
  {
    q: "Xatolarim bo‘limi nima beradi?",
    a: "Oldin xato qilgan savollaringiz alohida mashq sifatida qayta beriladi, to‘g‘ri yechganingiz sari ro‘yxatdan chiqadi.",
  },
  {
    q: "Ma'lumotlar qayerda saqlanadi?",
    a: "Barcha progress localStorage’da, ya'ni aynan shu qurilmangiz brauzerida saqlanadi.",
  },
];

export default function HomeClient() {
  const [canContinue] = useState(() => hasContinuableSession());
  const [daily] = useState(() => {
    const today = getTodayKey();
    const state = getDailyState(today);
    return { score: state.score, bestStreak: state.bestStreak };
  });

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b,#14532d)] p-6 text-white shadow-xl sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">English Grammar Game</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">LinguaPlay</h1>
        <p className="mt-4 max-w-xl text-lg text-slate-100">O‘ynab inglizcha o‘rgan!</p>
        <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
          <Link href="/levels" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-emerald-950 shadow-sm hover:-translate-y-0.5 hover:bg-emerald-300">
            Boshlash
          </Link>
          {canContinue ? (
            <Link href="/game?continue=1" className="rounded-xl border border-white/50 px-5 py-3 text-sm font-bold text-white hover:-translate-y-0.5 hover:bg-white/10">
              Davom etish
            </Link>
          ) : null}
          <Link href="/game?mode=daily&level=A1" className="rounded-xl border border-amber-300 px-5 py-3 text-sm font-bold text-amber-100 hover:-translate-y-0.5 hover:bg-amber-300/10">
            Daily Challenge
          </Link>
          <Link href="/game?mode=mistakes" className="rounded-xl border border-sky-300 px-5 py-3 text-sm font-bold text-sky-100 hover:-translate-y-0.5 hover:bg-sky-300/10">
            Xatolarim
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-200">Bugungi challenge: {daily.score} ball, best streak {daily.bestStreak}.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">Nega LinguaPlay?</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {features.map((item) => (
            <li key={item} className="lp-card rounded-2xl p-4 text-sm text-slate-700">
              • {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="lp-card rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-slate-900">Ko‘p so‘raladigan savollar</h2>
        <div className="mt-4 space-y-4">
          {faq.map((item) => (
            <article key={item.q}>
              <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

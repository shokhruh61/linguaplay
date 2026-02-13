"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import QuestionCard from "./QuestionCard";
import { GAME_MODES, LEVELS } from "../utils/constants";
import { calcAccuracy, getQuestionPoints, getTodayKey, seededShuffle, shouldApplyStreakBonus } from "../utils/game";
import {
  getDailyState,
  getProgress,
  saveLeaderboardScore,
  setDailyState,
  setLastResult,
  setProgress,
  unlockNextLevel,
} from "../utils/storage";
import { getLevelQuestions, getQuestionsByIds } from "../data/questions";

function uniqueById(items) {
  const map = new Map();
  items.forEach((item) => {
    map.set(item.id, item);
  });
  return [...map.values()];
}

function modeLabel(mode) {
  if (mode === GAME_MODES.DAILY) return "Kunlik challenge";
  if (mode === GAME_MODES.MISTAKES) return "Xatolarim";
  return "Klassik";
}

export default function GameClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const timerRef = useRef(null);

  const [booting, setBooting] = useState(true);
  const [mode, setMode] = useState(GAME_MODES.NORMAL);
  const [level, setLevel] = useState("A1");
  const [topic, setTopic] = useState("all");
  const [seed, setSeed] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [sessionMistakes, setSessionMistakes] = useState([]);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showSetup, setShowSetup] = useState(false);
  const [setupLevel, setSetupLevel] = useState("A1");
  const [setupMode, setSetupMode] = useState(GAME_MODES.NORMAL);
  const [setupTopic, setSetupTopic] = useState("all");

  const question = questions[currentIndex];
  const progressPct = questions.length ? Math.round((currentIndex / questions.length) * 100) : 0;

  const headerStats = useMemo(
    () => ({
      accuracy: calcAccuracy(correctCount, answeredCount),
      modeName: modeLabel(mode),
    }),
    [correctCount, answeredCount, mode],
  );

  useEffect(() => {
    const progress = getProgress();
    const requestedLevel = searchParams.get("level");
    const resolvedLevel = LEVELS.includes(requestedLevel) ? requestedLevel : progress.lastLevel || "A1";
    const rawMode = searchParams.get("mode");
    const resolvedMode = Object.values(GAME_MODES).includes(rawMode) ? rawMode : GAME_MODES.NORMAL;
    const continueFlag = searchParams.get("continue") === "1";
    const startFlag = searchParams.get("start") === "1";
    const requestedTopic = searchParams.get("topic") || "all";
    const resolvedTopic = requestedTopic === "all" ? "all" : requestedTopic;

    setLevel(resolvedLevel);
    setMode(resolvedMode);
    setTopic(resolvedTopic);

    const forceQuickStart =
      continueFlag || resolvedMode === GAME_MODES.DAILY || resolvedMode === GAME_MODES.MISTAKES;

    if (!forceQuickStart && !startFlag) {
      setSetupLevel(resolvedLevel);
      setSetupMode(GAME_MODES.NORMAL);
      setSetupTopic("all");
      setShowSetup(true);
      setBooting(false);
      return;
    }

    setShowSetup(false);

    if (resolvedMode === GAME_MODES.DAILY) {
      const today = getTodayKey();
      const dailySeed = `${today}-${resolvedLevel}-${resolvedTopic}`;
      const dailyPool = getLevelQuestions(resolvedLevel).filter((q) => resolvedTopic === "all" || q.topic === resolvedTopic);
      const dailyQuestions = seededShuffle(dailyPool, dailySeed).slice(0, 10);
      setSeed(dailySeed);
      setQuestions(dailyQuestions);
      setCurrentIndex(0);
      setScore(0);
      setStreak(0);
      setBestStreak(0);
      setAnsweredCount(0);
      setCorrectCount(0);
      setWrongAnswers([]);
      setSessionMistakes([]);
      setBooting(false);
      return;
    }

    if (resolvedMode === GAME_MODES.MISTAKES) {
      const source = uniqueById(progress.wrongAnswers || []);
      const ids = source.map((item) => item.questionId);
      const fallbackSeed = `${Date.now()}-mistakes`;
      const list = seededShuffle(getQuestionsByIds(ids), fallbackSeed);
      setSeed(fallbackSeed);
      setQuestions(list);
      setCurrentIndex(0);
      setScore(0);
      setStreak(0);
      setBestStreak(0);
      setAnsweredCount(0);
      setCorrectCount(0);
      setWrongAnswers([]);
      setSessionMistakes([]);
      setBooting(false);
      return;
    }

    const levelQuestions = getLevelQuestions(resolvedLevel);
    const filteredLevelQuestions = levelQuestions.filter((q) => resolvedTopic === "all" || q.topic === resolvedTopic);
    const canContinue =
      continueFlag &&
      progress.mode === GAME_MODES.NORMAL &&
      progress.lastLevel === resolvedLevel &&
      progress.sessionSeed;

    if (canContinue) {
      const usedSeed = progress.sessionSeed;
      const ids = Array.isArray(progress.sessionQuestionIds) ? progress.sessionQuestionIds : [];
      const sessionQuestions = ids.length ? getQuestionsByIds(ids) : seededShuffle(filteredLevelQuestions, usedSeed).slice(0, 10);

      setSeed(usedSeed);
      setQuestions(sessionQuestions);
      setCurrentIndex(progress.currentIndex || 0);
      setScore(progress.score || 0);
      setStreak(progress.streak || 0);
      setBestStreak(progress.bestStreak || 0);
      setAnsweredCount(progress.answeredCount || 0);
      setCorrectCount(progress.correctCount || 0);
      setWrongAnswers(progress.wrongAnswers || []);
      setSessionMistakes([]);
      setBooting(false);
      return;
    }

    const freshSeed = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const sessionQuestions = seededShuffle(filteredLevelQuestions, freshSeed).slice(0, 10);
    const ids = sessionQuestions.map((item) => item.id);

    setSeed(freshSeed);
    setQuestions(sessionQuestions);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setAnsweredCount(0);
    setCorrectCount(0);
    setWrongAnswers([]);
    setSessionMistakes([]);

    setProgress({
      lastLevel: resolvedLevel,
      sessionSeed: freshSeed,
      currentIndex: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      answeredCount: 0,
      correctCount: 0,
      wrongAnswers: progress.wrongAnswers || [],
      mode: GAME_MODES.NORMAL,
      sessionDate: null,
      sessionQuestionIds: ids,
    });
    setBooting(false);
  }, [searchParams]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  function finishGame(nextState) {
    const accuracy = calcAccuracy(nextState.correctCount, nextState.answeredCount);
    const result = {
      level,
      mode,
      seed,
      score: nextState.score,
      bestStreak: nextState.bestStreak,
      answeredCount: nextState.answeredCount,
      correctCount: nextState.correctCount,
      accuracy,
      wrongAnswers: nextState.sessionMistakes,
      finishedAt: new Date().toISOString(),
    };

    setLastResult(result);
    saveLeaderboardScore(level, {
      score: result.score,
      accuracy: result.accuracy,
      bestStreak: result.bestStreak,
      date: result.finishedAt,
      mode,
    });

    if (mode === GAME_MODES.NORMAL) {
      unlockNextLevel(level);
      setProgress({
        lastLevel: level,
        sessionSeed: seed,
        currentIndex: questions.length,
        score: result.score,
        streak: 0,
        bestStreak: result.bestStreak,
        answeredCount: result.answeredCount,
        correctCount: result.correctCount,
        wrongAnswers: result.wrongAnswers,
        mode: GAME_MODES.NORMAL,
        sessionDate: null,
        sessionQuestionIds: questions.map((q) => q.id),
      });
    }

    if (mode === GAME_MODES.DAILY) {
      const today = getTodayKey();
      const current = getDailyState(today);
      setDailyState({
        date: today,
        score: Math.max(current.score, result.score),
        bestStreak: Math.max(current.bestStreak, result.bestStreak),
        answeredCount: Math.max(current.answeredCount, result.answeredCount),
        correctCount: Math.max(current.correctCount, result.correctCount),
      });
    }

    router.push(`/results?level=${level}&mode=${mode}`);
  }

  function moveNext(nextState) {
    if (currentIndex + 1 >= questions.length) {
      finishGame(nextState);
      return;
    }

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setSelected("");
    setFeedback("");

    if (mode === GAME_MODES.NORMAL) {
      setProgress({
        lastLevel: level,
        sessionSeed: seed,
        currentIndex: nextIndex,
        score: nextState.score,
        streak: nextState.streak,
        bestStreak: nextState.bestStreak,
        answeredCount: nextState.answeredCount,
        correctCount: nextState.correctCount,
        wrongAnswers: nextState.wrongAnswers,
        mode: GAME_MODES.NORMAL,
        sessionDate: null,
        sessionQuestionIds: questions.map((q) => q.id),
      });
    }
  }

  function answerQuestion(option) {
    if (!question || feedback) return;

    const isCorrect = option === question.answer;
    const points = isCorrect ? getQuestionPoints(question) : 0;
    const nextStreak = isCorrect ? streak + 1 : 0;
    const bonus = isCorrect && shouldApplyStreakBonus(nextStreak) ? 20 : 0;
    const nextScore = score + points + bonus;
    const nextAnswered = answeredCount + 1;
    const nextCorrect = correctCount + (isCorrect ? 1 : 0);
    const nextBest = Math.max(bestStreak, nextStreak);

    const progress = getProgress();
    let mergedWrong = progress.wrongAnswers || [];
    let nextSessionMistakes = sessionMistakes;

    if (isCorrect && mode === GAME_MODES.MISTAKES) {
      mergedWrong = mergedWrong.filter((item) => item.questionId !== question.id);
      setProgress({ wrongAnswers: mergedWrong });
    }

    if (!isCorrect && mode !== GAME_MODES.DAILY) {
      mergedWrong = [
        ...mergedWrong.filter((item) => item.questionId !== question.id),
        { questionId: question.id, chosen: option, correct: question.answer },
      ];
      nextSessionMistakes = [
        ...sessionMistakes.filter((item) => item.questionId !== question.id),
        { questionId: question.id, chosen: option, correct: question.answer },
      ];
      setProgress({ wrongAnswers: mergedWrong });
    }

    setSelected(option);
    setFeedback(isCorrect ? "correct" : "wrong");
    setScore(nextScore);
    setStreak(nextStreak);
    setBestStreak(nextBest);
    setAnsweredCount(nextAnswered);
    setCorrectCount(nextCorrect);
    setWrongAnswers(mergedWrong);
    setSessionMistakes(nextSessionMistakes);

    const snapshot = {
      score: nextScore,
      streak: nextStreak,
      bestStreak: nextBest,
      answeredCount: nextAnswered,
      correctCount: nextCorrect,
      wrongAnswers: mergedWrong,
      sessionMistakes: nextSessionMistakes,
    };

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => moveNext(snapshot), 3000);
  }

  if (booting) {
    return <p className="lp-card rounded-2xl p-4 text-sm text-slate-600">Yuklanmoqda...</p>;
  }

  if (showSetup) {
    const topics = [...new Set(getLevelQuestions(setupLevel).map((q) => q.topic))];
    const startHref = `/game?start=1&level=${setupLevel}&mode=${setupMode}&topic=${encodeURIComponent(setupTopic)}`;
    return (
      <section className="lp-card rounded-3xl p-5 sm:p-7">
        <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">O‘yin yo‘nalishini tanlang</h1>
        <p className="mt-2 text-sm text-slate-600">Rejim va mavzuni tanlang, keyin o‘yinni boshlang.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3 sm:gap-4">
          <label className="text-sm font-semibold text-slate-700">
            Level
            <select
              value={setupLevel}
              onChange={(e) => {
                setSetupLevel(e.target.value);
                setSetupTopic("all");
              }}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-normal text-slate-800 outline-none ring-0 focus:border-slate-500"
            >
              {LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Rejim
            <select
              value={setupMode}
              onChange={(e) => setSetupMode(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-normal text-slate-800 outline-none ring-0 focus:border-slate-500"
            >
              <option value={GAME_MODES.NORMAL}>Klassik</option>
              <option value={GAME_MODES.DAILY}>Kunlik challenge</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Mavzu
            <select
              value={setupTopic}
              onChange={(e) => setSetupTopic(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 font-normal text-slate-800 outline-none ring-0 focus:border-slate-500"
            >
              <option value="all">Barcha mavzular</option>
              {topics.map((topicName) => (
                <option key={topicName} value={topicName}>{topicName}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={startHref} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-slate-800">
            Boshlash
          </Link>
          <Link href="/game?mode=mistakes" className="rounded-xl border border-sky-300 px-5 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50">
            Xatolarim
          </Link>
        </div>
      </section>
    );
  }

  if (!question) {
    return (
      <section className="lp-card rounded-3xl p-6 text-center">
        <h2 className="text-xl font-bold text-slate-900">Savol topilmadi</h2>
        <p className="mt-2 text-slate-600">Ushbu rejim uchun savollar mavjud emas.</p>
        <Link href="/levels" className="mt-4 inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          Darajaga qaytish
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-4 sm:space-y-5">
      <div className="lp-card rounded-3xl p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <p className="text-xs font-semibold text-slate-700 sm:text-sm">
            {headerStats.modeName} · {level} · {topic === "all" ? "Barcha mavzular" : topic}
          </p>
          <div className="flex flex-wrap gap-1.5 text-xs sm:gap-2 sm:text-sm">
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-semibold text-slate-700">Ball: {score}</span>
            <span className={`rounded-lg px-2.5 py-1 font-semibold ${streak > 0 ? "lp-streak-hot bg-orange-100 text-orange-700" : "bg-slate-100 text-slate-700"}`}>
              Streak: {streak} 🔥
            </span>
            <span className="rounded-lg bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-700">Aniqlik: {headerStats.accuracy}%</span>
          </div>
        </div>
        <div className="lp-progress mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <p className="mt-2 text-xs font-medium text-slate-500">
          Savol {Math.min(currentIndex + 1, questions.length)} / {questions.length}
        </p>
      </div>

      <QuestionCard
        question={question}
        onAnswer={answerQuestion}
        selected={selected}
        feedback={feedback}
      />

      {feedback ? (
        <div
          className={`rounded-2xl border p-4 text-sm shadow-sm ${
            feedback === "correct"
              ? "lp-feedback-correct border-emerald-200 bg-emerald-50 text-emerald-800"
              : "lp-feedback-wrong border-rose-200 bg-rose-50 text-rose-800"
          }`}
        >
          {feedback === "correct" ? (
            <p className="font-semibold">Ajoyib! Javob to‘g‘ri. Keyingi savolga o‘tamizmi?</p>
          ) : (
            <>
              <p className="font-semibold">Biroz xato bo‘ldi.</p>
              <p className="mt-1">To‘g‘ri javob: {question.answer}</p>
              <p className="mt-1">{question.explanation}</p>
            </>
          )}
          <button
            type="button"
            onClick={() =>
              moveNext({
                score,
                streak,
                bestStreak,
                answeredCount,
                correctCount,
                wrongAnswers,
                sessionMistakes,
              })
            }
            className="mt-3 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Keyingi
          </button>
        </div>
      ) : null}
    </section>
  );
}

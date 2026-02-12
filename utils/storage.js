import {
  STORAGE_VERSION,
  STORAGE_KEY,
  DAILY_KEY,
  LEADERBOARD_KEY,
  LEVELS,
  GAME_MODES,
} from "./constants";
const LAST_RESULT_KEY = "linguaplay_last_result";

const defaultProgress = {
  version: STORAGE_VERSION,
  lastLevel: "A1",
  sessionSeed: null,
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  answeredCount: 0,
  correctCount: 0,
  wrongAnswers: [],
  mode: GAME_MODES.NORMAL,
  sessionDate: null,
  sessionQuestionIds: [],
};

function safeParse(json, fallback) {
  try {
    const parsed = JSON.parse(json);
    return parsed && typeof parsed === "object" ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function readRaw(key, fallback) {
  if (typeof window === "undefined") return fallback;
  const value = window.localStorage.getItem(key);
  if (!value) return fallback;
  return safeParse(value, fallback);
}

function writeRaw(key, value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota and serialization issues for resilient UX.
  }
}

function normalizeProgress(data) {
  if (!data || data.version !== STORAGE_VERSION) return { ...defaultProgress };
  return {
    ...defaultProgress,
    ...data,
    wrongAnswers: Array.isArray(data.wrongAnswers) ? data.wrongAnswers : [],
  };
}

export function getProgress() {
  return normalizeProgress(readRaw(STORAGE_KEY, defaultProgress));
}

export function setProgress(patch) {
  const current = getProgress();
  const next = normalizeProgress({ ...current, ...patch, version: STORAGE_VERSION });
  writeRaw(STORAGE_KEY, next);
  return next;
}

export function clearProgress() {
  writeRaw(STORAGE_KEY, { ...defaultProgress });
}

export function hasContinuableSession() {
  const state = getProgress();
  return Boolean(state.sessionSeed && state.answeredCount > 0 && state.mode === GAME_MODES.NORMAL);
}

export function getUnlockedLevels() {
  const state = getProgress();
  const lastLevelIndex = Math.max(LEVELS.indexOf(state.lastLevel), 0);
  return LEVELS.filter((_, index) => index <= lastLevelIndex + 1);
}

export function unlockNextLevel(completedLevel) {
  const idx = LEVELS.indexOf(completedLevel);
  if (idx === -1) return getProgress();
  const current = getProgress();
  const currentIdx = Math.max(LEVELS.indexOf(current.lastLevel), 0);
  const target = Math.min(Math.max(currentIdx, idx + 1), LEVELS.length - 1);
  return setProgress({ lastLevel: LEVELS[target] });
}

const dailyDefault = {
  version: STORAGE_VERSION,
  date: null,
  score: 0,
  bestStreak: 0,
  answeredCount: 0,
  correctCount: 0,
};

export function getDailyState(today) {
  const current = readRaw(DAILY_KEY, dailyDefault);
  if (!current || current.version !== STORAGE_VERSION || current.date !== today) {
    const reset = { ...dailyDefault, version: STORAGE_VERSION, date: today };
    writeRaw(DAILY_KEY, reset);
    return reset;
  }
  return { ...dailyDefault, ...current };
}

export function setDailyState(patch) {
  const current = readRaw(DAILY_KEY, dailyDefault);
  const next = { ...dailyDefault, ...current, ...patch, version: STORAGE_VERSION };
  writeRaw(DAILY_KEY, next);
  return next;
}

export function getLeaderboard() {
  const fallback = LEVELS.reduce((acc, level) => {
    acc[level] = [];
    return acc;
  }, {});
  const board = readRaw(LEADERBOARD_KEY, fallback);
  if (!board || typeof board !== "object") return fallback;
  return LEVELS.reduce((acc, level) => {
    const list = Array.isArray(board[level]) ? board[level] : [];
    acc[level] = list.slice(0, 5);
    return acc;
  }, {});
}

export function saveLeaderboardScore(level, entry) {
  if (!LEVELS.includes(level)) return getLeaderboard();
  const board = getLeaderboard();
  const nextList = [...board[level], entry]
    .sort((a, b) => b.score - a.score || b.accuracy - a.accuracy)
    .slice(0, 5);
  const next = { ...board, [level]: nextList };
  writeRaw(LEADERBOARD_KEY, next);
  return next;
}

export function setLastResult(result) {
  writeRaw(LAST_RESULT_KEY, { ...result, version: STORAGE_VERSION });
}

export function getLastResult() {
  const fallback = null;
  const data = readRaw(LAST_RESULT_KEY, fallback);
  if (!data || data.version !== STORAGE_VERSION) return fallback;
  return data;
}


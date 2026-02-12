const HASH_PRIME = 31;

export function hashSeed(value) {
  const text = String(value || "seed");
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * HASH_PRIME + text.charCodeAt(i)) >>> 0;
  }
  return hash || 123456789;
}

export function createSeededRandom(seedInput) {
  let state = hashSeed(seedInput);
  return function random() {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return ((state >>> 0) % 100000) / 100000;
  };
}

export function seededShuffle(items, seedInput) {
  const random = createSeededRandom(seedInput);
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getTodayKey() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function getQuestionPoints(question) {
  return question.blanks === 2 ? 15 : 10;
}

export function shouldApplyStreakBonus(streak) {
  return streak > 0 && streak % 5 === 0;
}

export function calcAccuracy(correctCount, answeredCount) {
  if (!answeredCount) return 0;
  return Math.round((correctCount / answeredCount) * 100);
}


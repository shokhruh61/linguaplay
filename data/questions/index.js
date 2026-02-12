import { A1_QUESTIONS } from "./A1";
import { A2_QUESTIONS } from "./A2";
import { B1_QUESTIONS } from "./B1";
import { B2_QUESTIONS } from "./B2";
import { C1_QUESTIONS } from "./C1";

export const QUESTIONS_BY_LEVEL = {
  A1: A1_QUESTIONS,
  A2: A2_QUESTIONS,
  B1: B1_QUESTIONS,
  B2: B2_QUESTIONS,
  C1: C1_QUESTIONS,
};

export const ALL_QUESTIONS = [...A1_QUESTIONS, ...A2_QUESTIONS, ...B1_QUESTIONS, ...B2_QUESTIONS, ...C1_QUESTIONS];

export function getLevelQuestions(level) {
  return QUESTIONS_BY_LEVEL[level] || [];
}

export function getQuestionsByIds(ids) {
  const set = new Set(ids);
  return ALL_QUESTIONS.filter((q) => set.has(q.id));
}


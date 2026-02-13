"use client";

export default function QuestionCard({
  question,
  onAnswer,
  selected,
  feedback,
}) {
  const normalizedSentence =
    question.blanks === 2 && !question.sentence.includes("___ ___")
      ? question.sentence.replace("___", "___ ___")
      : question.sentence;

  const feedbackClass = feedback === "correct" ? "lp-feedback-correct" : feedback === "wrong" ? "lp-feedback-wrong" : "";

  return (
    <article className={`lp-card rounded-3xl p-4 sm:p-6 ${feedbackClass}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">{question.topic}</span>
      </div>

      <p className="mb-5 text-lg font-semibold leading-8 text-slate-900 sm:text-xl">{normalizedSentence}</p>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {question.options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = option === question.answer;
          let state = "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50";

          if (feedback && isCorrect) state = "border-emerald-500 bg-emerald-50 text-emerald-800";
          if (feedback && isSelected && !isCorrect) state = "border-rose-500 bg-rose-50 text-rose-800";

          return (
            <button
              key={option}
              type="button"
              onClick={() => onAnswer(option)}
              disabled={Boolean(feedback)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold shadow-sm transition ${state} disabled:cursor-not-allowed disabled:opacity-95`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </article>
  );
}


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

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{question.topic}</span>
      </div>

      <p className="mb-5 text-lg font-semibold leading-8 text-slate-900">{normalizedSentence}</p>

      <div className="grid gap-2 sm:grid-cols-2">
        {question.options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = option === question.answer;
          let state = "border-slate-200 bg-white text-slate-800";

          if (feedback && isCorrect) state = "border-emerald-500 bg-emerald-50 text-emerald-800";
          if (feedback && isSelected && !isCorrect) state = "border-rose-500 bg-rose-50 text-rose-800";

          return (
            <button
              key={option}
              type="button"
              onClick={() => onAnswer(option)}
              disabled={Boolean(feedback)}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${state} disabled:cursor-not-allowed`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </article>
  );
}


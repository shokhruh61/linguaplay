import Link from "next/link";

export default function BlogCta() {
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h3 className="text-xl font-bold text-emerald-900">Qoidani o‘qidizmi? Endi amalda sinab ko‘ring.</h3>
      <p className="mt-2 text-sm text-emerald-800">Darajani tanlang va Missing Word(s) o‘yinida bilimni mustahkamlang.</p>
      <div className="mt-4 flex gap-3">
        <Link href="/levels" className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
          Darajani tanlash
        </Link>
        <Link href="/game" className="rounded-lg border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">
          O‘yinni boshlash
        </Link>
      </div>
    </section>
  );
}


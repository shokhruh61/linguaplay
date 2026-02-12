export const C1_QUESTIONS = [];

function add(question) {
  C1_QUESTIONS.push(question);
}

let i = 1;
function id(code) {
  return `C1-${code}-${String(i++).padStart(3, "0")}`;
}

const one = [
  ["We need to ___ a decision soon.", "make", "do", "take", "set", "Biz tez orada qaror qabul qilishimiz kerak.", "Collocations"],
  ["She ___ responsibility immediately.", "took", "made", "did", "put", "U darhol mas'uliyatni oldi.", "Collocations"],
  ["The new policy will ___ into effect next month.", "come", "go", "get", "turn", "Yangi siyosat keyingi oy kuchga kiradi.", "Collocations"],
  ["Please ___ attention to detail.", "pay", "give", "do", "keep", "Iltimos, detallariga e'tibor bering.", "Collocations"],
  ["They ___ remarkable progress in a short time.", "made", "did", "took", "set", "Ular qisqa vaqtda katta yutuqqa erishdi.", "Collocations"],
  ["Rarely ___ he make such mistakes.", "does", "is", "has", "did", "U juda kam hollarda bunday xato qiladi.", "Inversion"],
  ["Seldom ___ we see such clarity.", "do", "are", "have", "did", "Bunday aniqlikni kam ko‘ramiz.", "Inversion"],
  ["She really ___ the nail on the head.", "hit", "kicked", "struck", "caught", "U aynan to‘g‘ri nuqtani aytdi.", "Idioms"],
  ["They are finally on the same ___.", "page", "line", "paper", "sheet", "Ular nihoyat bir fikrga keldi.", "Idioms"],
  ["He broke the ___ quickly in the meeting.", "ice", "wall", "silence", "glass", "U yig‘ilishda suhbatni yengil boshladi.", "Idioms"],
  ["No one doubted that she would ___ her word.", "keep", "hold", "make", "bring", "Hech kim uning va'dasida turishiga shubha qilmadi.", "Collocations"],
  ["We should ___ a compromise before Friday.", "reach", "arrive", "touch", "hit", "Jumagacha murosaga kelishimiz kerak.", "Collocations"],
  ["He ___ a strong impression in the interview.", "made", "did", "took", "set", "U suhbatda kuchli taassurot qoldirdi.", "Collocations"],
  ["Only then ___ she realize the danger.", "did", "has", "was", "had", "Faqat shunda u xavfni tushundi.", "Inversion"],
];

for (const row of one) {
  add({
    id: id(row[6] === "Inversion" ? "INV" : row[6] === "Idioms" ? "IDIOM" : "COLL"),
    level: "C1",
    topic: row[6],
    uzHint: row[5],
    sentence: row[0],
    blanks: 1,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "C1 darajada tabiiy collocation va inversionlar nutqni kuchaytiradi.",
  });
}

const two = [
  ["I ___ ___ working on this for months.", "have been", "had been", "am being", "have be", "Men buning ustida oylar davomida ishlayapman.", "Perfect Continuous"],
  ["She ___ ___ studying before the exam.", "had been", "has been", "was being", "had be", "U imtihondan oldin uzoq dars qilgan edi.", "Perfect Continuous"],
  ["They ___ ___ waiting for a response.", "have been", "had been", "are being", "have be", "Ular javobni ancha vaqtdan beri kutmoqda.", "Perfect Continuous"],
  ["He ___ ___ practicing every day.", "has been", "had been", "is being", "has be", "U har kuni mashq qilmoqda.", "Perfect Continuous"],
  ["We ___ ___ discussing this issue for hours.", "have been", "had been", "are being", "have be", "Biz bu masalani soatlardan beri muhokama qilyapmiz.", "Perfect Continuous"],
  ["I ___ ___ trying to reach you.", "have been", "had been", "am being", "have be", "Men sizga anchadan beri bog‘lanishga harakat qilyapman.", "Perfect Continuous"],
  ["She ___ ___ feeling better lately.", "has been", "had been", "is being", "has be", "U so‘nggi paytlarda o‘zini yaxshiroq his qilmoqda.", "Perfect Continuous"],
  ["They ___ ___ building the system since June.", "have been", "had been", "are being", "have be", "Ular tizimni iyundan beri qurmoqda.", "Perfect Continuous"],
  ["Never ___ I ___ such dedication.", "have seen", "did see", "have see", "had seen", "Hech qachon bunday fidoyilikni ko‘rmaganman.", "Inversion"],
  ["Only then ___ she ___ the risk.", "did realize", "has realized", "did realized", "was realize", "Faqat shunda u xavfni anglab yetdi.", "Inversion"],
  ["Hardly ___ we ___ when the call came.", "had started", "have started", "did start", "were started", "Qo‘ng‘iroq bo‘lganda endi boshlagandik.", "Inversion"],
  ["No sooner ___ he ___ than everyone applauded.", "had finished", "has finished", "did finish", "was finished", "U tugatishi bilan hamma olqishladi.", "Inversion"],
  ["They are ___ ___ the same page now.", "on the", "at the", "in a", "on a", "Ular hozir bir fikrda.", "Idioms"],
  ["She really ___ ___ the ice in the meeting.", "broke the", "break the", "broke an", "was breaking", "U yig‘ilishda muhitni yumshatib yubordi.", "Idioms"],
  ["He ___ ___ the nail on the head.", "hit the", "hits a", "hit a", "has hitting", "U aynan to‘g‘ri gapni aytdi.", "Idioms"],
  ["We must ___ ___ to terms with reality.", "come to", "go to", "get on", "take to", "Biz haqiqatni qabul qilishimiz kerak.", "Collocations"],
];

for (const row of two) {
  add({
    id: id(row[6] === "Perfect Continuous" ? "PCONT" : row[6] === "Inversion" ? "INV" : row[6] === "Idioms" ? "IDIOM" : "COLL"),
    level: "C1",
    topic: row[6],
    uzHint: row[5],
    sentence: row[0],
    blanks: 2,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "C1 grammatikada murakkab ifoda va aniq kontekst tanlash muhim.",
  });
}

export default C1_QUESTIONS;

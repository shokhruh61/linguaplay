export const B2_QUESTIONS = [];

function add(question) {
  B2_QUESTIONS.push(question);
}

let i = 1;
function id(code) {
  return `B2-${code}-${String(i++).padStart(3, "0")}`;
}

const oneBlank = [
  ["He said that he ___ busy.", "was", "is", "has been", "be", "U o‘zini band deb aytdi.", "Reported Speech"],
  ["She told me she ___ tired.", "was", "is", "has been", "be", "U menga charchaganini aytdi.", "Reported Speech"],
  ["They said they ___ ready.", "were", "are", "have been", "be", "Ular tayyor ekanini aytdi.", "Reported Speech"],
  ["He said he ___ call me later.", "would", "will", "can", "did", "U keyinroq qo‘ng‘iroq qilishini aytdi.", "Reported Speech"],
  ["If I ___ rich, I would travel a lot.", "were", "was", "am", "be", "Agar boy bo‘lsam, ko‘p sayohat qilardim.", "Conditionals 2/3"],
  ["If she ___ more time, she would learn faster.", "had", "has", "have", "having", "Agar vaqti ko‘proq bo‘lsa, tezroq o‘rganardi.", "Conditionals 2/3"],
  ["If they ___ earlier, they would have caught the train.", "had left", "left", "have left", "were leaving", "Agar oldinroq chiqsa, poyezdga yetardi.", "Conditionals 2/3"],
  ["He looks tired. He ___ hard.", "must have worked", "must worked", "has must worked", "must working", "U juda charchagan ko‘rinadi.", "Modals of Deduction"],
  ["They are not home. They ___ at work.", "might be", "must be", "can't be", "are", "Ular uyda emas, balki ishda bo‘lsa kerak.", "Modals of Deduction"],
  ["The lights are off. They ___ asleep.", "must be", "might be", "can't be", "must", "Chiroqlar o‘chiq, demak ular uxlayotgan bo‘lishi mumkin.", "Modals of Deduction"],
  ["The package ___ tomorrow.", "will be delivered", "will deliver", "is delivering", "delivered", "Posilka ertaga yetkaziladi.", "Passive Advanced"],
  ["This medicine ___ by doctors only.", "is prescribed", "prescribes", "is prescribing", "prescribed", "Bu dori faqat shifokorlar tomonidan yoziladi.", "Passive Advanced"],
  ["The decision ___ yesterday.", "was announced", "announced", "is announced", "has announce", "Qaror kecha e'lon qilindi.", "Passive Advanced"],
  ["The company ___ for quality.", "is known", "knows", "is knowing", "known", "Kompaniya sifati bilan tanilgan.", "Passive Advanced"],
  ["She said she ___ the next day.", "would come", "will come", "came", "comes", "U ertasi kuni kelishini aytdi.", "Reported Speech"],
  ["I told him I ___ the message.", "had seen", "have seen", "saw", "was seeing", "Men xabarni ko‘rganimni aytdim.", "Reported Speech"],
  ["If we ___ your advice, we wouldn't have failed.", "had followed", "followed", "have followed", "were following", "Agar maslahatingizga amal qilsak, yiqilmasdik.", "Conditionals 2/3"],
  ["If he ___ harder, he would pass.", "studied", "studies", "study", "had studied", "Agar ko‘proq o‘qisa, o‘tardi.", "Conditionals 2/3"],
  ["She can't answer. She ___ the topic.", "might not know", "must know", "can know", "is know", "U javob bera olmayapti, ehtimol mavzuni bilmaydi.", "Modals of Deduction"],
  ["The suspect ___ by the police.", "was arrested", "arrested", "is arrested", "has arrest", "Gumondor politsiya tomonidan qo‘lga olindi.", "Passive Advanced"],
];

for (const row of oneBlank) {
  add({
    id: id(row[6] === "Reported Speech" ? "RS" : row[6] === "Conditionals 2/3" ? "COND" : row[6] === "Modals of Deduction" ? "MOD" : "PASS"),
    level: "B2",
    topic: row[6],
    uzHint: row[5],
    sentence: row[0],
    blanks: 1,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "B2 darajada zamon moslashuvi, taxmin va murakkab strukturalar muhim.",
  });
}

const twoBlank = [
  ["She said she ___ ___ the next day.", "would come", "will come", "would came", "came would", "U ertasi kuni kelishini aytdi.", "Reported Speech"],
  ["He said he ___ ___ me later.", "would call", "will call", "would called", "called would", "U keyinroq qo‘ng‘iroq qilishini aytdi.", "Reported Speech"],
  ["They said they ___ ___ the project.", "had finished", "have finished", "had finish", "finished had", "Ular loyihani tugatganini aytdi.", "Reported Speech"],
  ["I told her I ___ ___ her email.", "had read", "have read", "had readed", "read had", "Men uning emailini o‘qiganimni aytdim.", "Reported Speech"],
  ["If I ___ rich, I ___ travel more.", "were / would", "was / will", "am / would", "were / will", "Agar boy bo‘lsam, ko‘p sayohat qilardim.", "Conditionals 2/3"],
  ["If she ___ harder, she ___ pass.", "studied / would", "studies / will", "study / would", "studied / will", "Agar ko‘proq o‘qisa, o‘tardi.", "Conditionals 2/3"],
  ["If they ___ earlier, they ___ the train.", "had left / would have caught", "left / would catch", "had left / will catch", "left / would have caught", "Agar oldinroq chiqsa, poyezdga yetardi.", "Conditionals 2/3"],
  ["If we ___ your advice, we ___ trouble.", "had followed / would have avoided", "followed / would avoid", "had followed / will avoid", "follow / would have avoided", "Agar maslahatga amal qilsak, muammodan qochardik.", "Conditionals 2/3"],
  ["The documents ___ ___ tomorrow.", "will be sent", "will send", "are sent", "will be send", "Hujjatlar ertaga yuboriladi.", "Passive Advanced"],
  ["The hall ___ ___ before the event.", "will be cleaned", "will clean", "is cleaned", "will be clean", "Zal tadbirdan oldin tozalanadi.", "Passive Advanced"],
  ["The winner ___ ___ at 8 pm.", "will be announced", "will announce", "is announced", "will be announce", "G‘olib soat 8 da e'lon qilinadi.", "Passive Advanced"],
  ["The package ___ ___ this afternoon.", "will be delivered", "will deliver", "is delivered", "will be deliver", "Posilka tushdan keyin yetkaziladi.", "Passive Advanced"],
  ["He ___ ___ hard; he looks exhausted.", "must have worked", "must worked", "has must worked", "must working", "U juda charchagan ko‘rinadi, ko‘p ishlagan bo‘lsa kerak.", "Modals of Deduction"],
  ["They ___ ___ at home now.", "might be", "must be", "can't be", "are might", "Ular hozir uyda bo‘lishi mumkin.", "Modals of Deduction"],
  ["She ___ ___ the answer by now.", "must know", "must knows", "has must known", "must knowing", "U hozirgacha javobni bilsa kerak.", "Modals of Deduction"],
  ["He ___ ___ the message yet.", "might not have seen", "must not saw", "might not seen", "isn't seen", "U hali xabarni ko‘rmagan bo‘lishi mumkin.", "Modals of Deduction"],
  ["If I ___ your number, I ___ you.", "had / would call", "have / will call", "had / will call", "have / would call", "Raqamingiz bo‘lsa, qo‘ng‘iroq qilardim.", "Conditionals 2/3"],
  ["If she ___ the truth, she ___ angry.", "had known / would have been", "knew / would be", "had known / will be", "know / would have been", "Agar haqiqatni bilsa, jahli chiqardi.", "Conditionals 2/3"],
  ["If they ___ us, we ___ helped.", "had asked / would have", "asked / would", "ask / will", "had asked / will have", "Agar so‘rashsa, yordam berardik.", "Conditionals 2/3"],
  ["If we ___ now, we ___ on time.", "left / would arrive", "leave / will arrive", "left / will arrive", "have left / would arrive", "Agar hozir yo‘lga chiqsak, vaqtida yetardik.", "Conditionals 2/3"],
];

for (const row of twoBlank) {
  add({
    id: id(row[6] === "Reported Speech" ? "RS" : row[6] === "Conditionals 2/3" ? "COND" : row[6] === "Modals of Deduction" ? "MOD" : "PASS"),
    level: "B2",
    topic: row[6],
    uzHint: row[5],
    sentence: row[0],
    blanks: 2,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "B2 murakkab tuzilmalarda mantiqiy zamon va forma muhim.",
  });
}

export default B2_QUESTIONS;

export const A2_QUESTIONS = [];

function add(question) {
  A2_QUESTIONS.push(question);
}

let i = 1;
function id(code) {
  return `A2-${code}-${String(i++).padStart(3, "0")}`;
}

const pastSubjects = [
  ["I", "Men"],
  ["You", "Sen"],
  ["We", "Biz"],
  ["They", "Ular"],
  ["He", "U"],
  ["She", "U"],
];

const pastVerbs = [
  ["went", "go", "to the market", "bozorga bordi"],
  ["watched", "watch", "a movie", "film ko‘rdi"],
  ["studied", "study", "all night", "tun bo‘yi o‘qidi"],
  ["called", "call", "his friend", "do‘stiga qo‘ng‘iroq qildi"],
  ["cleaned", "clean", "the room", "xonani tozaladi"],
  ["bought", "buy", "new shoes", "yangi oyoq kiyim oldi"],
  ["cooked", "cook", "dinner", "ovqat pishirdi"],
  ["walked", "walk", "home", "uyga piyoda ketdi"],
  ["opened", "open", "the door", "eshikni ochdi"],
  ["visited", "visit", "his uncle", "amakisinikiga bordi"],
];

for (const [s, uz] of pastSubjects) {
  for (const [v2, base, obj, uzv] of pastVerbs) {
    if (A2_QUESTIONS.length >= 34) break;
    add({
      id: id("PAST"),
      level: "A2",
      topic: "Past Simple",
      uzHint: `${uz} kecha ${uzv}.`,
      sentence: `${s} ___ ${obj} yesterday.`,
      blanks: 1,
      options: [v2, base, `${base}ing`, `was ${base}ing`],
      answer: v2,
      explanation: "Past Simple kechagi yoki tugagan harakatlar uchun ishlatiladi.",
    });
  }
}

const comparativeRows = [
  ["This test is ___ than the last one.", "harder", "hard", "hardest", "more hard", "Bu test oldingisidan qiyinroq."],
  ["My bag is ___ than yours.", "lighter", "light", "lightest", "more light", "Mening sumkam siznikidan yengilroq."],
  ["This road is ___ than that one.", "wider", "wide", "widest", "more wide", "Bu yo‘l unisidan kengroq."],
  ["This task is ___ than I thought.", "easier", "easy", "easiest", "more easy", "Bu vazifa o‘ylaganimdan osonroq."],
  ["Math is ___ than history for me.", "more difficult", "difficult", "most difficult", "difficulter", "Menga matematika tarixdan qiyinroq."],
  ["This phone is ___ than mine.", "more expensive", "expensive", "most expensive", "expensiver", "Bu telefon menikidan qimmatroq."],
  ["Your answer is ___ than mine.", "better", "good", "best", "more good", "Sening javobing menikidan yaxshiroq."],
  ["Today is ___ than yesterday.", "hotter", "hot", "hottest", "more hot", "Bugun kechagidan issiqroq."],
  ["This chair is ___ than that one.", "more comfortable", "comfortable", "most comfortable", "comfortabler", "Bu kursi unisidan qulayroq."],
  ["The blue car is ___ than the red one.", "faster", "fast", "fastest", "more fast", "Ko‘k mashina qizildan tezroq."],
  ["My house is ___ than yours.", "bigger", "big", "biggest", "more big", "Mening uyim siznikidan kattaroq."],
  ["This lesson is ___ than the previous one.", "more interesting", "interesting", "most interesting", "interestinger", "Bu dars oldingisidan qiziqroq."],
  ["Her plan is ___ than ours.", "simpler", "simple", "simplest", "more simple", "Uning rejasi biznikidan sodda."],
  ["The city center is ___ than this area.", "busier", "busy", "busiest", "more busy", "Shahar markazi bu hududdan gavjumroq."],
];

for (const row of comparativeRows) {
  add({
    id: id("COMP"),
    level: "A2",
    topic: "Comparatives",
    uzHint: row[5],
    sentence: row[0],
    blanks: 1,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Comparative ikki narsa yoki holatni solishtirish uchun ishlatiladi.",
  });
}

const modalRows = [
  ["You ___ smoke here.", "mustn't", "must", "can", "may", "Bu yerda chekish mumkin emas."],
  ["I ___ swim well.", "can", "must", "am", "can to", "Men yaxshi suza olaman."],
  ["___ I open the window?", "May", "Must", "Do", "Am", "Derazani ochsam bo‘ladimi?"],
  ["You ___ be polite to guests.", "should", "shouldn't", "can't", "mustn't", "Mehmonlarga muloyim bo‘lish kerak."],
  ["Students ___ use phones in class.", "mustn't", "can", "should", "must", "Darsda telefon ishlatish mumkin emas."],
  ["We ___ leave now, it's late.", "must", "may", "can", "must to", "Kech bo‘ldi, endi ketishimiz kerak."],
  ["He ___ come later.", "might", "must", "can", "has", "U keyinroq kelishi mumkin."],
  ["You ___ ask me anytime.", "can", "must", "might", "shouldn't", "Mendan istalgan payt so‘rashing mumkin."],
  ["I ___ finish this today.", "have to", "can", "may", "has to", "Men buni bugun tugatishim kerak."],
  ["She ___ drive a car.", "can", "must", "is", "cans", "U mashina hayday oladi."],
];

for (const row of modalRows) {
  add({
    id: id("MOD"),
    level: "A2",
    topic: "Modals",
    uzHint: row[5],
    sentence: row[0],
    blanks: 1,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Modal fe’llar qobiliyat, ruxsat yoki majburiyatni bildiradi.",
  });
}

const futureTwo = [
  ["I ___ ___ you tonight.", "will call", "will calling", "am call", "called", "Men bugun kechqurun sizga qo‘ng‘iroq qilaman."],
  ["We ___ ___ a new project.", "will start", "will starting", "are start", "started", "Biz yangi loyiha boshlaymiz."],
  ["She ___ ___ dinner soon.", "will cook", "will cooking", "is cook", "cooked", "U tez orada ovqat tayyorlaydi."],
  ["They ___ ___ next month.", "will travel", "will traveling", "are travel", "traveled", "Ular keyingi oy sayohat qiladi."],
  ["I ___ ___ a new phone.", "am going to buy", "am going buy", "will buys", "going to bought", "Men yangi telefon olmoqchiman."],
  ["He ___ ___ English this year.", "is going to learn", "is going learn", "will learning", "going to learned", "U bu yil ingliz tilini o‘rganmoqchi."],
  ["We ___ ___ a party on Friday.", "are going to have", "are going have", "will having", "going to had", "Biz juma kuni bazm qilmoqchimiz."],
  ["They ___ ___ a house soon.", "are going to rent", "are going rent", "will renting", "going to rented", "Ular tez orada uy ijaraga olmoqchi."],
  ["She ___ ___ me tomorrow.", "is going to visit", "is going visit", "will visiting", "going to visited", "U ertaga meni yo‘qlaydi."],
  ["I ___ ___ earlier next time.", "am going to come", "am going come", "will coming", "going to came", "Men keyingi safar erta kelmoqchiman."],
];

while (A2_QUESTIONS.length < 70) {
  for (const row of futureTwo) {
    if (A2_QUESTIONS.length >= 70) break;
    add({
      id: id("FUT"),
      level: "A2",
      topic: "Future",
      uzHint: row[5],
      sentence: row[0].replace("___ ___", "___ ___"),
      blanks: 2,
      options: [row[1], row[2], row[3], row[4]],
      answer: row[1],
      explanation: "Kelajak uchun will yoki be going to ishlatiladi.",
    });
  }
}

const pastTwo = [
  ["___ you ___ the email?", "Did / send", "Do / send", "Did / sent", "Were / send", "Siz email yubordingizmi?"],
  ["___ she ___ to class?", "Did / come", "Does / come", "Did / came", "Was / come", "U darsga keldimi?"],
  ["___ they ___ dinner?", "Did / cook", "Do / cook", "Did / cooked", "Are / cook", "Ular ovqat pishirdimi?"],
  ["He ___ ___ coffee.", "didn't drink", "doesn't drink", "didn't drank", "isn't drinking", "U qahva ichmadi."],
  ["We ___ ___ late.", "didn't arrive", "don't arrive", "didn't arrived", "weren't arriving", "Biz kech kelmadik."],
  ["She ___ ___ me.", "didn't call", "doesn't call", "didn't called", "isn't calling", "U menga qo‘ng‘iroq qilmadi."],
  ["___ he ___ football?", "Did / play", "Does / play", "Did / played", "Is / playing", "U futbol o‘ynadimi?"],
  ["___ they ___ the test?", "Did / pass", "Do / pass", "Did / passed", "Were / passing", "Ular testdan o‘tdimi?"],
  ["I ___ ___ breakfast.", "didn't have", "don't have", "didn't had", "am not having", "Men nonushta qilmadim."],
  ["___ we ___ there on time?", "Did / arrive", "Do / arrive", "Did / arrived", "Were / arrive", "Biz u yerga vaqtida yetdikmi?"],
];

for (const row of pastTwo) {
  if (A2_QUESTIONS.length >= 80) break;
  add({
    id: id("PAST"),
    level: "A2",
    topic: "Past Simple",
    uzHint: row[5],
    sentence: row[0],
    blanks: 2,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Past so‘roq va inkorda did + base verb ishlatiladi.",
  });
}

export default A2_QUESTIONS;

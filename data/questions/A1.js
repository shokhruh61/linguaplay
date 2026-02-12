export const A1_QUESTIONS = [];

function add(question) {
  A1_QUESTIONS.push(question);
}

let i = 1;
function id(code) {
  return `A1-${code}-${String(i++).padStart(3, "0")}`;
}

const subjects = [
  ["I", "Men"],
  ["You", "Sen"],
  ["We", "Biz"],
  ["They", "Ular"],
  ["He", "U"],
  ["She", "U"],
];

const simpleVerbs = [
  ["read", "reads", "books", "kitob o‘qi"],
  ["drink", "drinks", "tea", "choy ich"],
  ["watch", "watches", "TV", "TV ko‘r"],
  ["play", "plays", "football", "futbol o‘yna"],
  ["study", "studies", "English", "ingliz tilini o‘rgan"],
  ["cook", "cooks", "dinner", "kechki ovqat tayyorla"],
  ["work", "works", "in an office", "ofisda ishla"],
  ["walk", "walks", "to school", "maktabga piyoda bor"],
  ["open", "opens", "the window", "derazani och"],
  ["clean", "cleans", "the room", "xonani tozala"],
];

for (const [s, uz] of subjects) {
  for (const [base, third, obj, uzv] of simpleVerbs) {
    if (A1_QUESTIONS.length >= 32) break;
    const answer = s === "He" || s === "She" ? third : base;
    add({
      id: id("PS"),
      level: "A1",
      topic: "Present Simple",
      uzHint: `${uz} har kuni ${uzv}adi.`,
      sentence: `${s} ___ ${obj} every day.`,
      blanks: 1,
      options: [answer, base, `${base}ing`, `${base}ed`],
      answer,
      explanation: "Present Simple odat va kundalik ishlar uchun ishlatiladi.",
    });
  }
}

const beSet = [
  ["I", "am", "is", "are", "be", "happy today", "Men bugun xursandman."],
  ["You", "are", "is", "am", "be", "my friend", "Sen mening do‘stimsan."],
  ["He", "is", "are", "am", "be", "at home", "U uyda."],
  ["She", "is", "are", "am", "be", "a doctor", "U shifokor."],
  ["We", "are", "is", "am", "be", "ready", "Biz tayyormiz."],
  ["They", "are", "is", "am", "be", "in class", "Ular darsda."],
  ["There", "is", "are", "am", "be", "a cat on the sofa", "Divanda mushuk bor."],
  ["There", "are", "is", "am", "be", "two books on the desk", "Stolda ikkita kitob bor."],
];

while (A1_QUESTIONS.length < 48) {
  for (const [s, ans, x1, x2, x3, rest, hint] of beSet) {
    if (A1_QUESTIONS.length >= 48) break;
    add({
      id: id(s === "There" ? "TH" : "BE"),
      level: "A1",
      topic: s === "There" ? "There is/are" : "To Be",
      uzHint: hint,
      sentence: `${s} ___ ${rest}.`,
      blanks: 1,
      options: [ans, x1, x2, x3],
      answer: ans,
      explanation: "To be shakli ega turiga qarab tanlanadi.",
    });
  }
}

const contVerbs = [
  ["reading", "a book", "kitob o‘qiyapti"],
  ["cooking", "dinner", "ovqat pishiryapti"],
  ["writing", "a message", "xabar yozyapti"],
  ["watching", "a movie", "film ko‘ryapti"],
  ["playing", "chess", "shaxmat o‘ynayapti"],
  ["learning", "new words", "yangi so‘zlar o‘rganayapti"],
  ["cleaning", "the kitchen", "oshxonani tozalayapti"],
  ["waiting", "for the bus", "avtobus kutyapti"],
];

const contSubs = [
  ["I", "am", "Men"],
  ["You", "are", "Sen"],
  ["He", "is", "U"],
  ["She", "is", "U"],
  ["We", "are", "Biz"],
  ["They", "are", "Ular"],
];

for (const [s, be, uz] of contSubs) {
  for (const [ing, obj, uzv] of contVerbs) {
    if (A1_QUESTIONS.length >= 68) break;
    const answer = `${be} ${ing}`;
    add({
      id: id("PC"),
      level: "A1",
      topic: "Present Continuous",
      uzHint: `${uz} hozir ${uzv}.`,
      sentence: `${s} ___ ___ ${obj} now.`,
      blanks: 2,
      options: [answer, `${be} ${ing.replace("ing", "")}`, `${be === "is" ? "are" : "is"} ${ing}`, `do ${ing}`],
      answer,
      explanation: "Present Continuous: am/is/are + V-ing.",
    });
  }
}

const doDoes = [
  ["___ he ___ coffee?", "Does / drink", "Do / drink", "Does / drinks", "Is / drinking", "U qahva ichadimi?"],
  ["___ she ___ English?", "Does / study", "Do / study", "Does / studies", "Is / studying", "U ingliz tilini o‘rganadimi?"],
  ["___ they ___ in Tashkent?", "Do / live", "Does / live", "Do / lives", "Are / living", "Ular Toshkentda yashaydimi?"],
  ["___ we ___ late?", "Do / arrive", "Does / arrive", "Do / arrives", "Are / arriving", "Biz kech kelamizmi?"],
  ["He ___ ___ meat.", "doesn't eat", "don't eat", "doesn't eats", "isn't eating", "U go‘sht yemaydi."],
  ["She ___ ___ TV at night.", "doesn't watch", "don't watch", "doesn't watches", "isn't watching", "U kechasi TV ko‘rmaydi."],
  ["They ___ ___ tea.", "don't drink", "doesn't drink", "don't drinks", "aren't drinking", "Ular choy ichmaydi."],
  ["We ___ ___ on Sunday.", "don't work", "doesn't work", "don't works", "aren't working", "Biz yakshanba kuni ishlamaymiz."],
  ["___ I ___ this correctly?", "Do / say", "Does / say", "Do / says", "Am / saying", "Men buni to‘g‘ri aytyapmanmi?"],
  ["___ you ___ this song?", "Do / like", "Does / like", "Do / likes", "Are / liking", "Bu qo‘shiq sizga yoqadimi?"],
  ["He ___ ___ early.", "doesn't wake up", "don't wake up", "doesn't wakes up", "isn't waking up", "U erta turmaydi."],
  ["They ___ ___ by bus.", "don't go", "doesn't go", "don't goes", "aren't going", "Ular avtobusda bormaydi."],
];

for (const row of doDoes) {
  if (A1_QUESTIONS.length >= 80) break;
  add({
    id: id("PS"),
    level: "A1",
    topic: "Present Simple",
    uzHint: row[5],
    sentence: row[0],
    blanks: 2,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "So‘roq va inkor gaplarda do/does + base verb ishlatiladi.",
  });
}

export default A1_QUESTIONS;

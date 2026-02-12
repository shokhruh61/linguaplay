export const B1_QUESTIONS = [];

function add(question) {
  B1_QUESTIONS.push(question);
}

let i = 1;
function id(code) {
  return `B1-${code}-${String(i++).padStart(3, "0")}`;
}

const ppOne = [
  ["I ___ my homework.", "have finished", "finished", "am finishing", "had finish", "Men uy vazifamni tugatganman."],
  ["She ___ this film before.", "has seen", "saw", "is seeing", "had saw", "U bu filmni oldin ko‘rgan."],
  ["They ___ here since 2020.", "have lived", "lived", "are living", "had lived", "Ular 2020 yildan beri shu yerda yashaydi."],
  ["He ___ his keys.", "has lost", "lost", "is losing", "has lose", "U kalitlarini yo‘qotib qo‘ygan."],
  ["We ___ the report.", "have written", "wrote", "are writing", "have wrote", "Biz hisobotni yozib bo‘lganmiz."],
  ["I ___ this restaurant twice.", "have tried", "tried", "am trying", "had try", "Men bu restoranni ikki marta sinaganman."],
  ["She ___ me already.", "has called", "called", "is calling", "has call", "U menga allaqachon qo‘ng‘iroq qilgan."],
  ["They ___ the answer.", "have found", "found", "are finding", "have find", "Ular javobni topgan."],
  ["He ___ lunch yet.", "hasn't had", "didn't have", "isn't having", "hadn't have", "U hali tushlik qilmagan."],
  ["We ___ this lesson.", "have started", "started", "are starting", "have start", "Biz bu darsni boshlaganmiz."],
  ["I ___ that book.", "have read", "read", "am reading", "have reading", "Men u kitobni o‘qiganman."],
  ["She ___ her room.", "has cleaned", "cleaned", "is cleaning", "has clean", "U xonasini tozalagan."],
  ["They ___ to Bukhara.", "have been", "were", "are", "had be", "Ular Buxoroga borib kelgan."],
  ["He ___ the bill.", "has paid", "paid", "is paying", "has pay", "U hisobni to‘lagan."],
  ["We ___ enough practice.", "have had", "had", "are having", "have", "Biz yetarli mashq qilganmiz."],
  ["I ___ many new words.", "have learned", "learned", "am learning", "have learn", "Men ko‘p yangi so‘z o‘rganganman."],
  ["She ___ her email.", "has sent", "sent", "is sending", "has send", "U emailini yuborgan."],
  ["They ___ this game before.", "have played", "played", "are playing", "have play", "Ular bu o‘yinni oldin o‘ynagan."],
  ["He ___ his mistake.", "has admitted", "admitted", "is admitting", "has admit", "U xatosini tan olgan."],
  ["We ___ enough money.", "have saved", "saved", "are saving", "have save", "Biz yetarli pul yig‘ganmiz."],
];

for (const row of ppOne) {
  add({
    id: id("PP"),
    level: "B1",
    topic: "Present Perfect",
    uzHint: row[5],
    sentence: row[0],
    blanks: 1,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Present Perfect hozirga ta'siri bo‘lgan holatlarda ishlatiladi.",
  });
}

const pcOne = [
  ["At 8 pm, I ___ TV.", "was watching", "watched", "have watched", "am watching", "Soat 8 da men TV ko‘rayotgan edim."],
  ["They ___ when I arrived.", "were sleeping", "slept", "have slept", "are sleeping", "Men kelganimda ular uxlayotgan edi."],
  ["She ___ dinner then.", "was cooking", "cooked", "has cooked", "is cooking", "U o‘sha paytda ovqat tayyorlayotgan edi."],
  ["We ___ for the bus.", "were waiting", "waited", "have waited", "are waiting", "Biz avtobus kutayotgan edik."],
  ["He ___ a book when I called.", "was reading", "read", "has read", "is reading", "Men qo‘ng‘iroq qilganimda u kitob o‘qiyotgan edi."],
  ["I ___ all evening.", "was studying", "studied", "have studied", "am studying", "Men kech bo‘yi dars qilayotgan edim."],
  ["They ___ in the rain.", "were running", "ran", "have run", "are running", "Ular yomg‘irda yugurayotgan edi."],
  ["She ___ music loudly.", "was playing", "played", "has played", "is playing", "U baland musiqa qo‘yayotgan edi."],
  ["We ___ about work.", "were talking", "talked", "have talked", "are talking", "Biz ish haqida gaplashayotgan edik."],
  ["He ___ his bike.", "was fixing", "fixed", "has fixed", "is fixing", "U velosipedini tuzatayotgan edi."],
];

for (const row of pcOne) {
  add({
    id: id("PCONT"),
    level: "B1",
    topic: "Past Continuous",
    uzHint: row[5],
    sentence: row[0],
    blanks: 1,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Past Continuous o‘tgan paytdagi davomli jarayonni bildiradi.",
  });
}

const condOne = [
  ["If it rains, we ___ at home.", "will stay", "stay", "stayed", "would stay", "Agar yomg‘ir yog‘sa, uyda qolamiz."],
  ["If you study, you ___ the exam.", "will pass", "pass", "passed", "would pass", "Agar o‘qisang, imtihondan o‘tasan."],
  ["If she calls, I ___ her back.", "will call", "call", "called", "would call", "Agar u qo‘ng‘iroq qilsa, men qayta qo‘ng‘iroq qilaman."],
  ["If they hurry, they ___ the bus.", "will catch", "catch", "caught", "would catch", "Agar shoshilishsa, avtobusga yetishadi."],
  ["If we leave now, we ___ on time.", "will arrive", "arrive", "arrived", "would arrive", "Agar hozir jo‘nasak, vaqtida yetamiz."],
  ["If I see him, I ___ the news.", "will tell", "tell", "told", "would tell", "Agar uni ko‘rsam, yangilikni aytaman."],
  ["If he sleeps early, he ___ fresh.", "will feel", "feels", "felt", "would feel", "Agar u erta uxlasa, o‘zini yaxshi his qiladi."],
  ["If you don't hurry, you ___ late.", "will be", "are", "were", "would be", "Agar shoshilmasang, kech qolasan."],
];

for (const row of condOne) {
  add({
    id: id("COND1"),
    level: "B1",
    topic: "Conditionals Type 1",
    uzHint: row[5],
    sentence: row[0],
    blanks: 1,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Type 1: If + Present Simple, natijada will + verb.",
  });
}

const ppTwo = [
  ["I ___ ___ my keys.", "have lost", "has lost", "have lose", "did lose", "Men kalitlarimni yo‘qotib qo‘yganman."],
  ["She ___ ___ this movie.", "has seen", "have seen", "has see", "did seen", "U bu filmni ko‘rgan."],
  ["They ___ ___ lunch yet.", "haven't had", "hasn't had", "didn't have", "aren't having", "Ular hali tushlik qilmagan."],
  ["We ___ ___ here for years.", "have lived", "has lived", "had live", "are living", "Biz bu yerda yillardan beri yashaymiz."],
  ["He ___ ___ his work.", "has finished", "have finished", "has finish", "did finished", "U ishini tugatgan."],
  ["I ___ ___ this place before.", "have visited", "has visited", "did visit", "am visiting", "Men bu joyga avval ham borganman."],
  ["She ___ ___ me already.", "has called", "have called", "did called", "is calling", "U menga allaqachon qo‘ng‘iroq qilgan."],
  ["They ___ ___ the answer.", "have found", "has found", "did found", "are finding", "Ular javobni topgan."],
  ["We ___ ___ the bill.", "have paid", "has paid", "did paid", "are paying", "Biz hisobni to‘laganmiz."],
  ["He ___ ___ his car.", "has sold", "have sold", "did sold", "is selling", "U mashinasini sotgan."],
];

for (const row of ppTwo) {
  add({
    id: id("PP"),
    level: "B1",
    topic: "Present Perfect",
    uzHint: row[5],
    sentence: row[0],
    blanks: 2,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Have/has + V3 Present Perfectning asosiy formulasi.",
  });
}

const passTwo = [
  ["This car ___ ___ in Germany.", "is made", "are made", "is make", "made", "Bu mashina Germaniyada ishlab chiqariladi."],
  ["The bridge ___ ___ in 1990.", "was built", "is built", "was build", "built", "Ko‘prik 1990 yilda qurilgan."],
  ["English ___ ___ worldwide.", "is spoken", "are spoken", "is speak", "spoken", "Ingliz tili dunyo bo‘ylab gapiriladi."],
  ["The room ___ ___ every day.", "is cleaned", "are cleaned", "is clean", "cleaned", "Xona har kuni tozalanadi."],
  ["The letters ___ ___ yesterday.", "were sent", "are sent", "were send", "sent", "Xatlar kecha yuborildi."],
  ["Rice ___ ___ in many countries.", "is grown", "are grown", "is grow", "grown", "Guruch ko‘p davlatlarda yetishtiriladi."],
  ["The museum ___ ___ in 2010.", "was opened", "is opened", "was open", "opened", "Muzey 2010 yilda ochilgan."],
  ["The cars ___ ___ here.", "are repaired", "is repaired", "are repair", "repaired", "Mashinalar bu yerda tuzatiladi."],
];

for (const row of passTwo) {
  add({
    id: id("PASS"),
    level: "B1",
    topic: "Passive",
    uzHint: row[5],
    sentence: row[0],
    blanks: 2,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Passive: be + V3 (past participle).",
  });
}

const condTwo = [
  ["If it rains, we ___ ___ home.", "will stay", "would stay", "will staying", "stay will", "Agar yomg‘ir yog‘sa, uyda qolamiz."],
  ["If you hurry, you ___ ___ the bus.", "will catch", "would catch", "will caught", "catch will", "Agar shoshilsang, avtobusga yetasan."],
  ["If she studies, she ___ ___ the exam.", "will pass", "would pass", "will passed", "pass will", "Agar u o‘qisa, imtihondan o‘tadi."],
  ["If we leave now, we ___ ___ on time.", "will arrive", "would arrive", "will arrived", "arrive will", "Agar hozir jo‘nasak, vaqtida yetamiz."],
  ["If I see him, I ___ ___ him.", "will tell", "would tell", "will told", "tell will", "Agar uni ko‘rsam, aytaman."],
  ["If they practice, they ___ ___ better.", "will play", "would play", "will played", "play will", "Agar ular mashq qilsa, yaxshiroq o‘ynaydi."],
  ["If he sleeps early, he ___ ___ fresh.", "will feel", "would feel", "will felt", "feel will", "Agar u erta uxlasa, o‘zini yaxshi his qiladi."],
  ["If you don't eat, you ___ ___ weak.", "will become", "would become", "will became", "become will", "Agar ovqat yemasan, holsiz bo‘lib qolasan."],
  ["If she calls, I ___ ___ her.", "will help", "would help", "will helped", "help will", "Agar u qo‘ng‘iroq qilsa, yordam beraman."],
  ["If we save money, we ___ ___ a house.", "will buy", "would buy", "will bought", "buy will", "Agar pul yig‘sak, uy olamiz."],
  ["If they leave now, they ___ ___ early.", "will arrive", "would arrive", "will arrived", "arrive will", "Agar hozir chiqsa, erta yetib boradi."],
  ["If he trains daily, he ___ ___ stronger.", "will get", "would get", "will got", "get will", "Agar har kuni mashq qilsa, kuchliroq bo‘ladi."],
  ["If I have time, I ___ ___ you.", "will visit", "would visit", "will visited", "visit will", "Vaqtim bo‘lsa, sizni ko‘rgani boraman."],
  ["If we plan well, we ___ ___ success.", "will achieve", "would achieve", "will achieved", "achieve will", "Yaxshi rejalasak, muvaffaqiyatga erishamiz."],
];

for (const row of condTwo) {
  if (B1_QUESTIONS.length >= 70) break;
  add({
    id: id("COND1"),
    level: "B1",
    topic: "Conditionals Type 1",
    uzHint: row[5],
    sentence: row[0],
    blanks: 2,
    options: [row[1], row[2], row[3], row[4]],
    answer: row[1],
    explanation: "Type 1 condition kelajakdagi real ehtimollarni bildiradi.",
  });
}

export default B1_QUESTIONS;

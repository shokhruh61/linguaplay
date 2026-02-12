import LevelsClient from "../../components/LevelsClient";

export const metadata = {
  title: "Darajalar",
  description: "A1 dan C1 gacha ingliz tili darajalarini tanlang va Missing Word(s) o‘yinini boshlang.",
  alternates: { canonical: "/levels" },
};

export default function LevelsPage() {
  return <LevelsClient />;
}

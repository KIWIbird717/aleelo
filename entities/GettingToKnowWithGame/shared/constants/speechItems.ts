import EftFirst from "@/public/images/signin/eft-first.png";
import EftSecond from "@/public/images/signin/eft-second.png";
import { StaticImageData } from "next/image";

export type SpeechItemType = {
  id: number;
  image: StaticImageData;
  text: string | undefined;
};

export const speechItems: (SpeechItemType | null)[] = [
  {
    id: 0,
    image: EftFirst,
    text: "Привет! Меня меня зовут Ефт. Я буду помогать тебе познавать мир aleelа.",
  },
  {
    id: 1,
    image: EftSecond,
    text: "Смотри, поле. Ты будешь по нему идти. Раз в день делать ход, делать практики, через сутки - писать свои мысли.",
  },
  {
    id: 2,
    image: EftSecond,
    text: "Сейчас ты на клетке #1 - Рождение. Нажми на нее.",
  },
  null,
];

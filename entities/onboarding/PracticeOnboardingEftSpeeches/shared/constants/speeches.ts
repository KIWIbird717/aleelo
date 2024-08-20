import { SpeechItemType } from "@/shared/ui/EftOnboardingMessage";
import Image0 from "@/public/images/onboarding/practice/0.png";
import Image4 from "@/public/images/onboarding/practice/4.png";
import Image6 from "@/public/images/onboarding/practice/6.png";

export const eftOnboardingSpeeches: SpeechItemType[] = [
  {
    id: 0,
    image: Image0,
    text: "На каждой клетке есть описание. Нажми на текст, чтобы прочитать.",
  },
  {
    id: 2,
    image: Image0,
    text: 'Нажми на кнопку "Вернуться", чтобы вернуться обратно.',
  },
  {
    id: 4,
    image: Image4,
    text: "Ты также можешь послушать описание и помедитировать.",
  },
  {
    id: 6,
    image: Image6,
    text: "Теперь предлагаю тебе сделать практику. Практики будут ждать тебя на каждой позиции.",
  },
];

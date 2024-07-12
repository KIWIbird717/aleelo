import { SpeechItemType } from "@/entities/GettingToKnowWithGame";
import Image0 from "@/public/images/onboarding/practice/0.png";
import Image4 from "@/public/images/onboarding/practice/4.png";
import Image6 from "@/public/images/onboarding/practice/6.png";
import { OnboardingEftMessage } from "@/shared/ui/EftOnboardingMessage";
import { FC } from "react";

const eftOnboardingSpeeches: SpeechItemType[] = [
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

type PracticeOnboardingEftSpeechesProps = {
  className?: string;
  // текущее сообщение eft
  stage: number;
  // функция для изменения состояния stage из хука useStages
  next: () => void;
};
export const PracticeOnboardingEftSpeeches: FC<PracticeOnboardingEftSpeechesProps> = (props) => {
  return (
    <div className={props.className}>
      {eftOnboardingSpeeches.map((speech) => {
        return (
          <OnboardingEftMessage
            key={`PracticeOnboardingEftSpeeches-${speech.id}`}
            stage={props.stage}
            item={speech}
            handleStageChange={props.next}
          />
        );
      })}
    </div>
  );
};

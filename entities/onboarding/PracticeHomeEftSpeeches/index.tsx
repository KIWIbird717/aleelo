import { OnboardingEftMessage } from "@/shared/ui/EftOnboardingMessage";
import { FC } from "react";
import { eftHomeSpeeches } from "./shared/speeches";

type PracticeOnboardingEftSpeechesProps = {
  className?: string;
  // текущее сообщение eft
  stage: number;
  // функция для изменения состояния stage из хука useStages
  next: () => void;
};
export const HomeOnboardingEftSpeeches: FC<PracticeOnboardingEftSpeechesProps> = (props) => {
  return (
    <div className={props.className}>
      {eftHomeSpeeches.map((speech) => {
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

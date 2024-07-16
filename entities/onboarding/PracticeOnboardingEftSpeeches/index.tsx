import { OnboardingEftMessage } from "@/shared/ui/EftOnboardingMessage";
import { FC } from "react";
import { eftOnboardingSpeeches } from "./shared/constants/speeches";

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

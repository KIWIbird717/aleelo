import { EftOnboardingMessage } from "@/shared/ui/EftOnboardingMessage/EftOnboardingMessage";
import { AnimatePresence } from "framer-motion";
import { SpeechItemType } from "../..";
import { FC } from "react";

type OnboardingEftMessagesProps = {
  item: SpeechItemType;
  stage: SpeechItemType["id"];
  chatPageRoute: string;
  handleStageChange: () => void;
};
export const OnboardingEftMessage: FC<OnboardingEftMessagesProps> = (props) => {
  const isShown = props.stage === props.item.id;

  return (
    <AnimatePresence>
      {isShown && (
        <EftOnboardingMessage
          text={props.item.text}
          image={props.item.image}
          onClick={props.handleStageChange}
        />
      )}
    </AnimatePresence>
  );
};

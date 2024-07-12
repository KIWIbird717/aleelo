import { EftOnboardingMessage } from "@/shared/ui/EftOnboardingMessage/EftOnboardingMessage";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { StaticImageData } from "next/image";

export type SpeechItemType = {
  id: number;
  image: StaticImageData;
  text: string | undefined;
};

export type OnboardingEftMessagesProps = {
  item: SpeechItemType;
  stage: SpeechItemType["id"];
  handleStageChange?: () => void;
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

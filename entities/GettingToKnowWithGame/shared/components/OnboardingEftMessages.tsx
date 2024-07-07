import { EftOnboardingMessage } from "@/shared/ui/EftOnboardingMessage/EftOnboardingMessage";
import { AnimatePresence } from "framer-motion";
import { SpeechItemType } from "../..";
import { FC } from "react";

type OnboardingEftMessagesProps = {
  item: SpeechItemType;
  stage: SpeechItemType["id"];
  lastSpeechItemId: SpeechItemType["id"];
  chatPageRoute: string;
  handleStageChange: () => void;
};
export const OnboardingEftMessages: FC<OnboardingEftMessagesProps> = (props) => {
  const isShown = props.stage === props.item.id;
  const isLastItem = props.item.id == props.lastSpeechItemId;

  return (
    <AnimatePresence>
      {isShown &&
        (isLastItem ? (
          <EftOnboardingMessage
            text={props.item.text}
            image={props.item.image}
            isLinkButton={true}
            href={props.chatPageRoute}
          />
        ) : (
          <EftOnboardingMessage
            text={props.item.text}
            image={props.item.image}
            isLinkButton={false}
            onClick={props.handleStageChange}
          />
        ))}
    </AnimatePresence>
  );
};

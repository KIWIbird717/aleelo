import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Avatar } from "@/widgets/Chat/shared/Avatar";
import { Message } from "@/widgets/Chat/shared/Message";
import dynamic from "next/dynamic";
import { IMessageSender } from "@/shared/lib/types/game-chat-message";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { CarouselMessage } from "@/widgets/Chat/shared/CarouselMessage";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));


interface IMessagesProps {
  sender: IMessageSender;
  messageKey: string | null;
  isFirstMessage: boolean;
  isCurrentType: boolean;
  response: GameChatBlockUserResponseEnum | null;
}

export const Messages: FC<IMessagesProps> = (
  {
    sender,
    messageKey,
    isFirstMessage,
    isCurrentType,
    response,
  },
) => {

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className={twMerge(
        "relative flex w-full gap-[11px]",
        sender === "user" && "justify-end",
        messageKey !== "requestExamplesList" && !isCurrentType && "mb-[14px]",
      )}
    >
      <Avatar sender={sender} isFirstMessage={isFirstMessage} />

      <div className={"flex flex-col gap-[5px]"}>

        {messageKey !== "requestExamplesList"
          ? <Message messageKey={messageKey}
                     sender={sender}
                     isFirstMessage={isFirstMessage}
                     response={response}
          />
          : <CarouselMessage sender={sender}
                             isFirstMessage={isFirstMessage}
                             response={response}
          />
        }
      </div>
    </MotionDiv>
  );
};

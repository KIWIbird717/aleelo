import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Avatar } from "@/widgets/Chat/shared/Avatar";
import { Message } from "@/widgets/Chat/shared/Message";
import dynamic from "next/dynamic";
import { CarouselMessage } from "@/widgets/Chat/shared/CarouselMessage";
import { IChatMessage } from "@/shared/lib/types/chat-message";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IMessagesProps {
  message: IChatMessage;
  isFirstMessage: boolean;
  isCurrentType: boolean;
}

export const Messages: FC<IMessagesProps> = ({ isFirstMessage, isCurrentType, message }) => {
  const { sender, key: messageKey, blockType, response, message: text } = message;

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
        {messageKey !== "requestExamplesList" ? (
          <Message
            messageKey={messageKey}
            sender={sender}
            isFirstMessage={isFirstMessage}
            response={response}
            message={text}
            blockType={blockType}
          />
        ) : (
          <CarouselMessage sender={sender} isFirstMessage={isFirstMessage} message={text} />
        )}
      </div>
    </MotionDiv>
  );
};

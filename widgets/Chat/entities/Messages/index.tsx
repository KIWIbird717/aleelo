import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Avatar } from "@/widgets/Chat/shared/Avatar";
import { Message } from "@/widgets/Chat/shared/Message";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));


interface IMessagesProps {
  type: "user" | "eft";
  photoUrl?: string;
  message: string;
  isFirstMessage: boolean
  isCurrentType: boolean
}

export const Messages: FC<IMessagesProps> = (
  {
    type,
    photoUrl,
    message,
    isFirstMessage,
    isCurrentType
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
        type === "user" && "justify-end",
        !isCurrentType && "mb-[14px]"
      )}
    >
      <Avatar type={type} photoUrl={photoUrl} isFirstMessage={isFirstMessage} />

      <div className={"flex flex-col gap-[5px]"}>
        <Message message={message} type={type} isFirstMessage={isFirstMessage} />
      </div>
    </MotionDiv>
  );
};

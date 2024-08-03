import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/Typography/Typography";
import ChatEftSvg from "@/public/images/svg/chat/message-eft.svg";
import ChatUserSvg from "@/public/images/svg/chat/message-user.svg";
import { IMessageSender } from "@/shared/lib/types/game-chat-message";
import localesRU from "@/public/locales/ru.json";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";

interface IMessageProps {
  // index: number;
  messageKey: string | null;
  sender: IMessageSender
  isFirstMessage: boolean;
  className?: string
  response: GameChatBlockUserResponseEnum | null
}

export const Message: FC<IMessageProps> = (
  {
    // index,
    messageKey,
    sender,
    isFirstMessage,
    className,
    response
  },
) => {
  const titleAI = `chat_message_${messageKey}`
  const titleUser = `chat_message_user_response_${response}`
  const message = messageKey ? localesRU[titleAI] : localesRU[titleUser]

  return (
    <div
      className={twMerge(
        "relative ml-0 mr-[43px] w-fit rounded-[20px] bg-mint-700 px-4 py-2.5 shadow-dialogOnBoarding",
        isFirstMessage && sender === "ai" && "rounded-tl-none",
        isFirstMessage && sender === "user" && "rounded-tr-none",
        sender === "ai" && "ml-[65px]",
        sender === "user" && "ml-[43px] mr-[65px] bg-gold",
        className
      )}
    >
      <Typography
        tag={"p"}
        className={twMerge(
          "text-[15px] font-normal leading-[21px]",
          sender === "user" && "!text-brown text-shadow-light",
          sender === "ai" && "!text-mint text-shadow-light",
        )}
      >
        {message}
      </Typography>

      <div
        className={twMerge(
          "absolute top-0 hidden",
          // "absolute top-0 block",
          isFirstMessage && "block",
          sender === "ai" && "-left-[11px]",
          sender === "user" && "-right-[10px]",
        )}
      >
        <ChatEftSvg className={twMerge("hidden", sender === "ai" && "block")} />
        <ChatUserSvg className={twMerge("hidden", sender === "user" && "block")} />
      </div>
    </div>
  );
};

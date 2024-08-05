import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/Typography/Typography";
import ChatEftSvg from "@/public/images/svg/chat/message-eft.svg";
import ChatUserSvg from "@/public/images/svg/chat/message-user.svg";
import { IMessageSender } from "@/shared/lib/types/game-chat-message";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { useTranslations } from "next-intl";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";

interface IMessageProps {
  messageKey: string | null;
  sender: IMessageSender
  isFirstMessage: boolean;
  className?: string
  response: GameChatBlockUserResponseEnum | null
  message: string | null;
  blockType: GameChatBlockEnum
}

export const Message: FC<IMessageProps> = (
  {
    // index,
    messageKey,
    sender,
    isFirstMessage,
    className,
    response,
    message,
    blockType
  },
) => {
  const t = useTranslations()

  const titleAI = t(`chat_message_${messageKey}`)
  const titleUser = t(`chat_message_user_response_${response}`)
  const variantMessage = messageKey ? titleAI : titleUser
  const text = (messageKey === null && (blockType === "awesomeThenClickAndSetRequest" || blockType === "requestExamplesList"))
    ? message
    : variantMessage

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
        {text}
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

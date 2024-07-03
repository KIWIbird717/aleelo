import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/Typography/Typography";
import ChatEftSvg from "@/public/images/svg/chat/message-eft.svg";
import ChatUserSvg from "@/public/images/svg/chat/message-user.svg";

interface IMessageProps {
  index: number;
  message: string;
  type: "user" | "eft";
}

export const Message: FC<IMessageProps> = ({ index, message, type }) => {
  return (
    <div
      className={twMerge(
        "relative ml-0 mr-[43px] w-fit rounded-[20px] bg-mint-700 px-4 py-2.5 shadow-dialogOnBoarding",
        index === 0 && type === "eft" && "rounded-tl-none",
        index === 0 && type === "user" && "rounded-tr-none",
        type === "user" && "ml-[43px] mr-0 bg-gold",
      )}
    >
      <Typography
        tag={"p"}
        className={twMerge(
          "text-[15px] font-normal leading-[21px]",
          type === "user" && "!text-brown text-shadow-light",
          type === "eft" && "!text-mint text-shadow-light",
        )}
      >
        {message}
      </Typography>

      <div
        className={twMerge(
          "absolute top-0 hidden",
          index === 0 && "block",
          type === "eft" && "-left-[11px]",
          type === "user" && "-right-[10px]",
        )}
      >
        <ChatEftSvg className={twMerge("hidden", type === "eft" && "block")} />
        <ChatUserSvg className={twMerge("hidden", type === "user" && "block")} />
      </div>
    </div>
  );
};

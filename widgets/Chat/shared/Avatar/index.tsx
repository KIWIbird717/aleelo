import { FC } from "react";
import Image from "next/image";
import EftImage from "@/public/images/eft.png";
import UserImage from "@/public/images/user.png";
import { twMerge } from "tailwind-merge";
import { IMessageSender } from "@/shared/lib/types/game-chat-message";

interface IAvatarProps {
  sender: IMessageSender;
  isFirstMessage: boolean;
}

export const Avatar: FC<IAvatarProps> = ({ sender, isFirstMessage }) => {
  const image = sender === "ai" ? EftImage : UserImage;
  const isEft = sender === "ai";
  const isUser = sender === "user";

  return (
    <div
      className={twMerge(
        "absolute flex h-[54px] w-full max-w-[54px] flex-col items-center justify-center rounded-full",
        isEft && "bg-button-gradient-orange",
        isUser && "order-1 bg-avatar",
        !isFirstMessage && "bg-none",
      )}
    >
      {isFirstMessage && (
        <div
          className={
            "flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#264F58]/70 to-[#67B6B3]/70"
          }
        >
          <div
            className={twMerge(
              "h-[46px] w-[46px] overflow-hidden rounded-full",
              isEft && "bg-white",
            )}
          >
            <Image
              src={image}
              alt={`avatar-${sender}`}
              className={twMerge(
                "flex-1 object-cover pl-[1.7px] pr-[3px] pt-[5px]",
                isUser && "rounded-full pl-0 pr-0 pt-0",
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

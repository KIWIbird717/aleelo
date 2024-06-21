import { FC } from "react";
import Image from "next/image";
import EftImage from "@/public/images/eft.png";
import UserImage from "@/public/images/user.png";
import { twMerge } from "tailwind-merge";

interface IAvatarProps {
  type: "user" | "eft";
  photoUrl?: string;
}

export const Avatar: FC<IAvatarProps> = (
  { photoUrl, type },
) => {
  const image = type === "eft" ? EftImage : UserImage;
  const isEft = type === "eft";
  const isUser = type === "user";

  return (
    <div
      className={twMerge("flex  flex-col justify-center items-center w-full max-w-[54px] h-[54px] rounded-full",
        isEft && "bg-button-gradient-orange",
        isUser && "bg-avatar order-1",
      )}
    >
      <div
        className={"flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full bg-gradient-to-b to-[#67B6B3]/70 from-[#264F58]/70"}>
        <div className={twMerge("w-[46px] h-[46px] rounded-full overflow-hidden",
          isEft && "bg-white",
        )}
        >
          <Image src={image}
                 alt={`avatar-${type}`}
                 className={twMerge("flex-1 pt-[5px] pl-[1.7px] pr-[3px] object-cover",
                   isUser && "pl-0 pr-0 pt-0 rounded-full",
                 )}
          />
        </div>
      </div>
    </div>
  );
};
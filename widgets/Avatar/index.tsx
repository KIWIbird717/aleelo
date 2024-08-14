import { FC } from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography/Typography";
import MedalIcon from "@/public/images/profile/medal.png";
import { Button } from "@/shared/ui/Button/Button";

interface IAvatarProps {
  avatarUrl: string;
  name: string;
}

export const Avatar: FC<IAvatarProps> = ({ avatarUrl, name }) => {
  return (
    <div className={"flex w-full flex-col items-center justify-center gap-2.5"}>
      <div
        className={
          "relative flex h-[128px] w-[128px] items-center justify-center rounded-full bg-avatar"
        }
      >
        <div
          className={
            "flex h-[124px] w-[124px] items-center justify-center rounded-full bg-gradient-to-b from-[#264F58]/70 to-[#67B6B3]/70"
          }
        >
          <div className={"flex h-[118px] w-[118px] flex-col items-center justify-center"}>
            <Image
              src={avatarUrl}
              alt={"avatar"}
              className={"rounded-full shadow-avatar"}
              width={118}
              height={118}
            />
          </div>
        </div>

        <div className={"absolute -right-6 top-[25%]"}>
          <Button variant={"snow"} size={"small"} className={"h-[48px] w-[48px] !p-0"}>
            <Image src={MedalIcon} alt={"medal"} className={"h-[33px] w-[28px]"} />
          </Button>
        </div>
      </div>
      <div>
        <Typography tag={"h3"} className={"text-center !text-mint-600 text-shadow-gold"}>
          {name}
        </Typography>
      </div>
    </div>
  );
};

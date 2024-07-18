import { FC } from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography/Typography";
import MedalIcon from "@/public/images/profile/medal.png";
import { Button } from "@/shared/ui/Button/Button";

interface IAvatarProps {
  avatarUrl:string
  name: string
}

export const Avatar: FC<IAvatarProps> = ({avatarUrl, name}) => {

  return (
    <div className={"w-full flex flex-col justify-center items-center gap-2.5"}>
      <div className={"relative w-[128px] h-[128px] flex justify-center items-center rounded-full bg-avatar"}>

        <div className={"w-[124px] h-[124px] flex justify-center items-center rounded-full bg-gradient-to-b from-[#264F58]/70 to-[#67B6B3]/70"}>
          <div className={"flex flex-col justify-center items-center w-[118px] h-[118px]"}>
            <Image src={avatarUrl}
                   alt={"avatar"}
                   className={"rounded-full shadow-avatar"}
                   width={118}
                   height={118}
            />
          </div>
        </div>

        <div className={"absolute top-[25%] -right-6"}>
          <Button variant={"snow"}
                  size={"small"}
                  className={"w-[48px] h-[48px] !p-0"}
          >
            <Image src={MedalIcon}
                   alt={"medal"}
                   className={"w-[28px] h-[33px]"}
            />
          </Button>
        </div>
      </div>
      <div>
        <Typography tag={"h3"}
                    className={"!text-mint-600 text-shadow-gold text-center"}
        >
          {name}
        </Typography>
      </div>
    </div>
  );
};
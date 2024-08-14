import { FC, useMemo } from "react";
import { Block } from "@/shared/ui/Block";
import { Typography } from "@/shared/ui/Typography/Typography";
import { twMerge } from "tailwind-merge";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";
import SubtractIcon from "@/public/images/svg/profile/subtract.svg";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Icon, IconNS } from "@/shared/ui/Icon";
import { GameServiceTypes } from "@/shared/lib/services/game/types";
import GameStatusResult = GameServiceTypes.GameStatusResult;
import { UserServiceTypes } from "@/shared/lib/services/user/types";
import UserResType = UserServiceTypes.UserResType;
import IconVariant = IconNS.IconVariant;

interface IProfileBlockProps {
  status: GameStatusResult;
  profile: UserResType;
}

export const ProfileBlock: FC<IProfileBlockProps> = ({ status, profile }) => {
  const { onOpenModal } = useModal();

  const mood = "Доволен";

  const onClickHandler = () => {
    onOpenModal("moodStatus", { text: mood });
  };

  const items = useMemo(
    () => [
      {
        icon: <Icon variant={profile?.energy as unknown as IconVariant} size={"medium"} />,
        title: "Энергия",
      },
      {
        icon: <Icon variant={profile?.spirit as unknown as IconVariant} size={"medium"} />,
        title: "Стихия",
      },
    ],
    [profile?.energy, profile?.spirit],
  );

  return (
    <div className={"flex h-full w-full justify-between gap-4 pt-[17px]"}>
      <Block className={"gap-[9px]"} title={"Статус"}>
        <div className={"flex w-full justify-between"}>
          {items.map((item, i) => {
            return (
              <div key={i} className={"flex flex-col gap-2.5"}>
                <div
                  className={
                    "flex h-[48px] w-[48px] flex-col items-center justify-center rounded-full"
                  }
                >
                  {item.icon}
                </div>

                <Typography
                  tag={"p"}
                  className={
                    "text-center text-[13px] font-bold leading-[19px] text-mint-600 !text-shadow-gold"
                  }
                >
                  {item.title}
                </Typography>
              </div>
            );
          })}
        </div>
      </Block>
      <Block className={"gap-4 px-0 pb-2"} title={"Статистика"}>
        <div className={"flex w-full justify-between px-4"}>
          <div className={"relative flex flex-col gap-[9px]"}>
            <Typography
              tag={"p"}
              className={twMerge(
                "practice-gradient-static !absolute z-[1] w-full text-center text-[32px] font-semibold leading-[42px]",
              )}
            >
              {status?.numberOfGames}
            </Typography>
            <Typography
              tag={"p"}
              className={twMerge(
                "relative z-[0] text-center text-[32px] font-semibold leading-[42px] !text-shadow-static",
              )}
            >
              {status?.numberOfGames}
            </Typography>
            <Typography
              tag={"p"}
              className={"text-center text-[13px] font-bold text-mint-600 !text-shadow-gold"}
            >
              Игр
            </Typography>
          </div>
          <div className={"relative flex flex-col gap-[9px]"}>
            <Typography
              tag={"p"}
              className={twMerge(
                "practice-gradient-static !absolute z-[1] w-full text-center text-[32px] font-semibold leading-[42px]",
              )}
            >
              {status?.stepsCount}
            </Typography>
            <Typography
              tag={"p"}
              className={twMerge(
                "relative z-[0] text-center text-[32px] font-semibold leading-[42px] !text-shadow-static",
              )}
            >
              {status?.stepsCount}
            </Typography>
            <Typography
              tag={"p"}
              className={"text-center text-[13px] font-bold text-mint-600 !text-shadow-gold"}
            >
              Ходы
            </Typography>
          </div>
        </div>

        <div className={"w-full px-1.5"}>
          <ButtonIcon
            variant={"default"}
            className={"relative h-[26px] w-full bg-green-800 px-2 py-3"}
            onClick={onClickHandler}
          >
            <div className={"flex w-full items-center justify-center"}>
              <Typography
                tag={"p"}
                className={"text-[13px] font-normal leading-5 text-white !text-shadow-satisfied"}
              >
                {mood}
              </Typography>
              <div className={"absolute right-2"}>
                <SubtractIcon />
              </div>
            </div>
          </ButtonIcon>
        </div>
      </Block>
    </div>
  );
};

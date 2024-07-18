import { FC } from "react";
import { Block } from "@/shared/ui/Block";
import { Typography } from "@/shared/ui/Typography/Typography";
import { twMerge } from "tailwind-merge";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";
import SubtractIcon from "@/public/images/svg/profile/subtract.svg";
import { useModal } from "@/shared/lib/hooks/useModal";
import { Icon } from "@/shared/ui/Icon";
import { GameServiceTypes } from "@/shared/lib/services/game/types";
import GameStatusResult = GameServiceTypes.GameStatusResult;

interface IProfileBlockProps {
  status: GameStatusResult
}

const items = [
  {
    icon: <Icon variant={"man"} size={"medium"} color={"deepBlue"} />,
    title: "Энергия",
  },
  {
    icon: <Icon variant={"air"} size={"medium"} color={"grey"} />,
    title: "Стихия",
  },
];

export const ProfileBlock: FC<IProfileBlockProps> = (
  {status}
) => {

  const {onOpenModal} = useModal()

  const mood = "Доволен"

  const onClickHandler = () => {
    onOpenModal("moodStatus", {text: mood})
  }

  return (
    <div className={"w-full h-full flex justify-between gap-4 pt-[17px]"}>
      <Block className={"gap-[9px]"}
             title={"Статус"}
      >
        <div className={"w-full flex justify-between"}>
          {items.map((item, i) => {
            return <div key={i}
                        className={"flex flex-col gap-2.5"}
            >
              <div
                className={"w-[48px] h-[48px] flex flex-col justify-center items-center rounded-full bg-button-gradient-deep-blue shadow-element"}>
                {item.icon}
              </div>

              <Typography tag={"p"}
                          className={"text-center font-bold text-[13px] leading-[19px] text-mint-600 !text-shadow-gold"}
              >
                {item.title}
              </Typography>
            </div>;
          })}
        </div>
      </Block>
      <Block className={"gap-4 px-0 pb-2"}
             title={"Статистика"}
      >

        <div className={"w-full flex justify-between px-4"}>
          <div className={"relative flex flex-col gap-[9px]"}>
            <Typography tag={"p"}
                        className={twMerge("!absolute w-full font-semibold text-center text-[32px] leading-[42px] practice-gradient-static z-[1]")}
            >
              {status?.numberOfGames}
            </Typography>
            <Typography tag={"p"}
                        className={twMerge("relative font-semibold text-center text-[32px] leading-[42px] !text-shadow-static z-[0]")}
            >
              {status?.numberOfGames}
            </Typography>
            <Typography tag={"p"}
                        className={"text-center text-mint-600 font-bold text-[13px] !text-shadow-gold"}
            >
              Игр
            </Typography>
          </div>
          <div className={"relative flex flex-col gap-[9px]"}>
            <Typography tag={"p"}
                        className={twMerge("!absolute w-full font-semibold text-center text-[32px] leading-[42px] practice-gradient-static z-[1]")}
            >
              {status?.stepsCount}
            </Typography>
            <Typography tag={"p"}
                        className={twMerge("relative font-semibold text-center text-[32px] leading-[42px] !text-shadow-static z-[0]")}
            >
              {status?.stepsCount}
            </Typography>
            <Typography tag={"p"}
                        className={"text-center text-mint-600 font-bold text-[13px] !text-shadow-gold"}
            >
              Ходы
            </Typography>
          </div>
        </div>


        <div className={"w-full px-1.5"}>
          <ButtonIcon variant={"default"}
                      className={"relative h-[26px] w-full bg-green-800 py-3 px-2"}
                      onClick={onClickHandler}
          >
            <div className={"w-full flex justify-center items-center"}>
              <Typography tag={"p"}
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
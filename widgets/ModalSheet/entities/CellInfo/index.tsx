import { FC } from "react";

import { CellInfoHeading } from "./shared/ui/heading";
import { twMerge } from "tailwind-merge";
import { Icons } from "@/entities/Icons";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Button } from "@/shared/ui/Button/Button";

interface ICellInfoProps {
  currentIndex: number;
  index: number;
}

export const CellInfo: FC<ICellInfoProps> = ({ currentIndex, index }) => {
  const currentGameId = 1; //TODO: Изменить на реальный ID текущей игры
  const link = `cell/${currentGameId}`;

  return (
    <div
      className={twMerge(
        "relative flex flex-col px-4 pb-5 pt-[17px] after:absolute after:bottom-0 after:left-4 after:h-[2px] after:w-[calc(100%-32px)] after:bg-mint-900 after:opacity-50 after:shadow-white",
        currentIndex === 1 && "after:opacity-0",
        currentIndex === 0 && index === 1 && "after:opacity-0",
      )}
    >
      <CellInfoHeading title={"#1. Рождение"} />

      <Icons className={"mb-4 mt-[9px] gap-1.5"} />

      <div className={"flex w-full gap-4"}>
        <ButtonLink
          href={link}
          variant={"orange"}
          size={"small"}
          className={"w-[calc(50%-8px)] text-[15px]"}
        >
          Описание
        </ButtonLink>
        <Button variant={"blue"} size={"small"} className={"w-[calc(50%-8px)]"}>
          Мои мысли
        </Button>
      </div>
    </div>
  );
};

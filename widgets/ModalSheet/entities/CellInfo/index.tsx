import { FC } from "react";
import { Button } from "../../../../shared/ui/Button/Button";
import { CellInfoHeading } from "./shared/ui/heading";
import { Element } from "./shared/ui/element";
import ManIcon from "@/public/images/svg/icons/man.svg";
import EarthIcon from "@/public/images/svg/icons/earth.svg";
import HappyIcon from "@/public/images/svg/icons/happy.svg";
import Level2Icon from "@/public/images/svg/icons/level/level2.svg";
import { twMerge } from "tailwind-merge";

interface ICellInfoProps {
  currentIndex: number;
  index: number;
}

const items = [
  {
    id: 0,
    title: "Энергия",
    icon: <ManIcon />,
  },
  {
    id: 1,
    title: "Стихия",
    icon: <EarthIcon />,
  },
  {
    id: 2,
    title: "Уровень",
    icon: <Level2Icon />,
  },
  {
    id: 3,
    title: "Эмоция",
    icon: <HappyIcon />,
  },
];

export const CellInfo: FC<ICellInfoProps> = ({ currentIndex, index }) => {
  return (
    <div
      className={twMerge(
        "relative flex flex-col px-4 pb-5 pt-[17px] after:absolute after:bottom-0 after:left-4 after:h-[2px] after:w-[calc(100%-32px)] after:bg-mint-900 after:opacity-50 after:shadow-white",
        currentIndex === 1 && "after:opacity-0",
        currentIndex === 0 && index === 1 && "after:opacity-0",
      )}
    >
      <CellInfoHeading title={"#1. Рождение"} />

      <div className={"mb-4 mt-[9px] flex gap-1.5"}>
        {items.map((item) => {
          const classNameIcon = twMerge(
            item.id === 0 && "bg-button-gradient-deep-blue",
            item.id === 1 && "bg-button-gradient-turquoise",
            item.id === 2 && "bg-button-gradient-blue",
            item.id === 3 && "bg-button-gradient-yellow shadow-elementHappy",
          );

          const classNameText = twMerge(
            item.id === 0 && "text-brown",
            item.id === 1 && "text-mint",
            item.id === 2 && "text-blue-850",
            item.id === 3 && "text-brown",
          );

          return (
            <Element
              key={item.id}
              title={item.title}
              icon={item.icon}
              classNameIcon={classNameIcon}
              classNameText={classNameText}
            />
          );
        })}
      </div>

      <div className={"flex w-full gap-4"}>
        <Button variant={"orange"} size={"small"} className={"w-[calc(50%-8px)]"}>
          Описание
        </Button>
        <Button variant={"blue"} size={"small"} className={"w-[calc(50%-8px)]"}>
          Мои мысли
        </Button>
      </div>
    </div>
  );
};

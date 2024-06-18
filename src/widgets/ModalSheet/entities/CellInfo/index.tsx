import { FC } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { CellInfoHeading } from "@/widgets/ModalSheet/entities/CellInfo/shared/ui/heading";
import { Element } from "@/widgets/ModalSheet/entities/CellInfo/shared/ui/element";
import ManIcon from "@/app/images/svg/icons/man.svg";
import EarthIcon from "@/app/images/svg/icons/earth.svg";
import HappyIcon from "@/app/images/svg/icons/happy.svg";
import Level2Icon from "@/app/images/svg/icons/level/level2.svg";
import { twMerge } from "tailwind-merge";

interface ICellInfoProps {
  currentIndex: number
  index: number
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

export const CellInfo: FC<ICellInfoProps> = ({currentIndex, index}) => {
  return (
    <div className={twMerge("flex flex-col px-4 pb-5 pt-[17px] relative after:absolute after:left-4 after:bottom-0 after:w-[calc(100%-32px)] after:h-[2px] after:bg-mint-900 after:opacity-50 after:shadow-white",
      currentIndex === 1 && "after:opacity-0",
      currentIndex === 0 && index === 1 && "after:opacity-0"
      )}
    >
      <CellInfoHeading title={"#1. Рождение"} />

      <div className={"flex gap-1.5 mt-[9px] mb-4"}>
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

          return <Element key={item.id}
                          title={item.title}
                          icon={item.icon}
                          classNameIcon={classNameIcon}
                          classNameText={classNameText}
          />;
        })}
      </div>

      <div className={"w-full flex gap-4"}>
        <Button variant={"orange"}
                size={"small"}
                className={"w-[calc(50%-8px)]"}
        >
          Описание
        </Button>
        <Button variant={"blue"}
                size={"small"}
                className={"w-[calc(50%-8px)]"}
        >
          Мои мысли
        </Button>
      </div>
    </div>
  );
};
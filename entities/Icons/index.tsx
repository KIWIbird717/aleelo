import { FC } from "react";
import { twMerge } from "tailwind-merge";
import ManIcon from "@/public/images/svg/icons/man.svg";
import EarthIcon from "@/public/images/svg/icons/earth.svg";
import Level2Icon from "@/public/images/svg/icons/level/level2.svg";
import HappyIcon from "@/public/images/svg/icons/happy.svg";
import { Element } from "@/widgets/ModalSheet/entities/CellInfo/shared/ui/element";

interface IIconsProps {
  className?: string
  padding?: number
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

export const Icons: FC<IIconsProps> = (
  {className, padding}
) => {
  return (
    <div className={twMerge("flex", className)}
         style={{padding: `0 ${padding}px`}}
    >
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
  );
};
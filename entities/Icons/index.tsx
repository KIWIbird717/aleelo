import { FC } from "react";
import { twMerge } from "tailwind-merge";
import ManIcon from "@/public/images/svg/icons/man.svg";
import EarthIcon from "@/public/images/svg/icons/earth.svg";
import Level2Icon from "@/public/images/svg/icons/level/level2.svg";
import HappyIcon from "@/public/images/svg/icons/happy.svg";
import { Element } from "@/widgets/ModalSheet/entities/CellInfo/shared/ui/element";
import { motion } from "framer-motion";

interface IIconsProps {
  className?: string;
  padding?: number;
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

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const Icons: FC<IIconsProps> = ({ className, padding }) => {
  return (
    <motion.div
      className={twMerge("flex", className)}
      style={{ padding: `0 ${padding}px` }}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
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
          <motion.div key={item.id} variants={iconVariants}>
            <Element
              key={item.id}
              title={item.title}
              icon={item.icon}
              classNameIcon={classNameIcon}
              classNameText={classNameText}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

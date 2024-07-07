import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Element } from "@/widgets/ModalSheet/entities/CellInfo/shared/ui/element";
import { IElement } from "@/shared/lib/redux-store/slices/modal-slice/type";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IIconsProps {
  className?: string;
  padding?: number;
  items: IElement[];
  variant?: "first" | "second"
}

export const Icons: FC<IIconsProps> = (
  {
    className,
    padding,
    items,
    variant
  },
) => {
  return (
    <MotionDiv
      className={twMerge("flex", className)}
      style={{ padding: `0 ${padding}px` }}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {items.map((item) => {
        const classNameText = twMerge(
          item.id === 0 && "text-brown",
          item.id === 1 && "text-mint",
          item.id === 2 && "text-blue-850",
          item.id === 3 && "text-brown",
        );

        return (
          <div key={item.id}>
            <Element item={item}  classNameText={classNameText} variants={variant} />
          </div>
        );
      })}
    </MotionDiv>
  );
};

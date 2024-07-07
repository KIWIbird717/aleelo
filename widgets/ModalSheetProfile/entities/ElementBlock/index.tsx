import { FC, ReactNode } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { twMerge } from "tailwind-merge";

interface IElementBlockProps {
  title: string;
  isLast?: boolean;
  className?: string;
  classNameItems?: string;
  children: ReactNode
}

export const ElementBlock: FC<IElementBlockProps> = (
  {
    title,
    isLast,
    className,
    classNameItems,
    children
  },
) => {
  return (
    <div className={twMerge(
      "relative w-full flex flex-col gap-3.5 pb-4 px-4",
      !isLast && "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-mint-950 after:shadow-white",
      className,
    )}
    >
      <Typography tag={"p"}
                  className={"font-bold text-[15px] leading-5 text-mint-900 !text-shadow-light text-center"}
      >
        {title}
      </Typography>

      <div className={twMerge(
        "relative w-full flex flex-wrap gap-y-4 justify-between",
        classNameItems,
      )}>
        {children}
      </div>
    </div>
  );
};
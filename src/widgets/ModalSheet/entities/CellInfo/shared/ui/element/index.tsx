import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/Typography/Typography";

interface IElementProps {
  title: string
  icon: ReactNode
  classNameText?: string
  classNameIcon?: string
}

export const Element: FC<IElementProps> = (
  {title, icon, classNameText, classNameIcon}
) => {
  return (
    <div className={"relative flex items-end w-[74px] h-[83px]"}>
      <div className={twMerge("absolute top-0 left-3 flex items-center justify-center rounded-full w-[48px] h-[48px] shadow-element", classNameIcon)}>
        {icon}
      </div>
      <div className={twMerge("flex items-end justify-center w-full h-[60px] bg-[rgba(227,241,240,0.50)] rounded-[12px] px-2 py-[5px]")}>
        <p
          className={twMerge("text-[13px] font-normal leading-5 text-shadow-light", classNameText)}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
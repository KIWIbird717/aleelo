import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../../../../../../../shared/ui/Typography/Typography";

interface IElementProps {
  title: string;
  icon: ReactNode;
  classNameText?: string;
  classNameIcon?: string;
}

export const Element: FC<IElementProps> = ({ title, icon, classNameText, classNameIcon }) => {
  return (
    <div className={"relative flex h-[83px] w-[74px] items-end"}>
      <div
        className={twMerge(
          "absolute left-3 top-0 flex h-[48px] w-[48px] items-center justify-center rounded-full shadow-element",
          classNameIcon,
        )}
      >
        {icon}
      </div>
      <div
        className={twMerge(
          "flex h-[60px] w-full items-end justify-center rounded-[12px] bg-[rgba(227,241,240,0.50)] px-2 py-[5px]",
        )}
      >
        <p
          className={twMerge("text-[13px] font-normal leading-5 text-shadow-light", classNameText)}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

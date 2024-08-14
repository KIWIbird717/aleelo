import { FC, ReactNode } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { twMerge } from "tailwind-merge";

interface IElementBlockProps {
  title: string;
  isLast?: boolean;
  className?: string;
  classNameItems?: string;
  children: ReactNode;
}

export const ElementBlock: FC<IElementBlockProps> = ({
  title,
  isLast,
  className,
  classNameItems,
  children,
}) => {
  return (
    <div
      className={twMerge(
        "relative flex w-full flex-col gap-3.5 px-4 pb-4",
        !isLast &&
          "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-mint-950 after:shadow-white",
        className,
      )}
    >
      <Typography
        tag={"p"}
        className={"text-center text-[15px] font-bold leading-5 text-mint-900 !text-shadow-light"}
      >
        {title}
      </Typography>

      <div
        className={twMerge(
          "relative flex w-full flex-wrap justify-between gap-y-4",
          classNameItems,
        )}
      >
        {children}
      </div>
    </div>
  );
};

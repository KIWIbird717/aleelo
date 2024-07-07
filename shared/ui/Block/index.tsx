import { FC, ReactNode } from "react";
import { cn } from "@/shared/lib/utils/cn";
import { Typography } from "@/shared/ui/Typography/Typography";

interface IBlockProps {
  className?: string;
  children?: ReactNode;
  title?: string
}

export const Block: FC<IBlockProps> = (
  {
    className,
    children,
    title
  }
) => {
  return (
    <div className={cn("w-full flex flex-col border-[2px] border-mint-750 rounded-[20px] py-3 px-4", className)}>
      {!!title && <Typography tag={"p"}
                              className={"text-center font-bold text-[15px] leading-[21px] text-gold !text-shadow-gold"}
      >
        {title}
      </Typography>}
      {children}
    </div>
  );
};
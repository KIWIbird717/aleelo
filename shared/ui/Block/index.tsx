import { FC, ReactNode } from "react";
import { cn } from "@/shared/lib/utils/cn";
import { Typography } from "@/shared/ui/Typography/Typography";

interface IBlockProps {
  className?: string;
  children?: ReactNode;
  title?: string;
}

export const Block: FC<IBlockProps> = ({ className, children, title }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-[20px] border-[2px] border-mint-750 px-4 py-3",
        className,
      )}
    >
      {!!title && (
        <Typography
          tag={"p"}
          className={"text-center text-[15px] font-bold leading-[21px] text-gold !text-shadow-gold"}
        >
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
};

import { FC } from "react";
import SnakeIcon from "@/public/images/svg/icons/snake.svg";
import { Typography } from "@/shared/ui/Typography/Typography";

interface ICellInfoHeadingProps {
  title: string;
}

export const CellInfoHeading: FC<ICellInfoHeadingProps> = ({ title }) => {
  return (
    <div className={"flex items-center justify-between px-3.5"}>
      <Typography tag={"h2"} className={"!text-mint-940 !text-shadow-light"}>
        {title}
      </Typography>
      <button>
        <SnakeIcon />
      </button>
    </div>
  );
};

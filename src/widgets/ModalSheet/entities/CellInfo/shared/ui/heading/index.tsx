import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import SnakeIcon from "@/app/images/svg/icons/snake.svg";

interface ICellInfoHeadingProps {
  title: string;
}

export const CellInfoHeading: FC<ICellInfoHeadingProps> = ({ title }) => {
  return (
    <div className={"flex justify-between items-center px-3.5"}>
      <Typography tag={"h2"}
                  className={"!text-shadow-light !text-mint-940"}
      >
        {title}
      </Typography>
      <button>
        <SnakeIcon />
      </button>
    </div>
  );
};
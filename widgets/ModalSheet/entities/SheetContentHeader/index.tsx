import { FC } from "react";
import ArrowLeftIcon from "@/public/images/svg/arrow-left.svg";
import ArrowRightIcon from "@/public/images/svg/arrow-right.svg";
import { Typography } from "../../../../shared/ui/Typography/Typography";
import PencilIcon from "@/public/images/svg/pencil.svg";
import { twMerge } from "tailwind-merge";

interface ISheetContentHeaderProps {
  currentIndex: number;
}

export const SheetContentHeader: FC<ISheetContentHeaderProps> = ({ currentIndex }) => {
  return (
    <div className={"flex flex-col gap-3 px-4"}>
      <div className={"flex justify-between px-[5px]"}>
        <button>
          <ArrowLeftIcon />
        </button>
        <h3 className="text-[17px] font-bold leading-6 text-mint text-shadow-light">
          Текущая игра 02.02.22
        </h3>
        <button>
          <ArrowRightIcon />
        </button>
      </div>
      <div
        className={twMerge(
          "relative flex items-center pb-[15px] pl-3 " +
            "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-mint-900 after:opacity-50 after:shadow-white",
          currentIndex === 3 && "mt-[9px]",
          currentIndex === 2 && "after:opacity-0",
        )}
      >
        <Typography
          tag={"p"}
          className={"line-clamp-3 h-[59px] text-[13px] font-normal leading-5 !text-shadow-light"}
        >
          Запрос на выращивание денежного дерева, поимку золотой рыбки и умение себя вовремя
          останавливаться. Запрос на выращивание денежного дерева, поимку золотой рыбки и умение
          себя вовремя останавливаться.
        </Typography>
        <div>
          <button
            className={
              "flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gradient-border-edit"
            }
          >
            <div
              className={
                "flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white shadow-buttonEdit"
              }
            >
              <PencilIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

import { FC } from "react";
import ArrowLeftIcon from "@/app/images/svg/arrow-left.svg";
import ArrowRightIcon from "@/app/images/svg/arrow-right.svg";
import { Typography } from "@/shared/ui/Typography/Typography";
import PencilIcon from "@/app/images/svg/pencil.svg";
import { twMerge } from "tailwind-merge";

interface ISheetContentHeaderProps {
  currentIndex: number
}

export const SheetContentHeader: FC<ISheetContentHeaderProps> = (
  {currentIndex}
) => {
  return (
    <div className={"flex flex-col gap-3 px-4"}>
      <div className={"flex justify-between px-[5px]"}>
        <button>
          <ArrowLeftIcon />
        </button>
        <h3 className="font-bold text-[17px] text-mint leading-6 text-shadow-light">Текущая игра 02.02.22</h3>
        <button>
          <ArrowRightIcon />
        </button>
      </div>
      <div className={twMerge("relative flex items-center pl-3 pb-[15px] " +
        "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-mint-900 after:opacity-50 after:shadow-white",
        currentIndex === 3 && "mt-[9px]",
        currentIndex === 2 && "after:opacity-0"
        )}
      >
        <Typography tag={"p"}
                    className={"text-[13px] font-normal leading-5 !text-shadow-light h-[59px] line-clamp-3"}>
          Запрос на выращивание денежного дерева, поимку золотой рыбки и умение себя вовремя останавливаться.
          Запрос на выращивание денежного дерева, поимку золотой рыбки и умение себя вовремя останавливаться.
        </Typography>
        <div>
          <button
            className={"flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gradient-border-edit"}
          >
            <div
              className={"flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white shadow-buttonEdit"}>
              <PencilIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
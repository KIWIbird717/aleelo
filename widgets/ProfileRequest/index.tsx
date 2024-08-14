import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Button } from "@/shared/ui/Button/Button";

interface IProfileRequestProps {}

export const ProfileRequest: FC<IProfileRequestProps> = () => {
  return (
    <div className={"mt-[22px] flex flex-col gap-5"}>
      <Typography
        tag={"p"}
        className={
          "px-[22px] text-center text-[13px] font-bold leading-5 text-mint-600 !text-shadow-gold"
        }
      >
        Запрос на выращивание денежного дерева, поимку золотой рыбки и умение себя вовремя
        останавливать
      </Typography>
      <div className={"flex w-full justify-center"}>
        <Button size={"small"} variant={"blue"}>
          Изменить запрос
        </Button>
      </div>
    </div>
  );
};

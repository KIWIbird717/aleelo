import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Button } from "@/shared/ui/Button/Button";

interface IProfileRequestProps {
}

export const ProfileRequest: FC<IProfileRequestProps> = () => {
  return (
    <div className={"flex flex-col mt-[22px] gap-5"}>
      <Typography tag={"p"}
                  className={"font-bold text-[13px] leading-5 text-center text-mint-600 !text-shadow-gold px-[22px]"}
      >
        Запрос на выращивание денежного дерева, поимку золотой рыбки и умение себя вовремя останавливать
      </Typography>
      <div className={"w-full flex justify-center"}>
        <Button size={"small"}
                variant={"blue"}
        >
          Изменить запрос
        </Button>
      </div>
    </div>
  );
};
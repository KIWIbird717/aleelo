import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";


interface ISheetContentHeaderProps {

}

export const SheetContentHeader: FC<ISheetContentHeaderProps> = () => {
  return (
    <Typography tag={"h3"} className={"text-center text-mint !text-shadow-light px-4"}>
      Общая статистика элементов
    </Typography>
  );
};

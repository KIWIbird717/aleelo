import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";

interface ISheetContentHeaderProps {}

export const SheetContentHeader: FC<ISheetContentHeaderProps> = () => {
  return (
    <Typography tag={"h3"} className={"px-4 text-center text-mint !text-shadow-light"}>
      Общая статистика элементов
    </Typography>
  );
};

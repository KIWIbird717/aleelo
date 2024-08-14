import { FC } from "react";
import EditIcon from "@/public/images/svg/profile/edit.svg";
import SettingsIcon from "@/public/images/svg/profile/settings.svg";
import { Typography } from "@/shared/ui/Typography/Typography";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";

interface IHeadingProps {}

export const Heading: FC<IHeadingProps> = () => {
  return (
    <div className={"flex w-full justify-between px-4"}>
      <ButtonIcon variant={"default"}>
        <EditIcon />
      </ButtonIcon>
      <Typography tag={"h1"} className={"!text-gold text-shadow-gold"}>
        Профиль
      </Typography>
      <ButtonIcon variant={"default"}>
        <SettingsIcon />
      </ButtonIcon>
    </div>
  );
};

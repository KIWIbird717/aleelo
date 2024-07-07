import { FC } from "react";
import EditIcon from "@/public/images/svg/profile/edit.svg";
import SettingsIcon from "@/public/images/svg/profile/settings.svg";
import { Typography } from "@/shared/ui/Typography/Typography";

interface IHeadingProps {
}

export const Heading: FC<IHeadingProps> = () => {
  return (
    <div className={"w-full flex justify-between px-4"}>
      <EditIcon />
      <Typography tag={"h1"}
                  className={"!text-gold text-shadow-gold"}
      >
        Профиль
      </Typography>
      <SettingsIcon />
    </div>
  );
};
"use client"

import { FC } from "react";
import { Heading } from "@/widgets/Heading";
import { Avatar } from "@/widgets/Avatar";
import { ProfileBlock } from "@/widgets/ProfileBlock";
import { ProfileRequest } from "@/widgets/ProfileRequest";

interface IProfileContentProps {
}

export const ProfileContent: FC<IProfileContentProps> = () => {
  return (
    <div className={"w-full flex flex-col px-4 pt-[35px]"}>
      <div className={"flex flex-col gap-3.5"}>
        <Heading />
        <Avatar />
      </div>
      <ProfileBlock />
      <ProfileRequest />
    </div>
  );
};
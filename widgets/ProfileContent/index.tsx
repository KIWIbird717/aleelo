"use client";

import { FC, useEffect, useState } from "react";
import { Heading } from "@/widgets/Heading";
import { Avatar } from "@/widgets/Avatar";
import { ProfileBlock } from "@/widgets/ProfileBlock";
import { ProfileRequest } from "@/widgets/ProfileRequest";
import { UserService } from "@/shared/lib/services/user";
import { GameService } from "@/shared/lib/services/game";
import { GameServiceTypes } from "@/shared/lib/services/game/types";
import GameStatusResult = GameServiceTypes.GameStatusResult;
import { UserServiceTypes } from "@/shared/lib/services/user/types";
import UserResType = UserServiceTypes.UserResType;

interface IProfileContentProps {
  avatarUrl: string;
}

export const ProfileContent: FC<IProfileContentProps> = (
  {
    avatarUrl,
  }
) => {
  const [profile, setProfile] = useState<UserResType | null>(null);
  const [status, setStatus] = useState<GameStatusResult | null>(null)

  useEffect(() => {
    (async () => {
      const { data:profileData } = await UserService.profile();
      setProfile(profileData);

      const {data:gameStatusData} = await GameService.getGameStatus()
      setStatus({
        game: gameStatusData.game,
        numberOfGames: gameStatusData.numberOfGames,
        practiceCompleted: gameStatusData.practiceCompleted,
        stepsCount: gameStatusData.stepsCount,
        });
    })();
  }, []);

  return (
    <div className={"w-full flex flex-col px-4 pt-[35px]"}>
      <div className={"flex flex-col gap-3.5"}>
        <Heading />
        <Avatar avatarUrl={avatarUrl}
                name={profile?.name!}
        />
      </div>
      <ProfileBlock status={status!} profile={profile!} />
      <ProfileRequest />
    </div>
  );
};
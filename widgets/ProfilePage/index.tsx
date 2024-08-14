"use client";

import React, { FC, useEffect, useState } from "react";
import { ProfileContent } from "@/widgets/ProfileContent";
import { ProfileBottom } from "@/widgets/ProfileBottom";
import { GameService } from "@/shared/lib/services/game";
import { IGameStatistics } from "@/shared/lib/types/game";

interface IProfilePageProps {
  url: string;
}

export const ProfilePage: FC<IProfilePageProps> = ({ url }) => {
  const [statistics, setStatistics] = useState<IGameStatistics | null>(null);

  useEffect(() => {
    (async () => {
      const { data: statisticsData } = await GameService.getGeneralStatistics();
      setStatistics(statisticsData);

      console.log({ statisticsData });
    })();
  }, []);

  return (
    <div style={{ paddingBottom: 200 }}>
      <ProfileContent avatarUrl={url} />
      <ProfileBottom statistics={statistics!} />
    </div>
  );
};

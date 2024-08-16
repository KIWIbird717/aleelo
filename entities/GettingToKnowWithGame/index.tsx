"use client";

import React, { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStages } from "./shared/hooks/useStages";
import { OnboardingEftMessage } from "@/shared/ui/EftOnboardingMessage";
import { speechItems } from "./shared/constants/speechItems";

interface IGettingToKnowWithGameProps {
  locale: string;
}

export const GettingToKnowWithGame: FC<IGettingToKnowWithGameProps> = ({ locale }) => {
  const router = useRouter();
  const chatPageRoute = `/${locale}/cell/1`;
  const { stage, handleStageChange } = useStages(chatPageRoute);

  // подгрузка страницы на которую будет редирект
  useEffect(() => {
    router.prefetch(chatPageRoute);
  }, [router, chatPageRoute]);

  return (
    <div className="fixed bottom-0 w-full">
      {speechItems.map((item) => {
        if (!item) return null;
        return (
          <OnboardingEftMessage
            key={item.id}
            stage={stage}
            item={item}
            handleStageChange={handleStageChange}
          />
        );
      })}
    </div>
  );
};

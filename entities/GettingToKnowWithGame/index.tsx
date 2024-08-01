"use client";

import React, { FC, useEffect } from "react";
import EftFirst from "@/public/images/signin/eft-first.png";
import EftSecond from "@/public/images/signin/eft-second.png";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import { useStages } from "./shared/hooks/useStages";
import { OnboardingEftMessage } from "@/shared/ui/EftOnboardingMessage";

interface IGettingToKnowWithGameProps {
  locale: string;
}

export type SpeechItemType = {
  id: number;
  image: StaticImageData;
  text: string | undefined;
};

const speechItems: (SpeechItemType | null)[] = [
  {
    id: 0,
    image: EftFirst,
    text: "Привет! Меня меня зовут Ефт. Я буду помогать тебе познавать мир aleelа.",
  },
  {
    id: 1,
    image: EftSecond,
    text: "Смотри, поле. Ты будешь по нему идти. Раз в день делать ход, делать практики, через сутки - писать свои мысли.",
  },
  {
    id: 2,
    image: EftSecond,
    text: "Сейчас ты на клетке #1 - Рождение. Нажми на нее.",
  },
  null,
];

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

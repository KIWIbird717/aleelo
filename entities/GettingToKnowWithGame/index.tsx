"use client";

import React, { FC, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import EftFirst from "@/public/images/signin/eft-first.png";
import EftSecond from "@/public/images/signin/eft-second.png";
import { useRouter } from "next/navigation";
import { serverSideRedirect } from "../../shared/lib/utils/serverSideRedirect";
import { Logger } from "../../shared/lib/utils/logger/Logger";
import { serverApi } from "../../shared/lib/axios";
import { useAppDispatch } from "@/shared/lib/redux-store/hooks";
import { UserSlice } from "@/shared/lib/redux-store/slices/user-slice/userSlice";
import { EftOnboardingMessage } from "@/shared/ui/EftOnboardingMessage/EftOnboardingMessage";

interface IGettingToKnowWithGameProps {
  locale: string;
}

const items = [
  {
    id: 0,
    image: EftFirst,
    text: "Привет! Меня меня зовут Ефт. Я буду помогать тебе познавать мир aleelа. Я буду помогать тебе.",
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
];

export const GettingToKnowWithGame: FC<IGettingToKnowWithGameProps> = ({ locale }) => {
  const logger = new Logger(GettingToKnowWithGame.name);
  const [stage, setStage] = useState(0);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const chatPageRoute = `/${locale}/cell/1`;

  const finishOnboarding = async () => {
    try {
      await serverApi.put("game/onboarding/finish");

      // создание игры
      await serverApi.post("/game-chat/create-game");

      // получаем и устанавливаем пользователя
      const myProfile = await serverApi.get("/auth/profile");
      dispatch(UserSlice.setProfile(myProfile.data));

      return serverSideRedirect(chatPageRoute);
    } catch (error) {
      logger.error(`Error in [${finishOnboarding.name}]`, error);
    }
  };

  const handleClick = () => {
    if (stage === 2) {
      return finishOnboarding();
    }

    setStage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  // подгрузка страницы на которую будет редирект
  useEffect(() => {
    router.prefetch(chatPageRoute);
  }, [router, chatPageRoute]);

  return (
    <div className="fixed bottom-0 h-[284px] w-full">
      {items.map((item, i) => {
        const isShown = stage === item.id;
        const isLastItem = item.id == items[items.length - 1].id;
        return (
          <AnimatePresence key={item.id}>
            {isShown &&
              (isLastItem ? (
                <EftOnboardingMessage
                  text={item.text}
                  image={item.image}
                  isLinkButton={true}
                  href={chatPageRoute}
                />
              ) : (
                <EftOnboardingMessage
                  text={item.text}
                  image={item.image}
                  isLinkButton={false}
                  onClick={handleClick}
                />
              ))}
          </AnimatePresence>
        );
      })}
    </div>
  );
};

"use client";

import React, { FC, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Typography } from "@/shared/ui/Typography/Typography";
import LeftArrow from "@/app/images/svg/signin/left-arrow.svg";
import Dialog from "@/app/images/svg/signin/dialog.svg";
import { cn } from "@/shared/lib/utils/cn";
import Image from "next/image";
import EftFirst from "@/app/images/signin/eft-first.png";
import EftSecond from "@/app/images/signin/eft-second.png";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { serverSideRedirect } from "@/shared/lib/utils/serverSideRedirect";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { serverApi } from "@/shared/lib/axios";

interface IGettingToKnowWithGameProps {
  locale: string;
}

const MotionButton = dynamic(() => import("framer-motion").then((mod) => mod.motion.button));

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

  const homeRoute = `/${locale}/home`;

  const finishOnboarding = async () => {
    try {
      await serverApi.put("game/onboarding/finish");
      return serverSideRedirect(homeRoute);
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
    router.prefetch(homeRoute);
  }, [router, homeRoute]);

  return (
    <div className="fixed bottom-0 h-[284px] w-full">
      {items.map((item, i) => {
        const isShown = stage === item.id;
        return (
          <AnimatePresence key={item.id}>
            {isShown && (
              <MotionButton
                key={i}
                initial={{ opacity: 0, y: 20, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                className={"relative flex h-full w-full justify-end"}
                onClick={handleClick}
              >
                <div
                  className={`absolute right-[146px] top-[131px] flex max-w-[57%] items-center 
                          rounded-[20px] rounded-tr-none bg-mint-700 py-2.5 pl-4 pr-1.5 shadow-dialogOnBoarding`}
                >
                  <Typography
                    tag={"div"}
                    className={"text-[13px] font-normal leading-5 !text-mint !text-shadow-light"}
                  >
                    {item.text}
                  </Typography>
                  <button>
                    <LeftArrow />
                  </button>

                  <div className={"absolute -right-[11px] top-0"}>
                    <Dialog />
                  </div>
                </div>
                <div
                  className={cn(
                    "absolute -right-[23px] z-[-1]",
                    item.id !== 0 && "-right-[10px] top-[26px]",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={`eft-${i}`}
                    className={cn("h-[321px] w-[315px]", item.id !== 0 && "h-[331px] w-[189px]")}
                  />
                </div>
              </MotionButton>
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
};

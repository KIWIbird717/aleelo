"use client"

import React, { FC, useState } from "react";
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

interface IFamiliarisationEftProps {
  locale: string
}

const MotionButton = dynamic(() => import("framer-motion").then((mod) => mod.motion.button));


export const FamiliarisationEft: FC<IFamiliarisationEftProps> = ({locale}) => {
  const [stage, setStage] = useState(0);
  const { push } = useRouter();

  const items = [
    {
      id: 0,
      image: EftFirst,
      text: "Привет! Меня меня зовут Ефт. Я буду помогать тебе познавать мир aleelа. Я буду помогать тебе.",
    }, {
      id: 1,
      image: EftSecond,
      text: "Смотри, поле. Ты будешь по нему идти. Раз в день делать ход, делать практики, через сутки - писать свои мысли.",
    }, {
      id: 2,
      image: EftSecond,
      text: "Сейчас ты на клетке #1 - Рождение. Нажми на нее.",
    },
  ];

  const handleClick = () => {
    if (stage === 2) {
      return push(`/${locale}/home`);
    }

    setStage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  return (
    <div className="w-full h-[284px] fixed bottom-0">
      {items.map((item, i) => {
        const isShown = stage === item.id;
        return <AnimatePresence key={item.id}>
          {isShown && <MotionButton key={i}
                                    initial={{ opacity: 0, y: 20, scaleY: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                    className={"flex w-full h-full justify-end relative"}
                                    onClick={handleClick}
          >
            <div
              className={`flex items-center max-w-[57%] absolute shadow-dialogOnBoarding right-[146px] 
                          top-[131px] py-2.5 pl-4 pr-1.5 bg-mint-700 rounded-[20px] rounded-tr-none`
              }
            >
              <Typography tag={"div"}
                          className={"!text-shadow-light !text-mint font-normal text-[13px] leading-5"}
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
            <div className={cn("absolute -right-[23px] z-[-1]",
              item.id !== 0 && "-right-[10px] top-[26px]",
            )}>
              <Image src={item.image}
                     alt={`eft-${i}`}
                     className={cn("w-[315px] h-[321px]", item.id !== 0 && "w-[189px] h-[331px]")}
              />
            </div>
          </MotionButton>}
        </AnimatePresence>;
      })}
    </div>
  );
};
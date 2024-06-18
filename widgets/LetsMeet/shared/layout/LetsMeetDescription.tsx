"use client";

import { useDimensions } from "../../../../shared/lib/hooks/useDimensions";
import { Typography } from "../../../../shared/ui/Typography/Typography";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

export const LetsMeetDescription = ({
  stage,
  className,
}: {
  stage: number;
  className?: string;
}) => {
  const { width } = useDimensions();
  const descriptions = useMemo(
    () => [
      {
        id: 0,
        title: "Мечта = Я + Счастье",
        description:
          "Мечта стремится навстречу счастливому человеку. Истинное счастье не зависит от внешних факторов, оно внутри тебя.",
      },
      {
        id: 1,
        title: "Позволь себе счастье",
        description:
          "Чтобы чувствовать себя счастливым каждую секунду, измени свое отношение к событиям и восприятие жизни.",
      },
      {
        id: 2,
        title: "Трансформационная игра",
        description:
          "Избавься от «блокирующих» установок всего за 5 минут в день с помощью психологических практик и инструментов самопознания.",
      },
    ],
    [],
  );

  return (
    <div className="flex flex-col gap-[30px]">
      <MotionDiv
        animate={{ x: (width || 0) * -stage }}
        transition={{ type: "tween", duration: 0.4 }}
        className={twMerge("flex items-center justify-center", className)}
      >
        {descriptions.map((descroption) => {
          return (
            <MotionDiv
              key={descroption.id}
              className="flex w-screen flex-col items-center gap-4 px-[30px]"
            >
              <Typography tag="h2" className="text-center font-semibold text-turquoise">
                {descroption.title}
              </Typography>
              <Typography className="text-center">{descroption.description}</Typography>
            </MotionDiv>
          );
        })}
      </MotionDiv>
      <div className="flex w-full justify-center">
        <Pagination stage={stage} length={3} />
      </div>
    </div>
  );
};

const Pagination = ({ stage, length }: { stage: number; length: number }) => {
  return (
    <div className="flex items-center gap-[10px]">
      {Array.from({ length }).map((_, index) => {
        const isSelected = stage === index;
        return (
          <div
            key={index}
            className=" rounded-full bg-turquoise"
            style={{
              width: isSelected ? 12 : 8,
              height: isSelected ? 12 : 8,
              opacity: isSelected ? 1 : 0.6,
            }}
          />
        );
      })}
    </div>
  );
};

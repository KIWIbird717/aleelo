"use client";

import { NextPage } from "next";
import { useState } from "react";
import { View } from "@/shared/layout/View";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";

import Dice0 from "@/public/images/svg/diceroll/dice0.svg";
import Dice1 from "@/public/images/svg/diceroll/dice1.svg";
import Dice2 from "@/public/images/svg/diceroll/dice2.svg";
import Dice3 from "@/public/images/svg/diceroll/dice3.svg";
import Dice4 from "@/public/images/svg/diceroll/dice4.svg";
import { Button } from "@/shared/ui/Button/Button";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IDiceRollProps {}

const diceImages = [
  <Dice0 key={"Dice0"} />,
  <Dice1 key={"Dice1"} />,
  <Dice2 key={"Dice2"} />,
  <Dice3 key={"Dice3"} />,
  <Dice4 key={"Dice4"} />,
];

const DiceRoll: NextPage<IDiceRollProps> = () => {
  const { svgGRef, svgRef } = useSizes();
  const [isRolling, setIsRolling] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentImage, setCurrentImage] = useState(diceImages[4]);
  const [isLifted, setIsLifted] = useState(false);

  const result = 2;

  const handleRoll = () => {
    if (!isCompleted) {
      setIsLifted(true);

      setTimeout(() => {
        setIsRolling(true);
        setIsLifted(false);
        setTimeout(() => {
          setCurrentImage(diceImages[result]);
        }, 1000);

        setTimeout(() => {
          setIsRolling(false);
          setIsCompleted(true);
        }, 3000);
      }, 500); // Wait for the lift animation to complete
    }
  };

  return (
    <View backgroundEffect="gradient" className={"relative pt-[35px]"}>
      <div onClick={handleRoll} className={"h-full"}>
        {!isRolling && (
          <>
            <div className={""}>
              <Typography
                tag={"h1"}
                className={
                  "text-center text-[24px] font-semibold leading-8 !text-gold text-shadow-gold"
                }
              >
                {isCompleted ? "Ваш бросок:" : "Сделай ход"}
              </Typography>
            </div>
          </>
        )}

        <div className={"flex h-[calc(100vh-160px)] w-full flex-col items-center justify-center"}>
          <MotionDiv className="relative flex flex-col items-center justify-center">
            <MotionDiv
              initial={isRolling ? { rotate: 360 * 4 } : isLifted ? { y: -20 } : { y: 0 }}
              animate={isRolling ? { rotate: 360 * 4 } : isLifted ? { y: -20 } : { y: 0 }}
              transition={
                isLifted ? { duration: 0.5 } : { duration: 3, repeat: isRolling ? Infinity : 0 }
              }
            >
              {currentImage}
            </MotionDiv>
          </MotionDiv>

          <MotionDiv className="mt-[36px] h-[42px] w-[282px] bg-gradient-triangle-shadow blur-[10px]" />

          {isCompleted && (
            <div className={"relative bottom-[10px]"}>
              <Typography
                tag={"p"}
                className={twMerge(
                  "diceroll-gradient !absolute z-[1] w-full text-center text-[72px] font-semibold leading-[118px]",
                )}
              >
                {result}
              </Typography>
              <Typography
                tag={"p"}
                className={twMerge(
                  "relative z-[0] text-center text-[72px] font-semibold leading-[118px] !text-diceroll",
                )}
              >
                {result}
              </Typography>
            </div>
          )}
        </div>

        {isCompleted && (
          <MotionDiv
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fixed bottom-8 mt-5 flex w-full items-center justify-center"
          >
            <Button
              variant={"green"}
              size={"large"}
              className="w-[167px] text-[20px] font-semibold leading-8 !text-white text-shadow-deep-blue"
            >
              Далее
            </Button>
          </MotionDiv>
        )}
      </div>

      {!isRolling && !isCompleted && <Navbar svgRef={svgRef} svgGRef={svgGRef} />}
    </View>
  );
};

export default DiceRoll;

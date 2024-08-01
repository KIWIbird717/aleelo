"use client";

import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import Lottie, { Options as LottieOptions } from "react-lottie";

import { Button } from "@/shared/ui/Button/Button";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

import DiceIntro from "@/public/lotties/Dice_intro_anim.json";
import DiceLoop from "@/public/lotties/Dice_loop_anim.json";
import DiceIntro1 from "@/public/lotties/Dice_end_1_anim.json";
import DiceIntro2 from "@/public/lotties/Dice_end_2_anim.json";
import DiceIntro3 from "@/public/lotties/Dice_end_3_anim.json";
import DiceIntro4 from "@/public/lotties/Dice_end_4_anim.json";
import { useEffect, useMemo, useRef, useState } from "react";


<<<<<<< HEAD
interface IDiceRollProps {}

const diceImages = [
  <Dice0 key={"Dice0"} />,
  <Dice1 key={"Dice1"} />,
  <Dice2 key={"Dice2"} />,
  <Dice3 key={"Dice3"} />,
  <Dice4 key={"Dice4"} />,
];
=======
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));


interface IDiceRollProps {
}
>>>>>>> 67717cc (Added Lottie's triangle and animation for it)

const DiceRoll: NextPage<IDiceRollProps> = () => {
  const { svgGRef, svgRef } = useSizes();
  let result = 2;

  const introAnimationRef = useRef<Lottie>(null); // Реф для начальной анимации
  const endAnimationRef = useRef<Lottie>(null); // Реф для конечной анимации
  const [isIntroAnimationVisible, setIsIntroAnimationVisible] = useState(true); // Состояние видимости начальной анимации
  const [isLoopAnimationVisible, setIsLoopAnimationVisible] = useState(false); // Состояние видимости циклической анимации
  const [isEndAnimationVisible, setIsEndAnimationVisible] = useState(false); // Состояние видимости конечной анимации
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  // Настройки для Lottie анимаций
  const defaultOptions: LottieOptions = {
    loop: false,
    autoplay: false,
    animationData: DiceIntro,
  };

  const defaultOptionsLoop: LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: DiceLoop,
  };

  // Эффект для управления конечной анимацией после загрузки и наличия результата
  useEffect(() => {
    if (!isLoading && result) {
      setIsIntroAnimationVisible(false);
      setIsLoopAnimationVisible(false);
      setIsEndAnimationVisible(true);
      endAnimationRef?.current?.play(); // Запускаем конечную анимацию
    }
  }, [result, isLoading]);

// Эффект для управления состоянием загрузки
  useEffect(() => {
    if (isLoopAnimationVisible) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoopAnimationVisible]);

  // Используем useMemo для выбора конечной анимации в зависимости от результата
  const endAnimation = useMemo(() => {
    switch (result) {
      case 1: {
        return DiceIntro1;
      }
      case 2: {
        return DiceIntro2;
      }
      case 3: {
        return DiceIntro3;
      }
      case 4: {
        return DiceIntro4;
      }
      default: {
        return;
      }
    }
  }, [result]);

  // Настройки для конечной анимации
  const defaultOptionsEnd: LottieOptions = {
    loop: false,
    autoplay: true,
    animationData: endAnimation,
  };

  return (
<<<<<<< HEAD
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
=======
    <View backgroundEffect="gradient" className={"pt-[35px] relative"}>

      <div className={""}>
        <Typography
          tag={"h1"}
          className={"text-center text-[24px] leading-8 font-semibold !text-gold text-shadow-gold"}
        >
          {/*{isCompleted ? "Ваш бросок:" : "Сделай ход"}*/}
          Сделай ход
        </Typography>
>>>>>>> 67717cc (Added Lottie's triangle and animation for it)
      </div>


      <div className={"w-full h-[calc(100vh-160px)] flex flex-col justify-center items-center"}>
        {isIntroAnimationVisible &&
          <Lottie options={defaultOptions}
                  ref={introAnimationRef}
                  style={{ display: "flex", flex: 1, width: "auto" }}
                  eventListeners={[
                    {
                      eventName: "complete",
                      callback: () => {
                        setIsIntroAnimationVisible(false);
                        setIsLoopAnimationVisible(true);
                      },
                    },
                  ]}
                  isPaused
          />}
        {isLoopAnimationVisible ? (
          <Lottie options={defaultOptionsLoop}
                  style={{ display: "flex", flex: 1, width: "auto" }}
          />
        ) : null}
        {isEndAnimationVisible && endAnimation ? (
          <Lottie ref={endAnimationRef}
                  options={defaultOptionsEnd}
          />
        ) : null}

        {/*<div className={"relative bottom-[10px]"}>*/}
        {/*  <Typography*/}
        {/*    tag={"p"}*/}
        {/*    className={twMerge("!absolute w-full font-semibold text-center text-[72px] leading-[118px] diceroll-gradient z-[1]")}*/}
        {/*  >*/}
        {/*    {result}*/}
        {/*  </Typography>*/}
        {/*  <Typography*/}
        {/*    tag={"p"}*/}
        {/*    className={twMerge("relative font-semibold text-center text-[72px] leading-[118px] !text-diceroll z-[0]")}*/}
        {/*  >*/}
        {/*    {result}*/}
        {/*  </Typography>*/}
        {/*</div>*/}
      </div>


      <MotionDiv
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex justify-center items-center mt-5 fixed bottom-8 w-full"
      >
        <Button
          variant={"green"}
          size={"large"}
          className="w-[167px] !text-white text-shadow-deep-blue font-semibold text-[20px] leading-8"
        >
          Далее
        </Button>
      </MotionDiv>


      <Navbar svgRef={svgRef} svgGRef={svgGRef} />
    </View>
  );
};

export default DiceRoll;

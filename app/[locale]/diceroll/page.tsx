"use client";

import { NextPage } from "next";
import { useState } from "react";
import { View } from "@/shared/layout/View";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { AnimatePresence, motion } from "framer-motion";
import Dice0 from "@/public/images/svg/diceroll/dice0.svg";
import Dice1 from "@/public/images/svg/diceroll/dice1.svg";
import Dice2 from "@/public/images/svg/diceroll/dice2.svg";
import Dice3 from "@/public/images/svg/diceroll/dice3.svg";
import Dice4 from "@/public/images/svg/diceroll/dice4.svg";
import { Button } from "@/shared/ui/Button/Button";
import { twMerge } from "tailwind-merge";

interface IDiceRollProps {}

const diceImages = [<Dice0 />, <Dice1 />, <Dice2 />, <Dice3 />, <Dice4 />];

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
    <View backgroundEffect="gradient" className={"pt-[35px] relative"}>
      <div onClick={handleRoll} className={"h-full"}>
        {!isRolling && (
          <>
            <div className={""}>
              <Typography
                tag={"h1"}
                className={"text-center text-[24px] leading-8 font-semibold !text-gold text-shadow-gold"}
              >
                {isCompleted ? "Ваш бросок:" : "Сделай ход"}
              </Typography>
            </div>
          </>
        )}

        <div className={"w-full h-[calc(100vh-160px)] flex flex-col justify-center items-center"}>
          <motion.div className="flex flex-col justify-center items-center relative">
            <motion.div
              initial={isLifted ? { y: -20 } : {y: 0}}
              animate={isRolling ? { rotate: 360 * 4 } : isLifted ? { y: -20 } : {}}
              transition={isLifted ? { duration: 0.5 } : { duration: 3, repeat: isRolling ? Infinity : 0 }}
            >
              {currentImage}
            </motion.div>
          </motion.div>

          <motion.div
            className="w-[282px] h-[42px] bg-gradient-triangle-shadow mt-[36px] blur-[10px]"
          />

          {isCompleted && (
            <div className={"relative bottom-[10px]"}>
              <Typography
                tag={"p"}
                className={twMerge("!absolute w-full font-semibold text-center text-[72px] leading-[118px] diceroll-gradient z-[1]")}
              >
                {result}
              </Typography>
              <Typography
                tag={"p"}
                className={twMerge("relative font-semibold text-center text-[72px] leading-[118px] !text-diceroll z-[0]")}
              >
                {result}
              </Typography>
            </div>
          )}
        </div>

        {isCompleted && (
          <motion.div
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
          </motion.div>
        )}
      </div>

      {!isRolling && !isCompleted && <Navbar svgRef={svgRef} svgGRef={svgGRef} />}
    </View>
  );
};

export default DiceRoll;

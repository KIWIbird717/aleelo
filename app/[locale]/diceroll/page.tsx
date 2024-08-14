"use client";

import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import Lottie from "react-lottie";

import { Button } from "@/shared/ui/Button/Button";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Triangle } from "@/widgets/Triangle";
import { DiceRollHeader } from "@/widgets/DiceRollHeader";
import { useSearchParams } from "next/navigation";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IDiceRollProps {}

const DiceRoll: NextPage<IDiceRollProps> = () => {
  const { svgGRef, svgRef } = useSizes();
  const searchParams = useSearchParams();
  const diceRoll = searchParams.get("diceRoll");
  const result = Number(diceRoll);

  console.log({ result });

  const endAnimationRef = useRef<Lottie>(null); // Реф для конечной анимации
  const [isIntroAnimationVisible, setIsIntroAnimationVisible] = useState(true); // Состояние видимости начальной анимации
  const [isLoopAnimationVisible, setIsLoopAnimationVisible] = useState(false); // Состояние видимости циклической анимации
  const [isEndAnimationVisible, setIsEndAnimationVisible] = useState(false); // Состояние видимости конечной анимации
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  // Эффект для управления конечной анимацией после загрузки и наличия результата
  useEffect(() => {
    if (!isLoading && result) {
      setIsIntroAnimationVisible(false);
      setIsLoopAnimationVisible(false);
      setIsEndAnimationVisible(true);
      (endAnimationRef?.current as any)?.play(); // Запускаем конечную анимацию
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

  return (
    <View backgroundEffect="gradient" className={"relative pt-[35px]"}>
      <DiceRollHeader
        isIntroAnimationVisible={isIntroAnimationVisible}
        isEndAnimationVisible={isEndAnimationVisible}
      />

      <Triangle
        result={result || 2}
        isIntroAnimationVisible={isIntroAnimationVisible}
        isLoopAnimationVisible={isLoopAnimationVisible}
        isEndAnimationVisible={isEndAnimationVisible}
        endAnimationRef={endAnimationRef}
        setIsIntroAnimationVisible={setIsIntroAnimationVisible}
        setIsLoopAnimationVisible={setIsLoopAnimationVisible}
      />

      {isEndAnimationVisible && (
        <MotionDiv
          initial={{ y: 100 }}
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

      <AnimatePresence initial={false}>
        {isIntroAnimationVisible && (
          <motion.div exit={{ opacity: 0 }} transition={{ type: "tween", stiffness: 300 }}>
            <Navbar svgRef={svgRef} svgGRef={svgGRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </View>
  );
};

export default DiceRoll;

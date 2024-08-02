import { FC, LegacyRef, useMemo, useRef } from "react";
import Lottie, { Options as LottieOptions } from "react-lottie";
import DiceIntro from "@/public/lotties/Dice_intro_anim.json";
import DiceLoop from "@/public/lotties/Dice_loop_anim.json";
import DiceIntro1 from "@/public/lotties/Dice_end_1_anim.json";
import DiceIntro2 from "@/public/lotties/Dice_end_2_anim.json";
import DiceIntro3 from "@/public/lotties/Dice_end_3_anim.json";
import DiceIntro4 from "@/public/lotties/Dice_end_4_anim.json";
import { DiceResult } from "@/widgets/Triangle/shared/ui/DiceResult";

interface ITriangleProps {
  isIntroAnimationVisible: boolean;
  isLoopAnimationVisible: boolean;
  isEndAnimationVisible: boolean;
  endAnimationRef: LegacyRef<Lottie> | undefined;
  setIsIntroAnimationVisible: (value: boolean) => void;
  setIsLoopAnimationVisible: (value: boolean) => void;
  result: number;
}

export const Triangle: FC<ITriangleProps> = (
  {
    isIntroAnimationVisible,
    isLoopAnimationVisible,
    isEndAnimationVisible,
    result,
    endAnimationRef,
    setIsLoopAnimationVisible,
    setIsIntroAnimationVisible,
  },
) => {
  const introAnimationRef = useRef<Lottie>(null); // Реф для начальной анимации

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
    <div className={"w-full  flex flex-col justify-center items-center"}>
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
                style={{ display: "flex", flex: 1, width: "auto" }}
        />
      ) : null}

      <DiceResult result={result}
                  isEndAnimationVisible={isEndAnimationVisible}
      />
    </div>
  )
};
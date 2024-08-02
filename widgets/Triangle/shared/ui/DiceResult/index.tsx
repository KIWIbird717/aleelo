import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));


interface IDiceResultProps {
  isEndAnimationVisible: boolean
  result: number
}

export const DiceResult: FC<IDiceResultProps> = (
  {
    isEndAnimationVisible,
    result
  }
) => {
  return (
   <>
     {isEndAnimationVisible && <MotionDiv
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
       className={"relative bottom-[10px]"}
     >
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
     </MotionDiv>}
   </>
  );
};
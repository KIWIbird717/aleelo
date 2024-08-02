import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));


interface IDiceRollHeaderProps {
  isIntroAnimationVisible: boolean
  isEndAnimationVisible: boolean
}

export const DiceRollHeader: FC<IDiceRollHeaderProps> = (
  {
    isIntroAnimationVisible,
    isEndAnimationVisible
  }
) => {
  return (
    <AnimatePresence initial={false}>
      {isIntroAnimationVisible && <MotionDiv
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Typography
          tag={"h1"}
          className={"text-center text-[24px] leading-8 font-semibold !text-gold text-shadow-gold"}
        >
          Сделай ход
        </Typography>
      </MotionDiv>
      }
      {isEndAnimationVisible && <MotionDiv
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Typography
          tag={"h1"}
          className={"text-center text-[24px] leading-8 font-semibold !text-gold text-shadow-gold"}
        >
          Ваш бросок:
        </Typography>
      </MotionDiv>}
    </AnimatePresence>
  );
};
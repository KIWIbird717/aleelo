import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

const MotionButton = dynamic(() => import("framer-motion").then((mod) => mod.motion.button));
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IPracticeDescriptionProps {
  onShow: () => void;
  isShowText: boolean;
}

export const PracticeDescription: FC<IPracticeDescriptionProps> = ({ onShow, isShowText }) => {
  return (
    <div className="relative max-w-lg">
      <MotionButton className={"text-left"} onClick={onShow} whileTap={{ scale: 0.95 }}>
        <MotionDiv
          className="bg-gray-900 relative z-10 overflow-hidden text-mint-700"
          style={{
            maskImage: !isShowText ? "linear-gradient(to bottom, black 60%, transparent 100%)" : "",
            WebkitMaskImage: !isShowText
              ? "linear-gradient(to bottom, black 0%, transparent 100%)"
              : "",
          }}
          initial={{ height: "31.79vh" }}
          animate={{ height: isShowText ? "auto" : "31.79vh" }}
          exit={{ height: "31.79vh" }}
          transition={{ duration: 0.2 }}
        >
          <Typography
            tag={"p"}
            className={twMerge(
              "overflow-hidden text-[15px] font-normal leading-[21px]",
              isShowText && "h-full",
            )}
          >
            До рождения человек находится вне игры. Жизнь- игра, и чтобы ее начать нужно родиться.
            Лила является отображением жизни человека и его выборов. <br />
            <br />
            В игре рождение символизирует то что игрок имеет твердое намерение пройти этот путь и
            берет ответственность за свои действия и понимает что каждое решение в прошлом имеет
            свои последствия. <br /> <br />
            Этот мир отражает то, что мы собой представляем. Мы можем отслеживать наши состояния,
            выбирать наши действия, чтобы иметь ту жизнь, которую хотим.
          </Typography>
        </MotionDiv>
      </MotionButton>
    </div>
  );
};

import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface IPracticeDescriptionProps {
  onShow: () => void;
  isShowText: boolean;
}

export const PracticeDescription: FC<IPracticeDescriptionProps> = (
  { onShow, isShowText },
) => {
  return (
    <div className="relative max-w-lg">
      <motion.button className={"text-left"}
                     onClick={onShow}
                     whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="relative z-10 bg-gray-900 text-mint-700 overflow-hidden"
          style={{
            maskImage: !isShowText ? "linear-gradient(to bottom, black 60%, transparent 100%)" : "",
            WebkitMaskImage: !isShowText ? "linear-gradient(to bottom, black 0%, transparent 100%)" : "",
          }}
          initial={{ height: "31.79vh" }}
          animate={{ height: isShowText ? "auto" : "31.79vh" }}
          exit={{ height: "31.79vh" }}
          transition={{ duration: 0.5 }}
        >
          <Typography tag={"p"}
                      className={twMerge("font-normal text-[15px] leading-[21px] overflow-hidden",
                        isShowText && "h-full",
                      )}
          >
            До рождения человек находится вне игры. Жизнь- игра, и чтобы ее начать нужно родиться. Лила является
            отображением жизни человека и его выборов. <br /><br />
            В игре рождение символизирует то что игрок имеет твердое намерение пройти этот путь и берет ответственность
            за
            свои действия и понимает что каждое решение в прошлом имеет свои последствия. <br /> <br />
            Этот мир отражает то, что мы собой представляем. Мы можем отслеживать наши состояния, выбирать наши
            действия,
            чтобы иметь ту жизнь, которую хотим.

          </Typography>
        </motion.div>
      </motion.button>
    </div>
  );
};
import { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import { twMerge } from "tailwind-merge";

interface IPracticeDescriptionProps {
}

export const PracticeDescription: FC<IPracticeDescriptionProps> = () => {
  return (
    <div className="relative max-w-lg">
      <div className="relative z-10 bg-gray-900 text-mint-700 overflow-hidden"
           style={{
             maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
             WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
           }}
      >
        <Typography tag={"p"}
                    className={twMerge("font-normal text-[15px] h-[31.79vh] leading-[21px] overflow-hidden ")}
        >
          До рождения человек находится вне игры. Жизнь- игра, и чтобы ее начать нужно родиться. Лила является
          отображением жизни человека и его выборов. <br /><br />
          В игре рождение символизирует то что игрок имеет твердое намерение пройти этот путь и берет ответственность за
          свои действия и понимает что каждое решение в прошлом имеет свои последствия. <br /> <br />
          Этот мир отражает то, что мы собой представляем. Мы можем отслеживать наши состояния, выбирать наши действия,
          чтобы иметь ту жизнь, которую хотим.

        </Typography>
      </div>
    </div>
  );
};
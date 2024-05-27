"use client";

import { FC } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { twMerge } from "tailwind-merge";


interface ICircularLoaderProps {
  variant?: "big" | "small";
  value: number;
  counterClockwise?: boolean // направление загрузки
}

export const CircularLoader: FC<ICircularLoaderProps> = (
  { variant = "big", value, counterClockwise = false },
) => {

  const DEFAULT_STYLES_TEXT = twMerge("flex flex-col items-center text-[15px] leading-[21px] font-bold !text-mint-600 text-shadow-gold");
  const SIZES = {
    width: variant === "big" ? 128 : 44,
    height: variant === "big" ? 128 : 44,
  };

  const STROKE_WIDTH = variant === "big" ? 12 : 18;

  return (
    <CircularProgressbarWithChildren value={value}
                                     strokeWidth={STROKE_WIDTH}
                                     counterClockwise={counterClockwise}
                                     styles={{
                                       root: {
                                         width: SIZES.width,
                                         height: SIZES.height,
                                       },
                                       path: {
                                         stroke: "#FAB51E",
                                       },
                                       trail: {
                                         stroke: "#A1C6CC",
                                         opacity: "50%",
                                       },
                                     }}
    >
      <div className={DEFAULT_STYLES_TEXT}>
        {variant === "big" ? <>
            <span>{value}%</span>
            <span>Done</span>
          </>
          : <span>{value}</span>
        }
      </div>
    </CircularProgressbarWithChildren>
  );
};
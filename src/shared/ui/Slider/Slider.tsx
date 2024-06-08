"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/shared/lib/utils/cn";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface ISliderProps {
  tooltip?: boolean;
  progressBar?: boolean;
  textStyle?: "dark" | "light";
}

const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & ISliderProps
>(
  (
    { className, tooltip, progressBar, textStyle = "dark", value, onValueChange, ...props },
    ref,
  ) => {
    const preventScroll = usePreventOnSwipeWindowClose(false);
    const [isHolding, setIsHolding] = useState(false);

    const handleValueChange = (newValue: number[]) => {
      if (progressBar) return;
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    const handlePointerDown = () => {
      if (progressBar) return;
      setIsHolding(true);
      preventScroll(true);
    };

    const handlePointerUp = () => {
      if (progressBar) return;
      setIsHolding(false);
      preventScroll(false);
    };

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex h-full max-h-[48px] w-full touch-none select-none items-center",
          className,
        )}
        value={value}
        onValueChange={handleValueChange}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        {...props}
      >
        <SliderPrimitive.Track
          className={twMerge(
            "relative w-full grow overflow-hidden rounded-[6px] bg-mint-750 transition-all duration-200",
            isHolding ? "h-4" : "h-3",
          )}
        >
          <SliderPrimitive.Range
            className={twMerge(
              "absolute h-full rounded-[6px] bg-yellow-950",
              isHolding && "rounded-[16px]",
            )}
          />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb
          className={twMerge(
            "focus-visible:ring-ring flex h-12 w-12 items-center justify-center rounded-full bg-mint-750 backdrop-blur-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
            progressBar && "hidden",
          )}
        >
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-slider">
              <div className={"h-[28px] w-[28px] rounded-full bg-white shadow-slider"} />
            </div>
          </div>

          {/* tooltip */}
          <AnimatePresence>
            {tooltip && isHolding && (
              <MotionDiv
                className="absolute bottom-[65px] origin-bottom text-[13px]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <div className="relative !z-[2] flex h-[26px] w-[54px] items-center justify-center rounded-[40px]  bg-button-gradient-orange font-bold leading-[19.5px]">
                  <span className={"text-white text-shadow-red-two"}>{value}%</span>
                </div>
                <div className="absolute left-[35%] top-[14px] !z-[1] !h-[15px] !w-[20px] -rotate-45 rounded-[2px] bg-[#CB6B39]" />
              </MotionDiv>
            )}
          </AnimatePresence>
        </SliderPrimitive.Thumb>

        {/* progress bar */}
        {progressBar && (
          <div
            className={twMerge(
              "absolute top-[27px] w-full text-center text-[13px] font-bold leading-[19.5px]",
              textStyle === "dark"
                ? "!text-brown-700 text-shadow-gold"
                : "!text-mint-900 text-shadow-light",
            )}
          >
            {value}% done
          </div>
        )}

        {/* min max */}
        {(props.min || props.max) && (
          <div className="absolute top-[27px] flex w-full justify-between text-[13px] font-bold leading-[19.5px]">
            <span
              className={twMerge(
                textStyle === "dark"
                  ? "!text-brown-700 text-shadow-gold"
                  : "!text-mint-900 text-shadow-light",
              )}
            >
              {props.min}%
            </span>
            <span
              className={twMerge(
                textStyle === "dark"
                  ? "!text-brown-700 text-shadow-gold"
                  : "!text-mint-900 text-shadow-light",
              )}
            >
              {props.max}%
            </span>
          </div>
        )}
      </SliderPrimitive.Root>
    );
  },
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

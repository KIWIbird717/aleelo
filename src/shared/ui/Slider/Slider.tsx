"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/shared/func/utils";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

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
    {
      className,
      tooltip,
      progressBar,
      textStyle = "dark",
      value,
      onValueChange,
      ...props
    }, ref,
  ) => {
    // const [value, setValue] = useState(45);
    const [isHolding, setIsHolding] = useState(false);

    const handleValueChange = (newValue: number[]) => {
      if (progressBar) return;
      if(onValueChange) {
        onValueChange(newValue)
      }
    };

    const handlePointerDown = () => {
      if (progressBar) return;
      setIsHolding(true);
    };

    const handlePointerUp = () => {
      if (progressBar) return;
      setIsHolding(false);
    };

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative touch-none select-none h-full max-h-[48px] flex w-full items-center",
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
          className={twMerge("relative w-full grow overflow-hidden rounded-[6px] bg-mint-750", isHolding ? "h-4" : "h-3")}>
          <SliderPrimitive.Range
            className={twMerge("absolute h-full bg-yellow-950 rounded-[6px]", isHolding && "rounded-[16px]")} />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb
          className={twMerge("flex items-center justify-center h-12 w-12 rounded-full bg-mint-750 backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            progressBar && "hidden",
          )}
        >
          <div className={"flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full"}>
            <div className={"w-full h-full flex items-center justify-center bg-gradient-slider rounded-full "}>
              <div className={"w-[28px] h-[28px] bg-white rounded-full shadow-slider"} />
            </div>
          </div>

          {/*tooltip*/}
          {tooltip && isHolding && <div className={"absolute bottom-[65px] text-[13px] animate-tooltip-appear"}
                                        style={{ transformOrigin: 'bottom center' }}
          >
            <div
              className={"relative font-bold w-[54px] h-[26px] flex items-center justify-center leading-[19.5px]  rounded-[40px] bg-button-gradient-orange !z-[2]"}>
              <span className={"text-white text-shadow-red-two"}>{value}%</span>
            </div>
            <div
              className={"absolute bg-[#CB6B39] rounded-[2px] !w-[20px] !h-[15px] left-[35%] top-[14px] -rotate-45 !z-[1]"} />
          </div>}

        </SliderPrimitive.Thumb>

        {/*progress bar*/}
        {progressBar && <div
          className={twMerge("absolute top-[27px] w-full text-center  text-[13px] font-bold leading-[19.5px]",
            textStyle === "dark" ? "!text-brown-700 text-shadow-gold" : "!text-mint-900 text-shadow-light",
          )}>
          {value}% done
        </div>}

        {/*min max*/}
        {(props.min || props.max) &&
          <div className={"w-full flex justify-between absolute top-[27px] text-[13px] font-bold leading-[19.5px]"}>
            <span
              className={twMerge(textStyle === "dark" ? "!text-brown-700 text-shadow-gold" : "!text-mint-900 text-shadow-light")}
            >
              min
            </span>
            <span
              className={twMerge(textStyle === "dark" ? "!text-brown-700 text-shadow-gold" : "!text-mint-900 text-shadow-light")}
            >
              max
            </span>
          </div>
        }

      </SliderPrimitive.Root>
    );
  });
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

"use client";

import { forwardRef, type ComponentProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import ErrorIcon from "@/app/images/svg/error.svg";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const MotionSpan = dynamic(() => import("framer-motion").then((mod) => mod.motion.span));

interface InputProps extends ComponentProps<"input"> {
  error?: string;
}

const DEFAULT_CLASSES_INPUT =
  "outline-none bg-white shadow-input rounded-[28px] pl-[25px] pr-[61px] text-[13px] leading-[19.5px] font-normal text-grey h-[46px] placeholder:color-placeholder w-[99%]";
const DEFAULT_CLASSES =
  "relative bg-gradient-borders rounded-[28px] h-[50px] flex items-center justify-center gap-4 drop-shadow-input shadow-input w-full leading-none shrink-0";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, disabled, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };
    const IS_FOCUS = twMerge(isFocused && "bg-gradient-border-active");
    const IS_ERROR = twMerge(error && "bg-gradient-border-error");
    const IS_DISABLED = twMerge(disabled && "bg-gradient-border-disabled shadow-none");

    const IS_ERROR_INPUT = twMerge(error && "shadow-inputError");
    const IS_DISABLED_INPUT = twMerge(
      disabled && "bg-[rgba(161,198,204,0.5)] shadow-none text-mint-950 placeholder:text-mint-950",
    );

    return (
      <div className={twMerge(DEFAULT_CLASSES, IS_FOCUS, IS_ERROR, IS_DISABLED)}>
        <input
          ref={ref}
          className={twMerge(DEFAULT_CLASSES_INPUT, IS_ERROR_INPUT, IS_DISABLED_INPUT)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          {...props}
        />
        <AnimatePresence>
          {error && !disabled && (
            <MotionSpan
              className="absolute right-[20px] top-[13px] cursor-pointer"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <ErrorIcon />
            </MotionSpan>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

Input.displayName = Input.name;

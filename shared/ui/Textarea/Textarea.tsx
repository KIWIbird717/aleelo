"use client";

import { type ComponentProps, FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";

interface ITextareaProps extends ComponentProps<"textarea"> {
  className?: string;
}

export const Textarea: FC<ITextareaProps> = ({ className, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const DEFAULT_CLASSES =
    "relative bg-gradient-borders rounded-[28px] flex items-center justify-center gap-4 drop-shadow-input shadow-input w-full leading-none";
  const IS_FOCUS = twMerge(isFocused && "bg-gradient-border-active shadow-inputActive");

  const DEFAULT_CLASSES_TEXTAREA =
    "outline-none bg-white text-[13px] leading-[19.5px] font-normal text-grey  h-[calc(100%-4px)] placeholder:color-placeholder w-full";

  const DEFAULT_CLASSES_TEXTAREA_WRAPPER =
    "h-[calc(100%-4px)] w-[calc(100%-4px)] pl-[25px] pr-[18px] pt-[13px] pb-[19px] bg-white shadow-input rounded-[28px]";

  return (
    <div className={twMerge(DEFAULT_CLASSES, IS_FOCUS)}>
      <div className={DEFAULT_CLASSES_TEXTAREA_WRAPPER}>
        <textarea
          className={twMerge(DEFAULT_CLASSES_TEXTAREA, styles.textarea, className)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </div>
    </div>
  );
};

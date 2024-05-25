"use client";

import { useAnimate } from "framer-motion";
import type { ComponentProps, FC, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

// варианты стилей кнопок
const variants = {
  yellow: {
    className:
      "bg-button-gradient-yellow text-brown shadow-[inset_-8px_-8px_13px_0px_rgba(207,47,47,0.4),inset_2px_2px_8px_0px_rgba(241,170,19,1),0_8px_14px_-3px_rgba(33,78,86,0.3)]",
  },
  orange: {
    className:
      "bg-button-gradient-orange text-white shadow-[inset_-8px_-8px_13px_0px_rgba(203,107,57,1),inset_2px_2px_8px_0px_rgba(203,107,57,1),0_8px_14px_-3px_rgba(17,61,95,0.4)]",
  },
  snow: {
    className:
      "bg-white text-turquoise shadow-[inset_-8px_-8px_10px_0px_rgba(53,121,131,0.3),inset_2px_2px_8px_0px_rgba(86,145,163,0.5),0_8px_14px_-3px_rgba(17,76,95,0.3)]",
  },
  blue: {
    className:
      "bg-button-gradient-blue text-white shadow-[inset_-8px_-8px_13px_0px_rgba(43,63,103,0.5),inset_2px_2px_8px_0px_rgba(32,128,169,1),0_8px_14px_-3px_rgba(45,80,114,0.7)]",
  },
  deepBlue: {
    className:
      "bg-button-gradient-deep-blue text-white shadow-[inset_-8px_-8px_13px_0px_rgba(33,49,80,0.5),inset_2px_2px_8px_0px_rgba(39,95,146,1),0_8px_14px_-3px_rgba(45,80,114,0.7)]",
  },
  red: {
    className:
      "bg-button-gradient-red text-white shadow-[inset_-8px_-8px_13px_0px_rgba(191,26,47,1),inset_2px_2px_8px_0px_rgba(227,61,61,1),0_8px_14px_-3px_rgba(56,127,130,0.47)]",
  },
} as const;

// дефолтный вариант кнопки (если в пропсах не был указан параметр variant)
const DEFAULT_VARIANT =
  "bg-button-gradient-turquoise text-white shadow-[inset_-8px_-8px_13px_0px_rgba(26,80,122,1),inset_2px_2px_8px_0px_rgba(30,101,149,1),0_8px_14px_-3px_rgba(17,61,95,0.4)]";

// классы, которые используются всеми вариантами кнопок
const DEFAULT_CLASSES =
  "flex items-center justify-center h-[48px] w-[48px] rounded-full";

export const animDuration = 0.2; // sec скорость анимации кнопки
export const halfAnimDuration = animDuration / 2; // sec

type ButtonProps = {
  variant?: keyof typeof variants;
  className?: string;
  icon?: ReactNode
} & ComponentProps<"button">;

export const ButtonIcon: FC<ButtonProps> = ({ onClick, ...props }) => {
  const [scope, animate] = useAnimate();

  const variantClassName = props.variant
    ? variants[props.variant].className
    : DEFAULT_VARIANT;

  const disabledClassName = props.disabled
    && "bg-blue-500 shadow-none text-mint-900";

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    animate([
      [scope.current, { scale: 0.95, y: 5 }, { duration: halfAnimDuration }],
      [scope.current, { scale: 1, y: 0 }, { duration: halfAnimDuration }],
    ]);
    onClick && onClick(event);
  };
  return (
    <button
      {...props}
      ref={scope}
      onClick={handleClick}
      className={twMerge(
        variantClassName,
        DEFAULT_CLASSES,
        disabledClassName,
        props.className,
      )}
    >
      {props.icon}
    </button>
  );
};

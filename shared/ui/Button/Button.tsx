"use client";

import { cn } from "../../lib/utils/cn";
import { useAnimate } from "framer-motion";
import type { ComponentProps, FC, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export namespace ButtonNS {
  // варианты стилей кнопок
  export const variants = {
    yellow: {
      className:
        "bg-button-gradient-yellow text-brown shadow-[inset_-8px_-8px_13px_0px_rgba(207,47,47,0.4),inset_2px_2px_8px_0px_rgba(241,170,19,1),0_8px_14px_-3px_rgba(33,78,86,0.3)]",
      iconClassName: "text-shadow-yellow",
    },
    orange: {
      className:
        "bg-button-gradient-orange text-white shadow-[inset_-8px_-8px_13px_0px_rgba(203,107,57,1),inset_2px_2px_8px_0px_rgba(203,107,57,1),0_8px_14px_-3px_rgba(17,61,95,0.4)]",
      iconClassName: "text-shadow-orange",
    },
    green: {
      className:
        "bg-button-gradient-turquoise text-white shadow-[inset_2px_2px_8px_0px_rgba(39,101,149,1),0px_8px_14px_-3px_rgba(17,61,95,0.4),inset_-8px_-8px_13px_0px_rgba(26,80,122,1)]",
      iconClassName: "text-shadow-green",
    },
    snow: {
      className:
        "bg-white text-turquoise shadow-[inset_-8px_-8px_10px_0px_rgba(53,121,131,0.3),inset_2px_2px_8px_0px_rgba(86,145,163,0.5),0_8px_14px_-3px_rgba(17,76,95,0.3)]",
      iconClassName: "text-shadow-snow",
    },
    blue: {
      className:
        "bg-button-gradient-blue text-white shadow-[inset_-8px_-8px_13px_0px_rgba(43,63,103,0.5),inset_2px_2px_8px_0px_rgba(32,128,169,1),0_8px_14px_-3px_rgba(56,127,130,0.47)]",
      iconClassName: "text-shadow-blue",
    },
    red: {
      className:
        "bg-button-gradient-red text-white shadow-[inset_-8px_-8px_13px_0px_rgba(191,26,47,1),inset_2px_2px_8px_0px_rgba(227,61,61,1),0_8px_14px_-3px_rgba(56,127,130,0.47)]",
      iconClassName: "text-shadow-red",
    },
  } as const;

  // дефолтный вариант кнопки (если в пропсах не был указан параметр variant)
  export const DEFAULT_VARIANT = {
    className:
      "bg-button-gradient-turquoise text-white shadow-[inset_-8px_-8px_13px_0px_rgba(26,80,122,1),inset_2px_2px_8px_0px_rgba(30,101,149,1),0_8px_14px_-3px_rgba(17,61,95,0.4)]",
    iconClassName: "text-shadow-green",
  };
  // варианты размеров кнопок
  export const sizes: { [key: string]: { className: ClassNameValue } } = {
    large: {
      className: "h-[58px] !text-[20px] !font-semibold !leading-6 !px-[40px]",
    },
    medium: {
      className: "h-[48px] !text-[16px] !font-semibold !leading-[19px] !px-7",
    },
    small: {
      className: "h-[40px] !text-[15px] !font-semibold !leading-[18px] !px-[22px]",
    },
  } as const;

  // классы, которые используются всеми вариантами кнопок
  export const DEFAULT_CLASSES =
    "flex items-center justify-center gap-[10px] px-[40px] font-semibold text-[20px] leading-6 rounded-[30px] w-fit shrink-0";

  export const animDuration = 0.15; // sec скорость анимации кнопки
  export const halfAnimDuration = animDuration / 2; // sec
  export type Props = {
    children?: ReactNode | string;
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    className?: string;
    icon?: ReactNode;
  } & ComponentProps<"button">;
}

export const Button: FC<ButtonNS.Props> = ({ children, icon, onClick, ...props }) => {
  const [scope, animate] = useAnimate();

  const variantClassName = props.variant
    ? ButtonNS.variants[props.variant].className
    : ButtonNS.DEFAULT_VARIANT.className;

  const variantIcon = props.variant
    ? ButtonNS.variants[props.variant].iconClassName
    : ButtonNS.DEFAULT_VARIANT.iconClassName;

  const sizeClassName = props.size
    ? ButtonNS.sizes[props.size].className
    : ButtonNS.sizes.large.className;

  const disabledClassName = props.disabled && "bg-blue-500 shadow-none text-mint-900";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    animate([
      [scope.current, { scale: 0.95, y: 5 }, { duration: ButtonNS.halfAnimDuration }],
      [scope.current, { scale: 1, y: 0 }, { duration: ButtonNS.halfAnimDuration }],
      ["#anim", {}],
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
        sizeClassName,
        ButtonNS.DEFAULT_CLASSES,
        disabledClassName,
        props.className,
      )}
    >
      <span className={cn(variantIcon)}>{children}</span>
      {props.size !== "small" && icon && icon}
    </button>
  );
};

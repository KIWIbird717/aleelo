import Link from "next/link";
import type { FC, ReactNode } from "react";
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
      "bg-button-gradient-blue text-white shadow-[inset_-8px_-8px_13px_0px_rgba(43,63,103,0.5),inset_2px_2px_8px_0px_rgba(32,128,169,1),0_8px_14px_-3px_rgba(56,127,130,0.47)]",
  },
  red: {
    className:
      "bg-button-gradient-red text-white shadow-[inset_-8px_-8px_13px_0px_rgba(191,26,47,1),inset_2px_2px_8px_0px_rgba(227,61,61,1),0_8px_14px_-3px_rgba(56,127,130,0.47)]",
  },
} as const;

// дефолтный вариант кнопки (если в пропсах не был указан параметр variant)
const DEFAULT_VARIANT =
  "bg-button-gradient-turquoise text-white shadow-[inset_-8px_-8px_13px_0px_rgba(26,80,122,1),inset_2px_2px_8px_0px_rgba(30,101,149,1),0_8px_14px_-3px_rgba(17,61,95,0.4)]";

// варианты размеров кнопок
const sizes: { [key: string]: { className: ClassNameValue } } = {
  large: {
    className: "h-[58px]",
  },
  medium: {
    className: "h-[48px]",
  },
  small: {
    className: "h-[40px]",
  },
  icon: {
    className: "w-[48px] h-[48px]",
  },
} as const;

// классы, которые используются всеми вариантами кнопок
const DEFAULT_CLASSES =
  "px-[40px] flex items-center justify-center font-semibold text-[20px] leading-6 rounded-[30px] w-fit transition-all duration-150 active:scale-[0.9]";

export const animDuration = 0.2; // sec скорость анимации кнопки
export const halfAnimDuration = animDuration / 2; // sec

type ButtonProps = {
  children?: ReactNode | string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  href: string;
};

export const ButtonLink: FC<ButtonProps> = ({ children, href, ...props }) => {
  const variantClassName = props.variant ? variants[props.variant].className : DEFAULT_VARIANT;

  const sizeClassName = props.size ? sizes[props.size].className : sizes.large.className;

  if (props.variant === "snow" && props.size === "icon") {
    return (
      <div
        className={twMerge(
          "flex items-center justify-center rounded-full bg-gradient-border-edit",
          props.size && sizes[props.size].className,
        )}
      >
        <Link
          {...props}
          href={href}
          prefetch={true}
          className={twMerge(
            variantClassName,
            sizeClassName,
            DEFAULT_CLASSES,
            props.className,
            "h-[44px] w-[44px] p-0",
          )}
        >
          {children}
        </Link>
      </div>
    );
  } else {
    return (
      <Link
        {...props}
        href={href}
        prefetch={true}
        className={twMerge(variantClassName, sizeClassName, DEFAULT_CLASSES, props.className)}
      >
        {children}
      </Link>
    );
  }
};

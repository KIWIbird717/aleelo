import { CSSProperties, FC, ReactNode } from "react";
import { cn } from "../lib/utils/cn";
import GradiendBg from "@/public/images/backgrounds/gradient.jpg";
import Image from "next/image";

const variants = {
  gradient: "bg-gradient-to-b to-[#67B6B3]/70 from-[#264F58]/70 w-screen h-screen",
  vignette:
    "after:content-[''] after:rounded-full after:absolute after:top-[550px] after:left-[-480px] after:w-[700px] after:h-[700px] after:bg-[rgba(56,118,130,1)]/50 after:blur-[70px] before:content-[''] before:w-[650px] before:h-[650px] before:bg-[rgba(56,118,130,1)]/50 before:absolute before:blur-[70px] before:rounded-full before:top-[-500px] before:left-[200px]",
};

type Props = {
  style?: CSSProperties;
  className?: string;
  /**
   * акладывает на bg
   * приложения один из эффектов из {@link variants}
   */
  backgroundEffect?: keyof typeof variants;
  children?: ReactNode;
};

/**
 * Обертка для страницы, чтобы предотвратить закрытие окна webapp
 * Подробнее в README.md
 *
 * Может принимать проп backgroundEffect, который накладывает на bg
 * приложения один из эффектов из {@link variants}
 */
export const View: FC<Props> = (props) => {
  return (
    <main
      className={cn(
        `relative h-[calc(100vh+1px)]`,
        props.className,
        props.backgroundEffect && variants[props.backgroundEffect],
      )}
    >
      {props.children}
    </main>
  );
};

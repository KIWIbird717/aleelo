import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";

type TypographyVariant = "title" | "box";

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p";

export type TypographyProps<Tag extends TypographyTag> = ComponentProps<Tag> & {
  variant?: TypographyVariant;
  tag?: TypographyTag;
  children: ReactNode;
};

export const Typography = <Tag extends TypographyTag = "div">({
  variant = "box",
  tag = "div",
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  const DEFAULT_CLASSES = twMerge("text-mint-900");

  return (
    <Component className={twMerge(variant, className, DEFAULT_CLASSES)} {...props}>
      {children}
    </Component>
  );
};

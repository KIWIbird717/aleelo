import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children?: ReactNode;
};
export const View: FC<Props> = (props) => {
  return <main className={twMerge("h-[calc(100vh+1px)]", props.className)}>{props.children}</main>;
};

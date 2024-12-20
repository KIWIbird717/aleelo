"use client";

import InitLoaderSvg from "@/public/images/init-loader/init-loader.svg";
import { Typography } from "../../shared/ui/Typography/Typography";
import styles from "./styles.module.scss";
import { cn } from "../../shared/lib/utils/cn";

export const InitLoader = () => {
  return (
    <section
      className={cn(
        "flex h-full w-full flex-col items-center justify-between py-6",
        styles["animate-slideIn"],
      )}
    >
      <div />
      <InitLoaderSvg />
      <Typography tag="h3" variant="title">
        My Soul Games
      </Typography>
    </section>
  );
};

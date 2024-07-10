"use client";

import InitLoaderSvg from "@/public/images/init-loader/init-loader.svg";
import { Typography } from "../../shared/ui/Typography/Typography";
import styles from "./styles.module.scss";
import { cn } from "../../shared/lib/utils/cn";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { useEffect } from "react";

export const InitLoader = () => {
  const logger = new Logger("InitLoader");
  const telegram = useTelegram();

  useEffect(() => {
    logger.debug(telegram);
  });

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

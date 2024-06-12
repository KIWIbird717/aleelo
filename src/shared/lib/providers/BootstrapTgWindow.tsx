"use client";

import React, { FC, ReactNode, useEffect } from "react";
import { useTelegram } from "../hooks/useTelegram";

type Props = {
  children?: ReactNode;
};

/**
 * Конфигурация окна telegram webapp при старте приложения
 */
export const BootstrapTgWindow: FC<Props> = (props) => {
  const telegram = useTelegram();

  telegram?.expand();
  telegram?.setHeaderColor("#B9CDCF");
  telegram?.setBackgroundColor("#B9CDCF");

  return <>{props.children}</>;
};

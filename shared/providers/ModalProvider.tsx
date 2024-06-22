"use client"

import { FC, useEffect, useState } from "react";
import { ModalElements } from "@/widgets/ModalElements";

interface IModalProviderProps {
}

export const ModalProvider: FC<IModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ModalElements />
    </>
  );
};
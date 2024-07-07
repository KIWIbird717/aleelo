"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/Typography/Typography";
import { ModalContent } from "@/entities/ModalContent";
import { useModal } from "@/shared/lib/hooks/useModal";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { Icon } from "@/shared/ui/Icon";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IModalElementsProps {}

export const ModalElements: FC<IModalElementsProps> = () => {
  const { onClose, modalData } = useModal();
  const { isOpen, data, type } = modalData;

  const element = data?.element;

  const isModalOpen = isOpen && type === "elements";

  const icon = element?.typeIcon!

  return (
    <AnimatePresence mode={"wait"}>
      {isModalOpen && (
        <MotionDiv
          className={twMerge(
            // нужен для того, чтобы не отображался navbar при открытом modal window
            // "flex fixed top-0 left-0 justify-center items-center w-full h-full z-[35] bg-gradient-green pt-[54px] pb-4 px-3",
            "fixed left-0 top-0 z-[35] flex h-full w-full items-center justify-center bg-gradient-green px-4 pb-4 pt-[54px]",
          )}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContent onClose={onClose}>
            <div className={"relative flex h-[calc(100%-74px)] w-full flex-col gap-[33px]"}>
              <div className={"flex w-full flex-col gap-4"}>
                <Typography
                  tag={"h2"}
                  className={"text-center text-[21px] font-semibold leading-[30px] text-mint-900"}
                >
                  {element?.heading}
                </Typography>
                <div className={"flex w-full justify-center"}>
                  <Icon variant={icon}
                        size={"large"}
                  />
                </div>
              </div>
              <div className={"w-full overflow-y-scroll px-3 pb-[46px]"}>
                <Typography
                  tag={"p"}
                  className={"text-[13px] font-normal leading-5 text-mint !text-shadow-light"}
                >
                  {element?.description}
                </Typography>
              </div>
              <div className={"absolute bottom-0 h-[46px] w-full bg-gradient-white"} />
            </div>
          </ModalContent>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

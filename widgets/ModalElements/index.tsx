"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/Typography/Typography";
import { cardElementsAssets } from "@/widgets/ModalElements/constants/assets";
import { ModalContent } from "@/entities/ModalContent";
import { useModal } from "@/shared/lib/hooks/useModal";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IModalElementsProps {}

export const ModalElements: FC<IModalElementsProps> = () => {
  const { onClose, modalData } = useModal();
  const { isOpen, data, type } = modalData;

  const element = data?.element;

  const isModalOpen = isOpen && type === "elements";

  const icon = cardElementsAssets[element?.typeIcon!]?.icon;

  return (
    <AnimatePresence mode={"wait"}>
      {isModalOpen && (
        <MotionDiv
          className={twMerge(
            "flex fixed top-0 left-0 justify-center items-center w-full h-full z-[35] bg-gradient-green pt-[54px] pb-4 px-4",
          )}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContent onClose={onClose}>
            <div className={"relative w-full h-[calc(100%-74px)] flex flex-col gap-[33px]"}>
              <div className={"w-full flex flex-col gap-4"}>
                <Typography
                  tag={"h2"}
                  className={"font-semibold text-[21px] leading-[30px] text-center text-mint-900"}
                >
                  {element?.heading}
                </Typography>
                <div className={"flex justify-center w-full"}>
                  {icon}
                </div>
              </div>
              <div className={"w-full px-3 overflow-y-scroll pb-[46px]"}>
                <Typography
                  tag={"p"}
                  className={"font-normal text-[13px] leading-5 text-mint !text-shadow-light"}
                >
                  {element?.description}
                </Typography>
              </div>
              <div className={"absolute bottom-0 w-full h-[46px] bg-gradient-white"} />
            </div>
          </ModalContent>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};
"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/Typography/Typography";
import { ModalContent } from "@/entities/ModalContent";
import { useModal } from "@/shared/lib/hooks/useModal";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IModalMoodStatusProps {}

export const ModalMoodStatus: FC<IModalMoodStatusProps> = () => {
  const { onClose, modalData } = useModal();
  const { isOpen, data, type } = modalData;

  const element = data?.element;

  const isModalOpen = isOpen && type === "moodStatus";

  return (
    <AnimatePresence mode={"wait"}>
      {isModalOpen && (
        <MotionDiv
          className={twMerge(
            // нужен для того, чтобы не отображался navbar при открытом modal window
            // "flex fixed top-0 left-0 justify-center items-center w-full h-full z-[35] bg-gradient-green pt-[54px] pb-4 px-3",
            "fixed left-0 top-0 z-[35] flex h-full w-full items-center justify-center bg-gradient-green px-4",
          )}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContent onClose={onClose} className={"h-auto gap-0 px-10 pb-8"}>
            <Typography tag={"h2"} className={"text-center text-mint-900"}>
              Статус настроения
            </Typography>

            <div className={"mb-[30px] mt-[26px] flex w-full justify-center"}>
              <div
                className={
                  "flex h-[26px] w-[147px] items-center justify-center rounded-[20px] bg-green-800"
                }
              >
                <Typography
                  tag={"p"}
                  className={"text-[13px] font-normal leading-5 text-white !text-shadow-satisfied"}
                >
                  {data?.text}
                </Typography>
              </div>
            </div>

            <Typography
              tag={"p"}
              className={
                "mb-[33px] px-5 text-center text-[15px] font-normal leading-[21px] text-mint !text-shadow-light"
              }
            >
              Настроение зависит от количества ходов Насколько полезным было пребывание на этой
              клетке? Еще одна строка
            </Typography>
          </ModalContent>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

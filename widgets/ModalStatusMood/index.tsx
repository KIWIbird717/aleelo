"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/Typography/Typography";
import { ModalContent } from "@/entities/ModalContent";
import { useModal } from "@/shared/lib/hooks/useModal";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IModalMoodStatusProps {
}

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
          <ModalContent onClose={onClose}
                        className={"pb-8 h-auto gap-0 px-10"}
          >
            <Typography tag={"h2"}
                        className={"text-center text-mint-900"}
            >
              Статус настроения
            </Typography>

            <div className={"w-full flex justify-center mt-[26px] mb-[30px]"}>
              <div
                className={"flex items-center justify-center w-[147px] h-[26px] rounded-[20px] bg-green-800"}
              >

                <Typography tag={"p"}
                            className={"text-[13px] font-normal leading-5 text-white !text-shadow-satisfied"}
                >
                  {data?.text}
                </Typography>
              </div>
            </div>

            <Typography tag={"p"}
                        className={"text-center px-5 mb-[33px] font-normal text-[15px] leading-[21px] text-mint !text-shadow-light"}
            >
              Настроение зависит от количества ходов Насколько полезным было пребывание на этой клетке? Еще одна строка
            </Typography>
          </ModalContent>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
import { FC, ReactNode } from "react";
import { Button } from "@/shared/ui/Button/Button";
import CloseIcon from "@/public/images/svg/close.svg";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IModalContentProps {
  onClose: () => void
  children: ReactNode
}

export const ModalContent: FC<IModalContentProps> = (
  {onClose, children}
) => {
  return (
    <MotionDiv
      className={"relative w-full flex flex-col gap-[26px] px-5 pb-8 pt-[46px] rounded-3xl bg-white shadow-modalWindow"}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        className={"bg-none absolute top-4 right-4 shadow-none !p-0 w-[24px] h-[24px]"}
        size={"small"}
        onClick={onClose}
      >
        <CloseIcon />
      </Button>
      {children}
      <div className={"w-full px-[30px]"}>
        <Button variant={"green"} className={"w-full"} onClick={onClose} size={"medium"}>
          Ясно
        </Button>
      </div>
    </MotionDiv>
  );
};
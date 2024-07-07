import { FC, ReactNode } from "react";
import { Button } from "@/shared/ui/Button/Button";
import CloseIcon from "@/public/images/svg/close.svg";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IModalContentProps {
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const ModalContent: FC<IModalContentProps> = ({ onClose, children, className }) => {
  return (
    <MotionDiv
      className={twMerge(
        "relative flex h-full w-full flex-col gap-[26px] rounded-3xl bg-white px-5 pb-8 pt-[46px] shadow-modalWindow",
        className,
      )
      }
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        className={"absolute right-4 top-4 h-[24px] w-[24px] bg-none !p-0 shadow-none"}
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

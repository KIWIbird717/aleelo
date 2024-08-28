import React, { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import LeftArrow from "@/public/images/svg/signin/left-arrow.svg";
import Dialog from "@/public/images/svg/signin/dialog.svg";
import { cn } from "@/shared/lib/utils/cn";
import Image from "next/image";
import dynamic from "next/dynamic";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

type EftOnboardingMessageProps = {
  text?: string;
  image?: string | StaticImport;
  // стили для картинки
  imageClassName?: string;
  onClick?: () => void;
};

export const EftOnboardingMessage: FC<EftOnboardingMessageProps> = (props) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20, scaleY: 0.9 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      className="relative z-50 flex h-screen min-h-[284px] w-full items-end"
      onClick={props.onClick}
    >
      <div className="flex h-[244px] max-h-[244px] w-[60%] items-start px-[16px]">
        <MessageBlock text={props.text} />
      </div>

      <div className={cn("absolute -right-[23px] z-[-1]")}>
        {props.image && (
          <Image
            src={props.image}
            alt={`EftOnboardingMessage ${props.text}}`}
            className={cn("h-[321px] w-[315px] object-contain")}
          />
        )}
      </div>

      <div className="absolute bottom-[-10%] right-[-20%] z-[-2] h-[300px] w-[350px] rounded-full bg-mint-950 blur-[50px]" />
    </MotionDiv>
  );
};

type MessageBlockPropsType = {
  text?: string;
};
const MessageBlock: FC<MessageBlockPropsType> = (props) => {
  return (
    <div className="relative flex w-full items-center justify-start rounded-[20px] rounded-tr-none bg-mint-700 px-[16px] py-2.5 pl-4 pr-1.5 shadow-dialogOnBoarding">
      <Typography
        tag={"div"}
        className={"text-[13px] font-normal leading-5 !text-mint !text-shadow-light"}
      >
        {props.text}
      </Typography>

      <div className="h-full">
        <LeftArrow />
      </div>

      <div className={"absolute -right-[11px] top-0"}>
        <Dialog />
      </div>
    </div>
  );
};

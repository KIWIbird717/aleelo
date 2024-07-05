import React, { FC } from "react";
import { Typography } from "@/shared/ui/Typography/Typography";
import LeftArrow from "@/public/images/svg/signin/left-arrow.svg";
import Dialog from "@/public/images/svg/signin/dialog.svg";
import { cn } from "@/shared/lib/utils/cn";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

type EftOnboardingMessageProps = {
  text?: string;
  image?: string | StaticImport;
  // стили для картинки
  imageClassName?: string;
} & ({ isLinkButton: false; onClick: () => void } | { isLinkButton: true; href: Url });

export const EftOnboardingMessage: FC<EftOnboardingMessageProps> = (props) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20, scaleY: 0.9 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      className={"relative z-50 flex h-full w-full justify-end"}
    >
      <div className="absolute right-[146px] top-[131px] flex max-w-[57%] items-center rounded-[20px] rounded-tr-none bg-mint-700 py-2.5 pl-4 pr-1.5 shadow-dialogOnBoarding">
        <Typography
          tag={"div"}
          className={"text-[13px] font-normal leading-5 !text-mint !text-shadow-light"}
        >
          {props.text}
        </Typography>

        {props.isLinkButton ? (
          <Link href={props.href}>
            <LeftArrow />
          </Link>
        ) : (
          <button className="h-full" onClick={props.onClick}>
            <LeftArrow />
          </button>
        )}

        <div className={"absolute -right-[11px] top-0"}>
          <Dialog />
        </div>
      </div>
      <div
        className={cn(
          "absolute -right-[23px] z-[-1]",
          // item.id !== 0 && "-right-[10px] top-[26px]",
        )}
      >
        {props.image && (
          <Image
            src={props.image}
            alt={`EftOnboardingMessage ${props.text}}`}
            // className={cn("h-[321px] w-[315px]", item.id !== 0 && "h-[331px] w-[189px]")}
            className={cn("h-[321px] w-[315px] object-contain")}
          />
        )}
      </div>
    </MotionDiv>
  );
};

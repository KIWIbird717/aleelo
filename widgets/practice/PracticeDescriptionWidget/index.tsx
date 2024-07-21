"use client";

import { Typography } from "@/shared/ui/Typography/Typography";
import { PracticeDescription } from "@/widgets/PracticeDescription";
import { AudioPlayer, IAudioPlayerProps } from "@/widgets/AudioPlayer";
import { Icons } from "@/entities/Icons";
import { twMerge } from "tailwind-merge";
import { AnimatePresence } from "framer-motion";
import { items } from "@/widgets/ModalSheet/entities/CellInfo";
import { FC } from "react";
import dynamic from "next/dynamic";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { useDescriptionShow } from "./shared/hooks/useDescriptionShow";
import { useLocale } from "next-intl";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

type PracticeDescriptionWidgetProps = {
  isShowText: ReturnType<typeof useDescriptionShow>["isShowText"];
  onShow: ReturnType<typeof useDescriptionShow>["onShow"];
  svgHeight: ReturnType<typeof useSizes>["svgHeight"];
  padding: ReturnType<typeof useSizes>["padding"];
  width: ReturnType<typeof useSizes>["width"];
} & Pick<IAudioPlayerProps, "onPlayPause">;

export const PracticeDescriptionWidget: FC<PracticeDescriptionWidgetProps> = (props) => {
  const locale = useLocale();

  const link = `/${locale}/onboarding/practice`
  return (
    <>
      <AnimatePresence initial={true} mode={"sync"}>
        <MotionDiv
          className={twMerge("flex flex-col", props.isShowText && "justify-between")}
          style={{ height: props.isShowText ? `calc(100% - ${props.svgHeight}px)` : "" }}
        >
          <div className={"flex flex-col gap-[13px] px-8 pt-[35px]"}>
            <Typography
              tag={"h1"}
              className={"text-center text-gold !text-shadow-gold"}
              variant={"title"}
            >
              #1. Рождение
            </Typography>

            <PracticeDescription onShow={props.onShow} isShowText={props.isShowText} />
          </div>

          {props.isShowText && (
            <Icons className={"justify-between"} padding={props.padding} items={items} />
          )}
        </MotionDiv>
      </AnimatePresence>

      <AnimatePresence>
        {!props.isShowText && (
          <AudioPlayer
            width={props.width}
            padding={props.padding}
            onPlayPause={props.onPlayPause}
            link={link}
          />
        )}
      </AnimatePresence>
    </>
  );
};

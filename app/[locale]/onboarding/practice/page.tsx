"use client";

import { Typography } from "@/shared/ui/Typography/Typography";
import { Navbar } from "@/entities/Navbar";
import { View } from "@/shared/layout/View";
import useRequest from "@/shared/lib/hooks/useRequest";
import { mediaApi } from "@/shared/lib/axios";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { PracticeDescription } from "@/widgets/PracticeDescription";
import { AudioPlayer } from "@/widgets/AudioPlayer";
import { useState } from "react";
import { Icons } from "@/entities/Icons";
import { twMerge } from "tailwind-merge";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { items } from "@/widgets/ModalSheet/entities/CellInfo";
import { NextPage } from "next";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

type OnboardingPracticePropsType = {};

const OnboardingPractice: NextPage<OnboardingPracticePropsType> = () => {
  const logger = new Logger("OnboardingPractice");
  const [isShowText, setIsShowText] = useState(false);

  const { width, svgGRef, svgRef, padding, svgHeight } = useSizes();

  useRequest(async () => {
    try {
      const { data } = await mediaApi.get(`/audio/cell-descriptions/en/1.mp3`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      logger.error(error);
    }
  }, []);

  const onShow = () => {
    if (!isShowText) {
      setIsShowText(true);
    }
  };

  const onHide = () => {
    if (isShowText) {
      setIsShowText(false);
    }
  };

  return (
    <View className={"relative flex flex-col"} backgroundEffect={"gradient"}>
      <AnimatePresence initial={true} mode={"sync"}>
        <MotionDiv
          className={twMerge("flex flex-col", isShowText && "justify-between")}
          style={{ height: isShowText ? `calc(100% - ${svgHeight}px)` : "" }}
        >
          <div className={"flex flex-col gap-[13px] px-8 pt-[35px]"}>
            <Typography
              tag={"h1"}
              className={"text-center text-gold !text-shadow-gold"}
              variant={"title"}
            >
              #1. Рождение
            </Typography>

            <PracticeDescription onShow={onShow} isShowText={isShowText} />
          </div>

          {isShowText && <Icons className={"justify-between"} padding={padding} items={items} />}
        </MotionDiv>
      </AnimatePresence>

      <AnimatePresence>
        {!isShowText && <AudioPlayer width={width} padding={padding} />}
      </AnimatePresence>

      <Navbar svgRef={svgRef} svgGRef={svgGRef} isBack={isShowText} onHide={onHide} />
    </View>
  );
};

export default OnboardingPractice;

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
import { PracticeOnboardingEftSpeeches } from "@/entities/onboarding/PracticeOnboardingEftSpeeches";
import { useStages } from "@/entities/onboarding/PracticeOnboardingEftSpeeches/shared/hooks/useStages";
import { PracticeDescriptionWidget } from "@/widgets/practice/PracticeDescriptionWidget";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

type OnboardingPracticePropsType = {};

export const useDescriptionShow = () => {
  const [isShowText, setIsShowText] = useState(false);
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

  return { isShowText, onShow, onHide };
};

const OnboardingPractice: NextPage<OnboardingPracticePropsType> = () => {
  const logger = new Logger("OnboardingPractice");
  const { stage, next } = useStages();
  const { isShowText, onShow, onHide } = useDescriptionShow();
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

  const handleDescriptionShow = () => {
    onShow();
    next();
  };

  const handleDescriptionHide = () => {
    onHide();
    next();
  };

  return (
    <View className={"relative flex flex-col"} backgroundEffect={"gradient"}>
      <PracticeOnboardingEftSpeeches stage={stage} next={next} className="fixed z-[35]" />

      <PracticeDescriptionWidget
        isShowText={isShowText}
        onShow={handleDescriptionShow}
        svgHeight={svgHeight}
        padding={padding}
        width={width}
      />

      <Navbar
        svgRef={svgRef}
        svgGRef={svgGRef}
        isBack={isShowText}
        onHide={handleDescriptionHide}
      />
    </View>
  );
};

export default OnboardingPractice;

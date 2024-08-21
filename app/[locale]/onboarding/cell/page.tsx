"use client";

import { Navbar } from "@/widgets/Navbar";
import { View } from "@/shared/layout/View";
import useRequest from "@/shared/lib/hooks/useRequest";
import { mediaApi } from "@/shared/lib/axios";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { NextPage } from "next";
import { PracticeOnboardingEftSpeeches } from "@/entities/onboarding/PracticeOnboardingEftSpeeches";
import { useStages } from "@/entities/onboarding/PracticeOnboardingEftSpeeches/shared/hooks/useStages";
import { PracticeDescriptionWidget } from "@/widgets/practice/PracticeDescriptionWidget";
import { useDescriptionShow } from "@/widgets/practice/PracticeDescriptionWidget/shared/hooks/useDescriptionShow";
import { CenterButtonIconTypes } from "@/shared/lib/hooks/useNavbar";

type OnboardingPracticePropsType = {};

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
    next(2);
  };

  const handleDescriptionHide = () => {
    onHide();
    next(4);
  };

  console.log({ isShowText });

  return (
    <View className={"relative flex flex-col"} backgroundEffect={"gradient"}>
      <PracticeOnboardingEftSpeeches stage={stage} next={next} className="fixed z-[35]" />

      <PracticeDescriptionWidget
        isShowText={isShowText}
        onShow={handleDescriptionShow}
        svgHeight={svgHeight}
        padding={padding}
        width={width}
        onPlayPause={() => next(6)}
      />

      <Navbar
        navBarSettings={{
          0: { isActive: false },
          1: { isActive: false },
          2: {
            icon: CenterButtonIconTypes.ReportUnActive,
            isActive: false,
          },
          3: { isActive: false },
          4: { isActive: false },
        }}
        svgRef={svgRef}
        svgGRef={svgGRef}
        isBack={isShowText}
        onHide={handleDescriptionHide}
      />
    </View>
  );
};

export default OnboardingPractice;

"use client";

import { NextPage } from "next";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Navbar } from "@/entities/Navbar";
import { View } from "@/shared/layout/View";
import useRequest from "@/shared/lib/hooks/useRequest";
import { mediaApi } from "@/shared/lib/axios";
import { useLocale } from "next-intl";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { PracticeDescription } from "@/widgets/PracticeDescription";
import { AudioPlayer } from "@/widgets/AudioPlayer";
import { useState } from "react";
import { Icons } from "@/entities/Icons";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

interface IPracticePageProps {
}

const PracticePage: NextPage<IPracticePageProps> = () => {
  const locale = useLocale();
  const [isShowText, setIsShowText] = useState(false);

  const { width, svgGRef, svgRef, padding, svgHeight } = useSizes();

  useRequest(async () => {
    const { data } = await mediaApi.get(`/audio/cell-descriptions/en/1.mp3`);
    console.log({ data });
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
      <AnimatePresence initial={true}
                       mode={"sync"}
      >
        <motion.div
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

          {isShowText && <Icons className={"justify-between"} padding={padding} />}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {!isShowText && (
          <AudioPlayer width={width} padding={padding} />
        )}
      </AnimatePresence>


      <Navbar width={width} svgRef={svgRef} svgGRef={svgGRef} isBack={isShowText} onHide={onHide} />
    </View>
  );
};
export default PracticePage;

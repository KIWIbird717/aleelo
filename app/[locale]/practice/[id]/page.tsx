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

interface IPracticePageProps {
}

const PracticePage: NextPage<IPracticePageProps> = () => {
  const locale = useLocale();

  const {
    width,
    svgGRef,
    svgRef,
    padding,
  } = useSizes();

  useRequest(async () => {
    const { data } = await mediaApi.get(`/audio/cell-descriptions/en/1.mp3`);
    console.log({ data });
  }, []);

  return (
    <View className={"flex flex-col relative"} backgroundEffect={"gradient"}>
      <div className={"px-8 pt-[35px] flex flex-col gap-[13px]"}>
        <Typography tag={"h1"}
                    className={"text-center text-gold !text-shadow-gold"}
                    variant={"title"}
        >
          #1. Рождение
        </Typography>

        <PracticeDescription />
      </div>

      <AudioPlayer width={width}
                   padding={padding}
      />

      <Navbar width={width} svgRef={svgRef} svgGRef={svgGRef} />
    </View>
  );
};
export default PracticePage;
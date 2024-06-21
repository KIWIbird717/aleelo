import { FC } from "react";
import { Player } from "@/widgets/AudioPlayer/entities/Player";
import { ShareAndPracticeBtns } from "@/widgets/AudioPlayer/entities/ShareAndPracticeBtns";
import Image from "next/image";
import ImagePractice from "@/public/images/backgrounds/img-practice.png";
import dynamic from "next/dynamic";
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));


interface IAudioPlayerProps {
  width: number;
  padding: number;
}

export const AudioPlayer: FC<IAudioPlayerProps> = (
  { width, padding },
) => {

  return (
    <MotionDiv
      className={"flex h-[calc(50%+72px)] justify-center w-full fixed bottom-[8px] pt-[72px] overflow-hidden"}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.2 }}
      key="audioPlayer"
    >
      <Player width={width} />

      <ShareAndPracticeBtns padding={padding} />
      {/*<Image className={"w-[calc(100%-128px)] h-full object-cover rounded-t-full"}*/}
      <Image className={"w-[57.34vw] h-[43.71vh] object-cover rounded-t-full"}
             src={ImagePractice}
             alt={"img-practice"}
      />
    </MotionDiv>
  );
};
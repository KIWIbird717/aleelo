import { FC } from "react";
import { IPlayerProps, Player } from "@/widgets/AudioPlayer/entities/Player";
import { ShareAndPracticeBtns } from "@/widgets/AudioPlayer/entities/ShareAndPracticeBtns";
import Image from "next/image";
import ImagePractice from "@/public/images/backgrounds/img-practice.png";
import dynamic from "next/dynamic";
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

export interface IAudioPlayerProps extends IPlayerProps {
  padding: number;
}

export const AudioPlayer: FC<IAudioPlayerProps> = (props) => {
  return (
    <MotionDiv
      className={
        "fixed bottom-[8px] flex h-[calc(50%+72px)] w-full justify-center overflow-hidden pt-[72px]"
      }
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.2 }}
      key="audioPlayer"
    >
      <Player width={props.width} onPlayPause={props.onPlayPause} />

      <ShareAndPracticeBtns padding={props.padding} />
      <div className="relative h-[43.71vh] w-[57.34vw] overflow-hidden rounded-t-full object-cover after:absolute after:top-0 after:block after:h-[43.71vh] after:w-[57.34vw] after:rounded-t-full after:shadow-[inset_0px_4px_24px_rgba(0,0,0,0.7)] after:content-['']">
        <Image className="z-[-1]" src={ImagePractice} alt={"img-practice"} />
      </div>
    </MotionDiv>
  );
};

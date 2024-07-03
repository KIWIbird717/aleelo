import { FC } from "react";
import PauseIcon from "@/public/images/svg/audio-player/pause.svg";
import PlayIcon from "@/public/images/svg/audio-player/play.svg";

interface IPlayAndPauseProps {
  togglePlayPause: () => void;
  isPlaying: boolean;
}

export const PlayAndPause: FC<IPlayAndPauseProps> = ({ togglePlayPause, isPlaying }) => {
  return (
    <button
      onClick={togglePlayPause}
      className="absolute flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white bg-gradient-border-edit shadow-lg"
    >
      <div
        className={
          "flex h-[calc(100%-6px)] w-[calc(100%-6px)] items-center justify-center rounded-full bg-white shadow-audioBtn"
        }
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </div>
    </button>
  );
};

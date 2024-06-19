import { FC } from "react";
import PauseIcon from "@/public/images/svg/audio-player/pause.svg";
import PlayIcon from "@/public/images/svg/audio-player/play.svg";

interface IPlayAndPauseProps {
  togglePlayPause: () => void;
  isPlaying: boolean;
}

export const PlayAndPause: FC<IPlayAndPauseProps> = (
  { togglePlayPause, isPlaying },
) => {
  return (
    <button
      onClick={togglePlayPause}
      className="absolute flex items-center justify-center w-[96px] h-[96px] bg-white rounded-full shadow-lg bg-gradient-border-edit"
    >
      <div
        className={"flex items-center justify-center rounded-full w-[calc(100%-6px)] h-[calc(100%-6px)] bg-white shadow-audioBtn"}>
        {isPlaying ? (
          <PauseIcon />
        ) : (
          <PlayIcon />
        )}
      </div>
    </button>
  );
};
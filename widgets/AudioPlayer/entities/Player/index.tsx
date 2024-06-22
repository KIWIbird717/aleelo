import { FC, useEffect, useRef, useState } from "react";
import { ISettingsPointer, RoundSlider } from "mz-react-round-slider";
import PointerIcon from "@/public/images/svg/audio-player/pointer.svg";
import { PlayAndPause } from "@/widgets/AudioPlayer/entities/PlayAndPause";

interface IPlayerProps {
  width: number;
}

export const Player: FC<IPlayerProps> = ({ width }) => {
  const [pointers, setPointers] = useState<ISettingsPointer[]>([{ value: 0 }]);
  const [pathRadius, setPathRadius] = useState(135);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSliderChange = (newPointers: ISettingsPointer[]): void => {
    const newValue = newPointers[0].value as number;
    setPointers([{ value: newValue }]);
    if (audioRef.current) {
      audioRef.current.currentTime = (audioRef.current.duration * newValue) / 100;
    }
  };

  const togglePlayPause = (): void => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleTimeUpdate = (): void => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setPointers([{ value: (currentTime / duration) * 100 }]);
    }
  };

  const calculateRadius = (width: number) => {
    // Применяем линейную интерполяцию для расчета радиуса
    const x1 = 344,
      y1 = 135;
    const x2 = 430,
      y2 = 160;
    const slope = (y2 - y1) / (x2 - x1);
    return y1 + slope * (width - x1);
  };

  useEffect(() => {
    setPathRadius(calculateRadius(width));
  }, [width]);

  return (
    <div className="absolute -top-3 z-[3] flex items-center justify-center">
      <RoundSlider
        pathRadius={pathRadius}
        pathStartAngle={180}
        pathEndAngle={0}
        pointers={pointers}
        onChange={handleSliderChange}
        connectionBgColor={"#FAB51E"}
        pathBgColor={"rgba(161, 198, 204, 0.50)"}
        pathThickness={12}
        pointerRadius={50}
        pointerSVG={<PointerIcon />}
      />

      <PlayAndPause togglePlayPause={togglePlayPause} isPlaying={isPlaying} />
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} src="/audio/1.mp3" />
    </div>
  );
};

import { cn } from "@/shared/lib/utils/cn";
import style from "./style.module.scss";

export const ManWomanOverlay = () => {
  return (
    <div className={cn("absolute left-0 top-0 z-[2] h-full w-full", style["man-and-woman"])} />
  );
};

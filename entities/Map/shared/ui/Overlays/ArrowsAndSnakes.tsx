import { cn } from "@/shared/lib/utils/cn";
import style from "./style.module.scss";

export const ArrowsAndSnakes = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-[2] flex h-full w-full items-center justify-center">
      <div className={style["arrows-and-snakes"]} />
    </div>
  );
};

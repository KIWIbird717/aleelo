import { FC } from "react";
import SpiralIcon from "@/public/images/svg/icons/spiral.svg";
import ShareIcon from "@/public/images/svg/icons/share.svg";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";

interface IShareAndPracticeBtnsProps {
  padding: number;
}

export const ShareAndPracticeBtns: FC<IShareAndPracticeBtnsProps> = ({ padding }) => {
  return (
    <div className={`absolute bottom-[20.1324vh] w-full flex justify-between`}
         style={{ padding: `0 ${padding}px` }}
    >
      <ButtonIcon variant={"icon"}>
        <SpiralIcon />
      </ButtonIcon>

      <ButtonIcon variant={"icon"}>
        <ShareIcon />
      </ButtonIcon>
    </div>
  );
};
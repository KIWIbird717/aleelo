import { FC } from "react";
import SpiralIcon from "@/public/images/svg/icons/spiral.svg";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";
import { useRouter } from "next/navigation";

interface IShareAndPracticeBtnsProps {
  padding: number;
  link: string
}

export const ShareAndPracticeBtns: FC<IShareAndPracticeBtnsProps> = ({ padding, link }) => {
  const { push } = useRouter();
  const redirect = () => push(link);

  return (
    <div
      className={`absolute bottom-[20.1324vh] z-[4] flex w-full justify-between`}
      style={{ padding: `0 ${padding}px` }}
    >
      <ButtonIcon variant={"icon"} onClick={redirect}>
        <SpiralIcon />
      </ButtonIcon>
    </div>
  );
};

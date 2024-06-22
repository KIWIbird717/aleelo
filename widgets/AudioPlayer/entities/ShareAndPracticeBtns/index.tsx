import { FC, useEffect } from "react";
import SpiralIcon from "@/public/images/svg/icons/spiral.svg";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

interface IShareAndPracticeBtnsProps {
  padding: number;
}

export const ShareAndPracticeBtns: FC<IShareAndPracticeBtnsProps> = ({ padding }) => {
  const locale = useLocale();
  const { push } = useRouter();
  const redirect = () => push(`/${locale}/chat`);

  return (
    <div
      className={`absolute bottom-[20.1324vh] flex w-full justify-between`}
      style={{ padding: `0 ${padding}px` }}
    >
      <ButtonIcon variant={"icon"} onClick={redirect}>
        <SpiralIcon />
      </ButtonIcon>
    </div>
  );
};

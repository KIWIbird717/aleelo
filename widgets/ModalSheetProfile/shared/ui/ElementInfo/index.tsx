import { FC, ReactNode } from "react";

interface IElementInfoProps {
  info: string
  icon?:ReactNode
}

export const ElementInfo: FC<IElementInfoProps> = (
  {info, icon}
) => {
  return (
    <div className={"relative w-[114px] flex"}>
      <div className={"flex w-full max-w-[48px] h-[48px] bg-red rounded-full z-[1]"}>
        {icon}
      </div>

      <div className={"absolute left-5 w-[90px] h-[48px] flex items-center justify-end bg-mint-650 rounded-[12px] px-[18px] z-[0]"}>
        {info}
      </div>
    </div>
  );
};
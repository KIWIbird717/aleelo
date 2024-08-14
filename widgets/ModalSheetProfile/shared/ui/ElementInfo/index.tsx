import { FC, ReactNode } from "react";

interface IElementInfoProps {
  info: string;
  icon?: ReactNode;
}

export const ElementInfo: FC<IElementInfoProps> = ({ info, icon }) => {
  return (
    <div className={"relative flex w-[114px]"}>
      <div className={"z-[1] flex h-[48px] w-full max-w-[48px] rounded-full bg-red"}>{icon}</div>

      <div
        className={
          "absolute left-5 z-[0] flex h-[48px] w-[90px] items-center justify-end rounded-[12px] bg-mint-650 px-[18px]"
        }
      >
        {info}
      </div>
    </div>
  );
};

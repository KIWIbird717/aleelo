import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { IElement } from "@/shared/lib/redux-store/slices/modal-slice/type";
import { useModal } from "@/shared/lib/hooks/useModal";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";

interface IElementProps {
  item: IElement;
  classNameText?: string;
  classNameIcon?: string;
}

export const Element: FC<IElementProps> = ({ item, classNameText, classNameIcon }) => {
  const { onOpenModal } = useModal();

  return (
    <div className={"relative flex h-[83px] w-[74px] items-end"}>
      <ButtonIcon
        className={twMerge(
          "absolute left-3 top-0 flex h-[48px] w-[48px] items-center justify-center rounded-full shadow-element",
          classNameIcon,
        )}
        onClick={() => onOpenModal("elements", {element: item})}
      >
        {item.icon}
      </ButtonIcon>
      <div
        className={twMerge(
          "flex h-[60px] w-full items-end justify-center rounded-[12px] bg-[rgba(227,241,240,0.50)] px-2 py-[5px]",
        )}
      >
        <p
          className={twMerge("text-[13px] font-normal leading-5 text-shadow-light", classNameText)}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

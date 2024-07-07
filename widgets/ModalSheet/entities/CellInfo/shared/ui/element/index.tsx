import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { IElement } from "@/shared/lib/redux-store/slices/modal-slice/type";
import { useModal } from "@/shared/lib/hooks/useModal";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";
import IElementProps = ElementNS.IElementProps;

export namespace ElementNS {
  // варианты стилей кнопок
  export const variants = {
    first: {
      className:
        "h-[83px] w-[74px]",
      textClassName: "h-[60px] text-[13px] font-normal leading-5 py-[5px]",
    },
    second: {
      className:
        "w-[68px] h-[92px]",
      textClassName: "w-[68px] h-[68px] text-[17px] font-bold leading-6 text-mint !text-shadow-light py-2",
    },
  } as const;

  export const DEFAULT_CLASSES = "flex w-full items-end justify-center rounded-[12px] bg-[rgba(227,241,240,0.50)] px-2";

  export interface IElementProps {
    variants?: keyof typeof variants;
    item: IElement;
    classNameText?: string;
    classNameIcon?: string;
  }
}

export const Element: FC<IElementProps> = (
  {
    item,
    classNameText,
    classNameIcon,
    variants = "first",
  }) => {
  const { onOpenModal } = useModal();

  const CLASSNAME = ElementNS.variants[variants].className;
  const TEXT_CLASSNAME = ElementNS.variants[variants].textClassName;

  const onClickHandler = () => {
    if (variants === "first") {
      onOpenModal("elements", { element: item });
    }
  };

  return (
    <div className={twMerge("relative flex h-[83px] w-[74px] items-end",
      CLASSNAME,
    )}>
      {variants === "first"
        ? <ButtonIcon
          className={twMerge(
            "absolute left-3 top-0 flex h-[48px] w-[48px] items-center justify-center rounded-full shadow-element",
            classNameIcon,
          )}
          onClick={onClickHandler}
        >
          {item.icon}
        </ButtonIcon>
        : <div className={twMerge(
          "absolute left-3 top-0 flex h-[48px] w-[48px] items-center justify-center rounded-full shadow-element",
          classNameIcon,
        )}
        >
          {item.icon}
        </div>
      }
      <div
        className={twMerge(
          ElementNS.DEFAULT_CLASSES,
          TEXT_CLASSNAME,
          // "flex h-[60px] w-full text-[13px] font-normal leading-5 items-end justify-center rounded-[12px] bg-[rgba(227,241,240,0.50)] px-2 py-[5px]",
        )}
      >
        <p
          className={twMerge(
            "text-shadow-light",
            variants === "first" && classNameText,
          )}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

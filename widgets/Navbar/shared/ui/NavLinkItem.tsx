import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { FC, MouseEvent } from "react";
import { INavbarProps, NavItemType } from "../..";
import { cn } from "@/shared/lib/utils/cn";

type NavLinkItemProps = {
  item: NavItemType;
  isDisabled?: boolean;
  diceRoll?: number | null;
  onRedirect?: () => void;
} & Pick<INavbarProps, "onHide" | "isBack">;

export const NavLinkItem: FC<NavLinkItemProps> = (props) => {
  const { item, onHide, isDisabled, diceRoll } = props;
  const locale = useLocale();

  const { push } = useRouter();
  const thirdEl = props.item.id === 2;

  const path = usePathname() || "";

  const pathName = path.split("/").pop();
  const pageName = path.split("/")[2];
  const isCellPage = pageName === "cell";
  const itemLink = item.link;

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log({ itemLink, isDisabled });

    if (thirdEl && onHide) {
      event.preventDefault();
      onHide();
    }

    if (isDisabled) return;

    if (props.onRedirect) {
      return props.onRedirect();
    }

    console.log({ itemLink });
    if (itemLink && itemLink !== "null" && !props.isDisabled) {
      return push(itemLink);
    }

      push(`/${locale}/diceroll`);
  };

  return (
    <button
      className="relative z-[50] grid h-full w-full grid-rows-3 flex-col content-center items-center justify-center"
      onClick={onClickHandler}
    >
      <div
        className={cn(
          "row-span-2 flex h-full w-full items-center justify-center pt-[10px]",
          !isDisabled && "[&>svg>path]:fill-mint-900",
        )}
      >
        {item.icon}
      </div>
      <div
        className={cn(
          "row-start-3 flex justify-center pb-[15px] text-[12px] font-normal leading-4 text-grey",
          thirdEl && "font-semibold",
          pathName === itemLink && "font-bold text-brown-900",
        )}
      >
        {item.name}
      </div>
    </button>
  );
};

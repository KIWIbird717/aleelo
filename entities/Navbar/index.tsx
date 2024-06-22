"use client";

import React, { FC, MutableRefObject, ReactNode, useMemo } from "react";
import { NavbarCard } from "./shared/ui/NavbarCard";
import GameIcon from "@/public/images/svg/navbar/game.svg";
import GameActiveIcon from "@/public/images/svg/navbar/game-active.svg";
import PracticeIcon from "@/public/images/svg/navbar/practice.svg";
import ThrowIcon from "@/public/images/svg/navbar/throw.svg";
import FlowIcon from "@/public/images/svg/navbar/flow.svg";
import ProfileIcon from "@/public/images/svg/navbar/profile.svg";
import BackIcon from "@/public/images/svg/navbar/back.svg";
import { cn } from "@/shared/lib/utils/cn";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useDimensions } from "@/shared/lib/hooks/useDimensions";

const X_MARGINS = 20; // px
const DEVIDE = 0.96279;

type NavItemType = {
  id: number;
  name: string;
  icon: ReactNode;
  link: string;
};
interface INavbarProps {
  isBack?: boolean;
  onHide?: () => void;
  width?: number;
  svgGRef?: MutableRefObject<SVGSVGElement | null>;
  svgRef?: MutableRefObject<SVGSVGElement | null>;
}

export const Navbar: FC<INavbarProps> = ({ svgGRef, svgRef, isBack, onHide }) => {
  const path = usePathname() || "";
  const { width } = useDimensions();

  const pathName = path.split("/")[path.split("/").length - 1];
  const pageName = path.split("/")[2];
  const centerTitle = isBack ? "Вернуться" : "Бросок";
  const locale = useLocale();

  const centerIcon = useMemo(() => (isBack ? <BackIcon /> : <ThrowIcon />), [isBack]);

  const navElements = useMemo<NavItemType[]>(
    () => [
      {
        id: 0,
        name: "Игра",
        icon: pathName === "home" ? <GameActiveIcon /> : <GameIcon />,
        link: `/${locale}/home`,
      },
      {
        id: 1,
        name: "Практики",
        icon: <PracticeIcon />,
        link: "practice",
      },
      {
        id: 2,
        name: centerTitle,
        icon: centerIcon,
        link: "throw",
      },
      {
        id: 3,
        name: "Поток",
        icon: <FlowIcon />,
        link: "flow",
      },
      {
        id: 4,
        name: "Профиль",
        icon: <ProfileIcon />,
        link: "profile",
      },
    ],
    [centerIcon, centerTitle, pathName, locale],
  );

  return (
    <div className="fixed bottom-[-13px] z-[999]">
      <div className="relative">
        <div className="absolute bottom-[20%] mx-[14px] grid h-[59%] w-[90.5%] grid-cols-5 items-center justify-between gap-3 pl-[10px] pr-[15px]">
          {navElements.map((item) => (
            <NavLinkItem key={`nav item: ${item.id}`} item={item} onHide={onHide} isBack={isBack} />
          ))}
        </div>

        <NavbarCard svgGRef={svgGRef} svgRef={svgRef} className="z-[-1]" width={width / DEVIDE} />
      </div>
    </div>
  );
};

type NavLinkItemProps = {
  item: NavItemType;
} & Pick<INavbarProps, "onHide" | "isBack">;

const NavLinkItem: FC<NavLinkItemProps> = (props) => {
  const thirdEl = props.item.id === 2;

  const path = usePathname() || "";

  const pathName = path.split("/")[path.split("/").length - 1];

  const onClickHandler = () => {
    if (thirdEl && props.onHide) {
      props.onHide();
    }
  };

  return (
    <Link
      className="relative grid h-full w-full grid-rows-3 flex-col content-center items-center justify-center"
      onClick={onClickHandler}
      href={props.item.link}
      prefetch={true}
    >
      <div
        className={cn(
          "row-span-2 flex h-full w-full items-center justify-center pt-[10px]",
          thirdEl &&
            "absolute top-[-10px] flex aspect-square h-auto w-full rounded-full bg-gradient-throw pt-0 shadow-throw",
          pathName === props.item.link && "",
          thirdEl && props.isBack && "bg-button-gradient-turquoise shadow-shadowGreen",
        )}
      >
        {props.item.icon}
      </div>
      <div
        className={cn(
          "row-start-3 flex justify-center pb-[15px] text-[12px] font-normal leading-4 text-grey",
          thirdEl && "font-semibold",
          pathName === props.item.link && "font-bold text-brown-900",
        )}
      >
        {props.item.name}
      </div>
    </Link>
  );
};

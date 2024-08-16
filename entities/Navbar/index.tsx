"use client";

import React, { FC, MouseEvent, MutableRefObject, ReactNode, useEffect, useMemo } from "react";
import { NavbarCard } from "./shared/ui/NavbarCard";
import GameIcon from "@/public/images/svg/navbar/game.svg";
import GameActiveIcon from "@/public/images/svg/navbar/game-active.svg";
import PracticeIcon from "@/public/images/svg/navbar/practice.svg";
import ReportIcon from "@/public/images/svg/navbar/report.svg";
import ThrowIcon from "@/public/images/svg/navbar/throw.svg";
import FlowIcon from "@/public/images/svg/navbar/flow.svg";
import ProfileIcon from "@/public/images/svg/navbar/profile.svg";
import BackIcon from "@/public/images/svg/navbar/back.svg";
import { cn } from "@/shared/lib/utils/cn";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useDimensions } from "@/shared/lib/hooks/useDimensions";
import { useNavbar } from "@/shared/lib/hooks/useNavbar";
import { useMessage } from "@/shared/lib/hooks/useMessage";
import { twMerge } from "tailwind-merge";

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
  const locale = useLocale();
  const path = usePathname() || "";
  const { width } = useDimensions();

  const { handleValid, handleDisable, isDisabled, centerButtonIcon, diceRoll } = useNavbar(isBack);

  const { blockTypeLastMessage, blockTypePreLastMessage } = useMessage();

  const pathName = path.split("/").pop();
  const isPracticePage = pathName === "practice";
  console.log({ path });


  useEffect(() => {
    if (isPracticePage) {
      const isDisabledNavbar = blockTypeLastMessage === "chooseSphere";
      const isValid = blockTypeLastMessage === "submitRequestFinal";

      if (isDisabledNavbar) {
        handleDisable();
      } else if (isValid) {
        handleValid();
      }
    }
  }, [
    blockTypeLastMessage,
    blockTypePreLastMessage,
    handleDisable,
    handleValid,
    isDisabled,
    isPracticePage,
    pathName,
  ]);

  const getCenterTitle = useMemo(() => {
    switch (centerButtonIcon) {
      case "backIcon":
        return "Вернуться";
      case "reportActive":
      case "reportUnActive":
        return "Мысли";
      case "diceRollActive":
      case "diceRollUnActive":
        return "Бросок";
      default:
        return "Вернуться";
    }
  }, [centerButtonIcon]);

  const getCenterIcon = useMemo(() => {
    switch (centerButtonIcon) {
      case "backIcon":
        return <BackIcon />;
      case "reportActive":
      case "reportUnActive":
        return <ReportIcon />;
      case "diceRollUnActive":
      case "diceRollActive":
        return <ThrowIcon />;
      default:
        return <BackIcon />;
    }
  }, [centerButtonIcon]);

  const getCenterLink = useMemo(() => {
    switch (centerButtonIcon) {
      case "reportActive":
        return `/${locale}/chat`;
      case "diceRollActive":
        return `/${locale}/diceroll`;
      default:
        return `null`;
    }
  }, [centerButtonIcon, locale]);

  const navElements = useMemo<NavItemType[]>(
    () => [
      {
        id: 0,
        name: "Игра",
        icon:
          pathName === "home" ? (
            <GameActiveIcon />
          ) : (
            <GameIcon
              className={twMerge(isPracticePage && !isDisabled && "[&>path]:fill-mint-900")}
            />
          ),
        link: `/${locale}/home`,
      },
      {
        id: 1,
        name: "Практики",
        icon: <PracticeIcon />,
        link: "chat",
      },
      {
        id: 2,
        name: getCenterTitle,
        icon: getCenterIcon,
        link: getCenterLink,
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
    [pathName, isPracticePage, isDisabled, locale, getCenterTitle, getCenterIcon, getCenterLink],
  );

  return (
    <div className="fixed bottom-[-13px] z-[33]">
      <div className="relative">
        <div
          className="absolute bottom-[20%] mx-[14px] grid h-[59%] w-[90.5%] grid-cols-5 items-center justify-between gap-3 pl-[10px] pr-[15px]">
          {navElements.map((item, index) => {
            let isValidFirstItem;

            if (isPracticePage) {
              isValidFirstItem = index === 0 ? isDisabled : index !== 2;
            } else {
              isValidFirstItem = index === 2 ? isDisabled : false;
            }

            return (
              <NavLinkItem
                key={`nav item: ${item.id}`}
                item={item}
                onHide={onHide}
                isBack={isBack}
                isDisabled={isValidFirstItem}
                diceRoll={index === 2 ? diceRoll : null}
              />
            );
          })}
        </div>

        {/* // нужен для того, чтобы не отображался navbar при открытом modal window*/}
        <NavbarCard
          svgGRef={svgGRef}
          svgRef={svgRef}
          className="z-[-1] pl-[4px] pr-[2px]"
          width={width / DEVIDE}
        />
        {/*<NavbarCard svgGRef={svgGRef} svgRef={svgRef} className="z-[-1]" width={width / DEVIDE} />*/}
      </div>
    </div>
  );
};

type NavLinkItemProps = {
  item: NavItemType;
  isDisabled?: boolean;
  diceRoll?: number | null;
} & Pick<INavbarProps, "onHide" | "isBack">;

const NavLinkItem: FC<NavLinkItemProps> = (props) => {
  const { item, onHide, isDisabled, diceRoll, isBack } = props;
  const locale = useLocale();

  const { push } = useRouter();
  const thirdEl = props.item.id === 2;

  const path = usePathname() || "";

  const pathName = path.split("/").pop();
  const pageName = path.split("/")[2];
  const isCellPage = pageName === "cell";
  const itemLink = item.link;
  const isDiceRollPage = pathName === "diceroll";

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (thirdEl && onHide) {
      event.preventDefault();
      onHide();
    }

    if (!isDisabled) {

      if ((itemLink !== "null" && pathName !== `/${locale}/diceroll`) || isCellPage) {
        push(itemLink);
      }

      // TODO: На данный момент diceroll = null, нужно уточнить, что делать, когда приходит null, сделать кнопку не активной или что

      if (itemLink === `/${locale}/diceroll` && diceRoll !== null) {
        push(`${item.link}?diceRoll=${5}`);
      }
    }
  };

  return (
    <button
      disabled={props.isDisabled}
      type={"button"}
      className="relative grid h-full w-full grid-rows-3 flex-col content-center items-center justify-center"
      onClick={(e) => onClickHandler(e)}
    >
      {/*<Link*/}
      {/*className="relative grid h-full w-full grid-rows-3 flex-col content-center items-center justify-center"*/}
      {/*  onClick={onClickHandler}*/}
      {/*  href={props.item.link}*/}
      {/*  prefetch={true}*/}
      {/*>*/}
      <div
        className={cn(
          "row-span-2 flex h-full w-full items-center justify-center pt-[10px]",
          thirdEl &&
          "absolute top-[-10px] flex aspect-square h-auto w-full rounded-full bg-gradient-throw pt-0 shadow-throw",
          pathName === itemLink && "",
          thirdEl && !isDisabled && "bg-button-gradient-turquoise shadow-shadowGreen",
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
      {/*</Link>*/}
    </button>
  );
};

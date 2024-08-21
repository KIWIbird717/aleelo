"use client";

import { FC, ReactNode, useMemo } from "react";
import { INavbarProps, NavItemType } from "../..";
import GameIcon from "@/public/images/svg/navbar/game.svg";
import GameActiveIcon from "@/public/images/svg/navbar/game-active.svg";
import PracticeIcon from "@/public/images/svg/navbar/practice.svg";
import ReportIcon from "@/public/images/svg/navbar/report.svg";
import ThrowIcon from "@/public/images/svg/navbar/throw.svg";
import FlowIcon from "@/public/images/svg/navbar/flow.svg";
import ProfileIcon from "@/public/images/svg/navbar/profile.svg";
import BackIcon from "@/public/images/svg/navbar/back.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils/cn";
import { CenterButtonIconTypes, useNavbar } from "@/shared/lib/hooks/useNavbar";
import { useLocale } from "next-intl";

const serializeProp = (prop: unknown, defaultProp: boolean) => {
  switch (typeof prop) {
    case "boolean":
      return prop;
    default:
      return defaultProp;
  }
};

const getCenterTitle = (centerButtonIcon: CenterButtonIconTypes) => {
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
};

const getCenterIcon = (iconName: CenterButtonIconTypes, isBack: boolean) => {
  if (isBack) {
    return (
      <MiddleButtonWrapper isActive>
        <BackIcon />
      </MiddleButtonWrapper>
    );
  }

  switch (iconName) {
    case "backIcon":
      return (
        <MiddleButtonWrapper isActive>
          <BackIcon />
        </MiddleButtonWrapper>
      );
    case "reportActive":
      return (
        <MiddleButtonWrapper isActive>
          <ReportIcon />
        </MiddleButtonWrapper>
      );
    case "reportUnActive":
      return (
        <MiddleButtonWrapper isActive={false}>
          <ReportIcon />
        </MiddleButtonWrapper>
      );
    case "diceRollUnActive":
    case "diceRollActive":
      return (
        <MiddleButtonWrapper isActive>
          <ThrowIcon />
        </MiddleButtonWrapper>
      );
    default:
      return (
        <MiddleButtonWrapper isActive>
          <BackIcon />
        </MiddleButtonWrapper>
      );
  }
};

const getCenterLink = (locale: string, centerButtonIcon: CenterButtonIconTypes) => {
  switch (centerButtonIcon) {
    case "reportActive":
      return `/${locale}/chat`;
    case "diceRollActive":
      return `/${locale}/diceroll`;
    default:
      return `null`;
  }
};

type UseNavElementsArgsType = {} & Pick<INavbarProps, "navBarSettings" | "isBack">;

export const useNavElements = (args: UseNavElementsArgsType) => {
  const locale = useLocale();
  const path = usePathname();
  const pathName = path.split("/").pop();
  const isPracticePage = pathName === "practice";
  const { isDisabled, centerButtonIcon } = useNavbar(args.isBack);

  const getMiddleBtnIcon = () => {
    return args.navBarSettings?.[2]?.icon
      ? getCenterIcon(args.navBarSettings?.[2].icon, Boolean(args.isBack))
      : getCenterIcon(centerButtonIcon, Boolean(args.isBack));
  };

  const getMiddleBtnName = () => {
    return args.navBarSettings?.[2]?.name
      ? getCenterTitle(args.navBarSettings?.[2].name)
      : getCenterTitle(centerButtonIcon);
  };

  const navElements = useMemo<NavItemType[]>(
    // eslint-disable-next-line complexity
    () => [
      {
        id: 0,
        name: args.navBarSettings?.[0]?.name || "Игра",
        icon:
          pathName === "home" ? (
            <GameActiveIcon />
          ) : (
            <GameIcon className={cn(isPracticePage && !isDisabled && "[&>path]:fill-mint-900")} />
          ),
        link: args.navBarSettings?.[0]?.link || `/${locale}/home`,
        isActive: serializeProp(args.navBarSettings?.[0]?.isActive, true),
      },
      {
        id: 1,
        name: args.navBarSettings?.[1]?.name || "Практики",
        icon: <PracticeIcon />,
        link: args.navBarSettings?.[1]?.link || "chat",
        isActive: serializeProp(args.navBarSettings?.[1]?.isActive, true),
      },
      {
        id: 2,
        name: getMiddleBtnName(),
        icon: getMiddleBtnIcon(),
        link: args.navBarSettings?.[2]?.link || getCenterLink(locale, centerButtonIcon),
        isActive: serializeProp(args.navBarSettings?.[2]?.isActive, isDisabled),
      },
      {
        id: 3,
        name: args.navBarSettings?.[3]?.name || "Поток",
        icon: <FlowIcon />,
        link: args.navBarSettings?.[3]?.link || "flow",
        isActive: serializeProp(args.navBarSettings?.[3]?.isActive, true),
      },
      {
        id: 4,
        name: args.navBarSettings?.[4]?.name || "Профиль",
        icon: <ProfileIcon />,
        link: args.navBarSettings?.[4]?.link || "profile",
        isActive: serializeProp(args.navBarSettings?.[4]?.isActive, true),
      },
    ],
    [args.navBarSettings, pathName, isPracticePage, isDisabled, locale, centerButtonIcon],
  );

  return navElements;
};

type MiddleButtonWrapperProps = {
  children: ReactNode;
  isActive: boolean;
};
const MiddleButtonWrapper: FC<MiddleButtonWrapperProps> = (props) => {
  return (
    <div
      className={cn(
        "row-span-2 flex h-full w-full items-center justify-center pt-[10px]",
        "absolute top-[-10px] flex aspect-square h-auto w-full rounded-full bg-gradient-throw pt-0 shadow-throw",
        props.isActive && "bg-button-gradient-turquoise shadow-shadowGreen",
      )}
    >
      {props.children}
    </div>
  );
};

"use client";

import React, { FC, MutableRefObject, ReactNode, useEffect } from "react";
import { NavbarCard } from "./shared/ui/NavbarCard";
import { usePathname } from "next/navigation";
import { useDimensions } from "@/shared/lib/hooks/useDimensions";
import { CenterButtonIconTypes, useNavbar } from "@/shared/lib/hooks/useNavbar";
import { useMessage } from "@/shared/lib/hooks/useMessage";
import { NavLinkItem } from "./shared/ui/NavLinkItem";
import { useNavElements } from "./shared/ui/useNavElements";

const DIVIDE = 0.96279;

export type NavItemType = {
  id: 0 | 1 | 2 | 3 | 4;
  name: string;
  icon: ReactNode;
  link: string;
  isActive: boolean;
};

export interface INavbarProps {
  isBack?: boolean;
  onHide?: () => void;
  width?: number;
  svgGRef?: MutableRefObject<SVGSVGElement | null>;
  svgRef?: MutableRefObject<SVGSVGElement | null>;
  /**
   * @example
   * <Navbar
   *  navBarSettings={{
   *    1: {
   *      name: "name",
   *      isActive: false
   *    }
   *    2: {
   *      icon: CenterButtonIconTypes.ReportUnActive,
   *      link: "onboarding/home",
   *      isActive: false,
   *    },
   *  }}
   *  {...otherSettings}
   * />
   */
  navBarSettings?: Partial<
    {
      [key in Exclude<NavItemType["id"], 2>]: Partial<
        Pick<NavItemType, "name" | "link" | "isActive">
      >;
    } & {
      2: Partial<
        {
          icon: CenterButtonIconTypes;
          name: CenterButtonIconTypes;
        } & Pick<NavItemType, "isActive" | "link">
      >;
    }
  >;
}

export const Navbar: FC<INavbarProps> = ({ svgGRef, svgRef, isBack, onHide, ...props }) => {
  const path = usePathname() || "";
  const { width } = useDimensions();
  const { handleValid, handleDisable, isDisabled, diceRoll } = useNavbar(isBack);
  const { blockTypeLastMessage, blockTypePreLastMessage } = useMessage();
  const pathName = path.split("/").pop();
  const isPracticePage = pathName === "practice";
  const navElements = useNavElements({ isBack, navBarSettings: props.navBarSettings });

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

  return (
    <div className="fixed bottom-[-13px] z-[33]">
      <div className="relative">
        <div className="absolute bottom-[20%] mx-[14px] grid h-[59%] w-[90.5%] grid-cols-5 items-center justify-between gap-3 pl-[10px] pr-[15px]">
          {navElements.map((item, index) => {
            let isValidFirstItem;

            if (isPracticePage) {
              isValidFirstItem = index === 0 ? isDisabled : index !== 2;
            } else {
              isValidFirstItem = index === 2 ? isDisabled : false;
            }

            const getActiveStatus = () => {
              // is center button
              if (item.id === 2) {
                if (item.isActive !== undefined) {
                  return !item.isActive;
                }
              } else {
                if (item.isActive !== undefined) {
                  return !item.isActive;
                }
              }
            };

            return (
              <NavLinkItem
                key={`nav item: ${item.id}`}
                item={item}
                onHide={onHide}
                isBack={isBack}
                isDisabled={getActiveStatus() !== undefined ? getActiveStatus() : isValidFirstItem}
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
          width={width / DIVIDE}
        />
      </div>
    </div>
  );
};

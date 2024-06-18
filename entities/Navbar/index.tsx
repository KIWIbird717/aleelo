"use client";

import React, { FC, MutableRefObject, useMemo } from "react";
import { NavbarCardWrapper } from "./shared/ui/NavbarCardWrapper";
import GameIcon from "@/public/images/svg/navbar/game.svg";
import GameActiveIcon from "@/public/images/svg/navbar/game-active.svg";
import PracticeIcon from "@/public/images/svg/navbar/practice.svg";
import ThrowIcon from "@/public/images/svg/navbar/throw.svg";
import FlowIcon from "@/public/images/svg/navbar/flow.svg";
import ProfileIcon from "@/public/images/svg/navbar/profile.svg";
import { cn } from "../../shared/lib/utils/cn";
import { usePathname } from "next/navigation";

const X_MARGINS = 20; // px
const DEVIDE = 0.96279;

interface INavbarProps {
  width: number;
  svgGRef: MutableRefObject<SVGSVGElement | null>;
  svgRef: MutableRefObject<SVGSVGElement | null>;
}

export const Navbar: FC<INavbarProps> = ({ svgGRef, svgRef, width }) => {
  const path = usePathname() || "";

  const pathName = path.split("/")[path.split("/").length - 1];

  const navElements = useMemo(
    () => [
      {
        id: 0,
        name: "Игра",
        icon: pathName === "home" ? <GameActiveIcon /> : <GameIcon />,
        link: "home",
      },
      {
        id: 1,
        name: "Практики",
        icon: <PracticeIcon />,
        link: "practice",
      },
      {
        id: 2,
        name: "Бросок",
        icon: <ThrowIcon />,
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
    [pathName],
  );

  return (
    <div className="fixed bottom-[-13px] z-[999]">
      <div className="relative">
        <div className="absolute bottom-[20%] mx-[14px] flex h-[59%] w-[90.5%] items-center justify-between px-6">
          {navElements.map((el, i) => {
            const thirdEl = el.id === 2;

            return (
              <div
                key={el.id}
                className={cn(
                  "flex flex-col items-center justify-center gap-1.5",
                  thirdEl && "relative bottom-3",
                )}
              >
                <div
                  className={cn(
                    "flex h-[36px] w-[36px] items-center justify-center",
                    thirdEl &&
                      "relative flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gradient-throw shadow-throw",
                    pathName === el.link && "",
                  )}
                >
                  {el.icon}
                </div>
                <div
                  className={cn(
                    "text-[11px] font-normal leading-4 text-grey",
                    thirdEl && "font-semibold",
                    pathName === el.link && "font-bold text-brown-900",
                  )}
                >
                  {el.name}
                </div>
              </div>
            );
          })}
        </div>

        <NavbarCardWrapper
          svgGRef={svgGRef}
          svgRef={svgRef}
          className="z-[-1]"
          width={width / DEVIDE}
        />
      </div>
    </div>
  );
};

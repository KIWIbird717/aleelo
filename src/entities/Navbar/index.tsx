"use client";

import { useDimensions } from "@/shared/lib/hooks/useDimensions";
import React, { FC, MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import { NavbarCardWrapper } from "./shared/ui/NavbarCardWrapper";
import GameIcon from "@/app/images/svg/navbar/game.svg";
import GameActiveIcon from "@/app/images/svg/navbar/game-active.svg";
import PracticeIcon from "@/app/images/svg/navbar/practice.svg";
import ThrowIcon from "@/app/images/svg/navbar/throw.svg";
import FlowIcon from "@/app/images/svg/navbar/flow.svg";
import ProfileIcon from "@/app/images/svg/navbar/profile.svg";
import { cn } from "@/shared/lib/utils/cn";
import { usePathname } from "next/navigation";

const X_MARGINS = 20; // px
const DEVIDE = 0.96279;

interface INavbarProps {
  width: number;
  svgGRef: MutableRefObject<SVGSVGElement | null>
  svgRef: MutableRefObject<SVGSVGElement | null>
}


export const Navbar:FC<INavbarProps> = ({svgGRef, svgRef, width}) => {

  const pathName = usePathname().split("/")[usePathname().split("/").length - 1];

  const navElements = useMemo(
    () => [
      {
        id: 0,
        name: "Игра",
        icon: pathName === "home" ? <GameActiveIcon /> : <GameIcon />,
        link: "home",
      }, {
        id: 1,
        name: "Практики",
        icon: <PracticeIcon />,
        link: "practice",
      }, {
        id: 2,
        name: "Бросок",
        icon: <ThrowIcon />,
        link: "throw",
      }, {
        id: 3,
        name: "Поток",
        icon: <FlowIcon />,
        link: "flow",
      }, {
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
        <div className="absolute bottom-[20%] mx-[14px] flex w-[90.5%] h-[59%] items-center justify-between px-6">
          {navElements.map((el, i) => {
            const thirdEl = el.id === 2;

            return <div key={el.id}
                        className={cn("flex flex-col items-center justify-center gap-1.5",
                          thirdEl && "relative bottom-3",
                        )}
            >
              <div
                className={cn("w-[36px] h-[36px] flex items-center justify-center",
                  thirdEl && "flex items-center justify-center h-[58px] w-[58px] rounded-full relative bg-gradient-throw shadow-throw",
                  pathName === el.link && "",
                )}>
                {el.icon}
              </div>
              <div className={cn("text-grey text-[11px] font-normal leading-4",
                thirdEl && "font-semibold",
                pathName === el.link && "text-brown-900 font-bold",
              )}>
                {el.name}
              </div>
            </div>;
          })}
        </div>

        <NavbarCardWrapper svgGRef={svgGRef}
                           svgRef={svgRef}
                           className="z-[-1]"
                           width={width / DEVIDE}
        />

      </div>
    </div>
  );
};

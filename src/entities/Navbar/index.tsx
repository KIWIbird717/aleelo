"use client";

import { useDimensions } from "@/shared/lib/hooks/useDimensions";
import React from "react";
import { NavbarCardWrapper } from "./shared/ui/NavbarCardWrapper";

const X_MARGINS = 20; // px
const DEVIDE = 0.96279;
export const Navbar = () => {
  const { width } = useDimensions();
  return (
    <div className="fixed bottom-[-13px]">
      <div className="relative">
        <div className="absolute mx-[14px] flex h-full w-full items-center">
          {/** Тут контент навбара */}
          huh
        </div>
        <NavbarCardWrapper className="z-[-1]" width={width / DEVIDE} />
      </div>
    </div>
  );
};

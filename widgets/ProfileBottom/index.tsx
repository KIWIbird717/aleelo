"use client";

import React, { FC } from "react";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { ModalSheetProfile } from "@/widgets/ModalSheetProfile";

interface IProfileBottomProps {
}

export const ProfileBottom: FC<IProfileBottomProps> = () => {

  const { width, svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();
  return (
    <>
      <ModalSheetProfile svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
      <Navbar svgGRef={svgGRef} svgRef={svgRef} />
    </>
  );
};
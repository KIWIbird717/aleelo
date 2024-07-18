"use client";

import React, { FC } from "react";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { ModalSheetProfile } from "@/widgets/ModalSheetProfile";
import { IGameStatistics } from "@/shared/lib/types/game";

interface IProfileBottomProps {
  statistics: IGameStatistics
}

export const ProfileBottom: FC<IProfileBottomProps> = (
  {statistics}
) => {

  const { width, svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();
  return (
    <>
      <ModalSheetProfile svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} statistics={statistics} />
      <Navbar svgGRef={svgGRef} svgRef={svgRef} />
    </>
  );
};
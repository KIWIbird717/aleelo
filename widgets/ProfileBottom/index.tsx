"use client"

import React, { FC } from "react";
import { ModalSheet } from "@/widgets/ModalSheet";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { useBackground } from "@/shared/lib/hooks/useBackground";

interface IProfileBottomProps {
}

export const ProfileBottom: FC<IProfileBottomProps> = () => {

  const { width, svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();
  return (
    <>
      <ModalSheet svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
      <Navbar svgGRef={svgGRef} svgRef={svgRef} />
    </>
  );
};
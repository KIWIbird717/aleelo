"use client"

import React, { FC, useEffect, useRef, useState } from "react";
import { ModalSheet } from "@/widgets/ModalSheet";
import { Navbar } from "@/entities/Navbar";
import { useDimensions } from "@/shared/lib/hooks/useDimensions";
import { serverApi } from "@/shared/lib/axios";

interface IHomePageProps {
}

export const HomePage: FC<IHomePageProps> = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const svgGRef = useRef<SVGSVGElement | null>(null);
  const { width, height } = useDimensions();
  const [svgWidth, setSvgWidth] = useState<number | null>(null);
  const [svgHeight, setSvgHeight] = useState<number | null>(null);
  const padding = (width - Number(svgWidth)) / 2

  useEffect(() => {
    if (svgGRef.current) {
      setSvgWidth(svgGRef.current.getBoundingClientRect().width);
    }
    if (svgRef.current) {
      setSvgHeight(svgRef.current.getBoundingClientRect().height);
    }
  }, [width, height]);

  useEffect(() => {
    (async () => {
      const {data} = await serverApi.get("/game/steps")
      console.log({data});
    })()
  }, []);

  return (
    <div className={"!bg-red-700 relative"}>
      <ModalSheet svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
      <Navbar svgGRef={svgGRef} svgRef={svgRef} width={width} />
    </div>
  );
};
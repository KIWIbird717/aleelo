"use client";

import React, { useEffect, useRef, useState } from "react";
import { ModalSheet } from "@/widgets/ModalSheet";
import { Navbar } from "@/entities/Navbar";
import { useDimensions } from "@/shared/lib/hooks/useDimensions";
import { serverApi } from "@/shared/lib/axios";
import { Map } from "@/entities/Map";
import { View } from "@/shared/layout/View";
import useRequest from "@/shared/lib/hooks/useRequest";
import { useBackground } from "@/shared/lib/hooks/useBackground";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";

export default function HomePage() {
  useBackground("gradient");
  usePreventOnSwipeWindowClose(true);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const svgGRef = useRef<SVGSVGElement | null>(null);
  const { width, height } = useDimensions();
  const [svgWidth, setSvgWidth] = useState<number | null>(null);
  const [svgHeight, setSvgHeight] = useState<number | null>(null);
  const padding = (width - Number(svgWidth)) / 2;

  useEffect(() => {
    if (svgGRef.current) {
      setSvgWidth(svgGRef.current.getBoundingClientRect().width);
    }
    if (svgRef.current) {
      setSvgHeight(svgRef.current.getBoundingClientRect().height);
    }
  }, [width, height]);

  useRequest(async () => {
    const { data } = await serverApi.get("/game/steps");
    console.log({ data });
  }, []);

  return (
    <View>
      <div style={{ paddingBottom: 200 }}>
        <Map />
        <ModalSheet svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
        <Navbar svgGRef={svgGRef} svgRef={svgRef} width={width} />
      </div>
    </View>
  );
}

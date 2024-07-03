"use client";

import React from "react";
import { ModalSheet } from "@/widgets/ModalSheet";
import { Navbar } from "@/entities/Navbar";
import { serverApi } from "@/shared/lib/axios";
import { Map } from "@/entities/Map";
import { View } from "@/shared/layout/View";
import useRequest from "@/shared/lib/hooks/useRequest";
import { useBackground } from "@/shared/lib/hooks/useBackground";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { Logger } from "@/shared/lib/utils/logger/Logger";

export default function HomePage() {
  const logger = new Logger(HomePage.name);
  useBackground("gradient");
  // usePreventOnSwipeWindowClose(true);

  const { width, svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();

  useRequest(async () => {
    const { data } = await serverApi.get("/game/steps");
    console.log({ data });
  }, []);

  logger.debug(width, height);

  return (
    <View>
      <div style={{ paddingBottom: 200 }}>
        <Map />
        <ModalSheet svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
        <Navbar svgGRef={svgGRef} svgRef={svgRef} />
      </div>
    </View>
  );
}

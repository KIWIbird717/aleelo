"use client";

import React from "react";
import { ModalSheet } from "@/widgets/ModalSheet";
import { Navbar } from "@/entities/Navbar";
import { Map } from "@/entities/Map";
import { View } from "@/shared/layout/View";
import useRequest from "@/shared/lib/hooks/useRequest";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { useCurrentGame } from "@/shared/lib/hooks/useCurrentGame";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";

export default function HomePage() {
  const logger = new Logger("HomePage");

  const { width, svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();
  const currentGame = useCurrentGame();

  useRequest(async () => {
    logger.debug({ currentGame: currentGame.get() });
  }, []);

  return (
    <View backgroundEffect="gradient">
      <div style={{ paddingBottom: 200 }}>
        <Map />
        <ModalSheet svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
        <Navbar svgGRef={svgGRef} svgRef={svgRef} />
      </div>
    </View>
  );
}

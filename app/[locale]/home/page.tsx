"use client";

import React from "react";
import { ModalSheet } from "@/widgets/ModalSheet";
import { Navbar } from "@/entities/Navbar";
import { serverApi } from "@/shared/lib/axios";
import { Map } from "@/entities/Map";
import { View } from "@/shared/layout/View";
import useRequest from "@/shared/lib/hooks/useRequest";
import { useBackground } from "@/shared/lib/hooks/useBackground";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { useCurrentGame } from "@/shared/lib/hooks/useCurrentGame";

export default function HomePage() {
  const logger = new Logger("HomePage");
  useBackground("gradient");

  const { width, svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();
  const currentGame = useCurrentGame();

  useRequest(async () => {
    // await serverApi.post("game/make-step");
    // const { data } = await serverApi.get("/game/steps", { params: { id: currentGame.get()?.id } });
    // console.log({ data, game: currentGame.get() });
  }, []);

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

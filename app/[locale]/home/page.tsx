"use client";

import React, { useEffect } from "react";
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
import { useTelegram } from "@/shared/lib/hooks/useTelegram";

export default function HomePage() {
  const logger = new Logger("HomePage");
  useBackground("gradient");
  const telegram = useTelegram();

  useEffect(() => {
    fetch("/api/set-cookies ", {
      method: "POSt",
      body: JSON.stringify({
        cookies: [
          {
            name: "jwt",
            value: "huh",
            sameSite: "none",
            secure: false,
            domain: "https://c36e9febfb56b7f6.ngrok.app",
          },
        ],
      }),
    });
  }, [telegram]);

  const { width, svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();
  const currentGame = useCurrentGame();

  useRequest(async () => {
    // await serverApi.post("game/make-step");
    // const { data } = await serverApi.get("/game/steps", { params: { id: currentGame.get()?.id } });
    // console.log({ data, game: currentGame.get() });
  }, []);

  return (
    <div>
      <div style={{ paddingBottom: 200 }}>
        <Map />
        <ModalSheet svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
        <Navbar svgGRef={svgGRef} svgRef={svgRef} />
      </div>
    </div>
  );
}

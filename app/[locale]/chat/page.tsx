"use client";

import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import { Chat } from "@/widgets/Chat";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { useRouter } from "next/navigation";
import { useCurrentGame } from "@/shared/lib/hooks/useCurrentGame";
import useRequest from "@/shared/lib/hooks/useRequest";
import { serverApi } from "@/shared/lib/axios";
import { Logger } from "@/shared/lib/utils/logger/Logger";

interface IChatPageProps {}

const ChatPage: NextPage<IChatPageProps> = () => {
  const logger = new Logger("ChatPage");
  const { height, svgGRef, svgRef, svgHeight } = useSizes();
  const { back } = useRouter();
  const currentGame = useCurrentGame();

  useRequest(async () => {
    logger.debug(currentGame.get());
    const response = await serverApi.get("game/practices", {
      params: {
        gameId: currentGame.get()?.id,
      },
    });
  }, []);

  return (
    <View className={"flex flex-col"} backgroundEffect={"gradient"}>
      <Chat svgHeight={svgHeight!} height={height} />
      <Navbar svgRef={svgRef} svgGRef={svgGRef} isBack={true} onHide={() => back()} />
    </View>
  );
};
export default ChatPage;

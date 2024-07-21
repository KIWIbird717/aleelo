"use client";

import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import { Chat } from "@/widgets/Chat";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { usePathname, useRouter } from "next/navigation";
import { useCurrentGame } from "@/shared/lib/hooks/useCurrentGame";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { useEffect } from "react";
import { ChatService} from "@/shared/lib/services/chat";

interface IPracticesPageProps {}

const PracticesPage: NextPage<IPracticesPageProps> = () => {
  const logger = new Logger("ChatPage");
  const { height, svgGRef, svgRef, svgHeight } = useSizes();
  const { back } = useRouter();
  const {get} = useCurrentGame()
  const currentGame = get()

  const pathname = usePathname()

  console.log("PracticePage");
  console.log({pathname});

  useEffect(() => {
    (async () => {
      await ChatService.sendPracticeMessage(currentGame?.practiceId!)
      const {data} = await ChatService.getMessages(currentGame?.chatId!, {offset: 0, limit: 50})
      console.log({data});
    })()
  }, []);

  return (
    <View className={"flex flex-col"} backgroundEffect={"gradient"}>
      <Chat svgHeight={svgHeight!} height={height} />
      <Navbar svgRef={svgRef} svgGRef={svgGRef} isBack={true} onHide={() => back()} />
    </View>
  );
};
export default PracticesPage;

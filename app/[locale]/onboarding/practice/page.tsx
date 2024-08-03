"use client";

import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import { Chat } from "@/widgets/Chat";
import { Navbar } from "@/entities/Navbar";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { useRouter } from "next/navigation";
import { useCurrentGame } from "@/shared/lib/hooks/useCurrentGame";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { useEffect } from "react";
import { ChatService } from "@/shared/lib/services/chat";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { useMessage } from "@/shared/lib/hooks/useMessage";


export interface IOptions {
  message: string;
  // value: GameChatBlockUserResponseEnum | GameChatBlockEnum
  key: GameChatBlockUserResponseEnum
}



interface IPracticesPageProps {}

const PracticesPage: NextPage<IPracticesPageProps> = () => {
  const logger = new Logger("ChatPage");
  const { height, svgGRef, svgRef, svgHeight } = useSizes();

  const messageObj = useMessage();
  const {fetchMessages} = messageObj

  const { choose, setChoose, onChangeChoose } = messageObj;
  const { back } = useRouter();
  const { get } = useCurrentGame();
  const currentGame = get();

  useEffect(() => {
    (async () => {
      if (choose) {
        if (!currentGame?.id) return;

        await ChatService.postMessage({
          blockType: messageObj.messages[messageObj.messages.length - 2].blockType,
          chatId: currentGame.chatId,
          response: choose.key,
          message: choose.message,
        });

        setChoose(null);

        await ChatService.sendPracticeMessage(currentGame?.practiceId!);
        const { data } = await ChatService.getMessages(currentGame?.chatId!, {
          offset: 0,
          limit: 50,
        });

        fetchMessages(data.reverse())
      }
    })();
  }, [choose, currentGame?.chatId, currentGame?.id, setChoose]);

  useEffect(() => {
    (async () => {
      await ChatService.sendPracticeMessage(currentGame?.practiceId!);
      const { data } = await ChatService.getMessages(currentGame?.chatId!, {
        offset: 0,
        limit: 50,
      });

      fetchMessages(data.reverse())
    })();
  }, [currentGame?.chatId, currentGame?.practiceId]);

  return (
    <View className={"flex flex-col"} backgroundEffect={"gradient"}>
      <Chat
        svgHeight={svgHeight!}
        height={height}
        onChangeChoose={onChangeChoose}
        messageObj={messageObj}
      />
      <Navbar svgRef={svgRef} svgGRef={svgGRef} isBack={true} onHide={() => back()} />
    </View>
  );
};
export default PracticesPage;

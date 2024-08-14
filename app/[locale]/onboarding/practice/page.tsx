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
import { useOption } from "@/shared/lib/hooks/useOption";

export interface IOptions {
  message: string;
  key: GameChatBlockUserResponseEnum;
}

interface IPracticesPageProps {}

const PracticesPage: NextPage<IPracticesPageProps> = () => {
  const logger = new Logger("ChatPage");
  const { height, svgGRef, svgRef, svgHeight } = useSizes();

  const messageObj = useMessage();
  const { optionState, onChangeChoose, hideInput } = useOption();
  const { fetchMessages } = messageObj;

  const { back } = useRouter();
  const { get } = useCurrentGame();
  const currentGame = get();

  const handleFetchMessages = async () => {
    try {
      await ChatService.sendPracticeMessage(currentGame?.practiceId!);

      const { data } = await ChatService.getMessages(currentGame?.chatId!, {
        offset: 0,
        limit: 50,
      });

      fetchMessages(data.reverse());
    } catch (error) {
      logger.error(error);
    } finally {
      onChangeChoose(null, null);
    }
  };

  useEffect(() => {
    (async () => {
      if (optionState.key && optionState.message) {
        if (!currentGame?.id) return;

        const lastMessage = messageObj.messages[messageObj.messages.length - 1];
        const preLastMessage = messageObj.messages[messageObj.messages.length - 2];

        if (lastMessage.blockType === "requestExamplesList" && optionState.isShowInput) {
          onChangeChoose(null, null);
          return;
        }

        try {
          const lastMessage = messageObj.messages[messageObj.messages.length - 1];
          const preLastMessage = messageObj.messages[messageObj.messages.length - 2];

          await ChatService.postMessage({
            blockType: (lastMessage || preLastMessage).blockType,
            chatId: currentGame.chatId,
            response: optionState.key,
            message: optionState.message,
          });

          try {
            await handleFetchMessages();
          } catch (error) {
            logger.error(error);
          }
        } catch (error) {
          logger.error(error);
        } finally {
          onChangeChoose(null, null);
        }
      }
    })();
  }, [currentGame?.chatId, currentGame?.id, onChangeChoose, optionState.key, optionState.message]);

  useEffect(() => {
    (async () => {
      await handleFetchMessages();
    })();
  }, [currentGame?.chatId, currentGame?.practiceId]);

  return (
    <View className={"flex flex-col"} backgroundEffect={"gradient"}>
      <Chat svgHeight={svgHeight!} height={height} messageObj={messageObj} />
      <Navbar svgRef={svgRef} svgGRef={svgGRef} isBack={true} onHide={() => back()} />
    </View>
  );
};
export default PracticesPage;

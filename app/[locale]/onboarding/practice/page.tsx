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
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";
import { useMessage } from "@/shared/lib/hooks/useMessage";

export interface IOptions {
  title: string;
  value: GameChatBlockUserResponseEnum;
}

const options: IOptions[] = [
  {
    title: "Слава",
    value: GameChatBlockUserResponseEnum.chooseSphereGlory,
  }, {
    title: "Семья",
    value: GameChatBlockUserResponseEnum.chooseSphereFamily,
  }, {
    title: "Здоровье",
    value: GameChatBlockUserResponseEnum.chooseSphereHealth,
  }, {
    title: "Деньги",
    value: GameChatBlockUserResponseEnum.chooseSphereMoney,
  }, {
    title: "Любовь",
    value: GameChatBlockUserResponseEnum.chooseSphereLove,
  }, {
    title: "Духовность",
    value: GameChatBlockUserResponseEnum.chooseSphereSpirituality,
  }, {
    title: "Самореализация",
    value: GameChatBlockUserResponseEnum.chooseSphereSelfRealisation,
  },
];

interface IPracticesPageProps {
}

const PracticesPage: NextPage<IPracticesPageProps> = () => {
  const logger = new Logger("ChatPage");

  const messageObj = useMessage();
  const {
    choose,
    setChoose,
    onChangeChoose,
  } = messageObj;

  const { height, svgGRef, svgRef, svgHeight } = useSizes();
  const { back } = useRouter();
  const { get } = useCurrentGame();
  const currentGame = get();

  useEffect(() => {
    (async () => {
      if (choose) {
        const { data: PostMessageResult } = await ChatService.postMessage({
          blockType: GameChatBlockEnum.chooseSphere,
          chatId: "af99157b-88ba-4c0b-b2b9-91e812f7e355",
          response: choose.value,
          message: choose.title,
        });

        setChoose(null);

        console.log({ PostMessageResult });
      }

    })();
  }, [choose, currentGame?.chatId, setChoose]);

  useEffect(() => {
    (async () => {
      // await ChatService.resetGame()

      await ChatService.sendPracticeMessage(currentGame?.practiceId!);
      const { data } = await ChatService.getMessages(currentGame?.chatId!, { offset: 0, limit: 50 });
      console.log({ data });
    })();
  }, [currentGame?.chatId, currentGame?.practiceId, choose]);


  return (
    <View className={"flex flex-col"} backgroundEffect={"gradient"}>
      <Chat svgHeight={svgHeight!}
            height={height}
            options={options}
            onChangeChoose={onChangeChoose}
            messageObj={messageObj}
      />
      <Navbar svgRef={svgRef} svgGRef={svgGRef} isBack={true} onHide={() => back()} />
    </View>
  );
};
export default PracticesPage;

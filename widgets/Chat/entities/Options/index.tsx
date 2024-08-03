import { FC, useMemo } from "react";
import { Option } from "@/widgets/Chat/shared/Option";
import { IOptions } from "@/app/[locale]/onboarding/practice/page";
import localesRU from "@/public/locales/ru.json";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { IChatMessage } from "@/shared/lib/types/chat-message";

interface IOptionsProps {
  messages: IChatMessage[];
  onChangeChoose: (choose: IOptions) => void;
}

export const Options: FC<IOptionsProps> = (
  {
    messages,
    onChangeChoose,
  },
) => {

  const optionsSphere: IOptions[] = useMemo(() => [
    {
      message: localesRU["chat_message_user_response_chooseSphereGlory"],
      key: GameChatBlockUserResponseEnum.chooseSphereGlory,
    },
    {
      message: localesRU["chat_message_user_response_chooseSphereFamily"],
      key: GameChatBlockUserResponseEnum.chooseSphereFamily,
    },
    {
      message: localesRU["chat_message_user_response_chooseSphereHealth"],
      key: GameChatBlockUserResponseEnum.chooseSphereHealth,
    },
    {
      message: localesRU["chat_message_user_response_chooseSphereMoney"],
      key: GameChatBlockUserResponseEnum.chooseSphereMoney,
    },
    {
      message: localesRU["chat_message_user_response_chooseSphereLove"],
      key: GameChatBlockUserResponseEnum.chooseSphereLove,
    },
    {
      message: localesRU["chat_message_user_response_chooseSphereSpirituality"],
      key: GameChatBlockUserResponseEnum.chooseSphereSpirituality,
    },
    {
      message: localesRU["chat_message_user_response_chooseSphereSelfRealisation"],
      key: GameChatBlockUserResponseEnum.chooseSphereSelfRealisation,
    },
  ], []);

  const optionsThreeVariant: IOptions[] = useMemo(() => [
    {
      message: localesRU["chat_message_iAmReadyToComposeRequest"],
      key: GameChatBlockUserResponseEnum.submitRequest,
    },
    {
      message: localesRU["chat_message_submitRequestExplain"],
      key: GameChatBlockUserResponseEnum.submitRequestExplain,
    },
    {
      message: localesRU["chat_message_chooseAnotherSphere"],
      key: GameChatBlockUserResponseEnum.chooseAnotherSphere,
    },
  ], []);

  const optionsIDontKnowWhatWrite: IOptions[] = useMemo(() => [
    {
      message: localesRU["chat_message_showRequestExamples"],
      key: GameChatBlockUserResponseEnum.showRequestExamples,
    },
    {
      message: localesRU["chat_message_iAmReadyToComposeRequest"],
      key: GameChatBlockUserResponseEnum.iAmReadyToComposeRequest,
    },
  ], []);

  const optionsExamples: IOptions[] = useMemo(() => [
    {
      message: localesRU["chat_message_iAmReadyToComposeRequest"],
      key: GameChatBlockUserResponseEnum.iAmReadyToComposeRequest,
    },
  ], []);

  return (
    <>
      {!!messages && messages[messages.length - 1]?.blockType === ("chooseSphere" || "chooseAnotherSphere") &&
        <Option options={optionsSphere}
                onChangeChoose={onChangeChoose}
        />
      }

      {!!messages && messages[messages.length - 1]?.blockType === "submitRequest" &&
        <Option options={optionsThreeVariant}
                onChangeChoose={onChangeChoose}
        />
      }

      {!!messages && messages[messages.length - 1]?.blockType === "submitRequestExplain" &&
        <Option options={optionsIDontKnowWhatWrite}
                onChangeChoose={onChangeChoose}
        />
      }

      {!!messages && messages[messages.length - 1]?.blockType === "requestExamplesList" &&
        <Option options={optionsExamples}
                onChangeChoose={onChangeChoose}
        />
      }
    </>
  );
};
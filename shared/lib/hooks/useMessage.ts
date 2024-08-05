import { ChatSlice } from "@/shared/lib/redux-store/slices/chat-slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-store/hooks";
import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import { IOptions } from "@/app/[locale]/onboarding/practice/page";
import { IChatMessage } from "@/shared/lib/types/chat-message";
import { IMessageSender } from "@/shared/lib/types/game-chat-message";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { OptionSlice } from "@/shared/lib/redux-store/slices/option-slice/optionSlice";
import { useOption } from "@/shared/lib/hooks/useOption";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";

export interface IUseMessage {
  messages: IChatMessage[];
  isFocused: boolean;
  input: string;
  blockTypeLastMessage: GameChatBlockEnum,
  blockTypePreLastMessage: GameChatBlockEnum,
  // choose: IOptions | null;
  sendMessage: () => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onFocus: () => void;
  onChangeValue: (value: string) => void;
  // onChangeChoose: (choose: IOptions) => void;
  // setChoose: Dispatch<SetStateAction<IOptions | null>>;
}


export const useMessage = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  // const [choose, setChoose] = useState<IOptions | null>(null);


  const { messages } = useAppSelector((state) => state.chat);
  const {hideInput, hideOption} = useOption()

  const onBlur = () => setIsFocused(false);
  const onFocus = () => setIsFocused(true);

  const onChangeValue = (value: string) => setInput(value);
  // const onChangeChoose = (choose: IOptions) => {
  //   // addMessage(choose);
  //    setChoose(choose);
  // };

  const fetchMessages = (message: IChatMessage[]) => {
    dispatch(ChatSlice.getMessages(message));
  };

  const addMessage = (choose: IOptions) => {

  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    hideInput()
    hideOption()
    //TODO: исправить
    dispatch(OptionSlice.setOption({ key: GameChatBlockUserResponseEnum.submitRequest, message: input }));

    setInput("");
    onBlur();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
      event.currentTarget.blur();
    }
  };

  const blockTypeLastMessage = messages[messages.length - 1]?.blockType
  const blockTypePreLastMessage = messages[messages.length - 2]?.blockType

  return {
    messages,
    isFocused,
    input,
    sendMessage,
    handleKeyDown,
    onBlur,
    onFocus,
    onChangeValue,
    fetchMessages,
    blockTypeLastMessage,
    blockTypePreLastMessage,
    // choose,
    // onChangeChoose,
    // setChoose,
  };
};
import { ChatSlice } from "@/shared/lib/redux-store/slices/chat-slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-store/hooks";
import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import { IOptions } from "@/app/[locale]/onboarding/practice/page";
import { IChatMessage } from "@/shared/lib/types/chat-message";
import { IMessageSender } from "@/shared/lib/types/game-chat-message";

export interface IUseMessage {
  messages: IChatMessage[];
  isFocused: boolean;
  input: string;
  choose: IOptions | null;
  sendMessage: () => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onFocus: () => void;
  onChangeValue: (value: string) => void;
  onChangeChoose: (choose: IOptions) => void;
  setChoose: Dispatch<SetStateAction<IOptions | null>>;
}


export const useMessage = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [choose, setChoose] = useState<IOptions | null>(null);

  const { messages } = useAppSelector((state) => state.chat);

  const onBlur = () => setIsFocused(false);
  const onFocus = () => setIsFocused(true);

  const onChangeValue = (value: string) => setInput(value);
  const onChangeChoose = (choose: IOptions) => {
    // addMessage(choose);
    setChoose(choose);
  };

  const fetchMessages = (message: IChatMessage[]) => {
    dispatch(ChatSlice.getMessages(message));
  };

  const addMessage = (choose: IOptions ) => {
    // if (input.trim() === "") return;

    const newMessage = {
      id: new Date().toISOString(),
      created: new Date(),
      sender: "user" as IMessageSender.User,
      key: choose.key as any,
    };

    dispatch(ChatSlice.addMessage(newMessage as IChatMessage));
  };

  const sendMessage = () => {
    addMessage(input, ""); //TODO: исправить
    setInput("");
    onBlur();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
      event.currentTarget.blur();
    }
  };

  return {
    messages,
    isFocused,
    input,
    choose,
    sendMessage,
    handleKeyDown,
    onBlur,
    onFocus,
    onChangeValue,
    onChangeChoose,
    setChoose,
    fetchMessages,
  };
};
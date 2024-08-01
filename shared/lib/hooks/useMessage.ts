import { IMessage } from "@/shared/lib/redux-store/slices/chat-slice/type";
import { ChatSlice } from "@/shared/lib/redux-store/slices/chat-slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-store/hooks";
import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import { IOptions } from "@/app/[locale]/onboarding/practice/page";

export interface IUseMessage {
  messages: IMessage[]
  isFocused: boolean
  input: string
  choose: IOptions | null
  sendMessage: () => void
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
  onBlur: () => void
  onFocus: () => void
  onChangeValue: (value: string) => void
  onChangeChoose: (choose: IOptions) => void
  setChoose: Dispatch<SetStateAction<IOptions | null>>
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
    addMessage(choose.title);
    setChoose(choose);
  };

  const addMessage = (input: string) => {
    if (input.trim() === "") return;

    const newMessage: IMessage = {
      id: new Date().toISOString(),
      text: input,
      createdAt: new Date(),
      type: "user",
      imageUrl: "",
    };

    dispatch(ChatSlice.addMessage(newMessage));
  };

  const sendMessage = () => {
    addMessage(input);
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
  };
};
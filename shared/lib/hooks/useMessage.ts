import { IMessage } from "@/shared/lib/redux-store/slices/chat-slice/type";
import { ChatSlice } from "@/shared/lib/redux-store/slices/chat-slice/userSlice";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-store/hooks";

export const useMessage = () => {
  const { messages } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

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
  }

  return {
    messages,
    addMessage,
  }
};
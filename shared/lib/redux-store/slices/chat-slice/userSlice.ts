import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IChatSlice, IMessage } from "@/shared/lib/redux-store/slices/chat-slice/type";

export namespace ChatSlice {
  const initialState: IChatSlice = {
    messages: [
      {
        id: new Date().toISOString(),
        text: "Сейчас важный момент игры",
        createdAt: new Date(),
        type: "eft",
        imageUrl: "",
      },
      {
        id: new Date().toISOString(),
        text: "Закрой глаза и подумай, о какой сфере жизни твои мысли?",
        createdAt: new Date(),
        type: "eft",
        imageUrl: "",
      }
    ]
  };

  export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
      addMessage: (state, action: PayloadAction<IMessage>) => {
        state.messages.push(action.payload);
      },
      getMessages: (state, action: PayloadAction<IMessage[]>) => {
        state.messages = action.payload;
      },
    },
  });

  export const { getMessages, addMessage } = chatSlice.actions;
  export const chatReducer = chatSlice.reducer;
  export type Type = IChatSlice;
}

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IChatSlice, IMessage } from "@/shared/lib/redux-store/slices/chat-slice/type";

export namespace ChatSlice {
  const initialState: IChatSlice = {
    messages: []
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

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IChatSlice } from "@/shared/lib/redux-store/slices/chat-slice/type";
import { IChatMessage } from "@/shared/lib/types/chat-message";

export namespace ChatSlice {
  const initialState: IChatSlice = {
    messages: []
  };

  export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
      getMessages: (state, action: PayloadAction<IChatMessage[]>) => {
        const newMessages = action.payload;

        newMessages.forEach(newMessage => {
          const exists = state.messages.some(message => message.id === newMessage.id);
          if (!exists) {
            state.messages.push(newMessage);
          }
        });
      },
    },
  });

  export const { getMessages } = chatSlice.actions;
  export const chatReducer = chatSlice.reducer;
  export type Type = IChatSlice;
}
